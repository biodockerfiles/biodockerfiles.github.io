---
title: admixture-1.3.0
website: http://software.genetics.ucla.edu/admixture/
---

ADMIXTURE is a software tool for maximum likelihood estimation of individual ancestries from multilocus SNP genotype datasets.

{% highlight dockerfile %}
FROM continuumio/miniconda3:4.5.12

RUN conda install -c bioconda admixture=1.3.0
{% endhighlight %}
