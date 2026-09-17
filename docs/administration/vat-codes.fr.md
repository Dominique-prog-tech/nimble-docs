# Codes TVA

Les codes TVA que vous choisissez sur une ligne de devis ou de facture. Chaque code porte un **taux** et une
**catégorie pour la facture électronique** — et ces deux notions ne se confondent pas.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Ventes**, cliquez sur la tuile **Codes TVA**.

## Pourquoi une catégorie à côté du taux

Trois des codes courants appliquent **0 %** mais signifient des choses très différentes : exonéré, reporté
au cocontractant, ou intracommunautaire. Sur une facture, chacun exige une mention distincte, et votre
comptabilité les impute sur des comptes différents. Qui ne conserve que « 0 % » ne peut plus établir cette
facture sans deviner.

D'où la colonne **Catégorie e-facture**. Elle suit la norme Peppol, le format dans lequel les factures
électroniques sont envoyées.

## La liste

| Colonne | Signification |
|---|---|
| **Ordre** | Détermine la place dans la liste de choix |
| **Code** | La clé courte telle que vous la connaissez : `21%`, `6%`, `MC` |
| **Nom (NL)** et **Nom (FR)** | Ce qui apparaît dans la liste et sur les documents |
| **Taux** | Le pourcentage. Zéro en cas de report, d'exonération, de livraison intracommunautaire et d'exportation |
| **Catégorie e-facture** | La catégorie Peppol — voir ci-dessous |

![L'écran Codes TVA avec le jeu de départ, et en haut les boutons Nouveau code et Exporter.](../images/btw-codes-fr.png)

Double-cliquez sur une ligne pour la modifier, ou cliquez sur **Nouveau code**. **Exporter** récupère la liste dans un fichier.

## Créer ou modifier un code

Une fenêtre **Nouveau code TVA** ou **Modifier le code TVA** s'ouvre.

| Champ | Ce que vous saisissez |
|---|---|
| **Ordre** | La place dans la liste de choix. Un nouveau code reçoit une proposition en fin de liste |
| **Code** | Obligatoire |
| **Taux (%)** | De 0 à 100. Un nouveau code commence à 21 |
| **Nom (NL)** et **Nom (FR)** | Le nom dans la langue de base de votre entreprise est obligatoire ; l'autre langue porte la mention *optionnel* |
| **Catégorie e-facture** | Obligatoire. Un nouveau code commence à *Taux normal (S)*. Vous pouvez chercher dans la liste |

Sous les champs, la fenêtre rappelle que le taux et la catégorie ne disent pas la même chose. Cliquez sur
**Enregistrer**, ou sur **Annuler** pour fermer la fenêtre sans enregistrer.

<!-- AFBEELDING: la fenêtre Modifier le code TVA dans le tenant demo (code MC) avec Ordre, Code, Taux (%), Nom (NL), Nom (FR, optionnel), Catégorie e-facture sur Autoliquidation (AE), la ligne d'explication et les boutons Enregistrer, Annuler et Supprimer -->

### Les catégories

| Catégorie | Quand |
|---|---|
| **Taux normal (S)** | Un taux ordinaire : 21 %, 12 %, 6 % |
| **Taux zéro (Z)** | Une livraison à 0 % qui n'est pas une exonération |
| **Exonéré (E)** | Exonéré de TVA |
| **Autoliquidation (AE)** | La TVA est reportée sur le cocontractant |
| **Intracommunautaire (K)** | Une livraison intracommunautaire |
| **Exportation hors UE (G)** | Une exportation hors de l'Union européenne |
| **Hors champ (O)** | Une opération hors du champ d'application de la TVA |

## Quel code reçoit une nouvelle ligne

Une nouvelle ligne de devis reprend le code TVA de la dernière ligne. Sur la première ligne d'un devis vide,
Nimble propose le premier code de cette liste. Avec l'**Ordre**, vous déterminez donc vous-même votre taux
par défaut.

## Le jeu de départ

Chaque nouveau client reçoit automatiquement un jeu de départ belge :

| Code | Nom | Taux | Catégorie |
|---|---|---:|---|
| `21%` | 21% — taux normal | 21 % | Taux normal (S) |
| `6%` | 6% — rénovation et transformation | 6 % | Taux normal (S) |
| `12%` | 12% — taux réduit | 12 % | Taux normal (S) |
| `MC` | TVA reportée — cocontractant | 0 % | Autoliquidation (AE) |
| `INTRA` | Livraison intracommunautaire | 0 % | Intracommunautaire (K) |
| `VRIJ` | Exonéré de TVA | 0 % | Exonéré (E) |
| `EXPORT` | Exportation hors UE | 0 % | Exportation hors UE (G) |

Ce jeu est un **point de départ**, pas une règle. Si vous travaillez surtout en rénovation, placez `6%` en
tête — un nouveau devis proposera alors ce taux. Les codes que vous n'utilisez jamais peuvent être supprimés.

!!! info "Le jeu de départ n'arrive qu'une fois"
    Les codes ne sont créés que chez un client qui n'en a encore aucun. Si vous en supprimez un par la suite,
    il ne réapparaît pas de lui-même. Pour le récupérer, restaurez-le depuis la corbeille.

## Supprimer

Ouvrez le code et cliquez à droite dans la fenêtre sur **Supprimer**. La question de confirmation indique aussi
sur combien de lignes de devis et de facture le code figure encore, par exemple *le code TVA MC — il figure
encore sur 12 lignes de devis et de facture*.

Après confirmation, le code va dans la [corbeille](recycle-bin.md) et disparaît de la liste de choix. Les
lignes qui le portent déjà conservent leur taux. Vous pouvez le récupérer via la corbeille.

## Erreurs fréquentes

!!! warning
    - **Supprimer tous les codes TVA** — une ligne de devis calcule alors 0 % de TVA, sans avertissement. Vous
      ne le remarquez qu'une fois le devis chez le client.
    - **Enregistrer le cocontractant comme « 0 % »** sans la catégorie *Autoliquidation (AE)* — votre facture
      électronique perd alors la mention obligatoire et votre comptabilité ne suit plus.
    - **Modifier le taux d'un code existant** — cela ne change rien aux devis déjà établis : ceux-ci
      conservent le pourcentage tel qu'il a été calculé. C'est voulu.

## Voir aussi

- [Devis](../sales/quotes.md) — où vous choisissez ces codes ligne par ligne
- [Factures](../sales/invoices.md)
- [Administration](platform-management.md)
