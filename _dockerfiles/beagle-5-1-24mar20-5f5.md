---
layout: default
title: beagle-5.1-24Mar20.5f5
date: 2020-04-14 15:47 +0300
excerpt: Beagle is a software package for phasing genotypes and for imputing ungenotyped markers.
website: https://faculty.washington.edu/browning/beagle/beagle.html
---

```dockerfile
FROM ubuntu 18.04

# Install Java
RUN \
  echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
  add-apt-repository -y ppa:webupd8team/java && \
  apt-get update && \
  apt-get install -y wget oracle-java8-installer && \
  rm -rf /var/lib/apt/lists/* && \
  rm -rf /var/cache/oracle-jdk8-installer

# Define working directory
WORKDIR /opt

# Download Beagle JAR file
RUN wget https://faculty.washington.edu/browning/beagle/beagle.24Mar20.5f5.jar

# Define commonly used JAVA_HOME variable
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

# Define default command
CMD ["bash"]
```
