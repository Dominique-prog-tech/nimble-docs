# Statuts de facture

Les quatre statuts d'une facture portent un libellé que vous choisissez vous-même. Le **nombre** de statuts
et leur **signification** sont fixes — le comportement de l'écran de facturation en dépend — mais leur nom
vous appartient.

!!! info "Les factures elles-mêmes sont encore en préparation"
    Vous pouvez déjà vérifier et adapter ces libellés, afin qu'ils soient corrects dès l'ouverture de l'écran
    de facturation. Ils ne sont aujourd'hui visibles nulle part en dehors de cet écran.

## Ouvrir l'écran

**Administration → Statuts de facture**.

## Ce que vous pouvez adapter

| Statut | Libellé par défaut | Quand une facture s'y trouve |
|---|---|---|
| Draft | **Brouillon** | Vous êtes en train de l'établir |
| Sent | **Émise** | Le numéro est attribué ; elle est ouverte |
| Paid | **Payée** | Le paiement est arrivé et rapproché |
| Cancelled | **Annulée** | Elle est retirée et ne compte plus |

Vous complétez pour chaque statut un **Nom (NL)** et un **Nom (FR)**. Ce libellé apparaîtra dans la colonne
de statut de la liste des factures et sur la facture elle-même.

!!! warning "Émise n'est pas la même chose qu'envoyée"
    Ce statut indique que le **numéro de facture est attribué** — pas que le document est chez le client.
    Cela, vous l'enregistrez séparément avec **Marquer comme envoyée** sur la fiche de la facture. Jusqu'en
    septembre 2026, il était écrit ici « Envoyée », ce qui était faux : une facture s'appelait envoyée dès que
    vous cliquiez sur *Finaliser*, même si elle était encore sur votre bureau.

## La trace d'envoi

Sur la fiche d'une facture émise se trouve le bouton **Marquer comme envoyée**. Vous y notez quand la facture
est partie, à qui, et par quelle voie — imprimée et postée, par e-mail, ou via Peppol.

Pourquoi c'est séparé : la plupart des factures partent en dehors de l'application. Dans votre ancien système,
277 des 306 sont sorties ainsi. Sans cet enregistrement, il n'y a pas de date à partir de laquelle compter un
rappel, et le statut ne dit rien sur l'endroit où se trouve le document.

!!! note "Un enregistrement, pas une preuve"
    Nimble n'envoie encore rien lui-même. Ce que vous notez ici est ce que *vous* savez — l'application ne
    vérifie pas si l'e-mail est arrivé ni si le réseau Peppol a accepté la facture.

!!! tip "Utilisez vos propres mots"
    Si vous appelez une facture envoyée « En cours » en interne, écrivez-le. L'application suit votre
    vocabulaire, pas l'inverse.

!!! warning "Complétez les deux langues"
    Si le champ français reste vide, l'application se rabat sur le néerlandais. Un utilisateur francophone
    verra alors « Klad » au milieu de textes français — cela se lit comme une erreur de traduction alors
    qu'il s'agit d'un champ vide.

## Voir aussi

- [Statuts de devis](quote-status.fr.md) — le même écran, pour les devis
- [Administration](platform-management.fr.md)
