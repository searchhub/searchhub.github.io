# Willkomma bei searchHub{#welcome-to-searchhub}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yiPe1gTCtbs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Willkomma bei __searchHub__ von __CXP Commerce Experts__.
searchHub isch d'weltweit erste Suchanfraga-Optimierungsplattform, d'sich uf d'Erhöhung dr Konversionsrate Ihrer bestehenda Ecommerce-Suche spezialisiert hat. Wir helfa Deiner Website-Suche dabei, d'Suchanfraga Deiner Kund:inna besser zu versteha.

In diesem Video führt uns Jonathan Ross durch d'Plattform und zeigt, wie uns d'Machine-Learning-Algorithma bei dr autonoma Optimierung dr Website-Suche helfa.

# searchHub Basis Training - Wie führe ich Cluster zusamma?{#searchhub-basic-training---how-do-i-merge-clusters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3sKhtLw-1Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In diesem Video zeiga wir Dir wie Du Cluster effizient mit Hilfe unserer Filter-Werkzeuge zusammenführst.

# searchHub Basis Training - Cluster mittels Fingerprint-Schaltfläche und vordefinierta Filtern zusammenführa.{#searchhub-basic-training--using-the-fingerprint-button-and-pre-defined-filters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_FzhKrHeyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dieses Video zeigt, wie Du mittels _Fingerprint-Schaltfläche von searchHub ermittelte, hochgradig ähnliche cluster unter Anwendung vordefinierter Filter-Kriterien_ noch effizienter zusammenführa kannst.

# searchHub Basis Training - Wie lege ich Such-Redirects an?{#searchhub-basic-training---how-to-set-up-redirects}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FAgJtXpWgiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## In diesem Video macha wir Dich mit da 3 unterschiedlicha Arta an Such-Redirects vertraut, d'searchHub bietet.{#in-this-video-we-describe-the-3-different-types-of-redirects}

1. <a href="https://youtu.be/FAgJtXpWgiw?t=36">Query Cluster Redirects</a>
2. <a href="https://youtu.be/FAgJtXpWgiw?t=179">Semantic Search Redirects</a>
3. <a href="https://youtu.be/FAgJtXpWgiw?t=303">Exact Redirects</a>

# searchHub SearchInsights Training{#searchhub-search-insights-training}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nC1I1aQ4uN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

searchHub searchInsights gibt Dir d'Möglichkeit, d'Performance Deiner aktuella Suche kontinuierlich zu überwacha, Potenziale zu ermitteln und so d'erfolgversprechendsta Optimierunga abzuleita.

## In diesem Video zeiga wir Dir wie Du:{#this-video-will-show-you-how-to}
1. D'Performance dr Suche überwachst
2. D'größta Hebel zur weitera Verbesserung identifizierst
3. Da Einfluss Deiner Optimierunga reportest
4. Und sämtliche relevanta Kennzahla über d'Zeit hinweg verfolga kannst.

# Keyboard Shortcuts{#keyboard-shortcuts}

Drücke 'Shift'+'?' um oine Übersicht über älle vorhandena shortcuts zu bekomma. Damit machst Du Deine Arbeit mit searchHub noch effizienter. 

# smartSuggest{#smartsuggest}

smartSuggest nutzt oina mehrstufiga Prozess, um d'bestmöglicha Such-Vorschläge zu ermitteln. Als Grundlage diena immer diejeniga Such-Vorschläge, d'd'höchste Konfidenz ufweisa. Weitere Such-Vorschläge aus weniger konfidenta Methoda werda nur hinzugezoga, sofern noch net g'nügend Such-Vorschläge ermittelt werda konnta. 
Anbei a kleines Beispiel, des da beschriebena Prozess für oine Suggest-Anfrage d'10 Such-Vorschläge zurückliefern soll verdeutlicht: 

1. Suche nur in da Cluster-Labels
2. Suche zusätzlich in alla Cluster-Varianta
3. Suche unscharf in da Cluster_Labels mit oiner maximala edit dischdance von 1
4. Suche unscharf in da Cluster_Labels mit oiner maximala edit dischdance von 2

