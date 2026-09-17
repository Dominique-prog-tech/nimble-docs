# Tenants

!!! info "Pour les opérateurs ADM"
    Cet écran est réservé aux collaborateurs d'ADM-Concept. En tant que client de Nimble, vous ne le voyez pas.

L'écran **Tenants** est le registre de tous les clients qui tournent sur la plateforme Nimble. Chaque client —
un *tenant* — dispose de sa propre base de données. Vous y créez un nouveau tenant, indiquez pour chaque tenant
où se trouvent ses données dans l'ancien logiciel, et choisissez le tenant dans lequel vous travaillez
vous-même.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Gestion ADM**, cliquez sur la tuile **Tenants**.

## Créer un tenant

En haut figurent deux champs et un bouton :

| Champ | Ce que vous saisissez |
|---|---|
| **Code** | La clé courte de ce tenant, p. ex. `client-a`. Obligatoire |
| **Nom** | Le nom complet du client, p. ex. `Client A SA`. Obligatoire |

Cliquez sur **Nouveau tenant**. Nimble crée une base de données propre, prépare sa structure et enregistre le
tenant. S'il manque le code ou le nom, un message en haut indique quel champ est encore vide.

Une fois terminé, un message vert affiche le code et la base de données du nouveau tenant. Si le tenant
existait déjà, le message le signale ; rien n'est alors écrasé. En cas d'échec, un message rouge commençant par
**Provisioning mislukt:** indique la raison.

S'il n'existe encore aucun tenant, vous lisez **Aucun tenant pour l'instant. Créez-en un ci-dessus.**

## La liste

| Colonne | Ce que vous voyez ou faites |
|---|---|
| **Code** | La clé du tenant |
| **Nom** | Le nom du client |
| **Source Firebird (chemin)** | Le chemin vers la base de données de ce client dans l'ancien logiciel, p. ex. `D:\Firebird\client-a.fdb`. Cliquez sur **Enregistrer** dans la même ligne ; un message de confirmation apparaît en haut |
| *(action)* | **Utiliser →** active ce tenant dans votre propre session |

Le chemin Firebird est nécessaire pour la [Conversion](conversion.md).

## Travailler dans un tenant

- **Utiliser →** fait de ce tenant le tenant actif. Tous les écrans de gestion et les listes affichent ensuite
  les données de ce client.
- **Quitter le tenant**, sous la liste, retire le tenant actif. Vous travaillez ensuite sans tenant actif ; les
  écrans de gestion qui en exigent un restent vides.

Pour reprendre les données de l'ancien logiciel, choisissez d'abord le tenant avec **Utiliser →**, puis
rendez-vous dans **Administration → Conversion**.

## Erreurs fréquentes

!!! warning
    - **Mal choisir le code.** Cet écran ne permet pas de modifier le code d'un tenant existant. Vérifiez-le
      donc avant de cliquer sur **Nouveau tenant**.
    - **Saisir le chemin Firebird sans l'enregistrer.** Le chemin ne compte qu'après un clic sur
      **Enregistrer** dans cette ligne.

!!! tip
    Après **Utiliser →**, n'oubliez pas de choisir **Quitter le tenant** lorsque vous voulez de nouveau
    travailler au niveau de la plateforme. Sinon, vous consultez les données d'un seul client en croyant voir
    l'ensemble.

## Voir aussi

- [Utilisateurs](users.md) — qui peut se connecter à ce tenant
- [Rôles](roles.md) — ce que ces utilisateurs peuvent faire
- [Conversion](conversion.md) — importer les données de l'ancien logiciel
