---
layout: default
title: admixture-1.3.0
date: 2020-03-26 12:48 +0300
excerpt: ADMIXTURE is a software tool for maximum likelihood estimation of individual ancestries from multilocus SNP genotype datasets.
website: http://software.genetics.ucla.edu/admixture/
---

```dockerfile
FROM continuumio/miniconda3:4.5.12

RUN conda install -c bioconda admixture=1.3.0
```