Wenn d'erste Stufe >= 10 Vorschläge findet, g'ba wir d'Vorschläge zurück. Wenn weniger als 10 Vorschläge g'funda werda, wird d'nächste Stufe oingeleitet, usw., bis d'g'wünschte Anzahl an Vorschläga g'funda wurde.

## Basis Einstellung - Fuzziness{#basic-settings---fuzziness}

Mithilfe dieser Einstellung legst Du da Anteil dr unscharfa Such-Vorschläge im Gesamtergebnis fest. D'Voreinstellung isch uf __precision__ oingestellt. In dieser Einstellung werda _keine_ unscharfa Such-Vorschläge ermittelt. Hierdurch kann es g'legentlich vorkomma, dass unterschiedlich viele Such-Vorschläge ermittelt werda. Wird d'Einstellung uf __recall__ g'ändert, werda immer gleich viele Such-Vorschläge ermittelt, indem d'Lischde mit unscharfa Such-Vorschläga ufgefüllt wird.

## Basis Einstellung - Sortierung{#basic-settings---sorting}

Mit dieser Einstellung legst Du d'Sortierung dr Such-Vorschläge fest. D'Voreinstellung isch uf __confidence sorting__ oingestellt. In dieser Einstellung werda d'Such-Vorschläge zunächst nach Konfidenz und dann nach dem oinstellbara _Gewicht_ sortiert. Alternativ kann auch uf __group sorting__ umgestellt werda. Bei dieser Einstellung werda d'Such-Vorschläge blockweise uf Basis dr Konfidenz-stufa dargestellt, wobei innerhalb dr Stufa nach _Gewicht_ sortiert wird. Des _Gewicht_ wird über d'Ranking Einstellung bestimmt d'Du festgelegt hast.

## Basis Einstellung - AI Suggests{#basic-settings---ai-suggestions}

Mithilfe dieser Einstellung legst Du d'maximale Anzahl an AI Suggests fest, d'ausgespielt werda soll. Sofern zu oiner User-Eingabe AI Suggests exischdiera werda diese stots uf da ersta Positiona ausgespielt.  
AI-Suggests verfolga des Ziel sowohl d'Findability als auch d'Sellability innerhalb oiner Such-Session zu maximiera. Daher basiera sie uf dem analysierta Such-Verhalta Deiner Kunda.
Als Beispiel betrachta wir oine recht g'nerische Suchanfrage nach "männer". D'searchHub AI erkennt, dass es sich um oine g'nerische Suchanfrage handelt und ermittelt automatisch relevante weniger g'nerische alternativ Such-Vorschläge wie "männer bekleidung" und männer hosa" oder "männer schuhe" um d'spezifische Findability und Sellability zu erhöha. 
(Diese Funktionalität isch nur in Verbindung mit dem searchHub search-collector nutzbar)

## Inspirierende AI Suggests{#inspirational-ai-suggestions}

Mit unsera KI-g'stützta inspirierenda Vorschläga könna Sie Ihra Nutzern jetzt Autovervollständigungs- und Suchvorschläge anzeiga, noch bevor diese mit dr Eingabe beginna. D'folgenda Vorschlags-Typa stoha zur Verfügung:

1. MOST_INSPIRING  
   Vorschläge basierend uf unserem KI-g'stützta Empfehlungssystem, des oine intelligente Mischung dr folgenda vier Strategia verwendet.
2. MOST_POPULAR  
   Vorschläge basierend uf da am häufigsta g'suchta Begriffa.
3. MOST_POPULARITY_UPLIFT  
   Vorschläge basierend uf da derzeit angesagtesta Sucha, um uf aktuelle Trends zu optimiera.
4. HIGHEST_FINDABILITY_UPLIFT  
   Vorschläge werda uf dr Grundlage von Suchanfraga ausgewählt, dera Ergebnisqualität in letzter Zeit g'stiega isch - möglicherweise durch Sortimentsoptimierunga
