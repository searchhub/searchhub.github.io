# Willkommen bei searchHub{#welcome-to-searchhub}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yiPe1gTCtbs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Willkommen bei __searchHub__ von __CXP Commerce Experts__.
searchHub ist die weltweit erste Suchanfragen-Optimierungsplattform, die sich auf die Erhöhung der Konversionsrate Ihrer bestehenden Ecommerce-Suche spezialisiert hat. Wir helfen Deiner Website-Suche dabei, die Suchanfragen Deiner Kund:innen besser zu verstehen.

In diesem Video führt uns Jonathan Ross durch die Plattform und zeigt, wie uns die Machine-Learning-Algorithmen bei der autonomen Optimierung der Website-Suche helfen.

# searchHub Basis Training - Wie führe ich Cluster zusammen?{#searchhub-basic-training---how-do-i-merge-clusters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3sKhtLw-1Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In diesem Video zeigen wir Dir wie Du Cluster effizient mit Hilfe unserer Filter-Werkzeuge zusammenführst.

# searchHub Basis Training - Cluster mittels Fingerprint-Schaltfläche und vordefinierten Filtern zusammenführen.{#searchhub-basic-training--using-the-fingerprint-button-and-pre-defined-filters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_FzhKrHeyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dieses Video zeigt, wie Du mittels _Fingerprint-Schaltfläche von searchHub ermittelte, hochgradig ähnliche cluster unter Anwendung vordefinierter Filter-Kriterien_ noch effizienter zusammenführen kannst.

# searchHub Basis Training - Wie lege ich Such-Redirects an?{#searchhub-basic-training---how-to-set-up-redirects}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FAgJtXpWgiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## In diesem Video machen wir Dich mit den 3 unterschiedlichen Arten an Such-Redirects vertraut, die searchHub bietet.{#in-this-video-we-describe-the-3-different-types-of-redirects}

1. <a href="https://youtu.be/FAgJtXpWgiw?t=36">Query Cluster Redirects</a>
2. <a href="https://youtu.be/FAgJtXpWgiw?t=179">Semantic Search Redirects</a>
3. <a href="https://youtu.be/FAgJtXpWgiw?t=303">Exact Redirects</a>

# searchHub SearchInsights Training{#searchhub-search-insights-training}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nC1I1aQ4uN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

searchHub searchInsights gibt Dir die Möglichkeit, die Performance Deiner aktuellen Suche kontinuierlich zu überwachen, Potenziale zu ermitteln und so die erfolgversprechendsten Optimierungen abzuleiten.

## In diesem Video zeigen wir Dir wie Du:{#this-video-will-show-you-how-to}
1. Die Performance der Suche überwachst
2. Die größten Hebel zur weiteren Verbesserung identifizierst
3. Den Einfluss Deiner Optimierungen reportest
4. Und sämtliche relevanten Kennzahlen über die Zeit hinweg verfolgen kannst.

# Keyboard Shortcuts{#keyboard-shortcuts}

Drücke 'Shift'+'?' um eine Übersicht über alle vorhandenen shortcuts zu bekommen. Damit machst Du Deine Arbeit mit searchHub noch effizienter. 

# smartSuggest{#smartsuggest}

smartSuggest nutzt einen mehrstufigen Prozess, um die bestmöglichen Such-Vorschläge zu ermitteln. Als Grundlage dienen immer diejenigen Such-Vorschläge, die die höchste Konfidenz aufweisen. Weitere Such-Vorschläge aus weniger konfidenten Methoden werden nur hinzugezogen, sofern noch nicht genügend Such-Vorschläge ermittelt werden konnten. 
Anbei ein kleines Beispiel, das den beschriebenen Prozess für eine Suggest-Anfrage die 10 Such-Vorschläge zurückliefern soll verdeutlicht: 

