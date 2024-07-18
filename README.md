# Laravel + ReactJS + Tailwind + Openweather API

This is a Laravel code for Openweather API with tailwind + reactJS.

- copy .env.example and make .env for your own local configuration 
- update the database credentials of your .env
- update the WEATHER_API_KEY with your openweather key
- make sure the database exist
- run the commands below 


```bash
npm run build
composer install
php artisan migrate
php artisan db:seed 
php artisan serve
```

## via browser

http://localhost:8000/

## tools
php 8.1
npm 8.19

