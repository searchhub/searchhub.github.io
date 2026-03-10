# Welcome to searchHub

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yiPe1gTCtbs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Welcome to __searchHub__ from __CXP Commerce Experts__.
We are the world's first search query optimization machine specializing in increasing the conversion from your current site-search. __We make your site-search understand humans__.

In this video, Jonathan Ross walks us through how Machine Learning Algorithms are able to assist our customers in autonomous site-search optimization.

# searchHub Basic Training - How do I Merge Clusters?

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3sKhtLw-1Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video will introduce how to merge clusters using our category and filter selection tools.

# searchHub Basic Training — Using the Fingerprint Button and Pre-Defined Filters

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_FzhKrHeyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video will introduce _how to use the fingerprint button to confirm highly similar clusters identified by searchHub_, as well as, using pre-defined filters to more
specifically focus optimization efforts.

# searchHub Basic Training - How To Set Up Redirects

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FAgJtXpWgiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## In this video we describe the 3 different types of redirects.

1. <a href="https://youtu.be/FAgJtXpWgiw?t=36">Query Cluster Redirects</a>
2. <a href="https://youtu.be/FAgJtXpWgiw?t=179">Semantic Search Redirects</a>
3. <a href="https://youtu.be/FAgJtXpWgiw?t=303">Exact Redirects</a>

# searchHub searchInsights Training

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nC1I1aQ4uN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

searchHub searchInsights allows you to audit the performance, and optimize the quality of any site search engine on the market, making ecommerce site search perform more like a human.

## This video will show you how to:
1. Audit Search Engine Performance
2. Identify the greatest impact zones of optimization
3. Report on the success of your optimizations
4. Track daily and weekly progress

# Keyboard Shortcuts

Press 'Shift'+'?' to open up an overview of all supported shortcuts. This and all those shortcuts work anywhere in the UI as long as the cursor focus is not placed on an input field.

# smartSuggest - Overview{#smartsuggest-overview}

smartSuggest supports several suggestion types:

### Query Suggestions{#query-suggestions}
The query suggestions are generated following a staged controlled precision approach. We initially start with the stage where we are most confident and only add additional
suggestions from the less confident stages, if we are not able to provide the amount of suggestions requested. Here is a short example for a request to return 10 suggestions:

1. Search only in the cluster label
2. Search in all variants of the cluster
3. Fuzzy search in the cluster label with edit distance 1
4. Fuzzy search in the cluster label with edit distance 2

If the first stage finds >= 10 suggestions, we return the suggestions. If less than 10 suggestions are found, the next stage is initiated, etc. until the desired amount of
suggestions has been found.

### Product Suggestions{#product-suggestions}
Based on the Query Suggestions and the observed user behavior smartSuggest can provide contextualized product suggestions.

### Scoped Suggestions{#scoped-suggestions}
Combine Query Suggestion with category (scope) information.

### Contextual or behavioral Suggestions{#contextual-behavioral-suggestions}
Based on the user's context (for example a referer-URL), contextualized suggestions can be shown before or after the user starts typing.  

# smartSuggest - Configuration{#smartsuggest-configuration}

## smartSuggest - Ranking Rules{#smartsuggest-ranking-rules}
Ranking Rules:
With Ranking rules you can define which specific KPI(s) should have most influence on the selected query suggestions. Select one of the available "Ranking Boost Type" and hit the "Add boost rule"

## smartSuggest - Display Settings{#display-settings}

### Pre-suggest Settings{#pre-suggest-settings}
SmartSuggest offers contextualized Pre-Suggestions that appear before users start typing. These can be enhanced using user context, such as the active URL, to prioritize relevant suggestions for example, favoring items from a category page being viewed. When context is unavailable or confidence is low, SmartSuggest falls back to the default Pre-Suggestion type defined in the settings.

#### Default Pre-Suggest Type{#default-pre-suggest-type}
based on your Merchandisng Strategy you can choose from the following available Pre-Suggestion types:

1. MOST_INSPIRING  
   suggestions based on our AI-powered recommendation system that uses an intelligent blend of the following four strategies.
2. MOST_POPULAR  
   suggestions are based on the most frequently searched items.
3. MOST_POPULARITY_UPLIFT  
   suggestions are chosen based on the most trending searches to optimize for current trends.
4. HIGHEST_FINDABILITY_UPLIFT  
   suggestions are chosen based on searches that provide the easiest search experience, minimizing friction.
