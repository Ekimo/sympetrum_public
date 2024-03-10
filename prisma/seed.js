const { PrismaClient } = require("@prisma/client");
const {
  users,
  odonates,
  publications,
  settings,
  categories,
  tags,
  articles,
  newsletterEmails,
} = require("../libs/utils/placeholder-data.js");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.user.deleteMany();
    console.log("Deleted records in users table");

    await prisma.odonate.deleteMany();
    console.log("Deleted records in odonates table");

    await prisma.publication.deleteMany();
    console.log("Deleted records in publications table");

    await prisma.setting.deleteMany();
    console.log("Deleted records in settings table");

    await prisma.media.deleteMany();
    console.log("Deleted records in media table");

    await prisma.article.deleteMany();
    console.log("Deleted records in article table");

    await prisma.category.deleteMany();
    console.log("Deleted records in category table");

    await prisma.tag.deleteMany();
    console.log("Deleted records in tag table");

    await prisma.newsletter.deleteMany();
    console.log("Deleted records in newsletter table");

    await prisma.circulaire.deleteMany();
    console.log("Deleted records in circulaire table");

    await prisma.$queryRaw`ALTER TABLE user AUTO_INCREMENT = 1`;
    console.log("reset user auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE odonate AUTO_INCREMENT = 1`;
    console.log("reset odonate auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE publication AUTO_INCREMENT = 1`;
    console.log("reset publication auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE setting AUTO_INCREMENT = 1`;
    console.log("reset setting auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE media AUTO_INCREMENT = 1`;
    console.log("reset media auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE category AUTO_INCREMENT = 1`;
    console.log("reset category auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE tag AUTO_INCREMENT = 1`;
    console.log("reset tag auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE article AUTO_INCREMENT = 1`;
    console.log("reset article auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE newsletter AUTO_INCREMENT = 1`;
    console.log("reset newsletter auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE circulaire AUTO_INCREMENT = 1`;
    console.log("reset circulaire auto increment to 1");

    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: hashedPassword,
          role: user.role,
        },
      });
    }
    console.log("Added user data");

    await prisma.odonate.createMany({
      data: odonates,
    });
    console.log("Added odonates data");

    await prisma.publication.createMany({
      data: publications,
    });
    console.log("Added publications data");

    await prisma.category.createMany({
      data: categories,
    });
    console.log("Added categories data");

    await prisma.tag.createMany({
      data: tags,
    });
    console.log("Added tags data");

    // Loop because can't create relations with createmany
    for (const article of articles) {
      await prisma.article.create({
        data: {
          title: article.title,
          slug: article.slug,
          image_url: article.image_url,
          intro: article.intro,
          content: article.content,
          publication_date: new Date(article.publication_date),
          category_id: article.category_id,
          tags: {
            connect: article.tags.map((tagId) => ({ id: tagId })),
          },
        },
      });
    }
    console.log(`Added articles data`);

    await prisma.setting.create({
      data: settings,
    });
    console.log("Added settings data");

    await prisma.newsletter.createMany({
      data: newsletterEmails,
    });
    console.log("Added newsletter data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
