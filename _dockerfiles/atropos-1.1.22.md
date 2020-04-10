---
layout: default
title: atropos-1.1.22
date: 2020-04-10 13:38 +0300
excerpt: Atropos is tool for specific, sensitive, and speedy trimming of NGS reads and it is a fork of the venerable Cutadapt read trimmer with the improvements.
website: https://atropos.readthedocs.io/en/1.1/
---

```dockerfile
# Specifying the miniconda base image
FROM continuumio/miniconda3:4.6.14

# Set working directory
WORKDIR /opt

# Install atropos 
RUN conda install -c bioconda -y pyyaml atropos=1.1.22
```
