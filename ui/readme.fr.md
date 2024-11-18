# Bienvenue sur searchHub{#welcome-to-searchhub}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yiPe1gTCtbs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Bienvenue sur __searchHub__ par __CXP Commerce Experts__.
searchHub est la première plateforme d'optimisation des requêtes de recherche au monde, spécialisée dans l'augmentation du taux de conversion de votre recherche e-commerce existante. Nous aidons votre recherche de site web à mieux comprendre les requêtes de vos clients.

Dans cette vidéo, Jonathan Ross nous guide à travers la plateforme et montre comment les algorithmes d'apprentissage automatique nous aident à optimiser de manière autonome la recherche sur le site web.

# searchHub Formation de base - Comment fusionner des clusters?{#searchhub-basic-training---how-do-i-merge-clusters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3sKhtLw-1Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dans cette vidéo, nous vous montrons comment fusionner efficacement des clusters à l'aide de nos outils de filtrage.

# searchHub Formation de base - Fusion de clusters à l'aide du bouton d'empreinte digitale et de filtres prédéfinis.{#searchhub-basic-training--using-the-fingerprint-button-and-pre-defined-filters}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_FzhKrHeyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Cette vidéo vise à montrer comment vous pouvez fusionner encore plus efficacement des clusters hautement similaires identifiés à l'aide du bouton d'empreinte digitale de searchHub en appliquant des critères de filtrage prédéfinis.

# searchHub Formation de base - Comment créer des redirections de recherche?{#searchhub-basic-training---how-to-set-up-redirects}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FAgJtXpWgiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Dans cette vidéo, nous vous familiarisons avec les 3 types différents de redirections de recherche proposés par searchHub.{#in-this-video-we-describe-the-3-different-types-of-redirects}

1. <a href="https://youtu.be/FAgJtXpWgiw?t=36">Query Cluster Redirects</a>
2. <a href="https://youtu.be/FAgJtXpWgiw?t=179">Semantic Search Redirects</a>
3. <a href="https://youtu.be/FAgJtXpWgiw?t=303">Exact Redirects</a>

# searchHub SearchInsights Formation{#searchhub-search-insights-training}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nC1I1aQ4uN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

searchHub searchInsights vous offre la possibilité de surveiller en continu les performances de votre recherche actuelle, d'identifier les potentiels et de dériver les optimisations les plus prometteuses.

## Dans cette vidéo, nous vous montrons comment:{#this-video-will-show-you-how-to}
1. Surveiller les performances de votre recherche
2. Identifier les principaux leviers pour une amélioration supplémentaire
3. Rapporter l'impact de vos optimisations
4. Suivre toutes les métriques pertinentes au fil du temps

# Keyboard Shortcuts{#keyboard-shortcuts}

Appuyez sur 'Shift'+'?' pour obtenir un aperçu de tous les raccourcis disponibles que vous pouvez utiliser pour rendre votre travail avec searchHub encore plus efficace.

# smartSuggest{#smartsuggest}

smartSuggest utilise un processus en plusieurs étapes pour déterminer les meilleures suggestions de recherche possibles. La base de ces suggestions est toujours constituée de celles qui présentent la plus grande confiance. D'autres suggestions de recherche issues de méthodes moins confiantes ne sont prises en compte que si un nombre suffisant de suggestions de recherche n'a pas encore été déterminé.
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
Par exemple, prenons une requête de recherche assez générique telle que "hommes". L'IA de searchHub reconnaît qu'il s'agit d'une requête générique et génère automatiquement des suggestions de recherche alternatives pertinentes mais moins génériques, telles que "vêtements pour hommes", "pantalons pour hommes" ou "chaussures pour hommes", afin d'améliorer la spécificité de la facilité de recherche et de vente.
(Cette fonctionnalité est utilisable uniquement en conjonction avec le search-collector de searchHub.)

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

# Cluster de requêtes{#query-cluster}

Le comportement par défaut lors de la recherche dans les grappes est une combinaison de différentes techniques dans le but de fournir le meilleur résultat général.
Cependant, il est parfois nécessaire de trouver une seule requête qui corresponde exactement à ce que vous avez saisi dans le champ de recherche. Pour ce faire, il suffit d'utiliser la syntaxe suivante
utilisez simplement cette syntaxe spéciale : préfixez votre requête par un **+**.  
Par exemple, **+chemise femme**.  
Ces recherches spéciales renvoient soit un seul groupe si une variante correspond exactement à la requête saisie, soit un résultat vide s'il n'existe aucun groupe correspondant à cette requête.

