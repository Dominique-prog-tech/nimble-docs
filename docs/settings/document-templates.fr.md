# Modèles de documents

Votre devis porte votre propre en-tête, votre propre formule d'introduction et vos propres conditions. C'est
ici que vous les définissez.

## Ouvrir l'écran

1. Cliquez sur **Administration** en bas de la barre latérale.
2. Dans le groupe **Ventes**, cliquez sur la tuile **Modèles de documents**.

Le droit *Gérer les modèles de documents* est nécessaire.

![L'écran Modèles de documents : en haut les listes Document et Langue avec les boutons Enregistrer, Aperçu avant impression et Rétablir le modèle par défaut ; à gauche les champs En-tête et coordonnées du client, Formule d'introduction et Conditions, à droite la liste Variables.](../images/documentsjablonen-scherm-fr.png)

## Document et langue

En haut, vous choisissez le **Document** — aujourd'hui le devis — et la **Langue**. Si vous choisissez *Les
deux langues*, votre texte vaut pour les clients néerlandophones comme francophones. Pour les différencier,
créez une version par langue ; c'est la langue du client qui détermine celle qui figure sur la page.

Choisir une autre langue charge immédiatement la version de cette langue. Enregistrez donc d'abord ce que
vous venez de modifier.

## Les boutons

| Bouton | Ce qu'il fait |
|---|---|
| **Enregistrer** | Enregistre les trois champs pour le document et la langue choisis |
| **Aperçu avant impression** | Affiche votre modèle sur un devis d'exemple — voir **Vérifier votre travail** ci-dessous |
| **Rétablir le modèle par défaut** | Supprime votre propre texte pour ce document et cette langue, après confirmation. Actif uniquement lorsqu'un modèle propre est enregistré |

## Les trois champs

| Champ | Emplacement |
|---|---|
| **En-tête et coordonnées du client** | En haut de la page, au-dessus du titre du devis |
| **Formule d'introduction** | Entre les caractéristiques et les premières lignes |
| **Conditions** | Sous les totaux : délai de paiement, validité, signature |

Vous les modifiez avec mise en forme, comme dans un traitement de texte. La barre d'outils au-dessus de
chaque champ contient, de gauche à droite : annuler et rétablir, la police, la taille, le gras (**B**), un
bouton **⋯** avec d'autres mises en forme, puis les menus paragraphe, insertion et tableau.

!!! info "Un champ vide signifie : valeur par défaut"
    Laissez un champ vide pour utiliser la mise en page par défaut. Vous ne remplissez donc que ce que vous
    souhaitez modifier — inutile de recopier l'en-tête si vous ne voulez qu'ajouter des conditions.

## Les variables

À droite figure la liste **Variables**. Faites-en glisser une dans un champ et la valeur réelle apparaîtra
sur le devis. Si vous cliquez sur une variable, vous la copiez ; collez-la ensuite où vous voulez.

Une variable se reconnaît à ses accolades, par exemple `{{klant_naam}}`. La liste contient notamment :

| Variable | Ce qui apparaît sur le devis |
|---|---|
| `{{afzender_naam}}` | Le nom de votre entreprise |
| `{{klant_naam}}` | Nom du client |
| `{{nummer}}` | Numéro du devis |
| `{{datum}}` | Date du devis |
| `{{geldig_tot}}` | Date de validité |
| `{{totaal_incl}}` | Total TVA comprise |

Vous y trouvez aussi des variables pour votre logo, votre adresse, vos coordonnées et votre numéro de TVA,
l'adresse du client, le titre, la variante et la version du devis, les autres totaux et la note du devis.
Survolez une variable pour voir son explication, lorsqu'il y en a une.

Si un champ contient un nom qui n'existe pas, l'écran affiche au-dessus des champs **Variables inconnues :**
avec ces noms. Ce message apparaît lorsque vous enregistrez ou rouvrez l'écran — pas pendant la saisie. Un
nom inconnu reste vide sur le devis.

!!! warning "Tous les noms ne fonctionnent pas partout"
    La liste de droite ne montre que les variables qui fonctionnent dans ces trois champs. Les noms liés à
    une ligne — une quantité, un prix — ne prennent une valeur qu'à l'intérieur du tableau des lignes, et ce
    tableau n'est pas modifiable.

## Ce que vous ne pouvez pas modifier

Les **lignes, les montants et les totaux** sont fixes. C'est voulu : ce sont les chiffres qui partent chez
votre client, et une erreur de mise en page ne doit pas pouvoir les faire disparaître.

La **note du devis lui-même** — ce que le vendeur a saisi pour ce document précis — figure elle aussi
toujours, sous les totaux et au-dessus de vos conditions.

## Vérifier votre travail

**Aperçu avant impression** affiche votre modèle sur un devis d'exemple, avec des données fictives.
L'aperçu utilise ce qui se trouve *maintenant* dans les champs, même si vous n'avez pas encore enregistré.
Vous voyez ainsi quel texte provient d'une variable et lequel est fixe dans votre modèle, sans ouvrir un
devis réel.

Si la langue est sur *Les deux langues*, l'aperçu suit la langue dans laquelle vous utilisez Nimble.
**Télécharger** enregistre l'aperçu en PDF.

## Erreurs fréquentes

!!! warning
    - **Recopier une variable au lieu de la glisser.** `{{klant naam}}` avec une espace ne fonctionne pas.
      Glissez-la depuis la liste et elle sera correcte.
    - **Attendre des montants dans l'en-tête.** Le total va en bas ; dans l'en-tête, `{{totaal_incl}}` n'est
      pas encore calculé à l'endroit où vous le placez.
    - **Oublier d'enregistrer avant de changer de langue.** L'écran charge alors l'autre version et votre
      modification est perdue.
    - **Croire que l'aperçu enregistre.** L'aperçu montre votre texte, mais seul **Enregistrer** le place sur
      vos devis.

## Voir aussi

- [Devis](../sales/quotes.md) — où votre modèle aboutit
- [Fiche d'entreprise](company-profile.md) — votre nom, adresse et logo, qui alimentent l'en-tête
