# Entretien

Chez Nimble, un contrat d'entretien est un projet avec des visites qui reviennent : l'entretien annuel d'une chaudière, le contrôle
d'une pompe à chaleur tous les six mois. Vous enregistrez les visites une seule fois. Nimble prépare chaque visite à temps sous la
forme d'un ordre de travail, et votre technicien coche sur le bon de travail, installation par installation, ce qu'il a contrôlé.

## Comment tout s'enchaîne

1. Vous créez un **projet** pour le client, par exemple avec le type de projet Entretien.
2. Dans l'onglet **Entretien** de ce projet, vous enregistrez le **contrat** (durée et prix) et les **visites** : quoi, à quelle
   fréquence, quand a lieu la prochaine, et pour quelles **installations**.
3. Si la prochaine visite tombe dans le délai, Nimble prépare le matin un **ordre de travail** dans **À planifier** sur le
   [tableau de planning](planning.md), avec une tâche pour le responsable du projet.
4. Vous planifiez l'ordre de travail. Le technicien remplit le **bon de travail**, avec dans l'onglet **Installations** le contrôle de
   chaque installation.
5. Quand le bon de travail indique **Terminé**, la prochaine visite avance, à compter du jour de la visite.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Travail → Entretien**.

## La liste

La liste montre les visites de tous les contrats d'entretien, la plus proche en haut. Ce qui est en retard apparaît donc toujours
en premier.

![La liste Entretien avec les colonnes Prochaine visite, Statut, Ordre de travail, Client, Description, Équipe et Dernière visite : la visite « Jaarlijks onderhoud gastoestellen » de Gemeente Nijlen est Préparée avec son ordre de travail, la visite « Controle warmtepomp bibliotheek » est Planifiée.](../images/onderhoud-lijst-fr.png)

| Colonne | Ce que c'est |
|---|---|
| **Prochaine visite** | Le jour prévu pour la prochaine visite |
| **Statut** | Où en est la visite, voir ci-dessous |
| **Ordre de travail** | L'ordre de travail que Nimble a préparé. Cliquez dessus pour l'ouvrir |
| **Projet** | Le projet du contrat |
| **Client** | Le client de ce projet |
| **Description** | Ce qui se fait lors de la visite |
| **Intervalle** | La fréquence de la visite, par exemple *chaque année* ou *tous les 6 mois* |
| **Équipe** | L'équipe qui effectue la visite |
| **Dernière visite** | Le jour de la dernière visite terminée |

**Projet** et **Intervalle** sont masqués par défaut, pour que la liste tienne sur un écran ordinaire. Affichez-les
avec **Choisir les colonnes** au-dessus de la liste.

| Statut | Signification |
|---|---|
| **Planifiée** | La prochaine visite tombe au-delà du délai : rien ne se passe encore |
| **Bientôt** | La visite tombe dans le délai ; l'ordre de travail arrive lors du prochain tour du matin |
| **Préparée** | Un ordre de travail est prêt et n'est pas encore terminé |
| **En retard** | Le jour de la visite est passé, et rien n'est préparé ou le travail préparé n'est pas terminé |
| **Hors contrat** | La visite tombe en dehors de la durée du contrat : Nimble ne la prépare pas. Déplacez la date ou adaptez le contrat. Un contrat à reconduction tacite continue tant que vous ne le résiliez pas |

Double-cliquez sur une ligne pour ouvrir le projet. À droite se trouve le tiroir **Journal** du projet sur lequel se trouve votre
curseur.

## L'onglet Entretien du projet

Ouvrez le projet et cliquez sur l'onglet **Entretien**. Vous y trouvez trois cartes : le contrat, les installations du projet et
les visites d'entretien.

![L'onglet Entretien du projet P2026-006 pour Gemeente Nijlen : la carte Contrat avec la durée, la reconduction et le prix par an, la carte Installations avec les installations du projet, et la carte Visites d'entretien avec deux visites, leur intervalle, la prochaine visite, le statut, l'ordre de travail et le nombre d'installations.](../images/project-onderhoud-fr.png)

### Le contrat

Cliquez sur **Ajouter un contrat** ou **Modifier le contrat**. Le formulaire s'ouvre dans la carte elle-même.

