# Ordres de travail

Un ordre de travail est **ce qui doit être fait sur un chantier**, sous un projet. Les bons de travail qui
en dépendent sont les journées durant lesquelles on y a effectivement travaillé. Tout s'articule ainsi :

**Projet → ordre de travail → bon de travail.** Le projet est la mission du client, l'ordre de travail est
une partie du travail sur ce projet, et chaque bon de travail est une journée de chantier.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Travail → Ordres de travail**.

S'il n'existe encore aucun projet, l'écran vous demande d'abord d'en ajouter un : un ordre de travail
relève toujours d'un projet.

## La liste

![La liste Ordres de travail avec les colonnes Numéro, Projet, Description, Équipe, Statut et Planifié ; quatre ordres de travail sur quatre projets différents, et à droite le tiroir Journal replié.](../images/werkorders-lijst-fr.png)

| Colonne | Ce que c'est |
|---|---|
| **Numéro** | La référence de l'ordre de travail, par exemple WO-2026-004 |
| **Projet** | Le projet dont relève l'ordre de travail, avec son numéro et son nom |
| **Description** | Ce qui doit être fait — c'est ce qui distingue deux ordres de travail sur un même projet |
| **Équipe** | L'équipe qui exécute le chantier |
| **Statut** | À démarrer · En cours · Terminé |
| **Planifié** | Le jour prévu pour le travail |

- **Nouvel ordre de travail** ouvre une fiche vierge.
- Les trois boutons à côté de Rechercher sont le filtre, le sélecteur de colonnes et **Exporter**.

À droite se trouve le tiroir **Journal**. Il correspond à l'ordre de travail sur lequel se trouve votre
curseur : cliquez sur une ligne et dépliez le tiroir avec la flèche. Vous y trouvez les tâches, notes,
pièces jointes et l'historique de cet ordre de travail, sans ouvrir la fiche.

## La fiche

Vous ouvrez une fiche en double-cliquant sur une ligne.

