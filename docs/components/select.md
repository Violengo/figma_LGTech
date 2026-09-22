# Select

Source Figma : node `44:2`. « Permet de choisir une seule valeur dans une liste définie. Préférer
les options courtes. Utiliser une recherche dédiée au-delà d'environ 10 choix. Le label reste
toujours visible. »

```tsx
import { Select } from "./components/Select/Select";

const options = [
  { value: "1-10", label: "1–10 collaborateurs" },
  { value: "11-50", label: "11–50 collaborateurs" },
];

<Select label="Taille de l'entreprise" options={options} onChange={(value) => ...} />
```

## Props

| Prop | Type | Défaut | Description |
|---|---|---|---|
| `label` | `string` | — | Toujours visible (pas de floating label), requis. |
| `options` | `SelectOption[]` (`{ value, label }`) | — | Liste des choix. |
| `value` | `string` | — | Mode contrôlé. |
| `defaultValue` | `string` | — | Mode non-contrôlé. |
| `placeholder` | `string` | `"Sélectionner une option"` | |
| `errorMessage` | `string` | — | Affiche le champ en état erreur + le message sous le champ. |
| `disabled` | `boolean` | `false` | |
| `onChange` | `(value: string) => void` | — | Appelé à la sélection d'une option. |

## Pattern d'implémentation

Combobox/listbox custom (pas un `<select>` natif, conformément à la maquette) :

- `<button role="combobox">` déclencheur avec `aria-haspopup="listbox"`, `aria-expanded`,
  `aria-labelledby` pointant vers le `<label>`.
- `<ul role="listbox">` d'options `role="option"` avec `aria-selected`.
- Fermeture au clic extérieur (`pointerdown` sur `document`) et à `Escape`.
- Ouverture au clic, à `Enter`, `Espace` ou `ArrowDown` sur le déclencheur.

## États couverts

| État Figma | Comment il est produit dans le code |
|---|---|
| Default | Placeholder affiché, bordure `--color-border-default` |
| Hover | `:hover` sur le champ |
| Focus | `:focus-visible`, bordure 2px `--color-focus` |
| Filled | Une `value`/`defaultValue` est définie |
| Open | `open === true` (state interne) |
| Error | `errorMessage` fourni |
| Disabled | `disabled` |

## Écart connu

Le radius du champ (10px) et du menu (12px) ne correspondent à aucune valeur de l'échelle
`--radius-*` de Foundations (`0/8/16/24/full`) — détail dans [../gaps.md](../gaps.md).