| Champ | Ce que c'est |
|---|---|
| **Début** | Le premier jour du contrat. Obligatoire |
| **Fin** | Le dernier jour. Vide signifie une durée indéterminée. Obligatoire dès que **Reconduction tacite** est coché |
| **Préavis (jours)** | Combien de jours avant la fin le client doit résilier |
| **Reconduire de (mois)** | De combien de mois le contrat se reconduit tacitement |
| **Reconduction tacite** | À la fin, le contrat continue de lui-même pour le nombre de mois choisi. Si le client résilie, désactivez cette option : après la date de fin, Nimble ne prépare plus de visites |
| **Avertir le client de ses visites** | Voir [Avertir le client](#avertir-le-client) |

Sous **Prix**, vous indiquez le prix fixe : le **Montant par période (HTVA)**, l'**Article sur la facture**, la **TVA**, la
**Période** (par mois, par trimestre, par semestre ou par an) et le moment de facturer :

- **à l'avance, au début de chaque période** ;
- **après la première visite de la période** : tant qu'aucune visite n'est terminée dans la période, la facture attend.

Laissez le montant vide pour un contrat sans prix fixe. Les heures sont alors facturées en régie, comme pour tout autre projet.

!!! info "Ce que Nimble fait du prix"
    Quand une période arrive à échéance, Nimble crée le matin une **facture en brouillon** avec une ligne par période, et une tâche
    *Vérifier la facture du contrat*. Vous vérifiez la facture et l'émettez vous-même. Les heures d'une visite d'entretien sont
    comprises dans le prix : **Facturer en régie** ne les propose pas. Une réparation sur le même projet reste en régie.

Si le contrat a une fin, le responsable reçoit deux semaines avant le dernier jour de résiliation une tâche *Fin du contrat
d'entretien*. Il reste ainsi du temps pour décider avec le client.

### Les installations

Les installations qui appartiennent à ce projet. **Nouvelle installation** ouvre une fiche vide avec le client et le projet déjà remplis.
Pour en savoir plus : [Installations](installations.md).

### Les visites d'entretien

| Colonne | Ce que c'est |
|---|---|
| **Description** | Ce qui se fait lors de la visite |
| **Intervalle** | La fréquence de la visite |
| **Prochaine visite** | Le jour de la prochaine visite |
| **Statut** | Comme dans la liste ci-dessus |
| **Ordre de travail** | L'ordre de travail préparé, avec un lien |
| **Installations** | Le nombre d'installations liées à la visite. Cliquez pour les choisir |
| **Dernière visite** | Le jour de la dernière visite terminée |
| **Équipe** | L'équipe qui effectue la visite |

**Ajouter une visite** ouvre une fenêtre :

| Champ | Ce que c'est |
|---|---|
| **Description** | Par exemple *Entretien annuel des installations au gaz*. Obligatoire |
| **Tous les** | La fréquence : un nombre et une unité (jours, semaines, mois, ans) |
| **Prochaine visite** | Le jour de la prochaine visite. Le jour de l'exécution se choisit plus tard sur le tableau de planning |
| **Durée (jours)** | La durée de la visite, par exemple 0,5 ou 2 |
| **Équipe** | L'équipe qui effectue la visite. Peut rester vide |
| **À vérifier** | Un point par ligne. Ils figurent sur l'ordre de travail et sont cochés installation par installation sur le bon de travail |

Double-cliquez sur une visite pour l'adapter. **Supprimer** la place dans la [corbeille](../administration/recycle-bin.md).

Cliquez dans la colonne **Installations** pour choisir les installations de la visite. La fenêtre montre d'abord les installations du projet,
puis les autres du même client, avec leur numéro de série et leur emplacement.

## Comment une visite est préparée

Chaque matin, Nimble regarde quelles visites tombent dans le délai. Par défaut, c'est **30 jours** ; vous le réglez dans
[Suivi](../administration/lead-follow-up.md#contrats-dentretien).

Pour chaque visite à l'échéance, vous obtenez :

- un **ordre de travail** dans **À planifier** sur le tableau de planning, avec l'équipe, la durée, les installations et les points à
  vérifier dans la description ;
- une tâche *Planifier l'entretien* pour le responsable du projet.

Sur le [bon de travail](work-sheets.md#installations) de cet ordre de travail, le technicien coche les points pour chaque installation.
Quand le bon indique **Terminé**, Nimble enregistre la visite comme dernière visite et fait avancer la suivante selon l'intervalle.

## Avertir le client

Nimble peut envoyer un e-mail au client au sujet de sa visite : une annonce dès que la visite est préparée (*nous vous
contactons*), et une confirmation dès qu'elle a un jour sur le tableau de planning.

Cela n'a lieu que si les deux réglages sont activés :

1. pour toute l'entreprise : **Avertir le client de sa visite d'entretien** dans
   [Suivi](../administration/lead-follow-up.md#contrats-dentretien). Par défaut, c'est désactivé ;
2. par contrat : **Avertir le client de ses visites** dans le contrat. Par défaut, c'est activé.

Vous adaptez les textes des deux e-mails dans **Administration → Modèles de mail**. Un client sans adresse e-mail
ne reçoit rien ; l'e-mail figure sous **Journal** › **E-mails** du projet.

## Erreurs fréquentes

!!! warning "Une visite qui n'est pas préparée"
    Si la visite est **Hors contrat**, sa date tombe en dehors de la durée du contrat. Déplacez la date de la visite, ou adaptez le
    début ou la fin du contrat.

!!! warning "L'ordre de travail est là, mais personne ne le planifie"
    La tâche *Planifier l'entretien* va au responsable du projet. Si le projet n'a pas de responsable, la tâche n'est au nom de
    personne. Indiquez le responsable sur la fiche du projet.

## Voir aussi

- [Installations](installations.md)
- [Projets](projects.md)
- [Planning](planning.md)
- [Bons de travail](work-sheets.md)
- [Suivi](../administration/lead-follow-up.md)
