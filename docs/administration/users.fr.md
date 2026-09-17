# Utilisateurs

!!! info "Pour les opérateurs ADM"
    Cet écran est réservé aux collaborateurs d'ADM-Concept. En tant que client de Nimble, vous ne le voyez pas.

Cet écran gère les connexions à Nimble, pour tous les tenants. Vous y créez des utilisateurs, les attribuez à
un tenant, choisissez leur rôle et dépannez quelqu'un dont la connexion échoue.

Un utilisateur lié à un tenant arrive après la connexion automatiquement et uniquement dans son propre tenant.
Un utilisateur sans tenant est un opérateur : il peut changer de tenant et administrer.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Gestion ADM**, cliquez sur la tuile **Utilisateurs**.

## La liste

| Colonne | Ce que vous voyez |
|---|---|
| **Utilisateur** | Le nom d'utilisateur avec lequel la personne se connecte |
| **Nom** | Le nom affiché |
| **Tenant** | Le tenant auquel appartient l'utilisateur, ou **operator** |
| **ADM One** | **Lié** ou **Non lié** au registre central ADM One |
| **Rôle** | Le rôle, sous forme de liste de choix — voir ci-dessous |
| **Statut** | **Actif**, **Désactivé** ou **Verrouillé** |
| *(actions)* | Le bouton **⋯** avec les actions pour cet utilisateur |

- **Actif** — l'utilisateur peut se connecter.
- **Désactivé** — le compte existe encore, mais la connexion échoue.
- **Verrouillé** — il y a eu trop de tentatives de connexion échouées d'affilée.

Votre propre ligne porte **— vous-même —** au lieu du bouton **⋯** ; les actions sont désactivées sur votre
propre compte.

Au-dessus de la liste figurent **Vérifier les liaisons**, **Nouvel utilisateur**, **Exporter** et un champ de
recherche.

## Créer un utilisateur

Cliquez sur **Nouvel utilisateur**. Une fenêtre s'ouvre :

| Champ | Ce que vous saisissez |
|---|---|
| **Nom d'utilisateur** | Le nom de connexion, généralement l'adresse e-mail, p. ex. `jean@client.be` |
| **Nom affiché** | Le nom qui apparaît à l'écran, p. ex. `Jean Testeur` |
| **Mot de passe** | Le premier mot de passe |
| **Tenant** | Le client auquel appartient cet utilisateur. **— Opérateur (aucun) —** crée un opérateur |
| **Rôle** | **Utilisateur** ou **Administrateur** |

Cliquez sur **Créer l'utilisateur**. Ce bouton ne fonctionne que lorsque **Nom d'utilisateur** et **Mot de
passe** sont remplis. **Annuler** ferme la fenêtre.

## Modifier le rôle

Choisissez un autre rôle dans la liste de la colonne **Rôle**. La modification s'applique à la prochaine
connexion de cet utilisateur. Vous ne pouvez pas modifier ici votre propre rôle.

Si quelqu'un porte un rôle que cet écran ne gère pas, un libellé avec le nom de ce rôle remplace la liste.

Les droits d'un rôle se règlent dans [Rôles](roles.md).

## Les actions

Cliquez sur **⋯** dans la ligne de l'utilisateur :

- **Mot de passe** — vous définissez vous-même un nouveau mot de passe. L'utilisateur peut se connecter
  immédiatement avec celui-ci.
- **Temporaire** — Nimble génère un mot de passe temporaire lisible que vous copiez avec **Copier** et
  transmettez.
- **Lien de réinit.** — vous obtenez un lien de récupération qui laisse l'utilisateur choisir lui-même son mot
  de passe. Le lien fonctionne une seule fois.
- **Lier** — uniquement pour un utilisateur pas encore lié à ADM One.
- **Déverrouiller** — uniquement pour un utilisateur verrouillé ; lève le verrouillage.
- **Désactiver** / **Activer** — exclut quelqu'un ou lui rend l'accès. Désactiver demande d'abord une
  confirmation ; les sessions en cours de cet utilisateur prennent fin immédiatement.

Il n'y a pas d'action pour supprimer un utilisateur. Quelqu'un qui s'en va, vous le désactivez.

## Vérifier les liaisons

**Vérifier les liaisons** demande à ADM One si chaque liaison enregistrée y existe réellement. Un message avec
le résultat apparaît ensuite sous la liste. Un utilisateur pas encore lié se lie via **⋯ → Lier**.

## Erreurs fréquentes

!!! warning
    - **Créer un utilisateur de tenant comme opérateur.** Si vous choisissez **— Opérateur (aucun) —**, cette
      personne voit tous les tenants. Pour un collaborateur client, choisissez toujours le bon tenant.
    - **Transmettre un mot de passe par e-mail.** Transmettez de préférence un mot de passe ou un lien par un
      autre canal, où vous reconnaissez la personne.

!!! tip
    Nimble n'affiche un mot de passe temporaire ou un lien de réinitialisation qu'une seule fois. Copiez-le
    immédiatement.

## Voir aussi

- [Rôles](roles.md) — ce qu'un rôle autorise exactement
- [Tenants](tenants.md) — les clients auxquels vous attribuez des utilisateurs
- [Journal d'audit](audit-log.md) — qui a fait quoi
