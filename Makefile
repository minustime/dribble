.PHONY: all help code explore up build kill

all: help 
help:
	@echo "\nUsage: \n\n\
	make code                Bring container up and enter it \n\
	make explore             Enter the running container \n\
	make up                  Run container in the background \n\
	make build               Build the container \n\
	make kill                Kill the running container \n"

code: up explore
explore:
	@docker-compose exec dribble zsh 
up: 
	@docker-compose up -d
build: 
	@docker-compose build --no-cache
kill:
	@docker-compose kill