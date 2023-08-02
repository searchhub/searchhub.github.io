# Bienvenue sur searchhub{#welcome-to-searchhub}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yiPe1gTCtbs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Bienvenue sur __search|hub__ par __CXP Commerce Experts__.
searchHub est la première plateforme d'optimisation des requêtes de recherche au monde, spécialisée dans l'augmentation du taux de conversion de votre recherche e-commerce existante. Nous aidons votre recherche de site web à mieux comprendre les requêtes de vos clients.

Dans cette vidéo, Jonathan Ross nous guide à travers la plateforme et montre comment les algorithmes d'apprentissage automatique nous aident à optimiser de manière autonome la recherche sur le site web.

# searchhub Formation de base - Comment fusionner des clusters?{#searchhub-basic-training---how-do-i-merge-clusters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3sKhtLw-1Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dans cette vidéo, nous vous montrons comment fusionner efficacement des clusters à l'aide de nos outils de filtrage.

# searchhub Formation de base - Fusion de clusters à l'aide du bouton d'empreinte digitale et de filtres prédéfinis.{#searchhub-basic-training--using-the-fingerprint-button-and-pre-defined-filters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_FzhKrHeyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Cette vidéo vise à montrer comment vous pouvez fusionner encore plus efficacement des clusters hautement similaires identifiés à l'aide du bouton d'empreinte digitale de searchhub en appliquant des critères de filtrage prédéfinis.

# searchhub Formation de base - Comment créer des redirections de recherche?{#searchhub-basic-training---how-to-set-up-redirects}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FAgJtXpWgiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Dans cette vidéo, nous vous familiarisons avec les 3 types différents de redirections de recherche proposés par searchhub.{#in-this-video-we-describe-the-3-different-types-of-redirects}

1. <a href="https://youtu.be/FAgJtXpWgiw?t=36">Query Cluster Redirects</a>
2. <a href="https://youtu.be/FAgJtXpWgiw?t=179">Semantic Search Redirects</a>
3. <a href="https://youtu.be/FAgJtXpWgiw?t=303">Exact Redirects</a>

# searchhub SearchInsights Formation{#searchhub-search-insights-training}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nC1I1aQ4uN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

searchhub Search Insights vous offre la possibilité de surveiller en continu les performances de votre recherche actuelle, d'identifier les potentiels et de dériver les optimisations les plus prometteuses.

## Dans cette vidéo, nous vous montrons comment:{#this-video-will-show-you-how-to}
1. Surveiller les performances de votre recherche
2. Identifier les principaux leviers pour une amélioration supplémentaire
3. Rapporter l'impact de vos optimisations
4. Suivre toutes les métriques pertinentes au fil du temps

# Keyboard Shortcuts{#keyboard-shortcuts}

Appuyez sur 'Shift'+'?' pour obtenir un aperçu de tous les raccourcis disponibles que vous pouvez utiliser pour rendre votre travail avec searchhub encore plus efficace.

# SmartSuggest{#smartsuggest}

SmartSuggest utilise un processus en plusieurs étapes pour déterminer les meilleures suggestions de recherche possibles. La base de ces suggestions est toujours constituée de celles qui présentent la plus grande confiance. D'autres suggestions de recherche issues de méthodes moins confiantes ne sont prises en compte que si un nombre suffisant de suggestions de recherche n'a pas encore été déterminé.
Voici un petit exemple qui illustre le processus décrit pour une requête de suggestion qui doit renvoyer 10 suggestions de recherche:


1. Recherche uniquement dans les libellés des clusters
2. Recherche également dans toutes les variantes des clusters
3. Recherche floue dans les libellés des clusters avec une distance d'édition maximale de 1
4. Recherche floue dans les libellés des clusters avec une distance d'édition maximale de 2

Si la première étape trouve >= 10 suggestions, nous renvoyons les suggestions. Si moins de 10 suggestions sont trouvées, la prochaine étape est lancée, et ainsi de suite, jusqu'à ce que le nombre souhaité de suggestions soit trouvé.

## Configuration de base - Fuzziness{#basic-settings---fuzziness}

Avec cette option, vous pouvez définir la proportion de suggestions de recherche floues dans les résultats globaux. La valeur par défaut est définie sur __precision__. Dans ce réglage, aucune suggestion de recherche floue _n'est_ générée. Cela peut entraîner occasionnellement une différence dans le nombre de suggestions de recherche générées. Si le réglage est modifié sur __recall__, le même nombre de suggestions de recherche est toujours généré en remplissant la liste avec des suggestions de recherche floues.

