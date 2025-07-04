# Hướng dẫn khởi động website Laptopboot
## Cài các tài nguyên cần thiết
### Frontend
```bash
cd frontend
npm i
```
### Tương tự với Backend
```bash
cd backend
npm i
```

## Khởi tạo database(Postgres)
### Cách1
Tạo DataBase và import backupfile (Yêu cầu PostgreSQL 17.5):
```bash
cd backend
createdb -U postgres <database_name>
psql -U <username> -d <database_name> -f mydb_backup.sql
```
Config file .env
```
DB_NAME = <database_name>
DB_USER = <username>
DB_PASS = <password>
DB_HOST = 'localhost'
```
### Cách2
Copy truy vấn được viết trong file db_backup2.sql vào PostgresSQL:

Config file .env
```
DB_NAME = <database_name>
DB_USER = <username>
DB_PASS = <password>
DB_HOST = 'localhost'
```

## Khởi động

### Frontend
```bash
cd frontend
nodemon server.js
```
### Tương tự với Backend
```bash
cd backend
nodemon index.js

```
