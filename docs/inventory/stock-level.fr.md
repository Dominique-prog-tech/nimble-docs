# État du stock

L'**état du stock** n'est pas un aperçu de tout ce qui est en réserve — cela figure sur la liste des
articles. C'est un **signal de commande** : uniquement les articles dont le stock passe sous le minimum
défini, avec en tête ceux qu'il faut encore commander.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Stock** puis sur **État du stock**.

![L'état du stock avec en haut la phrase sur le programme actuel et quatre tuiles, et en dessous un article sous son minimum.](../images/voorraadstand-fr.png)

!!! warning "Le stock est encore tenu dans votre programme actuel"
    En haut de l'écran figure : *Le stock est encore tenu dans votre programme actuel. Ces chiffres se
    rempliront au basculement.* Tant que vous travaillez avec les deux programmes, les stocks de cet écran ne
    viennent donc pas encore de Nimble. Voir aussi [Articles](articles.md).

## D'abord : quels articles sont concernés ?

Uniquement les articles **avec un minimum**. Un minimum vide signifie « nous ne suivons pas cet article ».
Cette distinction a sa raison d'être : sans seuil, chaque article jamais créé apparaîtrait ici en
permanence dans le rouge, et plus personne n'y prêterait attention.

Vous définissez le minimum sur la **fiche article**, dans le champ **Stock minimum**, avec le **Stock
cible**.

Si aucun article n'a encore de minimum, l'écran n'affiche pas de liste mais un message qui renvoie à la
fiche article. Sans seuil, cet écran ne peut pas dire s'il manque quelque chose.

## Les quatre tuiles

| Tuile | Compte | Un clic vous mène à |
|---|---|---|
| **Suivis** | les articles avec un minimum | **Articles** |
| **À recommander** | les lignes où vous devez réellement commander — ce qui est en route est compté | **Commandes** |
| **Déjà en rupture** | les lignes où le matériel n'est pas là aujourd'hui — même s'il y en a assez en route | — |
| **Sans seuil** | les articles sans minimum, qui ne sont pas suivis | — |

L'écart entre **Déjà en rupture** et **À recommander** correspond au nombre d'articles dont le
réapprovisionnement est déjà en route.

## Les colonnes

| Colonne | Ce qu'elle indique |
|---|---|
| **Article** | Numéro, nom et, entre parenthèses, l'unité, valable pour toute la ligne |
| **En stock** | Le stock actuel |
| **En route** | Ce qui est commandé mais pas encore livré |
| **Minimum** | Sous cette limite, vous devez réapprovisionner |
| **Cible** | Le stock que vous souhaitez maintenir |
| **À recommander** | Combien il faut ajouter pour revenir à niveau |

Le **stock lui-même** est coloré, et cette différence compte : **rouge** signifie qu'il faut encore
commander, **orange** qu'il y a trop peu aujourd'hui mais que la livraison est déjà en cours.

Double-cliquez une ligne pour ouvrir la fiche article. Vous pouvez aussi exporter la liste. Si aucun article
suivi ne passe sous son minimum, vous lisez *Aucun article suivi ne passe sous son minimum.*

!!! info "Ce qui est en route est compté"
    C'est la raison d'être de cet écran à côté de la colonne stock sur la liste des articles. Ce que vous
    avez déjà commandé est pris en compte — sinon vous commandez une deuxième fois ce qui est déjà en route.
    Est compté ce qui reste ouvert sur les commandes au statut **Commandé** ou **Partiellement livré** ; une
    commande en **Brouillon** ne compte pas.

## « déjà commandé » au lieu d'un nombre

Si la mention **déjà commandé** apparaît sous **À recommander**, il y a trop peu en stock aujourd'hui, mais
le réapprovisionnement est en route et il suffit. Vous n'avez rien à faire.

Une telle ligne figure quand même dans la liste, car physiquement il y a une rupture : celui qui a besoin du
matériel aujourd'hui doit savoir qu'il n'est pas là. C'est pourquoi les tuiles **À recommander** et **Déjà
en rupture** comptent différemment.

## Combien il faut recommander

**À recommander** complète jusqu'à votre **cible**, pas seulement jusqu'au-dessus du minimum. Si un article
est à 24 avec un minimum de 25 et une cible de 100, la proposition est de 76 — pas de 1. Vous achetez ainsi
une quantité suffisante en une fois au lieu d'une poignée chaque semaine.

Si un article n'a pas de valeur cible, le complément va jusqu'au minimum.

## Ce que vous faites avec cet écran

La liste indique ce qui doit se passer ; la commande elle-même se fait sous **Achats → Commandes**. La tuile
**À recommander** vous y mène directement.

## Voir aussi

- [Articles](articles.md)
- [Commandes](../purchasing/purchase-orders.md)
