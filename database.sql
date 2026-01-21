CREATE DATABASE facultad_ingenieria;
USE facultad_ingenieria;

CREATE TABLE docentes (
    id_docente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    activo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE estudiantes (
    id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_docente INT,
    FOREIGN KEY (id_docente) REFERENCES docentes(id_docente)
);

CREATE TABLE periodos (
    id_periodo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL
);

CREATE TABLE matriculas (
    id_matricula INT AUTO_INCREMENT PRIMARY KEY,
    id_estudiante INT,
    id_curso INT,
    id_periodo INT,
    FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id_estudiante),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso),
    FOREIGN KEY (id_periodo) REFERENCES periodos(id_periodo)
);

CREATE TABLE calificaciones (
    id_calificacion INT AUTO_INCREMENT PRIMARY KEY,
    id_matricula INT,
    nota DECIMAL(3,1) CHECK (nota BETWEEN 0 AND 5),
    fecha DATE NOT NULL,
    FOREIGN KEY (id_matricula) REFERENCES matriculas(id_matricula)
);

INSERT INTO docentes (nombre, activo) VALUES
('Ana Gómez', TRUE),
('Carlos Pérez', TRUE),
('Luis Torres', FALSE);

INSERT INTO estudiantes (nombre) VALUES
('María López'),
('Juan Rodríguez'),
('Sofía Martínez');

INSERT INTO periodos (nombre, fecha_inicio, fecha_fin) VALUES
('2021-1', '2021-01-15', '2021-06-30'),
('2022-1', '2022-01-15', '2022-06-30'),
('2023-1', '2023-01-15', '2023-06-30');

INSERT INTO cursos (nombre, id_docente) VALUES
('Cálculo I', 1),
('Álgebra Lineal', 2);

INSERT INTO matriculas (id_estudiante, id_curso, id_periodo) VALUES
(1, 1, 1),
(2, 1, 1),
(3, 2, 2);

INSERT INTO calificaciones (id_matricula, nota, fecha) VALUES
(1, 4.5, '2021-06-15'),
(2, 3.8, '2021-06-16'),
(3, 4.2, '2022-06-15');

SELECT COUNT(*) AS docentes_activos
FROM docentes
WHERE activo = TRUE;

SELECT DISTINCT c.nombre
FROM cursos c
JOIN matriculas m ON c.id_curso = m.id_curso
JOIN periodos p ON m.id_periodo = p.id_periodo
WHERE p.nombre = '2021-1';

SELECT DISTINCT e.nombre
FROM estudiantes e
JOIN matriculas m ON e.id_estudiante = m.id_estudiante
JOIN periodos p ON m.id_periodo = p.id_periodo
WHERE p.nombre = '2023-1';

SELECT AVG(ca.nota) AS promedio_notas
FROM calificaciones ca
JOIN matriculas m ON ca.id_matricula = m.id_matricula
JOIN cursos c ON m.id_curso = c.id_curso
WHERE c.nombre = 'Cálculo I'
  AND ca.fecha >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR);

DELIMITER $$

CREATE PROCEDURE crear_curso (
    IN nombre_curso VARCHAR(100),
    IN id_docente INT
)
BEGIN
    INSERT INTO cursos (nombre, id_docente)
    VALUES (nombre_curso, id_docente);
END $$

DELIMITER ;

CALL crear_curso('Programación I', 1);

