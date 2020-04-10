---
layout: default
title: plink-1.07
date: 2020-04-10 16:25 +0300
excerpt: PLINK is a free, open-source whole genome association analysis toolset, designed to perform a range of basic, large-scale analyses in a computationally efficient manner.
website: https://www.cog-genomics.org/plink2/
---

```dockerfile
FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y \
        wget \
        unzip \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
    
WORKDIR /opt
    
RUN wget http://s3.amazonaws.com/plink1-assets/1.07/plink1_linux_x86_64.zip \
    && unzip plink1_linux_x86_64.zip \
    && rm plink1_linux_x86_64.zip \
    && ln -s /opt/plink-1.07-x86_64/plink /usr/local/bin/plink
```
