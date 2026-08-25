# Leads vanaf uw website

<!-- Bewust GEEN afbeelding. Deze pagina beschrijft een koppeling, geen scherm: wat de gebruiker ziet is de
     gewone leadlijst, en die staat al op leads-lijst.png. Een schermafdruk van een contactformulier toont
     bovendien de website van een klant, of een verzonnen site die niets bewijst. -->

Het contactformulier van uw website kan zijn inzendingen rechtstreeks in Nimble zetten. Wie het formulier
invult, staat binnen de minuut in uw [leadlijst](leads.md) — zonder dat iemand een mailbox moet uitpluizen of
iets moet overtypen.

!!! info "Dit wordt per klant aangezet"
    De koppeling werkt niet vanzelf: er is een **websitesleutel** voor nodig, en die vraagt u aan bij
    ADM-Concept. Zolang die er niet is, verandert er niets aan hoe uw formulier vandaag werkt.

## Hoe het werkt

1. Een bezoeker vult het contactformulier op uw website in.
2. Het formulier stuurt die vraag door, met uw websitesleutel erbij.
3. Nimble maakt er een lead van, in uw eigen omgeving.

De lead draagt het tijdstip waarop de **bezoeker** het formulier indiende — niet het moment waarop Nimble hem
oppikte.

## De websitesleutel

De sleutel is wat uw formulier herkenbaar maakt. Twee dingen om te weten:

**U vraagt er één per formulier aan.** Hebt u een contactformulier op uw hoofdsite én een aparte
campagnepagina, vraag dan twee sleutels. Elke sleutel krijgt een naam — bijvoorbeeld *contactformulier
hoofdsite* en *campagne najaar* — en die naam wordt de **leadbron** van elke lead die er binnenkomt.

**Daardoor klopt uw bronrapportering.** In de leadlijst ziet u per lead uit welk formulier hij kwam, en dus
welk kanaal u klanten oplevert. Dat werkt alleen omdat de bron uit de sleutel komt en niet uit wat het
formulier meestuurt: zo kan een verkeerd ingestelde pagina uw cijfers niet vertekenen.

Een sleutel kan **ingetrokken** worden zonder de andere te raken. Een campagne stopzetten laat uw hoofdsite
dus met rust.

!!! tip "Een nieuwe sleutelnaam verschijnt vanzelf in uw leadbronnen"
    Komt er een lead binnen via een sleutel waarvan de naam nog niet in uw lijst staat, dan wordt die bron
    aangemaakt. U vindt en hernoemt ze bij **Platformbeheer → Leadbronnen**.

## Voor de bouwer van uw website

De technische beschrijving — waar het formulier naartoe post, welke velden meekunnen, hoe de sleutel meegegeven
wordt — staat op één plaats en wordt daar bijgehouden:

**[platform.digitalcloud.be/docs/leads-contactformulier](https://platform.digitalcloud.be/docs/leads-contactformulier){ target=_blank }**

Stuur die **link** door aan uw webbouwer, en niet een kopie van de tekst. Een doorgestuurd document veroudert
stil in een mailbox; de pagina toont altijd wat er nú geldt.

De **websitesleutel** geeft u apart mee. Die hoort niet in een e-mail met de rest van de uitleg te staan.

## Wat er in de lead terechtkomt

| Op de leadfiche | Waar het vandaan komt |
|---|---|
| **Naam** | het naam-veld van uw formulier, ongesplitst |
| **E-mail**, **Telefoon** | de overeenkomstige velden |
| **Leadbron** | de naam van de websitesleutel |
| **Logboek** | het bericht, alle formuliervelden, de pagina, het formulier, de taal van de bezoeker |

!!! tip "Uw eigen formuliervelden gaan niet verloren"
    Vraagt uw formulier bijvoorbeeld naar het aantal m² of naar hoe iemand u gevonden heeft, dan komen die
    antwoorden mee in het **Logboek** van de lead. U hoeft uw formulier dus niet aan te passen aan Nimble.

In datzelfde logboek staat ook de **taal waarin de bezoeker het formulier invulde**. Handig om te weten in
welke taal u terugbelt — de rest van de tekst blijft in uw eigen taal staan.

## Wie krijgt er bericht?

Er vertrekt een e-mail naar het adres dat u instelde bij
[Bedrijfsfiche → Website-leads naar](../settings/company-profile.md), en er komt een **taak** bij de lead.

!!! tip "Een gedeelde bus is vaak beter dan één persoon"
    `info@uwbedrijf.be` blijft werken wanneer iemand met verlof is. Eén naam in dat veld betekent dat er twee
    weken lang niemand kijkt.

## Dezelfde persoon die twee keer invult

Dat blijft **één lead**, zolang zijn vorige lead nog loopt: de nieuwe aanvraag komt als logboekregel bij de
bestaande, met een taak erbij. Zie [Leads](leads.md#leads-via-uw-website).

Ook een dubbele verzending van het formulier zelf — iemand die twee keer op *Verzenden* klikt — levert maar
één lead op.

## Als er niets binnenkomt

- **Is de sleutel al aangevraagd en ingesteld?** Zolang die er niet is, komt er niets door.
- **Post het formulier naar het juiste adres?** Dat staat op de pagina voor uw webbouwer.
- **Kijk in de leadlijst op alle statussen.** Een aanvraag van iemand met een lopende lead kan daarbij gezet
  zijn in plaats van als nieuwe rij te verschijnen.

Komt u er niet uit, neem dan contact op met ADM-Concept: aan onze kant is zichtbaar of uw formulier iets
ingestuurd heeft en wat ermee gebeurd is.
