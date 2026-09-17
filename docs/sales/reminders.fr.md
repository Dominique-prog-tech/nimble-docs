# Rappels

Quelles factures ouvertes méritent un rappel. Trois rappels, puis l'annonce d'un recouvrement.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Ventes → Rappels**. L'écran demande le droit de modifier les factures.

![L'écran Rappels avec, en haut, un bandeau coloré indiquant qu'un rappel est prêt, puis la phrase sur les délais, et deux factures : l'une portant l'étiquette Premier rappel et les boutons Envoyer…, Enregistrer seulement et Exclure des rappels, l'autre avec Suivant à partir du.](../images/rappels-overzicht-fr.png)

!!! warning "Rien ne part automatiquement"
    Nimble n'envoie **aucun** rappel automatiquement. En haut de l'écran figure le nombre de rappels prêts,
    et ce même chiffre apparaît dans le menu à côté de **Ventes**. Vous le voyez donc sans ouvrir cet écran —
    car ce que personne ne voit ne se fait pas.

Sous ce message figure le réglage de vos délais, par exemple *Le premier rappel suit 14 jours après
l'échéance ; chaque suivant 14 jours après le précédent.*

## Ce que montre une carte

Chaque facture ouverte a sa propre carte. Un brouillon, une note de crédit et une facture entièrement payée
n'y figurent pas.

- Le **numéro de facture** et le client. Cliquez le numéro pour ouvrir la facture.
- La **date d'échéance**, et depuis combien de jours la facture est échue.
- **Déjà envoyé :** avec le dernier rappel parti.
- À droite, le **solde ouvert**, et l'étiquette du rappel prêt à partir.

Si rien n'est prêt, la carte indique pourquoi :

| Texte | Signification |
|---|---|
| **Suivant à partir du** et une date | Pas encore à échéance ; à partir de ce jour, le rappel suivant est prêt |
| **Hors gestion des rappels** | Vous avez mis la facture de côté |
| **Pas de date d'échéance** | Rien à partir de quoi compter. Complétez l'échéance sur la facture |
| **Tout a été envoyé, jusqu'au recouvrement inclus** | La chaîne est terminée |

## Les quatre étapes

| Étape | Ton |
|---|---|
| **Premier rappel** | Aimable : la facture vous a sans doute échappé |
| **Deuxième rappel** | Avec le nombre de jours, et la question de savoir si quelque chose pose problème |
| **Dernier rappel** | Annonce que le dossier sera sinon transmis pour recouvrement |
| **Mise en demeure — recouvrement** | La transmission elle-même, avec les frais à charge du débiteur |

Il n'y en a jamais qu'**un seul** de prêt. Le suivant n'est dû qu'après l'écoulement de l'intervalle, compté
à partir du rappel précédent — pas de la date d'échéance. Un client qui n'a pas payé depuis trois mois ne
reçoit donc pas trois courriels le même jour.

## Régler les deux délais

Sur la **Fiche d'entreprise** (Administration → Fiche d'entreprise) figurent deux nombres côte à côte :

| Champ | Ce qu'il détermine |
|---|---|
| **Premier rappel après (jours)** | Combien de temps vous laissez le client tranquille après l'échéance |
| **Ensuite tous les (jours)** | Le rythme ensuite : entre le premier et le deuxième rappel, et entre chacun des suivants |

Ce sont deux décisions distinctes. Avec un seul nombre, il faudrait arbitrer entre la tolérance et le
rythme : court signifierait aussitôt presser, long signifierait que le deuxième rappel se fait attendre des
semaines.

Si vous laissez un champ vide, quatorze jours s'y appliquent. Vide ne signifie donc pas : pas de rappels.

## Envoyer

**Envoyer…** ouvre la fenêtre **Envoyer un rappel** avec :

- **À** — l'adresse e-mail du client ;
- **Objet** — avec le numéro de facture ;
- **Message** — une proposition de texte adaptée à l'étape, dans la langue du client.

Vous adaptez ce texte avant l'envoi — qui connaît son client rédige autrement son premier rappel. Cliquez
sur **Envoyer et enregistrer**. Nimble envoie l'e-mail et enregistre que le rappel est parti, avec la date.
C'est ce qui décale l'étape suivante.

!!! warning "La facture n'est pas jointe"
    Faites référence au numéro de facture dans votre texte. Il figure déjà par défaut dans la proposition.

Si le client n'a pas d'adresse e-mail, **Envoyer…** est grisé et vous lisez : *Ce client n'a pas d'adresse
e-mail. Envoyez le rappel en dehors de Nimble et enregistrez-le ici.*

**Enregistrer seulement** s'utilise lorsque vous avez contacté le client en dehors de Nimble — par téléphone
ou par courrier. La chaîne avance alors normalement.

!!! info "Envoyé mais pas enregistré"
    Si l'e-mail part mais que l'enregistrement échoue, Nimble vous le dit. Le rappel réapparaîtra alors dans
    la liste. Ne l'envoyez pas une deuxième fois.

## Compenser d'abord une note de crédit

Si une facture porte une note de crédit émise qui n'est pas encore compensée, le rappel ne peut pas partir.
La carte affiche en rouge :

> *Une note de crédit de … sur cette facture n'est pas encore compensée. Compensez-la d'abord : enregistrez
> sur la facture et sur la note de crédit un paiement avec le mode Compensé. D'ici là, ce rappel ne peut pas
> partir.*

**Envoyer…** et **Enregistrer seulement** sont alors grisés. Une note de crédit n'est en effet pas déduite
automatiquement de la facture : sans compensation, le rappel réclamerait de l'argent que le client ne doit
plus.

<!-- AFBEELDING: une carte de rappel avec l'explication rouge sur une note de crédit non compensée et les
     boutons Envoyer… et Enregistrer seulement grisés — cet état n'existe pas encore dans le tenant demo :
     F-2026-0012 a une note de crédit non compensée, mais n'est pas encore à échéance -->

Pour compenser :

1. Ouvrez la facture (cliquez le numéro sur la carte) et cliquez sur **Enregistrer un paiement**. Saisissez
   le montant de la note de crédit et choisissez le mode **Compensé**.
2. Ouvrez la note de crédit via le bloc **Notes de crédit** et enregistrez-y aussi un paiement **Compensé**.
   Le montant est déjà rempli.

La carte affiche ensuite le solde ouvert diminué, et vous pouvez envoyer le rappel. Plus d'explications dans
[Factures](invoices.md).

## Exclure une facture des rappels

En cas de contestation ou de plan de paiement, **Exclure des rappels** met cette facture de côté. Elle ne
compte plus et n'apparaît plus dans le compteur. **Réintégrer dans les rappels** annule cette mise à l'écart.

!!! warning "Une facture sans date d'échéance ne reçoit jamais de rappel"
    Il n'y a alors rien à partir de quoi compter, et Nimble n'invente pas de délai. Une telle facture figure
    malgré tout dans la liste, avec cette raison — pour que vous puissiez compléter l'échéance sur la facture
    elle-même.

## Voir aussi

- [Factures](invoices.md) — enregistrer des paiements et compenser des notes de crédit
- [Fiche d'entreprise](../settings/company-profile.md) — les deux délais
