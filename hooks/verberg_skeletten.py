"""Houdt nog-niet-geschreven pagina's uit de gebouwde site.

⚠️ Waarom dit bestaat (02/09/2026). 42 van de 75 pagina's zijn nog sjablonen met een zichtbaar
TODO-blok ("Documenteer op basis van Delphi-source"). Ze stonden niet in de navigatie, en dat
leek te volstaan — maar mkdocs bouwt élk .md-bestand:

  · site/quotes/list/index.html bestond en was bereikbaar via de URL;
  · en erger: 420 van de 1197 vermeldingen in de ZOEKINDEX bevatten TODO. Wie in de handleiding
    zocht op "offerte", kreeg een pagina die zegt dat ze nog geschreven moet worden.

Een pagina die niet af is, hoort niet vindbaar te zijn. "Ik weet het niet" is beter dan een
sjabloontekst die als antwoord leest.

⚠️ Dit meet de INHOUD en niet een lijst met paden. Een lijst zou verouderen zodra iemand een
pagina afwerkt en vergeet hem eruit te halen — dan blijft ze onzichtbaar zonder dat iets het
meldt. Nu verschijnt een pagina vanzelf zodra het laatste TODO-blok eruit is.
"""

import re

SKELET = re.compile(r'!!!\s+(info|warning)\s+"TODO"')
_overgeslagen: list[str] = []


def on_files(files, config):
    """Filtert de skeletten weg vóór mkdocs ze bouwt of indexeert."""
    global _overgeslagen
    _overgeslagen = []
    houden = []
    for f in files:
        if f.src_path.endswith(".md"):
            try:
                if SKELET.search(f.content_string):
                    _overgeslagen.append(f.src_path)
                    continue
            except Exception:
                pass  # onleesbaar bestand: laten staan, niet stilletjes weggooien
        houden.append(f)
    files.__init__(houden)
    return files


def on_post_build(config):
    """Zegt hoeveel er zijn overgeslagen — stilte hier zou lezen als 'alles is af'."""
    n = len(_overgeslagen)
    if n:
        print(f"\n  verberg_skeletten: {n} pagina('s) nog sjabloon, niet gebouwd en niet doorzoekbaar.")
        print("  Ze verschijnen vanzelf zodra hun TODO-blokken weg zijn.\n")
