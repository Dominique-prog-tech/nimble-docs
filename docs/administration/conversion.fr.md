# Conversion

!!! info "Pour les opérateurs ADM"
    Cet écran est réservé aux collaborateurs d'ADM-Concept. En tant que client de Nimble, vous ne le voyez pas.

Sur l'écran **Conversion**, vous transférez les données du **tenant actif** depuis la base de données de
l'ancien logiciel (Firebird) vers Nimble (PostgreSQL). Une seule routine convertit tout dans le bon ordre ;
elle est répétable et ne crée pas de doublons.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Choisissez le bon tenant : tuile **Tenants** du groupe **Gestion ADM** → **Utiliser →**.
3. Revenez à **Administration** et cliquez dans le groupe **Gestion ADM** sur la tuile **Conversion**.

En haut figure **Tenant actif :** avec le code du tenant. Si aucun n'est choisi, vous lisez **aucun —
choisissez-en un d'abord dans Tenants**, avec le message **Choisissez d'abord un tenant (Gestion de la
plateforme → Tenants → Utiliser) et configurez sa source Firebird.**

![L'écran de conversion pour le tenant demo : le bloc Source Firebird héritée sans chemin, le bouton Convertir ce tenant, puis les blocs Importer les utilisateurs hérités et Générer des données de démonstration.](../images/conversie-scherm-fr.png)

## Source Firebird héritée

Ce bloc indique si Nimble peut lire la base Firebird du tenant actif :

- **Vérification…** — le test est en cours.
- **Connecté (lecture seule)** — la source est accessible. Le nombre de lignes de `CRM_ACCOUNTS` suit.
- **Aucun chemin Firebird configuré pour ce tenant (Tenants → source Firebird).** — configurez d'abord le
  chemin sur l'écran [Tenants](tenants.md).
- Un message d'erreur rouge — la source est configurée mais inaccessible.

**Retester** relance le test.

Nimble lit la base Firebird en **lecture seule**. L'ancien logiciel reste le seul écrivain tant que la
migration est en cours.

## Lancer la conversion

Cliquez sur **Convertir ce tenant**. Le bouton ne fonctionne que lorsque la source est **Connecté**. Pendant
le traitement s'affiche **Conversion en cours…**.

À la fin, vous voyez pour chaque élément :

| Colonne | Signification |
|---|---|
| **Élément** | Quelle partie des données, p. ex. *Relaties (CRM_ACCOUNTS)* ou *Offertes (FIN_SALES_QUOTES_HEADER)* |
| **Nombre** | Combien de lignes ont été traitées |
| **Statut** | **OK** en vert, ou le message d'erreur en rouge |

Sous le tableau figure le total : **Terminé — … lignes traitées au total.**

Les éléments comprennent notamment la fiche d'entreprise, les relations, les fournisseurs, les personnes de
contact, les fonctions de contact, les tâches, rendez-vous et notes, les groupes d'articles et les articles,
les codes TVA, les devis et leurs lignes, les factures et leurs lignes, les états d'avancement, les factures
d'achat, les projets avec leurs phases, matériaux et articles, les équipes, et les listes de choix statuts de
production, statuts pipeline et types de projet.

!!! tip "Répétable"
    Vous pouvez relancer la conversion, par exemple après de nouvelles données dans Firebird. Aucun doublon
    n'est créé.

## Importer les utilisateurs hérités

**Importer / synchroniser les utilisateurs** convertit les utilisateurs backoffice actifs de Firebird en
comptes pour ce tenant.

- Les comptes existants sont synchronisés : nom, rôle et liaison ADM One. Leur mot de passe reste inchangé.
- Seuls les nouveaux comptes reçoivent un mot de passe temporaire issu des paramètres du serveur.
- À la fin, vous voyez combien d'utilisateurs ont été créés, mis à jour et ignorés, avec éventuellement une
  liste de messages.

Ce bouton aussi ne fonctionne que lorsque la source est **Connecté**.

## Générer des données de démonstration

Ce bloc n'apparaît que sur le tenant **demo**. **Générer les données de démonstration** remplit ce tenant avec
des données fictives mais réalistes : listes de base, articles, relations, personnes de contact, leads,
collaborateurs et projets. Ce qui existe est conservé. À la fin, un tableau indique par élément combien
d'enregistrements sont **Nouveaux** et combien sont **Déjà présents**.

## Erreurs fréquentes

!!! warning
    - **Aucun tenant choisi** — choisissez d'abord un tenant via **Tenants → Utiliser →**.
    - **Aucun chemin Firebird** — saisissez le chemin du tenant sur l'écran **Tenants** et cliquez sur
      **Enregistrer**.
    - **Connexion échouée** — vérifiez que le serveur Firebird est joignable et que le chemin est correct, puis
      cliquez sur **Retester**.

## Voir aussi

- [Tenants](tenants.md) — choisir le tenant et configurer le chemin Firebird
- [Utilisateurs](users.md)
- [Relations](../relations.md) — l'écran où apparaissent les relations importées
