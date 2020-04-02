---
layout: default
title: treemix-1.12
date: 2020-03-26 12:50 +0300
excerpt: TreeMix is a method for inferring the patterns of population splits and mixtures in the history of a set of populations.
website: https://bitbucket.org/nygcresearch/treemix/wiki/Home
---

```dockerfile
FROM continuumio/miniconda3:4.5.12

RUN conda install -c bioconda treemix=1.12
```
