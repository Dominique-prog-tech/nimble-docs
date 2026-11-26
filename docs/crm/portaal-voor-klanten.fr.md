# Portail pour vos clients

Dans le **portail pour vos clients**, un client suit ses propres projets : leur avancement, sa personne de contact, les
documents que vous partagez avec lui, et ses factures avec ce qu'il reste à payer. Vous donnez l'accès par client, sur la
fiche relation. Votre client se connecte avec sa propre adresse e-mail et son mot de passe, et ne voit jamais rien du reste
de Nimble.

!!! info "À ne pas confondre avec le Portail client de la barre latérale"
    Le [Portail client](../getting-started/customer-portal.md) en bas de la barre latérale est votre propre espace chez
    ADM-Concept. Cette page concerne le portail que vous donnez à vos clients.

## Donner l'accès

1. Ouvrez la [fiche relation](../relations.md) du client.
2. Cliquez sur l'onglet **Portail**. Il ne figure que sur la fiche d'un client.
3. Cliquez sur **Inviter**.
4. Sous **Qui**, choisissez le client lui-même ou l'une de ses personnes de contact.
5. Cliquez sur **Envoyer l'invitation**.

La personne reçoit un e-mail avec un lien. Ce lien est valable **7 jours**.

![L'onglet Portail sur la fiche de De Wilde Interieur BV : Sofie De Wilde a accès et est actif, avec les boutons Retirer l'accès et Inviter.](../images/relatie-portaal-fr.png)

La liste **Qui** ne contient que le client et ses personnes de contact qui ont une adresse e-mail et pas encore d'accès. La
personne n'y figure pas ? Ajoutez-la d'abord dans l'onglet **Personnes de contact**, avec son adresse e-mail.

Peut inviter toute personne autorisée à modifier les relations.

### Qui a accès

Sous l'explication figure chaque personne ayant accès, avec son adresse e-mail et son état :

| État | Signification |
|---|---|
| **invité, pas encore de mot de passe** | L'invitation est partie, mais la personne n'a pas encore utilisé le lien |
| **mot de passe choisi, vérification en deux étapes pas encore activée** | La personne a un mot de passe, mais ne peut pas encore entrer dans le portail |
| **actif** | La personne peut utiliser le portail |
| **compte désactivé** | Le compte de la personne est désactivé |

- **Inviter à nouveau** envoie un nouveau lien. Le bouton reste visible tant que la personne n'a pas choisi de mot de passe,
  par exemple si le premier lien a expiré.
- **Retirer l'accès** supprime l'accès à ce client, après confirmation. Si la personne est connectée à ce moment, sa session
  s'arrête dans quelques minutes.

Si une personne a déjà accès pour un autre client, elle ne reçoit pas de nouveau compte : elle voit simplement aussi les
projets de ce client.

## Ce que fait votre client

1. Il clique sur le lien de l'invitation et choisit un **mot de passe** : au moins 8 caractères, avec un chiffre, une
   majuscule et une minuscule.
2. Il se connecte avec son adresse e-mail et ce mot de passe.
3. Il active la [vérification en deux étapes](../getting-started/tweestapsverificatie.md) avec une application
   d'authentification sur son téléphone (Google Authenticator, Microsoft Authenticator, Authy). C'est obligatoire : sans
   elle, il ne peut pas entrer dans le portail.

Ensuite, le portail demande le code de cette application à chaque connexion. En haut, il choisit **NL** ou **FR**.

## Ce que voit votre client

