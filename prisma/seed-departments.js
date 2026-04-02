const { PrismaClient } = require("@prisma/client");
const he = require("he");

const prisma = new PrismaClient();

// ---------------------------------------------------------------------------
// Department sections data
// Each entry: { department_slug, position, title, content (HTML), image_url,
//               image_alt, image_credit }
// Content is raw HTML (paragraphs, lists, links). It will be he.encode()'d
// before insertion so that it matches the article storage pattern
// (he.escape on save, he.decode on read).
// ---------------------------------------------------------------------------

const sections = [
  // ========================================================================
  // AIN (4 sections)
  // ========================================================================
  {
    department_slug: "ain",
    position: 0,
    title: "L'Ain",
    content:
      `<p>Le d\u00e9partement de l'Ain (5 762 km\u00b2), au nord de la r\u00e9gion AuRA, pr\u00e9sente deux grandes entit\u00e9s, la cha\u00eene du Jura, zone de collines et de montagne \u00e0 l'est, et les plaines et plateaux \u00e0 l'ouest. Au nord-est, le pays de Gex est un secteur de pi\u00e9mont inclin\u00e9 vers le bassin genevois.</p>` +
      `<p>Le Rh\u00f4ne et la Sa\u00f4ne encadrent le d\u00e9partement \u00e0 l'est, au sud et \u00e0 l'ouest, tandis que la rivi\u00e8re d'Ain le traverse. Ces trois cours d'eau et leurs affluents offrent les milieux lotiques tandis que les \u00e9tangs de Bresse et de Dombes, les lacs du Bugey et les ballasti\u00e8res de la plaine de l'Ain constituent les milieux lentiques.</p>` +
      `<p>On doit ajouter \u00e0 ces derniers de grands marais (Lavours) et tourbi\u00e8res (Cerin) entre autres. Les autres milieux favorables aux libellules sont les mares qui ponctuent la Bresse et le Bugey, ainsi que les goyas, des mares prairiales d'altitude.</p>`,
    image_url: "/images/departements/ain/calopteryx-haemorrhoidalis.jpg",
    image_alt: "Calopteryx haemorrhoidalis",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "ain",
    position: 1,
    title: "Contexte odonatologique",
    content:
      `<p>Un fleuve, de nombreuses rivi\u00e8res, des ruisseaux, des lacs, \u00e9tangs et zones humides font de l'Ain un d\u00e9partement riche en odonates (116 501 donn\u00e9es \u00e0 la fin de 2024 et 897 observateurs). Des plaines aux plus hauts sommets de la cha\u00eene du Jura, des milieux vari\u00e9s abritent une grande diversit\u00e9 d'esp\u00e8ces.</p>` +
      `<p><strong>70 esp\u00e8ces</strong> sont connues du d\u00e9partement, dont 3 qui n'ont pas \u00e9t\u00e9 revues depuis au moins 10 ans. Certaines esp\u00e8ces sont arriv\u00e9es r\u00e9cemment (<em>Calopteryx haemorrhoidalis</em> en 2002, <em>Trithemis annulata</em> en 2023), d'autres n'ont plus \u00e9t\u00e9 revues depuis plus de 10 ans (<em>Sympetrum danae</em> en 2005).</p>` +
      `<p>L'ensemble du territoire est prospect\u00e9 mais il reste des zones blanches et des communes sans donn\u00e9es. Nos efforts se portent sur ces zones et sur certaines esp\u00e8ces rares ou menac\u00e9es : les 4 <em>Leucorrhinia</em>, <em>Cordulegaster bidentata</em>, <em>Ophiogomphus cecilia</em> et <em>Somatochlora metallica</em>.</p>`,
    image_url: "/images/departements/ain/cordulegaster-bidentata.jpg",
    image_alt: "Cordulegaster bidentata",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "ain",
    position: 2,
    title: "Esp\u00e8ce embl\u00e9matique de l'Ain",
    content:
      `<p>La Leucorrhine \u00e0 gros thorax (<em>Leucorrhinia pectoralis</em>) est une esp\u00e8ce prot\u00e9g\u00e9e dont l'Ain est consid\u00e9r\u00e9 comme le bastion en France, en particulier en Dombes. Elle est rare et vuln\u00e9rable.</p>` +
      `<p>Un travail important de suivi et de conservation est men\u00e9 par Sympetrum avec les acteurs locaux (N2000 en Dombes, par exemple). C'est une esp\u00e8ce des \u00e9tangs forestiers riches en v\u00e9g\u00e9tation. Elle est sensible \u00e0 l'ass\u00e8chement, donc menac\u00e9e par le changement climatique.</p>`,
    image_url: "/images/departements/ain/leucorrhinia-pectoralis.jpg",
    image_alt: "Leucorrhinia pectoralis",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "ain",
    position: 3,
    title: "Zones \u00e0 prospecter",
    content:
      `<p>L'ensemble du territoire est prospect\u00e9 mais il reste des zones blanches et des communes sans donn\u00e9es. Afin d'avoir une meilleure connaissance de la localisation pr\u00e9cise des esp\u00e8ces et de leurs populations, voici une cartographie des zones prioritaires \u00e0 prospecter.</p>` +
      `<p>\u00c0 bient\u00f4t sur le terrain.</p>`,
    image_url: "/images/departements/carto/ain.png",
    image_alt: "Cartographie des zones \u00e0 prospecter dans l'Ain",
    image_credit: "",
  },

  // ========================================================================
  // ARDECHE (6 sections)
  // ========================================================================
  {
    department_slug: "ardeche",
    position: 0,
    title: "L'Ard\u00e8che",
    content:
      `<p>Le d\u00e9partement de l'Ard\u00e8che est situ\u00e9 dans la partie m\u00e9ridionale de la r\u00e9gion Rh\u00f4ne-Alpes. Il est d\u00e9limit\u00e9 \u00e0 l'Ouest par la bordure sud-est du Massif central, avec les C\u00e9vennes au sud et le Plateau ard\u00e9chois plus au nord, \u00e0 l'Est par le fleuve Rh\u00f4ne et au Sud par les garrigues du nord du Gard.</p>` +
      `<p>Ce d\u00e9partement est soumis \u00e0 des climats tr\u00e8s vari\u00e9s, m\u00e9diterran\u00e9en au sud-est dans l'Ard\u00e8che m\u00e9ridionale, montagnard sur les reliefs de l'ouest et continental dans le nord, dans les Bouti\u00e8res et le Haut Vivarais.</p>` +
      `<p>La diversit\u00e9 des influences climatiques, des altitudes mais aussi de substrat g\u00e9ologique permet la pr\u00e9sence de milieux extr\u00eamement vari\u00e9s, allant des ruisseaux temporaires m\u00e9diterran\u00e9ens aux tourbi\u00e8res d'altitude.</p>`,
    image_url: "/images/departements/ardeche/paysage.jpg",
    image_alt: "Gorges du Chassezac",
    image_credit: "Cr\u00e9dits : Alain Ladet",
  },
  {
    department_slug: "ardeche",
    position: 1,
    title: "Contexte odonatologique",
    content:
      `<p><strong>73 esp\u00e8ces</strong> connues \u00e0 l'issue de l'ann\u00e9e 2024. Tr\u00e8s peu de donn\u00e9es ont \u00e9t\u00e9 publi\u00e9es avant 1988.</p>` +
      `<p>La richesse odonatologique de l'Ard\u00e8che m\u00e9ridionale est vite apparue majeure et l'effort de prospection s'est concentr\u00e9 sur ce secteur \u00e0 la faveur de la pr\u00e9sence d'esp\u00e8ces d'int\u00e9r\u00eat communautaire telles que <em>Macromia splendens</em>, <em>Oxygastra curtisii</em>, <em>Gomphus graslini</em>, mais aussi d'autres esp\u00e8ces rares comme <em>Coenagrion caerulescens</em>.</p>` +
      `<p>Les prospections en altitude n'ont pas pour autant \u00e9t\u00e9 n\u00e9glig\u00e9es et ont mis en valeur la richesse des tourbi\u00e8res et autres zones humides avec la pr\u00e9sence d'esp\u00e8ces patrimoniales comme <em>Sympetrum vulgatum</em>, <em>Sympetrum danae</em> et <em>Somatochlora arctica</em> et ont permis la d\u00e9couverte de <em>Coenagrion lunulatum</em> (seul site connu en Rh\u00f4ne-Alpes).</p>`,
    image_url: "/images/departements/ardeche/coenagrion-caerulescens.jpg",
    image_alt: "Coenagrion caerulescens",
    image_credit: "Cr\u00e9dits : C. & P. Juliand",
  },
  {
    department_slug: "ardeche",
    position: 2,
    title: "Esp\u00e8ce embl\u00e9matique de l'Ard\u00e8che",
    content:
      `<p>La Cordulie splendide (<em>Macromia splendens</em>) fr\u00e9quente les secteurs calmes des cours d'eau de taille variable. Cette esp\u00e8ce prot\u00e9g\u00e9e est class\u00e9e vuln\u00e9rable sur les listes rouges europ\u00e9enne, nationale, r\u00e9gionale et d\u00e9partementale.</p>` +
      `<p>Sensible \u00e0 la pollution, cette esp\u00e8ce end\u00e9mique du sud-est de l'Europe (France, Espagne et Portugal) pr\u00e9sente deux noyaux de population en Ard\u00e8che, conf\u00e9rant \u00e0 ce d\u00e9partement une forte responsabilit\u00e9.</p>`,
    image_url: "/images/departements/ardeche/macromia-splendens.jpg",
    image_alt: "Macromia splendens",
    image_credit: "Cr\u00e9dits : C. & P. Juliand",
  },
  {
    department_slug: "ardeche",
    position: 3,
    title: "Co-coordinateurs",
    content:
      `<p>Sympetrum compte 2 co-coordinateurs pour le d\u00e9partement de l'Ard\u00e8che.</p>` +
      `<ul>` +
        `<li><i class="fa-solid fa-circle-check"></i>Pierre JULIAND</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>Alain LADET</li>` +
        `<li>Contact : <a href="mailto:pierre.juliand@orange.fr">pierre.juliand@orange.fr</a> ou <a href="mailto:alain.ladet@wanadoo.fr">alain.ladet@wanadoo.fr</a></li>` +
      `</ul>`,
    image_url: "/images/departements/ardeche/oxygastra-curtisii.jpg",
    image_alt: "Oxygastra curtisii",
    image_credit: "Cr\u00e9dits : C. & P. Juliand",
  },
  {
    department_slug: "ardeche",
    position: 4,
    title: "Activit\u00e9s",
    content:
      `<p>Animations sur le terrain, conf\u00e9rence en salle, expositions de photographies. Possibilit\u00e9 de formation : biologie, aide \u00e0 la d\u00e9termination sur le terrain.</p>` +
      `<p>Contr\u00f4le et validation des donn\u00e9es sur Faune-AURA.</p>`,
    image_url: "/images/departements/ardeche/sympetrum-danae.jpg",
    image_alt: "Sympetrum danae",
    image_credit: "Cr\u00e9dits : C. & P. Juliand",
  },
  {
    department_slug: "ardeche",
    position: 5,
    title: "\u00c9tat des connaissances",
    content:
      `<p>La carte suivante pr\u00e9sente \u00e0 l'\u00e9chelle communale le nombre de donn\u00e9es arr\u00eat\u00e9 \u00e0 fin 2024, ce qui met en \u00e9vidence les secteurs sous-prospect\u00e9s. Ceci devrait permettre d'orienter les prospections \u00e0 venir.</p>`,
    image_url: "/images/departements/carto/ardeche.png",
    image_alt: "Cartographie Ard\u00e8che",
    image_credit: "",
  },

  // ========================================================================
  // DROME (6 sections)
  // ========================================================================
  {
    department_slug: "drome",
    position: 0,
    title: "La Dr\u00f4me",
    content:
      `<p>Entre Dr\u00f4me des collines, Vercors, plaine de Valence ou Vall\u00e9e du Rh\u00f4ne, la diversit\u00e9 des types de zones humides est importante dans le d\u00e9partement. Les diff\u00e9rences de relief (de 50 m \u00e0 plus de 2 400 m) et de climat (continental, m\u00e9diterran\u00e9en ou montagnard) expliquent cela.</p>`,
    image_url: "/images/departements/drome/paysage.jpg",
    image_alt: "Rivi\u00e8re Dr\u00f4me",
    image_credit: "",
  },
  {
    department_slug: "drome",
    position: 1,
    title: "Contexte odonatologique",
    content:
      `<p><strong>70 esp\u00e8ces</strong> ont \u00e9t\u00e9 observ\u00e9es dans le d\u00e9partement. Quelques esp\u00e8ces menac\u00e9es font l'objet de recherches ou de suivis sp\u00e9cifiques.</p>` +
      `<p>C'est le cas par exemple pour <em>Sympetrum depressiusculum</em> (NT Rh\u00f4ne-Alpes 2014) et <em>S. pedemontanum</em> (VU Rh\u00f4ne-Alpes 2014), dont les populations dans le secteur de Pierrelatte sont importantes et m\u00e9ritent d'\u00eatre mieux connues.</p>` +
      `<p>Pour d'autres esp\u00e8ces comme <em>Cordulegaster bidentata</em> (VU Rh\u00f4ne-Alpes 2014) ou <em>Oxygastra curtisii</em>, la discr\u00e9tion des adultes les a fait passer relativement inaper\u00e7ues pendant longtemps. L'actualisation des m\u00e9thodes d'inventaire, en cherchant aussi les larves et les exuvies, permet de commencer \u00e0 mieux conna\u00eetre leur r\u00e9partition.</p>`,
    image_url: "/images/departements/drome/cordulegaster-bidentata.jpg",
    image_alt: "Cordulegaster bidentata",
    image_credit: "Cr\u00e9dits : Jean-Michel Faton",
  },
  {
    department_slug: "drome",
    position: 2,
    title: "Esp\u00e8ce embl\u00e9matique",
    content:
      `<p><em>Coenagrion mercuriale</em> \u2014 des populations importantes sont connues et suivies de longue date, notamment dans la r\u00e9serve des Rami\u00e8res. L'esp\u00e8ce se maintient quand son milieu de pr\u00e9dilection est encore pr\u00e9sent, \u00e0 savoir des eaux faiblement courantes, fra\u00eeches, ensoleill\u00e9es et de bonne qualit\u00e9.</p>` +
      `<p>Dans les secteurs o\u00f9 les canaux ont \u00e9t\u00e9 trop remani\u00e9s comme dans la plaine de Mont\u00e9limar, l'esp\u00e8ce tend \u00e0 dispara\u00eetre. On la trouve essentiellement en vall\u00e9e du Rh\u00f4ne et dans les plaines attenantes, bien qu'elle soit de plus en plus observ\u00e9e en altitude (reproduction possible \u00e0 900 m).</p>`,
    image_url: "/images/departements/drome/coenagrion-mercuriale.jpg",
    image_alt: "Coenagrion mercuriale",
    image_credit: "",
  },
  {
    department_slug: "drome",
    position: 3,
    title: "Co-coordinateurs",
    content:
      `<p>Le Groupe Sympetrum comporte 4 co-coordinateurs pour le d\u00e9partement de la Dr\u00f4me :</p>` +
      `<ul>` +
        `<li><i class="fa-solid fa-circle-check"></i>Camille LE MERRER-LE BOT <span style="font-weight: 400; font-size: 0.9em">(repr\u00e9sente la Dr\u00f4me au CA)</span></li>` +
        `<li><i class="fa-solid fa-circle-check"></i>Jean-Michel FATON</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>Bernard PONT</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>J\u00f6rg SCHLEICHER</li>` +
      `</ul>`,
    image_url: "/images/departements/drome/oxygastra-curtisii.jpg",
    image_alt: "Oxygastra curtisii",
    image_credit: "Cr\u00e9dits : Jean-Michel Faton",
  },
  {
    department_slug: "drome",
    position: 4,
    title: "Activit\u00e9s",
    content:
      `<p>Les activit\u00e9s sont diverses dans la Dr\u00f4me : participation \u00e0 diff\u00e9rents comit\u00e9s de pilotages, r\u00e9alisation d'\u00e9tudes (suivi d'esp\u00e8ces, inventaires de sites), conf\u00e9rences, animations grand public, organisation de week-end de prospection (OdorunAlpes).</p>` +
      `<p>Pour annoncer nos actions, une liste mail est utilis\u00e9e : <a href="https://framalistes.org/sympa/subscribe/odonates-26" target="_blank">framalistes.org/sympa/subscribe/odonates-26</a></p>` +
      `<p>Y sont r\u00e9guli\u00e8rement propos\u00e9es aussi des sorties \u00ab non-officielles \u00bb, o\u00f9 il n'est pas n\u00e9cessaire de faire partie de l'association, pour prospecter des secteurs ou des esp\u00e8ces cibl\u00e9es en groupe.</p>`,
    image_url: "/images/departements/drome/prospection-1.jpg",
    image_alt: "Prospection sur la rivi\u00e8re Dr\u00f4me",
    image_credit: "",
  },
  {
    department_slug: "drome",
    position: 5,
    title: "Zones \u00e0 prospecter",
    content:
      `<p>Dans le cadre de l'atlas, publi\u00e9 en 2023, d'intenses prospections ont permis d'am\u00e9liorer nos connaissances dans la Dr\u00f4me. Malgr\u00e9 tout, quelques communes restent sans donn\u00e9es et plus g\u00e9n\u00e9ralement, les secteurs o\u00f9 nous avons moins d'adh\u00e9rent\u00b7es m\u00e9riteraient d'\u00eatre plus prospect\u00e9s.</p>` +
      `<p>Les zones humides d'altitude, comme celles du Vercors, sont aussi \u00e0 prospecter r\u00e9guli\u00e8rement, du fait de leur vuln\u00e9rabilit\u00e9 face aux changements climatiques.</p>`,
    image_url: "/images/departements/carto/drome.png",
    image_alt: "Cartographie Dr\u00f4me",
    image_credit: "",
  },

  // ========================================================================
  // HAUTE-SAVOIE (6 sections)
  // ========================================================================
  {
    department_slug: "haute-savoie",
    position: 0,
    title: "La Haute-Savoie",
    content:
      `<p>D'une superficie de 4 388 km\u00b2, le d\u00e9partement de la Haute-Savoie est limitrophe avec les d\u00e9partements de l'Ain, de la Savoie, du canton de Gen\u00e8ve, de Vaud et du Valais en Suisse et enfin de la r\u00e9gion Autonome de la Vall\u00e9e d'Aoste en Italie.</p>` +
      `<p>B\u00e9n\u00e9ficiant d'un relief vari\u00e9, le d\u00e9partement poss\u00e8de le plus fort d\u00e9nivel\u00e9 de France, proposant des altitudes allant de 250 m\u00e8tres sur le Rh\u00f4ne \u00e0 4 808 m\u00e8tres au sommet du massif du Mont-Blanc.</p>` +
      `<p>Cette forte topographie coupl\u00e9e \u00e0 une multitude d'unit\u00e9s g\u00e9ologiques, un climat montagnard b\u00e9n\u00e9ficiant d'une pluviom\u00e9trie \u00e9lev\u00e9e permet le d\u00e9veloppement d'un patrimoine naturel remarquable caract\u00e9ris\u00e9 par une mosa\u00efque d'habitats naturels (alpages, pelouses s\u00e8ches, for\u00eats, zones humides, landes, etc.).</p>`,
    image_url: "/images/departements/haute-savoie/aeshna-juncea.jpg",
    image_alt: "Aeshna juncea",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "haute-savoie",
    position: 1,
    title: "Contexte odonatologique",
    content:
      `<p>Actuellement, <strong>63 \u00e0 65 esp\u00e8ces</strong> ont \u00e9t\u00e9 observ\u00e9es au moins une fois sur le d\u00e9partement apr\u00e8s 2000, soit 64 \u00e0 66 % de la diversit\u00e9 nationale (98 esp\u00e8ces).</p>` +
      `<p>Dans notre d\u00e9partement, nous tentons de suivre au mieux les esp\u00e8ces rares et prot\u00e9g\u00e9es, telle que la Leucorrhine \u00e0 front blanc (<em>Leucorrhinia albifrons</em>) qui s'est install\u00e9e sur plusieurs \u00e9tangs dans la basse et moyenne vall\u00e9e de l'Arve.</p>` +
      `<p>Au vu du r\u00e9chauffement climatique en cours, notre d\u00e9partement est riche de nombreux habitats aquatiques alpins qui h\u00e9bergent tout un cort\u00e8ge d'esp\u00e8ces bor\u00e9o-alpines, comme la Cordulie alpestre (<em>Somatochlora alpestris</em>), l'Aeschne des joncs (<em>Aeshna juncea</em>) ou encore l'Agrion hast\u00e9 (<em>Coenagrion hastulatum</em>) qui m\u00e9ritent toute notre attention.</p>`,
    image_url: "/images/departements/haute-savoie/leucorrhinia-albifrons.jpg",
    image_alt: "Leucorrhinia albifrons",
    image_credit: "Cr\u00e9dits : Nathan Kolanek",
  },
  {
    department_slug: "haute-savoie",
    position: 2,
    title: "Esp\u00e8ce embl\u00e9matique de la Haute-Savoie",
    content:
      `<p>L'Aeschne azur\u00e9e (<em>Aeshna caerulea</em>) est une v\u00e9ritable mascotte pour le d\u00e9partement de la Haute-Savoie. Elle n'est connue en France que de ce d\u00e9partement o\u00f9 elle a \u00e9t\u00e9 observ\u00e9e sur seulement 8 localit\u00e9s, situ\u00e9es entre Samo\u00ebns et Chamonix, entre 1 770 et 2 200 m\u00e8tres d'altitude.</p>` +
      `<p>Appr\u00e9ciant les hivers rigoureux et des p\u00e9riodes d\u00e9neig\u00e9es courtes l'\u00e9t\u00e9, l'Aeschne azur\u00e9e fait partie de ce cort\u00e8ge d'esp\u00e8ces bor\u00e9o-alpines extr\u00eamement soumises au r\u00e9chauffement climatique mais \u00e9galement au d\u00e9veloppement des activit\u00e9s anthropiques de montagne.</p>`,
    image_url: "/images/departements/haute-savoie/aeshna-caerulea.jpg",
    image_alt: "Aeshna caerulea",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "haute-savoie",
    position: 3,
    title: "Co-coordinateurs",
    content:
      `<p>Sympetrum compte 3 co-coordinateurs/trices en Haute-Savoie.</p>` +
      `<ul>` +
        `<li><i class="fa-solid fa-circle-check"></i>Macha JOANIN</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>Marie LAMOUILLE-H\u00c9BERT</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>David LECLERC</li>` +
        `<li>Contact : <a href="mailto:contact.sympetrum@gmail.com">contact.sympetrum@gmail.com</a></li>` +
      `</ul>`,
    image_url: "/images/departements/haute-savoie/somatochlora-alpestris.jpg",
    image_alt: "Somatochlora alpestris",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "haute-savoie",
    position: 4,
    title: "Activit\u00e9s",
    content:
      `<p>Formations, animations aupr\u00e8s d'un large public, prospections (Odorun'Alpes), suivis d'esp\u00e8ces, \u00e9laboration de dossiers rouges sur des projets qui menacent nos zones humides.</p>` +
      `<p>Un projet de recherche in\u00e9dit pour prot\u00e9ger les zones humides d'altitude (CIMaE) est en cours et sous la direction de Marie Lamouille-H\u00e9bert. Dans ce cadre, un programme de sciences participatives a \u00e9t\u00e9 d\u00e9velopp\u00e9 et mis en \u0153uvre depuis 2021.</p>`,
    image_url: "/images/departements/haute-savoie/coenagrion-hastulatum.jpg",
    image_alt: "Coenagrion hastulatum",
    image_credit: "Cr\u00e9dits : Nathan Kolanek",
  },
  {
    department_slug: "haute-savoie",
    position: 5,
    title: "Zones \u00e0 prospecter",
    content:
      `<p>Comme le montre cette cartographie, plusieurs secteurs restent mal connus sur notre territoire. Vous pouvez nous aider en contribuant \u00e0 l'am\u00e9lioration des connaissances des libellules sur votre territoire, \u00e0 l'\u00e9chelle de votre commune, d'un massif, etc.</p>`,
    image_url: "/images/departements/carto/haute-savoie.png",
    image_alt: "Cartographie Haute-Savoie",
    image_credit: "",
  },

  // ========================================================================
  // ISERE (2 sections)
  // ========================================================================
  {
    department_slug: "isere",
    position: 0,
    title: "L'Is\u00e8re",
    content:
      `<p>Le d\u00e9partement de l'Is\u00e8re compte <strong>78 esp\u00e8ces</strong> d'odonates recens\u00e9es.</p>`,
    image_url: "",
    image_alt: "",
    image_credit: "",
  },
  {
    department_slug: "isere",
    position: 1,
    title: "Coordination",
    content:
      `<p>Sympetrum compte 3 co-coordinateurs en Is\u00e8re :</p>` +
      `<ul>` +
        `<li><i class="fa-solid fa-circle-check"></i>Nicolas SOUVIGNET</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>C\u00e9dric JACQUIER</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>Ang\u00e9lique PRUVOST</li>` +
      `</ul>` +
      `<p><em>Anciens coordonnateurs : Aur\u00e9lien Bourdin, Mathieu Juton, Cyrille Deliry et David Loose.</em></p>`,
    image_url: "/images/departements/carto/isere.png",
    image_alt: "Cartographie Is\u00e8re",
    image_credit: "",
  },

  // ========================================================================
  // LOIRE (6 sections)
  // ========================================================================
  {
    department_slug: "loire",
    position: 0,
    title: "La Loire",
    content:
      `<p>Travers\u00e9 du sud au nord par le fleuve Loire, le d\u00e9partement \u00e9ponyme regorge d'habitats diversifi\u00e9s pour les libellules : pr\u00e8s de 350 \u00e9tangs, de nombreuses tourbi\u00e8res d'altitude, des marais de plaine, des canaux, des ruisseaux, des rivi\u00e8res, deux fleuves...</p>` +
      `<p>La grande amplitude altitudinale du d\u00e9partement, allant de 130 \u00e0 1 661 m, contribue \u00e0 la richesse sp\u00e9cifique du territoire.</p>`,
    image_url: "/images/departements/loire/paysage.jpg",
    image_alt: "Gourd des Aill\u00e8res",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "loire",
    position: 1,
    title: "Contexte odonatologique",
    content:
      `<p><strong>70 esp\u00e8ces</strong> sont recens\u00e9es dans le d\u00e9partement. Ces derni\u00e8res ann\u00e9es, les prospections ont \u00e9t\u00e9 ax\u00e9es sur diverses esp\u00e8ces, principalement : <em>Oxygastra curtisii</em>, <em>Sympetrum pedemontanum</em>, <em>Sympetrum depressiusculum</em>, <em>Leucorrhinia pectoralis</em> et les odonates de tourbi\u00e8res d'altitude.</p>` +
      `<p>Le d\u00e9partement accueille de belles populations de plusieurs esp\u00e8ces relativement peu fr\u00e9quentes dans une grande partie de la r\u00e9gion comme <em>Aeshna isoceles</em>, <em>Coenagrion ornatum</em>, <em>Leucorrhinia dubia</em>, <em>Sympetrum depressiusculum</em>, etc.</p>`,
    image_url: "/images/departements/loire/oxygastra-curtisii.jpg",
    image_alt: "Oxygastra curtisii",
    image_credit: "Cr\u00e9dits : Nathan Kolanek",
  },
  {
    department_slug: "loire",
    position: 2,
    title: "Esp\u00e8ce embl\u00e9matique",
    content:
      `<p>Le Gomphe serpentin (<em>Ophiogomphus cecilia</em>) est une esp\u00e8ce prot\u00e9g\u00e9e extr\u00eamement rare en Rh\u00f4ne-Alpes. Sa reproduction n'est av\u00e9r\u00e9e que sur le fleuve Loire en aval de Roanne.</p>` +
      `<p>Toutefois, sa pr\u00e9sence est relativement difficile \u00e0 d\u00e9tecter et d'autres sites restent probablement \u00e0 d\u00e9couvrir. Elle occupe les cours d'eau \u00e0 substrats graveleux et sableux, des ruisseaux aux fleuves.</p>`,
    image_url: "/images/departements/loire/ophiogomphus-cecilia.jpg",
    image_alt: "Ophiogomphus cecilia",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "loire",
    position: 3,
    title: "Coordination",
    content:
      `<p>Pour l'instant, le groupe Sympetrum compte un unique coordinateur dans le d\u00e9partement de la Loire :</p>` +
      `<ul>` +
        `<li><i class="fa-solid fa-circle-check"></i>Loup NOALLY</li>` +
        `<li>Contact : <a href="mailto:noaloup@gmail.com">noaloup@gmail.com</a></li>` +
      `</ul>` +
      `<p><em>(Les candidatures pour les postes de co-coordination sont les bienvenues)</em></p>`,
    image_url: "/images/departements/loire/coordinateurs.jpg",
    image_alt: "Coordinateur Loire",
    image_credit: "",
  },
  {
    department_slug: "loire",
    position: 4,
    title: "Activit\u00e9s",
    content:
      `<p>Ateliers d'identification des exuvies, prospections group\u00e9es... La d\u00e9l\u00e9gation de la Loire propose ponctuellement des activit\u00e9s, en esp\u00e9rant pouvoir augmenter leur fr\u00e9quence dans les ann\u00e9es \u00e0 venir.</p>` +
      `<p>Pour tous sujets de discussions autour des odonates dans la Loire, vous pouvez vous abonner \u00e0 la liste mail d\u00e9di\u00e9e : <a href="https://framalistes.org/sympa/subscribe/obsodonates42" target="_blank">framalistes.org/sympa/subscribe/obsodonates42</a></p>` +
      `<p>R\u00e9cemment, le Groupe Sympetrum et FNE Loire ont r\u00e9alis\u00e9 un atlas d\u00e9partemental des odonates. De nombreux b\u00e9n\u00e9voles ont particip\u00e9 en r\u00e9alisant des prospections, en r\u00e9digeant des monographies, en aidant aux relectures ou en fournissant des photos.</p>`,
    image_url: "/images/departements/loire/atlas-cover.jpg",
    image_alt: "Atlas des Odonates de la Loire",
    image_credit: "",
  },
  {
    department_slug: "loire",
    position: 5,
    title: "Zones \u00e0 prospecter",
    content:
      `<p>Si le d\u00e9partement a \u00e9t\u00e9 fortement prospect\u00e9 entre 2012 et 2016 lors du lancement du projet d'atlas d\u00e9partemental, de nombreux secteurs sont aujourd'hui en manque de donn\u00e9es r\u00e9centes.</p>` +
      `<p>Le nord du d\u00e9partement m\u00e9riterait d'\u00eatre prospect\u00e9 davantage, notamment les bords de Loire pour rechercher <em>Ophiogomphus cecilia</em> et les suintements prairiaux du nord-est pour <em>Coenagrion ornatum</em>.</p>`,
    image_url: "/images/departements/carto/loire.png",
    image_alt: "Cartographie Loire",
    image_credit: "",
  },

  // ========================================================================
  // RHONE (6 sections)
  // ========================================================================
  {
    department_slug: "rhone",
    position: 0,
    title: "Le Rh\u00f4ne",
    content:
      `<p>Encadr\u00e9 par le Massif Central \u00e0 l'ouest et les premiers contreforts du Jura \u00e0 l'est, le d\u00e9partement du Rh\u00f4ne est un v\u00e9ritable carrefour g\u00e9ographique. Avec le Beaujolais au nord, les Monts d'Or au centre, les Monts du Lyonnais au sud-ouest et la partie septentionale du Pilat au sud, notre d\u00e9partement dispose d'une diversit\u00e9 de milieux significative.</p>` +
      `<p>Chef-lieu du d\u00e9partement, la ville de Lyon se situe \u00e0 la confluence entre la Sa\u00f4ne et le Rh\u00f4ne.</p>`,
    image_url: "/images/departements/rhone/paysage.jpg",
    image_alt: "Paysage du Rh\u00f4ne",
    image_credit: "Cr\u00e9dits : Aur\u00e9lien Labroche",
  },
  {
    department_slug: "rhone",
    position: 1,
    title: "Contexte odonatologique",
    content:
      `<p><strong>75 esp\u00e8ces</strong> ont \u00e9t\u00e9 inventori\u00e9es dans le Rh\u00f4ne. Nos efforts de prospection se concentrent sur l'actualisation de la pr\u00e9sence d'esp\u00e8ces \u00e0 enjeux telles que <em>Cordulegaster bidentata</em> (class\u00e9 VU en Rh\u00f4ne-Alpes, 2014) et sur les nouvelles esp\u00e8ces pr\u00e9sentes sur le d\u00e9partement telles que <em>Trithemis annulata</em>.</p>` +
      `<p>Nos prospections nous am\u00e8nent parfois \u00e9galement \u00e0 d\u00e9couvrir la pr\u00e9sence d'esp\u00e8ces consid\u00e9r\u00e9es comme disparues du d\u00e9partement \u00e0 l'image de <em>Sympetrum depressiusculum</em>.</p>` +
      `<p>Le d\u00e9partement abrite une importante population de <em>Coenagrion mercuriale</em>, esp\u00e8ce prot\u00e9g\u00e9e et menac\u00e9e (class\u00e9e VU sur la liste rouge mondiale) essentiellement pr\u00e9sente en Europe de l'ouest.</p>`,
    image_url: "/images/departements/rhone/trithemis-annulata.jpg",
    image_alt: "Trithemis annulata",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "rhone",
    position: 2,
    title: "Esp\u00e8ce embl\u00e9matique du Rh\u00f4ne",
    content:
      `<p>Le gomphe \u00e0 pattes jaunes (<em>Stylurus flavipes</em>) est une esp\u00e8ce prot\u00e9g\u00e9e pr\u00e9sente le long du Rh\u00f4ne et de la Sa\u00f4ne. Sa sensibilit\u00e9 \u00e0 la pollution thermique, son aire de r\u00e9partition restreinte en France ainsi que sa discr\u00e9tion au stade imago font de lui une esp\u00e8ce rare \u00e0 observer.</p>` +
      `<p>Elle fr\u00e9quente les grandes rivi\u00e8res et les fleuves non-am\u00e9nag\u00e9s \u00e0 fond sableux, limoneux ou vaseux. Ses populations r\u00e9gressent en cas de pollution.</p>`,
    image_url: "/images/departements/rhone/stylurus-flavipes.jpg",
    image_alt: "Stylurus flavipes",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "rhone",
    position: 3,
    title: "Co-coordinateurs",
    content:
      `<p>Sympetrum compte 4 co-coordinateurs dans le Rh\u00f4ne.</p>` +
      `<ul>` +
        `<li><i class="fa-solid fa-circle-check"></i>Julien BOUNIOL</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>Aur\u00e9lie COUET</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>Hugo TAURU</li>` +
        `<li><i class="fa-solid fa-circle-check"></i>Hugo ROBUSCHI</li>` +
        `<li>Contact : <a href="mailto:coordo69.sympetrum@gmail.com">coordo69.sympetrum@gmail.com</a></li>` +
      `</ul>`,
    image_url: "/images/departements/rhone/activites.jpg",
    image_alt: "Activit\u00e9s Rh\u00f4ne",
    image_credit: "",
  },
  {
    department_slug: "rhone",
    position: 4,
    title: "Activit\u00e9s",
    content:
      `<p>Ateliers de d\u00e9termination d'exuvies, animations, prospections naturalistes, conf\u00e9rences... La d\u00e9l\u00e9gation du Rh\u00f4ne vous propose de nombreuses activit\u00e9s autour des odonates.</p>` +
      `<p>Pour annoncer nos activit\u00e9s, partager nos photos ou encore s'entraider \u00e0 d\u00e9terminer des esp\u00e8ces, nous utilisons l'application Discord. Lien d'invitation : <a href="https://discord.gg/JTWDUr886d" target="_blank">https://discord.gg/JTWDUr886d</a></p>`,
    image_url: "/images/departements/rhone/coenagrion-mercuriale.jpg",
    image_alt: "Coenagrion mercuriale",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "rhone",
    position: 5,
    title: "Zones \u00e0 prospecter",
    content:
      `<p>Le d\u00e9partement compte de nombreuses zones sur lesquelles nous manquons de donn\u00e9es. Afin d'avoir une meilleure connaissance de la localisation pr\u00e9cise des esp\u00e8ces et de leurs populations, voici une cartographie des zones prioritaires \u00e0 prospecter.</p>` +
      `<p>\u00c0 bient\u00f4t sur le terrain.</p>`,
    image_url: "/images/departements/carto/rhone.png",
    image_alt: "Cartographie Rh\u00f4ne",
    image_credit: "",
  },

  // ========================================================================
  // SAVOIE (4 sections)
  // ========================================================================
  {
    department_slug: "savoie",
    position: 0,
    title: "La Savoie",
    content:
      `<p>Le d\u00e9partement de la Savoie (6 028 km\u00b2), au nord-est de la r\u00e9gion AuRA, pr\u00e9sente quatre grandes entit\u00e9s, les cha\u00eenons montagneux du Jura \u00e0 l'ouest dominant une zone de collines, le bassin molassique, les cha\u00eenes subalpines (Bauges et Chartreuse) s\u00e9par\u00e9es des massifs alpins par le sillon alpin.</p>` +
      `<p>Le Rh\u00f4ne limite le d\u00e9partement \u00e0 l'ouest, tandis que l'Is\u00e8re et ses affluents le traversent. Les lacs du Bourget et d'Aiguebelette sont les principaux milieux lentiques auxquels s'ajoutent quelques lacs de barrage, un grand nombre de petits lacs d'altitude et quelques ballasti\u00e8res.</p>` +
      `<p>Il faut ajouter de grands marais (Chautagne) et de nombreuses tourbi\u00e8res. Les autres milieux favorables aux libellules sont les mares qui ponctuent la campagne, ainsi que des mares prairiales d'altitude.</p>`,
    image_url: "/images/departements/savoie/calopteryx-haemorrhoidalis.jpg",
    image_alt: "Calopteryx haemorrhoidalis",
    image_credit: "Cr\u00e9dits : R\u00e9gis Krieg-Jacquier",
  },
  {
    department_slug: "savoie",
    position: 1,
    title: "Contexte odonatologique",
    content:
      `<p>Un fleuve, de nombreuses rivi\u00e8res, des ruisseaux, des lacs, des tourbi\u00e8res et zones humides font de la Savoie un d\u00e9partement riche en odonates (35 851 donn\u00e9es \u00e0 la fin de 2024 et 698 observateurs). Au total <strong>69 esp\u00e8ces</strong> sont connues du d\u00e9partement.</p>` +
      `<p>Les vall\u00e9es profondes permettent aux esp\u00e8ces m\u00e9ridionales de remonter jusqu'en Savoie comme <em>Calopteryx haemorrhoidalis</em> en 2012 et <em>Trithemis annulata</em> en 2024, alors que les zones de montagne sont le domaine de quelques esp\u00e8ces bor\u00e9o-alpines.</p>` +
      `<p>L'ensemble du territoire est prospect\u00e9 mais il reste des zones blanches. Nos efforts devront se porter sur certaines esp\u00e8ces rares ou menac\u00e9es : <em>Leucorrhinia albifrons</em>, <em>L. caudalis</em>, <em>L. dubia</em>, <em>Cordulegaster bidentata</em>, <em>Ophiogomphus cecilia</em>, <em>Epitheca bimaculata</em>, <em>Boyeria irene</em> et <em>Somatochlora metallica</em>.</p>`,
    image_url: "/images/departements/savoie/boyeria-irene.jpg",
    image_alt: "Boyeria irene",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "savoie",
    position: 2,
    title: "Esp\u00e8ce embl\u00e9matique de la Savoie",
    content:
      `<p>La Leucorrhine douteuse (<em>Leucorrhinia dubia</em>) est une esp\u00e8ce eurosib\u00e9rienne dont la Savoie est un des bastions en France. Elle se rencontre essentiellement en altitude au-dessus de 700 m et elle peut atteindre 2 500 m.</p>` +
      `<p>Cette esp\u00e8ce est inf\u00e9od\u00e9e aux tourbi\u00e8res et aux \u00e9tangs v\u00e9g\u00e9talis\u00e9s, acides et pauvres en poissons. Elle est vuln\u00e9rable au changement climatique, au d\u00e9veloppement d'activit\u00e9s piscicoles et touristiques ainsi qu'\u00e0 l'intensification des activit\u00e9s pastorales intensives en montagne.</p>` +
      `<p>La Leucorrhine douteuse est une des esp\u00e8ces cibl\u00e9es par le programme CIMaE.</p>`,
    image_url: "/images/departements/savoie/leucorrhinia-dubia.jpg",
    image_alt: "Leucorrhinia dubia",
    image_credit: "Cr\u00e9dits : Loup Noally",
  },
  {
    department_slug: "savoie",
    position: 3,
    title: "Zones \u00e0 prospecter",
    content:
      `<p>L'ensemble du territoire est prospect\u00e9 mais il reste des zones blanches et des communes sans donn\u00e9es. Afin d'avoir une meilleure connaissance de la localisation pr\u00e9cise des esp\u00e8ces et de leurs populations, voici une cartographie des zones prioritaires \u00e0 prospecter.</p>` +
      `<p>\u00c0 bient\u00f4t sur le terrain.</p>`,
    image_url: "/images/departements/carto/savoie.png",
    image_alt: "Cartographie Savoie",
    image_credit: "",
  },
];

// ---------------------------------------------------------------------------
// Seed function
// ---------------------------------------------------------------------------

const seed = async () => {
  try {
    // 1. Delete all existing department_section records
    await prisma.departmentSection.deleteMany();
    console.log("Deleted all existing department_section records");

    // 2. Reset auto-increment
    await prisma.$queryRaw`ALTER TABLE department_section AUTO_INCREMENT = 1`;
    console.log("Reset department_section auto increment to 1");

    // 3. Encode content with he.encode() before storing
    const encoded = sections.map((s) => ({
      ...s,
      content: he.encode(s.content),
    }));

    // 4. Insert all sections
    await prisma.departmentSection.createMany({ data: encoded });
    console.log(`Inserted ${encoded.length} department_section records`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
