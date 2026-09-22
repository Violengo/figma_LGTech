# Icons

Le système d'icônes s'appuie sur [`@material-symbols/svg-400`](https://www.npmjs.com/package/@material-symbols/svg-400)
(style *outlined*), la bibliothèque d'icônes qui correspond au **Material 3 Design Kit** référencé
comme librairie dans le fichier Figma. Les SVG sont pixel-exacts par rapport à la source Google —
aucune icône n'est redessinée à la main.

## Utilisation

```tsx
import { Icon } from "./icons/Icon";

<Icon name="arrow-forward" />                 // décorative (aria-hidden), 20px par défaut
<Icon name="download" size={24} />            // taille custom
<Icon name="warning" title="Attention" />     // porteuse de sens : aria-label + role="img"
```

La couleur suit `currentColor` : elle hérite de la couleur du texte du parent (`color: ...` en
CSS), donc un `<Icon>` dans un Button prend automatiquement la couleur du label du variant.

## Ajouter une icône

1. Vérifier que l'icône existe dans le catalogue [Google Fonts Icons](https://fonts.google.com/icons)
   (style *Outlined*).
2. Dans `src/icons/registry.ts`, ajouter l'import et l'entrée dans `icons` :

```ts
import myIcon from "@material-symbols/svg-400/outlined/my_icon.svg?raw";

export const icons = {
  // ...
  "my-icon": myIcon,
} as const;
```

3. `IconName` (le type autocomplété partout où un `icon` est attendu) se met à jour automatiquement
   — aucune autre modification nécessaire.

## Dans le Button

Voir [button.md](./components/button.md#icônes) pour les props `icon`, `iconPosition` et
`iconOnly`.

## Pourquoi pas un chargement dynamique de tout le paquet ?

`@material-symbols/svg-400` pèse ~90 Mo en local (tous les styles × tous les poids × toutes les
icônes), mais chaque fichier est un SVG indépendant : seules les icônes réellement importées dans
`registry.ts` finissent dans le bundle de production (Vite ne fait pas d'import global). Étendre
le registre n'alourdit donc l'app que du poids des icônes réellement utilisées.
