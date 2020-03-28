---
title: samtools-1.10
website: https://www.htslib.org/doc/samtools.html
---

Samtools is a suite of programs for interacting with high-throughput sequencing data.

{% highlight dockerfile %}
FROM ubuntu:18.04

WORKDIR /opt

RUN apt-get update \
    && apt-get install -y \
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
        wget\
        bzip2 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN wget https://github.com/samtools/samtools/releases/download/1.10/samtools-1.10.tar.bz2 \
        && tar xjf samtools-1.10.tar.bz2 \
        && rm samtools-1.10.tar.bz2

WORKDIR /opt/samtools-1.10

RUN autoheader \
    && autoconf -Wno-syntax \
    && ./configure \
    && make \
    && make install
{% endhighlight %}
