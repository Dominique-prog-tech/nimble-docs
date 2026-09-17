# Devis

Un devis est votre proposition de prix à un client. Vous le composez à partir de **blocs** contenant des
lignes — travaux, matériaux et heures. Ensuite, vous suivez si le client l'accepte, et vous le facturez.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Ventes → Devis**.

## La liste et le tableau

En haut à gauche, vous choisissez entre deux vues : **Liste** et **Tableau**. Votre choix est conservé : si
vous rouvrez l'écran plus tard, il se présente dans la vue que vous avez utilisée en dernier.

### Liste

![La liste des devis avec les colonnes Numéro, Client, Date, Valable jusqu'au, Montant et Statut. Deux devis
envoyés ont dépassé leur date de validité : la colonne Valable jusqu'au indique en rouge depuis combien de
temps.](../images/offertes-lijst-fr.png)

| Colonne | Ce que vous voyez |
|---|---|
| **Numéro** | Le numéro du devis. Les variantes et versions portent un suffixe, comme `-A` ou `-v2` |
| **Client** | Pour qui est le devis |
| **Date** | La date de la proposition |
| **Valable jusqu'au** | Jusqu'à quand le prix s'applique. Si un devis envoyé a dépassé cette date, la durée du dépassement s'affiche en rouge — *10 jours*, *2 mois* |
| **Montant** | Le total TVA comprise |
| **Statut** | Brouillon, Envoyé, Accepté ou Refusé |

À côté des boutons de vue, une liste déroulante permet de restreindre rapidement l'affichage : **Brouillon**,
**Envoyé**, **Accepté**, **Refusé** ou **Échus**, chaque fois suivi du nombre. Un choix qui ne concerne aucun
devis n'apparaît pas. À droite figurent **Nouveau devis**, **Exporter** et le champ de recherche.

**Double-cliquez** une ligne pour ouvrir le devis.

À droite de la liste se trouve la barre étroite **Journal**. Dépliez-la pour voir les tâches, notes, pièces
jointes et l'historique du devis sélectionné dans la liste, sans l'ouvrir.

### Tableau

![Le tableau des devis avec ses quatre colonnes de statut Brouillon, Envoyé, Accepté et Refusé.](../images/offertes-bord-fr.png)

Le tableau répartit les mêmes devis sur quatre colonnes : **Brouillon**, **Envoyé**, **Accepté** et
**Refusé**. Chaque carte affiche le client, le numéro, le montant, la date et la date de validité. Si la
validité d'un devis envoyé est dépassée, la carte indique *Validité dépassée*.

- **Cliquez** une carte pour ouvrir le devis.
- **Glissez** une carte vers une autre colonne pour changer le statut. Si ce changement n'est pas permis,
  vous lisez pourquoi et la carte reste en place.

## Un nouveau devis

Cliquez sur **Nouveau devis**. Vous complétez d'abord le bloc **Données du devis** :

| Champ | Signification |
|---|---|
| **Numéro** | Obligatoire. Attribué automatiquement (`OFF-2026-0001`) ; vous pouvez le modifier. Il doit rester unique |
| **Client** | Obligatoire. À choisir parmi vos [relations](../relations.md) |
| **Projet** | Facultatif. Si le devis se rattache à un projet, il fait partie du dossier de ce projet |
| **Date** | Obligatoire. La date de la proposition ; aujourd'hui par défaut |
| **Valable jusqu'au** | Facultatif. Jusqu'à quand votre prix s'applique |

Cliquez ensuite sur **Enregistrer**.

!!! info "D'abord enregistrer, ensuite les blocs et les lignes"
    Les blocs et les lignes appartiennent à un devis enregistré. Tant qu'il ne l'est pas, vous lisez
    *Enregistrez d'abord le devis ; vous pourrez ensuite ajouter des blocs et des lignes.*

S'il manque un champ obligatoire, le haut de la fiche indique lequel. Si vous avez modifié quelque chose sans
enregistrer, *Non enregistré* s'affiche à côté du numéro.

## La fiche du devis

En haut figurent le numéro, le client et la date. En haut à droite figure le **Total TVAC** ; il reste
visible lorsque vous faites défiler la page.

La fiche comporte les onglets **Devis**, **Tâches**, **Notes**, **Pièces jointes** et **Historique**. Le
fonctionnement des quatre derniers est décrit dans [Travailler avec une fiche](../fiches.md).

Si le devis a été envoyé par e-mail ou proposé en ligne, le bloc Données du devis comporte des lignes
supplémentaires :

