---
layout: default
title: sambamba-0.7.1
date: 2020-04-14 12:03 +0300
excerpt: Sambamba is a high performance highly parallel robust and fast tool (and library), written in the D programming language, for working with SAM and BAM files.
website: https://lomereiter.github.io/sambamba/
---

```dockerfile
FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y \
        wget \
        gunzip \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
    
WORKDIR /opt

RUN wget https://github.com/biod/sambamba/releases/download/v0.7.1/sambamba-0.7.1-linux-static.gz \
    && gunzip sambamba-0.7.1-linux-static.gz \
    && rm sambamba-0.7.1-linux-static.gz \
    && mv /opt/sambamba-0.7.1-linux-static /opt/sambamba \
    && chmod +x /opt/sambamba \
    && ln -s /opt/sambamba /usr/local/bin
```
