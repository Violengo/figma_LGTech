# Button

Source Figma : node `13:2`. « Déclenche une action explicite. Primary pour l'action principale,
Secondary pour une alternative, Tertiary pour une action discrète. »

```tsx
import { Button } from "./components/Button/Button";

<Button variant="primary" size="medium">Demander un audit</Button>
```

## Props

| Prop | Type | Défaut | Description |
|---|---|---|---|
| `variant` | `"primary" \| "secondary" \| "tertiary"` | `"primary"` | Un seul Primary par zone de décision (règle Figma). |
| `size` | `"medium" \| "large"` | `"medium"` | Medium = 48px de haut, Large = 56px. Hauteur minimale tactile respectée (WCAG). |
| `icon` | `IconName` | — | Voir [icons.md](../icons.md). |
| `iconPosition` | `"leading" \| "trailing"` | `"leading"` | Ignoré si `iconOnly`. |
| `iconOnly` | `boolean` | `false` | N'affiche que l'icône, dans un bouton carré. **Nécessite `aria-label`.** |
| `disabled` | `boolean` | `false` | Hérité de `ButtonHTMLAttributes`. |
| ...`ButtonHTMLAttributes<HTMLButtonElement>` | | | `onClick`, `type`, `aria-*`, etc. passent tels quels. |

Les états **Hover** / **Pressed** de la maquette Figma sont implémentés avec de vrais `:hover` /
`:active` CSS plutôt qu'une prop `state` — un bouton est interactif, pas une simple illustration
de variante.

## Icônes

```tsx
<Button icon="arrow-forward">Continuer</Button>                          // leading (défaut)
<Button icon="download" iconPosition="trailing">Télécharger</Button>     // trailing
<Button icon="call" iconOnly aria-label="Appeler LGTech" />              // icon-only
```

- La taille de l'icône suit la taille du bouton (20px en Medium, 24px en Large) — extension du
  design system, pas dans la maquette Figma actuelle (à valider avec l'équipe design).
- En dev, un bouton `iconOnly` sans `aria-label` déclenche un `console.warn` — les lecteurs d'écran
  n'ont sinon aucun nom accessible.

## États couverts

| État | Implémentation |
|---|---|
| Default | Styles de base par `variant` |
| Hover | `:hover:not(:disabled)` |
| Pressed | `:active:not(:disabled)` |
| Disabled | attribut natif `disabled`, tokens `--color-disabled-*` |
| Focus (clavier) | `:focus-visible`, anneau `--color-focus` (= brand/500) |

## Accessibilité

- Contraste texte/fond conforme WCAG AA sur les trois variants (vérifié sur les valeurs de la
  maquette).
- Hauteur minimale tactile de 48px respectée sur toutes les tailles.
- Anneau de focus visible (`:focus-visible`) distinct du simple hover.
