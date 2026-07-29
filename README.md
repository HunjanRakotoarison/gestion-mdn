# Gestion MDN — Maison du Numérique

Application de gestion du site web de la Maison du Numérique, développée avec **Next.js**, déployée sur **Cloudflare Workers** (via OpenNext), avec **Drizzle ORM** et **Cloudflare D1** comme base de données.

## Stack technique

- **Framework** : Next.js 16 (App Router, Turbopack)
- **Hébergement** : Cloudflare Workers (via `@opennextjs/cloudflare`)
- **Base de données** : Cloudflare D1 (SQLite distribué)
- **ORM** : Drizzle ORM + Drizzle Kit
- **Styles** : Tailwind CSS v4
- **Langage** : TypeScript

---

## ⚠️ Prérequis avant de commencer

- **Node.js** version 20 ou supérieure
- **npm** (installé avec Node.js)
- Un compte Cloudflare avec accès au projet (demander l'accès à [responsable du projet])
- **Recommandé** : travailler sous **WSL (Windows Subsystem for Linux)** si vous êtes sur Windows. `OpenNext` n'est pas totalement compatible avec Windows natif et peut provoquer des erreurs imprévisibles.

---

## Installation

```bash
git clone <url-du-repo>
cd gestion-mdn
npm install
```

⚠️ **Important** : vérifiez bien que vous vous trouvez dans le bon dossier après le clone (celui qui contient `package.json`, `next.config.ts` et le dossier `src/`). Ne créez jamais de sous-dossier de projet imbriqué par erreur — tous les fichiers de configuration (`wrangler.jsonc`, `drizzle.config.ts`, `next.config.ts`, etc.) doivent être **à la racine du projet**, au même niveau que `package.json`.

---

## Lancer le projet en local

Deux modes possibles selon ce que vous testez :

### Mode développement rapide (sans accès à la base D1)
```bash
npm run dev
```
Ouvre le site sur `http://localhost:3000`. Rapide, avec rechargement à chaud, mais **les fonctionnalités liées à la base de données (D1) ne fonctionneront pas** dans ce mode.

### Mode preview Cloudflare (avec accès à la base D1)
```bash
npm run preview
```
Simule l'environnement Cloudflare Workers en local, avec accès complet aux bindings (dont `env.DB`). **Utilisez ce mode dès que vous travaillez sur une fonctionnalité liée à la base de données.**

---

## Base de données (Drizzle + D1)

### Modifier le schéma

Le schéma de la base se trouve dans `src/db/schema.ts`. Après toute modification :

```bash
npx drizzle-kit generate
```

Cela génère un nouveau fichier SQL dans le dossier `migrations/`.

### Appliquer une migration

**En local** (recommandé pendant le développement) :
```bash
npx wrangler d1 migrations apply gestion-mdn-db --local
```

**En production** (à faire uniquement après validation, en général par le responsable du déploiement) :
```bash
npx wrangler d1 migrations apply gestion-mdn-db --remote
```

### Vérifier le contenu de la base

```bash
npx wrangler d1 execute gestion-mdn-db --local --command="SELECT name FROM sqlite_master WHERE type='table';"
```

(retirez `--local` pour interroger la base de production)

---

## Déploiement

```bash
npm run deploy
```

Cette commande build le projet puis le déploie sur Cloudflare Workers. À réserver aux personnes autorisées / après revue de code.

---

## Erreurs fréquentes et comment les éviter

Cette section documente les problèmes rencontrés lors de la mise en place initiale du projet — pour éviter de perdre du temps à les redécouvrir.

### `Module not found: Can't resolve '@/...'`
Vérifiez `tsconfig.json` — l'alias `@/*` doit pointer vers `./src/*` et non `./*`, puisque le code source est organisé dans le dossier `src/` :
```json
"paths": {
  "@/*": ["./src/*"]
}
```

### `next.config.js not found` lors de `npm run preview`
Le fichier `next.config.ts` doit exister **à la racine du projet** (là où se trouve `package.json`). Après l'avoir créé dans votre éditeur, vérifiez toujours qu'il est bien sauvegardé sur le disque avant de relancer une commande :
```bash
dir next.config*   # Windows PowerShell
ls next.config*    # Mac/Linux
```

### `Cannot find module 'react'` ou `'tailwindcss'`
Signifie que `npm install` n'a pas été lancé, ou que `node_modules` est incomplet/corrompu. Solution :
```bash
rm -rf node_modules package-lock.json   # Mac/Linux
# ou en PowerShell :
Remove-Item -Recurse -Force node_modules, package-lock.json

npm install
```

### `Couldn't find a D1 DB with the name or binding '...'`
Vérifiez que le nom utilisé dans vos commandes (`wrangler d1 ...`) correspond **exactement** (orthographe incluse) au `database_name` déclaré dans `wrangler.jsonc`. Le binding utilisé dans le code (`env.DB`) doit correspondre au champ `"binding"` de `wrangler.jsonc`, pas au nom de la base.

### `No migrations present`
Aucune migration n'a encore été générée. Lancez `npx drizzle-kit generate` avant d'appliquer une migration.



---

## Structure du projet

```
gestion-mdn/
├── src/
│   ├── app/          # Routes Next.js (App Router)
│   ├── db/           # Schéma Drizzle et connexion à la base (clients.ts, schema.ts)
│   ├── config/        
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── ui/
│   └── utils/
├── migrations/        # Migrations SQL générées par Drizzle Kit
├── drizzle.config.ts  # Config Drizzle Kit
├── next.config.ts     # Config Next.js
├── open-next.config.ts
├── wrangler.jsonc      # Config Cloudflare Workers / D1
└── package.json
```

---

## Bonnes pratiques 

- Toujours lancer `npm run preview` (pas seulement `npm run dev`) avant de pousser une modification touchant à la base de données, pour vérifier que les bindings Cloudflare fonctionnent réellement.
- Ne jamais committer directement sur la branche principale — passer par une pull request.
- Après avoir tiré (`git pull`) des changements d'un collègue, relancer `npm install` si le `package.json` a changé.
- En cas d'erreur inconnue, vérifier en premier lieu : (1) êtes-vous bien à la racine du projet ? (2) `node_modules` est-il à jour ? (3) le fichier en question est-il bien sauvegardé sur le disque ?

---

