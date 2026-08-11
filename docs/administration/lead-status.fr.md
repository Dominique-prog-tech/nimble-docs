# Statut de lead

Cet écran permet de retraduire le texte des statuts fixes du pipeline de leads (p. ex. Nouveau, Qualifié …). Le **nombre** et la **signification** des statuts sont fixes — vous n'adaptez que le texte affiché.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Leads**, cliquez sur la tuile **Statut de lead**.

## La liste

| Colonne | Signification |
|---|---|
| **Clé (fixe)** | Nom technique du statut — non modifiable |
| **Nom (NL)** | Texte néerlandais affiché pour le statut |
| **Nom (FR)** | Texte français affiché pour le statut |
| **Ordre** | Position du statut sur le tableau de leads |
| **Sur le tableau** | **Visible** ou **Masqué** — détermine si le statut apparaît comme colonne sur le tableau de leads |

Double-cliquez une ligne pour modifier le texte.

## Adapter le texte

1. Double-cliquez sur le statut souhaité.
2. Modifiez le nom dans la **langue de base de votre bureau** — ce champ est obligatoire ; l'autre langue est optionnelle.
3. Cliquez sur **Enregistrer**.

Les statuts ne peuvent pas être ajoutés ou supprimés ici : le pipeline lui-même est fixe, seul le texte affiché est modifiable.

## Ordre et visibilité sur le tableau

En plus du nom, vous pouvez également configurer par statut son apparence sur le **tableau de leads**
(la vue kanban de l'écran Leads) :

1. Double-cliquez sur le statut souhaité.
2. Réglez l'**Ordre sur le tableau** — un compteur avec la position de la colonne (bas = le plus à gauche).
3. Cochez ou décochez **Afficher sur le tableau** et cliquez sur **Enregistrer**.

**Masquer** un statut retire sa colonne du tableau, mais le statut lui-même continue d'exister
pleinement : toutes les règles et tous les chiffres (rapports, filtres dans la vue liste) restent
valables. Seule la colonne disparaît.

!!! tip "Filet de sécurité"
    Un statut masqué qui contient encore des leads reste malgré tout affiché sur le tableau — avec ces
    leads dedans. Ainsi, un lead ne disparaît jamais silencieusement de la vue lorsqu'une colonne est
    masquée. Ce n'est qu'une fois le dernier lead sorti de ce statut que la colonne disparaît réellement.

## Erreurs fréquentes

!!! warning
    - **Nom français oublié** — les utilisateurs francophones voient alors l'autre langue en repli.
    - **Confondre la clé et le nom affiché** — la clé est purement technique et invisible pour les utilisateurs finaux ; modifiez le nom, pas la clé (qui est d'ailleurs en lecture seule).
    - **Confondre masquer et supprimer** — un statut masqué continue d'exister et compte toujours dans les rapports ; il disparaît uniquement comme colonne du tableau.

## Voir aussi

- [Administration](platform-management.md)
- [Sources de leads](lead-sources.md)
- [Types de demande](lead-request-types.md)
- [Leads](../crm/leads.fr.md)
