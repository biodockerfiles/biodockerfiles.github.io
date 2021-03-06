---
layout: default
title: fastq-screen-0.14.0
date: 2020-04-10 13:06 +0300
excerpt: FastQ Screen allows you to screen a library of sequences in FastQ format against a set of sequence databases so you can see if the composition of the library matches with what you expect.
website: https://www.bioinformatics.babraham.ac.uk/projects/fastq_screen/
---

```dockerfile
FROM ubuntu:18.04

# Set working directory
WORKDIR /opt

# Updating ubuntu, installing other necessary software and remove tmp files
RUN apt-get update --yes \
    && apt-get install wget unzip python perl build-essential zlib1g-dev gzip libncurses5-dev libbz2-dev liblzma-dev libgd-dev  --yes \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install bowtie and remove tmp files
RUN wget https://sourceforge.net/projects/bowtie-bio/files/bowtie/1.2.2/bowtie-1.2.2-linux-x86_64.zip \
    && unzip bowtie-1.2.2-linux-x86_64.zip \
    && rm bowtie-1.2.2-linux-x86_64.zip \
    && cd bowtie-1.2.2-linux-x86_64 

ENV PATH="/opt/bowtie-1.2.2-linux-x86_64:${PATH}"

# Install bowtie2 and remove tmp files
RUN wget https://sourceforge.net/projects/bowtie-bio/files/bowtie2/2.3.5.1/bowtie2-2.3.5.1-linux-x86_64.zip \
    && unzip bowtie2-2.3.5.1-linux-x86_64.zip \
    && rm bowtie2-2.3.5.1-linux-x86_64.zip \
    && cd bowtie2-2.3.5.1-linux-x86_64

ENV PATH="/opt/bowtie2-2.3.5.1-linux-x86_64:${PATH}"

# Install BWA and remove tmp files
RUN wget https://sourceforge.net/projects/bio-bwa/files/bwa-0.7.17.tar.bz2 \
    && tar -xvf bwa-0.7.17.tar.bz2 \
    && rm bwa-0.7.17.tar.bz2 \
    && cd bwa-0.7.17 \
    && make 

ENV PATH="/opt/bwa-0.7.17:${PATH}"

# Install SAMtools and remove tmp files
RUN wget https://github.com/samtools/samtools/releases/download/1.9/samtools-1.9.tar.bz2 \
    && tar jxf samtools-1.9.tar.bz2 \
    && rm samtools-1.9.tar.bz2 \
    && cd samtools-1.9 \
    && make \
    && make install

# Install GD::Graph and remove tmp files
# Install necessary modules for GD::Graph
RUN yes | perl -MCPAN -e "install Test::Fork; install Capture::Tiny; install Test::Exception"

# Install ExtUtils-PkgConfig
RUN wget https://cpan.metacpan.org/authors/id/X/XA/XAOC/ExtUtils-PkgConfig-1.15.tar.gz \ 
    && tar xvzf ExtUtils-PkgConfig-1.15.tar.gz \ 
    && rm ExtUtils-PkgConfig-1.15.tar.gz \ 
    && cd ExtUtils-PkgConfig-1.15 \ 
    && perl Makefile.PL \ 
    && make \ 
    && make install

# Install GD-2.70
RUN wget https://cpan.metacpan.org/authors/id/R/RU/RURBAN/GD-2.70.tar.gz \ 
    && tar xvzf GD-2.70.tar.gz \ 
    && rm GD-2.70.tar.gz \ 
    && cd GD-2.70 \ 
    && yes | perl Makefile.PL \ 
    && make \ 
    && make install

# Install GDTextUtil
RUN wget https://cpan.metacpan.org/authors/id/M/MV/MVERB/GDTextUtil-0.86.tar.gz \ 
    && tar xvzf GDTextUtil-0.86.tar.gz \
    && rm GDTextUtil-0.86.tar.gz \ 
    && cd GDTextUtil-0.86 \ 
    && perl Makefile.PL \ 
    && make \ 
    && make install

# Install GD::Graph
RUN wget https://cpan.metacpan.org/authors/id/R/RU/RUZ/GDGraph-1.54.tar.gz \ 
    && tar xvzf GDGraph-1.54.tar.gz \ 
    && rm GDGraph-1.54.tar.gz \ 
    && cd GDGraph-1.54 \ 
    && yes | perl Makefile.PL \ 
    && make \ 
    && make install

# Install Bismark and remove tmp files
RUN wget https://www.bioinformatics.babraham.ac.uk/projects/bismark/bismark_v0.22.1.tar.gz \ 
    && tar xvzf bismark_v0.22.1.tar.gz \
    && rm bismark_v0.22.1.tar.gz \
    && cd bismark_v0.22.1

ENV PATH="/opt/bismark_v0.22.1:${PATH}"

# Install FastQ Screen and remove tmp files
RUN wget https://www.bioinformatics.babraham.ac.uk/projects/fastq_screen/fastq_screen_v0.14.0.tar.gz \
    && tar xvzf fastq_screen_v0.14.0.tar.gz \
    && rm fastq_screen_v0.14.0.tar.gz \
    && cd fastq_screen_v0.14.0

ENV PATH="/opt/fastq_screen_v0.14.0:${PATH}"

# Set command to bash
CMD ["/bin/bash"]
```
