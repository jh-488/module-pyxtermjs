# Edrys-Development-Environment

This folder contains a Linux development environment based on the base `crosslab/edrys_pyxtermjs:latest` image.
You can modify the `Dockerfile` to add additional packages or change the configuration.
Start and build it via:

``` bash
$ docker-compose up --build
```

or directly load our prebuild image from dockerhub:

``` bash
$ docker run -it -p 5000:5000 crosslab/edrys_pyxtermjs_development:latest
```

