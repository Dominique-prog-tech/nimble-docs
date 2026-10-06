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

![Le haut de l'écran de conversion pour le tenant demo : le bloc Source Firebird héritée sans chemin, le bouton Convertir ce tenant, puis les blocs Importer les utilisateurs hérités et Mettre à jour les dates de création. Les autres blocs suivent plus bas à l'écran.](../images/conversie-scherm-fr.png)

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

Les éléments comprennent notamment la fiche d'entreprise, les relations avec leur site web, leur GSM et leurs remarques, les fournisseurs, les personnes de
contact, les fonctions de contact, les tâches, rendez-vous et notes, les groupes d'articles et les articles avec leur fournisseur, leur fabricant et leur code EAN,
les codes TVA, les devis et leurs lignes, les factures et leurs lignes, les états d'avancement, les factures
d'achat, les projets avec leurs phases, matériaux et articles, les équipes, et les listes de choix statuts de
production, statuts pipeline et types de projet.

!!! tip "Répétable"
    Vous pouvez relancer la conversion, par exemple après de nouvelles données dans Firebird. Aucun doublon
    n'est créé.

!!! warning "Un client qui travaille déjà dans Nimble"
    Une conversion complète remet les données existantes à la valeur de Firebird : ce que le client a modifié entre-temps
    dans Nimble (phases, dates, statuts, planning) est écrasé. Pour un tel client, la conversion est **verrouillée** :
    un message s'affiche au-dessus du bouton, le bouton est désactivé et Nimble ne convertit rien. Les blocs
    **Mettre à jour les dates de création**, **Reprendre les fournisseurs par article**, **Compléter les données
    des relations** et **Marquer les notes de crédit d'achat** ci-dessous fonctionnent bien : ils n'écrasent rien de
    ce que le client a configuré dans Nimble.

## Importer les utilisateurs hérités

**Importer / synchroniser les utilisateurs** convertit les utilisateurs backoffice actifs de Firebird en
comptes pour ce tenant.

- Les comptes existants sont synchronisés : nom, rôle et liaison ADM One. Leur mot de passe reste inchangé.
- Seuls les nouveaux comptes reçoivent un mot de passe temporaire issu des paramètres du serveur.
- À la fin, vous voyez combien d'utilisateurs ont été créés, mis à jour et ignorés, avec éventuellement une
  liste de messages.

Ce bouton aussi ne fonctionne que lorsque la source est **Connecté**.

## Mettre à jour les dates de création

Ce bloc reprend de Firebird la date de création des projets et articles convertis. Rien d'autre ne change, et
ce qui a été créé dans Nimble n'est pas touché.

1. Cliquez sur **Vérifier**. Nimble se contente de lire et montre par élément (**Projets**, **Articles**) ce qui
   se passerait. En dessous figure par exemple *639 dates de création changeraient. Rien n'a encore été écrit.*
2. Si la vérification a trouvé quelque chose à modifier, **Mettre à jour** s'active. Cliquez dessus.
3. Cliquez ensuite à nouveau sur **Vérifier** : tout doit alors figurer sous **Déjà corrects**.

| Colonne | Signification |
|---|---|
| **Convertis** | Combien de projets ou d'articles viennent de Firebird |
| **À modifier** / **Modifiés** | Combien de dates de création changeraient, ou après **Mettre à jour** : ont changé |
| **Déjà corrects** | Combien correspondent déjà à Firebird |
| **Source sans date** | Firebird ne connaît pas de date pour cet enregistrement ; il reste tel quel |
| **Absents de la source** | Firebird ne contient pas (plus) cet enregistrement ; il reste tel quel |

Chaque fiche dont la date change reçoit une ligne **Modifié** dans son historique.

## Reprendre les fournisseurs par article

Ce bloc associe le fournisseur de Firebird à chaque article qui n'a **pas encore** de fournisseur dans Nimble.
Le prix retenu est le prix d'achat actuel dans Nimble, de sorte que le prix de revient d'aucun article ne
change. Les articles qui ont déjà un fournisseur ne sont pas touchés.

