
USE ClassCode;

CREATE TABLE Aluno (
    idAluno int primary key,
    nomeAluno varchar(75),
    emailAluno varchar(50),
    instEnsinoAluno varchar(50)
);

CREATE TABLE Tutor (
    idTutor int primary key,
    nomeTutor varchar(50),
    emailTutor varchar(50),
	instEnsinoTutor varchar(50),
    statusDisponibilidade varchar(10)
);

CREATE TABLE CategoriaDuvida (
    idCategoriaDuvida int primary key,
    descricaoDuvida varchar(200)
);

CREATE TABLE Minutos (
    idMinutos int primary key,
    quantidadeMinutos int,FOREIGN KEY (quantidadeMinutos) REFERENCES minutos (idMinutos),
    idAluno int, FOREIGN KEY (idAluno) REFERENCES Aluno(idAluno)
);

CREATE TABLE Duvida (
    idDuvida int primary key,
    descricaoDuvida varchar(200),
    idAluno int, FOREIGN KEY (idAluno) REFERENCES Aluno(idAluno),
    idCategoriaDuvida int,FOREIGN KEY (idCategoriaDuvida) REFERENCES CategoriaDuvida(idCategoriaDuvida),
    idTutorDestinatario int,FOREIGN KEY (idTutorDestinatario) REFERENCES Tutor(idTutor)
);


CREATE TABLE Aula (
    idAula  int primary key,
    idDuvida int, FOREIGN KEY (idDuvida) REFERENCES Duvida(idDuvida),
    idTutor int, FOREIGN KEY (idTutor) REFERENCES Tutor(idTutor),
    idAluno int, FOREIGN KEY (idAluno) REFERENCES Aluno(idAluno),
    horaInicioAula timestamp,
    horaFimAula time
);

