---
layout: default
title: survivor-1.0.7
date: 2020-03-26 13:06 +0300
excerpt: SURVIVOR is a tool set for simulating/evaluating SVs, merging and comparing SVs within and among samples, and includes various methods to reformat or summarize SVs.
website: https://github.com/fritzsedlazeck/SURVIVOR
---

{% highlight dockerfile %}
FROM ubuntu:16.04

WORKDIR /opt
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        zlib1g-dev \
        wget \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN wget https://github.com/fritzsedlazeck/SURVIVOR/archive/1.0.7.tar.gz --no-check-certificate -O SURVIVOR.tar.gz \
    && tar xzvf SURVIVOR.tar.gz \
    && rm SURVIVOR.tar.gz

WORKDIR /opt/SURVIVOR-1.0.7/Debug/
RUN make \
    && ln -s /opt/SURVIVOR-1.0.7/Debug/SURVIVOR /usr/local/bin/SURVIVOR
WORKDIR /opt

CMD ["/bin/bash"]
{% endhighlight %}
