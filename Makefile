.PHONY: all help
.PHONY: setup package
.PHONY: be-up be-build be-explore be-build be-kill
.PHONY: fe-setup fe-code

all: help 
help:
	@echo "\nUsage: \n\n\
	make setup               Install frontend dependencies, build the backend container \n\
	make build               Compile the frontend code and build the backend container \n\n\
	make be-code             Run all containers and access the backend container via a shell \n\
	make be-up               Run all containers in the background \n\
	make be-build            Build the backend container \n\
	make be-kill             Kill all running containers \n\
	make be-explore          Access a running backend container via a shell \n\n\
	make fe-setup            Install frontend dependencies \n\
	make fe-build            Compile the frontend code \n\
	make fe-code             Compile the frontend code in watch mode \n"

# Project tasks

setup: fe-setup be-build
package: be-build fe-build

# Back-end tasks

be-code: be-up be-explore

be-up: 
	@docker-compose up -d

be-build: 
	@docker-compose build --no-cache

be-kill:
	@docker-compose kill

be-explore:
	@docker-compose exec dribble-backend zsh 

# Front-end tasks

fe-setup:
	@npm --prefix frontend install

fe-build:
	@npm run --prefix frontend build

fe-code:
	@npm run --prefix frontend watch