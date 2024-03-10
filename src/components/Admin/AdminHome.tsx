import React from "react";

export default async function AdminHome() {
  return (
    <>
      <div className="col-lg-8 col-md-12">
        <div className="content-details">
          <div className="article-content">
            <h2>Mémo à l&apos;attention des utilisateurs</h2>
            <h4>Rôles</h4>
            <p>
              Votre compte dispose d&apos;un rôle défini : <br />
              <strong>Admin :</strong>
              <ul>
                <li>
                  Droits complets sur la totalité du contenu (Utilisateurs,
                  circulaires, paramètres, approbation de contenu, suppression
                  générale...)
                </li>
              </ul>
              <strong>Rédacteur :</strong>
              <ul>
                <li>Rédaction et édition des articles</li>
                <li>
                  Validation des articles et des éditions des contributeurs
                </li>
                <li>
                  Création et édition des données libellules/bibliographie
                </li>
                <li>Accès complet médiathèque</li>
              </ul>
              <strong>Contributeur :</strong>
              <ul>
                <li>
                  Rédaction et édition de SES articles avec publication
                  supervisée par un administrateur/rédacteur
                </li>
                <li>Accès complet médiathèque</li>
              </ul>
            </p>
            <h4>Médiathèque</h4>
            <p>
              La médiathèque a pour objectif de fournir un espace dédié au
              stockage de fichiers images et PDF associés au site.
              L&apos;intention n&apos;est pas de transformer cet espace en
              cloud, mais plutôt de disposer d&apos;un lieu pour conserver des
              fichiers qui pourront ensuite être réutilisés lors de la rédaction
              d&apos;articles ou associés à une publication ou un odonate.{" "}
              <br />
              Lorsque qu&apos;un fichier est ajouté à la médiathèque, un lien
              définif (et que vous pourrez retrouver depuis l&apos;onglet
              médiathèque) vous est fourni. Vous pourrez ensuite utiliser ce
              lien pour ajouter des images/documents aux articles, publications
              etc...
              <br /> La taille maximale des images est limitée à 1 Mo (elles
              seront ensuite recompressées) et celle des PDF à 5 Mo. Il est
              important de se rappeler que le stockage moderne représente un
              coût qui augmente avec la quantité de données stockées. Il est
              donc conseillé de compresser vos PDF avant de les télécharger afin
              d&apos;améliorer l&apos;expérience utilisateur grâce à une
              meilleure vitesse d&apos;affichage du contenu.
            </p>
            <h4>Blog</h4>
            <p>
              Pour conserver une identitée visuelle propre, merci de respecter
              les différentes paramètres qui permettent de garder une cohérence
              entre les articles. Les images principales d&apos;articles doivent
              faire 1920x1080 pixel. <br />
              Lors de l&apos;ajout d&apos;une image princpale ou d&apos;une
              image dans le corps d&apos;un article, merci d&apos;utiliser la
              médiathèque pour générer un lien en ajoutant votre fichier. Vous
              pouvez soit prévoir l&apos;ensemble des documents nécessaires à la
              création de votre article en amont depuis l&apos;onglet
              médiathèque, soit travailler avec la médiathèque dans un second
              onglet pour ajouter vos documents au fil de l&apos;eau.
            </p>
            <h4>Libellules de Rhône-Alpes</h4>
            <p>
              Lors de l&apos;ajout d&apos;une espèce, tous les champs sont
              obligatoires, sauf celui du document lié, qui doit prendre la
              forme d&apos;un lien. Vous pouvez générer ce lien avec un fichier
              PDF/IMAGE depuis l&apos;onglet médiathèque. Vous pouvez également
              utiliser un lien standard (site web externe, article de blog du
              site, etc...).
            </p>
            <h4>Bibliographie</h4>
            <p>
              Lors de l&apos;ajout d&apos;une référence, tous les champs sont
              obligatoires, sauf celui du document lié, qui doit prendre la
              forme d&apos;un lien. Vous pouvez générer ce lien avec un fichier
              PDF/IMAGE depuis l&apos;onglet médiathèque. Vous pouvez également
              utiliser un lien standard (site web externe, article de blog du
              site, etc...).
            </p>
            <h4>Circulaires</h4>
            <p>
              Lorsqu&apos;une circulaire est créée (une circulaire représente un
              ensemble d&apos;articles séléctionnés par le créateur de la
              circulaire), un mail automatique est envoyé à la base newsletter
              existante de Sympetrum. Les nouveaux inscrits à la newsletter
              depuis le site sont automatiquement ajoutés à cette base.
              <br />
              Le mail automatique prévient l&apos;abonné de l&apos;existance
              d&apos;un nouveau contenu tout en le renvoyant sur un lien
              automatique lui permettant d&apos;accéder à un aperçu des articles
              de la circulaire avec la possibilité de les consulter dans leur
              intégralité.
            </p>
            <h4>Utilisateurs</h4>
            <p>
              Cet onglet permet aux administrateurs de créer des utilisateurs et
              d&apos;attribuer des rôles (cf rôles). Les utilisateurs peuvent
              ensuite être édités et leurs mots de passes mis à jour en cas de
              perte.
            </p>
            <h4>Paramètres généraux</h4>
            <p>
              Cet onglet permet de modifier les statistiques présentes en page
              d&apos;accueil.
            </p>
            <h4>Data newsletter</h4>
            <p>
              Cet onglet permet de télécharger la liste des adhérents newsletter
              à jour au format CSV.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
