# Statuts de facture

Les quatre statuts d'une facture portent un libellé que vous choisissez vous-même. Le **nombre** de statuts
et leur **signification** sont fixes — le comportement de l'écran de facturation en dépend — mais leur nom
vous appartient.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Ventes**, cliquez sur la tuile **Statut de facture**.

<!-- AFBEELDING: la liste Statut de facture dans le tenant demo avec les quatre statuts Brouillon, Émise, Payée et Annulée dans les deux langues -->

## La liste

La liste affiche pour chaque statut le **Nom (NL)** et le **Nom (FR)**. Il n'y a pas de bouton pour ajouter un
statut : les quatre statuts sont fixes. **Exporter** récupère la liste dans un fichier.

| Statut | Libellé par défaut | Quand une facture s'y trouve |
|---|---|---|
| Brouillon | **Brouillon** | Vous êtes en train de l'établir ; elle n'a pas encore de numéro |
| Émise | **Émise** | Vous avez cliqué sur **Finaliser** : le numéro est attribué et la facture est ouverte |
| Payée | **Payée** | Les paiements enregistrés couvrent le montant total. Si un paiement disparaît, elle revient à Émise |
| Annulée | **Annulée** | Elle a été retirée et ne compte plus |

## Adapter un libellé

1. Double-cliquez sur le statut. Une fenêtre **Modifier** s'ouvre.
2. Remplissez le **Nom (NL)** et le **Nom (FR)**. Le nom dans la langue de base de votre entreprise est
   obligatoire ; l'autre langue porte la mention *optionnel*.
3. Cliquez sur **Enregistrer**, ou sur **Annuler** pour fermer la fenêtre sans enregistrer.

Ce libellé apparaît dans la colonne Statut de la liste des factures et à côté du numéro sur la fiche de la
facture.

!!! tip "Utilisez vos propres mots"
    Si en interne vous appelez une facture émise « Ouverte », inscrivez-le. L'application suit votre
    vocabulaire, et non l'inverse.

!!! warning "Complétez les deux langues"
    Si le champ de l'autre langue reste vide, l'application se rabat sur la langue de base. Un utilisateur
    francophone verra alors « Klad » au milieu d'écrans par ailleurs en français — cela se lit comme une erreur
    de traduction alors qu'il s'agit d'un champ vide.

## Émise n'est pas envoyée

Le statut **Émise** indique que le **numéro de facture est attribué** — pas que le document est chez le client.

Vous enregistrez cela séparément avec le bouton **Marquer comme envoyée** sur la fiche d'une facture émise.
Vous y notez quand la facture est partie, à qui, et par quel moyen — imprimée et postée, par e-mail, ou via
Peppol. Sans cet enregistrement, il n'y a pas de date à partir de laquelle compter un rappel.

!!! note "Un enregistrement, pas un envoi"
    **Marquer comme envoyée** n'envoie rien. Ce que vous y notez est ce que *vous* savez — l'application ne
    vérifie pas si l'e-mail est arrivé ni si le réseau Peppol a accepté la facture.

Voir [Factures](../sales/invoices.md) pour tout le parcours d'une facture.

## Voir aussi

- [Factures](../sales/invoices.md)
- [Statut de devis](quote-status.md) — le même écran, pour les devis
- [Administration](platform-management.md)