1. Suche nur in den Cluster-Labels
2. Suche zusätzlich in allen Cluster-Varianten
3. Suche unscharf in den Cluster_Labels mit einer maximalen edit distance von 1
4. Suche unscharf in den Cluster_Labels mit einer maximalen edit distance von 2

Wenn die erste Stufe >= 10 Vorschläge findet, geben wir die Vorschläge zurück. Wenn weniger als 10 Vorschläge gefunden werden, wird die nächste Stufe eingeleitet, usw., bis die gewünschte Anzahl an Vorschlägen gefunden wurde.

## Basis Einstellung - Fuzziness{#basic-settings---fuzziness}

Mithilfe dieser Einstellung legst Du den Anteil der unscharfen Such-Vorschläge im Gesamtergebnis fest. Die Voreinstellung ist auf __precision__ eingestellt. In dieser Einstellung werden _keine_ unscharfen Such-Vorschläge ermittelt. Hierdurch kann es gelegentlich vorkommen, dass unterschiedlich viele Such-Vorschläge ermittelt werden. Wird die Einstellung auf __recall__ geändert, werden immer gleich viele Such-Vorschläge ermittelt, indem die Liste mit unscharfen Such-Vorschlägen aufgefüllt wird.

## Basis Einstellung - Sortierung{#basic-settings---sorting}

Mit dieser Einstellung legst Du die Sortierung der Such-Vorschläge fest. Die Voreinstellung ist auf __confidence sorting__ eingestellt. In dieser Einstellung werden die Such-Vorschläge zunächst nach Konfidenz und dann nach dem einstellbaren _Gewicht_ sortiert. Alternativ kann auch auf __group sorting__ umgestellt werden. Bei dieser Einstellung werden die Such-Vorschläge blockweise auf Basis der Konfidenz-stufen dargestellt, wobei innerhalb der Stufen nach _Gewicht_ sortiert wird. Das _Gewicht_ wird über die Ranking Einstellung bestimmt die Du festgelegt hast.

## Basis Einstellung - AI Suggests{#basic-settings---ai-suggestions}

Mithilfe dieser Einstellung legst Du die maximale Anzahl an AI Suggests fest, die ausgespielt werden soll. Sofern zu einer User-Eingabe AI Suggests existieren werden diese stets auf den ersten Positionen ausgespielt.  
AI-Suggests verfolgen das Ziel sowohl die Findability als auch die Sellability innerhalb einer Such-Session zu maximieren. Daher basieren sie auf dem analysierten Such-Verhalten Deiner Kunden.
Als Beispiel betrachten wir eine recht generische Suchanfrage nach "männer". Die searchHub AI erkennt, dass es sich um eine generische Suchanfrage handelt und ermittelt automatisch relevante weniger generische alternativ Such-Vorschläge wie "männer bekleidung" und männer hosen" oder "männer schuhe" um die spezifische Findability und Sellability zu erhöhen. 
(Diese Funktionalität ist nur in Verbindung mit dem searchHub search-collector nutzbar)

## Inspirierende AI Suggests{#inspirational-ai-suggestions}

Mit unseren KI-gestützten inspirierenden Vorschlägen können Sie Ihren Nutzern jetzt Autovervollständigungs- und Suchvorschläge anzeigen, noch bevor diese mit der Eingabe beginnen. Die folgenden Vorschlags-Typen stehen zur Verfügung:

1. MOST_INSPIRING  
   Vorschläge basierend auf unserem KI-gestützten Empfehlungssystem, das eine intelligente Mischung der folgenden vier Strategien verwendet.
2. MOST_POPULAR  
   Vorschläge basierend auf den am häufigsten gesuchten Begriffen.
3. MOST_POPULARITY_UPLIFT  
   Vorschläge basierend auf den derzeit angesagtesten Suchen, um auf aktuelle Trends zu optimieren.
4. HIGHEST_FINDABILITY_UPLIFT  
   Vorschläge werden auf der Grundlage von Suchanfragen ausgewählt, deren Ergebnisqualität in letzter Zeit gestiegen ist - möglicherweise durch Sortimentsoptimierungen
