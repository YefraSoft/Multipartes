CREATE DATABASE multipartes;
USE multipartes;

-- Tabla de MARCAS
-- Esta tabla contiene las marcas de los vehículos.
-- Ejemplo: TOYOTA, FORD, HONDA, etc.
CREATE TABLE brand (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Identificador único para cada marca
    name VARCHAR(50) NOT NULL           -- Nombre de la marca (Ejemplo: 'TOYOTA', 'FORD', 'HONDA')
);

-- Tabla de MODELOS
-- Un modelo está relacionado con una marca y contiene información sobre ese modelo.
-- Ejemplo de modelo: TOYOTA COROLLA 2020, FORD FOCUS 2021, etc.
CREATE TABLE model (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Identificador único para cada modelo
    brand_id INT,                         -- ID de la marca a la que pertenece el modelo (relacionado con la tabla 'brand')
    serial_number VARCHAR(255),           -- Número de serie del modelo (Ejemplo: 'JTDKB20U487500102')
    name VARCHAR(50),                     -- Nombre del modelo (Ejemplo: 'Corolla', 'Civic', 'Mustang')
    year INT,                             -- Año de fabricación del vehículo (Ejemplo: 2020, 2021)
    transmission VARCHAR(30),             -- Tipo de transmisión (Ejemplo: 'Manual', 'Automática', 'CVT')
    direction_system VARCHAR(50),         -- Sistema de dirección (Ejemplo: 'Hidráulico', 'Electrónico', 'Asistido')
    fuel_system VARCHAR(50),              -- Sistema de combustible (Ejemplo: 'Inyección electrónica', 'Carburador', 'Directo')
    engine VARCHAR(50),                   -- Tipo de motor (Ejemplo: '4 cilindros', 'V6', 'Eléctrico')
    version VARCHAR(50),                  -- Versión del modelo (Ejemplo: 'Sport', 'Luxury', 'Basic')
    vehicle_class VARCHAR(50),            -- Clase del vehículo (Ejemplo: 'Sedan', 'SUV', 'Pickup', 'Coupe')
    FOREIGN KEY (brand_id) REFERENCES brand(id) -- Relación con la tabla 'brand'
);

-- Tabla de SISTEMAS
-- Esta tabla contiene los diferentes sistemas asociados a un modelo (ejemplo: eléctrico, mecánico, colisión, etc.)
-- Ejemplo de categoría de sistema: 'ELECTRICAL', 'MECHANICAL', 'COLLISION'
CREATE TABLE systems (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Identificador único para cada sistema
    category ENUM('ELECTRICAL', 'COLLISION', 'MECHANICAL', 'ACCESSORIES') NOT NULL, -- Categoría del sistema (Ejemplo: 'ELECTRICAL', 'MECHANICAL', 'COLLISION')
    model_id INT,                       -- ID del modelo al que pertenece el sistema (relacionado con la tabla 'model')
    FOREIGN KEY (model_id) REFERENCES model(id) -- Relación con la tabla 'model'
);

-- Tabla de PIEZAS
-- Contiene las piezas asociadas a un sistema específico de un modelo.
-- Ejemplo de piezas: 'Alternador', 'Amortiguador', 'Parachoques'
CREATE TABLE parts (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Identificador único para cada pieza
    serial VARCHAR(255),                  -- Número de serie único de la pieza (Ejemplo: 'ALT123456')
    name VARCHAR(255),                    -- Nombre de la pieza (Ejemplo: 'Alternador', 'Amortiguador', 'Parachoques')
    position ENUM('RIGHT', 'LEFT', 'UNIDIRECCTIONAL') NOT NULL, -- Posición de la pieza (Ejemplo: 'RIGHT', 'LEFT', 'BIDIRECTIONAL')
    color VARCHAR(50),                    -- Color de la pieza (Ejemplo: 'Negro', 'Blanco', 'Gris')
    material VARCHAR(50),                 -- Material de la pieza (Ejemplo: 'Aluminio', 'Acero', 'Plástico')
    system_id INT,                        -- ID del sistema al que pertenece la pieza (relacionado con la tabla 'systems')
    part_type VARCHAR(50),                -- Tipo de pieza (Ejemplo: 'Motor', 'Suspensión', 'Transmisión', 'Eléctrico')
    price DECIMAL(10, 2),                 -- Precio de la pieza (Ejemplo: 150.75)
    FOREIGN KEY (system_id) REFERENCES systems(id) -- Relación con la tabla 'systems'
);
