-- Create appuser Table and insert data
CREATE TABLE appuser (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO appuser (username, email)
VALUES ('user1 surname1', 'user.1@test.com');

INSERT INTO appuser (username, email)
VALUES ('user2 surname2', 'user.2@test.com');

-- Insert more data if needed
