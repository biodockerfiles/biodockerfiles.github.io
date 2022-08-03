---
layout: default
title: fastq-screen-0.15.2
date: 2022-08-03 16:00 +0300
excerpt: FastQ Screen allows you to screen a library of sequences in FastQ format against a set of sequence databases so you can see if the composition of the library matches with what you expect.
website: https://www.bioinformatics.babraham.ac.uk/projects/fastq_screen/
---

```dockerfile
FROM continuumio/miniconda3:4.11.0

RUN conda install \
    --channel conda-forge \
    --channel bioconda \
    htslib==1.15.1 \
    bwa==0.7.17 \
    bismark==0.23.1 \
    perl-gdgraph==1.54 \
    fastq-screen==0.15.2

RUN cp \
    /opt/conda/share/fastq-screen-0.15.2-0/fastq_screen.conf.example \
    /opt/conda/share/fastq-screen-0.15.2-0/fastq_screen.conf
```
