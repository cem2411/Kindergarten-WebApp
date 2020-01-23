## kiga2go

Dieses Projekt beinhaltet eine Web Applikation für die Kommunikationsunterstützung zwischen Pädagogen und Eltern in einem Kindergarten.

Hierbei liegt aktuell der Fokus auf der Krankmeldefunktionalität, welcher nur einen von vielen zukünftigen Features von kiga2go repräsentiert.

## Verwendete Software

Implementiert wird das Frontend der Web Applikation mit Hilfe der JavaScript Framework React (v16.12.0), Bootstrap (v4.3.11) und einigen kleineren npm packages.
Für das Backend wird ein Node.js Server eingerichtet und als Datenbank restdb.io verwendet.

## Projekt starten:

Das Frontend kann unter [http://localhost:3000] geöffnet werden.
Das Backend läuft auf [http://localhost:5000].

1. Schritt: Split Terminal öffnen.
2. Schritt: Über das eine Terminal in den Frontend Ordner mit dem Befehl „cd .\kiga2go-react\“.
3. Schritt: Über das andere Terminal in den Backend Ordner mit dem Befehl „cd .\kiga2go-js\“.
4. Schritt: Beides mit „npm start“ zum Laufen bringen

!!! IMPORTANT !!!
Logindaten für Admin
Email: cem@admin.at
Passwort: 123

Logindaten für Eltern
Email: aus der Adminansicht entnehmbar
Passwort: 123

Logindaten für restdb.io
Username: kiga2go_2020
Passwort: auf Anfrage per Email an sa17b016@technikum-wien.at

## Funktionen:

Hierbei muss in Erwägung gezogen werden, dass in Abhängigkeit davon ob sich als User ein Elternteil oder Pädagoge bzw. Admin einloggt, die Weboberfläche eine unterschiedliche Ansicht bietet.

Im Folgenden sind die Funktionalitäten je nach Ansicht aufgelistet.
Funktionalitäten der Elternansicht:

- Willkommens-Dashboard
- Krankmeldungen abschicken
- Auflistung der abgeschickten Krankmeldungen
- Edit und Delete Möglichkeit der Krankmeldungen

Funktionalitäten der Pädagogenansicht:

- Willkommens-Dashboard mit Auflistung der heute dazugekommenen Krankmeldungen
- Übersichtliche Auflistung und Sortierung aller abgeschickten Krankmeldungen
- Elternkontoregistrierung
- Auflistung aller Kinder und Suchfilterfunktion
- Edit und Delete Möglichkeit der Kinderliste