# Redirections de requêtes{#redirects}
Les redirections actives sont testées quotidiennement pour vérifier leur validité. Le feu tricolore indique le statut actuel de ces tests :
- Vert : La redirection est valide (code HTTP 200).
- Gris : Soit la redirection est désactivée, soit elle n'a pas encore été testée.
- Jaune : La redirection fonctionne, mais elle renvoie à une autre URL (302). Peut-être devriez-vous envisager d'utiliser l'URL finale ?
- Rouge : Une erreur s'est produite, la redirection est probablement défectueuse. Cependant, si l'erreur est un code 401, 403 ou 429, cela peut indiquer que votre système bloque notre vérification de l'URL de redirection. Veuillez contacter notre support pour discuter des options permettant à notre bot amical d'effectuer la vérification.

# Entraînement de l'IA{#ai-training}

Avec la vue d'entraînement de l'IA (AI-Training view), vous pouvez aider searchHub à améliorer efficacement la qualité du regroupement en apportant vos connaissances spécifiques sur votre assortiment. searchHub cherche à éviter les mauvaises décisions. Par conséquent, il peut arriver que searchHub ne soit pas suffisamment sûr pour prendre une décision autonome quant à savoir si deux mots ou expressions ont réellement la même signification ou non. Dans de tels cas précis, vous avez la possibilité de former l'IA pour l'améliorer davantage.

## Procédé de Formation{#training-process}

Pendant l'entraînement, vous verrez des paires de mots ou de phrases pour lesquelles searchHub a identifié une relation. Vous aurez ensuite la possibilité de choisir l'une des trois alternatives de rétroaction suivantes :

1. Non - Je suis certain que les deux mots ou phrases n'ont pas la même signification.
2. Je suis incertain - Je n'ai pas suffisamment d'informations pour prendre une décision sûre.
3. Oui - Je suis sûr à 100% que les deux mots ou phrases ont la même signification.

Veuillez accorder à searchHub le temps nécessaire pour traiter les commentaires que vous avez fournis pendant la nuit.

## Formation Histoire{#training-history}

Toutes les rétroactions sont enregistrées dans ce qu'on appelle l'historique d'entraînement et sont accessibles via l'icône d'historique. Vous pouvez consulter et éventuellement modifier tous les éléments de l'historique d'entraînement à tout moment.
Veuillez accorder à searchHub le temps nécessaire pour traiter les commentaires que vous avez fournis pendant la nuit. Si vous devez intervenir rapidement, vous pouvez toujours effectuer les modifications nécessaires dans la vue "Query Cluster" en fusionnant ou en désappariant les éléments.


## Formation manuele{#manual-training}
Seules certaines combinaisons de requêtes peuvent être sélectionnées pour l'entraînement de l'IA. searchHub filtre déjà ces combinaisons en fonction de certains critères. Entre autres, la <a href="https://en.wikipedia.org/wiki/Edit_distance">edit distance</a> ne doit pas être supérieure à 2.

# searchInsights{#search-insights}

Pour tous les termes de recherche dans searchInsights, la règle suivante s'applique : il s'agit toujours des termes de recherche ("searchQuery") effectivement envoyés au moteur de recherche. Il peut s'agir du terme de recherche saisi par l'utilisateur ("userQuery") s'il n'a pas été mappé à un MasterQuery. Dans tous les autres cas, il s'agit du MasterQuery.

Les vues suivantes sont disponibles dans searchInsights.

## Requêtes les plus populaires{#top-queries}

Dans le tableau "Popular Queries", les termes de recherche ayant le volume le plus élevé sont listés.

Dans le tableau "Trending Queries", les termes de recherche ayant connu une augmentation significative du volume de recherche par rapport à la même période précédente sont listés. L'augmentation correspondante du volume de recherche est indiquée dans la colonne Uplift.

Dans les deux tableaux, les colonnes peuvent être triées plusieurs fois en appuyant sur Shift+Clic ou Ctrl+Clic sur l'en-tête de colonne (⌘+Clic sur Mac).

*Explication des icônes différentes de la colonne d'informations*

Dans les deux tableaux, on peut voir les icônes suivantes.

![high entropy](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/entropy.png)  
Cet icône indique des requêtes de recherche non uniques. Ces requêtes nécessitent souvent plusieurs interactions supplémentaires (filtres, tri) avant que les chercheurs ne trouvent les produits qu'ils recherchent.

![bad ranking](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/ranking.png)  
Cet icône indique des requêtes de recherche dont le classement des produits présente un potentiel d'amélioration significatif, car la majorité des produits cliqués et achetés ne se trouvent pas aux meilleures positions.

![bad relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/relevance.png)  
Cet icône indique des requêtes de recherche dont le résultat conduit très souvent les clients à quitter la boutique. Cela est souvent un indicateur d'un résultat totalement irrélevant.