## Configuration de base - Trier{#basic-settings---sorting}

Avec ce paramètre, vous pouvez définir le tri des suggestions de recherche. La valeur par défaut est définie sur __confidence sorting__. Dans ce réglage, les suggestions de recherche sont d'abord triées par confiance, puis par le poids réglable. En alternative, vous pouvez également passer à __group sorting__. Dans ce réglage, les suggestions de recherche sont affichées par blocs en fonction des niveaux de confiance, en triant à l'intérieur des niveaux par poids. Le poids est déterminé par le réglage de classement que vous avez défini.

## Configuration de base - AI suggestion{#basic-settings---ai-suggestions}

Avec ce paramètre, vous pouvez définir le nombre maximal de suggestions AI à afficher. Si des suggestions AI existent pour une saisie utilisateur, elles sont toujours affichées en première position.
Les suggestions AI visent à maximiser à la fois la facilité de recherche et la capacité à vendre au sein d'une session de recherche. Elles sont donc basées sur le comportement de recherche analysé de vos clients.
Par exemple, prenons une requête de recherche assez générique telle que "hommes". L'IA de searchhub reconnaît qu'il s'agit d'une requête générique et génère automatiquement des suggestions de recherche alternatives pertinentes mais moins génériques, telles que "vêtements pour hommes", "pantalons pour hommes" ou "chaussures pour hommes", afin d'améliorer la spécificité de la facilité de recherche et de vente.
(Cette fonctionnalité est utilisable uniquement en conjonction avec le search-collector de searchhub.)

## Suggestions inspirantes de l'IA{#inspirational-ai-suggestions}

Nos suggestions inspirantes alimentées par l'IA vous permettent désormais d'afficher à vos utilisateurs des suggestions d'auto-complétion et de recherche avant même qu'ils ne commencent à taper, sur la base des mots-clés prédéfinis suivants:

1. MOST_INSPIRING  
   suggestions basées sur notre système de recommandation alimenté par l'IA qui utilise un mélange intelligent des quatre stratégies suivantes.
2. MOST_POPULAR  
   les suggestions sont basées sur les éléments les plus fréquemment recherchés.
3. MOST_POPULARITY_UPLIFT  
   sont choisies en fonction des recherches les plus tendances afin d'optimiser les résultats en fonction des tendances actuelles.
4. HIGHEST_FINDABILITY_UPLIFT  
   les suggestions sont choisies en fonction des recherches qui offrent l'expérience de recherche la plus facile, en minimisant les frictions.
5. HIGHEST_SELLABILITY_UPLIFT  
   les suggestions sont sélectionnées sur la base de recherches qui maximisent la probabilité d'événements d'ajout au panier afin d'optimiser la vendabilité.

# AI-Formation{#ai-training}

Avec la vue d'entraînement de l'IA (AI-Training view), vous pouvez aider searchhub à améliorer efficacement la qualité du regroupement en apportant vos connaissances spécifiques sur votre assortiment. Searchhub cherche à éviter les mauvaises décisions. Par conséquent, il peut arriver que searchhub ne soit pas suffisamment sûr pour prendre une décision autonome quant à savoir si deux mots ou expressions ont réellement la même signification ou non. Dans de tels cas précis, vous avez la possibilité de former l'IA pour l'améliorer davantage.

## Procédé de Formation{#training-process}

Pendant l'entraînement, vous verrez des paires de mots ou de phrases pour lesquelles searchhub a identifié une relation. Vous aurez ensuite la possibilité de choisir l'une des trois alternatives de rétroaction suivantes :

1. Non - Je suis certain que les deux mots ou phrases n'ont pas la même signification.
2. Je suis incertain - Je n'ai pas suffisamment d'informations pour prendre une décision sûre.
3. Oui - Je suis sûr à 100% que les deux mots ou phrases ont la même signification.

Veuillez accorder à searchhub le temps nécessaire pour traiter les commentaires que vous avez fournis pendant la nuit.

## Formation Histoire{#training-history}

Toutes les rétroactions sont enregistrées dans ce qu'on appelle l'historique d'entraînement et sont accessibles via l'icône d'historique. Vous pouvez consulter et éventuellement modifier tous les éléments de l'historique d'entraînement à tout moment.
Veuillez accorder à searchhub le temps nécessaire pour traiter les commentaires que vous avez fournis pendant la nuit. Si vous devez intervenir rapidement, vous pouvez toujours effectuer les modifications nécessaires dans la vue "Query Cluster" en fusionnant ou en désappariant les éléments.


