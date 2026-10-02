# Carnet de commandes

Le **carnet de commandes** est le travail accepté par vos clients qu'il vous reste à facturer. Cet écran montre le
montant du jour, son évolution par mois ou par semaine, et les projets qui le composent.

Tous les montants sont **hors TVA**.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Ventes → Carnet de commandes**. Sur le tableau de bord, un clic sur la tuile
**Carnet de commandes** ouvre le même écran.

Vous avez besoin du droit de consulter les factures.

![Le carnet de commandes : en haut le montant et le nombre de projets, en dessous le graphique par mois avec les
barres Accepté et Facturé et la ligne Carnet de commandes, et en bas la liste par projet.](../images/orderboek-fr.png "Le carnet de commandes par mois")

## En haut

| Tuile | Ce qu'elle signifie |
|---|---|
| **Carnet de commandes** | Le montant du jour : accepté et pas encore facturé, sur l'ensemble de vos projets |
| **Projets avec du travail au carnet** | Combien de projets y contribuent |

## L'évolution

Choisissez au-dessus du graphique **Par mois** (les douze derniers mois) ou **Par semaine** (les treize dernières
semaines).

| Dans le graphique | Ce qu'il montre |
|---|---|
| **Accepté** (barre) | Ce que vos clients ont accepté durant la période |
| **Facturé** (barre) | Ce qui a été facturé durant la période sur du travail accepté |
| **Carnet de commandes** (ligne) | La taille du carnet à la fin de la période |

Le mois ou la semaine en cours est plus pâle : ces chiffres peuvent encore bouger.

!!! info "Facturé ne compte que ce qui est déduit du carnet"
    Si vous facturez sur un projet plus que ce qui était accepté — travaux supplémentaires, révision de prix —
    cette part ne compte pas dans **Facturé**. Elle n'a jamais été dans le carnet. La ligne vaut donc toujours
    l'état précédent, plus ce qui a été accepté, moins ce qui a été facturé.

## La liste par projet

Sous le graphique figure chaque projet avec du travail au carnet, le plus important en haut :

| Colonne | Ce qu'elle signifie |
|---|---|
| **Numéro**, **Nom**, **Client** | Le projet |
| **Accepté** | La somme des devis acceptés du projet |
| **Facturé** | Les factures du projet, moins les notes de crédit |
| **Reste à facturer** | Ce que ce projet représente dans le carnet de commandes |

Double-cliquez sur une ligne pour ouvrir le projet. Avec **Exporter**, vous emportez la liste dans Excel.

Un projet qui se trouve dans la corbeille mais porte encore des devis acceptés compte et reçoit l'étiquette
*dans la corbeille*.

## Comment le carnet est calculé

- Seuls les devis **acceptés** comptent. Un devis envoyé reste une proposition.
- Une facture en **brouillon** ou **annulée** ne déduit rien. Une **note de crédit** réintègre son montant.
- Le carnet est calculé **par projet**, puis additionné. Un projet facturé au-delà de ce qui était accepté
  compte pour zéro. Il ne réduit pas le carnet de vos autres projets.
- Un devis compte au jour où il a été **accepté**.

## Messages sous le graphique

Sous le graphique peut figurer une ligne avec un point d'exclamation. Elle indique combien de devis ou de factures
font évoluer le graphique autrement que vous ne l'attendriez :

- Les **devis sans date d'acceptation** comptent à la **date du devis**. Elle précède généralement un peu
  l'acceptation réelle : dans le passé, le carnet monte alors un peu trop tôt.
- Les **devis sans projet** ne comptent pas : le carnet se calcule par projet.
- Les **factures sans projet** ne déduisent rien, pour la même raison.

!!! warning "Un carnet élevé ? Regardez les projets les plus anciens"
    Si du travail figure au carnet pour un projet terminé depuis longtemps, sa facture n'est généralement pas
    liée à ce projet. Le projet se choisit sur la facture elle-même, tant qu'elle est en brouillon : ensuite,
    la facture est figée.

## Voir aussi

- [Tableau de bord](../getting-started/dashboard.md)
- [Devis](quotes.md)
- [Factures](invoices.md)
