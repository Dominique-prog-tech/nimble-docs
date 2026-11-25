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
production, phases commerciales et types de projet.

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
    **Mettre à jour les devis** fonctionne aussi : il passe chaque devis déjà traité dans Nimble.

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

## Compléter les fournisseurs

Transfère les fournisseurs ajoutés dans l'ancien logiciel depuis la dernière conversion complète. Un fournisseur déjà
présent dans Nimble reste tel quel. Faites-le avant **Compléter les factures d'achat** : une facture d'achat ne peut être
transférée que si son fournisseur figure dans Nimble.

1. Cliquez sur **Vérifier**. Nimble compte ce qui se passerait et cite les nouveaux fournisseurs.
2. S'il y a de nouveaux fournisseurs, **Compléter** s'active. Cliquez dessus.
3. Cliquez ensuite à nouveau sur **Vérifier** : il ne doit plus y avoir de nouveaux fournisseurs.

| Colonne | Signification |
|---|---|
| **Dans la source** | Combien de fournisseurs l'ancien logiciel contient |
| **Déjà dans Nimble** | Combien d'entre eux ont déjà été transférés |
| **Nouveaux** / **Ajoutés** | Combien seront ajoutés, ou après **Compléter** : l'ont été |
| **Déjà saisis à la main** | Fournisseurs dont le numéro de TVA figure déjà chez un fournisseur saisi à la main ; aucun second n'est ajouté |
| **Sans nom** | Fournisseurs sans nom ; la conversion complète les ignore aussi |

Si un fournisseur figure sous **Déjà saisis à la main**, Nimble le cite avec le fournisseur déjà présent dans Nimble.
Ses factures ne peuvent alors pas être transférées automatiquement : saisissez-les à la main.

Ensuite, vous pouvez aussi lancer **Compléter les données des relations** et **Reprendre les fournisseurs par article** :
ils trouvent aussi les nouveaux fournisseurs.

## Compléter les factures d'achat

Transfère les factures d'achat arrivées dans l'ancien logiciel depuis la dernière conversion complète. Une facture
d'achat déjà présente dans Nimble reste telle quelle : convertie, saisie à la main ou reçue via Peppol. Le bloc
**Transférer les documents** relie ensuite les scans des nouvelles factures.

1. Cliquez sur **Vérifier**. Nimble compte ce qui se passerait.
2. S'il y a de nouvelles factures, **Compléter** s'active. Cliquez dessus.
3. Cliquez ensuite à nouveau sur **Vérifier** : il ne doit plus y avoir de nouvelles factures.

| Colonne | Signification |
|---|---|
| **Dans la source** | Combien de factures d'achat l'ancien logiciel contient |
| **Déjà dans Nimble** | Combien d'entre elles ont déjà été transférées |
| **Nouvelles** / **Ajoutées** | Combien seront ajoutées, ou après **Compléter** : l'ont été |
| **Fournisseur absent de Nimble** | Factures qui ne peuvent pas être transférées, car leur fournisseur n'est pas dans Nimble |
| **Déjà saisies dans Nimble** | Factures déjà dans Nimble, saisies à la main ou reçues via Peppol ; elles sont ignorées |

Si une facture ne peut pas être transférée faute de fournisseur, Nimble affiche une liste sous le décompte : le
fournisseur tel qu'il s'appelle dans l'ancien logiciel, le numéro, la date, le total et si la facture est approuvée ou
payée. Si un nom figure, complétez ce fournisseur avec **Compléter les fournisseurs** ci-dessus, puis cliquez à
nouveau sur **Vérifier**. **Supprimé ou inconnu** signifie que ce fournisseur a été supprimé dans l'ancien logiciel et
n'est pas transféré : créez-le dans Nimble ou saisissez la facture à la main.

## Compléter les états d'avancement

Met à jour les états de l'ancien logiciel. Les états créés depuis la dernière conversion complète sont ajoutés ; un
état déjà présent suit ce que dit maintenant l'ancien logiciel (statut, montant et lignes) ; un état supprimé là-bas
est aussi supprimé de Nimble. Ils restent en lecture seule, avec le statut **Ancienne application**. Un état créé dans
Nimble reste tel quel.

