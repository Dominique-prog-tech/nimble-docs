# Types de demande

Les **types de demande** indiquent ce qu'un lead demande précisément : une toiture, un sauna, une conduite … Chaque type porte optionnellement sa propre **question de taille** — par exemple des mètres carrés pour une toiture, un nombre de personnes pour un sauna, ou un mètre courant pour une conduite.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Leads**, cliquez sur la tuile **Types de demande**.

## La liste

| Colonne | Signification |
|---|---|
| **Ordre** | Détermine l'ordre dans les listes de choix (petit = en haut) |
| **Code** | Code court et unique |
| **Nom (NL)** | Nom néerlandais |
| **Nom (FR)** | Nom français |
| **Question de taille** | Le libellé avec l'unité, p. ex. *Superficie (m²)*, ou « — pas demandé — » |

![La liste des types de demande, avec l'ordre en premier et la question de taille en dernier.](../images/aanvraagtypes-lijst-fr.png)

Double-cliquez sur une ligne pour ouvrir le type, ou cliquez sur **Nouveau type**. **Exporter** récupère la liste dans un fichier.

## La fiche d'un type

Un type s'ouvre sur sa propre page, avec sa propre adresse web : copiez la barre d'adresse et votre collègue ouvre exactement ce type. En haut figurent le code et le nom du type, avec à gauche le bouton **Vers la liste**. La fiche a un seul onglet, **Général**, avec deux cartes.

![La fiche Type de demande BADK — Rénovation salle de bain avec la carte Identification (Code, Nom NL et FR, Ordre) et la carte Question de taille avec Libellé, Unité m² et la ligne Sur la fiche du lead : Surface (m²), en bas Enregistrer, Annuler et Supprimer.](../images/aanvraagtype-fiche-fr.png)

### Identification

| Champ | Ce que vous saisissez |
|---|---|
| **Code** | Obligatoire |
| **Nom (NL)** et **Nom (FR)** | Le nom dans la langue de base de votre entreprise est obligatoire ; l'autre langue porte la mention *optionnel* |
| **Ordre** | La place dans la liste de choix. Un nouveau type reçoit une proposition en fin de liste |

### Question de taille

| Champ | Ce que vous saisissez |
|---|---|
| **Libellé (NL)** / **Libellé (FR)** | Le nom du champ sur la fiche du lead, p. ex. « Superficie » |
| **Unité** | P. ex. `m²`, `personnes`, `ml` |

Laissez le libellé vide si la taille n'a pas de sens pour ce type ; le champ n'apparaît alors pas sur la fiche du lead.

Sous les champs, vous voyez immédiatement le nom du champ sur la fiche du lead, par exemple **Sur la fiche du lead : Superficie (m²)**.

### Enregistrer

Cliquez en bas sur **Enregistrer**. Vous revenez ensuite à la liste. **Annuler** vous ramène sans enregistrer.

S'il manque quelque chose, un message en haut de la fiche indique quels champs sont encore vides.

!!! tip "Modifications non enregistrées"
    Si vous fermez ou rechargez l'onglet avec des modifications non enregistrées, votre navigateur vous demande d'abord confirmation.

## Supprimer

Ouvrez le type et cliquez en bas, après **Annuler**, sur **Supprimer**. Après confirmation, le type va dans la [corbeille](recycle-bin.md) ; les leads existants avec ce type sont conservés. Vous pouvez le récupérer via la corbeille.

## Erreurs fréquentes

!!! warning
    - **Nom dans l'autre langue oublié** — les utilisateurs de cette langue voient alors le nom dans la langue de base.
    - **Unité sans libellé** — l'unité n'apparaît que si un libellé est également renseigné.
    - **Supprimer un type encore utilisé** — les leads existants conservent leur type, mais les nouveaux leads ne peuvent plus le choisir.

## Voir aussi

- [Administration](platform-management.md)
- [Sources de leads](lead-sources.md)
- [Phases de lead](lead-status.md)
- [Leads](../crm/leads.fr.md)
