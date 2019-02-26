# Dribble

Team scheduling application built in Rails as a learning exercise.

_in progress_

## Setup

1. Clone this repo `$ git clone git@github.com:minustime/dribble.git && cd dribble` 
2. Update the `dribble.env` file
3. Run and enter the container`$ make code` 
4. Create the database users

```
$ mysql -h mysql -u root -p<MYSQL_ROOT_PASSWORD from dribble.env>
mysql> grant all privileges on dribble_development.* to 'username'@'%' identified by <DB_PASSWORD from dribble.env> 
```
5. Prepare the databases `$ rails db:create & rails db:migrate`

## Development

### Backend

1. Run and enter the container `$ make code`
2. Make updates to the application
3. Exit the container and build the updates into the image `$ make build`
4. Run updated container `$ make code` 

### Frontend

_in progress_

## Usage

Visit [http://localhost:3000](http://localhost:3000)