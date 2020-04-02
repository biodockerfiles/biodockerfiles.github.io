---
layout: default
title: fastqc-0.11.9
date: 2020-03-26 16:30 +0300
excerpt: FastQC aims to provide a simple way to do some quality control checks on raw sequence data coming from high throughput sequencing pipelines.
website: https://www.bioinformatics.babraham.ac.uk/projects/fastqc/
---

```dockerfile
FROM ubuntu:18.04

WORKDIR /opt

# Update Ubuntu package index and install dependencies
RUN apt-get update \
    && apt-get install -y \
        wget \
        unzip \
        default-jre \
        libcommons-math3-java \
        libfindbin-libs-perl \
        libhtsjdk-java \
        libjbzip2-java \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Download and unzip FastQC
RUN wget --no-check-certificate https://www.bioinformatics.babraham.ac.uk/projects/fastqc/fastqc_v0.11.9.zip \
    && unzip fastqc_v0.11.9.zip \
    && rm fastqc_v0.11.9.zip

# Make the FastQC code executable and global
RUN chmod +x /opt/FastQC/fastqc \
    && ln -s /opt/FastQC/fastqc /usr/local/bin/fastqc

CMD ["/bin/bash"]
```
