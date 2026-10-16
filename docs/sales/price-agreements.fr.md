# Accords de prix

Un **accord de prix** fixe le prix convenu avec un client pour une série d'articles, pendant une période : un
contrat-cadre avec une association de copropriétaires, la liste de prix d'un promoteur pour toutes ses maisons de
l'année. Quand vous faites un devis pour ce client, vous chargez les postes convenus en un clic, au prix convenu.

## Où les trouver

Ouvrez un client dans [Relations](../relations.md) et cliquez sur l'onglet **Accords de prix**. L'onglet n'apparaît
que sur une relation **enregistrée** dont la case **Client** est cochée.

![L'onglet Accords de prix sur la fiche de Residentie Parkzicht VME : un accord avec son nom, la période, le nombre
de lignes et le statut En vigueur.](../images/relatie-prijsafspraken-fr.png)

| Colonne | Ce qu'elle signifie |
|---|---|
| **Nom** | Comment vous appelez l'accord — « Entretien des parties communes », « Toitures plates maisons 2026 » |
| **Valable à partir du** et **Valable jusqu'au** | La période. Sans date de fin, l'accord continue |
| **Lignes** | Le nombre d'articles qu'il contient |
| **Statut** | **En vigueur**, **Pas encore en vigueur** ou **Expiré**, calculé sur aujourd'hui |

Cliquez sur **Nouvel accord de prix** pour en créer un. Double-cliquez sur une ligne pour l'ouvrir.

Vous avez besoin du droit de consulter les devis ; pour créer ou modifier un accord, du droit de modifier les devis.

## Un accord de prix

![Un accord de prix : en haut le nom et la période, en dessous les lignes avec chapitre, article, unité, prix
standard, prix de revient, prix convenu et marge, et en bas la zone pour importer un fichier Excel.](../images/prijsafspraak-fiche-fr.png)

En haut figurent le **nom** et la **période**. Un accord s'applique chaque jour de sa période, date de début et date
de fin comprises.

En dessous figurent les **lignes** : chaque article avec le prix qui s'applique à ce client.

| Colonne | Ce qu'elle signifie |
|---|---|
| **Chapitre** | Le titre sous lequel le poste arrive dans le devis — « 1. Heures de travail », « 2. Déplacement ». Peut rester vide |
| **Article** | L'article de votre [catalogue](../inventory/articles.md) |
| **Unité** | Celle de l'article |
| **Prix standard** | Le prix de vente de l'article, pour comparaison |
| **Prix de revient** | Le prix de revient de l'article |
| **Prix convenu** | Le prix pour ce client. Vide = un poste sans prix : il est repris dans le devis, et vous y complétez le prix |
| **Marge** | Ce que le prix convenu laisse au-dessus du prix de revient, en pourcentage du prix |

- **+ Article** ajoute un article. Il reçoit le prix standard comme proposition et le chapitre de la ligne
  au-dessus, pour que vous ne tapiez un chapitre qu'une seule fois.
- **Supprimer** à côté d'une ligne retire l'article de l'accord.
- **Enregistrer** conserve l'accord. Rien n'est enregistré avant que vous cliquiez dessus.

### Prix de revient et marge

Les colonnes **Prix de revient** et **Marge** ne sont visibles qu'avec le droit de consulter les chiffres
financiers.

