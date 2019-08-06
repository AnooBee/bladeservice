DROP TABLE IF EXISTS blades;

CREATE TABLE blades (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  stars INT NOT NULL,
  notes VARCHAR(512) DEFAULT NULL
);

INSERT INTO blades (name, stars, notes) VALUES
  ('Feather', 4, 'Good'),
  ('Wilkinson', 3, 'okay'),
  ('Silver', 3, 'bleh');