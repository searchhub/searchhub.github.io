# Willkommen bei searchHub{#welcome-to-searchhub}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yiPe1gTCtbs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Willkommen bei __search|hub__ von __CXP Commerce Experts__.
searchHub ist die weltweit erste Suchanfragen-Optimierungsplattform, die sich auf die Erhöhung der Konversionsrate Ihrer bestehenden Website-Suche spezialisiert hat. Indem wir Ihrer Website-Suche dabei helfen die Suchanfragen Ihrer Kunden besser zu verstehen.

In diesem Video führt uns Jonathan Ross durch die Plattform und zeigt wie Machine-Learning-Algorithmen unseren Kunden bei der autonomen Optimierung der Website-Suche helfen können.

# searchHub Basis Training - Wie führe ich cluster zusammen?{#searchhub-basic-training---how-do-i-merge-clusters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3sKhtLw-1Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In diesem Video zeigen wir Ihnen wie Sie cluster effizient mithilfe unserer Filter Werkzeuge zusammenführen.

# searchHub Basis Training - Cluster mittels Fingerprint-Schaltfläche und vordefinierten Filtern zusammenführen.{#searchhub-basic-training--using-the-fingerprint-button-and-pre-defined-filters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_FzhKrHeyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dieses Video soll zeigen wie Sie mittels _Fingerprint-Schaltfläche von searchHub ermittelte hochgradig ähnliche cluster unter Anwendung vordefinierter Filter-Kriterien_ noch effizienter cluster zusammenführen können.

# searchHub Basis Training - Wie lege ich Such-Redirects an?{#searchhub-basic-training---how-to-set-up-redirects}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FAgJtXpWgiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## In diesem Video machen wir Sie mit den 3 unterschiedlichen Arten an Such-Redirects vertraut, die searchHub bietet.{#in-this-video-we-describe-the-3-different-types-of-redirects}

1. <a href="https://youtu.be/FAgJtXpWgiw?t=36">Query Cluster Redirects</a>
2. <a href="https://youtu.be/FAgJtXpWgiw?t=179">Semantic Search Redirects</a>
3. <a href="https://youtu.be/FAgJtXpWgiw?t=303">Exact Redirects</a>

# searchHub SearchInsights Training{#searchhub-search-insights-training}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nC1I1aQ4uN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

searchHub Search Insights gibt Ihnen die Möglichkeit die Performance Ihrer aktuellen Suche kontinuierlich zu überwachen, potenziale zu ermitteln und so die erfolgversprechendsten Optimierungen abzuleiten.

## In diesem Video zeigen wir Ihnen wie Sie:{#this-video-will-show-you-how-to}
1. Die Performance Ihrer Suche überwachen
2. Die größten Hebel zur weiteren Verbesserung identifizieren
3. Den Einfluss Ihrer Optimierungen reporten
4. Und sämtliche relevanten Kennzahlen über die Zeit hinweg verfolgen können.

# Keyboard Shortcuts{#keyboard-shortcuts}

Drücken Sie 'Shift'+'?' um eine Übersicht über alle vorhandenen shortcuts zu bekommen, die Sie nutzen können, um Ihre Arbeit mit searchHub noch effizienter zu gestalten. 

# SmartSuggest{#smartsuggest}

SmartSuggest nutzt einen mehrstufigen Prozess, um die bestmöglichen Such-Vorschläge zu ermitteln. Als Grundlage dienen immer diejenigen Such-Vorschläge, die die höchste Konfidenz aufweisen. Weitere Such-Vorschläge aus weniger konfidenten Methoden werden nur hinzugezogen, sofern noch nicht genügend Such-Vorschläge ermittelt werden konnten. 
Anbei ein kleines Beispiel, das den beschriebenen Prozess für eine Suggest-Anfrage die 10 Such-Vorschläge zurückliefern soll verdeutlicht: 

1. Suche nur in den Cluster-Labels
2. Suche zusätzlich in allen Cluster-Varianten
3. Suche unscharf in den Cluster_Labels mit einer maximalen edit distance von 1
4. Suche unscharf in den Cluster_Labels mit einer maximalen edit distance von 2

Wenn die erste Stufe >= 10 Vorschläge findet, geben wir die Vorschläge zurück. Wenn weniger als 10 Vorschläge gefunden werden, wird die nächste Stufe eingeleitet, usw., bis die gewünschte Anzahl an Vorschlägen gefunden wurde.

