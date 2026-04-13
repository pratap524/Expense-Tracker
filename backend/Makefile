run:
	flask run --host=0.0.0.0 --port=5000

test:
	pytest -q

lint:
	python -m py_compile app/wsgi.py

migrate:
	flask db migrate

upgrade:
	flask db upgrade
