# Données de base (listes de choix)

Sous **Administration**, vous gérez aussi les listes de choix triables qui apparaissent partout dans Nimble dans les listes déroulantes. Cette page en donne un aperçu ; chaque liste a aussi sa propre page.

| Liste | Groupe | Utilisée pour |
|---|---|---|
| [Statuts de production](production-statuses.md) | Projets | L'avancement du travail d'un projet |
| [Statuts pipeline](pipeline-statuses.md) | Projets | L'avancement de la vente d'un projet |
| [Types de projet](project-types.md) | Projets | Classification des projets (rénovation, neuf …) |
| [Catégories client](account-categories.md) | Relations | Classification des clients (particulier, architecte …) |
| [Fonctions de contact](contact-functions.md) | Relations | Titres de fonction sur les personnes de contact |
| [Sources de leads](lead-sources.md) | Leads | L'origine d'un lead |

Ces six listes fonctionnent de la même manière.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Projets**, **Relations** ou **Leads**, cliquez sur la tuile souhaitée.

![La liste triable Statut de production, avec l'ordre par ligne et un carré de couleur avec son code.](../images/productiestatus-lijst-fr.png)

## La liste

| Colonne | Signification |
|---|---|
| **Ordre** | Détermine l'ordre dans les listes de choix (petit = en haut) |
| **Code** | Code court et unique |
| **Nom (NL)** | Nom néerlandais |
| **Nom (FR)** | Nom français |
| **Couleur** | Uniquement pour les statuts de production : un carré coloré avec son code, p. ex. `#28AB45` |

Double-cliquez sur une ligne pour la modifier, ou cliquez sur **Nouvelle valeur**. **Exporter** récupère la liste dans un fichier.

## Créer ou modifier une valeur

Une fenêtre **Nouvelle valeur** ou **Modifier** s'ouvre.

1. L'**Ordre** est proposé automatiquement (le plus élevé + 10) ; adaptez-le pour déplacer la valeur.
2. Remplissez le **Code** — obligatoire.
3. Remplissez le nom dans la **langue de base de votre entreprise** — obligatoire. L'autre langue porte la mention **optionnel**, par exemple **Nom (FR, optionnel)**.
4. Uniquement pour les statuts de production : choisissez une **Couleur** dans la palette, ou **Aucune couleur**.
5. Cliquez sur **Enregistrer**, ou sur **Annuler** pour fermer la fenêtre sans enregistrer.

S'il manque quelque chose, un message en haut de la fenêtre indique quels champs sont encore vides.

!!! tip "Pas de 10"
    L'ordre avance par défaut de 10 (10, 20, 30 …). Vous pouvez ainsi insérer facilement une valeur plus tard sans tout renuméroter.

## Supprimer

Ouvrez la valeur et cliquez à droite dans la fenêtre sur **Supprimer**. Après confirmation, la valeur va dans la [corbeille](recycle-bin.md) ; les enregistrements existants qui l'utilisent sont conservés. Vous pouvez la récupérer via la corbeille.

## Erreurs fréquentes

!!! warning
    - **Nom dans l'autre langue oublié** — les utilisateurs de cette langue voient alors le nom dans la langue de base.
    - **Supprimer des valeurs encore utilisées** — les enregistrements gardent leur valeur, mais les nouveaux ne peuvent plus la choisir.

## Voir aussi

- [Administration](platform-management.md)
- [Types de demande](lead-request-types.md) et [Phases de lead](lead-status.md) — listes de choix pour les leads, avec leur propre écran
- [Codes TVA](vat-codes.md), [Statut de devis](quote-status.md) et [Statut de facture](invoice-status.md) — listes de choix pour les ventes
