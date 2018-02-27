create table films (
  id integer primary key autoincrement,
  name text not null unique
);

create table franchises (
  id integer primary key autoincrement,
  name text not null unique
);

create table franchise_films (
  franchise_id integer,
  film_id integer
);

create unique index idx_franchise_film
  on franchise_films (franchise_id, film_id);