![La fiche de l'ordre de travail WO-2026-004 avec en haut le numéro et le statut En cours, le bloc La mission, et en dessous le bloc Exécution avec 36 heures prestées, 3 bons de travail, la tuile Bons avec travaux supplémentaires et la liste des bons avec date, heures et fin de journée.](../images/werkorder-fiche-fr.png)

En haut figurent le numéro de l'ordre de travail et son statut. À gauche se trouvent les onglets **La
mission** et **Préparation du chantier**, à droite **Tâches**, **Notes**, **Pièces jointes** et
**Historique**.

En bas se trouve la barre de boutons : **Enregistrer**, **Ajouter un bon de travail**, **Annuler** et, à
part à droite, **Supprimer**. Si vous ne pouvez pas modifier l'ordre de travail, vous ne voyez que **Vers la
liste**.

### La mission

| Champ | Remarque |
|---|---|
| **Numéro** | Obligatoire. Nimble propose le numéro suivant, comme *WO-2026-0001* ; vous pouvez le modifier |
| **Projet** | Obligatoire. Le projet dont relève l'ordre de travail |
| **Description** | Ce qui doit être fait. C'est ce qui distingue l'ordre de travail du projet |
| **Équipe** | Qui exécute le chantier. Vous choisissez parmi les équipes actives |
| **Planifié le** | Le jour prévu |
| **Statut** | À démarrer · En cours · Terminé |

Si vous cliquez sur **Enregistrer** alors que **Numéro** ou **Projet** est vide, la fiche indique en haut ce
qui manque.

### Exécution

Ce bloc figure sur un ordre de travail enregistré. Vous ne le remplissez **pas** — il se base sur les bons
de travail rattachés à cet ordre.

| Tuile | Ce qu'elle montre |
|---|---|
| **Heures prestées** | La somme de toutes les heures de tous les bons |
| **Bons de travail** | Le nombre de bons de travail |
| **Bons avec travaux supplémentaires** | Combien de travaux supplémentaires doivent encore être décidés. N'apparaît que s'il y en a |
| **Travaux supplémentaires approuvés** | Combien de travaux supplémentaires sont approuvés, avec le montant estimé. N'apparaît que s'il y en a |

En dessous figure chaque bon avec sa date, ses heures, sa fin de journée et sa description. Si un bon porte
des travaux supplémentaires, une étiquette en indique l'état, par exemple *Suppl. · Facturé*. Cliquez sur
une ligne pour ouvrir ce bon.

**Ajouter un bon de travail** crée un nouveau bon déjà rattaché à cet ordre de travail.

## Préparation du chantier

Le deuxième onglet reprend sept points qui doivent être en ordre avant le démarrage. En haut, vous lisez
combien sont déjà en ordre, par exemple *3 points sur 7 en ordre*.

![L'onglet Préparation du chantier de WO-2026-003 : trois des sept points cochés, et un cadre orange qui nomme les quatre points manquants.](../images/werkorder-werfvoorbereiding-fr.png)

| Point | De quoi il s'agit |
|---|---|
| **Technique** | Dossier lu, risques connus |
| **Client** | Date de démarrage confirmée, personne de contact connue |
| **Équipe** | Affectée et briefée |
| **Matériel** | Commandé, livré ou prêt à charger |
| **Équipement** | Camionnette, grue, échafaudage, nacelle |
| **Sécurité** | Risques et mesures |
| **Administratif** | Permis, accès, parking |

Lorsque les sept sont cochés, l'ordre de travail porte en haut la mention **Prêt à démarrer** et l'écran
indique que le chantier peut commencer. S'il en manque, le cadre nomme **lequel** — pas seulement qu'il en
manque un.

!!! note "Uniquement tant que le chantier doit encore démarrer"
    La mention **Prêt à démarrer** et le message qui l'accompagne n'apparaissent que lorsque le statut est
    **À démarrer** — c'est à ce moment-là que la question se pose. Dès que le chantier est **En cours** ou
    **Terminé**, les sept cases restent affichées à titre de référence de ce qui était en ordre avant le
    démarrage, et l'écran l'indique.

!!! tip "Sept points, et aucune case unique « préparé »"
    Une seule case vous dirait *que* ce n'est pas en ordre, mais pas *ce* qui manque. C'est pourquoi les
    sept figurent séparément : vous pouvez confier le chantier à quelqu'un d'autre et cette personne voit
    immédiatement par où commencer.

## Supprimer un ordre de travail

Ce n'est possible **que si aucun bon de travail n'y est rattaché**. S'il y en a, Nimble refuse et indique
combien :

> **Attention** — Cet ordre de travail ne peut pas être supprimé : 3 bons de travail y sont encore
> rattachés, avec des heures prestées. Supprimez d'abord ces bons.

Si aucun bon n'y est rattaché, Nimble demande d'abord une confirmation.

La raison de ce refus est qu'un bon de travail porte des heures prestées. Si l'ordre de travail disparaît,
ces heures subsistent sans que personne ne voie encore à quelle mission elles se rapportent — et c'est
là-dessus que reposent le post-calcul et la facturation des travaux supplémentaires.

!!! note "La corbeille compte également"
    Un bon que vous avez supprimé se trouve dans la corbeille et peut en ressortir. Nimble le compte donc :
    sinon, vous pourriez supprimer l'ordre de travail puis restaurer le bon, avec une mission qui n'existe
    plus.

Vous souhaitez retirer un chantier terminé de votre liste quotidienne ? Mettez le statut sur **Terminé**
plutôt que de supprimer l'ordre de travail.

## Voir aussi

- [Projets](projects.md) — le projet dont relève un ordre de travail
- [Bons de travail](work-sheets.md) — les journées de travail sous un ordre de travail
- [Équipes](teams.md) — l'équipe qui exécute le chantier
