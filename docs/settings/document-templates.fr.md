# Modèles de documents

Votre devis porte votre propre en-tête, votre propre formule d'introduction et vos propres conditions. C'est
ici que vous les définissez.

## Ouvrir l'écran

**Administration → Modèles de documents**. Le droit *Gérer les modèles de documents* est nécessaire.

En haut, vous choisissez le **document** — aujourd'hui le devis — et la **langue**. Si vous choisissez *Les
deux langues*, votre texte vaut pour les clients néerlandophones comme francophones. Pour les différencier,
créez une version par langue ; c'est la langue du client qui détermine celle qui figure sur la page.

## Les trois champs

| Champ | Emplacement |
|---|---|
| **En-tête et coordonnées du client** | En haut de la page, au-dessus du titre |
| **Formule d'introduction** | Entre les caractéristiques et les premières lignes |
| **Conditions** | En bas, sous les totaux |

Vous les modifiez avec mise en forme, comme dans un traitement de texte : gras, listes, tableaux, alignement.

!!! info "Un champ vide signifie : valeur par défaut"
    Laissez un champ vide pour utiliser la mise en page par défaut. Vous ne remplissez donc que ce que vous
    souhaitez modifier — inutile de recopier l'en-tête si vous ne voulez qu'ajouter des conditions.

## Les variables

À droite figure la liste des **variables**. Faites-en glisser une dans votre texte et la valeur réelle
apparaîtra sur le devis : le nom du client, le numéro du devis, la date de validité.

Une variable se reconnaît à ses accolades : `{{klant_naam}}`. Si vous en saisissez une incorrectement,
l'écran le signale au-dessus des champs — sinon ce nom resterait vide sur le devis, sans que rien ne le dise.

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

**Aperçu avant impression** affiche votre modèle sur un devis d'exemple, avec des données fictives. Vous
voyez immédiatement quel texte provient d'une variable et lequel est fixe dans votre modèle, sans ouvrir un
devis réel. La barre d'outils au-dessus du document vous permet de feuilleter et de zoomer ; **Télécharger**
enregistre l'aperçu en PDF.

**Rétablir le modèle par défaut** supprime votre propre texte et remet la mise en page standard.

## Erreurs fréquentes

!!! warning
    - **Recopier une variable au lieu de la glisser.** `{{klant naam}}` avec une espace ne fonctionne pas.
      Glissez-la depuis la liste et elle sera correcte.
    - **Attendre des montants dans l'en-tête.** Le total va en bas ; dans l'en-tête, `{{totaal_incl}}` n'est
      pas encore calculé à l'endroit où vous le placez.
    - **Oublier d'enregistrer avant de changer de langue.** L'écran charge alors l'autre version et votre
      modification est perdue.

## Voir aussi

- [Devis](../sales/quotes.md) — où votre modèle aboutit
- [Fiche d'entreprise](company-profile.md) — votre nom, adresse et logo, qui alimentent l'en-tête