- **Envoyé le** — quand et à quelle adresse le devis a été envoyé.
- **Proposé en ligne** — le lien que reçoit le client, avec sa date de validité. Vous pouvez copier ce lien
  et le transmettre vous-même.

## Blocs et lignes

Un devis est un **document**, pas une liste de courses. Vous répartissez le travail en blocs avec un titre
— « Travaux préparatoires », « Couverture », « Finitions » — pour que le client lise ce qu'il achète.

- **+ Ajouter un bloc** (sous le dernier bloc) crée un nouveau bloc.
- Le **titre** du bloc se saisit en haut. Si vous le laissez vide, le devis n'affiche pas de titre.
- Cocher **sous-total** affiche le total de ce bloc sous les lignes, comme *Sous-total du bloc*.
- Le ✕ rouge à côté du titre supprime le bloc avec ses lignes. Ce bouton apparaît dès qu'il y a plus d'un
  bloc.

Chaque bloc offre deux façons d'ajouter une ligne :

- **+ ligne** — une ligne vide que vous décrivez vous-même.
- **+ article** — choisissez un article dans votre [catalogue](../inventory/articles.md). La description,
  l'unité et le prix de vente suivent. La ligne arrive dans ce bloc-là.

![La fenêtre Choisir un article, avec numéro, description, famille et prix.](../images/offerte-artikelzoeker-fr.png)

!!! tip "Recherchez par numéro ou par description"
    Dans la fenêtre **Choisir un article**, saisissez un numéro d'article, une partie de la description, ou
    les deux. « DIE weekend » trouve l'article `DIE-9002 — Heure installateur — week-end`.

### Les champs d'une ligne

| Champ | Signification |
|---|---|
| **Description** | Ce que le client lit. Librement modifiable, même pour un article du catalogue |
| **option** | La ligne figure au devis **avec** son prix mais ne compte **pas** dans le total |
| **+ note** | Un texte supplémentaire sous la description, par exemple une marque ou une condition |
| **Quantité** | Peut contenir des décimales (0,25 heure) |
| **Unité** | Pièces, heures, mètres — reprise de l'article |
| **TVA** | Le [code TVA](../administration/vat-codes.md) de cette ligne. La liste ouverte indique ce que signifie chaque code |
| **Prix** | Le prix unitaire |
| **Net** | Quantité × prix, calculé |

Les flèches ↑ et ↓ déplacent une ligne dans son bloc. Le ✕ rouge la supprime. Une ligne *— ligne vide —*
n'est qu'un espace sur le document ; vous pouvez aussi la déplacer ou la supprimer.

!!! tip "Une nouvelle ligne reprend la TVA de la précédente"
    Une nouvelle ligne reçoit le code TVA de la dernière ligne du devis. Si vous travaillez en cocontractant,
    vous ne devez donc pas le choisir sur chaque ligne. Sur un devis vide, la première ligne reçoit le
    premier code de votre liste de codes TVA.

## Les totaux

Sous les blocs figure le détail :

- **Total HTVA**.
- Une ligne par taux de TVA, avec la base sur laquelle cette TVA est calculée — par exemple *TVA 6% (sur
  2 418,00 €)*.
- **Total TVAC**.
- En dessous, la mention légale liée à un code TVA, comme le texte en cas d'autoliquidation. Cette mention
  figure aussi sur le document.

Si un code TVA applique 0 % sans mention légale, un avertissement s'affiche. Vérifiez alors : en cas
d'autoliquidation, de livraison intracommunautaire ou d'exportation, le motif doit figurer sur le document.

Si le devis comporte des lignes en option, **Options (TVA comprise, hors total)** s'affiche en dessous. Deux
choses à savoir sur ce montant :

- Il n'entre **pas** dans le total ci-dessus. Si le client retient l'option, le montant vient s'y ajouter.
- Il est **TVA comprise**, alors que la ligne en option affiche son montant hors TVA — comme toute autre
  ligne. Les deux chiffres diffèrent donc, et c'est normal.

## Les boutons du bas

Les boutons affichés dépendent du statut du devis et de vos droits. De gauche à droite :

