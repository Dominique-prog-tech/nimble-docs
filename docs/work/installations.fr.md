# Installations

Une installation est ce qui se trouve chez un client : une chaudière, une pompe à chaleur, un groupe de ventilation. Vous suivez ce qui
est installé, où, avec quel numéro de série et jusqu'à quand court la garantie. Pour chaque installation, vous voyez les visites et les
réparations qui ont eu lieu, et ce qui n'était pas en ordre à chaque contrôle.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Travail → Installations**.

Vous trouvez aussi les installations d'un client dans l'onglet **Installations** de la [fiche relation](../relations.md#onglet-installations),
et ceux d'un projet dans l'onglet [Entretien](maintenance.md#longlet-entretien-du-projet) du projet.

## La liste

![La liste Installations avec les colonnes Type, Marque, Modèle, Numéro de série, Client, Projet, Commune, Garantie jusqu'au et État : des installations de Gemeente Nijlen, de Residentie Parkzicht VME et de De Wilde Interieur BV, dont deux anciennes chaudières à l'état Remplacée.](../images/installaties-lijst-fr.png)

| Colonne | Ce que c'est |
|---|---|
| **Type** | Chaudière, pompe à chaleur, groupe de ventilation … de la liste [Types d'installation](../administration/installation-types.md) |
| **Marque** et **Modèle** | Ce qui figure sur la plaque signalétique |
| **Numéro de série** | Il permet de distinguer deux installations identiques |
| **Client** | Le client chez qui se trouve l'installation |
| **Projet** | Le projet auquel l'installation appartient, s'il y en a un |
| **Commune** | Où se trouve l'installation |
| **Garantie jusqu'au** | Le dernier jour de la garantie |
| **État** | En service, Hors service ou Remplacée |

- **Nouvelle installation** ouvre une fiche vide.
- **Importer des installations** importe une liste depuis Excel, voir [Importer des installations](#importer-des-installations).
- Cochez des lignes pour imprimer leurs autocollants QR avec **Imprimer les étiquettes**, voir [L'autocollant QR](#lautocollant-qr).

À droite se trouve le tiroir **Journal** de l'installation sur laquelle se trouve votre curseur : tâches, notes, pièces jointes et
historique.

## La fiche

Double-cliquez sur une ligne pour ouvrir la fiche. En haut figure le nom de l'installation avec son numéro de série.

![La fiche d'un groupe de ventilation de De Wilde Interieur BV : à gauche le client, le projet, le type, la marque, le modèle et le numéro de série, à droite la date d'installation, la garantie, l'état, l'article et la note, et en bas la carte Emplacement avec le nom de l'emplacement et l'adresse.](../images/installatie-fiche-fr.png)

| Champ | Ce que c'est |
|---|---|
| **Client** | Obligatoire. L'installation reste chez le client, même quand le projet est clôturé |
| **Projet** | Le projet lors duquel l'installation a été posée ou est entretenue. Peut rester vide |
| **Type** | Dans la liste de choix. **Gérer les types** ouvre cette liste |
| **Marque**, **Modèle**, **Numéro de série** | Indiquez au moins le type, la marque, le modèle ou le numéro de série. Si le même numéro de série figure déjà chez une autre installation, la fiche le signale |
| **Installé le** | Le jour de l'installation |
| **Garantie jusqu'au** | Le dernier jour de la garantie. Un mois avant, une tâche est créée pour le responsable |
| **État** | En service, Hors service ou Remplacé. Une installation qui n'est plus en service ne se choisit plus pour une visite |
| **Article** | L'article de votre stock, si vous avez vendu l'installation vous-même. Sinon *Pas vendu par nous* |
| **Note** | Texte libre |

La carte **Emplacement** indique où se trouve l'installation : un **Nom de l'emplacement** (par exemple *chaufferie*) et l'adresse.
**Reprendre l'adresse du client** et **Reprendre l'adresse du chantier** remplissent l'adresse à partir du client ou du chantier du
projet.

Si le client signale une panne sur cette installation, cliquez sur **Nouvelle demande d'intervention**. La fenêtre s'ouvre avec le client et
l'installation déjà remplis, voir [Demandes d'intervention](service-requests.md#une-nouvelle-demande). Vous voyez le bouton si vous pouvez
modifier le travail.

### Historique

L'onglet **Historique** montre ces cartes :

- **Contrôles** : chaque fois que l'installation a été contrôlée sur un bon de travail, avec le jour, la conclusion et les points
  qui n'étaient pas en ordre. Le jour est un lien vers le bon de travail.
- **En cours** : les demandes d'intervention ouvertes pour cette installation, avec leur statut et, pour une demande urgente,
  l'étiquette **Urgent**. Cliquez le numéro pour ouvrir la demande. Si le projet a des visites d'entretien, le lien **Vers le plan
  d'entretien du projet** y figure aussi : il ouvre l'onglet Entretien du projet. Si rien n'est en cours et que le projet n'a pas
  d'entretien, cette carte n'apparaît pas.
- **Visites et réparations** : les ordres de travail de l'installation, le plus récent en premier : les visites d'entretien et
  les réparations.

![L'onglet Historique du groupe de ventilation de De Wilde Interieur BV : sous Contrôles, un contrôle avec la conclusion Suivi nécessaire et le point « Debietmeting » avec la remarque « Ventiel vergaderzaal te laag », et sous Visites et réparations l'ordre de travail de la pose.](../images/installatie-geschiedenis-fr.png)

## L'autocollant QR

Chaque installation peut recevoir un autocollant QR. Celui qui le scanne avec l'app Nimble ouvre directement cette installation. Avec un
appareil photo ordinaire, on ne voit que le nom et le numéro de téléphone de votre entreprise. Si vous activez **Toute personne
disposant de l'autocollant peut signaler une panne** dans [Suivi](../administration/lead-follow-up.md#demandes-dintervention), le
bouton **Signaler une panne** y apparaît aussi : voir
[Un signalement via l'autocollant QR](service-requests.md#un-signalement-via-lautocollant-qr).

- Sur la fiche : **Imprimer l'étiquette**.
- Dans la liste : cochez les installations et cliquez sur **Imprimer les étiquettes**.

La fenêtre imprime sur une feuille A4 de 3 × 8 étiquettes de 70 × 37 mm. Si la feuille est déjà à moitié utilisée, cliquez sur la
première étiquette libre. Cliquez sur **Aperçu** et imprimez en taille réelle (100 %), pas *ajusté à la page*.

!!! info "Réimprimer est toujours possible"
    Si l'installation a déjà un autocollant, vous réimprimez la même étiquette sans risque. Ne choisissez un **nouveau code** que si
    l'ancien autocollant est perdu ou entre de mauvaises mains : l'autocollant précédent ne fonctionnera plus.

## Importer des installations

Si vos installations figurent déjà dans une liste Excel, importez-les. Dans la liste, cliquez sur **Importer des installations**.

![L'écran Importer des installations avec l'étape 1 Fichier, le bouton Télécharger le modèle et la zone pour choisir un fichier Excel, et l'étape 2 Aperçu qui attend encore un fichier.](../images/installaties-inlezen-fr.png)

1. **Fichier** : cliquez sur **Télécharger le modèle** pour obtenir un fichier Excel vide avec les bonnes colonnes, remplissez-le et
   choisissez-le.
2. **Aperçu** : pour chaque ligne, vous voyez ce qui va se passer : nouveau, existe déjà, ou ignoré avec la raison. Rien n'est
   encore enregistré.
3. Cliquez sur **Importer**. Ensuite, vous voyez un résumé et les lignes qui n'ont pas été importées, avec leur raison.

| Colonne | Ce qu'elle contient |
|---|---|
| **Client** | Obligatoire : le numéro de relation ou le nom du client |
| **Projet** | Le code du projet, par exemple P2026-006. Le projet doit appartenir à ce client |
| **Type** | Un type qui n'existe pas encore est créé par Nimble |
| **Marque**, **Modèle**, **Numéro de série** | Au moins l'un des trois, ou un type |
| **Installé le**, **Garantie jusqu'au** | Une date sous la forme jour/mois/année |
| **Emplacement**, **Rue**, **Code postal**, **Commune** | Où se trouve l'installation. Vide : le chantier du projet, sinon l'adresse du client |
| **Note** | Texte libre |

!!! info "Une installation qui existe déjà"
    Si ce client a déjà une installation avec le même numéro de série, Nimble ignore la ligne. Vous pouvez donc réimporter le même
    fichier sans crainte.

## Erreurs fréquentes

!!! warning "Une ligne est ignorée avec Plusieurs clients s'appellent …"
    Deux relations portent le même nom. Indiquez le numéro de relation dans la colonne **Client**.

!!! warning "Une installation n'apparaît pas dans la fenêtre Choisir les installations"
    La fenêtre ne montre que les installations du client du projet, et seulement celles qui sont **En service**.

## Voir aussi

- [Entretien](maintenance.md)
- [Types d'installation](../administration/installation-types.md)
- [Bons de travail](work-sheets.md#installations)
- [Relations](../relations.md)
