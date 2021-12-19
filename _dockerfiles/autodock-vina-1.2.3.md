---
layout: default
title: autodock-vina-1.2.3
date: 2021-12-19 19:15 +3000
excerpt: AutoDock Vina is a turnkey computational docking program that is based on a simple scoring function and rapid gradient-optimization conformational search.
website: http://vina.scripps.edu/
---

```dockerfile
FROM ubuntu:20.04

RUN apt-get update \
    && apt-get upgrade --yes \
    && apt-get install --yes --no-install-recommends \
    wget \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /opt

RUN wget --no-check-certificate https://github.com/ccsb-scripps/AutoDock-Vina/releases/download/v1.2.3/vina_1.2.3_linux_x86_64 \
    && chmod +x vina_1.2.3_linux_x86_64

RUN ln -s /opt/vina_1.2.3_linux_x86_64 /usr/local/bin/vina
```