| Bouton | Quand | Ce qu'il fait |
|---|---|---|
| **Enregistrer** | Brouillon et Envoyé | Enregistre vos modifications |
| **Aperçu avant impression** | Toujours | Affiche le document tel que le client le reçoit |
| **Envoyer par e-mail** | Toujours | Ouvre la fenêtre d'envoi |
| **Proposer en ligne** | Brouillon et Envoyé | Met le devis en ligne, pour que le client puisse l'accepter ou le refuser |
| **Retirer la version en ligne** | Dès que le devis est en ligne | Supprime la version en ligne |
| **Marquer comme envoyé** | Brouillon et Refusé | Change uniquement le statut ; rien n'est envoyé |
| **Marquer comme accepté** · **Refuser** | Envoyé | Enregistre la réponse du client |
| **Facturer** | Accepté | Crée un brouillon de facture avec les lignes du devis |
| **Nouvelle version** | Accepté et Refusé | Crée une copie modifiable |
| **Annuler** | Brouillon et Envoyé | Abandonne vos modifications |
| **Supprimer** | Toujours | Après confirmation, place le devis dans la corbeille |

Toute personne autorisée à consulter les devis peut utiliser l'aperçu avant impression. Les autres boutons
demandent le droit de modifier les devis.

!!! info "Les boutons reprennent les termes de votre entreprise"
    Les boutons *Marquer comme …* utilisent les noms de statut que vous définissez vous-même dans
    [Statuts de devis](../administration/quote-status.md).

## Imprimer le devis

Cliquez sur **Aperçu avant impression**. Vous voyez le document tel que le client le recevra. La barre
d'outils au-dessus du document vous permet de feuilleter les pages, de zoomer et d'imprimer. En haut de la
fenêtre figurent **Télécharger** — le devis arrive en PDF dans votre dossier de téléchargements — et
**Envoyer par courriel**.

<!-- AFBEELDING: la fenêtre Aperçu avant impression avec le devis — PAS automatisable : un navigateur
     headless n'a pas de visionneuse PDF et affiche « Couldn't load plugin » à la place du document.
     Cette image doit être prise à la main dans un vrai navigateur. -->