![neutral relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/neutral_relevance.png)  
Cet icône indique des requêtes de recherche qui n'entraînent aucune interaction de la part des clients. Cela est souvent un indicateur de résultats partiellement pertinents.

## Requêtes sous-performantes{#underperforming-queries}

Le graphique "Évolution sur la période d'analyse" montre la proportion de requêtes de recherche (uniques par session) avec des KPI particulièrement bas parmi toutes les requêtes. Pour le CTR, le CR et le Findability™, cela correspond au quantile le plus bas, tandis que pour les "Sans Résultats," il s'agit de toutes les requêtes avec un taux de 0-résultat supérieur à 50% pour le jour en question.

Le tableau "Termes de recherche sans résultat" répertorie les termes de recherche ayant un taux de 0-résultat supérieur à 50%. Deux vues sont disponibles :

1. Global
   Le paramètre par défaut Global inclut tous les termes de recherche qui, dans au moins 50% des cas, n'ont donné aucun résultat.
2. Récent
   Le paramètre Récent restreint davantage la liste. Seuls sont affichés les termes de recherche qui, le jour où ils ont été enregistrés pour la dernière fois, ont conduit à un 0-résultat dans au moins 50% des cas. Si un terme de recherche sans résultat a été ajouté à un cluster avec une MasterQuery au cours de la période d'analyse, il continuera à être affiché ici pour cette période.

Les tableaux "Termes de recherche avec CTR bas," "Termes de recherche avec Findability™ bas," et "Termes de recherche avec CR bas" affichent les termes de recherche du quantile le plus faible pour chaque KPI. La limite supérieure du quantile, déterminée dynamiquement pour la période d'analyse, est indiquée sous forme de pourcentage. Cela signifie également que les pourcentages affichés ne s'appliquent qu'à la période d'analyse sélectionnée.

Le tableau "Termes de recherche avec CR bas" est également filtré pour n'inclure que les termes de recherche ayant un CR supérieur à 0%.

## Performance Charts

Le graphique "Évolution des recherches sans résultat" montre la proportion de toutes les requêtes de recherche (et non des termes de recherche) sans résultat par rapport à toutes les requêtes de recherche.


# Glossaire{#glossary}

Définition de quelques KPI et termes utilisés par searchHub.

## Generale{#glossary---general}

| KPI           | Explanation                                                                                                                                         |  
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|  
| Unique        | Unique signifie qu'une action est comptabilisée une seule fois par session. Si un utilisateur recherche ou clique sur la même chose cinq fois, cela ne sera compté qu'une seule fois. |
| Terme de recherche | Le contenu d'une requête de recherche, c'est-à-dire le texte qui a été recherché | 
| Requête de recherche | Une requête de recherche unique. Un terme de recherche peut avoir été utilisé dans plusieurs requêtes différentes | 
| userQuery | Le terme de recherche que l'utilisateur a saisi dans la barre de recherche | 
| masterQuery | Le terme de recherche que searchHub a identifié comme étant la meilleure version du userQuery (peut être identique au userQuery) | 
| searchQuery | Le terme de recherche que searchHub a transmis au moteur de recherche (soit le userQuery soit le masterQuery) | 
| Suggest-Click | Un clic sur un terme de recherche suggéré par smartSuggest | 
| Product-Click | Un clic sur un produit affiché dans les résultats de recherche (pas dans les suggestions !) |

## searchInsights - KPIs{#search-insights---kpis}

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
| Samples     | «Quelle était la qualité de cette requête» avant que searchHub ne modifie. Et combien d’échantillons (recherches non modifiées) avons-nous de cette période?                                                                                        |
| Reliability | EUne mesure de la fiabilité des autres indicateurs clés de performance qui combine l'âge et la pertinence des données collectées.                                                                                                                   |
| Findability | Le même indicateur clé de performance (KPI) de "Findability" que celui utilisé dans les "KPIs de searchInsights".                                                                                                                                  |
| Sellability | La *Sellability* est une mesure de la probabilité d'achat après une recherche. Cet indicateur clé de performance (KPI) représente une moyenne pondérée des deux taux, soit "clics dans le panier/total des clics" et "achats/clics dans le panier". |
| Confidence  | La "confiance" décide du "MasterQuery" (la requête de recherche avec la plus haute confiance devient le "MasterQuery", sauf exceptions ou intervention manuelle). Elle représente une moyenne pondérée des deux KPI "Findability" et "Sellability". |

## Cluster view - Types de fusion{#cluster-view---merge-types}

