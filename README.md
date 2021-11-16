# Installing Docker for Linux Debian/Ubuntu

> Install essentials
```
 sudo apt-get update
 sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```
>Add Docker’s official GPG key:
```
 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

>Use the following command to set up the stable repository. To add the nightly or test repository, add the word nightly or test (or both) after the word stable in the commands below. Learn about nightly and test channels.
```
 echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

>Install Engine
```
 sudo apt-get update
 sudo apt-get install docker-ce docker-ce-cli containerd.io
```
> To install a specific version of Docker Engine, list the available versions in the repo, then select and install:

```
apt-cache madison docker-ce
```

> RUN CODE
```
git clone https://github.com/nlp-infotointell/i2i-test
cd ./i2i-test
## docker build -t client . && docker run --name CLIENT_CONTAINER -p 0.0.0.0:5000:3000 client
```
# Installing Docker For Mac OSX

In case of having Intell chip or Apple chip, follow this
> https://docs.docker.com/desktop/mac/install/

> RUN CODE
```
git clone https://github.com/nlp-infotointell/i2i-test
cd ./i2i-test
## docker build -t client . && docker run --name CLIENT_CONTAINER -p 0.0.0.0:5000:3000 client
```


# Installing Docker Desktop for Windows

Docker Desktop for Windows is the Community Edition (CE) of Docker for Microsoft Windows. To download Docker Desktop for Windows, head to Docker Hub.

Link: https://hub.docker.com/editions/community/docker-ce-desktop-windows

The installation provides Docker Engine, Docker CLI client, Docker Compose, Docker Machine, and Kitematic. Containers and images created with Docker Desktop for Windows are shared between all user accounts on machines where it is installed. This is because all Windows accounts use the same VM to build and run containers.

Did you Know? Switch between Windows and Linux containers describes the Linux / Windows containers toggle in Docker Desktop for Windows and points you to the tutorial mentioned above.


# Pre-requisite:

- Windows 10 Laptop 10.0.143393 Build 14391
- x64 based PC
- Verify if Switch to Linux container is well selected under Preference UI

## System Requirements:

- Windows 10 64bit: Pro, Enterprise or Education (1607 Anniversary Update, Build 14393 or later).
- Virtualization is enabled in BIOS. Typically, virtualization is enabled by default. This is different from having Hyper-V enabled. For more detail see Virtualization must be enabled in Troubleshooting.
- CPU SLAT-capable feature.
- At least 4GB of RAM.


## Checking Docker Version

Run docker version to check the basic details of your deployment. You should see "Windows" listed as the operating system for the Docker client and the Docker Engine:


```
Client: Docker Engine - Community
 Version:           18.09.2
 API version:       1.39
 Go version:        go1.10.8
 Git commit:        6247962
 Built:             Sun Feb 10 04:12:31 2019
 OS/Arch:           windows/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          18.09.2
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.10.6
  Git commit:       6247962
  Built:            Sun Feb 10 04:13:06 2019
  OS/Arch:          linux/amd64
  Experimental:     true
 Kubernetes:
  Version:          v1.10.11
  StackAPI:         Unknown
PS C:\Users\ibrahim_shamma>

```
The OS/Arch field tells you the operating system and CPU architecture you're using. Docker is cross-platform, so you can manage Windows Docker servers from a Linux client and vice-versa, using the same docker commands.

## Running Your First NGINX application

```
PS C:\Users\ibrahim_shamma> docker run -d -p 80:80 nginx
567450d768e42e521bf3cec945d07bc3f796b6c5503d971881f5169e30a73215
```

## Running Your First Nginx based Docker Container

```
PS C:\Users\ibrahim_shamma> docker run -d -p 81:80 ajeetraina/hellowhale
33e673c86f63990cdac2c155bc6bfe20a7b7809b82434908bc38517ae029d0e8
```
## Run commands


```
git clone https://github.com/nlp-infotointell/i2i-test
cd ./i2i-test

docker build -t client .

docker run --name CLIENT_CONTAINER -p 0.0.0.0:5000:3000 client
```