5. HIGHEST_SELLABILITY_UPLIFT  
   Vorschläge werden auf der Grundlage von Suchanfragen ausgewählt, die die Wahrscheinlichkeit von Add-to-Cart-Ereignissen maximieren, um auf Verkaufsfähigkeit zu optimieren.

# Cluster Ansicht{#query-cluster}

Für die Suche innerhalb der Cluster-Liste benutzen wird per Standard eine intelligente, leicht fehlertolerante Suchfunktion mit dem Ziel, das beste allgemeine Ergebnis bereitzustellen.
Manchmal ist es jedoch notwendig, einen bestimmten Query zu finden, der exakt der Eingabe ins Suchfeld entspricht. Hierfür kannst Du dem Suchbegriff ein **+** voranstellen,   
z.B.: **+hemd blau xl**.  
Diese exakte Suchen liefert einen einzelnen Cluster zurück, wenn eine darin enthaltene Variante genau mit dem eingegebenen Query übereinstimmt. 

# Weiterleitungen{#redirects}
Aktive Redirects werden von searchHub täglich auf Gültigkeit geprüft. An der Ampelfarbe wird das Ergebnis dieser Prüfung sichtbar:
- Grün: Redirect ist gültig (http status 200)
- Grau: Entweder ist der Redirect inaktiv oder er konnte noch nicht von searchHub überprüft werden
- Gelb: Der Redirect funktioniert, allerdings leitet er seinerseits wieder auf eine andere URL weiter (302). Möglicherweise wäre es besser, gleich auf die finale URL zu verweisen?
- Rot: Ein Fehler ist aufgetreten, vermutlich ist die Redirect-URL nicht (mehr) gültig. Falls der Status-Code 401, 403 oder 429 ist, könnte das daran liegen, dass searchHub von Ihrem System blockiert wird. Bitte kontaktieren Sie unseren Support, um Lösungsmöglichkeiten zu finden. 

# AI Training{#ai-training}

Über die AI-Training view hilfst Du searchHub dabei, die Clustering-Qualität effizient weiter zu verbessern indem Du Dein spezifisches Wissen über Dein Sortiment einbringst. searchHub versucht stets falsche Entscheidungen zu vermeiden. Wenn sich searchHub nicht sicher genug ist, um eigenständig die Entscheidung zu treffen, ob zwei Wörter oder Phrasen in Deinem Sortiments-Kontext wirklich dieselbe Bedeutung haben oder nicht, bekommst Du hier die Möglichkeit die AI zu trainieren und Sie weiter zu verbessern.

## Trainings Prozess{#training-process}

Während des Trainings werden Dir jeweils Paare von Wörtern oder Phrasen gezeigt, für die searchHub eine Beziehung ermittelt hat. Du hast dann die Möglichkeit eine der drei folgenden Feedback-Alternativen zu wählen:

1. Nein - Ich bin mir sicher, dass die beiden Wörter oder Phrasen in meinem Sortiment nicht dieselbe Bedeutung haben.
2. Ich bin mir unsicher - Ich habe nicht genügend Informationen um eine sichere Entscheidung treffen zu können.
3. Ja - Ich bin mir 100% sicher, dass die beiden Wörter oder Phrasen in meinem Sortiment dieselbe Bedeutung haben.

Bitte gib searchHub über Nacht Zeit, das von Dir abgegebene Feedback zu verarbeiten.

## Training History{#training-history}

Sämtliches Feedback wird in der sogenannten _training history_ gespeichert und ist über das _history-icon_ erreichbar. Alle Einträge in der Training History können jederzeit überprüft und ggf. geändert werden. 
Bitte gib searchHub über Nacht Zeit, das von Dir abgegebene Feedback zu verarbeiten. Solltest Du auf die Schnelle eingreifen müssen, kannst Du jederzeit die notwendigen Änderungen in der Query Cluster view mittels merge oder un-merge durchführen.