## Formation manuele{#manual-training}
Seules certaines combinaisons de requêtes peuvent être sélectionnées pour l'entraînement de l'IA. SearchHub filtre déjà ces combinaisons en fonction de certains critères. Entre autres, la <a href="https://en.wikipedia.org/wiki/Edit_distance">edit distance</a> ne doit pas être supérieure à 2.

# Search Insights{#search-insights}

## Requêtes sous-performantes{#underperforming-queries}

Dans l'aperçu des "recherches sans résultat", vous avez la possibilité de choisir entre les deux vues suivantes:

1. Globale (Overall)  
   La vue par défaut, "Globale", comprend toutes les requêtes qui ont abouti à une absence de résultats dans au moins 50% des recherches.
2. Récentes (Recent)  
   Avec l'option "Récentes", vous pouvez affiner davantage la liste. En sélectionnant cette option, seules les requêtes qui ont abouti à une absence de résultats dans au moins 50% des recherches le jour où elles ont été consultées pour la dernière fois seront affichées.

## Requêtes les plus populaires{#top-queries}

Explication des icônes différentes de la colonne d'informations

![high entropy](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/entropy.png)  
Cet icône indique des requêtes de recherche non uniques. Ces requêtes nécessitent souvent plusieurs interactions supplémentaires (filtres, tri) avant que les chercheurs ne trouvent les produits qu'ils recherchent.

![bad ranking](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/ranking.png)  
Cet icône indique des requêtes de recherche dont le classement des produits présente un potentiel d'amélioration significatif, car la majorité des produits cliqués et achetés ne se trouvent pas aux meilleures positions.

![bad relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/relevance.png)  
Cet icône indique des requêtes de recherche dont le résultat conduit très souvent les clients à quitter la boutique. Cela est souvent un indicateur d'un résultat totalement irrélevant.

![neutral relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/neutral_relevance.png)  
Cet icône indique des requêtes de recherche qui n'entraînent aucune interaction de la part des clients. Cela est souvent un indicateur de résultats partiellement pertinents.

# Glossaire{#glossary}

## Search Insights - KPIs{#search-insights---kpis}

| KPI                    | Explication                                                                                                                                                                                                                                                                                                                                                                                                                             |  
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Suggest-CTR            | Le nombre de clics uniques sur les suggestions divisé par le nombre de suggestions uniques.                                                                                                                                                                                                                                                                                                                                             |
| Suggest-MRR            | La moyenne quotidienne du Mean Reciprocal Rank (un indicateur de la qualité du classement des suggestions) des suggestions cliquées.                                                                                                                                                                                                                                                                                                    |
| #Searches              | *Total Unique Searches* Le nombre de recherches uniques par visiteur.                                                                                                                                                                                                                                                                                                                                                                   |  
| Category               | Les catégories de produits ayant la plus grande proportion d'interactions pour chaque requête de recherche.                                                                                                                                                                                                                                                                                                                             |
| Clicks                 | Le nombre de clics uniques sur les produits par session.                                                                                                                                                                                                                                                                                                                                                                                |  
| CR %                   | Le nombre de SKU (unités de gestion des stocks) uniques achetés divisé par le nombre de recherches uniques par session.                                                                                                                                                                                                                                                                                                                 |
| CTR %                  | Le nombre de vues uniques de pages de détails de produits divisé par le nombre de recherches uniques par session.                                                                                                                                                                                                                                                                                                                       |  
| Exit rate %            | Le nombre de sorties divisé par le nombre de recherches uniques par session.                                                                                                                                                                                                                                                                                                                                                            |  
| Exits %                | Le nombre de sorties immédiatement après l'affichage d'une page de résultats de recherche.                                                                                                                                                                                                                                                                                                                                              |  
| Findability %          | La findabilité est une mesure de la qualité des résultats de recherche et représente une moyenne pondérée des signaux positifs et négatifs des utilisateurs. Les signaux négatifs sont les **sorties**, les **rebonds**, les **absences de clics** et les **parcours de recherche longs**. Les signaux positifs sont les **clics**, le **taux de clics sur la première page** de résultats, les **ajouts au panier** et les **achats**. |  
| Human rate %           | Le nombre de recherches uniques par session effectuées par de véritables utilisateurs, excluant les bots, les liens de référence, les campagnes, etc., divisé par le nombre de recherches uniques par session.                                                                                                                                                                                                                          |  
| No Result %            | Le nombre de recherches uniques par session qui ont abouti à un résultat nul.                                                                                                                                                                                                                                                                                                                                                           |  
| Orders                 | Le nombre total de sessions qui ont abouti à un achat.                                                                                                                                                                                                                                                                                                                                                                                  |  
| Ranking %              | Le nombre de clics sur les produits d'un résultat de recherche pondéré en fonction des positions, divisé par le nombre total de clics pour ce résultat de recherche.                                                                                                                                                                                                                                                                    |
| Revenue                | Le chiffre d'affaires total réalisé directement via la recherche.                                                                                                                                                                                                                                                                                                                                                                       |  
| Uplift                 | L'augmentation en pourcentage des recherches pendant la période définie.                                                                                                                                                                                                                                                                                                                                                                |  
| Value per Search (VPS) | La somme du chiffre d'affaires réalisé directement via la recherche, divisée par le nombre de recherches uniques.                                                                                                                                                                                                                                                                                                                       |

