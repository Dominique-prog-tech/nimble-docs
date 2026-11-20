# Statistiques

Les **statistiques** montrent votre chiffre d'affaires par client et par article, vos achats par fournisseur et votre marge brute par
mois, sur une période que vous choisissez.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Ventes → Statistiques**. Vous avez besoin du droit de consulter les factures. L'onglet
**Achats** n'apparaît qu'avec le droit de consulter les achats, l'onglet **Bénéfice** qu'avec le droit de voir les marges et les prix de
revient.

![Les statistiques dans l'onglet Ventes avec la période Du et Au, la phrase avec le chiffre d'affaires hors TVA de la période, et côte à côte Chiffre d'affaires par client (client, factures, chiffre d'affaires) et Chiffre d'affaires par article (article, quantité, chiffre d'affaires), chacun avec Exporter.](../images/statistieken-fr.png)

## La période

**Du** et **Au** choisissent la période, sur la date de facture. Par défaut, c'est cette année jusqu'à aujourd'hui.

## Ventes

En haut figure le chiffre d'affaires hors TVA de la période et le nombre de factures. En dessous :

- **Chiffre d'affaires par client** : le chiffre d'affaires hors TVA et le nombre de factures par client, le plus élevé d'abord.
- **Chiffre d'affaires par article** : la quantité et le chiffre d'affaires hors TVA par article, le plus élevé d'abord. Seules les
  lignes avec un article comptent ; une ligne de texte libre non.

Une facture en brouillon et une facture annulée ne comptent pas. Une note de crédit compte en négatif. C'est la même règle que sur le
[tableau de bord](../getting-started/dashboard.md).

## Achats

**Achats par fournisseur** montre par fournisseur le nombre de factures d'achat et leur total **TVA comprise**, le plus élevé d'abord.
TVA comprise, parce que pour une facture papier la ventilation hors TVA n'est pas toujours connue. Une note de crédit compte en négatif.

Par article n'est pas possible ici : une facture d'achat ne connaît pas ses articles.

## Bénéfice

**Marge brute par mois** met en regard, par mois, le chiffre d'affaires sur des projets et ce que le travail a coûté ce mois-là :

- **CA hors TVA** : ce qui a été facturé ce mois-là sur des projets, selon la date de facture.
- **Coût salarial** : les heures des bons de travail de ce mois, au tarif du collaborateur.
- **Coût matériel** : le matériel des bons de travail de ce mois, au prix d'achat de l'article.
- **Achats** : ce qui, dans les factures d'achat de ce mois, a été imputé à un projet.
- **Marge brute** et **Marge** : ce qui reste, et quelle part du chiffre d'affaires cela représente.

![L'onglet Bénéfice avec la période Du et Au, le total sur toute la période, les avertissements sur les heures sans tarif et le matériel sans prix d'achat, et Marge brute par mois avec par mois le CA hors TVA, le coût salarial, le coût matériel, les achats, la marge brute et la marge.](../images/statistieken-winst-fr.png)

En haut figure le total sur toute la période. Le travail et la facture ne tombent pas toujours le même mois : un mois avec beaucoup de
travail et peu de factures peut donc afficher une perte. Sur une période plus longue, cela s'équilibre. Les frais généraux ne sont pas
pris en compte.

Un mois sans chiffre d'affaires, sans aucun coût enregistré ou avec uniquement une note de crédit n'a pas de marge : ce chiffre ne
voudrait rien dire.

S'il manque quelque chose, un message apparaît au-dessus de la liste : des heures d'un collaborateur sans tarif, du matériel sans prix
d'achat, ou des factures sans projet. Ces dernières ne comptent pas dans la marge, car aucun coût ne leur fait face. Tant qu'un message
sur des heures ou du matériel est affiché, la marge est trop élevée.

## Exporter

Chaque liste a **Exporter**, vers Excel ou CSV.

## Voir aussi

- [Factures](invoices.md)
- [Factures d'achat](../purchasing/purchase-invoices.md)
- [Carnet de commandes](order-book.md)
- [Projets](../work/projects.md) : le post-calcul par projet
