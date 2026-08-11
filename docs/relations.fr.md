# Relations

Sur l'écran **Relations**, vous gérez les clients et fournisseurs de votre entreprise. Une relation peut être **client**, **fournisseur**, ou les deux à la fois.

## Ouvrir l'écran

Cliquez sur **CRM → Relations** dans la barre latérale.

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

- **Rechercher et filtrer** — utilisez la recherche de la grille pour trouver rapidement une relation.
- **Exporter** — exportez la liste vers Excel ou CSV.
- **Nouveau** — cliquez sur **Nouvelle relation**.
- **Modifier** — **double-cliquez** une ligne pour ouvrir la fiche.
- **Journal** — cliquez à droite sur le rail **Journal** pour ouvrir les tâches et le journal de la relation sélectionnée.

## La fiche de relation

La fiche est divisée en blocs.

### Bloc Identification

| Champ | Explication |
|---|---|
| **Nom** | Obligatoire. Nom d'entreprise ou nom d'affichage. |
| **Numéro de relation** | Numéro interne optionnel. |
| **Forme juridique** | Liste de choix (SRL, SA, ASBL …). Recherchez en tapant. |
| **Numéro de TVA** | Numéro d'entreprise, avec le bouton **Récupérer** à côté. |

#### Récupérer les données de la BCE

Saisissez le numéro de TVA et cliquez sur **Récupérer**. Le nom, la rue, le numéro, le code postal, la commune et le pays sont remplis avec les données de la Banque-Carrefour des Entreprises. Si le numéro n'existe pas, un message s'affiche et la fiche reste inchangée.

### Bloc Adresse

| Champ | Explication |
|---|---|
| **Rue** et **N°** | Texte libre. |
| **Code postal** | Liste de recherche — tapez un code postal ou un nom de commune. La commune est remplie automatiquement. |
| **Commune** | Liste de recherche — fonctionne dans l'autre sens : choisissez une commune et le code postal suit. |
| **Pays** | Liste de recherche avec la liste des pays. |

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
| **Langue des documents** | Détermine la langue des devis et factures pour ce client, indépendamment de la langue dans laquelle vous travaillez. Vide = la langue par défaut de votre bureau. |
| **Client** / **Fournisseur** | Cochez ce qui s'applique — les deux sont possibles. |
| **Actif** | Décocher ne masque pas automatiquement la relation dans toutes les listes ; utilisez-le comme marqueur de statut. |

### Bloc Issu d'un lead

Ce bloc n'apparaît que pour une relation née d'un **lead**, et uniquement si vous êtes autorisé à consulter les leads. Il affiche, en lecture seule : numéro de lead, statut, type de demande, ampleur, budget, timing, urgence, prochaine action avec sa date, et la date de création du lead. Les champs que le lead n'avait pas restent absents.

!!! note "Pourquoi pas simplement des champs sur le client ?"
    Le budget, le timing et l'urgence décrivent une demande, pas un client — après le premier devis, ils ne sont plus exacts. Ils restent donc rattachés au lead, mais vous les retrouvez ici sans devoir passer par l'écran des leads.

## En bas de la fiche

- **Enregistrer** — conserve les modifications. Actif uniquement avec un nom rempli et une adresse e-mail valide.
- **Annuler** — ferme sans conserver.
- **Supprimer** — uniquement pour une relation existante, voir ci-dessous.

## Supprimer

Dans la fenêtre d'édition, cliquez sur **Supprimer**. La relation est **archivée** (soft-delete) et arrive dans la **Corbeille**, où vous pouvez la restaurer avant suppression définitive.

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
- [Conversion](administration/conversion.md) — transfert Firebird → PostgreSQL