## Query view - Indicateurs KPI standard{#query-view---standard-kpis}

| KPI         | Explication                                                                                                                                                                                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Popularity  | Le nombre de recherches uniques des 28 derniers jours..                                                                                                                                                                                             |
| Samples     | Le nombre d'occurrences échantillonnées de recherches uniques qui n'ont pas été mappées par searchHub.                                                                                                                                              |
| Reliability | EUne mesure de la fiabilité des autres indicateurs clés de performance qui combine l'âge et la pertinence des données collectées.                                                                                                                   |
| Findability | Le même indicateur clé de performance (KPI) de "Findability" que celui utilisé dans les "KPIs de Search Insights".                                                                                                                                  |
| Sellability | La *Sellability* est une mesure de la probabilité d'achat après une recherche. Cet indicateur clé de performance (KPI) représente une moyenne pondérée des deux taux, soit "clics dans le panier/total des clics" et "achats/clics dans le panier". |
| Confidence  | La "confiance" décide du "MasterQuery" (la requête de recherche avec la plus haute confiance devient le "MasterQuery", sauf exceptions ou intervention manuelle). Elle représente une moyenne pondérée des deux KPI "Findability" et "Sellability". |

## Cluster view - Types de fusion{#cluster-view---merge-types}

| Merge type         | Explication                                                                                                                                                                                                                                                    |  
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| User-Merge         | Un fusionnement utilisateur est un fusionnement basé exclusivement sur les retours d'expérience explicites des utilisateurs de searchhub (fusion directe, fusion par empreinte).                                                                               |
| Confident-AI-Merge | Un fusionnement basé sur les connaissances explicites de searchhub et ayant une forte confiance (fautes d'orthographe connues, lemmes connus).                                                                                                                 |
| Concept-AI-Merge   | Un fusionnement basé sur les connaissances explicites par le biais des concepts de searchhub (les concepts sont des synonymes sensibles au contexte - "TV" = "télévision").                                                                                    |
| Explicit-AI-Merge  | Un fusionnement basé sur les commentaires explicites de l'entraînement de l'IA utilisateur de searchHub ("highboard" est lié à "highbord").                                                                                                                    |
| Implicit-AI-Merge  | Un fusionnement qui a été appris implicitement à partir des commentaires de l'entraînement de l'IA utilisateur de searchhub (parce que "highboard" est similaire à "highbord", l'IA apprend également que "highboard blanc" est similaire à "highbord blanc"). |

## Cluster view - Scores de requête{#cluster-view---query-scores}

| Score          | Explication                                                                                                                                                                                                                                                                                                                                                         |  
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Confidence     | La confiance décide du MasterQuery (la requête de recherche avec la plus haute confiance devient le MasterQuery, sauf exceptions, surrégulation manuelle).                                                                                                                                                                                                          |
| Correctness    | Ce chiffre est une mesure de l'exactitude linguistique et contextuelle de la requête de recherche, et donc le produit de la WordValidation et de la LMProbability.                                                                                                                                                                                                  |
| WordValidation | Cette valeur est une mesure de l'exactitude linguistique des termes individuels d'une requête de recherche. Si tous les termes d'une requête de recherche sont linguistiquement corrects, le score est de 1.0.                                                                                                                                                      |
| LMProbability  | La pertinence contextuelle d'une requête de recherche est déterminée par la probabilité du modèle linguistique. Par exemple, la requête de recherche "femme homme" est linguistiquement correcte et obtient donc un score de validation de mot de 1.0. Cependant, la probabilité du modèle linguistique est de 0.0 car les deux termes ne font aucun sens ensemble. |
