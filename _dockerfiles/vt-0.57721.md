---
layout: default
title: vt-0.57721
date: 2021-07-14 14:49 +0300
excerpt: vt is a variant tool set that discovers short variants from Next Generation Sequencing data.
website: https://genome.sph.umich.edu/wiki/Vt
---

```dockerfile
# work from latest LTS ubuntu release
FROM ubuntu:18.04

# set the environment variables
ENV vt_version 0.57721

# run update
RUN apt-get update -y && apt-get install -y \
    libnss-sss \
    curl \
    wget \
    unzip \
    build-essential \
    libz-dev \
    libbz2-dev \
    liblzma-dev \
    libcurl4-openssl-dev \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# install VT
WORKDIR /opt
RUN wget https://github.com/atks/vt/archive/${vt_version}.tar.gz \
    && tar -xzvf ${vt_version}.tar.gz \
    && rm ${vt_version}.tar.gz

WORKDIR /opt/vt-${vt_version}
RUN make && make test && ln -s /opt/vt-${vt_version}/vt /usr/local/bin/vt

WORKDIR /opt

# default command
CMD ["/bin/bash"]
```