## Manuelles training{#manual-training}
searchHub ermittelt für Dich automatisch die AI-Trainings-Paare mit dem höchsten Einfluss auf die Suchqualität. Solltest Du dennoch mal ein Paar vermissen, dann kannst du hier selbst welche erstellen. Allerdings darf die Distanz zwischen beiden Worten nicht zu groß sein (<a href="https://en.wikipedia.org/wiki/Edit_distance">edit distance</a> darf 2 nicht überschreiten).

# searchInsights{#search-insights}

Für alle Suchbegriffe in searchInsights gilt: Es handelt sich immer um die effektiv an die Suchmaschine gesendeten Suchbegriffe ("searchQuery"). Das kann der vom Benutzer eingegebene Suchbegriff sein ("userQuery"), falls dieser nicht zu einem MasterQuery gemapped wurde. In allen anderen Fällen ist es der MasterQuery. 

Es gibt folgende Ansichten in searchInsights.

## Popular Queries{#top-queries}

In der Tabelle "Popular Queries" werden Suchbegriffe mit dem höchsten Aufkommen gelistet.

In der Tabelle "Trending Queries" sind Suchbegriffe gelistet, welche im Vergleich zum gleichen vorherigen Zeitraum einen deutlichen Anstieg im Suchvolumen hatten. In der Spalte *Uplift* ist der entsprechende Anstieg an Suchvolumen angegeben.

In beiden Tabellen lassen sich die Spalten mehrfach sortieren durch Shift+Klick bzw. Strg+Klick auf die Spaltenüberschrift (⌘+Klick auf dem Mac) 

*Die Icons der Info-Spalte*

In beiden Tabellen gibt es unter Umstände folgende Icons zu sehen.

![high entropy](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/entropy.png)  
Dieses Icon markiert un-eindeutige Such-Anfragen. Diese Such-Anfragen benötigen häufig gleich mehrere weitere Interaktionen (Filter, Sortierung) bevor Suchende die Produkte finden, die sie suchen.

![bad ranking](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/ranking.png)  
Dieses Icon markiert Such-Anfragen deren Produkt-Ranking signifikantes Verbesserungspotenzial aufweist, da die Mehrheit an geklickten und gekauften Produkten nicht von den Top-Positionen stammt.

![bad relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/relevance.png)  
Dieses Icon markiert Such-Anfragen deren Ergebnis bei Kunden sehr häufig dazu führt, dass sie den Shop verlassen. Dies ist sehr häufig ein Indiz für ein völlig irrelevantes Ergebnis.

![neutral relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/neutral_relevance.png)  
Dieses Icon markiert Such-Anfragen deren Ergebnis keinerlei Kunden-Interaktion aufweisen. Dies ist sehr häufig ein Indiz für teilweise irrelevante Ergebnisse.

## Underperforming queries

Das Chart "Entwicklung über Analysezeitraum" zeigt den Anteil der Suchanfragen (unique pro Session) mit besonders 
niedrigen KPIs an allen Suchanfragen. Im Fall von CTR, CR und Findability™ ist das das unterste Quantil, 
im Fall von "Ohne Treffer" alle mit einer 0-Treffer-Rate > 50% am jeweiligen Tag

Die Tabelle "Suchbegriffe ohne Ergebnis" listet Suchbegriffe, die eine 0-Treffer-Rate > 50% aufweisen. 
Zwei Ansichten stehen zur Verfügung:

1. gesamt  
   Die Voreinstellung _Overall_ enthält alle Suchbegriffe, die in mindestens 50% der Fälle zu einem Null-Treffer geführt haben. 
