---
layout: default
title: manta-1.5.0
date: 2020-07-03 13:18 +0300
excerpt: Manta calls structural variants (SVs) and indels from mapped paired-end sequencing reads.
website: https://github.com/Illumina/manta
---

```dockerfile
FROM ubuntu:18.04

RUN apt-get update -y --fix-missing
RUN apt-get upgrade -y
RUN apt-get install wget bzip2 python -y

WORKDIR /opt

RUN wget https://github.com/Illumina/manta/releases/download/v1.5.0/manta-1.5.0.centos6_x86_64.tar.bz2
RUN tar jxf manta-1.5.0.centos6_x86_64.tar.bz2
RUN mv manta-1.5.0.centos6_x86_64 /opt/manta

ENV PATH="/opt/manta:${PATH}"
```
