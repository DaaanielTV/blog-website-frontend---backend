- Ein PHP‑Backend zum Verwalten und Bereitstellen von Artikeln (Admin‑Bereich und API).
- Ein Next.js‑Frontend, das die Artikel abruft und anzeigt.


Hinweis:
Stelle sicher, dass du CORS (Cross-Origin Resource Sharing) im PHP‑Backend aktivierst, falls dein Next.js‑Frontend und dein PHP‑Backend auf unterschiedlichen Domains oder Ports laufen. Ein einfacher Ansatz dazu wäre, im API‑Script vor dem Output den Header zu setzen:

header("Access-Control-Allow-Origin: *");


Für Produktionssysteme solltest du CORS jedoch restriktiver konfigurieren.