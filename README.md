# Sympetrum

## À propos

Sympetrum est un projet développé en utilisant Next.js. Il s'agit d'une version privée et ce fichier README contient les instructions de base pour l'installation et le déploiement.

## Version

La version actuelle est la 0.1.0.

## Installation

Pour installer les dépendances nécessaires, exécutez :

```bash
   npm install
```

## Scripts disponibles

Dans ce projet, vous pouvez utiliser les scripts suivants :

- `npm run dev` : Lance le serveur de développement.
- `npm run prisma:deploy` : Déploie les migrations Prisma et génère le client Prisma.
- `npm run build` : Construit l'application pour la production.
- `npm run start` : Lance l'application en mode production.
- `npm run lint` : Lance le linter.
- `npm run seed` : Exécute le script de seeding pour Prisma.

## Dépendances

Le projet utilise plusieurs dépendances, y compris :

- `@faker-js/faker`
- `@prisma/client`
- `@types/aos`
- `@types/fslightbox-react`
- `animate.css`
- `aos`
- `bcrypt`
- `fslightbox-react`
- `next`
- `prisma`
- `react`
- `react-accessible-accordion`
- `react-confirm-alert`
- `react-dom`
- `react-tabs`
- `react-toastify`
- `sass`
- `sharp`
- `swiper`
- `use-debounce`
- `zod`

Ainsi que des dépendances de développement comme `@types/node`, `@types/react`, `@types/react-dom`, `eslint`, `eslint-config-next`, et `typescript`.

Pour la liste complète et leurs versions spécifiques, veuillez consulter le fichier `package.json`.

## Développement

Pour commencer le développement :

1. Clonez le dépôt.
2. Installez les dépendances avec `npm install`.
3. Lancez le serveur de développement avec `npm run dev`.

## Déploiement en production

Pour déployer l'application en production, suivez ces étapes :

1. **Construction de l'application** : Exécutez le script de construction pour préparer une version optimisée de l'application. Utilisez la commande suivante :
   ```bash
   npm run build
   ```
2. **Configuration d'environnement** : Assurez-vous que toutes les variables d'environnement nécessaires sont correctement configurées dans votre environnement de production. Cela inclut les chaînes de connexion à la base de données, les clés API, les configurations de sécurité, etc.
3. **Base de données** : Déployez les migrations de votre base de données en exécutant :
   ```bash
   npx prisma migrate deploy
   ```
4. **Serveur de production** : Lancez l'application en mode production en utilisant :
   ```bash
   npm run start
   ```
5. **Surveillance et logs** : Mettez en place des systèmes de surveillance et de logging pour suivre les performances et détecter les problèmes éventuels rapidement.
6. **Mises à jour et maintenance** : Planifiez régulièrement des mises à jour et des maintenances pour garder votre application sécurisée et performante.

Assurez-vous de tester l'application en environnement de pré-production avant de la déployer en production pour garantir la stabilité et la fiabilité.

## Licence

Ce projet est privé et tous les droits sont réservés.