5. HIGHEST_SELLABILITY_UPLIFT  
   Vorschläge werda uf dr Grundlage von Suchanfraga ausgewählt, d'd'Wahrscheinlichkeit von Add-to-Cart-Ereignissa maximiera, um uf Verkaufsfähigkeit zu optimiera.

# Cluster Ansicht{#query-cluster}

Für d'Suche innerhalb dr Cluster-Lischde benutza wird per Standard oine intelligente, leicht fehlertolerante Suchfunktion mit dem Ziel, des beste allgemeine Ergebnis bereitzustella.
Manchmal isch es jedoch notwendig, oina bestimmta Query zu finda, dr exakt dr Eingabe ins Suchfeld entspricht. Hierfür kannst Du dem Suchbegriff a **+** voranstella,   
z.B.: **+hemd blau xl**.  
Diese exakte Sucha liefert oina oinzelna Cluster zurück, wenn oine darin enthaltene Variante g'nau mit dem oingegebena Query übereinstimmt. 

# Weiterleitunga{#redirects}
Aktive Redirects werda von searchHub täglich uf Gültigkeit g'prüft. An dr Ampelfarbe wird des Ergebnis dieser Prüfung sichtbar:
- Grün: Redirect isch gültig (http status 200)
- Grau: Entweder isch dr Redirect inaktiv oder er konnte noch net von searchHub überprüft werda
- Gelb: Dr Redirect funktioniert, allerdings leitet er seinerseits wieder uf oine andere URL weiter (302). Möglicherweise wäre es besser, gleich uf d'finale URL zu verweisa?
- Rot: Ein Fehler isch ufgetreta, vermutlich isch d'Redirect-URL net (mehr) gültig. Falls dr Status-Code 401, 403 oder 429 isch, könnte des daran liega, dass searchHub von Ihrem System blockiert wird. Bitte kontaktiera Sie unsera Support, um Lösungsmöglichkeita zu finda. 

# AI Training{#ai-training}

Über d'AI-Training view hilfst Du searchHub dabei, d'Clustering-Qualität effizient weiter zu verbessern indem Du Dein spezifisches Wissa über Dein Sortiment oinbringst. searchHub versucht stots falsche Entscheidunga zu vermeida. Wenn sich searchHub net sicher g'nug isch, um eigenständig d'Entscheidung zu treffa, ob zwei Wörter oder Phrasa in Deinem Sortiments-Kontekschd wirklich dieselbe Bedeutung hän oder net, bekommst Du hier d'Möglichkeit d'AI zu trainiera und Sie weiter zu verbessern.

## Trainings Prozess{#training-process}

Während des Trainings werda Dir jeweils Paare von Wörtern oder Phrasa g'zeigt, für d'searchHub oine Beziehung ermittelt hat. Du hast dann d'Möglichkeit oine dr drei folgenda Feedback-Alternativa zu wähla:

1. Nein - Ich bin mir sicher, dass d'beida Wörter oder Phrasa in meinem Sortiment net dieselbe Bedeutung hän.
2. Ich bin mir unsicher - Ich habe net g'nügend Informationa um oine sichere Entscheidung treffa zu könna.
3. Ja - Ich bin mir 100% sicher, dass d'beida Wörter oder Phrasa in meinem Sortiment dieselbe Bedeutung hän.

Bitte gib searchHub über Nacht Zeit, des von Dir abgegebene Feedback zu verarbeita.

## Training Hischdory{#training-hischdory}

Sämtliches Feedback wird in dr sogenannta _training hischdory_ g'speichert und isch über des _hischdory-icon_ erreichbar. Älle Einträge in dr Training Hischdory könna jederzeit überprüft und ggf. g'ändert werda. 
Bitte gib searchHub über Nacht Zeit, des von Dir abgegebene Feedback zu verarbeita. Solltest Du uf d'Schnelle oingreifa müssa, kannst Du jederzeit d'notwendiga Änderunga in dr Query Cluster view mittels merge oder un-merge durchführa.

