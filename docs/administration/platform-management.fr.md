# Administration

L'écran **Administration** regroupe tous les paramètres partagés et les données de base de votre entreprise, organisés en tuiles : la fiche d'entreprise, les familles d'articles, les unités et les listes de choix pour les projets et les relations.

## Ouvrir l'écran

Cliquez sur **Administration** en bas de la barre latérale.

![Le hub Administration avec les groupes de tuiles Entreprise, Articles, Projets, Relations, Ventes et Leads.](../images/platformbeheer-hub-fr.png)

!!! info "Droits"
    Vous ne voyez que les tuiles pour lesquelles vous avez des droits. Si une tuile manque, demandez à votre administrateur d'attribuer le droit correspondant via **Gestion → Rôles**.

## Les groupes

| Groupe | Tuiles |
|---|---|
| **Entreprise** | Fiche d'entreprise |
| **Articles** | Familles d'articles, Unités de mesure |
| **Projets** | Statuts de production, Statuts pipeline, Types de projet |
| **Relations** | Catégories client, Fonctions de contact |
| **Ventes** | Statuts de devis, Statuts de facture, Codes TVA, Modèles de document |
| **Leads** | Sources de leads, Types de demande, Statuts de lead, Suivi des leads |

Chaque tuile ouvre un écran de gestion. En haut de chaque écran, **← Retour à l'administration** vous ramène à ce hub.

## Un message rouge en haut de la page

Au démarrage, Nimble met à jour la structure de chaque base de données. Si cela échoue pour l'une d'elles, un
message rouge s'affiche en haut de cette page, avec la base concernée, le module et la raison.

Les écrans qui dépendent de cette structure peuvent alors échouer — parfois des jours plus tard, lorsque
quelqu'un ouvre par hasard l'écran concerné. Transmettez le texte du message à votre administrateur : il
contient la cause. Vous n'avez rien à faire vous-même.

En l'absence de message, toutes les bases de données sont à jour.

## Erreurs fréquentes

!!! warning
    - **Aucun tenant choisi** (opérateurs uniquement) — choisissez d'abord un tenant via **Tenants → Utiliser** ; sans tenant actif, vous ne pouvez pas gérer les données de base.
    - **Tuile manquante** — il vous manque le droit pour cette partie ; ce n'est pas une erreur de l'application.

## Voir aussi

- [Fiche d'entreprise](../settings/company-profile.md)
- [Familles d'articles](article-families.md)
- [Unités de mesure](units.md)
- [Données de base (listes de choix)](master-data.md)
