---
title: treemix-1.12
website: https://bitbucket.org/nygcresearch/treemix/wiki/Home
---

TreeMix is a method for inferring the patterns of population splits and mixtures in the history of a set of populations.

{% highlight dockerfile %}
FROM continuumio/miniconda3:4.5.12

RUN conda install -c bioconda treemix=1.12
{% endhighlight %}
