---
layout: default
title: svviz2-2.0a3
date: 2021-04-11 17:02 +0300
excerpt: svviz2 is used to evaluate and visualize candidate structural variants. svviz assesses evidence for a structural variant found in high-throughput sequencing data.
website: https://github.com/nspies/svviz2
---

```dockerfile
FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install --no-install-recommends --yes \
        build-essential \
        zlib1g-dev \
        python3-dev \
        python3-pip \
        git \
        wget \
        inkscape \
    && pip3 install setuptools==54.2.0 pysam==0.16.0.1 wheel==0.36.2 \
    && pip3 install --force-reinstall git+https://github.com/nspies/genomeview.git \
    && pip3 install svviz \
    && pip3 install --force-reinstall git+git://github.com/nspies/svviz2.git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /opt
RUN wget https://github.com/Benson-Genomics-Lab/TRF/releases/download/v4.09.1/trf409.linux64 -O trf \
    && chmod +x trf \
    && ln -s /opt/trf /usr/bin/trf
```
