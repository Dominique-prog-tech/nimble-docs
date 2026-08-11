# Données de base (listes de choix)

Sous **Administration**, vous gérez aussi les listes de choix triables qui apparaissent partout dans Nimble dans les listes déroulantes :

| Liste | Groupe | Utilisée pour |
|---|---|---|
| **Statuts de production** | Projets | Statuts du flux de production des projets |
| **Statuts pipeline** | Projets | Avancement des projets dans le pipeline commercial |
| **Types de projet** | Projets | Classification des projets (rénovation, neuf …) |
| **Catégories client** | Relations | Classification des clients (particulier, architecte …) |
| **Fonctions de contact** | Relations | Titres de fonction sur les contacts |

Toutes les listes fonctionnent de la même manière.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Projets** ou **Relations**, cliquez sur la tuile souhaitée.

## La liste

| Colonne | Signification |
|---|---|
| **Ordre** | Détermine l'ordre dans les listes de choix (petit = en haut) |
| **Code** | Code court et unique |
| **Nom (NL)** | Nom néerlandais (obligatoire) |
| **Nom (FR)** | Nom français (optionnel) |
| **Couleur** | Uniquement pour les statuts de production : accent de couleur (nombre RGB) |

Double-cliquez une ligne pour modifier, ou cliquez sur **Nouvelle valeur**.

## Créer ou modifier une valeur

1. L'**Ordre** est proposé automatiquement (dernier + 10) ; adaptez-le pour déplacer la valeur.
2. Remplissez le **Code** et le **Nom (NL)** — les deux sont obligatoires.
3. Remplissez optionnellement le **Nom (FR)** ; il s'affiche pour les utilisateurs francophones.
4. Cliquez sur **Enregistrer**.

!!! tip "Pas de 10"
    L'ordre avance par défaut de 10 (10, 20, 30 …). Vous pouvez ainsi insérer facilement une valeur plus tard sans tout renuméroter.

## Supprimer

Ouvrez la valeur et cliquez sur **Supprimer**. La valeur est archivée (corbeille) ; les enregistrements existants qui l'utilisent sont conservés.

## Erreurs fréquentes

!!! warning
    - **Nom français oublié** — les utilisateurs francophones voient alors le nom néerlandais en secours.
    - **Supprimer des valeurs encore utilisées** — les enregistrements gardent leur valeur, mais les nouveaux ne peuvent plus la choisir.

## Voir aussi

- [Administration](platform-management.md)
- [Fonctions de contact](contact-functions.fr.md) — les titres de fonction des personnes de contact
