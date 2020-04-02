---
layout: default
title: seqtk-1.2
date: 2020-03-26 12:40 +0300
excerpt: Seqtk is a fast and lightweight tool for processing sequences in the FASTA or FASTQ format.
website: https://github.com/lh3/seqtk
---

```dockerfile
FROM ubuntu:14.04

WORKDIR /opt/

RUN apt-get update \
    && apt-get install -y \
        wget \
        unzip \
        build-essential \
        zlib1g-dev \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN wget https://github.com/lh3/seqtk/archive/v1.2.zip \
    && unzip v1.2.zip \
    && rm v1.2.zip

WORKDIR /opt/seqtk-1.2/
RUN make \
    && n -s /opt/seqtk-1.2/seqtk /usr/local/bin/seqtk
```
