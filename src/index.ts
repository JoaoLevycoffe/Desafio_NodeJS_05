/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { ftruncateSync } from "fs";
import { error } from "console";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	class Aluno {
		nome: string;
		idade: number;
		nota: number;

		constructor(nome: string, idade: number, nota: number) {
			this.nome = nome
			this.idade = idade
			this.nota = nota
		}
	}
	
		let alunos:Array<Aluno> = [
		{ nome: 'Camilly',
		 idade: 18,
		  nota: 10},
		{ nome: 'Sophia',
		 idade: 20,
		  nota: 8.3},
		{ nome: 'Stella',
		 idade: 25,
		  nota: 9.6,}
	]

	let somaDasIdade = alunos.reduce((anterior, atual)=> anterior+atual.nota, 0) 
	console.log(somaDasIdade)
	
	const fastcsv = require('fast-csv');
	const fs = require('fs');
	const ws = fs.createWriteStream("out.csv");
	fastcsv
  .write(alunos, { headers: true })
  .pipe(ws);

});	

function data(data: any, arg1: { headers: boolean; }) {
	throw new Error("Function not implemented.");
}

