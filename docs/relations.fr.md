# Relations

Sur l'écran **Relations**, vous gérez les clients et fournisseurs de votre entreprise. Une relation peut être **client**, **fournisseur**, ou les deux à la fois.

## Ouvrir l'écran

Cliquez sur **CRM → Relations** dans la barre latérale.

![Le journal ouvert à côté de la liste des relations, avec les contacts du client choisi.](images/relatielijst-rail-fr.png)

## La liste

| Colonne | Signification |
|---|---|
| **Nom** | Nom d'entreprise ou nom d'affichage |
| **Numéro de TVA** | Numéro d'entreprise |
| **Commune** | Code postal et commune réunis |
| **Responsable** | L'interlocuteur fixe au sein de votre équipe |
| **Langue** | La langue des documents de cette relation |
| **Type** | Badges Client / Fournisseur |
| **Créé le** | Date de création de la fiche |

![La liste des relations avec les colonnes Nom, Numéro de TVA, Commune, Langue et Type.](images/relaties-lijst-fr.png)

- **Rechercher et filtrer** — utilisez la recherche de la grille pour trouver rapidement une relation.
- **Exporter** — exportez la liste vers Excel ou CSV.
- **Nouveau** — cliquez sur **Nouvelle relation**.
- **Modifier** — **double-cliquez** une ligne pour ouvrir la fiche.
- **Journal** — cliquez à droite sur le rail **Journal** pour le côté de la relation sélectionnée. Il comporte quatre onglets :
    - **Contacts** — qui contacter chez ce client. Les adresses e-mail et les numéros sont cliquables, ce qui vous permet d'appeler ou d'écrire sans ouvrir la fiche. Cliquez une carte pour ouvrir la fiche de contact, ou utilisez **Nouvelle personne de contact** pour en lier une directement à ce client.
    - **Tâches** — ce qui doit encore être fait.
    - **Journal** — ce qui s'est passé : notes et appels.
    - **Pièces jointes** — documents et photos liés à ce client. Voir [Pièces jointes](bijlagen.fr.md).

## La fiche de relation

La fiche comporte deux onglets : **Fiche** et **Personnes de contact**. Les boutons **Enregistrer**, **Annuler** et **Supprimer** se trouvent sous les onglets et valent pour les deux — vous pouvez donc enregistrer depuis n'importe quel onglet.

L'onglet **Fiche** est divisé en blocs.

### Bloc Identification

| Champ | Explication |
|---|---|
| **Nom** | Obligatoire. Nom d'entreprise ou nom d'affichage. |
| **Numéro de relation** | Attribué automatiquement (`K0001`, `K0002`, …) si vous le laissez vide. Si vous saisissez vous-même une valeur, elle est conservée — les numéros existants de votre ancien logiciel ne sont pas écrasés. |
| **Forme juridique** | Liste de choix (SRL, SA, ASBL …). Recherchez en tapant. |
| **Numéro de TVA** | Numéro d'entreprise, avec le bouton **Récupérer** à côté. |

