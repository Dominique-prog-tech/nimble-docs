#!/usr/bin/env python3
"""Staat elk beeld uit de Markdown ook als <img> in de GEBOUWDE site?

Waarom dit bestaat (19/10/2026): selectolax 1.0.1 — een onderliggend pakket van mkdocs-glightbox, niet
gepind — maakte van elk beeld een lege <p></p>. De bouw was groen, --strict was groen, de filmcontrole was
groen, de linkcheck was groen (een beeld dat er niet staat, kan niet dood zijn). Een dag lang toonde de
handleiding geen enkele schermafdruk.

Deze controle telt per pagina de .png-verwijzingen in de bron en de <img src="….png"> in de HTML. Een pagina
die de bouw niet maakt (verberg_skeletten.py) wordt overgeslagen, maar meegeteld in het verslag.

Gebruik:  python3 tools/check-beelden.py [site-map]      (standaard: site)
"""
import pathlib
import re
import sys

BRON = pathlib.Path("docs")
SITE = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "site")

MD_BEELD = re.compile(r"!\[[^\]]*\]\([^)\s]+\.png\)|<img[^>]+src=\"[^\"]+\.png\"", re.S)
HTML_BEELD = re.compile(r"<img[^>]+src=\"[^\"]+\.png\"")


def html_voor(md: pathlib.Path) -> pathlib.Path:
    rel = md.relative_to(BRON)
    taal = ""
    stam = rel.with_suffix("")
    if stam.suffix == ".fr":
        taal, stam = "fr", stam.with_suffix("")
    delen = list(stam.parts)
    if delen[-1] == "index":
        delen = delen[:-1]
    return SITE.joinpath(taal, *delen, "index.html")


def main() -> int:
    if not SITE.is_dir():
        print(f"❌ geen gebouwde site in {SITE}/ — draai eerst mkdocs build")
        return 1
    fouten, paginas, beelden, niet_gebouwd = [], 0, 0, 0
    for md in sorted(BRON.rglob("*.md")):
        verwacht = len(MD_BEELD.findall(md.read_text(encoding="utf-8")))
        if not verwacht:
            continue
        html = html_voor(md)
        if not html.exists():
            niet_gebouwd += 1
            continue
        gevonden = len(HTML_BEELD.findall(html.read_text(encoding="utf-8")))
        paginas += 1
        beelden += verwacht
        if gevonden < verwacht:
            fouten.append(f"  {md}: {verwacht} in de bron, {gevonden} in {html}")
    if fouten:
        print(f"❌ {len(fouten)} pagina('s) verloren beelden bij het bouwen:")
        print("\n".join(fouten))
        return 1
    # Een bodem: nul pagina's met beelden betekent dat de zeef niets vond, niet dat alles in orde is.
    if paginas < 20:
        print(f"❌ slechts {paginas} pagina's met beelden gemeten — verwacht ruim meer; klopt de zeef nog?")
        return 1
    print(f"✅ {beelden} beelden op {paginas} pagina's staan allemaal in de gebouwde site"
          f" ({niet_gebouwd} pagina('s) met beelden niet gebouwd — skelet).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
