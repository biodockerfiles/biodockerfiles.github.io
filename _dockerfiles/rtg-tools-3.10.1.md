---
layout: default
title: rtg-tools-3.10.1
date: 2020-07-03 13:11 +0300
excerpt: RTG Tools contains utilities to easily manipulate and accurately compare multiple VCF files, as well as utilities for processing other common NGS data formats.
website: https://www.realtimegenomics.com/products/rtg-tools
---

```dockerfile
FROM continuumio/miniconda3:4.5.12 
RUN apt-get update
RUN apt-get install -y unzip
RUN conda install -c bioconda --y rtg-tools=3.10.1
CMD ["/bin/bash"]
```
