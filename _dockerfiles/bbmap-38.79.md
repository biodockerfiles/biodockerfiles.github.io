---
layout: default
title: bbmap-38.79
date: 2020-03-26 21:36 +0300
excerpt: BBTools is a suite of fast, multithreaded bioinformatics tools designed for analysis of DNA and RNA sequence data.
website: https://jgi.doe.gov/data-and-tools/bbtools/
---

```dockerfile
FROM ubuntu:18.06

RUN apt-get update \
    && apt-get install -y \
        wget \
        default-jre \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /opt

RUN wget https://sourceforge.net/projects/bbmap/files/BBMap_38.79.tar.gz/download -O BBMap_38.79.tar.gz \
    && tar xzvf BBMap_38.79.tar.gz && \
    && rm BBMap_38.79.tar.gz

# Make all BBMap executables global
RUN ln -s /opt/bbmap/*.sh /usr/local/bin/
```
