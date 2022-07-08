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
ask for 10. If you set the setting to __recall__, the *Fussy-Stages* will be executed if the previous stage(s) could not provide the requested amount of suggestions.

## Basic settings - Sorting

Controls the order in which suggestions are returned by the module. The default is set to __confidence sorting__ where the suggestions are primarily sorted by confidence and
subsequently by *weight*. Alternatively you could set it to __group sorting__ where the suggestions are primarily sorted by type of stage(s) and subsequently sorted on *weight*
within their groups. The weight is determined by the ranking settings you define.

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

# Glossary

## Search Insights KPIs

|KPI |Explanation |  
|--|--|  
|Suggest-CTR |Number of unique Suggest-Clicks divided by the number of unique Suggestions.|
|Suggest-MRR |Average daily Mean-Reciprocal-Rank (Measuring the ranking-quality of suggestions) of clicked Suggestions.|
|#Searches |*Total Unique Searches* is the number of times visitors performed an initial search on your site. Duplicate searches within a single visit are excluded.|  
|Category |The most represented Product-Category for products bought in relation to a search term. (This needs some Sort of Identifier (ProductID or URL) that maps a Result page view to SKU data (in this case the category))|
|Clicks |The amount of unique result page views per session.|  
|CR in %|Number of unique orders per session divided by the number of unique searches per session.|  
|CTR in %|Number of unique product detail page impressions per session divided by the number of unique searches per session.|  
|Exit rate in %|Number of exits per session divided by the number of unique searches per session.|  
|Exits in %|The number of exits from your site that occurred following an initial result from your site-search.|  
|Findability™ in %|The *findability™* represents a weighted rate between positive and negative user signals for a given Search Term. *Negative signals* are **exits**, **bounces**, **no-clicks** and **long search paths**. *Positive signals* are **clicks**, **rate of clicks** on the first page of results, **carts** and **buys**.|  
|Human rate in %|Number of unique searches per session that could be identified as searches issued by users and not bots, referral-links, campaigns, etc. divided by the number of all unique searches per session.|  
|No Result in %|Number of unique searches per session that produced a zero result.|  
|Orders |The total number of completed purchases on your site.|  
|Ranking in %|The frequency with which a search result is clicked on the first page of search results. Ranking is the number of top, or first page product click (K-Clicks) divided by the overall number of clicks (nr of clicks).|
|Revenue |The total revenue from web ecommerce or in-app transactions.|  
|Uplift|Increase of #Searches when comparing a defined date range.|  
|Value per Search (VPS)|Sum of all orders divided by the sum of all searches within a day.|
