# Welcome to searchhub

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yiPe1gTCtbs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Welcome to __search|hub__ from __CXP Commerce Experts__.
We are the world's first search query optimization machine specializing in increasing the conversion from your current site-search. __We make your site-search understand humans__.

In this video, Jonathan Ross walks us through how Machine Learning Algorithms are able to assist our customers in autonomous site-search optimization.

# searchhub Basic Training - How do I Merge Clusters?

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3sKhtLw-1Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video will introduce how to merge clusters using our category and filter selection tools.

# searchhub Basic Training — Using the Fingerprint Button and Pre-Defined Filters

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_FzhKrHeyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video will introduce _how to use the fingerprint button to confirm highly similar clusters identified by search|hub_, as well as, using pre-defined filters to more
specifically focus optimization efforts.

# searchhub Basic Training - How To Set Up Redirects

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FAgJtXpWgiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## In this video we describe the 3 different types of redirects.

1. <a href="https://youtu.be/FAgJtXpWgiw?t=36">Query Cluster Redirects</a>
2. <a href="https://youtu.be/FAgJtXpWgiw?t=179">Semantic Search Redirects</a>
3. <a href="https://youtu.be/FAgJtXpWgiw?t=303">Exact Redirects</a>

# searchhub Search Insights Training

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nC1I1aQ4uN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

searchhub Search Insights allows you to audit the performance, and optimize the quality of any site search engine on the market, making ecommerce site search perform more like a human.

## This video will show you how to:
1. Audit Search Engine Performance
2. Identify the greatest impact zones of optimization
3. Report on the success of your optimizations
4. Track daily and weekly progress

# Keyboard Shortcuts

Press 'Shift'+'?' to open up an overview of all supported shortcuts. This and all those shortcuts work anywhere in the UI as long as the cursor focus is not placed on an input field.

# SmartSuggest

The query suggestions are generated following a staged controlled precision approach. We initially start with the stage where we are most confident and only add additional
suggestions from the less confident stages, if we are not able to provide the amount of suggestions requested. Here is a short example for a request to return 10 suggestions:

1. Search only in the cluster label
2. Search in all variants of the cluster
3. Fuzzy search in the cluster label with edit distance 1
4. Fuzzy search in the cluster label with edit distance 2

If the first stage finds >= 10 suggestions, we return the suggestions. If less than 10 suggestions are found, the next stage is initiated, etc. until the desired amount of
suggestions has been found.

## Basic settings - Fuzziness

Controls the proportion of fuzzy matches in the overall result. The default is set to __precision__ which means that the module will not execute the *Fuzzy-Stages* if the stage(s)
beforehand found any suggestions, regardless if it's less than the requested amount of suggestions. Therefor it could happen that only one suggestion will be returned even if you
ask for 10. If you set the setting to __recall__, the *Fuzzy-Stages* will be executed if the previous stage(s) could not provide the requested amount of suggestions.

## Basic settings - Sorting

Controls the order in which suggestions are returned by the module. The default is set to __confidence sorting__ where the suggestions are primarily sorted by confidence and
subsequently by *weight*. Alternatively you could set it to __group sorting__ where the suggestions are primarily sorted by type of stage(s) and subsequently sorted on *weight*
within their groups. The weight is determined by the ranking settings you define.

## Basic settings - AI Suggestions

This setting determines the quantity of AI suggestions that will be displayed. When present, these suggestions will always appear above the search results.  
The AI-generated suggestions are designed to enhance both the findability and sellability of products, and are based on the user’s search refinement behavior. 
For instance, for a general query such as “men”, the AI will identify the currently most relevant refined queries, such as “men’s fashion” and “men’s shoes”.  
In cases where there are bad or no search results, the AI will generate “relaxed-queries” that have previously led to successful search sessions.  
(This functionality depends on our search-collector and can only deliver additional value if the search-collector is implemented correctly.)

## Inspirational AI-Suggestions

Our AI-powered inspirational suggestions now enable you to show your users auto-completion and search suggestions even before they start typing based on the following pre-defined keywords:

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

# Query-Cluster

The default behavior when searching within clusters is a combination of different techniques with the goal of providing the best general-purpose result.
However, sometimes it's necessary to find a single query that exactly matches what you enter into the search box. For this purpose,
simply use this special syntax: prefix your query with a **+**.  
E.g., **+women shirt**.  
These special searches return either a single cluster if any variant matches the entered query exactly, or an empty result if no cluster matching that query exists.

# AI-Training

The AI-Training view enables you to train and improve searchhub’s clustering at large scale. There will always be some cases where searchhub on its own might not be confident
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
Only certain combinations of queries can be selected for AI training. SearchHub already pre-filters these combinations according to certain criteria. Among other things, the <a href="https://en.wikipedia.org/wiki/Edit_distance">edit distance</a> must not be greater than 2.

# Search Insights

## Underperforming queries

The "Searches without result" table has an additional toggle button that controls how zero results are interpreted

1. Overall  
   represents the standard view for zero result data. If a query is a significant zero result, it means that more than 50% of the time it was queried, it led to a zero result. This will lead to the query being counted as a zero result for the period selected, and shown here.
2. Recent  
   filters the overall view by excluding zero-result-data with less than 50% of the queries during a day leading to a zero-result, since the last time it was seen.

## Top queries

Explanation of the info column icons

![high entropy](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/entropy.png)  
The initial type of query detection involves identifying broad queries, which are queries that require multiple refinements before users can ultimately locate the products they seek.

![bad ranking](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/ranking.png)  
The second type of query detection involves identifying queries where search result ranking requires improvement. This is because users have to navigate too deeply into the result set before finding the desired products.