## Manuelles training{#manual-training}
searchHub ermittelt für Dich automatisch die AI-Trainings-Paare mit dem höchsten Einfluss auf die Suchqualität. Solltest Du dennoch mal ein Paar vermissen, dann kannst du hier selbst welche erstellen. Allerdings darf die Distanz zwischen beiden Worten nicht zu groß sein (<a href="https://en.wikipedia.org/wiki/Edit_distance">edit distance</a> darf 2 nicht überschreiten).

# searchInsights{#search-insights}

Für älle Suchbegriffe in searchInsights gilt: Es handelt sich immer um d'effektiv an d'Suchmaschine g'sendeta Suchbegriffe ("searchQuery"). Des kann dr vom Benutzer oingegebene Suchbegriff sein ("userQuery"), falls dieser net zu oinem MasterQuery g'mapped wurde. In alla andera Fälla isch es dr MasterQuery. 

Es gibt folgende Ansichta in searchInsights.

## Popular Queries{#top-queries}

In dr Tabelle "Popular Queries" werda Suchbegriffe mit dem höchsta Ufkomma g'lischdet.

In dr Tabelle "Trending Queries" send Suchbegriffe g'lischdet, welche im Vergleich zum gleicha vorheriga Zeitraum oina deutlicha Anstieg im Suchvoluma hatta. In dr Spalte *Uplift* isch dr entsprechende Anstieg an Suchvoluma angegeba.

In beida Tabella lassa sich d'Spalta mehrfach sortiera durch Shift+Klick bzw. Strg+Klick uf d'Spaltenüberschrift (⌘+Klick uf dem Mac) 

*D'Icons dr Info-Spalte*

In beida Tabella gibt es unter Umstände folgende Icons zu seha.

![high entropy](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/entropy.png)  
Dieses Icon markiert un-oindeutiga Such-Anfraga. Diese Such-Anfraga benötiga häufig gleich mehrere weitere Interaktiona (Filter, Sortierung) bevor Suchende d'Produkte finda, d'sie sucha.

![bad ranking](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/ranking.png)  
Dieses Icon markiert Such-Anfraga dera Produkt-Ranking signifikantes Verbesserungspotenzial ufweisch, da d'Mehrheit an g'klickta und g'kaufta Produkta net von da Top-Positiona stammt.

![bad relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/relevance.png)  
Dieses Icon markiert Such-Anfraga dera Ergebnis bei Kunda sehr häufig dazu führt, dass sie da Shop verlassa. Dies isch sehr häufig a Indiz für a völlig irrelevantes Ergebnis.

![neutral relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/neutral_relevance.png)  
Dieses Icon markiert Such-Anfraga dera Ergebnis keinerlei Kunda-Interaktion ufweisa. Dies isch sehr häufig a Indiz für teilweise irrelevante Ergebnisse.

## Underperforming queries

Des Chart "Entwicklung über Analysezeitraum" zeigt da Anteil dr Suchanfraga (unique pro Session) mit besonders 
niedriga KPIs an alla Suchanfraga. Im Fall von CTR, CR und Findability™ isch des des unterste Quantil, 
im Fall von "Ohne Treffer" älle mit oiner 0-Treffer-Rate > 50% am jeweiliga Tag

D'Tabelle "Suchbegriffe ohne Ergebnis" lischdet Suchbegriffe, d'oine 0-Treffer-Rate > 50% ufweisa. 
Zwei Ansichta stoha zur Verfügung:

1. g'samt  
   D'Voreinstellung _Overall_ enthält älle Suchbegriffe, d'in mindestens 50% dr Fälle zu oinem Null-Treffer g'führt hän. 
