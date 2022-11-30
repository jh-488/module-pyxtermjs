FROM ubuntu:20.04

RUN apt-get update --fix-missing
RUN apt-get install -y \
    apt-utils \
    python3 \
    python3-pip \
    vim \
    zsh

COPY . /var/www
WORKDIR "/var/www"

RUN pip3 install -r requirements.txt

# Setup appuser and appgroup
ARG user=appuser
ARG group=appuser
ARG uid=1000
ARG gid=1000
RUN groupadd -g ${gid} ${group}
RUN useradd -u ${uid} -g ${group} -s /bin/sh -m ${user} # <--- the '-m' create a user home directory

COPY _assets/.zshrc /home/appuser/.zshrc
COPY _assets/oh-my-zsh /home/appuser/.oh-my-zsh

# Switch to user we must not set group to make the configuration done above apply
# !! if ${user} is not setup correctly the next line might result in group being root !!
USER ${user}

EXPOSE 5000

ENTRYPOINT python3 -m pyxtermjs --cors True --host 0.0.0.0 --command zsh
