# Relations

Sur l'écran **Relations**, vous gérez les clients et fournisseurs de votre entreprise. Une relation peut être **client**, **fournisseur**, ou les deux à la fois.

## Ouvrir l'écran

Cliquez sur **Relations** dans la barre latérale.

!!! note "Tenant actif"
    Sans tenant choisi, un avertissement s'affiche. Choisissez d'abord un tenant via **Configuration → Tenants → Utiliser**.

## La liste

Le tableau affiche pour chaque relation : **nom**, **n° TVA**, **commune** et **type** (badges Client / Fournisseur).

- **Rechercher et filtrer** — utilisez la recherche de la grille pour trouver rapidement une relation.
- **Exporter** — exportez la liste vers Excel ou CSV.
- **Nouveau** — cliquez sur **Nouvelle relation**.
- **Modifier** — **double-cliquez** une ligne pour ouvrir la fiche.

## Ajouter ou modifier une relation

Dans la fenêtre, renseignez les données :

| Champ | Explication |
|---|---|
| **Nom** | Obligatoire. Nom d'entreprise ou nom d'affichage. |
| **N° de relation** | Numéro interne optionnel. |
| **N° TVA** | Numéro d'entreprise (p. ex. BE0123456789). |
| **Adresse** | Rue, numéro, code postal, commune, pays (BE par défaut). |
| **E-mail / téléphone** | Coordonnées de contact. |
| **Client / Fournisseur** | Cochez ce qui s'applique — les deux sont possibles. |
| **Actif** | Décochez pour marquer le statut ; cela n'efface pas la fiche. |

Cliquez sur **Enregistrer** pour conserver, ou **Annuler** pour fermer sans modification.

## Supprimer

Dans la fenêtre d'édition, cliquez sur **Supprimer**. La relation est **archivée** (soft-delete) et arrive dans la **Corbeille**, où vous pouvez la restaurer avant suppression définitive.

## Données depuis l'héritage

Vous disposez d'une base Firebird existante ? Via **Configuration → Conversion**, importez les `CRM_ACCOUNTS` actives comme relations. La conversion est répétable : les lignes existantes sont mises à jour via la clé héritée, sans doublons.

## Voir aussi

- [Conversion](administration/conversion.md) — transfert Firebird → PostgreSQL
