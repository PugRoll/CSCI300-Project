**Goal:** Setup a simple http-server to run locally to test the website.
---

### Install NodeJS
1. Install NodeJS to get NPM
> nodejs.org/en/download

### Check to make sure npm works
Use this command to check the version of npm, also ensures it was installed properly
```bash
npm --version
```
1. Your output should look like
> 8.19.2

### Install `http-server`
- `http-server` is a simple http-server that runs in your directory and serves the file. Not exactly the most secure, but simple and clean for our needs
1. Install `http-sever globally`
```bash
npm install --global http-server
```
2. This can be run locally in the project folder without much configuration elsewhise. To do so
```bash
#./path/to/project-file/CSCI300-Project
http-server -o -c-1
```
- `-o` opens a browser after starting
- `-c-1` disables caching, great for testing and I recommend it.

