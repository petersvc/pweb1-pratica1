class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
        const codigoElemento = document.querySelector("#codigo");
        const disciplinaInserida = this.servico.inserir(nomeElemento.value, Number(codigoElemento.value));
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - codigo: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    inserirAlunoNaDisciplina(alunoControlador, matricula, codigoDadisciplina) {
        const aluno = alunoControlador.servico.pesquisarPorMatricula(matricula);
        this.servico.inserirAlunoNaDisciplina(aluno, codigoDadisciplina);
    }

    listarDisciplinas() {
        const listaDisciplinasElemento = document.querySelector('#listaDisciplinas');
        const disciplinas = this.servico.listar();
        disciplinas.forEach(disciplina => this.inserirDisciplinaNoHtml(disciplina, listaDisciplinasElemento));
    }

    remover(codigo) {
        this.servico.remover(codigo);
    }

    atualizarNome(codigo, novoNome){
        this.servico.atualizarNome(codigo, novoNome);
    }

}
