# LGTech Design System

Implémentation code du design system Figma **"_AI_ Design System"** (fichier `ZnkEfBrYgHFvukNczSKvkA`).

Stack : React + TypeScript + Vite, styles en CSS Modules sur une couche de design tokens
(`src/tokens/tokens.css`, des custom properties CSS). Pas de Tailwind — les classes générées par
le MCP Figma sont converties dans ce système à chaque composant.

## Démarrer

```bash
npm install
npm run dev      # serveur de dev + galerie de composants sur http://localhost:5173
npm run build    # typecheck (tsc) + build de prod
npm run lint     # oxlint
```

`src/App.tsx` sert de galerie vivante : Foundations (couleurs, typographie, spacing, radius,
elevation) puis chaque composant avec tous ses états.

## Structure

```
src/
  tokens/tokens.css          Design tokens (custom properties), source unique de vérité
  foundations/Foundations.tsx  Rendu des fondations (couleurs, type scale, spacing, radius, elevation)
  components/
    Button/                 Primary · Secondary · Tertiary — Medium · Large
    Select/                 Combobox/listbox accessible — filled · focus · open · error · disabled
```

## Pages Figma couvertes

- ✅ Foundations (node `6:3`)
- ✅ Button (node `13:2`)
- ✅ Select (node `44:2`)
- ⏳ Getting Started, Screens, Input, Controls, Feedback, Content — pas encore accessibles
  (l'outil d'énumération des pages du MCP Figma reste bloqué sur "Cover"/"Button" ; il faut
  fournir le lien `node-id` de chaque page pour les récupérer).

## Écarts entre les Foundations et les composants existants

Relevés en comparant la page Foundations aux specs de Button/Select. À trancher côté design,
pas corrigés silencieusement ici pour rester fidèle aux maquettes actuelles :

- **Radius** : Foundations documente `0 / 8 / 16 / 24 / full`. Le champ Select utilise `10px`
  et son menu `12px`, deux valeurs hors échelle.
- **Spacing** : Foundations documente `8 / 16 / 32 / 64`. Button et Select ont besoin de pas
  plus fins (`4, 6, 10, 12, 13, 14, 20, 24`) non documentés — la grille 4px de `tokens.css` les
  couvre en attendant.
- **`--color-focus`** : c'est un alias de `brand/500` (`#1999d5`), pas une teinte de focus
  dédiée — à clarifier si c'est le comportement voulu pour tous les futurs composants interactifs.
- **États "disabled"** : Button a des tokens dédiés (`color-action-disabled-bg/-text`) ; Select
  réutilise les tokens sémantiques génériques (`color-bg-subtle`, `color-text-muted`). Les deux
  traitements sont visuellement cohérents avec les maquettes mais reposent sur des tokens
  différents — à harmoniser si l'intention est un seul token "disabled" partagé.
