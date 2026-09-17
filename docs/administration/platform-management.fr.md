# Administration

L'écran **Administration** regroupe les paramètres partagés et les données de base de votre entreprise, organisés en tuiles : la fiche d'entreprise, les familles d'articles, les unités, les listes de choix pour les projets, les relations, les ventes et les leads, et la gestion des rôles et des données supprimées.

## Ouvrir l'écran

Cliquez sur **Administration** en bas de la barre latérale.

![Le hub Administration avec les groupes de tuiles Entreprise, Articles, Projets, Relations, Ventes, Leads et Données et accès. En bas figure aussi le groupe Gestion ADM.](../images/platformbeheer-hub-fr.png)

!!! info "Droits"
    Vous ne voyez que les tuiles pour lesquelles vous avez des droits. Si une tuile manque, demandez à votre administrateur d'attribuer le droit correspondant via **Administration → Rôles**.

## Les groupes

| Groupe | Tuiles |
|---|---|
| **Entreprise** | [Fiche d'entreprise](../settings/company-profile.md) |
| **Articles** | [Familles d'articles](article-families.md), [Unités de mesure](units.md) |
| **Projets** | [Statuts de production](production-statuses.md), [Statuts pipeline](pipeline-statuses.md), [Types de projet](project-types.md) |
| **Relations** | [Catégories client](account-categories.md), [Fonctions de contact](contact-functions.md) |
| **Ventes** | [Statut de devis](quote-status.md), [Statut de facture](invoice-status.md), [Codes TVA](vat-codes.md), [Modèles de documents](../settings/document-templates.md) |
| **Leads** | [Sources de leads](lead-sources.md), [Types de demande](lead-request-types.md), [Phases de lead](lead-status.md), [Suivi des leads](lead-follow-up.md) |
| **Données et accès** | [Rôles](roles.md), [Corbeille](recycle-bin.md), [Journal d'audit](audit-log.md) (réservé aux opérateurs ADM) |
| **Gestion ADM** | [Tenants](tenants.md), [Utilisateurs](users.md), [Conversion](conversion.md) — réservé aux opérateurs ADM ; vous ne voyez pas ce groupe |

Chaque tuile ouvre un écran de gestion. En haut de chaque écran, **← Retour à l'administration** vous ramène à ce hub.

Sous **Administration**, la barre latérale contient aussi **Portail client**. Ce n'est pas une tuile mais un accès distinct ; voir [Portail client](../getting-started/customer-portal.md).

## Un message rouge en haut de la page

Au démarrage, Nimble met à jour la structure de chaque base de données. Si cela échoue pour l'une d'elles, un
message rouge **Migrations de base de données non abouties** s'affiche en haut de cette page, avec la base
concernée, le module et la raison.

Les écrans qui dépendent de cette structure peuvent alors échouer — parfois des jours plus tard, lorsque
quelqu'un ouvre par hasard l'écran concerné. Transmettez le texte du message à votre administrateur : il
contient la cause. Vous n'avez rien à faire vous-même.

En l'absence de message, toutes les bases de données sont à jour.

## Erreurs fréquentes

!!! warning
    - **Aucun tenant choisi** (opérateurs uniquement) — choisissez d'abord un tenant via **Administration → Tenants → Utiliser** ; sans tenant actif, vous ne pouvez pas gérer les données de base.
    - **Tuile manquante** — il vous manque le droit pour cette partie ; ce n'est pas une erreur de l'application.

## Voir aussi

- [Fiche d'entreprise](../settings/company-profile.md)
- [Données de base (listes de choix)](master-data.md)
- [Portail client](../getting-started/customer-portal.md)
