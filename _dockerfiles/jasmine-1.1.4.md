---
layout: default
title: jasmine-1.1.4
date: 2021-10-21 01:06 +0300
excerpt: This tool is used to merge structural variants (SVs) across samples.
website: https://github.com/mkirsche/Jasmine
---

```dockerfile
FROM continuumio/miniconda3:4.9.2

RUN conda install \
    --channel conda-forge \
    --channel bioconda \
    irissv==1.0.4 \
    jasminesv==1.1.4
```
