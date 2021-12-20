CREATE TABLE "teachers_subjects" (
	"id" serial NOT NULL,
	"teacher_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	CONSTRAINT "teachers_subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"period_id" integer NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" varchar(10) NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"name" varchar(10) NOT NULL,
	"link" varchar(255) NOT NULL UNIQUE,
	"category_id" integer NOT NULL,
	"teacher_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "periods" (
	"id" serial NOT NULL,
	"name" varchar(10) NOT NULL,
	CONSTRAINT "periods_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");

ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("type_id") REFERENCES "subject_types"("id");
CREATE TABLE "public.teachers_subjects" (
	"id" serial NOT NULL,
	"teacher_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	CONSTRAINT "teachers_subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"period_id" integer NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.teachers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.categories" (
	"id" serial NOT NULL,
	"name" varchar(10) NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.exams" (
	"id" serial NOT NULL,
	"name" varchar(10) NOT NULL,
	"link" varchar(255) NOT NULL UNIQUE,
	"category_id" integer NOT NULL,
	"teacher_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "periods" (
	"id" serial NOT NULL,
	"name" varchar(10) NOT NULL,
	CONSTRAINT "periods_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");


ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("period_id") REFERENCES "periods"("id");


ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("category_id") REFERENCES "categories"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk2" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");



INSERT INTO teachers (name) VALUES ('Kael Mafra Fagundes');
INSERT INTO teachers (name) VALUES ('Valentim Bessa Pegado');
INSERT INTO teachers (name) VALUES ('Yasmine Regueira Guilheiro');
INSERT INTO teachers (name) VALUES ('Kailany Simão Frias');
INSERT INTO teachers (name) VALUES ('Oséias Pinhal Guterres');
INSERT INTO teachers (name) VALUES ('IDavide Severiano Vilarinho');
INSERT INTO teachers (name) VALUES ('Pavel Guterres Flávio');
INSERT INTO teachers (name) VALUES ('Djayson Pinheiro Viveiros');
INSERT INTO teachers (name) VALUES ('Salomão Cancela Serro');
INSERT INTO teachers (name) VALUES ('Ishan Bingre Aires');
INSERT INTO teachers (name) VALUES ('Mílton Vinhas Canejo');
INSERT INTO teachers (name) VALUES ('Roberta Martinho Carreiro');
INSERT INTO teachers (name) VALUES ('Maximiano Ornelas Medeiros');
INSERT INTO teachers (name) VALUES ('Chelsea Olivares Rodovalho');



INSERT INTO categories (name) VALUES ('P1');
INSERT INTO categories (name) VALUES ('P2');
INSERT INTO categories (name) VALUES ('P3');
INSERT INTO categories (name) VALUES ('P4');
INSERT INTO categories (name) VALUES ('P5');



INSERT INTO periods (name) VALUES ('1º');
INSERT INTO periods (name) VALUES ('2º');
INSERT INTO periods (name) VALUES ('3º');
INSERT INTO periods (name) VALUES ('4º');
INSERT INTO periods (name) VALUES ('5º');
INSERT INTO periods (name) VALUES ('6º');
INSERT INTO periods (name) VALUES ('7º');
INSERT INTO periods (name) VALUES ('8º');
INSERT INTO periods (name) VALUES ('9º');
INSERT INTO periods (name) VALUES ('10º');
INSERT INTO periods (name) VALUES ('Eletivas');



INSERT INTO subjects (name, period_id) VALUES ('Álgebra', 4);
INSERT INTO subjects (name, period_id) VALUES ('Probabilidade e Estatística', 3);
INSERT INTO subjects (name, period_id) VALUES ('Astronomia', 7);
INSERT INTO subjects (name, period_id) VALUES ('Física', 1);
INSERT INTO subjects (name, period_id) VALUES ('Geociências', 2);
INSERT INTO subjects (name, period_id) VALUES ('Genética', 6);
INSERT INTO subjects (name, period_id) VALUES ('Imunologia', 5);
INSERT INTO subjects (name, period_id) VALUES ('Microbiologia', 3);
INSERT INTO subjects (name, period_id) VALUES ('Farmacologia', 2);
INSERT INTO subjects (name, period_id) VALUES ('Botânica', 1);
INSERT INTO subjects (name, period_id) VALUES ('Zoologia', 4);
INSERT INTO subjects (name, period_id) VALUES ('Ecologia', 1);
INSERT INTO subjects (name, period_id) VALUES ('Filosofia', 1);
INSERT INTO subjects (name, period_id) VALUES ('Sociologia', 1);