![bad relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/relevance.png)  
The third type of query detection involves identifying queries with a high likelihood of severe relevance issues. In these cases, users become so frustrated with the search results that they abandon the online store.

![neutral relevance](https://raw.githubusercontent.com/searchhub/searchhub.github.io/master/ui/img/neutral_relevance.png)  
The fourth type of query detection involves identifying queries with a high likelihood of medium relevance issues. In these cases we did not measure any significant user interaction with the results.

# Glossary

## Search Insights - KPIs

| KPI                    | Explanation                                                                                                                                                                                                                                                                                                           |  
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Suggest-CTR            | Number of unique Suggest-Clicks divided by the number of unique Suggestions.                                                                                                                                                                                                                                          |
| Suggest-MRR            | Average daily Mean-Reciprocal-Rank (Measuring the ranking-quality of suggestions) of clicked Suggestions.                                                                                                                                                                                                             |
| #Searches              | *Total Unique Searches* is the number of times visitors performed an initial search on your site. Duplicate searches within a single visit are excluded.                                                                                                                                                              |  
| Category               | The most represented Product-Category for products bought in relation to a search term. (This needs some Sort of Identifier (ProductID or URL) that maps a Result page view to SKU data (in this case the category))                                                                                                  |
| Clicks                 | The amount of unique result page views per session.                                                                                                                                                                                                                                                                   |  
| CR in %                | Number of unique ordered items divided by the number of unique searches per session.                                                                                                                                                                                                                                  |  
| CTR in %               | Number of unique product detail page impressions per session divided by the number of unique searches per session.                                                                                                                                                                                                    |  
| Exit rate in %         | Number of exits per session divided by the number of unique searches per session.                                                                                                                                                                                                                                     |  
| Exits in %             | The number of exits from your site that occurred following an initial result from your site-search.                                                                                                                                                                                                                   |  
| Findability in %       | The *findability™* represents a weighted rate between positive and negative user signals for a given Search Term. *Negative signals* are **exits**, **bounces**, **no-clicks** and **long search paths**. *Positive signals* are **clicks**, **rate of clicks** on the first page of results, **carts** and **buys**. |  
| Human rate in %        | Number of unique searches per session that could be identified as searches issued by users and not bots, referral-links, campaigns, etc. divided by the number of all unique searches per session.                                                                                                                    |  
| No Result in %         | Number of unique searches per session that produced a zero result.                                                                                                                                                                                                                                                    |  
| Orders                 | The total number of completed purchases on your site.                                                                                                                                                                                                                                                                 |  
| Ranking in %           | The frequency with which a search result is clicked on the first page of search results. Ranking is the number of top, or first page product click (K-Clicks) divided by the overall number of clicks (nr of clicks).                                                                                                 |
| Revenue                | The total revenue from web ecommerce or in-app transactions.                                                                                                                                                                                                                                                          |  
| Uplift                 | Increase of #Searches when comparing a defined date range.                                                                                                                                                                                                                                                            |  
| Value per Search (VPS) | Sum of all orders divided by the sum of all searches within a day.                                                                                                                                                                                                                                                    |

## Query view - Standard KPIs

| KPI         | Explanation                                                                                                                                                                                                                                                                                                                                          |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Popularity  | Number of unique user searches within a static time range, normally the last 28 days.                                                                                                                                                                                                                                                                |
| Samples     | “How good was this query” before searchHub modified the query. And how many samples (unchanged searches) do we have from this time period.                                                                                                                                                                                                           |
| Reliability | A score between 0 and 1 that considers the age and the size of the samples, to determine the reliability of the all other KPIs.                                                                                                                                                                                                                      |
| Findability | Same as *Findability*, as seen in *Search Insights KPIs*                                                                                                                                                                                                                                                                                             |
| Sellability | The *Sellability* is a measure of products which are found (clicked), and whether they were subsequently added to the cart and purchased. This is a weighted average of two rates, `carts/clicks` and `orders/carts`, with a double weight applied to the cart-related score. For shops without order-tracking, only the cart related score is used. |
| Confidence  | A weighted average of Findability and Sellability with double the weight applied to Findability.                                                                                                                                                                                                                                                     |

## Cluster view - Merge types

| Merge type         | Explanation                                                                                                                                                                             |  
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| User-Merge         | A Merge based on explicit searchhub-user decisions (direct-merge, fingerprint-merge)                                                                                                    |
| Confident-AI-Merge | A Merge based on explicit searchhub decisions with high confidence (known-misspellings, known-lemmata)                                                                                  |
| Concept-AI-Merge   | A Merge based on explicit searchhub Concepts (concepts are contextualized synonyms - "TV" = "television")                                                                               |
| Explicit-AI-Merge  | A Merge based on explicit searchhub-user AI-Training decisions ("highboard" is related to "highbord")                                                                                   |
| Implicit-AI-Merge  | A Merge based on implicit searchhub-user AI-Training decisions (because "highboard" is related to "highbord", the AI also infers that "highboard white" is related to "highbord white") |

## Cluster view - Query scores

| Score          | Explanation                                                                                                                                                                                                                                                                                           |  
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| Confidence     | The confidence score shows how sure searchHub is that this particular query is the best one.                                                                                                                                                                                                          |
| Correctness    | The correctness score is a measure of how linguistically accurate the query is and how well it represents the user's language.                                                                                                                                                                        |
| WordValidation | The word validation score measures the correctness of individual terms within a query - if all terms are valid the query receives a validation score of 1.0.                                                                                                                                          |
| LMProbability  | The contextual correctness of a query is measured by the language model probability. Example: The query "man woman" could receive a word validation score of 1.0 because all the terms are valid on their own, but the LM-Probability would be 0.0 because the terms in combination don't make sense. |
