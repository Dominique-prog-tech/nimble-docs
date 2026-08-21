# Journal d'audit

Le journal d'audit montre ce qui s'est passé dans Nimble : qui s'est connecté, qui a modifié un enregistrement, qui a supprimé quelque chose. Vous le consultez lorsque vous voulez comprendre comment une donnée est arrivée dans son état actuel.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Gestion**, puis sur **Journal d'audit**.

## Champs et fonctions

| Colonne | Ce que vous voyez |
|---|---|
| **Horodatage** | Quand l'action a eu lieu. |
| **Utilisateur** | Qui l'a effectuée. |
| **Action** | Ce qui s'est passé, par exemple une connexion ou une modification. |
| **Entité** | Sur quel type d'enregistrement portait l'action. |
| **Résumé** | Une brève description de ce qui a changé. |
| **Résultat** | Si l'action a abouti. Une tentative échouée porte la mention **échoué**. |

La liste se recherche et se filtre comme toute liste dans Nimble — voir [Filtrer les listes](../lijsten-filteren.fr.md). Si rien ne s'est encore produit, la mention **Aucune action enregistrée.** s'affiche.

## À quoi cela sert

- **Examiner une connexion échouée.** Plusieurs lignes **échoué** d'affilée sur le même utilisateur indiquent un mot de passe oublié — ou quelqu'un qui tente d'entrer.
- **Retrouver une modification.** Filtrez sur l'entité et lisez les résumés pour voir quand une valeur a changé.
- **Vérifier une suppression.** Le journal indique qui a supprimé ; la [Corbeille](recycle-bin.fr.md) vous permet de restaurer.

## Erreurs fréquentes

!!! info
    **Le journal d'audit est un écran de consultation.** Vous ne pouvez rien y modifier ni supprimer — c'est voulu. Un journal modifiable ne prouve rien.

!!! warning
    Le journal montre ce que l'application a enregistré. Les modifications effectuées directement dans la base de données — lors d'une conversion, par exemple — n'y figurent pas. Voir [Conversion](conversion.fr.md).

## Voir aussi

- [Utilisateurs](users.fr.md) — déverrouiller un utilisateur bloqué
- [Corbeille](recycle-bin.fr.md) — restaurer un enregistrement supprimé
