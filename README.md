# Dribble

Team scheduling application built in Rails as a learning exercise.

_in progress_

## Setup

1. Clone this repo `$ git clone git@github.com:minustime/dribble.git && cd dribble` 
2. Update the `dribble.env` file
3. Compile the frontend code `$ make fe-build` 
4. Run and enter the backend container `$ make be-code` 
5. Create the database users

```
$ mysql -h mysql -u root -p<MYSQL_ROOT_PASSWORD from dribble.env>
mysql> grant all privileges on dribble_development.* to 'username'@'%' identified by <DB_PASSWORD from dribble.env> 
```

6. Prepare the databases `$ rails db:create && rails db:migrate`

## Development

1. Run and enter the backend container `$ make be-code`
2. On a separate shell, compile the frontend code in watch mode `$ make fe-code`
3. Make updates to the application
4. Build the image and all frontend code `$ make build`


## Usage

Visit [http://localhost:3000](http://localhost:3000)