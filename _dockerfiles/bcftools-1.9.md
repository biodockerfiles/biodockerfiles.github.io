---
title: bcftools-1.9
website: https://www.htslib.org/doc/bcftools.html
---

BCFtools is a set of utilities that manipulate variant calls in the Variant Call Format (VCF) and its binary counterpart BCF.

{% highlight dockerfile %}
FROM ubuntu:16.04

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
RUN wget https://github.com/samtools/htslib/releases/download/1.9/htslib-1.9.tar.bz2 \
    && tar xjf htslib-1.9.tar.bz2 \
    && rm htslib-1.9.tar.bz2
RUN wget https://github.com/samtools/bcftools/releases/download/1.9/bcftools-1.9.tar.bz2 \
    && tar xjf bcftools-1.9.tar.bz2 \
    && rm bcftools-1.9.tar.bz2

WORKDIR /opt/htslib-1.9
RUN autoheader \
    && autoconf \
    && ./configure --enable-libgsl --enable-perl-filters \
    && make \
    && make install

WORKDIR /opt/bcftools-1.9
RUN autoheader \
    && autoconf \
    && ./configure --enable-libgsl --enable-perl-filters --with-htslib=/opt/htslib-1.9 \
    && make \
    && make install

WORKDIR /opt
ENV BCFTOOLS_PLUGINS /opt/bcftools-1.9/plugins
{% endhighlight %}
