include .env.dev
export

test_env:
	echo $$SQL_DATABASE

compose_up:
	docker-compose up -d --build

prepare_db:
	docker cp ./sql/usertable.sql flud_db_1:/usertable.sql
	docker exec -i flud_db_1 psql -U $$SQL_USER -d $$SQL_DATABASE -f /usertable.sql

create_games:
	docker exec -i flud_web_1 python manage.py create_games
	docker exec -i flud_web_1 python manage.py runcrons --force