2. kürzlich  
   Über d'Einstellung _Recent_ wird d'Lischde weiter oingegrenzt. Es werda nur noch diejeniga Suchbegriffe angezeigt, d'an dem Tag an dem sie des letzte Mal erfasst wurda, in mindestens 50% dr Fälle zu oinem Null-Treffer g'führt hän. Wurde a 0-Treffer-Suchbegriff innerhalb des Analyse-Zeitraums neu zu oinem Cluster mit MasterQuery hinzugefügt, dann wird er für diesa Zeitraum trotzdem weiterhin hier angezeigt. 

D'Tabella "Suchbegriffe mit niedriger CTR", "Suchbegriffe mit niedriger Findability™" und "Suchbegriffe mit niedriger CR" zeiga d'Suchbegriffe des schwächsta Quantils dr jeweiliga KPI. 
D'für da Analysezeitraum dynamisch ermittelte Obergrenze des Quantils isch als Prozentwert angegeba. Des bedeutet auch, dass d'dargestellta %-Werte nur für da jeweils g'wählta Analysezeitraum g'lta. 

D'Tabelle "Suchbegriffe mit niedriger CR" isch ergänzend dazu g'filtert uf Suchbegriffe mit oiner CR > 0%.

## Performance Charts

Des Chart "Entwicklung Sucha ohne Ergebnis" zeigt da Anteil aller Suchanfraga (net: Suchbegriffe) ohne Suchergebnis an alla Suchanfraga

Älle Diagramme werda im Kontekschd weiterer Data angezeigt. Dazu gibt es folgende Möglichkeita:

### Standard: Erwartungs-Bereich
Dr Erwartungsbereich zeigt des Verhältnis zwischa aktuelle und vergangener Suchperformance.

*Zweck*:
KPIs schwanka natürlicherweise über d'Zeit. D'Frage dabei isch, ob es normale Schwankunga send oder oine Schwankung von oiner Änderung am System verursacht wurde. Hierbei hilft dr Erwartungsbereich durch da Bezug hischdorischer Data, anhand derer d'obere und untere Schwelle berechnet wird.