1. Cliquez sur **Vérifier**. Nimble compte ce qui se passerait et n'écrit encore rien.
2. S'il y a quelque chose à faire, **Compléter** s'active. Cliquez dessus.
3. Cliquez ensuite à nouveau sur **Vérifier** : il ne doit plus rien y avoir à faire.

| Colonne | Signification |
|---|---|
| **Dans la source** | Combien d'états contient l'ancien logiciel |
| **Inchangés** | États d'un projet dans Nimble déjà présents tels que l'ancien logiciel les porte maintenant |
| **Nouveaux** / **Ajoutés** | États qui s'ajoutent, ou après **Compléter** : qui ont été ajoutés |
| **À mettre à jour** / **Mis à jour** | États dont le statut, le montant ou les lignes ont changé |
| **Projet absent de Nimble** | États d'un projet absent de Nimble : ils ne sont pas transférés |
| **À supprimer** / **Supprimés** | États supprimés dans l'ancien logiciel |

Sous le décompte figurent trois listes :

- **Projets dans Nimble avec des états de l'ancienne application** : par projet le dernier état, ce qui a déjà été
  facturé et la part que Nimble reconnaît dans le devis accepté. C'est ce que **Reprendre de l'application
  précédente** remplira ensuite sur le premier état dans Nimble (voir [États d'avancement](../sales/progress-reports.md)).
- **États de projets absents de Nimble** : avec le numéro de projet de l'ancien logiciel et la référence du dernier
  état. Si un tel projet doit continuer dans Nimble, créez d'abord le projet et son devis.
- **Supprimés dans l'ancienne application** : les états que **Compléter** supprime de Nimble, avec leur montant et
  leur statut.

Si Nimble ne lit aucun état dans l'ancien logiciel, il ne supprime rien. S'il devait supprimer plus de la moitié des
états présents dans Nimble, il refuse, avec la raison : cela indique plutôt une erreur de lecture qu'une action de
votre part.

## Mettre à jour les devis

Pour un client qui a encore finalisé des devis dans l'ancien logiciel après la dernière conversion complète. Un devis
transféré qui n'a pas été modifié dans Nimble suit ce que dit maintenant l'ancien logiciel : en-tête, lignes et
montants. Un devis déjà traité dans Nimble n'est **pas** écrasé. Les devis qui ne sont pas encore dans Nimble sont
ajoutés avec leur propre numéro. Un devis supprimé dans l'ancien logiciel reste dans Nimble.

1. Cliquez sur **Vérifier**. Nimble compare chaque devis et n'écrit encore rien.
2. S'il y a quelque chose à faire, **Compléter** s'active. Cliquez dessus.
3. Cliquez ensuite à nouveau sur **Vérifier** : il ne doit plus rien y avoir à mettre à jour.

| Colonne | Signification |
|---|---|
| **Dans la source** | Combien de devis contient l'ancien logiciel |
| **Inchangés** | Devis déjà dans Nimble tels que l'ancien logiciel les porte maintenant |
| **À mettre à jour** / **Mis à jour** | Devis non modifiés dans Nimble dont quelque chose a changé |
| **Nouveaux** / **Ajoutés** | Devis qui n'étaient pas encore dans Nimble |
| **Modifiés dans Nimble** | Devis qui diffèrent, mais déjà traités dans Nimble : ils restent tels quels |
| **Supprimés dans la source** | Devis supprimés dans l'ancien logiciel : ils restent dans Nimble |

Sous le décompte figurent les listes par devis, avec le montant dans Nimble et dans l'ancien logiciel, le statut, et ce
qui diffère (en-tête, sections ou lignes).

**Quand un devis est-il modifié dans Nimble ?** S'il a été envoyé, proposé en ligne, envoyé à la signature ou facturé
dans Nimble, si une nouvelle version en a été créée, ou si quelqu'un l'a modifié après la dernière conversion. Nimble
lit ce dernier point dans l'historique. Il reconnaît une conversion aux centaines de modifications dans la même minute ;
la ligne sous le décompte indique quand a eu lieu la dernière. Pour un tel devis, la colonne **Pourquoi pas** indique
ce qui s'est passé, quand et par qui. Convenez avec le client quelle version vaut.

**Clients pas encore dans Nimble.** Si le client d'un nouveau devis n'est pas dans Nimble, Nimble cherche un client avec
le même numéro de TVA ou le même nom. S'il n'en trouve pas, le client est repris de l'ancien logiciel. Si le client y a
été supprimé, le devis n'est pas transféré, comme lors d'une conversion complète. La liste **Clients de nouveaux devis**
montre ce qui se passe pour chaque client.

Si Nimble devait mettre à jour plus d'un quart des devis transférés, il refuse, avec la raison : cela indique plutôt
une erreur dans la source ou dans l'historique que ce que le client a fait.

## Reprendre le statut de paiement

Utilisez ceci **une seule fois**, au moment où votre comptabilité passe de l'ancien logiciel à Nimble. Il reprend de
l'ancien logiciel les factures d'achat **approuvées** et **payées**, pour les factures d'achat déjà présentes dans Nimble.
Vous ne voyez ainsi dans Nimble aucune facture à payer que vous avez déjà payée dans l'ancien logiciel.

Cela fonctionne uniquement dans un sens : ce qui est déjà approuvé ou payé dans Nimble le reste. Une facture payée est
aussi approuvée. Les factures reçues via Peppol ou saisies à la main ne sont pas touchées.

1. Cliquez sur **Vérifier**. Nimble compte ce qui se passerait et cite les factures qui seraient marquées payées.
2. S'il y a quelque chose à reprendre, **Reprendre** s'active. Cliquez dessus.
3. Cliquez ensuite à nouveau sur **Vérifier** : il ne doit plus rien y avoir à reprendre. Sous le tableau figure alors la
   date à laquelle le statut de paiement a été repris.

**La reprise ne se fait qu'une fois.** Après la première reprise réussie, le bouton reste désactivé et Nimble indique la
date à laquelle elle a eu lieu : à partir de ce moment, l'ancien logiciel ne détermine plus rien. Si un client travaille
définitivement dans Nimble, **Reprendre** reste aussi désactivé. **Vérifier** reste toujours possible : cela ne fait que
lire et ne change rien.

| Colonne | Signification |
|---|---|
| **Dans la source** | Combien de factures d'achat l'ancien logiciel contient |
| **Trouvées dans Nimble** | Combien d'entre elles figurent déjà dans Nimble |
| **À approuver** / **Approuvées** | Combien seront approuvées, ou après **Reprendre** : ont été approuvées |
| **À marquer payées** / **Marquées payées** | Combien seront marquées payées, ou après **Reprendre** : l'ont été |

Ensuite, vous indiquez les paiements dans Nimble même. Voir [Factures d'achat](../purchasing/purchase-invoices.md#indiquer-un-paiement).

## Compléter le pays

Une facture électronique via Peppol ne part pas sans le pays du client. S'il manque pour beaucoup de relations, cette
étape le complète, pour que vous n'ayez pas à compléter la fiche de relation avant chaque facture.

L'étape remplit le pays de votre **fiche d'entreprise** (le plus souvent la Belgique) sur chaque relation qui n'a pas
encore de pays, si son code postal peut se trouver dans ce pays ou est vide. Une relation avec un autre code postal, par
exemple un fournisseur allemand avec le code postal 49767, ne le reçoit pas : elle figure dans une liste à vérifier à la
main. Une relation qui a déjà un pays n'est pas modifiée. L'étape ne lit que Nimble, elle fonctionne donc aussi lorsque
la conversion complète est verrouillée.

1. Cliquez sur **Vérifier**. Nimble compte les relations sans pays et montre celles qui ne le recevront pas.
2. S'il y a quelque chose à compléter, **Compléter** s'active. Cliquez dessus.
3. Complétez vous-même le pays des relations de la liste sur leur fiche de relation.

| Colonne | Signification |
|---|---|
| **Sans pays** | Combien de relations n'ont pas encore de pays |
| **Recevront BE** / **Ont reçu BE** | Combien recevront le pays, ou après **Compléter** : l'ont reçu |
| **À vérifier à la main** | Combien ont un code postal qui ne correspond pas au pays |

Vous pouvez relancer l'étape plus tard : elle ne trouve alors que les relations ajoutées entre-temps sans pays. Une
nouvelle relation reçoit le pays de la fiche d'entreprise dès sa création.

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