## Basis Einstellung - Fuzziness{#basic-settings---fuzziness}

Mithilfe dieser Einstellung legen Sie den Anteil der unscharfen Such-Vorschläge im Gesamtergebnis fest. Die Voreinstellung ist auf __precision__ eingestellt. In dieser Einstellung werden _keine_ unscharfen Such-Vorschläge ermittelt. Hierdurch kann es gelegentlich vorkommen, dass unterschiedlich viele Such-Vorschläge ermittelt werden. Wird die Einstellung auf __recall__ geändert, werden immer gleich viele Such-Vorschläge ermittelt, indem die Liste mit unscharfen Such-Vorschlägen aufgefüllt wird.

## Basis Einstellung - Sortierung{#basic-settings---sorting}

Mit dieser Einstellung legen Sie die Sortierung der Such-Vorschläge fest. Die Voreinstellung is auf __confidence sorting__ eingestellt. In dieser Einstellung werden die Such-Vorschläge zunächst nach Konfidenz und dann nach dem einstellbaren _Gewicht_ sortiert. Alternativ kann auch auf __group sorting__ umgestellt werden. Bei dieser Einstellung werden die Such-Vorschläge blockweise auf Basis der Konfidenz-stufen dargestellt, wobei innerhalb der Stufen nach _Gewicht_ sortiert wird. Das _Gewicht_ wird über die Ranking Einstellung bestimmt die Sie festgelegt haben.

## Basis Einstellung - AI Vorschläge{#basic-settings---ai-suggestions}

Mithilfe dieser Einstellung legen Sie die maximale Anzahl an AI Vorschläge fest die ausgespielt werden soll. Sofern zu einer User-Eingabe AI Vorschläge existieren werden diese stets auf den ersten Positionen ausgespielt.  
AI-Vorschläge verfolgen das Ziel sowohl die Findability als auch die Sellability innerhalb einer Such-Session zu maximieren. Daher basieren sie auf dem analysierten Such-Verhalten Ihrer Kunden.
Als Beispiel betrachten wir z.B. eine recht generische Suchanfrage nach "männer". Die searchHub AI erkennt, dass es sich um eine generische Suchanfrage handelt und ermittelt automatisch relevante weniger generische alternativ Such-Vorschläge wie "männer bekleidung" und männer hosen" oder "männer schuhe" um die spezifische Findability und Sellability zu erhöhen. 
(Diese Funktionalität ist nur in Verbindung mit dem searchHub search-collector nutzbar)

# AI-Training{#ai-training}

Über die AI-Training view helfen Sie searchHub dabei die Clustering-Qualität effizient weiter zu verbessern in dem Sie ihr spezifisches Wissen über Ihr Sortiment einbringen können. SearchHub versucht sets falsche Entscheidungen zu vermeiden. Dadurch kann es vorkommen, dass sich searchHub nicht sicher genug ist, um eigenständig eine Entscheidung zu treffen, ob zwei Wörter oder Phrasen wirklich dieselbe Bedeutung haben oder nicht. In genau solchen Fällen haben Sie die Möglichkeit die AI zu trainieren, um sie weiter zu verbessern.

## Trainings Prozess{#training-process}

Während des Trainings werden Ihnen jeweils Paare von Wörtern oder Phrasen gezeigt, für die searchHub eine Beziehung ermittelt hat. Sie haben dann die Möglichkeit eine der drei folgenden Feedback-Alternativen zu wählen:

1. Nein - Ich bin mir sicher, dass die beiden Wörter oder Phrasen nicht dieselbe Bedeutung haben.
2. Ich bin mir unsicher - Ich habe nicht genügend Informationen um eine sichere Entscheidung treffen zu können.
3. Ja - Ich bin mir 100% sicher, dass die beiden Wörter oder Phrasen dieselbe Bedeutung haben.

Bitte geben Sie searchHub über Nacht Zeit das von Ihnen abgegebene Feedback zu verarbeiten.

## Training History{#training-history}

Sämtliches Feedback wird in der sogenannten _training history_ gespeichert und ist über das _history-icon_ erreichbar. Alle Einträge, in der Training history, können von Ihnen jederzeit überprüft und ggf. geändert werden. 
Bitte geben Sie searchHub über Nacht Zeit das von Ihnen abgegebene Feedback zu verarbeiten. Sollten Sie auf die Schnelle eingreifen müssen, können Sie jederzeit die notwendigen Änderungen in der Query Cluster view mittels merge oder un-merge durchführen.

