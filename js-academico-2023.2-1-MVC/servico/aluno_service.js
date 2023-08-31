class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        this.validarAluno(idade, matricula);        
        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        return this.repositorio.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    validarAluno(idade, matricula) {
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        let errorString = 'Aluno menor de idade!';
        if (alunoPesquisado.length > 0) {
            errorString = 'Aluno já cadastrado!';
            alert(errorString)
            throw new Error(errorString);
        }        
        if(idade < 18) {
            alert(errorString)
            throw new Error(errorString);
        }
    }

    listar() {
        return this.repositorio.listar();
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    listarMenoresIdade() {
        return this.repositorio.listar().filter(aluno => aluno.idade < 18);
    }
}
