CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text,
    last_name text,
    email varchar(2000),
    password varchar(2000)
);

CREATE TABLE properties (
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id),
    title text,
    zip_code int,
    address text,
    description text,
    price int,
    sold bool default false

);

CREATE TABLE categories (
    id serial PRIMARY KEY,
    category_title text
);

CREATE TABLE property_category (
    property_id int REFERENCES properties(id),
    category_id int REFERENCES categories(id)
);

-- CREATE TABLE offers (
--     id serial PRIMARY KEY,
--     offer int,
--     item_id int REFERENCES items(id),
--     user_id int REFERENCES users(id)
-- );