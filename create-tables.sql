create table films (
  id integer primary key autoincrement,
  name text not null unique
);

create table collections (
  id integer primary key autoincrement,
  name text not null unique
);

create table collection_films (
  collection_id integer,
  film_id integer
);

create unique index idx_collection_film
  on collection_films (collection_id, film_id);
