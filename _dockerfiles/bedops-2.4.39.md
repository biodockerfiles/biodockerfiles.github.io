---
layout: default
title: bedops-2.4.39
date: 2021-03-18 00:13 +0300
excerpt: BEDOPS is an open-source command-line toolkit that performs highly efficient and scalable Boolean and other set operations, statistical calculations, archiving, conversion and other management of genomic data of arbitrary scale.
website: https://bedops.readthedocs.io/en/latest/index.html
---

```dockerfile
FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y \
        wget \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /opt

RUN wget https://github.com/bedops/bedops/releases/download/v2.4.39/bedops_linux_x86_64-v2.4.39.tar.bz2 -O bedops_linux_x86_64-v2.4.39.tar.bz2 \
    && tar jxvf bedops_linux_x86_64-v2.4.39.tar.bz2 \
    && rm bedops_linux_x86_64-v2.4.39.tar.bz2

# Make all BEDOPS executables global
RUN ln -s /opt/bin/* /usr/local/bin/
```
