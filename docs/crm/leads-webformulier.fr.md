# Les leads depuis votre site web

<!-- Bewust GEEN afbeelding. Deze pagina beschrijft een koppeling, geen scherm — zie de NL-versie. -->

Le formulaire de contact de votre site web peut déposer ses envois directement dans Nimble. Celui qui remplit
le formulaire figure dans la minute dans votre [liste de leads](leads.md) — sans que personne doive éplucher
une boîte mail ou recopier quoi que ce soit.

!!! info "Cela s'active par client"
    La liaison ne fonctionne pas d'elle-même : il faut une **clé de site web**, que vous demandez à
    ADM-Concept. Tant qu'elle n'existe pas, rien ne change au fonctionnement actuel de votre formulaire.

## Comment cela fonctionne

1. Un visiteur remplit le formulaire de contact de votre site.
2. Le formulaire transmet cette demande, accompagnée de votre clé de site web.
3. Nimble en fait un lead, dans votre propre environnement.

Le lead porte le moment où le **visiteur** a envoyé le formulaire — pas celui où Nimble l'a récupéré.

## La clé de site web

La clé est ce qui rend votre formulaire identifiable. Deux choses à savoir :

**Vous en demandez une par formulaire.** Si vous avez un formulaire de contact sur votre site principal et une
page de campagne distincte, demandez deux clés. Chaque clé reçoit un nom — par exemple *formulaire site
principal* et *campagne automne* — et ce nom devient la **source** de chaque lead qui arrive par cette clé.

**Votre rapport par source est ainsi correct.** Dans la liste des leads, vous voyez de quel formulaire chaque
lead provient, et donc quel canal vous apporte des clients. Cela ne fonctionne que parce que la source vient
de la clé et non de ce que le formulaire transmet : une page mal configurée ne peut donc pas fausser vos
chiffres.

Une clé peut être **révoquée** sans toucher aux autres. Arrêter une campagne laisse donc votre site principal
tranquille.

!!! tip "Un nouveau nom de clé apparaît automatiquement dans vos sources"
    Si un lead arrive via une clé dont le nom ne figure pas encore dans votre liste, cette source est créée.
    Vous la retrouvez et la renommez sous **Gestion de la plateforme → Sources de leads**.

## Pour le créateur de votre site web

La description technique — où le formulaire doit poster, quels champs peuvent être transmis, comment la clé
est jointe — se trouve à un seul endroit et y est tenue à jour :

**[platform.digitalcloud.be/docs/leads-contactformulier](https://platform.digitalcloud.be/docs/leads-contactformulier){ target=_blank }**

Transmettez ce **lien** à votre créateur de site, et non une copie du texte. Un document transféré vieillit
silencieusement dans une boîte mail ; la page montre toujours ce qui vaut **maintenant**.

La **clé de site web** se transmet séparément. Elle n'a pas sa place dans un e-mail contenant le reste des
explications.

## Ce qui arrive dans le lead

| Sur la fiche du lead | D'où cela provient |
|---|---|
| **Nom** | le champ nom de votre formulaire, non scindé |
| **E-mail**, **Téléphone** | les champs correspondants |
| **Source** | le nom de la clé de site web |
| **Journal** | le message, tous les champs du formulaire, la page, le formulaire, la langue du visiteur |

!!! tip "Vos propres champs de formulaire ne se perdent pas"
    Si votre formulaire demande par exemple le nombre de m² ou comment on vous a connu, ces réponses arrivent
    dans le **Journal** du lead. Vous ne devez donc pas adapter votre formulaire à Nimble.

Dans ce même journal figure aussi la **langue dans laquelle le visiteur a rempli le formulaire**. Pratique
pour savoir dans quelle langue rappeler — le reste du texte reste dans votre propre langue.

## Qui reçoit un avis ?

Un e-mail part vers l'adresse que vous avez indiquée sous
[Fiche d'entreprise → Leads du site web vers](../settings/company-profile.md), et une **tâche** est ajoutée au
lead.

!!! tip "Une boîte partagée vaut souvent mieux qu'une personne"
    `info@votresociete.be` continue de fonctionner quand quelqu'un est en congé. Un seul nom dans ce champ
    signifie que personne ne regarde pendant deux semaines.

## La même personne qui remplit deux fois

Cela reste **un seul lead**, tant que son lead précédent est en cours : la nouvelle demande arrive comme ligne
de journal sur le lead existant, avec une tâche. Voir [Leads](leads.fr.md#leads-via-votre-site-web).

Un double envoi du formulaire lui-même — quelqu'un qui clique deux fois sur *Envoyer* — ne produit également
qu'un seul lead.

## Si rien n'arrive

- **La clé est-elle déjà demandée et configurée ?** Tant qu'elle n'existe pas, rien ne passe.
- **Le formulaire poste-t-il à la bonne adresse ?** Cela figure sur la page destinée à votre créateur de site.
- **Regardez la liste des leads sur tous les statuts.** Une demande de quelqu'un ayant un lead en cours peut y
  avoir été rattachée au lieu d'apparaître comme nouvelle ligne.

Si vous n'y arrivez pas, contactez ADM-Concept : de notre côté, nous voyons si votre formulaire a envoyé
quelque chose et ce qu'il en est advenu.