2. kürzlich  
   Über die Einstellung _Recent_ wird die Liste weiter eingegrenzt. Es werden nur noch diejenigen Suchbegriffe angezeigt, die an dem Tag an dem sie das letzte Mal erfasst wurden, in mindestens 50% der Fälle zu einem Null-Treffer geführt haben. Wurde ein 0-Treffer-Suchbegriff innerhalb des Analyse-Zeitraums neu zu einem Cluster mit MasterQuery hinzugefügt, dann wird er für diesen Zeitraum trotzdem weiterhin hier angezeigt. 

Die Tabellen "Suchbegriffe mit niedriger CTR", "Suchbegriffe mit niedriger Findability™" und "Suchbegriffe mit niedriger CR" zeigen die Suchbegriffe des schwächsten Quantils der jeweiligen KPI. 
Die für den Analysezeitraum dynamisch ermittelte Obergrenze des Quantils ist als Prozentwert angegeben. Das bedeutet auch, dass die dargestellten %-Werte nur für den jeweils gewählten Analysezeitraum gelten. 

Die Tabelle "Suchbegriffe mit niedriger CR" ist ergänzend dazu gefiltert auf Suchbegriffe mit einer CR > 0%.

## Performance Charts

Das Chart "Entwicklung Suchen ohne Ergebnis" zeigt den Anteil aller Suchanfragen (nicht: Suchbegriffe) ohne Suchergebnis an allen Suchanfragen

Alle Diagramme werden im Kontext weiterer Daten angezeigt. Dazu gibt es folgende Möglichkeiten:

### Standard: Erwartungs-Bereich
Der Erwartungsbereich zeigt das Verhältnis zwischen aktuelle und vergangener Suchperformance.

*Zweck*:
KPIs schwanken natürlicherweise über die Zeit. Die Frage dabei ist, ob es normale Schwankungen sind oder eine Schwankung von einer Änderung am System verursacht wurde. Hierbei hilft der Erwartungsbereich durch den Bezug historischer Daten, anhand derer die obere und untere Schwelle berechnet wird.