| Merge type         | Explication                                                                                                                                                                                                                                                    |  
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| User-Merge         | Un fusionnement utilisateur est un fusionnement basé exclusivement sur les retours d'expérience explicites des utilisateurs de searchHub (fusion directe, fusion par empreinte).                                                                               |
| Confident-AI-Merge | Un fusionnement basé sur les connaissances explicites de searchHub et ayant une forte confiance (fautes d'orthographe connues, lemmes connus).                                                                                                                 |
| Concept-AI-Merge   | Un fusionnement basé sur les connaissances explicites par le biais des concepts de searchHub (les concepts sont des synonymes sensibles au contexte - "TV" = "télévision").                                                                                    |
| Explicit-AI-Merge  | Un fusionnement basé sur les commentaires explicites de l'entraînement de l'IA utilisateur de searchHub ("highboard" est lié à "highbord").                                                                                                                    |
| Implicit-AI-Merge  | Un fusionnement qui a été appris implicitement à partir des commentaires de l'entraînement de l'IA utilisateur de searchHub (parce que "highboard" est similaire à "highbord", l'IA apprend également que "highboard blanc" est similaire à "highbord blanc"). |

## Cluster view - Scores de requête{#cluster-view---query-scores}

| Score          | Explication                                                                                                                                                                                                                                                                                                                                                         |  
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Confidence     | La confiance décide du MasterQuery (la requête de recherche avec la plus haute confiance devient le MasterQuery, sauf exceptions, surrégulation manuelle).                                                                                                                                                                                                          |
| Correctness    | Ce chiffre est une mesure de l'exactitude linguistique et contextuelle de la requête de recherche, et donc le produit de la WordValidation et de la LMProbability.                                                                                                                                                                                                  |
| WordValidation | Cette valeur est une mesure de l'exactitude linguistique des termes individuels d'une requête de recherche. Si tous les termes d'une requête de recherche sont linguistiquement corrects, le score est de 1.0.                                                                                                                                                      |
| LMProbability  | La pertinence contextuelle d'une requête de recherche est déterminée par la probabilité du modèle linguistique. Par exemple, la requête de recherche "femme homme" est linguistiquement correcte et obtient donc un score de validation de mot de 1.0. Cependant, la probabilité du modèle linguistique est de 0.0 car les deux termes ne font aucun sens ensemble. |

## Vue de cluster - Filtre de cluster

| Filtre	 | Explication                                                                                                                                                                                                                                                                                                                                                         |  
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| Sans Master-Query	| Clusters qui n'ont pas été exportés en raison du manque de confiance de searchHub dans la sélection d'une requête principale. |
| Master-Query Manuellement Outrepassé	| Clusters présentant une Master-Query sélectionnée explicitement par l'utilisateur, contrairement à l'inclination de searchHub vers une autre basée sur les indicateurs de performance clés (KPI). |
| Fusionné	| Clusters qui ont été consolidés ou combinés. |
| Non Fusionné	| Clusters qui n'ont pas été consolidés ou non combinés. |
| Master-Query Manuellement Sélectionné	| Clusters avec une Master-Query sélectionnée manuellement, indépendamment de la possibilité que le système choisisse la même ou une Master-Query différente. |
| Requête Manuellement Ajoutée	| Clusters incorporant une requête ou des requêtes insérées manuellement. |
| Avec Requête de Campagne	| Clusters contenant des requêtes signalées comme étant curatées. |
| Avec Requête de Suggest-Whitelist	| Clusters dans lesquels l'étiquette Suggest a été ajoutée ou modifiée par un utilisateur, divergeant de l'étiquette automatiquement sélectionnée.   |
| Fusionné Automatiquement	| Clusters qui ont été fusionnés automatiquement par searchHub en utilisant l'IA et/ou les commentaires implicites/explicites de l'utilisateur. |
| Tous les Résultats à Zéro	| Clusters où le matchCount pour toutes les requêtes est égal à zéro. |
| Listes Blanches Potentielles |	Clusters générant un trafic et des événements substantiels sans qu'aucune requête connue ne soit identifiée par searchHub. |
| Fusions Potentielles	| Clusters générant un trafic et des événements importants où searchHub a identifié des fusions potentielles mais n'a pas la confiance nécessaire pour les exécuter. |
| Étiquette Validée	| Clusters dans lesquels searchHub identifie l'étiquette représentant la requête contenant les informations les plus précieuses. |
| Étiquette Non Validée	| Clusters dans lesquels searchHub n'a pas pu identifier l'étiquette représentant la requête contenant les informations les plus précieuses. |
| Master-Query avec peu de résultats	| Clusters avec des Master-Queries (MQ) qui fournissent des résultats mais qui, en moyenne, génèrent cinq résultats ou moins. |
