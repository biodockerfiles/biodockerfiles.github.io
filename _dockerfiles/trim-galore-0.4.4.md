---
layout: default
title: trim-galore-0.4.4
date: 2020-03-26 12:46 +0300
excerpt: Trim Galore! is a wrapper script to automate quality and adapter trimming as well as quality control, with some added functionality to remove biased methylation positions for RRBS sequence files (for directional, non-directional (or paired-end) sequencing).
website: https://www.bioinformatics.babraham.ac.uk/projects/trim_galore/
---

```dockerfile
FROM ubuntu:14.04

WORKDIR /opt

# Update Ubuntu package index and install common dependencies
RUN apt-get update \
    && apt-get install -y \
      wget \
      unzip \
      build-essential \
      software-properties-common \
      python-pip \
      python-dev \
      python \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install FastQC dependencies
RUN add-apt-repository -y ppa:webupd8team/java \
    && apt-get update \
    && echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections \
    && apt-get install -y oracle-java8-installer

# Download and unzip FastQC
RUN wget --no-check-certificate https://www.bioinformatics.babraham.ac.uk/projects/fastqc/fastqc_v0.11.5.zip \
    && unzip fastqc_v0.11.5.zip \
    && rm fastqc_v0.11.5.zip

# Make the FastQC binary executable and global
RUN chmod +x FastQC/fastqc \
    && ln -s /opt/FastQC/fastqc /usr/local/bin/fastqc

# Install Cutadapt dependencies
RUN pip install cython==0.25.2

# Install Cutadapt
RUN pip install cutadapt==1.13

# Download and unzip Trim Galore!
RUN mkdir trim_galore
WORKDIR /opt/trim_galore
RUN wget --no-check-certificate https://www.bioinformatics.babraham.ac.uk/projects/trim_galore/trim_galore_v0.4.4.zip \
    && unzip trim_galore_v0.4.4.zip \
    && rm trim_galore_v0.4.4.zip

# Change workdir back to /opt
WORKDIR /opt

# Make Trim Galore! executable global
RUN ln -s /opt/trim_galore/trim_galore /usr/local/bin/trim_galore
```