1. Cliquez sur **Vérifier**. Nimble se contente de lire et montre ce qui se passerait.
2. S'il y a quelque chose à associer, **Associer** s'active. Cliquez dessus.
3. Cliquez ensuite à nouveau sur **Vérifier** : tout doit alors figurer sous **Avait déjà un fournisseur**.

| Colonne | Signification |
|---|---|
| **Avec fournisseur dans la source** | Combien d'articles ont un fournisseur dans Firebird |
| **À associer** / **Associés** | Combien d'articles recevraient un fournisseur, ou après **Associer** : en ont reçu un |
| **Avait déjà un fournisseur** | Articles qui ont déjà un fournisseur dans Nimble ; ils restent tels quels |
| **Article absent de Nimble** | L'article de Firebird n'existe pas dans Nimble |
| **Fournisseur absent de Nimble** | Le fournisseur de Firebird n'existe pas comme relation dans Nimble |

La conversion complète ci-dessus associe aussi les fournisseurs, mais avec le prix et le code de Firebird.
Voir [Articles](../inventory/articles.md#fournisseurs-dun-article) pour ce que signifie un fournisseur sur un
article.

## Compléter les données des relations

Ce bloc reprend de Firebird le **site web**, le **GSM** et les **remarques** des relations converties, mais
uniquement là où Nimble n'a encore rien. Un champ déjà rempli reste tel quel, même si Firebird indique autre chose.
Les remarques deviennent une note *Opmerkingen* sur la relation, datée du jour de la dernière modification de la
relation dans Firebird.

1. Cliquez sur **Vérifier**. Nimble se contente de lire et montre, par donnée (**Site web**, **GSM**,
   **Remarques**), ce qui se passerait.
2. S'il y a quelque chose à compléter, **Compléter** s'active. Cliquez dessus.
3. Cliquez ensuite à nouveau sur **Vérifier** : tout doit alors figurer sous **Déjà remplis**.

| Colonne | Signification |
|---|---|
| **Dans la source** | Combien de relations ont cette donnée dans Firebird |
| **À compléter** / **Complétés** | Combien seraient remplies, ou après **Compléter** : l'ont été |
| **Déjà remplis** | Nimble a déjà une valeur ou déjà une note ; elle reste telle quelle |
| **Relation absente de Nimble** | La relation de Firebird n'existe pas dans Nimble |
| **Source sans date** | Uniquement pour les remarques : Firebird ne connaît pas de date de modification, il n'y a donc pas de note |

Si le GSM figure déjà comme numéro de téléphone sur la relation, il n'est pas rempli une seconde fois. Une note que
vous avez supprimée dans Nimble ne revient pas. Chaque relation dont le site web ou le GSM change reçoit une ligne
dans son historique.

## Marquer les notes de crédit d'achat

Votre ancien logiciel enregistrait une note de crédit d'un fournisseur comme facture d'achat au **montant
négatif**. Ce bloc donne à chaque facture d'achat convertie au montant négatif le type **Note de crédit**. Le
montant, l'approbation et le statut de paiement ne changent pas. Le bloc ne lit que Nimble, pas la base Firebird.

1. Cliquez sur **Vérifier**. Nimble compte ce qui se passerait.
2. S'il y a quelque chose à marquer, **Marquer** s'active. Cliquez dessus.
3. Cliquez ensuite à nouveau sur **Vérifier** : tout doit alors figurer sous **Déjà note de crédit**.

| Colonne | Signification |
|---|---|
| **Factures d'achat converties** | Combien de factures d'achat viennent de Firebird |
| **À marquer** / **Marquées** | Combien ont un montant négatif et figurent encore comme facture, ou après **Marquer** : ont été marquées |
| **Déjà note de crédit** | Pièces négatives qui ont déjà le type Note de crédit |

Une conversion complète attribue désormais le type elle-même. Voir [Factures d'achat](../purchasing/purchase-invoices.md#notes-de-credit).

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