5. HIGHEST_SELLABILITY_UPLIFT  
   suggestions are selected based on searches that maximize the likelihood of add-to-cart events to optimize for sellability.

### Scope Settings{#smartsuggest-scope-settings}
For ambigious queries we use observed user behaviour to scope the query to the most probable intents. A query like "women" for example might lead to "women > clothes" and "women > beauty" which helps your users to formulate more precise queries.

#### Expand scopes{#smartsuggest-expand-scopes}
Defines if scopes should be activated and if the query suggestions should be expanded by the separate scoped Query Suggestions
#### Maximum number of expanded scopes{#maximum-number-of-expanded-scope} 
Specifies the maximum number of expanded scopes that will be returned in the result.
#### Scope separator{#scope-separator}
The separator used to distinguish between queries and scoped queries when scopes are displayed in their expanded form.

### Product Settings{#product-settings}
Based on the Query Suggestions and the observed user behavior smartSuggest can provide contextualized product suggestions.
These product suggestions continuously learn by combining intent-to-product affinity with behavioral signals and go beyond simple keyword matching.

#### Number of retrieved products{#number-of-retrieved-products}
Defines how many products are displayed within the suggestion results for a specific query.

## smartSuggest - Advanced{#smartsuggest-advanced}

### Always use Fuzzy Search{#always-use-fuzzy-search}
Disabled (default): Fuzzy stages are skipped if earlier stages already return any suggestions—even if the total is lower than the requested number. As a result, you might receive fewer suggestions than requested (e.g., 1 instead of 10).
If enabled fuzzy stages are executed whenever earlier stages do not produce the requested number of suggestions, helping fill the remaining slots with fuzzy matches.

### Sort by groups{#sort-by-groups}
Controls the order in which suggestions are returned by the module. The default is set to confidence sorting where the suggestions are primarily sorted by confidence and subsequently by weight. Alternatively you could set it to group sorting where the suggestions are primarily sorted by type of stage(s) and subsequently sorted on weight within their groups. The weight is determined by the ranking settings you define.

### Behavior-Improved Suggestions{#behavior-improved-suggestions}
This setting controls how many behavior improved suggestions get added if available.
These suggestions improve product findability and conversion by learning from users' search refinement behavior.
For a broad query like "men," we may add sharped-suggestions like "men's fashion" or "men's shoes."
If search results are poor or missing, we may add relaxed-suggestions based on previously successful searches like "men's fashion" for an underperforming query like "men's fashion slim-fit".

# Query-Cluster
We use an intelligent, slightly error-tolerant search for the clusters list with the goal of providing the best general-purpose result.
However, sometimes it's necessary to find a single query that exactly matches what you enter into the search box. For this purpose,
simply prefix your query with a **+**.  
E.g., **+women shirt**.  
These special searches return either a single cluster if any variant matches the entered query exactly, or an empty result if no query in all clusters matches.

# Redirects
Active Redirects will get tested daily for validity. The traffic light indicates the current status of these tests:
- Green: Redirect is valid (http status 200)
- Grey: Either the Redirect is disabled or we have not yet tested it
- Yellow: The redirect works, but it is again redirected to a different URL (302). Maybe consider to use the final URL?
- Red: Some error occured, the redirect is most likely broken. However, if the error is a status code 401, 403 or 429, this might indicate that your system is blocking us from verifying the redirect URL. Please contact our support to discuss options on how to allow our friendly bot to perform the check.

# AI-Training

The AI-Training view enables you to train and improve searchHub’s clustering at large scale. There will always be some cases where searchHub on its own might not be confident
enough to decide if two words or search phrases are similar enough to merge them together. For these particular cases we created the AI-Training view. In this view we expose the
most prominent of these cases and give you as a users the chance to give feedback.

## Training process

A pair of queries that might likely be related to each other will be presented to you at the top. To be able to better judge if these queries are really related to each other
you’ll also be presented related clusters for each of the queries.
Based on this information you’ll be able to give the following feedback:

1. No - I’m sure that both queries have a different meaning.
2. Not sure - I have not enough information or confidence to give feedback.
3. Yes - I’m 100% sure that both queries have exactly the same meaning.

Please **note** that your feedback will only affect the clusters when our AI runs the next night.

## Training History

Your feedback will be stored in the training history which can be accessed via the history icon. In the Training history view you’ll be able to check and edit all of your given
feedback. Please **note** that any change will only affect the clusters when our AI runs the next night. If you need to fix something quickly, you
can still head over to the query cluster view and merge/unmerge a cluster manually.

