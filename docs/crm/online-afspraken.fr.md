# Rendez-vous en ligne

Avec les **rendez-vous en ligne**, un visiteur de votre site réserve lui-même un moment libre, par exemple pour une visite sur
place. Vous déterminez quand il est possible de réserver. Chaque réservation arrive dans Nimble comme lead et comme rendez-vous,
que vous attribuez ensuite à un collègue.

!!! info "La page de réservation elle-même est chez ADM-Concept"
    La page où le visiteur réserve est hébergée par ADM-Concept, avec le logo et les couleurs du profil de votre entreprise.
    Vous placez seulement un lien vers elle sur votre site. Après la réservation, le visiteur reçoit une confirmation par e-mail.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **CRM → Rendez-vous en ligne**. Vous avez besoin du droit **Planifier et modifier les
rendez-vous**.

![L'écran Rendez-vous en ligne : la page de réservation est activée, avec le bouton Désactiver et le Lien pour votre site ; en dessous, la grille du 16 au 20 novembre avec des moments libres en vert et deux réservés en bleu, le mardi à 10:00 et le jeudi à 9:00 ; en bas Nom et Durée d'un rendez-vous, 60 minutes.](../images/online-afspraken-fr.png)

## Activer ou désactiver la page de réservation

- **Activer** crée votre page de réservation. Ensuite apparaît le **Lien pour votre site**. Placez ce lien derrière un bouton sur
  votre site, par exemple *Demander une visite*. Avec **Ouvrir la page**, vous voyez ce que voit le visiteur.
- **Désactiver** demande d'abord une confirmation. Ensuite, le lien ne fonctionne plus. Les réservations déjà reçues sont
  conservées.
- Si vous réactivez la page plus tard, vous retrouvez le même lien, avec les mêmes textes.

## Quand un visiteur peut-il réserver ?

Dans la grille, vous préparez les moments où vous pouvez recevoir un rendez-vous.

1. Choisissez la semaine en haut. Avec **Semaine de travail** ou **Semaine**, vous choisissez l'affichage.
2. Faites glisser sur les heures où vous êtes disponible, puis relâchez. Nimble en fait des moments libres de la durée choisie.
3. Un moment **libre** est en vert, un moment **réservé** en bleu.

- Si vous faites glisser sur des heures qui ont déjà des moments, Nimble ajoute seulement ceux qui manquent. Nimble ne crée pas
  un moment qui a déjà commencé.
- **Double-cliquez sur un moment libre** pour le supprimer. Une confirmation vous est d'abord demandée.
- **Un moment réservé est verrouillé.** Vous ne pouvez ni le supprimer ni le déplacer : quelqu'un l'a déjà réservé.

## Ce que lit le visiteur

| Champ | Ce qu'il fait |
|---|---|
| **Nom** | Le nom en haut de la page de réservation. Obligatoire |
| **Durée d'un rendez-vous** | La durée d'un moment : de 15 minutes à 2 heures. Vaut pour les moments que vous préparez ensuite |
| **Introduction** | En haut de la page, avant la réservation |
| **Adresse** | Où le rendez-vous a lieu |
| **Adresse de réponse** | Si le visiteur répond à son e-mail de confirmation, sa réponse arrive à cette adresse |
| **Texte de l'e-mail de confirmation** | Par exemple ce que le visiteur doit préparer |
| **Texte après la réservation** | À l'écran juste après la réservation, par exemple quand vous prendrez contact |

Cliquez sur **Enregistrer** pour conserver les textes et la durée.

## Quand quelqu'un réserve

En quelques minutes, la réservation se trouve dans Nimble :

- **Un lead.** S'il existe déjà un lead avec la même adresse e-mail, la réservation rejoint ce lead. L'historique contient le
  moment, la remarque du visiteur et ses coordonnées. Le lead reçoit la source *Online afspraak* et une tâche *Nouveau
  rendez-vous en ligne*.
- **Un rendez-vous dans l'agenda.** Il figure en haut de l'[agenda](agenda.md#reserves-en-ligne-a-attribuer), sous
  **Réservés en ligne, à attribuer**, jusqu'à ce que vous l'attribuiez à un collègue. À côté d'**Agenda** dans la barre
  latérale figure le nombre de rendez-vous en attente.
- **Un e-mail au bureau**, à l'adresse pour les leads du site sur la [fiche entreprise](../settings/company-profile.md), ou
  sinon à l'adresse e-mail générale.

## Quand le visiteur annule

Le visiteur peut annuler son rendez-vous avec le lien de son e-mail de confirmation, jusqu'au début du rendez-vous. Dans le quart
d'heure, vous le voyez dans Nimble :

- Si le rendez-vous n'était encore attribué à personne, il disparaît de la liste.
- S'il était déjà attribué, il reste dans l'agenda, barré.

Le moment redevient alors libre sur la page de réservation.

!!! warning "Annuler vous-même un rendez-vous"
    Si vous annulez un rendez-vous dans l'agenda, le visiteur n'en reçoit aucun message. Prévenez-le vous-même : son téléphone et
    son adresse e-mail figurent dans le rendez-vous et dans le lead.

## Erreurs fréquentes

!!! warning
    - **Le lien est sur le site, mais personne ne peut réserver.** Aucun moment libre n'est préparé, ou ils sont tous dans le
      passé. Préparez de nouveaux moments dans la grille.
    - **Choisir une autre durée et s'attendre à ce que les moments existants changent.** La durée vaut pour les moments que
      vous préparez ensuite. Supprimez les moments libres et préparez-les à nouveau.
    - **Vouloir déplacer un moment réservé.** Ce n'est pas possible : quelqu'un l'a réservé. Attribuez le rendez-vous dans
      l'agenda, déplacez-le là, et prévenez vous-même le visiteur.

## Voir aussi

- [Agenda](agenda.md) : attribuer les rendez-vous
- [Leads](leads.md)
- [Fiche entreprise](../settings/company-profile.md) : l'adresse pour les leads du site
