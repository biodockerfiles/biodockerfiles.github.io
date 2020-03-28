---
title: Docker Tips
---

Make use of below tips when working with the Dockerfiles in biodockerfiles.

### Dockerfiles

A Dockerfile is a simple text file that stores instructions to generate a Docker image from scratch. It is a very lightweight alternative to storing Docker images to maintain reproducible analyses.

### Image vs Container

Docker images are frozen piece of data containing tools and their dependencies. We can store these images long term and transfer them. On the other hand, Docker containers are executed forms of images and they exist as long as they keep running in non-interactive mode or they are started in interactive mode and we do not kill them. Docker containers originate from Docker images. Docker images originate from other Docker images. The command `docker images` shows the available images we currently have in our computer. The command `docker ps` shows the running containers and `docker ps -a` shows the containers that we ran in the past and now they are exited/stopped/killed.

### Building Docker images using Dockerfiles

`docker build` is the command to use the instructions in a Dockerfile to generate a Docker image. It minimally requires `-t <image_name:tag>` argument to give a name and a tag to the resulting Docker image, `-f </path/to/Dockerfile>` argument to specificy the location of the Dockerfile to be used as the instructions and finally `</path/to/directory>` at the end to specify the directory that is going to be used as the context. Below is an example to build FastQC 0.11.9 tool using the Dockerfile at <a href="{% link _dockerfiles/fastqc-0.11.9.md %}">fastqc-0.11.9</a>.

{% highlight bash %}
docker build -t fastqc:0.11.9 -f fastqc-0.11.9.Dockerfile .
{% endhighlight %}

In the above example `-t` argument value is given as `fastqc:0.11.9`, Dockerfile is specified as `fastqc-0.11.9.Dockerfile` relatively with `-f` which means the file should exist in the current directory that we are working on and the `.` at the end specifies the context directory which means the current directory.

### Running a tool inside a Docker image

When we build the Docker image manually or using a Dockerfile, the image is saved in our computer and ready to be used. When we run it, it becomes a container that can execute our tools. Below is an example to run FastQC 0.11.9 tool using the image that we created in the above section.

{% highlight bash %}
docker run fastqc:0.11.9 fastqc --help
{% endhighlight %}

This command will start a new container using the image called `fastqc:0.11.9` and run `fastqc --help` command inside it, which will list us the help text provided by FastQC.

### Running a container in interactive mode

Interactive mode lets us inside the running container and keeps it running when we are freely playing around it. Use `-ti` arguments to `docker run` command as shown in below example.

{% highlight bash %}
docker run -ti image_name:tag
{% endhighlight %}

### Mounting a local directory inside a container

We keep data out of the images to keep the image in small size. However, we usually require data to be available inside the container so our tool can analyze it. Use `-v` argument to `docker run` command to mount any local directory inside a container as shown in below example.

{% highlight bash %}
docker run -v /path/to/local/directory:/path/inside/container image_name:tag
{% endhighlight %}

Note that `/path/inside/container` does not have to exist.
