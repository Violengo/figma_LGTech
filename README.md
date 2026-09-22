# LGTech Design System

Implémentation code du design system Figma **"_AI_ Design System"** (fichier `ZnkEfBrYgHFvukNczSKvkA`).

React + TypeScript + Vite. Styles en CSS Modules sur une couche de design tokens
(`src/tokens/tokens.css`, des custom properties CSS) — pas de Tailwind. Icônes
[Material Symbols](https://fonts.google.com/icons) (cohérent avec le Material 3 Design Kit
référencé dans Figma), swappables dans les composants via un registre central.

📖 **[Documentation complète →](./docs/README.md)** (tokens, composants, icônes, écarts avec Figma)

## Démarrer

```bash
npm install
npm run dev      # galerie de composants sur http://localhost:5173
npm run build    # typecheck + build de prod
npm run lint      # oxlint
npm run test      # vitest
```

`src/App.tsx` est une galerie vivante — Foundations, Button, Select, Icons — avec une nav latérale.
Comme elle importe les composants réels, elle ne peut pas désynchroniser du code.

## Structure

```
src/
  tokens/tokens.css            Design tokens (custom properties), source unique de vérité
  foundations/                 Rendu des fondations (couleurs, type scale, spacing, radius, elevation)
  icons/
    registry.ts                Registre d'icônes Material Symbols (ajouter = une ligne)
    Icon.tsx                   Composant <Icon name="..." />
  components/
    Button/                    Primary · Secondary · Tertiary — Medium · Large — icônes swappables
    Select/                    Combobox/listbox accessible — filled · focus · open · error · disabled
    index.ts                   Exports publics
docs/                          Documentation détaillée (voir lien ci-dessus)
```

Chaque composant a ses tests (`*.test.tsx`, Vitest + Testing Library) : interactions clavier/souris,
états, accessibilité (nom accessible, `aria-*`).

## Pages Figma couvertes

- ✅ Foundations (node `6:3`)
- ✅ Button (node `13:2`)
- ✅ Select (node `44:2`)
- ⏳ Getting Started, Screens, Input, Controls, Feedback, Content — pas encore accessibles depuis
  cette session (l'énumération automatique des pages du MCP Figma reste bloquée sur "Cover" /
  "Button" ; fournir le lien `node-id` de chaque page permet de les récupérer directement).

## Écarts Foundations ↔ composants

Volontairement non corrigés en silence — détail et options dans [docs/gaps.md](./docs/gaps.md) :
radius du Select hors échelle officielle, granularité du spacing, `--color-focus` alias de
`brand/500`, deux jeux de tokens "disabled".
