# Dribble

Team scheduling application built in Rails as a learning exercise.

_in progress_

## Setup

1. Clone this repo `$ git clone git@github.com:minustime/dribble.git && cd dribble` 
2. Update the `dribble.env` file
3. Run and enter the container `$ make code` 
4. Install dependencies `$ bundle install`
5. Create the database and users

```
$ mysql -h mysql -u root -p<MYSQL_ROOT_PASSWORD from dribble.env>

mysql> create database dribble_development
mysql> grant all privileges on dribble_development.* to 'username'@'%' identified by <DB_PASSWORD from dribble.env> 
```

6. Setup the database `$ rails db:migrate`
7. Run the server `$ rails s`

## Usage

Visit [http://localhost:3000](http://localhost:3000)