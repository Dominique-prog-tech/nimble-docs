# Factures d'achat

Ce que vos fournisseurs vous facturent. Une facture ne devient payable qu'après approbation.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Achats → Factures d'achat**.

## La liste

![La liste Factures d'achat avec les colonnes Numéro de facture, Fournisseur, Date, Échéance, Montant, Origine et Statut, et en fin de ligne les boutons Approuver et Retirer ; deux factures sont en attente d'approbation et une est approuvée au paiement.](../images/aankoopfacturen-lijst-fr.png)

| Colonne | Ce qu'elle indique |
|---|---|
| **Numéro de facture** | Le numéro que le fournisseur a mis sur sa facture |
| **Fournisseur** | De qui vient la facture |
| **Date** | La date de la facture |
| **Échéance** | La date à laquelle elle doit être payée |
| **Montant** | Le total, TVA comprise |
| **Origine** | D'où vient la facture — voir ci-dessous |
| **Statut** | Où en est l'approbation |

En fin de ligne figure le bouton **Approuver** ou **Retirer**. Double-cliquez une ligne pour ouvrir la
facture. Vous pouvez rechercher, trier, filtrer et exporter comme dans les autres listes.

### D'où vient une facture

| Origine | Signification |
|---|---|
| **Peppol** | Arrivée par le réseau et traitée sur l'écran [Documents reçus](peppol-inbox.md). Cliquez sur le mot pour ouvrir le document original tel que le fournisseur l'a envoyé |
| **Saisie** | Saisie à la main, ou reprise de votre logiciel précédent |

### Les trois statuts

| Statut | Signification |
|---|---|
| **En attente d'approbation** | Elle est enregistrée, mais ne peut pas encore être payée |
| **Approuvée au paiement** | Quelqu'un l'a vérifiée et l'a libérée |
| **Payée** | Le montant est acquitté |

**Approuver** libère une facture ; **Retirer** annule cette approbation tant qu'elle n'est pas payée. Une
facture payée n'a pas de bouton.

!!! warning "Approuver ne dit rien du contenu"
    Le drapeau signifie uniquement : *cette facture peut être payée*. Il n'affirme pas que les prix sont
    corrects ni que la livraison était conforme. Cette distinction compte si vous contestez une facture par
    la suite.

!!! warning "Une facture Peppol n'arrive jamais approuvée"
    Une facture issue des documents reçus est toujours d'abord *En attente d'approbation*. C'est
    intentionnel : le réseau livre un document, pas une décision.

### Le journal à côté de la liste

Cliquez sur le rail **Journal** à droite et choisissez une facture dans la liste. Le panneau affiche les
onglets **Tâches**, **Notes**, **Pièces jointes** et **Historique** de cette facture, sans l'ouvrir.

## Saisir une facture

Vous recevez une facture sur papier ou par courriel ? Saisissez-la vous-même. Cliquez sur **Nouvelle facture
d'achat**.

<!-- AFBEELDING: la fiche Nouvelle facture d'achat, carte Données de la facture remplie avec un fournisseur de démo (p. ex. Thermotech Groothandel NV), avant l'enregistrement -->

Complétez la carte **Données de la facture** :

| Champ | Remarque |
|---|---|
| **Fournisseur** | Obligatoire — choisissez parmi vos relations marquées comme fournisseur |
| **Numéro de facture** | Obligatoire — le numéro du fournisseur |
| **Montant TVAC** | Obligatoire — supérieur à zéro |
| **Date** | Obligatoire — aujourd'hui par défaut |
| **Échéance** | Reprenez-la de la facture |
| **Note** | Texte libre |

Cliquez sur **Enregistrer**. S'il manque un champ obligatoire, le message en haut le cite par son nom. Après
l'enregistrement, la fiche reste ouverte : vous pouvez ajouter le scan tout de suite.

Une nouvelle facture est *En attente d'approbation* et son origine est *Saisie*.

!!! info "Le même numéro chez le même fournisseur est refusé"
    Un numéro de facture est unique **par fournisseur**. Deux fournisseurs peuvent chacun avoir une facture
    *2026-001* ; un même fournisseur non. Nimble refuse la deuxième avec un message — sinon la même dette
    serait ouverte deux fois. Cela vaut aussi quand la facture existante est dans la corbeille : restaurez-la
    alors au lieu de la saisir à nouveau.

!!! info "Pas encore de fournisseurs ?"
    L'écran n'affiche alors pas de formulaire, mais un message qui vous invite à ajouter d'abord un
    fournisseur dans **Relations**. Une facture est toujours liée à un fournisseur.

## La fiche

Double-cliquez une facture dans la liste pour ouvrir sa fiche. En haut figurent le numéro de facture et le
fournisseur. Si la facture vient de Peppol, l'étiquette **Peppol** y figure aussi.

À gauche se trouve l'onglet **Général**, avec les mêmes champs que lors de la saisie. À droite figurent
**Tâches**, **Notes**, **Pièces jointes** et **Historique**. Voir [Travailler avec une fiche](../fiches.md).

En bas se trouvent **Enregistrer** et **Annuler**, et à leur droite **Archiver**.

L'approbation ne se fait pas sur la fiche mais dans la liste, avec **Approuver** ou **Retirer**.

### Ajouter le scan

Placez une facture scannée ou le courriel qui l'accompagnait sous l'onglet **Pièces jointes**. Voir
[Pièces jointes](../bijlagen.md).

## Archiver une facture

Une facture a été saisie par erreur ? Cliquez sur **Archiver** sur la fiche et confirmez. La facture
disparaît de la liste et arrive dans la [corbeille](../administration/recycle-bin.md). De là, **Restaurer**
la remet en place.

Une facture d'achat est une pièce comptable : elle n'est jamais effacée. Ce qui a été saisi reste ainsi
visible.

Si vous ouvrez une facture archivée via un ancien lien, la fiche indique qu'elle est dans la corbeille.

!!! warning "Une facture Peppol archivée ne revient pas"
    Nimble retient de quel document la facture est issue, même dans la corbeille. Le document ne réapparaît
    donc pas dans les documents reçus. Pour récupérer la facture, restaurez-la depuis la corbeille.

## Ce que vous ne faites pas ici

Payer. Cet écran suit ce qui est dû et ce qui est libéré.

## Voir aussi

- [Documents reçus](peppol-inbox.md)
- [Pièces jointes](../bijlagen.md)
- [Corbeille](../administration/recycle-bin.md)
- [Filtrer les listes](../lijsten-filteren.md)
- [Travailler avec une fiche](../fiches.md)
