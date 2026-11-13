# Suivi des leads et des devis

Chaque matin, Nimble vérifie quels leads restent en plan et quels devis envoyés n'ont pas encore de réponse, et en
crée une tâche. Cet écran détermine quand cela se produit.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Leads**, cliquez sur la tuile **Suivi des leads et des devis**.

![L'écran de réglages Suivi des leads et des devis avec la case Suivi automatique activé, le champ Silencieux après (jours), le bloc Devis envoyés avec Suivre les devis sans réponse et Suivre après (jours), et les boutons Enregistrer et Lancer le suivi maintenant.](../images/leadopvolging-scherm-fr.png)

## Les trois règles

Nimble crée une tâche de suivi dans trois cas. Deux sont fixes, un se règle ici.

| Règle | Réglable ? |
|---|---|
| L'**action suivante** d'un lead est prévue à une date dépassée | Non |
| Un lead dans une phase **en pause** a atteint sa **date de réactivation** | Non |
| Un lead sans action suivante planifiée reste trop longtemps en plan | **Oui** — voir ci-dessous |

Les deux premières ne nécessitent aucun réglage : quelqu'un y a fixé une date lui-même. Il n'y a alors rien
à choisir — cette date *est* l'accord.

## Silencieux après (jours)

Combien de temps un lead sans action suivante planifiée peut rester en plan avant de recevoir une tâche.
Par défaut **14 jours** ; de 1 à 365 autorisés. Le champ n'est modifiable que si **Suivi automatique activé**
est coché.

!!! info "Un lead avec une action suivante ne compte pas"
    Si une action suivante est planifiée — même dans le futur — le lead est planifié et non oublié. Cette
    règle ne vaut que pour les leads pour lesquels personne n'a rien prévu. C'est précisément le lead qui
    disparaîtrait autrement sans bruit.

Le bon chiffre dépend de votre métier. Si vous vendez quelque chose sur quoi les gens réfléchissent des
semaines, 14 jours est court et vous obtiendrez des tâches que personne ne lit. S'il s'agit de demandes
tranchées rapidement, 30 jours est trop tard. Commencez à 14 et adaptez selon ce que vous constatez.

## Suivi automatique activé ou désactivé

Cochez ou décochez **Suivi automatique activé** et cliquez sur **Enregistrer**. Si vous **désactivez** le suivi, Nimble ne crée plus de nouvelles tâches. Les tâches existantes sont
conservées — désactiver ne peut pas faire disparaître du travail déjà attribué à quelqu'un.

## Lancer le suivi maintenant

Le bouton **Lancer le suivi maintenant** se trouve à côté d'**Enregistrer**. Vous lancez ainsi un cycle immédiatement au lieu d'attendre le lendemain matin. Pratique juste après avoir
modifié le délai : vous voyez directement combien de tâches cela donne.

Le message indique ce que la ronde a fait, par exemple *12 leads examinés, 2 nouvelles tâches, 3 existaient déjà. Devis : 1 nouvelles tâches.*

!!! info "Enregistrez d'abord"
    Le bouton s'exécute avec ce qui se trouve dans la base de données, pas avec ce qui est à l'écran. Si
    vous modifiez le délai et cliquez immédiatement sur **Lancer le suivi maintenant**, il s'exécute encore
    avec la valeur précédente. Cliquez d'abord sur **Enregistrer**.

!!! info "Vous ne recevez jamais deux fois le même rappel"
    Si une tâche est déjà ouverte pour un lead, il n'y en a pas de deuxième — même si vous lancez le cycle
    dix fois. Si vous la clôturez et que le lead reste ensuite de nouveau en plan, une nouvelle tâche suit
    bien.

## Devis envoyés

Un devis envoyé par e-mail qui reste sur **Envoyé** sans réponse reçoit une tâche **Suivre le devis** pour la personne qui l'a envoyé.
Nimble n'envoie rien au client ; vous envoyez le rappel depuis le devis avec **Plus…** → **Envoyer un rappel** (voir
[Devis](../sales/quotes.md#une-tache-de-suivi-et-un-rappel)).

- **Suivre les devis sans réponse** active ou désactive ce suivi. Les tâches existantes sont conservées.
- **Suivre après (jours)** : **7** par défaut, compté à partir du jour où le devis a été envoyé. Si vous le renvoyez, le compte
  recommence et une nouvelle tâche peut suivre.
- Un devis qui dépasse ce délai de plus de 30 jours ne reçoit plus de tâche : ce n'est plus un suivi mais un devis oublié. Vérifiez-le
  dans la [liste des devis](../sales/quotes.md).
- Chaque envoi donne une seule tâche, même si vous la terminez sans que le client réponde.

Cliquez sur **Enregistrer** après une modification.

## Où arrivent les tâches

- Dans l'écran **Tâches** (**CRM → Tâches**). Un lead sans responsable donne une tâche sans responsable ;
  dans le filtre sur le responsable, vous trouvez ces tâches sous **Personne**.
- Sur la fiche du lead elle-même, dans l'onglet **Tâches**.

!!! tip "Veillez à ce que chaque lead ait un responsable"
    Une tâche sans responsable n'est au nom de personne. Celui qui filtre l'écran **Tâches** sur son propre
    nom ne la voit pas. Le suivi a bien tourné, mais le lead reste aussi invisible qu'avant.

    Vous l'imposez via [Phases de lead](lead-status.md) : définissez **Responsable** comme champ obligatoire
    sur la phase où cela commence à compter — par exemple à partir de *Qualifié*. Dès lors, aucun lead ne peut
    avancer sans que quelqu'un le suive.

## Voir aussi

- [Leads](../crm/leads.md)
- [Tâches](../crm/tasks.md)
- [Devis](../sales/quotes.md)
