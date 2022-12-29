---
layout: default
title: annotsv-3.2.1
date: 2022-12-29 21:01 +0300
excerpt: AnnotSV is a standalone program designed for annotating and ranking Structural Variations (SV).
website: https://lbgi.fr/AnnotSV/
---

```dockerfile
FROM ubuntu:20.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update \
    && apt-get upgrade --yes \
    && apt-get install --yes --no-install-recommends \
    tcl \
    tcllib \
    openjdk-8-jdk \
    wget \
    unzip \
    build-essential \
    libbz2-dev \
    libcurl4-gnutls-dev \
    liblzma-dev \
    libncurses5-dev \
    libssl-dev \
    zlib1g-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /opt

RUN wget https://github.com/arq5x/bedtools2/releases/download/v2.30.0/bedtools.static.binary -O bedtools \
    && chmod +x bedtools \
    && ln -s /opt/bedtools /usr/local/bin/bedtools

RUN wget https://github.com/samtools/bcftools/releases/download/1.16/bcftools-1.16.tar.bz2 -O bcftools.tar.bz2 \
    && tar -xjf bcftools.tar.bz2 \
    && rm bcftools.tar.bz2 \
    && cd bcftools-1.16 \
    && ./configure \
    && make \
    && make install

RUN wget https://github.com/lgmgeo/AnnotSV/archive/refs/tags/v3.2.1.tar.gz \
    && tar -xzf v3.2.1.tar.gz \
    && rm v3.2.1.tar.gz \
    && cd AnnotSV-3.2.1 \
    && make PREFIX=. install

RUN cpan YAML::XS \
    && cpan Sort::Key::Natural \
    && wget https://github.com/mobidic/knotAnnotSV/archive/refs/tags/v1.1.3.tar.gz \
    && tar -xzf v1.1.3.tar.gz \
    && rm v1.1.3.tar.gz

ENV ANNOTSV /opt/AnnotSV-3.2.1/
```
