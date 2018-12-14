FROM node:10.14.2-slim

LABEL version="1.1.0"
LABEL repository="https://github/lannonbr/repo-push-check-action"
LABEL maintainer="Benjamin Lannon <benjamin@lannonbr.com>"

LABEL com.github.actions.name="Repo Push Check Action"
LABEL com.github.actions.description="Check if a user has push access to this repo"
LABEL com.github.actions.icon="check"
LABEL com.github.actions.color="green"

ADD package.json /package.json
ADD package-lock.json /package-lock.json
WORKDIR /
COPY . /

RUN npm ci

ENTRYPOINT ["node", "/index.js"]