## Manual training
Only certain combinations of queries can be selected for AI training. searchHub already pre-filters these combinations according to certain criteria. Among other things, the <a href="https://en.wikipedia.org/wiki/Edit_distance">edit distance</a> must not be greater than 2.

# searchInsights{#search-insights}

For all search terms in searchInsights, the following applies: These are always the search terms ("searchQuery") actually sent to the search engine. This may be the search term entered by the user ("userQuery") if it has not been mapped to a MasterQuery. In all other cases, it is the MasterQuery.

The following views are available in searchInsights.

## Popular Queries{#top-queries}

In the "Popular Queries" table, search terms with the highest volume are listed.

In the "Trending Queries" table, search terms are listed that have experienced a significant increase in search volume compared to the same previous period. The corresponding increase in search volume is indicated in the Uplift column.

In both tables, the columns can be sorted multiple times by Shift+Click or Ctrl+Click on the column header (⌘+Click on Mac).

*Explanation of the info column icons*

Both tables may contain one or more of the following icons.

![high entropy](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/entropy.png)  
The initial type of query detection involves identifying broad queries, which are queries that require multiple refinements before users can ultimately locate the products they seek.

![bad ranking](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/ranking.png)  
The second type of query detection involves identifying queries where search result ranking requires improvement. This is because users have to navigate too deeply into the result set before finding the desired products.

![bad relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/relevance.png)  
The third type of query detection involves identifying queries with a high likelihood of severe relevance issues. In these cases, users become so frustrated with the search results that they abandon the online store.

![neutral relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/neutral_relevance.png)  
The fourth type of query detection involves identifying queries with a high likelihood of medium relevance issues. In these cases we did not measure any significant user interaction with the results.

## Underperforming queries

The chart "Trend over Analysis Period" shows the proportion of search queries (unique per session) with particularly low KPIs across all search queries. For CTR, CR, and Findability™, this represents the lowest quantile, while for "No Results," it includes all queries with a no-hit rate of over 50% on the respective day.

The table "Search Terms with No Results" lists search terms that have a no-hit rate of over 50%. Two views are available:

1. Overall
   The default setting Overall includes all search terms that resulted in no hits in at least 50% of the cases.
2. Recent
   The Recent setting further narrows down the list. It only shows search terms that, on the last day they were recorded, resulted in no hits in at least 50% of the cases. If a no-hit search term has been newly added to a cluster with a MasterQuery during the analysis period, it will still be displayed here for that period.

The tables "Search Terms with Low CTR," "Search Terms with Low Findability™," and "Search Terms with Low CR" show the search terms in the weakest quantile of the respective KPI. The dynamically determined upper limit of the quantile for the analysis period is indicated as a percentage. This also means that the displayed percentage values apply only to the selected analysis period.

The table "Search Terms with Low CR" is additionally filtered to include search terms with a CR greater than 0%.

## Performance Charts

The chart "Trend of Searches with No Results" shows the proportion of all search queries (not search terms) with no search results in relation to all search queries.

All the charts are displayed in the context of other data. There are two "modes" to select:

### Default: Expectation Range
The Expectation Range illustrates the relationship between current and past search performance.

*Purpose*:
KPIs naturally fluctuate over time, but the key question is whether these changes are simply random noise or indicate a systematic improvement or issue. That’s where the new Confidence Intervals come in. By factoring in historical data, they predict the expected upper and lower bounds for your KPIs.

