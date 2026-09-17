# Bons de travail

Un bon de travail correspond à **une journée de travail sur un ordre de travail** : qui était présent,
combien d'heures, ce qui a été consommé et comment la journée s'est terminée. Tout ce qui suit —
post-calcul, facturation des travaux supplémentaires, productivité — se base sur cette fiche.

## Ouvrir l'écran

Cliquez dans la barre latérale sur **Travail → Bons de travail**. Vous y accédez également par le bouton
**Ajouter un bon de travail** sur un ordre de travail ; le bon est alors immédiatement rattaché à cet
ordre.

S'il n'existe encore aucun ordre de travail, l'écran vous demande d'abord d'en créer un : un bon de travail
relève toujours d'un ordre de travail.

## La liste

![La liste Bons de travail avec les colonnes Date, Ordre de travail, Heures, Fin de journée, Suppl. et Description ; à droite le tiroir Journal replié.](../images/werkbonnen-lijst-fr.png)

| Colonne | Ce que c'est |
|---|---|
| **Date** | La journée de travail |
| **Ordre de travail** | La mission dont relève cette journée |
| **Heures** | Le total de tous les collaborateurs ce jour-là |
| **Fin de journée** | Dans les temps · Retard · Interrompu · Terminé |
| **Suppl.** | Affiche **oui** lorsque l'équipe a constaté des travaux supplémentaires |
| **Description** | Le rapport de journée en bref |

- **Nouveau bon de travail** ouvre une fiche vide.
- Les trois boutons à côté de Rechercher sont le filtre, le sélecteur de colonnes et **Exporter**.

À droite se trouve le tiroir **Journal**, pour le bon sur lequel se trouve votre curseur : tâches, notes,
pièces jointes et historique sans ouvrir la fiche.

## La fiche

Vous ouvrez une fiche en double-cliquant sur une ligne.

![La fiche d'un bon de travail : en haut le numéro de l'ordre de travail avec la date et un lien vers le projet, en dessous les blocs La journée de travail, Heures par collaborateur, Avancement et travaux supplémentaires, et Matériel consommé.](../images/werkbon-fiche-fr.png)

En haut figurent le numéro de l'ordre de travail et la date, et en dessous un lien vers le **projet** dont
relève cet ordre. À gauche se trouve l'onglet **La journée de travail**, à droite **Tâches**, **Notes**,
**Pièces jointes** et **Historique**.

En bas se trouve la barre de boutons : **Enregistrer**, **Aperçu avant impression**, **Annuler** et, à part
à droite, **Supprimer**. Si vous ne pouvez pas modifier le bon, vous ne voyez que **Vers la liste**.

### La journée de travail

| Champ | Remarque |
|---|---|
| **Ordre de travail** | Obligatoire. Ce dont relève cette journée |
| **Date** | Obligatoire |
| **Total heures** | Tant qu'il n'y a pas de lignes d'heures, vous saisissez ici le nombre d'heures. Dès qu'il y a des lignes, le champ affiche leur somme |
| **Rapport journalier** | Ce qui s'est passé ce jour-là, en langage courant |

Si vous cliquez sur **Enregistrer** alors qu'un champ obligatoire est vide, la fiche indique en haut ce qui
manque.

### Heures par collaborateur

Sous la liste, vous ajoutez une ligne : choisissez un **Collaborateur**, saisissez les **Heures** (24 au
maximum) et éventuellement une **Note**, puis cliquez sur **Ajouter**. Vous choisissez parmi les
collaborateurs actifs. La croix supprime une ligne.

Le **Total** en bas est la somme, et c'est aussi le total du bon de travail.

Ces heures sont la source du post-calcul sur le projet : elles sont multipliées par le **Coût horaire** du
collaborateur.

### Avancement et travaux supplémentaires

**Fin de journée** indique où en est le travail. Sous le choix, l'écran rappelle ce que la valeur
signifie :

| Valeur | Ce que cela signifie |
|---|---|
| **Dans les temps** | Le travail avance comme prévu |
| **Retard** | Le travail a avancé, mais il faudra plus de jours que prévu |
| **Interrompu** | Le chantier est à l'arrêt — météo, matériel, accès ou décision du client |
| **Terminé** | Tout est terminé ; le chantier peut être réceptionné |

**Action de suivi attendue** est ce qui doit se passer demain. Remplissez-la en cas de retard ou
d'interruption — c'est ce que l'équipe suivante lit en premier.

**Des travaux supplémentaires ont été constatés** est un indicateur distinct, pas une phrase dans le
rapport journalier. Les travaux supplémentaires doivent encore être approuvés et facturés, et personne ne
retrouve cela dans un pavé de texte.

#### Décrire et décider les travaux supplémentaires

Si vous cochez **Des travaux supplémentaires ont été constatés**, ces champs apparaissent :

<!-- AFBEELDING: le bloc Avancement et travaux supplémentaires sur le bon du 02/09/2026 de WO-2026-002 dans la démo (FR) — case cochée, avec En quoi consistent ces travaux, État Approuvé, Montant estimé, Décidé le et Décidé par -->

| Champ | Remarque |
|---|---|
| **En quoi consistent ces travaux** | Obligatoire. Décrivez-les de façon à pouvoir les approuver et les facturer |
| **État** | **Signalé**, **Approuvé**, **Refusé** ou **Facturé** |
| **Montant estimé** | Une estimation du chantier, hors TVA. Peut rester vide. Ce que vous facturez réellement figure sur la facture |
| **Décidé le** | La date de la décision. N'apparaît que si l'état n'est pas Signalé |
| **Décidé par** | Qui a marqué son accord ou refusé. N'apparaît que si l'état n'est pas Signalé |

C'est ici que vous décidez d'un travail supplémentaire : mettez l'**État** sur **Approuvé** ou **Refusé** et
indiquez quand et par qui. Tant que l'état est **Signalé**, la fiche avertit que le travail risque d'être
exécuté sans être facturé.

Tous les travaux supplémentaires, tous projets confondus, figurent sur l'écran
[Travaux supplémentaires](extra-work.md).

### Matériel consommé

Le matériel s'ajoute à la **création** du bon : choisissez un **Article**, saisissez la **Quantité** et
cliquez sur **Ajouter**. À l'enregistrement, ce matériel est déduit du stock.

Sur un bon enregistré, vous ne pouvez donc plus modifier le matériel. La fiche l'indique aussi.

!!! warning "Le matériel ne se corrige pas après coup sur le bon"
    Le stock a déjà bougé. Si quelque chose ne va pas, corrigez-le par un mouvement de stock distinct plutôt
    que de modifier le bon — sinon votre bon de travail et votre stock divergent.

## Faire signer la feuille

L'**Aperçu avant impression** vous donne le bon sous forme de document : la feuille que l'équipe fait
signer sur le chantier. Le nom du fichier reprend le numéro de l'ordre de travail et la date.

Cela ne fonctionne que sur un bon **enregistré**.

## Supprimer un bon de travail

**Supprimer** demande d'abord une confirmation. Le bon va dans la corbeille, et le matériel consommé est
remis en stock.

Si le bon a déjà été supprimé puis restauré, Nimble refuse une seconde fois : la consommation ne peut pas
être contre-passée deux fois. Vous recevez alors un message, et vous corrigez le stock vous-même.

## Voir aussi

- [Ordres de travail](work-orders.md) — la mission dont relève un bon de travail
- [Travaux supplémentaires](extra-work.md) — tous les travaux supplémentaires signalés en un aperçu
- [Collaborateurs](staff.md) — le coût horaire utilisé pour les heures
