CREATE DATABASE IF NOT EXISTS team_forge_db;

USE team_forge_db;

CREATE TABLE poke_type (
    id TINYINT PRIMARY KEY,
    type_name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE user_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    profile_photo VARCHAR(255) DEFAULT 'default.png',
    user_role ENUM('user', 'moderator', 'admin') DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE pokemon (
    id INT PRIMARY KEY,
    pokemon_name VARCHAR(100) UNIQUE NOT NULL,
    type1_id TINYINT NOT NULL,
    type2_id TINYINT,
    height DECIMAL(4 , 1 ),
    weight DECIMAL(5 , 1 ),
    hp INT,
    attack INT,
    defense INT,
    special_attack INT,
    special_defense INT,
    speed INT,
    image_url VARCHAR(255),
    evolution_stage TINYINT CHECK (evolution_stage BETWEEN 0 AND 3),
    FOREIGN KEY (type1_id)
        REFERENCES poke_type (id)
        ON UPDATE CASCADE,
    FOREIGN KEY (type2_id)
        REFERENCES poke_type (id)
        ON UPDATE CASCADE
);

CREATE TABLE evolution (
    evolved_id INT,
    base_id INT,
    method TEXT,
    PRIMARY KEY (evolved_id, base_id),
    FOREIGN KEY (evolved_id)
        REFERENCES pokemon (id),
    FOREIGN KEY (base_id)
        REFERENCES pokemon (id)
);

CREATE TABLE ability (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ability_name VARCHAR(100) NOT NULL UNIQUE,
    ability_description VARCHAR(255) NOT NULL
);

CREATE TABLE pokemon_ability (
    pokemon_id INT NOT NULL,
    ability_id INT NOT NULL,
    ability_slot INT NOT NULL,
    PRIMARY KEY (pokemon_id , ability_slot),
    UNIQUE (pokemon_id , ability_id),
    FOREIGN KEY (pokemon_id)
        REFERENCES pokemon (id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (ability_id)
        REFERENCES ability (id)
        ON UPDATE CASCADE
);

CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL UNIQUE,
    item_description VARCHAR(250) NOT NULL,
    item_image VARCHAR(255)
);

CREATE TABLE move (
    id INT AUTO_INCREMENT PRIMARY KEY,
    move_name VARCHAR(100) NOT NULL UNIQUE,
    move_description VARCHAR(255),
    move_type TINYINT,
    power INT,
    accuracy INT,
    pp INT,
    category ENUM('physical', 'special', 'status'),
    FOREIGN KEY (move_type)
        REFERENCES poke_type (id)
        ON UPDATE CASCADE
);

CREATE TABLE pokemon_move (
    pokemon_id INT NOT NULL,
    move_id INT NOT NULL,
    PRIMARY KEY (pokemon_id , move_id),
    FOREIGN KEY (pokemon_id)
        REFERENCES pokemon (id)
        ON DELETE CASCADE,
    FOREIGN KEY (move_id)
        REFERENCES move (id)
);

CREATE TABLE team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    team_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES user_data (id)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE team_pokemon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_id INT NOT NULL,
    pokemon_id INT NOT NULL,
    position INT NOT NULL CHECK (position BETWEEN 1 AND 6),
    ability_id INT,
    item_id INT,
    FOREIGN KEY (team_id)
        REFERENCES team (id)
        ON DELETE CASCADE,
    FOREIGN KEY (pokemon_id)
        REFERENCES pokemon (id),
    FOREIGN KEY (ability_id)
        REFERENCES ability (id),
    FOREIGN KEY (item_id)
        REFERENCES item (id)
);


CREATE TABLE team_pokemon_move (
    team_pokemon_id INT NOT NULL,
    move_id INT NOT NULL,
    move_slot INT NOT NULL CHECK (move_slot BETWEEN 1 AND 4),
    PRIMARY KEY (team_pokemon_id , move_slot),
    FOREIGN KEY (team_pokemon_id)
        REFERENCES team_pokemon (id)
        ON DELETE CASCADE,
    FOREIGN KEY (move_id)
        REFERENCES move (id)
);

CREATE TABLE shared_team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_id INT NOT NULL,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    shared_team_description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (team_id)
        REFERENCES team (id)
        ON DELETE CASCADE,
    FOREIGN KEY (user_id)
        REFERENCES user_data (id)
        ON DELETE CASCADE
);

CREATE TABLE team_comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    shared_team_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (shared_team_id)
        REFERENCES shared_team (id)
        ON DELETE CASCADE,
    FOREIGN KEY (user_id)
        REFERENCES user_data (id)
        ON DELETE CASCADE
);

CREATE TABLE forum_post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)
        REFERENCES user_data (id)
        ON DELETE CASCADE
);

CREATE TABLE forum_reply (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id)
        REFERENCES forum_post (id)
        ON DELETE CASCADE,
    FOREIGN KEY (user_id)
        REFERENCES user_data (id)
        ON DELETE CASCADE
);

CREATE INDEX idx_pokemon_name ON pokemon(pokemon_name);
CREATE INDEX idx_move_name ON move(move_name);
CREATE INDEX idx_item_name ON item(item_name);
CREATE INDEX idx_shared_team_user ON shared_team(user_id);
CREATE INDEX idx_comment_team_date ON comment(shared_team_id, created_at);