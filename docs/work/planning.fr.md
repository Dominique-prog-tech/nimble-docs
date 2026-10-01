# Planning

Le **planning** montre qui est où, et quand : par équipe et par jour, les chantiers, semaine par semaine. Vous
planifiez un chantier en le faisant glisser vers un jour.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Travail → Planning**.

![Le planning d'une semaine : en haut les compteurs, à gauche À planifier, à droite les jours par équipe avec les chantiers.](../images/planbord-fr.png)

## Les compteurs en haut

| Compteur | Ce qu'il indique |
|---|---|
| **Jours d'équipe planifiés** | Combien de jours d'équipe sont planifiés cette semaine, et sur combien de chantiers |
| **Jours-homme planifiés** | Ces mêmes jours multipliés par le nombre de membres de chaque équipe — avec l'effectif actuel |
| **Pas prêt à démarrer** | Les chantiers qui démarrent dans un jour ou sont en retard, alors que leur préparation n'est pas terminée |
| **Ne tient pas** | Les chantiers qui portent plus de travail que leur journée n'en compte |

Si **Pas prêt à démarrer** ou **Ne tient pas** dépasse zéro, les chantiers concernés figurent en dessous.

Si une équipe n'a pas de membres, ou si un chantier n'a pas encore d'équipe, il n'est pas compté dans les
jours-homme. L'écran le signale alors sous les compteurs : le chiffre est alors sous-évalué. Complétez les
membres sur la [fiche d'équipe](teams.md).

## Le tableau

Chaque ligne est une équipe ; la ligne du haut **Non attribué** contient les chantiers qui n'ont pas encore
d'équipe. Un trait de couleur devant le nom est la couleur que vous avez donnée à l'équipe sur la
[fiche équipe](teams.md). Chaque colonne est un jour. Avec **◀ Semaine précédente**, **Aujourd'hui** et **Semaine suivante ▶**,
vous naviguez ; **Afficher le week-end** ajoute le samedi et le dimanche.

Un chantier figure comme carte sur son jour, avec sa durée. En haut de la carte figure le **nom du chantier** ;
s'il n'est pas rempli, le nom du projet. En dessous figurent ce qui se fait et dans quelle commune. Le numéro du
projet apparaît lorsque vous survolez la carte avec la souris. Si un chantier s'étend sur plusieurs jours, les
jours suivants indiquent *suite de* avec le jour de début. La petite barre en bas d'un jour montre le **taux de
remplissage** de ce jour ; si elle devient rouge, il y a plus de travail que le jour n'en compte. Un jour ouvrable où une équipe n'a encore rien est **hachuré
en gris** : vous voyez ainsi d'un coup d'œil où il reste de la place.

Une durée se compte en **jours ouvrables** : un chantier de trois jours à partir du vendredi se poursuit le
lundi et le mardi. Le samedi, le dimanche et les **jours fériés légaux** sont sautés, sauf si le chantier
commence ce jour-là. Un jour férié est grisé sur le tableau, avec son nom sous la date. Si Nimble ne peut
momentanément pas récupérer les jours fériés, un message s'affiche au-dessus du tableau et ce jour compte comme
un jour ouvrable.

![Le tableau de planning d'une semaine avec un jour férié : ce jour est grisé, avec le nom du jour férié sous la date.](../images/planbord-feestdag-fr.png)

## Planifier un chantier

À gauche figure **À planifier** : les projets vendus ou en cours qui n'ont pas encore de planning, et les blocs
préparés. Avec **Rechercher un projet…**, vous retrouvez rapidement un projet.

- **Glisser :** faites glisser un chantier vers un jour, sur la ligne de la bonne équipe. Si vous le déposez
  **sur** un autre chantier, il se place avant celui-ci ; dans l'espace libre d'un jour, il se place à la fin.
  L'ordre d'une journée est l'ordre du travail.
- **Cliquer :** cliquez un chantier, puis cliquez un jour. Cela fonctionne aussi avec un doigt sur une tablette.
- **Remettre en attente :** faites glisser un bloc vers **À planifier** pour le remettre en attente, sans jour.

### Préparer un bloc

Si vous savez déjà combien de temps dure un chantier, mais pas encore quand, cliquez sur **Préparer un bloc**
près du projet. Le bloc figure alors sous **À planifier** avec sa durée, jusqu'à ce que vous le placiez sur un
jour. C'est aussi possible depuis le projet lui-même, dans l'onglet [Planning](projects.md#onglet-planning) de la
fiche du projet.

## Ouvrir un bloc

Cliquez sur l'icône d'une carte pour ouvrir le **Bloc de planning** :

| Champ | Signification |
|---|---|
| **Projet** | Le chantier. Vide = un **bloc libre**, par exemple pour de l'entretien ou une formation |
| **Équipe** | Qui l'exécute. Vide = **Non attribué** |
| **Jour** | Le jour de début. Vide = préparé, sans jour |
| **Durée (jours)** | La durée du travail, aussi en demi-journées |
| **Ordre de travail** | L'ordre de travail du projet auquel ce bloc appartient |
| **Description** | Ce qui se fait sur ce bloc, par exemple une phase. Obligatoire pour un bloc libre |
| **Note** | Une remarque pour l'équipe ou le planificateur |

Avec **Vers le projet**, vous ouvrez la fiche du projet. Avec Ctrl-clic (Cmd-clic sur un Mac), elle s'ouvre
dans un nouvel onglet, et le tableau reste affiché.

**Bloc libre** en haut du tableau crée directement un bloc sans projet.

!!! note "Des jours, pas des heures"
    Le planning compte en jours. Nimble ne fixe pas combien d'heures compte une journée d'équipe ; un bloc d'une
    demi-journée remplit donc une demi-journée, quelle que soit l'heure.

## Voir aussi

- [Projets](projects.md) — les chantiers que vous planifiez, avec leur préparation
- [Ordres de travail](work-orders.md) — le travail sur un projet
- [Équipes](teams.md) — qui fait partie d'une équipe, et donc combien de jours-homme compte un jour d'équipe
