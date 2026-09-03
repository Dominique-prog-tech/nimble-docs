# Tableau de bord

Le tableau de bord est votre écran d'accueil. Il répond à deux questions : **qu'est-ce qui attend
aujourd'hui**, et **comment cela évolue**.

Tout ce que vous voyez concerne le client sur lequel vous travaillez. Si vous travaillez pour plusieurs
entreprises, choisissez d'abord un client ; tant que ce n'est pas fait, l'écran vous le signale.

## Ouvrir l'écran

**Tableau de bord**, en haut de la barre latérale. Vous y arrivez aussi automatiquement après la connexion.

![Le tableau de bord : en haut quatre chiffres clés en euros, en dessous les cartes de ce qui demande
attention aujourd'hui — chantiers pas prêts à démarrer, travaux supplémentaires en attente de décision,
factures échues, points de réception échus et articles sous leur minimum.](../images/dashboard-fr.png)

## Les quatre chiffres clés

En haut figurent quatre **montants**. Cliquez sur une tuile pour ouvrir le module correspondant.

| Chiffre clé | Ce qu'il signifie |
|---|---|
| **Carnet de commandes** | Travail accepté par le client qu'il vous reste à facturer. La somme de vos devis acceptés moins ce qui est déjà facturé, par projet |
| **Travaux en cours** | Coûts engagés et pas encore facturés : heures et matériel investis dans des chantiers dont la facture reste à venir |
| **Encours clients** | Ce que vos clients doivent encore payer. Derrière le montant figure la part dépassant l'échéance |
| **Travaux suppl. à facturer** | Travaux supplémentaires approuvés qui doivent encore figurer sur une facture |

!!! info "Un projet en avance n'en masque pas un autre"
    **Carnet de commandes** et **Travaux en cours** sont calculés par projet, puis additionnés. Un projet
    que vous avez facturé au-delà de ce qui avait été accepté ne réduit donc pas le carnet de commandes —
    sinon le travail qui reste sur les autres chantiers disparaîtrait derrière celui-là.

## Ce qui demande attention aujourd'hui

Sous les chiffres clés figurent cinq cartes. Elles montrent **les éléments eux-mêmes**, pas un nombre : vous
voyez quel chantier, quelle facture, quel article. Chaque ligne est un lien vers le dossier.

| Carte | Ce qu'elle contient |
|---|---|
| **Chantiers pas prêts à démarrer** | Ordres de travail qui démarrent dans quelques jours alors que la préparation n'est pas terminée. Derrière le numéro figure ce qui manque — *Équipement, Sécurité, Administratif* |
| **Travaux suppl. à décider** | Travaux supplémentaires signalés par une équipe et pour lesquels rien n'est encore décidé, le plus ancien en tête, avec le nombre de jours |
| **Factures échues** | Factures impayées dont l'échéance est dépassée, avec le client, le montant restant dû et le retard en jours |
| **Points de réception échus** | Points de réception dont la date convenue est dépassée |
| **Sous le stock minimum** | Articles dont le stock est inférieur au minimum défini. À droite figure *stock actuel / minimum* |

Chaque carte affiche cinq lignes. S'il y en a davantage, **et … autres** apparaît en bas — ce bouton déplie
la liste complète dans la carte.

!!! tip "Une carte vide est aussi une réponse"
    Une carte qui n'a rien à signaler reste affichée, avec une phrase : *Aucune facture n'est en retard.*
    Vous savez ainsi que la vérification a eu lieu, au lieu de vous demander si la carte s'est chargée.

## Comment cela évolue

En bas figurent trois graphiques.

![Les trois graphiques du tableau de bord : le chiffre d'affaires facturé par mois en courbe, la marge par
projet en cours en barres avec les pourcentages en dessous, et les heures-homme planifiées par
semaine.](../images/dashboard-grafieken-fr.png)

- **Chiffre d'affaires facturé par mois** — les douze derniers mois, **hors TVA**. La TVA transite par vous
  et n'est pas du chiffre d'affaires. Un mois sans chiffre d'affaires reste dans la série, afin que vous
  voyiez une période calme au lieu d'un graphique qui se raccourcit.
- **Marge par projet en cours** — uniquement les projets déjà facturés. Sous le graphique figure chaque
  projet avec son pourcentage. Si vous avez défini des seuils de marge sur la
  [fiche entreprise](../settings/company-profile.md), ce pourcentage se colore en vert, orange ou rouge ;
  sans seuils, il reste neutre.
- **Heures-homme planifiées par semaine** — les huit semaines à venir, à partir du lundi de cette semaine.

## Ce qu'un chiffre ne dit pas

Sous un chiffre clé ou un graphique peut figurer une ligne avec ⚠️. Cette ligne indique que le chiffre est
**sous-évalué**, et pourquoi. Prenez-la au sérieux : un montant sans cet avertissement se lit comme une image
complète.

| Message | Ce que vous pouvez faire |
|---|---|
| *… projets comportent des heures ou du matériel sans prix de revient* | Renseignez le taux horaire sur la fiche du collaborateur, ou le prix d'achat sur la fiche article |
| *… travaux supplémentaires approuvés sans montant* | Renseignez le montant estimé sur le travail supplémentaire |
| *… projet facturé ne porte aucune ligne de coût* | Ce projet ne figure pas dans le graphique des marges. Sans coûts, la marge serait de 100 %, ce qui n'est pas une performance mais une mesure absente |
| *Des équipes sans membres sont planifiées* | Ajoutez des collaborateurs à l'équipe ; sinon leurs heures ne sont pas comptées |

## Pourquoi il n'y a pas de taux d'occupation

Le graphique **Heures-homme planifiées par semaine** affiche des heures, pas un pourcentage. Un taux
d'occupation devrait se rapporter à ce qu'une équipe *peut* prester, et cela n'est défini nulle part
aujourd'hui : ni heures contractuelles par collaborateur, ni calendrier des jours ouvrés, ni congés.

Un pourcentage calculé sur un dénominateur inventé paraît aussi convaincant qu'un pourcentage exact, et c'est
précisément pour cela qu'il n'est pas remis en question. Dès que ces données seront fixées, le pourcentage
suivra.
