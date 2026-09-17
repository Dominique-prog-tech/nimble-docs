# Rôles

Un rôle est un ensemble de droits. Vous attribuez un rôle à un utilisateur plutôt que d'accorder chaque droit séparément — ainsi, pour un nouveau collègue, vous ne faites qu'un seul choix.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Données et accès**, cliquez sur la tuile **Rôles**.

L'écran s'appelle **Rôles & droits**. Il est divisé en trois colonnes : **Rôles**, **Droits** et
**Utilisateurs avec ce rôle**.

<!-- AFBEELDING: l'écran Rôles & droits dans le tenant demo avec un rôle personnalisé sélectionné — à gauche la liste Rôles avec Nouveau rôle et Ajouter, au milieu les droits cochés par partie et Enregistrer les droits, à droite Utilisateurs avec ce rôle avec Sofie Maes, Pieter Janssens et Elke Wouters. À prendre en tant qu'administrateur du tenant, pas en tant qu'opérateur : la vue opérateur affiche le choix du tenant avec de vrais noms de clients -->

!!! info "Pour les opérateurs ADM : choisir d'abord un tenant"
    Un opérateur voit en haut la liste **Tenant**. Tant que **— choisir un tenant —** est affiché, les colonnes
    n'apparaissent pas. En tant qu'administrateur de votre propre entreprise, vous ne voyez pas cette liste ;
    vous travaillez directement dans votre propre environnement.

## Créer un rôle

Saisissez le nom dans le champ **Nouveau rôle** sous la liste **Rôles** et cliquez sur **Ajouter**. Le nouveau
rôle apparaît dans la liste.

## Le rôle système

Un rôle porte un cadenas (🔒) : le rôle système pour l'administration de votre environnement. Ce rôle possède
**automatiquement tous les droits** attribuables. Vous ne pouvez pas modifier ses droits ni supprimer le rôle ;
les nouveaux droits s'y ajoutent d'office.

Pour ne donner qu'une partie de l'administration à quelqu'un, créez un rôle distinct.

## Attribuer des droits

Cliquez sur un rôle dans la liste. Au milieu apparaît **Droits — {nom du rôle}** : des cases à cocher, groupées
par partie de Nimble. Cochez ce que ce rôle peut faire et cliquez sur **Enregistrer les droits**. En cas de
succès, la mention **✓ enregistré** s'affiche.

## Ce que fait un droit

Un droit que vous **décochez** masque l'écran **et** le bloque. L'entrée de menu disparaît, et celui qui saisit l'adresse directement n'entre pas davantage. Vous ne devez donc pas raisonner séparément en « visible » et « accessible » : c'est un seul et même réglage.

## Consulter ou modifier

Chaque domaine de Nimble possède **deux** droits, et la différence compte :

| Droit | Ce qu'il donne |
|---|---|
| **Consulter** | L'écran s'ouvre et tout est lisible. Aucun bouton pour ajouter, enregistrer ou supprimer |
| **Modifier** | En plus : créer de nouveaux enregistrements, enregistrer des modifications, supprimer |

**Modifier ne remplace pas consulter — il s'y ajoute.** Qui peut modifier a aussi besoin du droit de consultation, sinon l'écran ne s'ouvre pas.

Vous composez ainsi les rôles que vous avez en tête : un commercial qui rédige des devis mais consulte seulement le planning, un chef d'équipe qui remplit des bons de travail sans toucher à la facturation, un comptable qui lit partout.

!!! tip "Quelqu'un ne voit plus de boutons ?"
    C'est que son rôle porte le droit de consultation mais pas celui de modification pour ce domaine. Cochez-le sous **Droits** et demandez à la personne de se reconnecter.

## Attribuer des utilisateurs

À droite, sous **Utilisateurs avec ce rôle**, figurent tous les utilisateurs de votre environnement avec une
case à cocher. Après chaque nom, des libellés indiquent les rôles que cette personne porte actuellement.

Cochez un utilisateur pour lui donner ce rôle, ou décochez-le pour le lui retirer. Si **Aucun utilisateur pour
l'instant.** s'affiche, votre environnement n'a pas encore d'utilisateurs.

## Supprimer un rôle

Sélectionnez le rôle et cliquez sous la liste sur **Supprimer le rôle**. Ce bouton n'apparaît pas pour le rôle
système. Donnez d'abord un autre rôle aux utilisateurs qui portent ce rôle.

## Erreurs fréquentes

!!! warning
    **Ne retirez pas votre propre dernier droit d'administration.** Si vous portez un rôle personnalisé avec le droit de gérer les rôles et que vous décochez ce droit, vous ne pourrez plus le rétablir vous-même. Faites-le alors par quelqu'un qui porte le rôle système.

!!! info
    **Le moment où une modification prend effet dépend de ce que vous modifiez.**

    - **Si vous cochez ou décochez un droit sur un rôle**, cela s'applique immédiatement. Qui travaille à ce moment-là le voit après avoir rafraîchi son écran — inutile de se déconnecter.
    - **Si vous attribuez un autre rôle à quelqu'un**, cela ne s'applique qu'à sa prochaine connexion. Demandez à la personne de se déconnecter et de se reconnecter si c'est urgent.

## Voir aussi

- [Utilisateurs](users.md) — créer des utilisateurs (pour les opérateurs ADM)
- [Administration](platform-management.md)