## Manuelles training{#manual-training}
Only certain combinations of queries can be selected for AI training. searchHub already pre-filters these combinations according to certain criteria. Among other things, the <a href="https://en.wikipedia.org/wiki/Edit_distance">edit distance</a> must not be greater than 2.

# Search Insights{#search-insights}

## Underperforming queries{#underperforming-queries}

In der Übersicht über die "Suchen ohne result" haben Sie die Möglichkeit zwischen den beiden folgenden Ansichten zu wählen:

1. Overall  
   Die Voreinstellung _Overall_ enthält alle Suchanfragen, die in mindestens 50% der Suchen zu einem Null-Treffer geführt haben. 
2. Recent  
   Über die Einstellung _Recent_ können Sie die Liste weiter eingrenzen. Mit Auswahl dieser Einstellung werden nur noch diejenigen Suchanfragen angezeigt, die an dem Tag, an dem sie das letzte Mal gesehen wurden in mindestens 50% der Suchen zu einem Null-Treffer geführt haben. 

## Top queries{#top-queries}

Erklärung der unterschiedlichen icons der Info-Spalte

![high entropy](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/entropy.png)  
Dieses Icon markiert un-eindeutige Such-Anfragen. Diese Such-Anfragen benötigen häufig gleich mehrere weitere Interaktionen (Filter, Sortierung) bevor Suchende die Produkte finden, die sie suchen.

![bad ranking](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/ranking.png)  
Dieses Icon markiert Such-Anfragen deren Produkt-Ranking signifikantes Verbesserungspotenzial aufweisen, da die Mehrheit an geklickten und gekauften Produkten nicht auf den besten Positionen erfolgen.

![bad relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/relevance.png)  
Dieses Icon markiert Such-Anfragen deren result bei Kunden sehr häufig dazu führt, dass sie den Shop verlassen. Dies ist sehr häufig ein Indiz für ein völlig irrelevantes Ergebnis.

![neutral relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/neutral_relevance.png)  
Dieses Icon markiert Such-Anfragen deren result keine Kunden-Interaktion aufweisen. Dies ist sehr häufig ein Indiz für teilweise irrelevante Ergebnisse.

# Glossary{#glossary}

## Search Insights - KPIs{#search-insights---kpis}

|KPI | Erklärung                                                                                                                                                                                                                                                                                                                                                    |  
|--|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
|Suggest-CTR | Anzahl an unique Suggest-Clicks geteilt durch die Anzahl der unique Suggestions.                                                                                                                                                                                                                                                                             |
|Suggest-MRR | Durchschnitt des täglichen Mean-Reciprocal-Rank (ein Maß für die Qualität der Sortierung der Suggestions) der geklickten Suggestions.                                                                                                                                                                                                                        |
|#Searches | *Total Unique Searches* Anzahl der unique Suchen pro Besucher.                                                                                                                                                                                                                                                                                               |  
|Category | Die Produkt-Kategorie(n) mit dem größten Anteil an Interkationen für die jeweilige Suchanfrage                                                                                                                                                                                                                                                               |
|Clicks | Anzahl der unique Produkt-Clicks pro Session                                                                                                                                                                                                                                                                                                                 |  
|CR in % | Anzahl der unique gekauften SKUs geteilt durch die Anzahl an unique Suchen pro session.                                                                                                                                                                                                                                                                      |  
|CTR in % | Anzahl der unique Produkt-Detail-Seiten Aufrufe geteilt durch die Anzahl unique Suchen pro Session.                                                                                                                                                                                                                                                          |  
|Exit rate in % | Anzahl der Exits geteilt durch die Anzahl unique Suchen pro Session.                                                                                                                                                                                                                                                                                         |  
|Exits in % | Anzahl der Exits direkt nach dem ausliefern einer Suchergebnisseite.                                                                                                                                                                                                                                                                                         |  
|Findability in % | Die *findability* ist ein Maß für die Qualität des Such-Results und repräsentiert ein gewichtetes Mittel aus positiven and negativen Nutzer Signalen. *Negative signale* sind **exits**, **bounces**, **no-clicks** und **long search paths**. *Positive signale* sind **clicks**, **rate of clicks** auf der ersten Ergebnis-Seite, **carts** and **buys**. |  
|Human rate in % | Anzahl der unique Suchen pro Session echter Nutzern ohne Bots, referral-links, Kampagnen, etc. geteilt durch die Anzahl an unique Suchen pro Session.                                                                                                                                                                                                        |  
|No Result in % | Anzahl der unique Suchen pro Session die zu einem Null-Treffer geführt haben.                                                                                                                                                                                                                                                                                |  
|Orders | Anzahl aller Sessions die zu einem Kauf geführt haben.                                                                                                                                                                                                                                                                                                       |  
|Ranking in % | Anzahl der Produkt-Clicks eines Such-results gewichtet nach den Positionen geteilt durch die Anzahl aller Clicks für das Such-result.                                                                                                                                                                                                                        |
|Revenue | Der gesamte Umsatz der direkt über die Suche realisiert wurde.                                                                                                                                                                                                                                                                                               |  
|Uplift | Die prozentuale Zunahme an Suchen innerhalb des definierten Zeitraumes                                                                                                                                                                                                                                                                                       |  
|Value per Search (VPS) | Summe des Umsatz der direkt über die Suche realisiert wurde geteilt durch die Anzahl an unqiue Suchen.                                                                                                                                                                                                                                                       |

