---
title: verifybamid-1.1.3
website: https://genome.sph.umich.edu/wiki/VerifyBamID
---

verifyBamID is a software that verifies whether the reads in particular file match previously known genotypes for an individual (or group of individuals), and checks whether the reads are contaminated as a mixture of two samples.

{% highlight dockerfile %}
FROM ubuntu:16.04

RUN apt-get update \
    && apt-get install -y \
        build-essential \
        gcc-multilib \
        apt-utils \
        zlib1g-dev \
        git \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /tmp/

RUN git clone https://github.com/statgen/verifyBamID.git \
    && git clone https://github.com/statgen/libStatGen.git
    
WORKDIR /tmp/libStatGen
RUN git checkout tags/v1.0.14

WORKDIR /tmp/verifyBamID
RUN git checkout tags/v1.1.3 \
    && make \
    && cp /tmp/verifyBamID/bin/verifyBamID /usr/local/bin \
    && rm -rf /tmp/*
{% endhighlight %}
