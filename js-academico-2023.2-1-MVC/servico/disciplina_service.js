class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        this.validarDisciplina(codigo);        
        const disciplinaNova = new Disciplina(nome, codigo);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    validarDisciplina(codigo) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        const errorString = 'Disciplina já cadastrada';
        if (disciplinaPesquisada.length > 0) {
            alert(errorString)
            throw new Error(errorString);
        }
    }

    inserirAlunoNaDisciplina(aluno, codigo) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo)[0];
        if (disciplinaPesquisada) {
            disciplinaPesquisada.adicionarAluno(aluno);
        }
    }

    listar() {
        return this.repositorio.listar();
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    atualizarNome(codigo, novoNome) {
        this.repositorio.atualizarNome(codigo, novoNome);
    }
}
