# Écarts entre Foundations et les composants

Relevés en comparant la page **Foundations** (node `6:3`, source de vérité) aux specs de Button et
Select. Volontairement **non corrigés en silence** ici : les composants restent fidèles à leur
maquette Figma actuelle, et ces écarts sont à trancher côté design plutôt que par une décision
arbitraire du code.

## 1. Radius hors échelle

Foundations documente `0 / 8 / 16 / 24 / full`. Le champ du Select utilise `10px` et son menu
`12px`, deux valeurs absentes de cette échelle.

**Options pour l'équipe design** : ajouter `radius/10` et `radius/12` à Foundations (les
formaliser), ou faire converger Select vers `radius/8` ou `radius/16`.

## 2. Granularité du spacing

Foundations documente une échelle grossière `8 / 16 / 32 / 64`. Button (8, 12, 16, 24) et Select
(4, 6, 10, 12, 13, 14) ont besoin de pas bien plus fins. `tokens.css` définit ces valeurs
supplémentaires sur une grille 4px cohérente pour que tous les composants partagent la même
source, en attendant un arbitrage.

**Options** : documenter officiellement une échelle plus fine sur Foundations, ou resserrer les
paddings des composants existants sur `8/16/32/64` (impact visuel à valider — 13px de padding
vertical sur le champ Select passerait par exemple à 8 ou 16px).

## 3. `--color-focus` est un alias de `brand/500`

Ce n'est pas une teinte dédiée au focus : Figma utilise directement `#1999d5` (= `brand/500`) pour
l'anneau de focus du Select. Le token `--color-focus` alias cette primitive plutôt que de définir
une couleur indépendante.

**À confirmer** : est-ce le comportement voulu pour tout futur composant interactif (checkbox,
radio, input texte...), ou `brand/500` a-t-il été choisi ponctuellement pour le Select ?

## 4. Deux jeux de tokens "disabled"

Button a des tokens dédiés (`--color-action-disabled-bg` / `-text`, valeurs `#dce3ec` / `#94a3b8`).
Select réutilise les tokens sémantiques génériques `--color-bg-subtle` / `--color-text-muted`
(valeurs `#f7f9fc` / `#64748b`) pour son propre état disabled.

Dans le code actuel, `--color-disabled-bg` / `--color-disabled-text` pointent vers les valeurs du
Button (`#dce3ec` / `#94a3b8`) ; Select continue sciemment d'utiliser `--color-bg-subtle` /
`--color-text-muted` (un traitement plus doux, cohérent avec un champ de formulaire plutôt qu'un
bouton plein). Les deux rendus sont fidèles à leurs maquettes Figma respectives.

**À confirmer** : un seul jeu de tokens "disabled" partagé pour tous les composants, ou deux
traitements distincts selon le type de contrôle (plein vs. contour) ?
