# Bons de livraison

Avec un bon de livraison, vous enregistrez ce que vous livrez à un client, sans prix : à la livraison, les articles sortent du stock, et vous reprenez ensuite les bons livrés ensemble sur une facture.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Stock → Bons de livraison**.

Vous voyez l'écran si vous pouvez consulter le stock. Créer, modifier, livrer ou envoyer un bon de livraison demande le
droit de modifier le stock. **Créer une facture** demande le droit de modifier les factures.

## La liste

![La liste Bons de livraison avec les colonnes Numéro, Client, Date de livraison, Statut et Facture : deux bons de De Wilde Interieur BV, LEV-2026-0002 À livrer et LEV-2026-0001 Livré, en haut le bouton Nouveau bon de livraison et à droite la barre étroite Journal.](../images/leverbonnen-lijst-fr.png)

| Colonne | Ce que vous voyez |
|---|---|
| **Numéro** | Le numéro du bon de livraison, par exemple `LEV-2026-0001`. Les bons de livraison ont leur propre série de numéros ; un nouveau bon reçoit son numéro au premier enregistrement |
| **Client** | À qui vous livrez |
| **Date de livraison** | Le jour de la livraison |
| **Statut** | **À livrer** ou **Livré** |
| **Facture** | Le numéro de la facture sur laquelle figure le bon, ou *brouillon* si cette facture est encore un brouillon. Vide tant que le bon n'est pas facturé |

- **Nouveau bon de livraison** ouvre un bon vide.
- **Double-cliquez** sur une ligne pour ouvrir le bon.
- À droite de la liste figure la barre étroite **Journal** : dépliez-la pour voir les tâches, les notes, les pièces jointes, les
  e-mails et l'historique du bon que vous avez sélectionné dans la liste.

## Le bon de livraison

