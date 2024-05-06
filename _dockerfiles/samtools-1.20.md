---
layout: default
title: samtools-1.20
date: 2024-05-06 19:00 +0300
excerpt: Samtools is a suite of programs for interacting with high-throughput sequencing data.
website: https://www.htslib.org/doc/samtools.html
---

```dockerfile
FROM ubuntu:24.04

RUN apt-get update \
    && apt-get upgrade --yes \
    && apt-get install --yes --no-install-recommends \
        autoconf \
        automake \
        make \
        gcc \
        perl \
        zlib1g-dev \
        libbz2-dev \
        liblzma-dev \
        libcurl4-gnutls-dev \
        libssl-dev \
        libncurses5-dev \
        libdeflate-dev \
        wget \
        bzip2 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /opt

RUN wget --no-check-certificate https://github.com/samtools/samtools/releases/download/1.20/samtools-1.20.tar.bz2 \
        && tar xjf samtools-1.20.tar.bz2 \
        && rm samtools-1.20.tar.bz2

WORKDIR /opt/samtools-1.20

RUN ./configure \
    && make \
    && make install
```