*Wie es berechnet wird*:
Für jeden Wert wird das 95% [Konfidenz-Interval](https://de.wikipedia.org/wiki/Konfidenzintervall) berechnet, wobei nur der aktuelle Wert und die Werte der letzten 4 gleichen Wochentage verwendet werden.
Des Ergebnis isch a unterer und a oberer Schwellwert, d'oina Erwartungsbereich definiera. Werte außerhalb des Bands könnta womöglich durch wesentlicha Änderunga verursacht sein.


### Industry Benchmark
Dr 'Industrie Benchmark' isch a Vergleich mit normalisierta Durchschnittswerta anderer Retailer.

*Zweck*:
Es gibt viele Faktora d'bestimma, ob a KPI-Wert gut isch oder net. Uf Basis statischdisch relevanter Data anderer Retailer könna wir oina hochwertiga Vergleich in Form des 'Industrie Benchmark' liefern.
Damit werda d'Werte oines Diagramms in oina erweiterta Kontekschd oingebettet und g'ba damit Ufschluss über d'Qualität dr Suche, zeiga Optimierungs-Potentiale uf und g'ba Hinweise uf übergreifende Trends und saisonale Effekte.

*Wie es berechnet wird*:
Wir verwenda g'filterte und aggregierte Werte verschiedener repräsentativer Data aus unterschiedlicha Domäna um oine allgemeine Wahrscheinlichkeitsverteilung abzubilda. Uf Basis dessa wird dr 95%iga Konfidenzinterval für jeda Tageswert g'bildet.

### Aamerkunga
Es gibt zwoierlei Aamerkunga:
1. Sischtdeem: Vom searchHub-Sischdeem gmachd, damit's woisch.
2. Selber gmachd: Händisch gmachd, damit kannsch Informatione über bestimmde Sacha hintrelega oder Bereiche markiera ("Kehrwoch ned rechd gmachd, deswäge nix verkaufd" oder so ebbes)
![annotations](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/annotations.png)

# Glossar{#glossary}

Definition oiniger KPIs und Begriffe bei searchHub.

## Allgemein{#glossary---g'neral}

| Begriff       | Erklärung                                                                                                                                                                                    |  
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Unique        | Unique bedeutet, dass etwas oinmal pro Session und Suchbegriff g'zählt wird. Sucht a User fünfmal dasselbe oder klickt mehrfach im Suchergebnis, dann wird es trotzdem nur oinmal g'zählt. |
| Suchbegriff   | Dr Inhalt oiner Suchanfrage, also dr Tekschd nach dem g'sucht wurde                                                                                                                           |
| Suchanfrage   | Eine unique Suchanfrage. Ein Suchbegriff kann in viela verschiedena Suchanfraga verwendet worda sein                                                                                     |
| userQuery     | Dr Suchbegriff, da a User in d'Suchbox oingegeba hat                                                                                                                                  |
| masterQuery   | Dr Suchbegriff, da searchHub als beste Variante des userQuery festgestellt hat (kann identisch mit dem userQuery sein)                                                                     |
| searchQuery   | Dr Suchbegriff, da searchHub an d'Suchmaschine weitergegeba hat (also entweder dr userQuery oder dr masterQuery)                                                                      |
| Suggest-Click | Ein Klick uf oina von smartSuggest vorgeschlagena Suchbegriff                                                                                                                             |
| Produkt-Click | Ein Klick uf a im Suchergebnis (net im Suggest!) angezeigtes Produkt                                                                                                                    |


## searchInsights - KPIs{#search-insights---kpis}

| KPI                    | Erklärung                                                                                                                                                                                                                                                                                                                                                    |  
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Suggest-CTR            | Anzahl an unique Suggest-Clicks g'teilt durch d'Anzahl dr unique Suggestions.                                                                                                                                                                                                                                                                             |
| Suggest-MRR            | Durchschnitt des täglicha Mean-Reciprocal-Rank (a Maß für d'Qualität dr Sortierung dr Suggestions) dr g'klickta Suggestions.                                                                                                                                                                                                                        |
| #Searches              | *Total Unique Searches* Anzahl dr unique Sucha pro Besucher.                                                                                                                                                                                                                                                                                               |  
| Category               | D'Produkt-Kategorie(n) mit dem größta Anteil an Interaktiona für d'jeweiliga Suchanfrage                                                                                                                                                                                                                                                               |
| Clicks                 | Anzahl dr unique Produkt-Clicks pro Session                                                                                                                                                                                                                                                                                                                 |  
| CR in %                | Anzahl dr unique g'kaufta SKUs g'teilt durch d'Anzahl an unique Sucha pro session.                                                                                                                                                                                                                                                                      |  
| CTR in %               | Anzahl dr unique Produkt-Detail-Seita Ufrufe g'teilt durch d'Anzahl unique Sucha pro Session.                                                                                                                                                                                                                                                          |  
| Exit rate in %         | Anzahl dr Exits g'teilt durch d'Anzahl unique Sucha pro Session.                                                                                                                                                                                                                                                                                         |  
| Exits in %             | Anzahl dr Exits direkt nach dem ausliefern oiner Suchergebnisseite.                                                                                                                                                                                                                                                                                         |  
| Findability™ in %       | *Findability* bewertet d'Qualität oines Suchergebnisses anhand von positiva Signala (Klicks und Klicks in Top-Positiona) und negativa Signala (Abbrüche und Filtertiefe). Sie isch a g'wichtetes Mittel aus diesa positiva and negativa Nutzer Signala. *Negative signale* send **exits**, **no-clicks** und **long search paths**. *Positive signale* send **clicks** und **topK-clicks**.                                                                                                                                                                |
| Human rate in %        | Anzahl dr unique Sucha pro Session echter Nutzern ohne Bots, referral-links, Kampagna, etc. g'teilt durch d'Anzahl an unique Sucha pro Session.                                                                                                                                                                                                        |  
| No Result in %         | Anzahl dr unique Sucha pro Session d'zu oinem Null-Treffer g'führt hän.                                                                                                                                                                                                                                                                                |  
| Orders                 | Anzahl aller Sessions d'zu oinem Kauf g'führt hän.                                                                                                                                                                                                                                                                                                       |  
| Ranking in %           | Anzahl dr Produkt-Clicks oines Suchergebnisses g'wichtet nach da Positiona g'teilt durch d'Anzahl aller Clicks für des Suchergebnis.                                                                                                                                                                                                                    |
| Revenue                | Dr g'samte Umsatz dr direkt über d'Suche realisiert wurde.                                                                                                                                                                                                                                                                                               |  
| Uplift                 | D'prozentuale Zunahme an Sucha innerhalb des definierta Zeitraumes                                                                                                                                                                                                                                                                                       |  
| Value per Search (VPS) | Summe des Umsatz dr direkt über d'Suche realisiert wurde g'teilt durch d'Anzahl an unqiue Sucha.                                                                                                                                                                                                                                                       |

## Query view - Standard KPIs{#query-view---standard-kpis}

| KPI         | Erklärung                                                                                                                                                                                                                                                                                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Popularity  | Anzahl Sucha über oina festa Zeitraum, normalerweise d'letzta 28 Tage.                                                                                                                                                                                                                                                                                 |
| Samples     | „Wie gut war dieser Query” bevor searchHub da Query g'ändert hat. Und wie viele Samples (unveränderte Sucha) hän wir aus dieser Zeit.                                                                                                                                                                                                                    |
| Reliability | Ein Maß für d'Verlässlichkeit dr andera KPIs, des des Alter und d'Aussagekraft dr erhobena Data verbindet.                                                                                                                                                                                                                                          |
| Findability | *Findability* bewertet d'Qualität oines Suchergebnisses anhand von positiva Signala (Klicks und Klicks in Top-Positiona) und negativa Signala (Abbrüche und Filtertiefe). Sie isch a g'wichtetes Mittel aus diesa positiva and negativa Nutzer Signala. *Negative signale* send **exits**, **no-clicks** und **long search paths**. *Positive signale* send **clicks** und **topK-clicks**. |
| Sellability | *Sellability* misst d'Wahrscheinlichkeit oines Kaufs nach oiner Suche, basierend uf Warenkorb-Klicks und tatsächlicha Käufa. Diese KPI repräsentiert a g'wichtetes Mittel dr beida Rata, `warenkorb-clicks/clicks` and `käufe/warenkorb-clicks`.                                                                                                |
| Confidence  | D'Konfidenz entscheidet über da MasterQuery (d'Suchanfrage mit dr höchsta Konfidenz wird zum MasterQuery (Ausnahma, manuelle Übersteuerung). Sie repräsentiert a g'wichtetes Mittel dr beida KPIs *Findability* und *Sellability*.                                                                                                              |

\* *D'Anzahl dr Sucha und andera zugrunde liegenda KPIs werda oinmalig pro Query und Session g'zählt.*

## Cluster view - Merge types{#cluster-view---merge-types}

| Merge type         | Erklärung                                                                                                                                                                                                           |  
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| User-Merge         | Ein User Merge isch des Zusammenführa von Clustern ufgrund von explizitem searchHub-user Feedback (direct-merge, fingerprint-merge)                                                                                |
| Confident-AI-Merge | Zusammenführa von Clustern des uf explizitem Wissa von searchHub basiert und oine hohe Konfidenz ufweisch (known-misspellings, known-lemmata)                                                                    |
| Concept-AI-Merge   | Zusammenführa von Clustern des uf explizitem Wissa durch searchHub Concepts basiert (concepts send kontekschd-sensitive synonyme - "TV" = "television")                                                             |
| Explicit-AI-Merge  | Zusammenführa von Clustern des uf explizitem searchHub-user AI-Training Feedback basiert ("highboard" isch ähnlich zu "highbord")                                                                                  |
| Implicit-AI-Merge  | Zusammenführa von Clustern durch implizit aus searchHub-user AI-Training g'lerntem Feedback (weil "highboard" ähnlich zu "highbord" isch, lernt d'AI dass auch "highboard weiss" ähnlich zu "highbord weiss" isch) |

## Cluster view - Query scores{#cluster-view---query-scores}

| Score          | Erklärung                                                                                                                                                                                                                                                                                                         |  
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Confidence     | D'Konfidenz entscheidet über da MasterQuery (diejeniga Suchanfrage mit dr höchsta Konfidenz wird zum MasterQuery (Ausnahma, manuelle Übersteuerung).                                                                                                                                                        |
| Correctness    | Dieser Wert isch a Maß für d'linguischdische und kontekschduelle Korrektheit dr Suchanfrage und damit des Produkt aus WordValidation und LMProbability (s.u.).                                                                                                                                                     |
| WordValidation | Dieser Wert isch a Maß für d'linguischdische Korrektheit dr oinzelna Terme oiner Suchanfrage. Send sämtliche Terme oiner Suchanfrage linguischdisch korrekt isch dr Score = 1.0                                                                                                                                  |
| LMProbability  | D'kontekschduelle Korrektheit oiner Suchanfrage wird durch d'language model probability ermittelt. Beispiel: D'Suchanfrage "dama herra" isch linguischdisch korrekt und erhält somit oina WordValidationsScore von 1.0. Aber d'LM-Probability isch 0.0 da d'beida Terme in Verbindung keina Sinn ergeba. |

## Cluster view - Cluster Filter

| Filter                             | Erklärung                                                                                                                                                        |  
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Ohne Master-Query                  | Cluster, d'ufgrund zu weniger bzw. uneindeutiger Data keina Master-Query erhalta hän                                                                       |
| Manuell überstimmter Master-Query  | Cluster, d'oina manuell ausgewählta Master-Query hän, bei dena searchHub ufgrund dr Data zu oiner andera Entscheidung g'komma wäre.                    |
| Zusammengeführt                    | Cluster, d'mit andera Clustern zusammengeführt wurda.                                                                                                          |
| Net zusammengeführt              | Cluster, d'net mit andera Clustern zusammengeführt wurda                                                                                                     |
| Manuell g'wählter Master-Query     | Cluster mit manuell ausgewähltem Master-Query, unabhängig davon, ob des System denselba oder oina andera Master-Query auswähla würde.                          |
| Manuell hinzugefügter Query        | Cluster, d'oina oder mehrere manuell hinzugefügte Suchbegriffe enthalta.                                                                                       |
| Mit Kampagna Query                | Cluster mit als kuratiert markierta Suchbegriffa                                                                                                                 |
| Mit Suggest-Whitelisch-Query        | Cluster, in dena des Suggest-Label manuell hinzugefügt oder g'ändert wurde und sich von dem automatisch ausgewählta Suggest-Label unterscheidet.                 |
| Automatisch zusammengeführt        | Cluster, d'von searchHub automatisch mithilfe von KI und/oder Benutzerfeedback (z.B. AI-Training) zusammengeführt wurda.                                        |
| Älle ohne Treffer                  | Cluster, für d'es keine Suchtreffer gibt.                                                                                                                        |
| Potenzielle Whitelischs             | Populäre Cluster ohne Master-Query, d'Potential für a manuelles Setza des Master-Query bieta                                                                 |
| Potenzielle Merges                 | Populäre Cluster, d'möglicherweise manuell mit andera Clustern g'merged werda könna                                                                           |
| Validiertes Label                  | Cluster, dera Label von searchHub g'ga des kundenspezifische LanguageModel validiert werda konnte.                                                              |
| Unbekanntes Label                  | Cluster, ohne validiertes Label                                                                                                                                    |
| Master-Query mit wenig Treffern    | Cluster mit Master-Query, d'weniger als 6 Suchtreffer erziela |