![Le bon de livraison LEV-2026-0002 pour De Wilde Interieur BV, À livrer : dans la carte Données du bon de livraison, le client, sous Adresse le texte gris Par défaut : Magazijn Gent avec l'adresse, Aucun projet, la date de livraison, Votre référence BST-4471 et une note ; en dessous la carte Lignes avec deux articles et une ligne de texte libre, chacun avec une quantité et une unité, et en bas les boutons Enregistrer, Livrer, Imprimer, Envoyer au client, Annuler et Supprimer.](../images/leverbon-fiche-fr.png)

En haut figurent le numéro et le statut. La fiche comporte l'onglet **Général** et, à droite, le **Journal** : voir
[Travailler avec une fiche](../fiches.md).

### La carte Données du bon de livraison

| Champ | Explication |
|---|---|
| **Client** | Obligatoire. Choisissez parmi vos clients |
| **Adresse** | Visible uniquement si le client a des [adresses](../relations.md#onglet-adresses) supplémentaires. Vide = l'adresse de livraison par défaut du client, ou son adresse principale s'il n'en a pas ; le texte gris indique de quelle adresse il s'agit. Ou choisissez une autre adresse du client |
| **Projet** | Facultatif. Vous choisissez uniquement parmi les projets de ce client. Si vous choisissez un autre client, un projet du client précédent est retiré |
| **Date de livraison** | Obligatoire. Pour un nouveau bon, elle est fixée à aujourd'hui |
| **Votre référence** | Facultatif. La référence du client, par exemple son numéro de commande |
| **Note** | Un texte qui figure sous les lignes du bon de livraison |

### La carte Lignes

Une ligne est un article ou un texte libre, avec une quantité et une unité. Un bon de livraison ne comporte pas de prix.

1. Choisissez en bas un **Article**. Vous choisissez parmi le matériel et les services de votre [catalogue](articles.md).
2. Complétez au besoin la **Description** : pour un article, un complément ; sans article, le texte de la ligne.
3. Indiquez la **Quantité** et cliquez sur **Ajouter**. L'unité suit l'article.

Vous adaptez la quantité d'une ligne dans la liste ; la croix rouge retire une ligne. Cliquez ensuite sur **Enregistrer**.

## Livrer

Cliquez sur **Livrer** lorsque les marchandises partent. Nimble demande d'abord une confirmation. Ensuite :

- les articles en stock sortent du stock. Un service et une ligne de texte libre n'ont pas de stock ;
- l'adresse est fixée sur le bon de livraison ;
- le bon passe à **Livré** et vous ne pouvez pas le modifier : les champs sont verrouillés.

Si vous n'avez pas encore enregistré, Nimble indique *Enregistrez d'abord le bon de livraison.* Un bon sans lignes ne peut
pas être livré.

![Le bon de livraison LEV-2026-0001 livré pour De Wilde Interieur BV : le statut Livré, sous Adresse le texte Magazijn Gent avec l'adresse et enregistrée sur le document, le projet Ventilatie kantoorverdieping, les lignes sans champs de saisie, et en bas les boutons Annuler la livraison, Imprimer, Envoyer au client et Créer une facture.](../images/leverbon-geleverd-fr.png)

Sur un bon livré figurent les boutons **Annuler la livraison**, **Imprimer**, **Envoyer au client** et **Créer une facture**.

**Annuler la livraison** demande d'abord une confirmation. Les articles reviennent en stock et le bon repasse à **À livrer**,
pour que vous puissiez l'adapter. L'adresse suit alors à nouveau la fiche de relation, jusqu'à la prochaine livraison. Si le
bon figure sur une facture, ce n'est pas possible.

## Les boutons

| Bouton | Quand | Ce qu'il fait |
|---|---|---|
| **Enregistrer** | À livrer | Enregistre vos modifications |
| **Livrer** | À livrer, après l'enregistrement | Sort les articles du stock et fixe l'adresse |
| **Annuler la livraison** | Livré, tant que le bon ne figure sur aucune facture | Remet les articles en stock et rend le bon à nouveau modifiable |
| **Imprimer** | Dès que le bon est enregistré | Ouvre l'aperçu avant impression |
| **Envoyer au client** | Dès que le bon est enregistré | Ouvre la fenêtre d'envoi avec le bon en PDF |
| **Créer une facture** | Livré, tant que le bon ne figure sur aucune facture | Crée un brouillon de facture, voir ci-dessous |
| **Annuler** | À livrer | Revient à la liste sans enregistrer |
| **Supprimer** | À livrer | Après confirmation, le bon va dans la **Corbeille**, où vous pouvez le restaurer |

Sur un bon livré, vous revenez avec **Vers la liste** en haut.

## Imprimer et envoyer

**Imprimer** affiche le bon de livraison tel que le client le reçoit. En haut figurent votre en-tête et l'adresse de
livraison, puis la date de livraison, **Votre référence** et le projet, avec l'adresse du chantier si le projet en a une.
Viennent ensuite les lignes avec leur description, leur quantité et leur unité, et en bas un cadre **Pour réception** avec
de la place pour le nom, la date et la signature de la personne qui reçoit les marchandises. Tant que le bon n'est pas livré,
*PROJET* figure à côté du numéro. Le bon suit la **Langue des documents** du client.

**Envoyer au client** ouvre la fenêtre d'envoi avec l'adresse e-mail du client et le bon de livraison en pièce jointe. Le
texte se règle dans [Modèles de mail](../settings/mail-templates.md), sous *Bon de livraison au client*.

## Créer une facture

Sur un bon livré, cliquez sur **Créer une facture**. La fenêtre affiche ce bon et les autres bons livrés du même client qui
ne figurent encore sur aucune facture. Ce bon est coché ; cochez les autres qui doivent figurer sur la facture. Cliquez
ensuite sur **Créer le brouillon**. Nimble crée un brouillon de facture et l'ouvre.

- Pour chaque bon figure une ligne de titre avec le numéro et la date de livraison, suivie de ses lignes.
- Chaque ligne avec un article reçoit un prix : d'abord un [accord de prix](../sales/price-agreements.md) en vigueur avec
  le client, puis les [prix de vente dégressifs](articles.md#prix-de-vente-degressifs) de l'article pour cette quantité,
  et à défaut le prix de vente.
- Une ligne sans article ne reçoit pas de prix : vous le complétez vous-même sur le brouillon.
- Si tous les bons appartiennent au même projet, le projet suit. Il en va de même pour **Votre référence**.

Vérifiez le brouillon et finalisez-le comme toute [facture](../sales/invoices.md). Un bon facturé affiche en haut *Ce bon de
livraison figure sur la facture …* avec le lien **Vers la facture**, et ne figure pas une deuxième fois sur une facture. Si
vous supprimez le brouillon de facture, le bon peut à nouveau être facturé.

## Un bon de livraison depuis un projet

Dans l'onglet [Matériel](../work/projects.md#onglet-materiel) d'un projet, le bouton **Créer un bon de livraison** figure
au-dessus des articles du projet. Vous le voyez si le projet a des articles du projet et que vous pouvez modifier le stock. Il
ouvre un nouveau bon de livraison avec le client, le projet et les articles du projet déjà remplis. Adaptez les quantités à
ce que vous livrez maintenant, et enregistrez.

Un article parti vers le projet via un bon de livraison livré n'est pas proposé comme matériel par le bon de travail de
l'application mobile : il a déjà quitté le magasin.

## Erreurs fréquentes

!!! warning
    - **Livrer sans enregistrer.** Nimble ne livre que ce qui est enregistré. Cliquez d'abord sur **Enregistrer**.
    - **Vouloir modifier un bon livré.** Annulez d'abord la livraison ; vous pouvez ensuite l'adapter et le livrer à
      nouveau.
    - **Vouloir annuler un bon facturé.** Tant qu'il figure sur une facture, la livraison ne peut pas être annulée. Si
      cette facture est encore un brouillon, supprimez-la d'abord.
    - **Mettre le même matériel sur le bon de travail.** Ce qui est parti avec un bon de livraison est déjà sorti du stock.
      Si vous le mettez aussi sur un bon de travail, il sort une deuxième fois du stock.

## Voir aussi

- [Articles](articles.md) : les prix de vente dégressifs et le stock d'un article
- [Relations](../relations.md#onglet-adresses) : l'adresse de livraison d'un client
- [Factures](../sales/invoices.md) : la facture que vous créez à partir de bons de livraison
- [Projets](../work/projects.md#onglet-materiel) : créer un bon de livraison depuis les articles du projet