*How it's calculated*:
For each daily value, a 95% confidence interval is calculated based on the values from the corresponding weekdays over the past five weeks, as described on [Wikipedia](https://en.wikipedia.org/wiki/Confidence_interval).
This results in upper and lower bounds that together form a confidence band over time. Values outside that band can be considered as unlikely outliers that might be ascribed to changes in the system or outside events.


### Industry Benchmark
The industry benchmark is a comparison to a normalized view on filtered and normalized data from other retailers.

*Purpose*:
To determine whether a particular KPI is within a "good" range, a lot of things have to be considered. As a result of our statistically relevant sum of data from many retailers, we can now offer qualitative feedback in the form of an Industry Benchmark.
With it, the search KPIs are placed in a broader context to provide deeper insights into the trajectory of your search quality. It provides visual insights into how your KPIs measure up against peers and market trends

*How it's calculated*:
We use aggregated and filtered data from a diverse sample of retailers, and across various domains (the benchmark), to infer a common probability distribution. Based on this distribution, a 95% confidence interval is calculated for every daily value.


### Annotations
There are two types of annotations:
1. System Annotations: Generated by the searchHub system, these provide deeper insights into system-driven changes.
2. User Annotations: Created manually by users, these allow you to add information to specific points or time ranges to highlight and document areas of interest.

![annotations](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/annotations.png)

## Queries by Category{#category-performance}
This treemap ranks the most‑searched queries within your product taxonomy.
- Each block = a specific category
- Block size = share of total searches that resulted in interactions within this category in the selected time range.
- Block color groups queries by their parent category.

Why use it?
- **Spot demand hotspots**. Larger rectangles reveal high‑volume, high‑intent queries you may want to feature or promote.
- **Compare categories at a glance**. The treemap layout lets you instantly see which parts of the catalog attract the most search traffic.
- **Find content gaps**. Tiny or absent blocks may signal under‑served categories or missing synonyms.

# Glossary

KPI and term definitions in searchHub.

## General{#glossary---general}

| KPI           | Explanation                                                                                                                                                                                      |  
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Unique        | Unique means that something is counted only once per session. If a user searches for the same thing five times or clicks several times in the same search result, it is still counted only once. |
| Search Term | The content of a search query, i.e., the text that was searched for                                                                                                                              | 
| Search Query | A unique search query. A search term may have been used in many different search queries                                                                                                         | 
| userQuery | The search term that a user entered into the search box                                                                                                                                          | 
| masterQuery | The search term that searchHub determined to be the best version of the userQuery (may be identical to the userQuery)                                                                            | 
| searchQuery | The search term that searchHub passed on to the search engine (either the userQuery or the masterQuery)                                                                                          | 
| Suggest-Click | A click on a search term suggested by smartSuggest                                                                                                                                               | 
| Product-Click | A click on a product displayed in the search results (not in the Suggest!)                                                                                                                       |

## searchInsights - KPIs{#search-insights---kpis}

| KPI                    | Explanation                                                                                                                                                                                                                                                                                        |  
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Suggest-CTR            | Number of unique Suggest-Clicks divided by the number of unique Suggestions.                                                                                                                                                                                                                       |
| Suggest-MRR            | Average daily Mean-Reciprocal-Rank (Measuring the ranking-quality of suggestions) of clicked Suggestions.                                                                                                                                                                                          |
| #Searches              | *Total Unique Searches* is the number of times visitors performed an initial search on your site. Duplicate searches within a single visit are excluded.                                                                                                                                           |  
| Category               | The most represented Product-Category for products bought in relation to a search term. (This needs some Sort of Identifier (ProductID or URL) that maps a Result page view to SKU data (in this case the category))                                                                               |
| Clicks                 | The amount of unique result page views per session.                                                                                                                                                                                                                                                |  
| CR in %                | Number of unique ordered items divided by the number of unique searches per session.                                                                                                                                                                                                               |  
| CTR in %               | Number of unique product detail page impressions per session divided by the number of unique searches per session.                                                                                                                                                                                 |  
| Exit rate in %         | Number of exits per session divided by the number of unique searches per session.                                                                                                                                                                                                                  |  
| Exits in %             | The number of exits from your site that occurred following an initial result from your site-search.                                                                                                                                                                                                |  
| Findability in %       | The *findability™* represents a weighted rate between positive and negative user signals for a given Search Term. *Negative signals* are **exits**, **bounces**, **no-clicks** and **long search paths**. *Positive signals* are **clicks**, esp. **rate of clicks** on the first page of results. |  
| Human rate in %        | Number of unique searches per session that could be identified as searches issued by users and not bots, referral-links, campaigns, etc. divided by the number of all unique searches per session.                                                                                                 |  
| No Result in %         | Number of unique searches per session that produced a zero result.                                                                                                                                                                                                                                 |  
| Orders                 | The total number of completed purchases on your site.                                                                                                                                                                                                                                              |  
| Ranking in %           | The frequency with which a search result is clicked on the first page of search results. Ranking is the number of top, or first page product click (K-Clicks) divided by the overall number of clicks (nr of clicks).                                                                              |
| Revenue                | The total revenue from web ecommerce or in-app transactions.                                                                                                                                                                                                                                       |  
| Uplift                 | Increase of #Searches when comparing a defined date range.                                                                                                                                                                                                                                         |  
| Value per Search (VPS) | Sum of all orders divided by the sum of all searches within a day.                                                                                                                                                                                                                                 |

## Query view - Standard KPIs

| KPI         | Explanation                                                                                                                                                                                                                                                                                                                                          |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Popularity  | Number of unique user searches within a static time range, normally the last 28 days.                                                                                                                                                                                                                                                                |
| Samples     | “How good was this query” before searchHub modified the query. And how many samples (unchanged searches) do we have from this time period.                                                                                                                                                                                                           |
| Reliability | A score between 0 and 1 that considers the age and the size of the samples, to determine the reliability of the all other KPIs.                                                                                                                                                                                                                      |
| Findability | Same as *Findability*, as seen in *searchInsights KPIs*                                                                                                                                                                                                                                                                                             |
| Sellability | The *Sellability* is a measure of products which are found (clicked), and whether they were subsequently added to the cart and purchased. This is a weighted average of two rates, `carts/clicks` and `orders/carts`, with a double weight applied to the cart-related score. For shops without order-tracking, only the cart related score is used. |
| Confidence  | A weighted average of Findability and Sellability with double the weight applied to Findability.                                                                                                                                                                                                                                                     |

\* *The number of searches and all used KPIs are counted unique per query and session.*

## Cluster view - Merge types

| Merge type         | Explanation                                                                                                                                                                             |  
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| User-Merge         | A Merge based on explicit searchHub-user decisions (direct-merge, fingerprint-merge)                                                                                                    |
| Confident-AI-Merge | A Merge based on explicit searchHub decisions with high confidence (known-misspellings, known-lemmata)                                                                                  |
| Concept-AI-Merge   | A Merge based on explicit searchHub Concepts (concepts are contextualized synonyms - "TV" = "television")                                                                               |
| Explicit-AI-Merge  | A Merge based on explicit searchHub-user AI-Training decisions ("highboard" is related to "highbord")                                                                                   |
| Implicit-AI-Merge  | A Merge based on implicit searchHub-user AI-Training decisions (because "highboard" is related to "highbord", the AI also infers that "highboard white" is related to "highbord white") |

## Cluster view - Query scores

| Score          | Explanation                                                                                                                                                                                                                                                                                           |  
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Confidence     | The confidence score shows how sure searchHub is that this particular query is the best one.                                                                                                                                                                                                          |
| Correctness    | The correctness score is a measure of how linguistically accurate the query is and how well it represents the user's language.                                                                                                                                                                        |
| WordValidation | The word validation score measures the correctness of individual terms within a query - if all terms are valid the query receives a validation score of 1.0.                                                                                                                                          |
| LMProbability  | The contextual correctness of a query is measured by the language model probability. Example: The query "man woman" could receive a word validation score of 1.0 because all the terms are valid on their own, but the LM-Probability would be 0.0 because the terms in combination don't make sense. |

## Cluster view - Cluster Filter

| Filter          | Explanation                                                                                                                                                                                                                                                                                           |  
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Without Master-Query     | Clusters that haven't been exported due to searchHub's lack of confidence in selecting a master query.                                                                                                                                                                                                          |
| Manually overruled Master-Query    | Clusters featuring a user-explicitly selected Master-Query, contrary to searchHub's inclination towards a different one based on Key Performance Indicators (KPIs).                                                                                                                                                                        |
| Merged | Clusters that have been consolidated or combined.                                                                                                                                          |
| Not Merged  | Clusters that have been unconsolidated or uncombined. |
| Manually Picked Master-Query    | Clusters with a manually selected MasterQuery, regardless of whether the system would choose the same or a different MasterQuery.                                                                                                                                                                        |
| Manually added Query | Clusters incorporating a manually inserted query/queries.                                                                                                                                          |
| With Campaign Query  | Clusters containing Queries flagged as curated |
| With Suggest-Whitelist-Query    | Clusters in which the Suggest-Label has been either added or modified by a user, diverging from the automatically selected label.                                                                                                                                                                        |
| Merged automatically | Clusters that were automatically merged by searchHub utilizing AI and/or implicit/explicit user feedback.                                                                                                                                          |
| All zero Result  | Clusters where the matchCount for all queries is equal to zero. |
| Potential Whitelists  | Clusters experiencing substantial traffic and events without any known Query identified by searchHub. |
| Potential Merges  | Clusters experiencing significant traffic and events where searchHub has identified potential merges but lacks the confidence to execute them. |
| Validated Label  | Clusters in which searchHub identifies the Label, representing the query containing the most valuable information. |
| Unvalidated Label  | Clusters in which searchHub could not identify the Label, representing the query containing the most valuable information. |
| Master-Query with few results  | Clusters with Master Queries (MQ) that yield results but, on average, generate five or fewer results. |
