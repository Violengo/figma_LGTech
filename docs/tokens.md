# Design tokens

Source unique : `src/tokens/tokens.css`, des custom properties CSS. Tout composant doit lire ces
variables plutôt que des valeurs en dur — c'est ce qui permet de retheme le système en un seul
fichier.

## Couleurs

### Primitives

Ne s'utilisent jamais directement dans un composant — elles alimentent les tokens sémantiques
ci-dessous. Réservées à la maintenance du thème (Foundations, node `6:3`).

| Token | Valeur | Usage |
|---|---|---|
| `--color-brand-500` | `#1999d5` | Base de `--color-focus` |
| `--color-brand-700` | `#11638c` | Base de `--color-bg-brand`, `--color-text-link`, `--color-text-brand` |
| `--color-brand-900` | `#1f386e` | Base de `--color-bg-brand-strong`, état pressed du Button primary |
| `--color-neutral-0` | `#ffffff` | Base de `--color-bg-page` |
| `--color-neutral-100` | `#eef2f7` | Non consommée par un composant pour l'instant |
| `--color-neutral-900` | `#0f172a` | Base de `--color-text-primary` |

### Sémantiques (Foundations)

| Token | Valeur | Usage |
|---|---|---|
| `--color-bg-page` | `#ffffff` | Fond de page / surface par défaut |
| `--color-bg-subtle` | `#f7f9fc` | Fond discret (état disabled du Select, cartes elevation) |
| `--color-bg-brand` | `#11638c` | Fond de marque |
| `--color-bg-brand-strong` | `#1f386e` | Fond de marque renforcé |
| `--color-text-primary` | `#0f172a` | Texte principal |
| `--color-text-link` | `#11638c` | Liens |

### Sémantiques (composants — pas encore sur la page Foundations)

| Token | Valeur | Usage |
|---|---|---|
| `--color-text-muted` | `#64748b` | Placeholder, labels secondaires |
| `--color-text-inverse` | `#ffffff` | Texte sur fond de marque (Button primary) |
| `--color-bg-brand-subtle` | `#eef8fd` | Hover Secondary/Tertiary, option sélectionnée du Select |
| `--color-border-default` | `#dce3ec` | Bordures par défaut |
| `--color-status-danger` | `#c63838` | État d'erreur |
| `--color-focus` | alias de `--color-brand-500` | Anneau de focus — **pas** une teinte dédiée, voir [gaps.md](./gaps.md) |
| `--color-disabled-bg` / `--color-disabled-text` / `--color-disabled-border` | `#dce3ec` / `#94a3b8` / `#dce3ec` | État désactivé partagé |

### Action (Button)

| Token | Valeur |
|---|---|
| `--color-action-primary-default` | `#11638c` |
| `--color-action-primary-hover` | `#164f70` |
| `--color-action-primary-pressed` | `#1f386e` |
| `--color-action-secondary-default` | `#ffffff` |
| `--color-action-secondary-border` | `#11638c` |
| `--color-action-secondary-hover` | `#eef8fd` |
| `--color-action-secondary-pressed` | `#d8f0fa` |

## Typographie

Deux familles : **Space Grotesk** (voix de marque — titres) et **Open Sans** (lisibilité — corps
de texte et interface). Chargées via Google Fonts dans `index.html`.

| Style | Taille | Poids | Line-height | Tracking |
|---|---|---|---|---|
| Display/XL | 64px | 700 | 72px | -2px |
| Heading/H1 | 48px | 700 | 56px | -1.5px |
| Heading/H2 | 40px | 700 | 48px | -1px |
| Heading/H3 | 32px | 500 | 40px | -0.5px |
| Body/Large | 18px | 400 | 28px | — |
| Body/Medium | 16px | 400 | 24px | — |

Styles de texte propres aux composants (pas encore sur Foundations) : `--text-label-medium-*`
(Button), `--text-field-label-*` / `--text-body-*` / `--text-caption-*` (Select).

## Spacing

Échelle officielle Foundations : `8 / 16 / 32 / 64`. Étendue à `4 / 6 / 10 / 12 / 13 / 14 / 20 / 24`
pour couvrir les besoins réels de Button et Select — voir [gaps.md](./gaps.md).

## Radius

`--radius-0` (0), `--radius-8` (8px), `--radius-10` (10px, Select field), `--radius-12` (12px,
Select menu), `--radius-16` (16px), `--radius-24` (24px), `--radius-full` (999px). Les valeurs 10
et 12 sortent de l'échelle officielle `0/8/16/24/full` — voir [gaps.md](./gaps.md).

## Elevation

| Token | Valeur CSS |
|---|---|
| `--elevation-100` | `0px 1px 3px 0px rgba(15, 23, 42, 0.08)` |
| `--elevation-200` | `0px 4px 12px -2px rgba(15, 23, 42, 0.1)` |
| `--elevation-300` | `0px 12px 32px -8px rgba(15, 23, 42, 0.16)` |

Utilisée aujourd'hui par le menu ouvert du Select (`--elevation-200`).
