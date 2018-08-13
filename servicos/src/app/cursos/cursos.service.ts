import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    constructor(private logService: LogService) {
        console.log("Criou aqui ó")
    }

    cursos: string[] = ["Java", "Angular", "React"]
    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}