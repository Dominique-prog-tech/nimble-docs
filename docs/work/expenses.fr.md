# Dépenses

Dans **Dépenses**, vous tenez à jour ce que les collaborateurs ont avancé : un parking au chantier, du carburant, un repas, du petit
matériel. Chaque dépense porte son ticket et indique si elle est déjà remboursée. Une dépense sur un projet compte comme coût dans
le [post-calcul](projects.md#le-bloc-post-calcul) de ce projet.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Travail → Dépenses**. Vous avez besoin du droit de consulter les ordres et bons de travail ;
ajouter ou modifier des dépenses demande le droit de modifier les ordres et bons de travail.

![La liste Dépenses de 2026 avec les colonnes Date, Collaborateur, Type, Montant TVAC, Projet, Statut, Remboursé le et Remarque : notamment Dieter Cools avec Parking 4,80 € sur P2026-005, encore Ouverte, et Kris Van Damme avec Carburant 62,35 € sur P2026-001, Remboursée le 19/11/2026.](../images/onkosten-fr.png)

## La liste

Chaque ligne est une dépense, la plus récente en haut. Avec **◀** et **▶** à côté de l'année, vous choisissez une autre année.
L'icône d'information à côté du titre montre ce qui est encore **ouvert** cette année-là et ce qui est déjà **remboursé**.

Vous recherchez, triez et filtrez comme dans toute [liste](../lijsten-filteren.md) : vous trouvez ainsi par exemple toutes les
dépenses ouvertes d'un collaborateur. **Exporter** emporte la liste vers Excel ou CSV, par exemple pour le remboursement.

## Ajouter ou modifier une dépense

Cliquez sur **Ajouter une dépense**, ou double-cliquez une ligne. Une fenêtre s'ouvre avec ces champs :

| Champ | Remarque |
|---|---|
| **Collaborateur** | Obligatoire. Qui a avancé la dépense |
| **Date** | Obligatoire. Le jour de la dépense |
| **Montant TVAC** | Obligatoire. Le montant du ticket, tel que vous le remboursez |
| **Type** | Obligatoire. Les types se gèrent dans [Types de dépenses](../administration/expense-types.md) |
| **Projet** | Le projet sur lequel la dépense compte comme coût. Vide = une dépense sans projet |
| **Remarque** | Libre, par exemple où ou pourquoi |
| **Remboursé le** | Le jour où vous avez remboursé la dépense. Vide = encore ouverte. Pas avant la date de la dépense |

Cliquez sur **Enregistrer**. Le bloc **Ticket** apparaît alors en bas : ajoutez-y la photo ou le pdf du ticket, ou fermez la
fenêtre. **Supprimer** envoie une dépense dans la [corbeille](../administration/recycle-bin.md).

## Les dépenses sur le bon de travail

Sur un [bon de travail](work-sheets.md#depenses), l'équipe saisit les dépenses du jour, dans le bloc **Dépenses**. Une telle
dépense reçoit la date du bon de travail, et elle appartient au projet du bon de travail. Elle figure aussi dans cette liste.

## Dans le post-calcul

Une dépense avec un projet compte comme coût dans le post-calcul de ce projet, dans la tuile **Dépenses**, et dans le bénéfice par
mois des [statistiques](../sales/statistics.md). Les dépenses comptent **TVA comprise** : c'est ainsi qu'elles figurent sur le
ticket et que vous les remboursez.

## Erreurs fréquentes

!!! warning
    - **Chercher le ticket avant l'enregistrement.** Le bloc Ticket n'apparaît qu'une fois la dépense enregistrée.
    - **Une dépense de chantier sans projet.** Sans projet, elle ne compte dans aucun post-calcul. Saisissez-la sur le bon de
      travail, ou choisissez le projet.

## Voir aussi

- [Bons de travail](work-sheets.md)
- [Projets](projects.md)
- [Types de dépenses](../administration/expense-types.md)
