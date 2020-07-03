---
layout: default
title: rdkit-2016.03.5
date: 2020-07-03 13:58 +0300
excerpt: RDKit is a collection of cheminformatics and machine-learning software written in C++ and Python.
website: https://github.com/rdkit/rdkit/
---

```dockerfile
FROM ubuntu:16.04
RUN apt-get update && apt-get upgrade -y
RUN apt-get install flex bison build-essential python-numpy cmake python-dev sqlite3 libsqlite3-dev libboost-all-dev wget unzip -y
WORKDIR /usr/local/
RUN wget https://github.com/rdkit/rdkit/archive/Release_2016_03_5.zip
RUN unzip Release_2016_03_5.zip
RUN mv rdkit-Release_2016_03_5 rdkit
WORKDIR /usr/local/rdkit
RUN mkdir build
WORKDIR /usr/local/rdkit/External/INCHI-API
RUN bash download-inchi.sh
WORKDIR /usr/local/rdkit/build
RUN cmake -DRDK_BUILD_INCHI_SUPPORT=ON ..
RUN make
RUN make install
```
