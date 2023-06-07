Create database classcode;

USE classCode;

CREATE TABLE Alunos (
    idAluno int primary key auto_increment,
    nomeAluno varchar(75),
    emailAluno varchar(50),
    instEnsinoAluno varchar(50)
);

CREATE TABLE Tutores (
    idTutor int primary key,
    nomeTutor varchar(50),
    emailTutor varchar(50),
	instEnsinoTutor varchar(50),
    statusDisponibilidade varchar(10)
);

CREATE TABLE CategoriaDuvidas (
    idCategoriaDuvida int primary key,
    descricaoDuvida varchar(200)
);

CREATE TABLE Minutos (
    idMinutos int primary key,
    quantidadeMinutos int,
    idAluno int, FOREIGN KEY (idAluno) REFERENCES Alunos(idAluno)
);

CREATE TABLE Duvidas (
    idDuvida int primary key,
    descricaoDuvida varchar(200),
    idAluno int, FOREIGN KEY (idAluno) REFERENCES Alunos(idAluno),
    idCategoriaDuvida int,FOREIGN KEY (idCategoriaDuvida) REFERENCES CategoriaDuvidas(idCategoriaDuvida),
    idTutorDestinatario int,FOREIGN KEY (idTutorDestinatario) REFERENCES Tutores(idTutor)
);


CREATE TABLE Aulas (
    idAula  int primary key,
    idDuvida int, FOREIGN KEY (idDuvida) REFERENCES Duvidas(idDuvida),
    idTutor int, FOREIGN KEY (idTutor) REFERENCES Tutores(idTutor),
    idAluno int, FOREIGN KEY (idAluno) REFERENCES Alunos(idAluno),
    horaInicioAula timestamp,
    horaFimAula time
);