En haut du portail figurent le logo et le nom de votre entreprise, tels qu'ils sont sur la
[fiche entreprise](../settings/company-profile.md). En dessous, le menu avec **Mes projets** et **Mes factures**, et
**Mes signalements** si votre entreprise a activé le [signalement des pannes](#signaler-une-panne).

### Mes projets

Chaque projet du client, le plus récent en premier, avec son numéro, son nom et l'un de trois états :

- **En préparation** : la date de début n'est pas encore atteinte.
- **En cours** : la date de début est passée.
- **Réceptionné** : le projet a une date de réception ou est terminé.

En dessous, la période, par exemple *Du 25/08/2026 au 18/09/2026*. Un projet archivé n'y figure pas. Si le signalement des
pannes est activé, le bouton **Signaler une panne** figure en haut à droite.

![Mes projets dans le portail de Sofie De Wilde : le projet Ventilatie kantoorverdieping, P2026-004, avec l'état Réceptionné, et en haut à droite le bouton Signaler une panne.](../images/portaal-projecten-fr.png)

### Un projet

Un clic sur un projet affiche ces blocs. **Planning** et **Installations et entretien** n'y figurent que s'ils ont quelque chose à
montrer :

- **Données** : l'adresse du chantier, le début, la fin et la date de réception.
- **Contact** : le responsable du projet comme **Votre personne de contact**, et le nom, l'adresse, le numéro de téléphone et
  l'adresse e-mail de votre entreprise.
- **Planning** : seulement si **Les maîtres d'ouvrage voient dans le portail client quand on travaille à leur projet** est
  activé sur la [fiche entreprise](../settings/company-profile.fr.md#afficher-le-planning-dans-le-portail-client). Pour
  chaque bloc planifié, le jour où il commence et combien de jours ouvrables il dure, par exemple
  *jeu. 26/11/2026 2,5 jours ouvrables*. Ce qui est déjà passé et ce qui n'a pas encore de jour n'y figurent pas. Si deux
  équipes travaillent le même jour aussi longtemps, ce jour n'y figure qu'une fois. En dessous figure **Jalons** : le nom
  et la date de chaque [jalon](../work/projects.md#jalons) à venir, aujourd'hui compris. Le client ne voit jamais la remarque
  d'un jalon.
- **Installations et entretien** : seulement si le projet a des [installations](../work/installations.md) ou un
  [contrat d'entretien](../work/maintenance.md). Pour chaque installation, quand elle a été contrôlée pour la dernière fois, avec le
  **Rapport** de cette visite. Si le signalement des pannes est activé, **Signaler une panne** figure à côté de chaque installation en
  service. En dessous, le contrat et les visites d'entretien.
- **Documents** : les documents que vous partagez avec lui, avec la date. Un clic ouvre une photo ou un PDF dans le
  navigateur ; un autre fichier est téléchargé.

![Le projet Ventilatie kantoorverdieping dans le portail, avec les blocs Données et Contact, le bloc Installations et entretien avec l'unité de ventilation et le lien Signaler une panne, et le bloc Documents avec une photo de chantier partagée.](../images/portaal-project-fr.png)

### Mes factures

En haut figure **Reste à payer** : le total des factures ouvertes et échues, avec la part échue. En dessous, chaque facture
avec son numéro, le projet, la date, l'échéance, le montant et l'état :

- **Ouvert** ou **Échu**, avec ce qu'il reste à payer ;
- **Payée** ;
- **Note de crédit** : elle figure dans la liste, mais ne compte pas dans ce qu'il doit encore payer ;
- **Montant inconnu** : la facture ne porte pas de montant.

Avec **PDF**, il ouvre la facture telle que vous l'envoyez. S'il reste un montant ouvert, le QR de paiement sur le PDF demande
exactement ce montant. Seules les factures émises y figurent : pas de brouillon ni de facture annulée.

![Mes factures dans le portail : en haut Reste à payer, € 2.474,55 ; en dessous la facture F-2026-0001 avec l'état Échu et le lien PDF.](../images/portaal-facturen-fr.png)

### Signaler une panne

Si **Les clients peuvent signaler une panne dans le portail** est activé dans
[Suivi](../administration/lead-follow-up.md#demandes-dintervention),
votre client signale lui-même une panne. Il clique sur **Signaler une panne** à côté d'une installation sur la page du projet, ou en haut à
droite de **Mes projets** ou **Mes signalements**.

![Le formulaire Signaler une panne dans le portail : l'installation Renson Endura Delta 450 est déjà choisie, en dessous Quel est le problème ? avec une description, la case Urgent, la zone pour les photos, le numéro de téléphone pour rappeler et les boutons Envoyer et Mes signalements.](../images/portaal-storing-melden-fr.png)

| Champ | Ce que c'est |
|---|---|
| **Pour** | Seulement s'il a accès pour plus d'un client : pour qui il signale |
| **Installation** | Une de ses installations en service, ou **Inconnu / aucune installation**. Depuis une installation, le champ est déjà rempli |
| **Quel est le problème ?** | Obligatoire : le problème |
| **Urgent** | Par exemple pas de chauffage ou une fuite d'eau |
| **Photos** | Au maximum 5 photos de 10 Mo chacune |
| **Téléphone pour vous rappeler** | Rempli avec le numéro que vous connaissez de lui. Il peut le modifier |

Après **Envoyer**, il voit le numéro de son signalement, par exemple *SV-2026-0005*. Chez vous arrive une
[demande d'intervention](../work/service-requests.md#un-signalement-du-portail). Si l'avertissement du client est activé, il reçoit
aussi l'accusé de réception par e-mail.

### Mes signalements

Chaque demande d'intervention du client, y compris celles que vous avez notées pour lui, avec le numéro, le jour du
signalement, l'installation, le problème et le statut dans ses mots :

- **Reçu** : la demande est arrivée.
- **En cours** : quelqu'un l'a prise en charge, ou il y a un ordre de travail sans jour.
- **Planifié le** un jour : l'ordre de travail est au planning.
- **Terminé** : le travail est fait.
- **Clôturé**, avec le motif : vous l'avez clôturée sans visite, par exemple *Clôturé : résolue par téléphone*.

Il ne voit pas qui la traite, ni l'ordre de travail, ni l'équipe.

![Mes signalements dans le portail : le signalement SV-2026-0005 pour la Renson Endura Delta 450, Ventilatie maakt een luid zoemend geluid, avec le statut Planifié le, et en haut à droite le bouton Signaler une panne.](../images/portaal-meldingen-fr.png)

## Partager des documents

Votre client ne voit que les documents que vous partagez avec lui. Jamais tout par défaut : les notes internes, les factures
d'achat et les prix des fournisseurs n'y ont pas leur place.

- **Par document** : dans l'onglet [Documents](../work/projects.md#onglet-documents) du projet, cochez dans la colonne
  **Portail** ce que le client peut voir. Décocher retire aussitôt le document de son portail.
- **Par dossier** : dans [Dossiers standard](../administration/default-folders.md), cochez pour un dossier **Nouveaux
  documents visibles par défaut dans le portail**. Un document qui arrive ensuite dans ce dossier d'un projet est aussitôt
  coché. Cela vaut aussi pour une photo de chantier qu'un monteur place dans ce dossier avec
  l'[application mobile](../app/project.md). Vous pouvez encore le modifier par document.

Le [journal des actions](../administration/audit-log.md) garde une trace de qui a rendu un document visible ou l'a masqué.

## Ce que votre client ne voit jamais

Les notes et tâches internes, l'historique, les factures d'achat et les fournisseurs, les marges, le post-calcul et le
budget, les bons de travail, les heures par monteur et les noms des monteurs, la description et l'équipe d'un planning, la remarque d'un jalon, les remises et les accords de prix, et qui
traite son signalement. Il ne voit pas non plus les projets d'un autre client, même s'il connaissait l'adresse d'une telle page.

## Erreurs fréquentes

!!! warning
    - **La personne ne figure pas dans la liste Qui.** Elle n'a pas d'adresse e-mail, ou elle a déjà accès. Complétez
      l'adresse e-mail dans l'onglet **Personnes de contact**.
    - **L'invitation a expiré.** Cliquez sur **Inviter à nouveau** : le client reçoit un nouveau lien, de nouveau valable
      7 jours.
    - **Le client n'entre pas après avoir choisi son mot de passe.** Il doit d'abord activer la vérification en deux étapes.
      Tant que ce n'est pas fait, son état est *mot de passe choisi, vérification en deux étapes pas encore activée*.
    - **Un document n'apparaît pas dans son portail.** La case de la colonne **Portail** n'est pas cochée. La case dans
      Dossiers standard ne vaut que pour les dossiers qu'un projet reçoit ensuite, et pour les documents qui arrivent
      ensuite dans un tel dossier.
    - **Le client ne voit pas de planning.** Sur la fiche entreprise, **Les maîtres d'ouvrage voient dans le portail client
      quand on travaille à leur projet** est désactivé, ou le projet n'a pas de jour planifié à venir ou en cours.
    - **Le client ne voit pas de bouton Signaler une panne.** Le signalement est désactivé dans Suivi. S'il est activé mais que le lien manque pour une installation, cette installation n'est pas
      en service.
    - **Le client ne peut plus envoyer de signalement.** Il a déjà signalé 10 pannes au cours des dernières 24 heures. Le portail
      lui demande alors de téléphoner.
    - **Utiliser l'adresse e-mail d'un collègue.** Sur une adresse qui appartient déjà à un utilisateur de Nimble, vous ne
      pouvez pas donner accès au portail. Choisissez une autre adresse.

## Voir aussi

- [Relations](../relations.md) : la fiche relation et l'onglet Personnes de contact
- [Projets](../work/projects.md#onglet-documents) : l'onglet Documents
- [Dossiers standard](../administration/default-folders.md)
- [Factures](../sales/invoices.md#le-qr-de-paiement) : le QR de paiement
- [Demandes d'intervention](../work/service-requests.md#un-signalement-du-portail) : un signalement du portail
