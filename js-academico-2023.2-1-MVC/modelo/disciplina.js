class Disciplina {

  constructor(nome, codigo) {
    this._nome = nome;
    this._codigo = codigo;
    this._alunos = [];
  }  
  get nome() {
    return this._nome;
  }
  
  set nome(novoNome) {
    this._nome = novoNome;
  }

  get codigo() {
    return this._codigo;
  }

  set codigo(novoCodigo) {
    this._codigo = novoCodigo;
  }

  get alunos() {
    return this._alunos;
  }

  adicionarAluno(aluno) {
    this._alunos.push(aluno);
  }

  removerAluno(aluno) {
    const index = this._alunos.indexOf(aluno);
    if (index !== -1) {
      this._alunos.splice(index, 1);
    }
  }
}
