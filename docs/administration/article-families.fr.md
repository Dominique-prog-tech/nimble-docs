# Familles d'articles

Les **familles d'articles** organisent votre catalogue en groupes : familles et (optionnellement) sous-familles, deux niveaux maximum. Vous filtrez et rapportez ainsi plus facilement par type d'article.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Articles**, cliquez sur la tuile **Familles d'articles**.

## La liste

| Colonne | Signification |
|---|---|
| **Code** | Code court et unique de la famille |
| **Nom (NL)** | Nom néerlandais |
| **Nom (FR)** | Nom français |
| **Famille parente** | La famille principale dont dépend cette sous-famille ; `—` = famille principale |

![La liste des familles d'articles, avec en haut les boutons Nouvelle famille et Exporter.](../images/families-lijst-fr.png)

Double-cliquez sur une ligne pour la modifier, ou cliquez sur **Nouvelle famille**. **Exporter** récupère la liste dans un fichier.

## Créer ou modifier une famille

Une fenêtre **Nouvelle famille** ou **Modifier la famille** s'ouvre.

1. Remplissez le **Code** — obligatoire.
2. Remplissez le nom dans la **langue de base de votre entreprise** — obligatoire. L'autre langue porte la mention **optionnel**, par exemple **Nom (FR, optionnel)**.
3. Choisissez éventuellement une **Famille parente (vide = famille principale)**. La croix vide à nouveau le champ.
4. Cliquez sur **Enregistrer**, ou sur **Annuler** pour fermer la fenêtre sans enregistrer.

S'il manque quelque chose, un message en haut de la fenêtre indique quels champs sont encore vides.

<!-- AFBEELDING: la fenêtre Modifier la famille dans le tenant demo (famille ELEK) avec Code, Nom (NL), Nom (FR, optionnel), Famille parente et les boutons Enregistrer, Annuler et Supprimer -->

!!! tip "Deux niveaux"
    Seules les familles principales peuvent servir de famille parente. Une sous-famille ne peut pas avoir de sous-familles.

## Supprimer

Ouvrez la famille et cliquez à droite dans la fenêtre sur **Supprimer**. Après confirmation, la famille va dans la [corbeille](recycle-bin.md) et disparaît des listes ; les articles existants sont conservés. Vous pouvez la récupérer via la corbeille.

## Erreurs fréquentes

!!! warning
    - **Nom dans l'autre langue oublié** — les utilisateurs de cette langue voient alors le nom dans la langue de base.
    - **Tout sur un seul niveau** — utilisez des sous-familles pour un classement plus fin plutôt que de multiplier les familles principales.

## Voir aussi

- [Administration](platform-management.md)
- [Unités de mesure](units.md)
