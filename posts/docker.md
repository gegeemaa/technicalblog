---
title: Docker gej yu ve?
date: '2023-07-24'
---

Docker ni clowd bogood bi neg command bichehed tsaanaa minii helsen envirement-iig file baidlaar beldej ogood docker-iig ajluulahad terhuu envirement-iig minii computer deer suulgaj ogdog zuil yum. 

Doorh zurgan haragdaj baigaachlan Dockerfile dotor tuhain project-iig ajilluulahad heregtei envirement-aa todorhoiloh ba Docker hub ni ene file-iin daguu X MB file buyu image beldeg ogno. Docker-oo start hiih ued ene image file-aa minii pc-n deer install hiideg. Ene ued container asna. Untraah ued container untrana. 

<img src="/docker/image1.jpg">

### Set up MySQL db in docker:

1. Download the Docker application.
	Ubuntu deer herhen docker suulgah talaar doorh linknees harj bolno.
    https://www.databasestar.com/database-docker/

2. Set up an account on Docker Hub
3. Run Docker and download the database image
4. Run the image
5. Connect to the database and run some SQL

`sudo docker ps`
ajillaj baigaa container-iig harna.

`sudo docker images`
baigaa images-iig harna.

`sudo docker run hello-world`
hello world gesen image-iig Docker Hub-aas tataj avch bna.

doorh command-aar mysql db image -ee tataj avaad, ajluulna. Doorh deer time-reg gesen nertei container ajillana gej bna.
`docker run --name time-reg -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql`

Doorh ni container-iin neriig zaaj ogsongui. Ene ued ner ni automataar uusne.
`docker run --rm -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql`

Deer command-iig ajilluulsnii daraa time-reg nertei container ajlana.
