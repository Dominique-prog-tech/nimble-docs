# Documents reçus

Des factures que vos fournisseurs vous ont envoyées via le réseau **Peppol**. ADM One les reçoit pour vous ;
sur cet écran, vous en faites une facture d'achat.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Achats → Documents reçus**.

<!-- AFBEELDING: la liste Documents reçus avec au moins deux documents — possible seulement quand la boîte de démo contient des documents ; elle est vide aujourd'hui -->

## La liste

| Colonne | Ce qu'elle indique |
|---|---|
| **Reçu le** | Le jour où le document est arrivé |
| **Fournisseur** | Le nom repris du document. Si la mention *non lu depuis l'UBL* apparaît, ce nom n'a pas pu être extrait du document — ouvrez-le alors pour voir de qui il vient |
| **Numéro** | Le numéro de facture du fournisseur |
| **Total** | Le montant total, précédé de la devise |

En fin de ligne figurent les boutons **Consulter** et **Traiter**. S'il n'y a rien, vous lisez
*Aucun document reçu.*

## Consulter un document

**Consulter** ouvre le document original tel que le fournisseur l'a envoyé. C'est la pièce sur laquelle vous
vous appuyez en cas de discussion — pas ce que Nimble en a fait.

## Traiter un document

**Traiter** en fait une facture d'achat. Nimble recherche le fournisseur sur son **numéro de TVA**. Les
points, les espaces et les tirets n'entrent pas en ligne de compte, les majuscules non plus. Seules les
relations marquées comme fournisseur sont prises en compte.

En cas de succès, la facture apparaît dans [Factures d'achat](purchase-invoices.md) avec la mention *En
attente d'approbation*. Sa **Note** indique à quel fournisseur et sur quel numéro de TVA elle a été liée. Le
document disparaît de cette liste.

L'écran ne crée pas de facture et en donne la raison lorsque :

| Cas | Ce que vous faites |
|---|---|
| Le document ne porte **pas de numéro de TVA** | Ouvrez-le pour voir de qui il vient, et saisissez-le avec **Nouvelle facture d'achat** sur l'écran Factures d'achat |
| **Aucune relation** ne porte ce numéro de TVA | Créez le fournisseur, ou complétez le numéro de TVA sur la relation existante |
| **Deux relations ou plus** portent le même numéro de TVA | Corrigez d'abord cela — impossible sinon de déterminer laquelle est visée |
| Le document ne porte **pas de numéro de facture ou pas de montant total** | Ouvrez-le et saisissez-le à la main |
| Le document est **déjà traité** | Le message cite la facture qui en est issue |

!!! warning "Traiter deux fois le même document est impossible"
    Nimble retient de quel document est issue une facture — même si cette facture passe ensuite dans la
    corbeille. À défaut, la même dette figurerait deux fois dans vos livres.

!!! info "Déjà saisie à la main ?"
    Un numéro de facture est unique par fournisseur. Si vous avez déjà saisi la même facture à la main,
    Nimble refuse le document avec un message.

!!! info "Facture créée, mais le document reste dans la liste"
    Si ADM One n'a pas pu confirmer le traitement, la facture existe bien, mais le document reste dans cette
    liste. Le message l'indique. Une deuxième tentative ne crée pas de deuxième facture.

## Quand ADM One est injoignable

L'écran n'affiche alors pas de liste, mais un cadre indiquant qu'ADM One est actuellement injoignable, avec
le bouton **Réessayer**.

Une liste vide signifie donc toujours que rien n'est arrivé. Si le cadre est affiché, vous ne savez pas ce
qui est arrivé : ne clôturez pas votre journée sur cet écran.

## Voir aussi

- [Factures d'achat](purchase-invoices.md)
