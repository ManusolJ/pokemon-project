CREATE DATABASE team_forge_db;

USE team_forge_db;

CREATE TABLE user_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_photo VARCHAR(255) DEFAULT 'default.png'
);

CREATE TABLE user_pokemon_team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    team_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_data(id) ON DELETE CASCADE
);

CREATE TABLE pokemon (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type1 VARCHAR(50),
    type2 VARCHAR(50),
    hp INT,
    attack INT,
    defense INT,
    special_attack INT,
    special_defense INT,
    speed INT,
    image_url VARCHAR(255),
    evolution_stage TINYINT CHECK (evolution_stage BETWEEN 1 AND 3)
);


CREATE TABLE ability (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE pokemon_ability (
    pokemon_id INT NOT NULL,
    ability_id INT NOT NULL,
    is_hidden BOOLEAN DEFAULT FALSE,
    slot INT,
    PRIMARY KEY (pokemon_id, ability_id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
    FOREIGN KEY (ability_id) REFERENCES ability(id)
);

CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE pokemon_item (
    pokemon_id INT NOT NULL,
    item_id INT NOT NULL,
    PRIMARY KEY (pokemon_id, item_id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES item(id)
);

CREATE TABLE move (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE pokemon_move (
    pokemon_id INT NOT NULL,
    move_id INT NOT NULL,
    level_learned_at INT DEFAULT 0,
    learn_method VARCHAR(50),
    version_group VARCHAR(50),
    PRIMARY KEY (pokemon_id, move_id, version_group),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
    FOREIGN KEY (move_id) REFERENCES move(id)
);

CREATE TABLE team_pokemon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_id INT NOT NULL,
    pokemon_id INT NOT NULL,
    position INT CHECK (position BETWEEN 1 AND 6),
    ability_id INT,
    item_id INT,
    FOREIGN KEY (team_id) REFERENCES user_pokemon_team(id) ON DELETE CASCADE,
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
    FOREIGN KEY (ability_id) REFERENCES ability(id),
    FOREIGN KEY (item_id) REFERENCES item(id)
);

CREATE TABLE team_pokemon_move (
    team_pokemon_id INT NOT NULL,
    move_id INT NOT NULL,
    move_slot INT CHECK (move_slot BETWEEN 1 AND 4),
    PRIMARY KEY (team_pokemon_id, move_slot),
    FOREIGN KEY (team_pokemon_id) REFERENCES team_pokemon(id) ON DELETE CASCADE,
    FOREIGN KEY (move_id) REFERENCES move(id)
);

CREATE TABLE shared_team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_id INT NOT NULL,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (team_id) REFERENCES user_pokemon_team(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user_data(id) ON DELETE CASCADE
);

CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    shared_team_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (shared_team_id) REFERENCES shared_team(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user_data(id) ON DELETE CASCADE
);

CREATE TABLE forum_post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user_data(id) ON DELETE CASCADE
);

CREATE TABLE forum_reply (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES forum_post(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user_data(id) ON DELETE CASCADE
);