## Query view - Standard KPIs{#query-view---standard-kpis}

|KPI |Erklärung |
|--|--|
|Popularity |Anzahl der unique Suchen der letzten 28 Tage.|
|Samples    |Gesampelte Anzahl der unique Suchen die nicht von searchub gemapped wurden.|
|Reliability |Ein Maß für die Verlässlichkeit der anderen KPIs, dass das Alter und die Aussagekraft der erhobenen Daten verbindet. |
|Findability |Selbe KPI *Findability*, wie in den *Search Insights KPIs* |
|Sellability |Die *Sellability* ist ein Maß für die Kaufwahrscheinlichkeit nach einer Suche. Diese KPI repräsentiert ein gewichtetes Mittel der beiden Raten, `warenkorb-clicks/clicks` and `käufe/warenkorb-clicks`. |
|Confidence |Die Konfidenz entscheidet über den MasterQuery (diejenige Suchanfrage mit der höchsten Konfidenz wird zum MasterQuery (Ausnahmen, manuelle Übersteuerung). Sie repräsentiert ein gewichtetes Mittel der beiden KPIs Findability und Sellability. |

## Cluster view - Merge types{#cluster-view---merge-types}

|Merge type |Erklärung |  
|--|--|  
|User-Merge |Ein User Merge ist ein Merge der ausschließlich auf explizitem searchHub-user Feedback basiert (direct-merge, fingerprint-merge)|
|Confident-AI-Merge |Ein Merge der auf explizitem Wissen von searchHub basiert und eine hohe Konfidenz aufweist (known-misspellings, known-lemmata)|
|Concept-AI-Merge |Ein Merge der auf explizitem Wissen durch searchHub Concepts basiert (concepts sind kontext-sensitive synonyme - "TV" = "television")|
|Explicit-AI-Merge |Ein Merge auf explizitem searchHub-user AI-Training Feedback basiert ("highboard" is related to "highbord")|
|Implicit-AI-Merge |Ein Merge der implizit aus searchHub-user AI-Training Feedback gelernt wurde (weil "highboard" ähnlich zu "highbord" ist, lernt die AI dass auch "highboard weiss" ähnlich zu "highbord weiss" ist)|

## Cluster view - Query scores{#cluster-view---query-scores}

|Score |Erklärung |  
|--|--|  
|Confidence |Die Konfidenz entscheidet über den MasterQuery (diejenige Suchanfrage mit der höchsten Konfidenz wird zum MasterQuery (Ausnahmen, manuelle Übersteuerung).|
|Correctness |Dieser Wert ist ein Maß für die linguistische und kontextuelle Korrektheit der Suchanfrage und damit das Produkt aus WordValidation und LMProbability. |
|WordValidation |Dieser Wert ist ein Maß für die linguistische Korrektheit der einzelnen Terme einer Suchanfrage. Sind sämtliche Terme einer Suchanfrage linguistisch korrekt ist der Score = 1.0|
|LMProbability |Die kontextuelle Korrektheit einer Suchanfrage wird durch die language model probability ermittelt. Beispiel: Die Suchanfrage "damen herren" ist linguistisch korrekt und erhält somit einen WordValidationsScore von 1.0. Aber die LM-Probability ist 0.0 da die beiden Terme in Verbindung keinen Sinn ergeben. |
