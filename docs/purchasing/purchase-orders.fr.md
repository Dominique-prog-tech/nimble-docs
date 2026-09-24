# Commandes

Une **commande** consigne ce que vous avez commandé chez un fournisseur et où en est la livraison. Lors de
la réception, Nimble comptabilise les marchandises dans le stock — vous ne devez pas le suivre séparément.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Achats** puis sur **Commandes**.

## La liste

![La liste des commandes, avec les colonnes Numéro, Fournisseur, Date de commande et Statut.](../images/bestellingen-lijst-fr.png)

| Colonne | Ce qu'elle indique |
|---|---|
| **Numéro** | Votre numéro de commande |
| **Fournisseur** | Chez qui vous avez commandé |
| **Date de commande** | Quand vous avez commandé |
| **Statut** | Où en est la commande — voir [Le statut](#le-statut) |

Double-cliquez une ligne pour ouvrir la commande. Vous pouvez rechercher, trier, filtrer et exporter comme
dans les autres listes.

Cliquez sur le rail **Journal** à droite et choisissez une commande dans la liste. Le panneau affiche les
onglets **Tâches**, **Notes**, **Pièces jointes** et **Historique** de cette commande.

!!! info "Pas encore de fournisseur ou d'article ?"
    L'écran n'affiche alors pas de liste, mais un message qui vous invite à ajouter d'abord un fournisseur
    et un article. Sans eux, il n'y a rien à commander.

## Créer une commande

Cliquez sur **Nouvelle commande**. Complétez la carte **Données de la commande** :

| Champ | Remarque |
|---|---|
| **Numéro** | Obligatoire — vous le choisissez vous-même |
| **Fournisseur** | Obligatoire — choisissez parmi vos relations marquées comme fournisseur |
| **Date de commande** | Obligatoire — aujourd'hui par défaut |
| **Date de livraison prévue** | Quand le fournisseur livre. Vous voyez ainsi si le matériel critique arrive à temps |
| **Statut** | Une nouvelle commande est en **Brouillon** |
| **Note** | Accords avec le fournisseur, adresse de livraison, particularités |

Cliquez sur **Enregistrer**. S'il manque un champ obligatoire, le message en haut le cite par son nom. Après
l'enregistrement, vous restez sur la fiche.

## Ajouter des lignes

![La fiche de la commande B2026-0011 au statut Commandé : Données de la commande avec le fournisseur Ventura Air Systems BV et la Date de livraison prévue, deux lignes dont la colonne Encore attendu en orange, et en bas Enregistrer, Réceptionner, Enregistrer une livraison partielle, Annuler et Supprimer.](../images/bestelling-fiche-fr.png)

Sous la carte **Lignes** figure une rangée pour ajouter une ligne. Choisissez un **Article**, indiquez la
**Quantité** et cliquez sur **Ajouter une ligne**.

Si vous laissez le **Prix** vide, Nimble reprend le prix d'achat de l'article. Si cette livraison a un autre
tarif, indiquez le prix avant d'ajouter la ligne.

| Colonne | Ce qu'elle indique |
|---|---|
| **Article** | Numéro et nom de l'article |
| **Quantité** | Ce que vous avez commandé |
| **Reçu** | Ce qui est déjà arrivé |
| **Encore attendu** | Ce qui est encore en route pour cette ligne |
| **Prix** | Le prix unitaire |
| **Sous-total** | Quantité fois prix |

Sous les lignes figure le **Total**. La croix en fin de ligne supprime une ligne.

N'oubliez pas d'**enregistrer** : une ligne pas encore enregistrée ne peut pas être réceptionnée.

## Réceptionner des marchandises

Sur une commande enregistrée qui n'est ni **Reçu** ni **Annulé**, deux boutons figurent en bas de la fiche.
La différence compte :

- **Réceptionner** comptabilise en une fois tout ce qui reste ouvert. Utilisez-le quand la livraison est
  complète.
- **Enregistrer une livraison partielle** ouvre la fenêtre **Réception d'une livraison**, où vous indiquez
  par ligne ce qui est arrivé. La commande reste ensuite ouverte pour le reste.

![La fenêtre Réception d'une livraison avec les champs Reçu le et Note, et par ligne Article, Commandé, Reçu, Reçu maintenant et Prix.](../images/bestelling-ontvangst-fr.png)

Dans la fenêtre, complétez :

| Champ | Remarque |
|---|---|
| **Reçu le** | Aujourd'hui par défaut |
| **Note** | Bon de livraison, chauffeur, particularités |
| **Reçu maintenant** | Par ligne. Déjà rempli avec ce qui reste ouvert — adaptez-le s'il en est arrivé moins |
| **Prix** | Si le fournisseur facture autrement que commandé, adaptez le prix ici. Si vous le laissez tel quel, le prix de la commande s'applique |

Cliquez sur **Enregistrer**. Si aucune ligne ne porte de quantité, la fenêtre vous le signale. **Annuler**
ferme la fenêtre sans rien comptabiliser.

Après l'enregistrement, les marchandises sont dans le stock et le statut s'adapte : **Partiellement livré**
tant qu'il reste quelque chose d'ouvert, **Reçu** quand tout est arrivé.

### Les livraisons

Dès qu'une réception a eu lieu, la carte **Livraisons** apparaît. Elle indique par ligne reçue la **Date**,
l'**Article**, la **Quantité** et le **Prix**.

Si une ligne a été livrée à un autre prix que celui commandé, ce prix apparaît en orange. En dessous, un
message vous invite à le vérifier avant d'approuver la facture d'achat.

## Le statut

| Statut | Signification |
|---|---|
| **Brouillon** | Pas encore envoyée au fournisseur |
| **Commandé** | Envoyée, rien encore reçu |
| **Partiellement livré** | Une partie est arrivée, il reste quelque chose d'ouvert |
| **Reçu** | Tout est arrivé et comptabilisé dans le stock |
| **Annulé** | N'aura pas lieu |

Dans le champ **Statut**, vous choisissez vous-même uniquement **Brouillon**, **Commandé** ou **Annulé**.
**Partiellement livré** et **Reçu** découlent de l'enregistrement d'une livraison ; vous ne pouvez pas les
choisir à la main.

!!! info "Ce qui compte comme en route"
    Sur l'[état du stock](../inventory/stock-level.md), seul ce qui reste ouvert sur une commande au statut
    **Commandé** ou **Partiellement livré** est compté. Une commande en **Brouillon** n'est pas encore
    comptée.

Sur une commande **annulée**, plus rien ne peut être réceptionné.

## Supprimer une commande

Cliquez sur **Supprimer** sur la fiche et confirmez. La commande disparaît de la liste et arrive dans la
[corbeille](../administration/recycle-bin.md). De là, **Restaurer** la remet en place.

## Où le stock est visible

Après une réception, vous voyez le résultat sous **Stock → Articles**, dans l'onglet **Stock** de l'article.
Chaque réception y figure comme *Ontvangst bestelling* suivi du numéro de commande. Voir
[Articles](../inventory/articles.md).

## Voir aussi

- [État du stock](../inventory/stock-level.md)
- [Factures d'achat](purchase-invoices.md)
- [Corbeille](../administration/recycle-bin.md)
- [Travailler avec une fiche](../fiches.md)