En haut du document figurent vos propres coordonnées — nom, adresse, téléphone, numéro de TVA et votre logo.
Elles proviennent de la [fiche d'entreprise](../settings/company-profile.md) dans l'administration.
L'en-tête, la formule d'appel et les conditions se règlent dans les
[modèles de documents](../settings/document-templates.md).

!!! info "Le devis suit la langue du client"
    Le document est établi dans la langue indiquée sur la fiche client sous **Langue des documents**, et non
    dans celle où vous travaillez. Si ce champ est vide, le devis suit la langue de votre entreprise.

Les lignes de titre et les lignes vides apparaissent sur le document comme intertitre et comme espace, sans
quantité ni montant. Le sous-total figure sous chaque bloc, et le détail en bas de page.

Si l'impression échoue, la fenêtre *L'impression n'a pas pu être générée* s'ouvre avec la cause technique.
Transmettez ce texte lorsque vous demandez de l'aide.

## Envoyer le devis par e-mail

Cliquez sur **Envoyer par e-mail**. Si vous avez des modifications non enregistrées, Nimble vous demande
d'abord d'enregistrer : ce que vous envoyez doit aussi figurer dans le dossier.

La fenêtre **Envoyer le devis par e-mail** est déjà remplie :

| Champ | Contenu |
|---|---|
| **À** | Obligatoire. L'adresse e-mail du client |
| **Objet** | Obligatoire. Avec votre numéro de devis |
| **Message** | Un texte d'accompagnement, modifiable |
| **Pièce jointe** | Le devis en PDF, avec sa taille |

Tout reste modifiable avant de cliquer sur **Envoyer**. L'e-mail part dans la langue du client, comme le
devis lui-même.

Après l'envoi, trois choses se produisent :

- Si le devis était en **Brouillon**, il passe automatiquement à **Envoyé**.
- Une copie du PDF envoyé est ajoutée aux **Pièces jointes** du devis, avec l'adresse.
- La fiche affiche **Envoyé le**, avec la date et l'adresse.

!!! tip "Déjà remis vous-même ? Utilisez Marquer comme envoyé"
    Si vous avez remis le devis par courrier ou depuis votre propre messagerie, utilisez **Marquer comme
    envoyé**. Ce bouton ne fait que changer le statut ; il n'envoie rien.

!!! warning "Devis trop volumineux"
    Au-delà de 10 Mo, Nimble refuse d'envoyer. Au-dessus, l'e-mail partirait sans le devis. Mieux vaut un
    devis qui ne part pas qu'un devis qui arrive vide.

## Proposer le devis en ligne

Avec **Proposer en ligne**, Nimble publie le devis sur une page à part. Le client peut l'y consulter et
l'accepter ou le refuser. Les modifications non enregistrées sont d'abord enregistrées.

- Le lien figure ensuite sur la fiche sous **Proposé en ligne**. Transmettez-le vous-même.
- Le lien est valable jusqu'à la date indiquée sous **Valable jusqu'au**. Sans date, il est valable trente
  jours.
- Si **Valable jusqu'au** est dans le passé, Nimble refuse de mettre le devis en ligne et vous lisez
  pourquoi.
- Si le client accepte ou refuse en ligne, Nimble adapte le statut du devis. Si vous avez entre-temps déjà
  mis le devis sur Accepté ou Refusé, votre décision est conservée.

**Retirer la version en ligne** supprime la page. Le lien ne fonctionne plus.

## Le suivi du devis

| Statut | Ce que vous pouvez faire |
|---|---|
| **Brouillon** | Modifier, envoyer par e-mail, proposer en ligne, ou **Marquer comme envoyé** |
| **Envoyé** | Encore modifier, ou enregistrer la réponse avec **Marquer comme accepté** ou **Refuser** |
| **Accepté** | **Facturer**, ou créer une **Nouvelle version** |
| **Refusé** | **Marquer comme envoyé** si le client revient, ou créer une **Nouvelle version** |

!!! warning "Un devis accepté ou refusé est clôturé"
    Dès que le client a répondu, le document est figé. En haut figure *Ce devis est clôturé et ne peut plus
    être modifié.* Les champs, blocs et lignes ne sont pas modifiables, et à la place d'Annuler figure
    **← Retour aux devis**. C'est voulu : le client a reçu un prix, et celui-ci ne doit pas changer en
    silence.

    Si une modification s'impose malgré tout, cliquez sur **Nouvelle version**. Vous obtenez une copie avec
    les lignes actuelles, en Brouillon, avec un numéro de version de plus et une validité de trente jours.
    L'ancienne version subsiste, ce qui vous permet de vérifier ce que le client a reçu.

Un devis accepté ne change pas de statut, pas même sur le tableau. Un devis refusé, si : remettez-le avec
**Marquer comme envoyé**.

## Facturer

Sur un devis accepté, **Facturer** crée un brouillon de facture avec les lignes du devis et l'ouvre
aussitôt. Le numéro de facture n'est attribué qu'à la finalisation — voir [Factures](invoices.md).

Si ce n'est pas possible, le bouton est grisé et la raison figure à côté :

- *Ce devis a déjà été facturé.*
- *Ce devis ne contient aucune ligne facturable.* — par exemple lorsqu'il ne contient que des lignes en
  option.

## Versions et variantes

Si le devis fait partie d'une série, des boutons avec les montants côte à côte figurent en haut de l'onglet
Devis. Cliquez-en un pour ouvrir ce devis ; celui que vous consultez est mis en couleur.

- Les **versions** (v1, v2, v3) sont des propositions successives pour la même demande. La plus élevée fait
  foi et porte la mention *actuelle*.
- Les **variantes** sont des réponses différentes à la même demande — par exemple « A — douche à
  l'italienne » à côté de « B — baignoire ». Chaque variante a ses propres numéros de version, et donc sa
  propre mention *actuelle*.

![Les boutons de version au-dessus d'un devis, avec le montant par version et la mention actuelle sur la plus récente.](../images/offerte-versies-fr.png)

## Erreurs fréquentes

!!! warning
    - **Une ligne sans code TVA** calcule 0 % de TVA. Vérifiez que les
      [codes TVA](../administration/vat-codes.md) sont complétés dans l'administration.
    - **Vouloir qu'une ligne en option compte dans le total** — ce n'est pas le cas, et c'est voulu. Si vous
      souhaitez inclure le montant, décochez **option**.
    - **Vouloir modifier un devis accepté** — créez une nouvelle version plutôt que de retoucher l'ancienne.
    - **Deux fois le même numéro** — si vous modifiez le numéro à la main, choisissez-en un qui n'existe pas
      encore.

## Voir aussi

- [Factures](invoices.md) — ce qui suit un devis accepté
- [Articles](../inventory/articles.md) — le catalogue d'où proviennent vos lignes
- [Relations](../relations.md) — vos clients et leur langue des documents
- [Codes TVA](../administration/vat-codes.md) — les taux et leur mention légale
- [Statuts de devis](../administration/quote-status.md) — modifier le texte des quatre statuts
- [Modèles de documents](../settings/document-templates.md) — en-tête, formule d'appel et conditions
- [Travailler avec une fiche](../fiches.md) — onglets, enregistrement et suppression
- [Filtrer les listes](../lijsten-filteren.md) — l'entonnoir et le générateur de filtres
