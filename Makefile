up:
	@docker-compose up -d
down:
	@docker-compose down
logs:
	@docker-compose logs -f
ps:
	@docker-compose ps -a
destroy:
	@docker-compose down -v all --rmi all