*Wie es berechnet wird*:
Für jeden Wert wird das 95% [Konfidenz-Interval](https://de.wikipedia.org/wiki/Konfidenzintervall) berechnet, wobei nur der aktuelle Wert und die Werte der letzten 4 gleichen Wochentage verwendet werden.
Das Ergebnis ist ein unterer und ein oberer Schwellwert, die einen Erwartungsbereich definieren. Werte außerhalb des Bands könnten womöglich durch wesentlichen Änderungen verursacht sein.


### Industry Benchmark
Der 'Industrie Benchmark' ist ein Vergleich mit normalisierten Durchschnittswerten anderer Retailer.

*Zweck*:
Es gibt viele Faktoren die bestimmen, ob ein KPI-Wert gut ist oder nicht. Auf Basis statistisch relevanter Daten anderer Retailer können wir einen hochwertigen Vergleich in Form des 'Industrie Benchmark' liefern.
Damit werden die Werte eines Diagramms in einen erweiterten Kontext eingebettet und geben damit Aufschluss über die Qualität der Suche, zeigen Optimierungs-Potentiale auf und geben Hinweise auf übergreifende Trends und saisonale Effekte.

*Wie es berechnet wird*:
Wir verwenden gefilterte und aggregierte Werte verschiedener repräsentativer Daten aus unterschiedlichen Domänen um eine allgemeine Wahrscheinlichkeitsverteilung abzubilden. Auf Basis dessen wird der 95%ige Konfidenzinterval für jeden Tageswert gebildet.


### Anmerkungen
Es gibt zwei Quellen für Anmerkungen:
1. Systemseitig: Generiert vom searchHub System, um Hinweise auf systemseitige Änderungen zu geben.
2. Benutzerdefiniert: Manuell erstellt, damit kannst du Informationen über spezifische Ereignisse hinterlegen oder Bereiche zu Dokumentationszwecken markieren.

![annotations](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/annotations.png)

# Glossar{#glossary}

Definition einiger KPIs und Begriffe bei searchHub.

## Allgemein{#glossary---general}

| Begriff       | Erklärung                                                                                                                                                                                    |  
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Unique        | Unique bedeutet, dass etwas einmal pro Session und Suchbegriff gezählt wird. Sucht ein User fünfmal dasselbe oder klickt mehrfach im Suchergebnis, dann wird es trotzdem nur einmal gezählt. |
| Suchbegriff   | Der Inhalt einer Suchanfrage, also der Text nach dem gesucht wurde                                                                                                                           |
| Suchanfrage   | Eine unique Suchanfrage. Ein Suchbegriff kann in vielen verschiedenen Suchanfragen verwendet worden sein                                                                                     |
| userQuery     | Der Suchbegriff, den ein User in die Suchbox eingegeben hat                                                                                                                                  |
| masterQuery   | Der Suchbegriff, den searchHub als beste Variante des userQuery festgestellt hat (kann identisch mit dem userQuery sein)                                                                     |
| searchQuery   | Der Suchbegriff, den searchHub an die Suchmaschine weitergegeben hat (also entweder der userQuery oder der masterQuery)                                                                      |
| Suggest-Click | Ein Klick auf einen von smartSuggest vorgeschlagenen Suchbegriff                                                                                                                             |
| Produkt-Click | Ein Klick auf ein im Suchergebnis (nicht im Suggest!) angezeigtes Produkt                                                                                                                    |


## searchInsights - KPIs{#search-insights---kpis}

| KPI                    | Erklärung                                                                                                                                                                                                                                                                                                                                                    |  
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Suggest-CTR            | Anzahl an unique Suggest-Clicks geteilt durch die Anzahl der unique Suggestions.                                                                                                                                                                                                                                                                             |
| Suggest-MRR            | Durchschnitt des täglichen Mean-Reciprocal-Rank (ein Maß für die Qualität der Sortierung der Suggestions) der geklickten Suggestions.                                                                                                                                                                                                                        |
| #Searches              | *Total Unique Searches* Anzahl der unique Suchen pro Besucher.                                                                                                                                                                                                                                                                                               |  
| Category               | Die Produkt-Kategorie(n) mit dem größten Anteil an Interaktionen für die jeweilige Suchanfrage                                                                                                                                                                                                                                                               |
| Clicks                 | Anzahl der unique Produkt-Clicks pro Session                                                                                                                                                                                                                                                                                                                 |  
| CR in %                | Anzahl der unique gekauften SKUs geteilt durch die Anzahl an unique Suchen pro session.                                                                                                                                                                                                                                                                      |  
| CTR in %               | Anzahl der unique Produkt-Detail-Seiten Aufrufe geteilt durch die Anzahl unique Suchen pro Session.                                                                                                                                                                                                                                                          |  
| Exit rate in %         | Anzahl der Exits geteilt durch die Anzahl unique Suchen pro Session.                                                                                                                                                                                                                                                                                         |  
| Exits in %             | Anzahl der Exits direkt nach dem ausliefern einer Suchergebnisseite.                                                                                                                                                                                                                                                                                         |  
| Findability™ in %       | *Findability* bewertet die Qualität eines Suchergebnisses anhand von positiven Signalen (Klicks und Klicks in Top-Positionen) und negativen Signalen (Abbrüche und Filtertiefe). Sie ist ein gewichtetes Mittel aus diesen positiven and negativen Nutzer Signalen. *Negative signale* sind **exits**, **no-clicks** und **long search paths**. *Positive signale* sind **clicks** und **topK-clicks**.                                                                                                                                                                |
| Human rate in %        | Anzahl der unique Suchen pro Session echter Nutzern ohne Bots, referral-links, Kampagnen, etc. geteilt durch die Anzahl an unique Suchen pro Session.                                                                                                                                                                                                        |  
| No Result in %         | Anzahl der unique Suchen pro Session die zu einem Null-Treffer geführt haben.                                                                                                                                                                                                                                                                                |  
| Orders                 | Anzahl aller Sessions die zu einem Kauf geführt haben.                                                                                                                                                                                                                                                                                                       |  
| Ranking in %           | Anzahl der Produkt-Clicks eines Suchergebnisses gewichtet nach den Positionen geteilt durch die Anzahl aller Clicks für das Suchergebnis.                                                                                                                                                                                                                    |
| Revenue                | Der gesamte Umsatz der direkt über die Suche realisiert wurde.                                                                                                                                                                                                                                                                                               |  
| Uplift                 | Die prozentuale Zunahme an Suchen innerhalb des definierten Zeitraumes                                                                                                                                                                                                                                                                                       |  
| Value per Search (VPS) | Summe des Umsatz der direkt über die Suche realisiert wurde geteilt durch die Anzahl an unqiue Suchen.                                                                                                                                                                                                                                                       |

## Query view - Standard KPIs{#query-view---standard-kpis}

| KPI         | Erklärung                                                                                                                                                                                                                                                                                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Popularity  | Anzahl Suchen über einen festen Zeitraum, normalerweise die letzten 28 Tage.                                                                                                                                                                                                                                                                                 |
| Samples     | „Wie gut war dieser Query” bevor searchHub den Query geändert hat. Und wie viele Samples (unveränderte Suchen) haben wir aus dieser Zeit.                                                                                                                                                                                                                    |
| Reliability | Ein Maß für die Verlässlichkeit der anderen KPIs, das das Alter und die Aussagekraft der erhobenen Daten verbindet.                                                                                                                                                                                                                                          |
| Findability | *Findability* bewertet die Qualität eines Suchergebnisses anhand von positiven Signalen (Klicks und Klicks in Top-Positionen) und negativen Signalen (Abbrüche und Filtertiefe). Sie ist ein gewichtetes Mittel aus diesen positiven and negativen Nutzer Signalen. *Negative signale* sind **exits**, **no-clicks** und **long search paths**. *Positive signale* sind **clicks** und **topK-clicks**. |
| Sellability | *Sellability* misst die Wahrscheinlichkeit eines Kaufs nach einer Suche, basierend auf Warenkorb-Klicks und tatsächlichen Käufen. Diese KPI repräsentiert ein gewichtetes Mittel der beiden Raten, `warenkorb-clicks/clicks` and `käufe/warenkorb-clicks`.                                                                                                |
| Confidence  | Die Konfidenz entscheidet über den MasterQuery (die Suchanfrage mit der höchsten Konfidenz wird zum MasterQuery (Ausnahmen, manuelle Übersteuerung). Sie repräsentiert ein gewichtetes Mittel der beiden KPIs *Findability* und *Sellability*.                                                                                                              |

\* *Die Anzahl der Suchen und anderen zugrunde liegenden KPIs werden einmalig pro Query und Session gezählt.*

## Cluster view - Merge types{#cluster-view---merge-types}

| Merge type         | Erklärung                                                                                                                                                                                                           |  
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| User-Merge         | Ein User Merge ist das Zusammenführen von Clustern aufgrund von explizitem searchHub-user Feedback (direct-merge, fingerprint-merge)                                                                                |
| Confident-AI-Merge | Zusammenführen von Clustern das auf explizitem Wissen von searchHub basiert und eine hohe Konfidenz aufweist (known-misspellings, known-lemmata)                                                                    |
| Concept-AI-Merge   | Zusammenführen von Clustern das auf explizitem Wissen durch searchHub Concepts basiert (concepts sind kontext-sensitive synonyme - "TV" = "television")                                                             |
| Explicit-AI-Merge  | Zusammenführen von Clustern das auf explizitem searchHub-user AI-Training Feedback basiert ("highboard" ist ähnlich zu "highbord")                                                                                  |
| Implicit-AI-Merge  | Zusammenführen von Clustern durch implizit aus searchHub-user AI-Training gelerntem Feedback (weil "highboard" ähnlich zu "highbord" ist, lernt die AI dass auch "highboard weiss" ähnlich zu "highbord weiss" ist) |

## Cluster view - Query scores{#cluster-view---query-scores}

| Score          | Erklärung                                                                                                                                                                                                                                                                                                         |  
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Confidence     | Die Konfidenz entscheidet über den MasterQuery (diejenige Suchanfrage mit der höchsten Konfidenz wird zum MasterQuery (Ausnahmen, manuelle Übersteuerung).                                                                                                                                                        |
| Correctness    | Dieser Wert ist ein Maß für die linguistische und kontextuelle Korrektheit der Suchanfrage und damit das Produkt aus WordValidation und LMProbability (s.u.).                                                                                                                                                     |
| WordValidation | Dieser Wert ist ein Maß für die linguistische Korrektheit der einzelnen Terme einer Suchanfrage. Sind sämtliche Terme einer Suchanfrage linguistisch korrekt ist der Score = 1.0                                                                                                                                  |
| LMProbability  | Die kontextuelle Korrektheit einer Suchanfrage wird durch die language model probability ermittelt. Beispiel: Die Suchanfrage "damen herren" ist linguistisch korrekt und erhält somit einen WordValidationsScore von 1.0. Aber die LM-Probability ist 0.0 da die beiden Terme in Verbindung keinen Sinn ergeben. |

## Cluster view - Cluster Filter

| Filter                             | Erklärung                                                                                                                                                        |  
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Ohne Master-Query                  | Cluster, die aufgrund zu weniger bzw. uneindeutiger Daten keinen Master-Query erhalten haben                                                                       |
| Manuell überstimmter Master-Query  | Cluster, die einen manuell ausgewählten Master-Query haben, bei denen searchHub aufgrund der Daten zu einer anderen Entscheidung gekommen wäre.                    |
| Zusammengeführt                    | Cluster, die mit anderen Clustern zusammengeführt wurden.                                                                                                          |
| Nicht zusammengeführt              | Cluster, die nicht mit anderen Clustern zusammengeführt wurden                                                                                                     |
| Manuell gewählter Master-Query     | Cluster mit manuell ausgewähltem Master-Query, unabhängig davon, ob das System denselben oder einen anderen Master-Query auswählen würde.                          |
| Manuell hinzugefügter Query        | Cluster, die einen oder mehrere manuell hinzugefügte Suchbegriffe enthalten.                                                                                       |
| Mit Kampagnen Query                | Cluster mit als kuratiert markierten Suchbegriffen                                                                                                                 |
| Mit Suggest-Whitelist-Query        | Cluster, in denen das Suggest-Label manuell hinzugefügt oder geändert wurde und sich von dem automatisch ausgewählten Suggest-Label unterscheidet.                 |
| Automatisch zusammengeführt        | Cluster, die von searchHub automatisch mithilfe von KI und/oder Benutzerfeedback (z.B. AI-Training) zusammengeführt wurden.                                        |
| Alle ohne Treffer                  | Cluster, für die es keine Suchtreffer gibt.                                                                                                                        |
| Potenzielle Whitelists             | Populäre Cluster ohne Master-Query, die Potential für ein manuelles Setzen des Master-Query bieten                                                                 |
| Potenzielle Merges                 | Populäre Cluster, die möglicherweise manuell mit anderen Clustern gemerged werden können                                                                           |
| Validiertes Label                  | Cluster, deren Label von searchHub gegen das kundenspezifische LanguageModel validiert werden konnte.                                                              |
| Unbekanntes Label                  | Cluster, ohne validiertes Label                                                                                                                                    |
| Master-Query mit wenig Treffern    | Cluster mit Master-Query, die weniger als 6 Suchtreffer erzielen |
