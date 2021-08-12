INSERT INTO users
    (first_name, last_name, email, password)
VALUES
    ('Bob', 'Builder', 'email@example.com', 'password'),
    ('Alan', 'Grant', 'dinosaur@email.com', 'password');

INSERT INTO properties
    (user_id, title, zip_code, address, description, price)
VALUES
    (1, 'House for Sale', 12345, '678 Example St', 'Moderate sized home, 3 bathrooms and 2 bedrooms', 80000),
    (2, 'Apartment', 12345, '123 Example Dr', 'Looking for roomate', 400),
    (2, 'Apartment', 12215, '000 North Pole', 'Apartment for rent', 300),
    (2, 'Town Home', 22222, '122 Text St', 'For sale, in a great location', 40000);

INSERT INTO categories
    (category_title)
VALUES
    ('Apartment'),
    ('House'),
    ('Town Home'),
    ('Condo');

INSERT INTO property_category
    (property_id, category_id)
VALUES
    (1, 2),
    (2, 1),
    (3, 1),
    (4, 3);

-- INSERT INTO offers
--     (offer, item_id, user_id)
-- VALUES
--     (9, 1, 2);