![Le bloc Identification d'une fiche de relation, avec nom, forme juridique, numéro de relation et numéro de TVA.](images/relatie-blok-identificatie-fr.png)

#### Récupérer les données de la BCE

Saisissez le numéro de TVA et cliquez sur **Récupérer**. Le nom, la rue, le numéro, le code postal, la commune et le pays sont remplis avec les données de la Banque-Carrefour des Entreprises. Si le numéro n'existe pas, un message s'affiche et la fiche reste inchangée.

### Bloc Adresse

| Champ | Explication |
|---|---|
| **Rue** et **N°** | Texte libre. |
| **Code postal** | Liste de recherche — tapez un code postal ou un nom de commune. La commune est remplie automatiquement. |
| **Commune** | Liste de recherche — fonctionne dans l'autre sens : choisissez une commune et le code postal suit. |
| **Pays** | Liste de recherche avec la liste des pays. |

![Le bloc Adresse avec rue, numéro, code postal, commune et pays.](images/relatie-blok-adres-fr.png)

!!! tip "Un seul suffit"
    Le code postal et la commune se complètent mutuellement. Choisissez-en un et l'autre champ suit tout seul.

### Bloc Contact

| Champ | Explication |
|---|---|
| **E-mail** | Optionnel, mais s'il est rempli, il doit être valide — le message apparaît pendant la saisie. |
| **Téléphone** | Texte libre. |

### Bloc Classification

| Champ | Explication |
|---|---|
| **Catégorie** | Catégorie de client issue de l'**Administration**. Recherchez en tapant. |
| **Source** | Comment cette relation vous a connu. La même liste que la **source du lead**, afin qu'un lead converti conserve son origine. |
| **Responsable** | L'interlocuteur fixe au sein de votre équipe. |
| **Langue des documents** | Détermine la langue des devis et factures pour ce client, indépendamment de la langue dans laquelle vous travaillez. Vide = la langue par défaut de votre entreprise. |
| **Client** / **Fournisseur** | Cochez ce qui s'applique — les deux sont possibles. |
| **Actif** | Décocher ne masque pas automatiquement la relation dans toutes les listes ; utilisez-le comme marqueur de statut. |

![Le bloc Classification avec catégorie, source, langue des documents et les cases Client, Fournisseur et Actif.](images/relatie-blok-classificatie-fr.png)

### Bloc Issu d'un lead

Ce bloc n'apparaît que pour une relation née d'un **lead**, et uniquement si vous êtes autorisé à consulter les leads. Il affiche, en lecture seule : numéro de lead, statut, type de demande, ampleur, budget, timing, urgence, prochaine action avec sa date, et la date de création du lead. Les champs que le lead n'avait pas restent absents.

![Un client issu d'un lead, avec le bloc complet Issu d'un lead.](images/relatie-herkomst-lead-fr.png)

!!! note "Pourquoi pas simplement des champs sur le client ?"
    Le budget, le timing et l'urgence décrivent une demande, pas un client — après le premier devis, ils ne sont plus exacts. Ils restent donc rattachés au lead, mais vous les retrouvez ici sans devoir passer par l'écran des leads.

### Onglet Personnes de contact

Vous gérez ici qui répond chez ce client. Le nombre figure dans le titre de l'onglet, ce qui vous évite de l'ouvrir pour savoir si quelqu'un y est lié.

![L'onglet Personnes de contact avec deux personnes liées, leur rôle et leur e-mail.](images/relatie-contactpersonen-fr.png)

| Colonne | Explication |
|---|---|
| **Personne** | Le nom. En lecture seule — la personne elle-même se modifie via [Personnes de contact](crm/contactpersonen.fr.md). |
| **Rôle** | Ce que cette personne fait dans **cette** entreprise. La même personne peut avoir un autre rôle ailleurs. |
| **E-mail** | Une adresse différente de celle de la personne. Laissez vide pour utiliser l'adresse personnelle — elle apparaît en gris dans le champ. |
| **GSM** | Celui de la personne, pour information. |

- **Lier** — choisissez une personne dans la liste de recherche en bas et cliquez sur **Lier**.
- **Délier** — supprime le lien. La personne elle-même subsiste ; elle peut travailler dans une autre entreprise.

!!! note "Tout est enregistré avec Enregistrer"
    Les liens et les rôles ne sont écrits qu'au moment où vous cliquez sur **Enregistrer**. **Annuler** laisse tout en l'état.

## En bas de la fiche

- **Enregistrer** — conserve les modifications. Actif uniquement avec un nom rempli et une adresse e-mail valide.
- **Annuler** — revient à la liste sans conserver.
- **Supprimer** — uniquement pour une relation existante, voir ci-dessous.

## Supprimer

Sur la fiche, cliquez sur **Supprimer**. La question « Archiver ? » apparaît d'abord, avec le nom. Après confirmation, la relation est **archivée** (soft-delete) et arrive dans la **Corbeille**, où vous pouvez la restaurer avant suppression définitive.

Enregistrer et Supprimer n'apparaissent que si vous disposez du **droit de modification** ; sans ce droit, vous pouvez lire la fiche mais pas la modifier.

## Erreurs fréquentes

!!! warning
    - **Laisser la catégorie ou la source vide** — les deux sont optionnelles, mais sans valeurs vous ne pourrez pas rapporter par type de client ni par canal.
    - **Modifier le code postal et la commune séparément** — utilisez les listes de recherche ; une saisie manuelle peut produire une combinaison inexistante.
    - **Confondre la langue des documents avec votre propre langue** — ce champ détermine la langue des documents que le client reçoit, pas celle de votre écran.
    - **Décocher Actif pour supprimer** — c'est **Supprimer** qui sert à cela ; **Actif** n'est qu'un marqueur.

## Données depuis l'héritage

Vous disposez d'une base Firebird existante ? Via **Configuration → Conversion**, importez les `CRM_ACCOUNTS` actives comme relations. La conversion est répétable : les lignes existantes sont mises à jour via la clé héritée, sans doublons.

## Voir aussi

- [Leads](crm/leads.fr.md) — du premier contact à la conversion en client
- [Personnes de contact](crm/contactpersonen.fr.md) — les personnes derrière ces entreprises
- [Conversion](administration/conversion.md) — transfert Firebird → PostgreSQL
- [Filtrer les listes](lijsten-filteren.md) — le bouton entonnoir, le générateur de filtres et la barre de filtre
- [Travailler avec une fiche](fiches.md) — adresse propre, onglets, enregistrer et archiver
