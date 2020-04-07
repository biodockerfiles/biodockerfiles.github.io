---
layout: default
title: bcftools-1.10.2
date: 2020-04-06 20:18 +0300
excerpt: BCFtools is a set of utilities that manipulate variant calls in the Variant Call Format (VCF) and its binary counterpart BCF.
website: https://www.htslib.org/doc/bcftools.html
---

```dockerfile
FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y \
        wget \
        bzip2 \
        build-essential \
        automake \
        autoconf \
        gcc \
        zlib1g-dev \
        libgsl0-dev \
        libbz2-dev \
        liblzma-dev \
        libperl-dev \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /opt
RUN wget https://github.com/samtools/bcftools/releases/download/1.10.2/bcftools-1.10.2.tar.bz2 \
    && tar xjf bcftools-1.10.2.tar.bz2 \
    && rm bcftools-1.10.2.tar.bz2

WORKDIR /opt/bcftools-1.10.2
RUN autoheader \
    && autoconf \
    && ./configure --enable-libgsl --enable-perl-filters \
    && make \
    && make install

WORKDIR /opt
ENV BCFTOOLS_PLUGINS /opt/bcftools-1.10.2/plugins
```
