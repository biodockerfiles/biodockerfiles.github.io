---
layout: default
title: bcftools-1.13
date: 2021-10-21 01:01 +0300
excerpt: BCFtools is a set of utilities that manipulate variant calls in the Variant Call Format (VCF) and its binary counterpart BCF.
website: https://www.htslib.org/doc/bcftools.html
---

```dockerfile
FROM ubuntu:18.04

RUN apt-get update \
    && apt-get upgrade --yes \
    && apt-get install --yes --no-install-recommends \
    wget \
    build-essential \
    automake \
    autoconf \
    make \
    gcc \
    perl \
    zlib1g-dev \
    libbz2-dev \
    liblzma-dev \
    libcurl4-gnutls-dev \
    libssl-dev \
    libperl-dev \
    libgsl0-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /opt
RUN wget --no-check-certificate https://github.com/samtools/bcftools/releases/download/1.13/bcftools-1.13.tar.bz2 \
    && tar xjf bcftools-1.13.tar.bz2 \
    && rm bcftools-1.13.tar.bz2

WORKDIR /opt/bcftools-1.13
RUN autoheader \
    && autoconf \
    && ./configure --enable-libgsl --enable-perl-filters \
    && make \
    && make install

WORKDIR /opt
ENV BCFTOOLS_PLUGINS /opt/bcftools-1.13/plugins
```
