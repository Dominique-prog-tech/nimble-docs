# Documents reçus

Des factures que vos fournisseurs vous ont envoyées via le réseau **Peppol**. ADM One les reçoit pour vous ;
sur cet écran, vous en faites une facture d'achat.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Achats → Documents reçus**.

La liste indique, par document, la date de réception, le fournisseur, le numéro de facture et le total.

## Consulter un document

**Consulter** ouvre le document original tel que le fournisseur l'a envoyé. C'est la pièce sur laquelle vous
vous appuyez en cas de discussion — pas ce que Nimble en a fait.

## Traiter un document

**Traiter** en fait une facture d'achat. Nimble recherche le fournisseur sur son **numéro de TVA** ; les
points, les espaces et les codes pays n'entrent pas en ligne de compte.

L'écran ne fait rien et en donne la raison lorsque :

- le document ne porte **pas de numéro de TVA** ;
- **aucun fournisseur** ne porte ce numéro ;
- **deux fournisseurs** portent le même numéro — impossible alors de déterminer lequel est visé ;
- le document ne porte **ni numéro de facture ni montant total**.

!!! warning "Traiter deux fois le même document est impossible"
    Nimble retient de quel document est issue une facture. À défaut, la même dette figurerait deux fois dans
    vos livres — avec un paiement pour chacune.

Un document traité disparaît de cette liste et apparaît dans **Factures d'achat**, avec la mention *En
attente d'approbation*.

!!! warning "Une liste vide peut signifier deux choses"
    Le plus souvent : rien n'est arrivé. Mais si la connexion avec ADM One est interrompue, un bandeau
    l'indique en haut — et la liste n'est alors pas un constat. Ne clôturez pas votre journée sur une liste
    surmontée de ce message.