La marge se colore selon les seuils de marge de votre [fiche d'entreprise](../settings/company-profile.md), comme
sur un projet : vert, orange ou rouge. Sans seuils définis, elle n'a pas de couleur.

Si un prix convenu est **en dessous du prix de revient**, la marge est toujours rouge — même sans seuils — et au-dessus
des lignes figure *En dessous du prix de revient : 1 ligne. Vérifiez le prix convenu.* L'enregistrement reste
possible : c'est parfois exactement ce que vous avez convenu.

### Un prix par article et par jour

Un article ne peut avoir qu'**un seul** prix convenu par jour pour un même client. Nimble refuse à l'enregistrement
deux accords avec le même article sur des périodes qui se chevauchent, en citant le nom de l'autre accord. Adaptez
alors la période, ou retirez l'article de l'un des deux.

Deux accords avec des articles **différents** peuvent bien s'appliquer en même temps.

## Importer depuis Excel

Une longue liste de prix ne se retape pas. En bas de l'accord figure **Importer depuis Excel**.

1. Cliquez sur **Télécharger le modèle**. Vous recevez un fichier Excel avec les lignes actuelles de l'accord :
   code article, description, unité, prix standard, prix convenu et chapitre.
2. Complétez-le ou adaptez-le. Seules les colonnes **Code article**, **Prix convenu** et **Chapitre** sont lues ;
   les autres sont là pour information.
3. Glissez le fichier dans la zone, ou cliquez dessus pour le choisir.
4. Nimble affiche chaque ligne du fichier. Vérifiez-les et cliquez sur **Reprendre**. Cliquez ensuite sur
   **Enregistrer**.

!!! warning "Le fichier remplace les lignes"
    Ce qui ne figure pas dans le fichier disparaît de l'accord. Partez donc du modèle : les lignes actuelles y
    figurent déjà.

Une ligne avec une erreur bloque la reprise, pour qu'aucun poste ne se perde en silence. Chaque ligne indique ce qui
ne va pas :

| Message | Que faire |
|---|---|
| *Pas de code article.* | Complétez le code, ou videz la ligne |
| *Aucun article actif avec le code …* | Vérifiez le code. Un article inactif ou dans la corbeille ne compte pas |
| *Cet article figure déjà à la ligne …* | Chaque article une seule fois |
| *Le prix « … » n'est pas un nombre.* | Tapez un nombre : 38,00 ou 38.00. Laissez la cellule vide pour un poste sans prix |
| *Un prix négatif.* | Un prix vaut zéro ou plus |
| *Le chapitre dépasse 200 caractères.* | Raccourcissez le chapitre |

Corrigez le fichier et importez-le à nouveau. **Ne pas reprendre** laisse les lignes de l'accord telles qu'elles
étaient.

## Une nouvelle période

Quand un accord arrive à échéance et se poursuit à de nouveaux prix, cliquez en bas sur **Copier vers une nouvelle
période**. Un nouvel accord s'ouvre avec les mêmes lignes :

- il commence le lendemain de la date de fin et dure aussi longtemps — un accord du 01/01 au 31/12 devient un accord
  du 01/01 au 31/12 de l'année suivante ;
- si l'année figure dans le nom, la copie reçoit la nouvelle année ;
- un article qui n'est plus actif n'est pas repris. L'écran indique combien de lignes sont tombées.

Adaptez les prix et cliquez sur **Enregistrer**. Jusque-là, rien n'est enregistré. L'ancien accord reste en place,
avec le statut **Expiré** dès que sa période est passée.

!!! note "Un accord sans date de fin"
    Sans date de fin, il n'y a pas de période suivante. Donnez d'abord une date de fin à l'ancien accord : sinon les
    deux se chevauchent, et Nimble refuse l'enregistrement.

## Dans un devis

Quand vous faites un [devis](quotes.md) pour un client dont un accord de prix s'applique à la **date du devis**,
au-dessus des lignes figure *Un accord de prix s'applique à ce client à la date du devis :* avec, par accord, un
bouton **Charger « … »**.

- **Charger** place tous les postes de l'accord dans le devis, au prix convenu et avec la **quantité 0**, chacun sous
  son chapitre. Complétez les quantités et supprimez les postes qui ne s'appliquent pas.
- Si vous choisissez un article avec **+ article**, il reçoit lui aussi le prix convenu.
- Une ligne au prix convenu porte la mention **Accord de prix**. Si vous modifiez le prix manuellement, la mention
  disparaît.
- Un accord qui ne s'applique pas à la date du devis — expiré ou pas encore commencé — n'est pas proposé. Si vous
  changez le client ou la date du devis, la barre s'adapte.

Si vous imprimez ou envoyez le devis alors qu'il reste des lignes avec la quantité 0, Nimble vous avertit :
*Quantité 0 sur … — complétez-les ou supprimez-les si elles ne s'appliquent pas.* L'impression et l'envoi restent
possibles.

!!! info "Un devis conserve ses prix"
    Le prix dans un devis est une copie. Si vous modifiez l'accord par la suite, ou le supprimez, les devis existants
    ne changent pas.

## Supprimer

Cliquez sur **Supprimer** dans l'accord. Il va dans la [corbeille](../administration/recycle-bin.md), d'où vous
pouvez le récupérer — sauf si un autre accord avec les mêmes articles s'applique entre-temps à la même période.

## Voir aussi

- [Devis](quotes.md) — où arrivent les prix convenus
- [Relations](../relations.md) — la fiche client avec l'onglet Accords de prix
- [Articles](../inventory/articles.md) — le prix standard et le prix de revient
- [Fiche d'entreprise](../settings/company-profile.md) — les seuils de marge
