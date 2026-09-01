import alunoRepository from '../repositories/AlunoRepository.js'

class AlunoService {
  async listarAlunos() {
    return alunoRepository.findAll()
  }

  async buscarAlunoPorId(id) {
    const aluno = await alunoRepository.findById(id)

    if (!aluno) {
      const error = new Error('Aluno não encontrado')
      error.statusCode = 404
      throw error
    }

    return aluno
  }

  async criarAluno(dados) {
    const { nome, curso } = dados

    // O nome e curso não podem ser vazios ou conter apenas espaços
    if (!nome || !nome.trim()) {
      const error = new Error('Nome é obrigatório')
      error.statusCode = 400
      throw error
    }

    if (!curso || !curso.trim()) {
      const error = new Error('Curso é obrigatório')
      error.statusCode = 400
      throw error
    }

    // Normalizar os dados antes de salvar para evitar espaçamentos extras no banco
    const alunoFormatado = {
      nome: nome.trim(),
      curso: curso.trim()
    }

    return alunoRepository.create(alunoFormatado)
  }

  async atualizarAluno(id, dados) {
    const { nome, curso } = dados

    // A validação da criação é aplicada na atualização para garantir que os campos não sejam nulos ou vazios
    if (!nome || !nome.trim()) {
      const error = new Error('Nome é obrigatório')
      error.statusCode = 400
      throw error
    }

    if (!curso || !curso.trim()) {
      const error = new Error('Curso é obrigatório')
      error.statusCode = 400
      throw error
    }

    const alunoExiste = await alunoRepository.findById(id)

    if (!alunoExiste) {
      const error = new Error('Aluno não encontrado')
      error.statusCode = 404
      throw error
    }

    const alunoFormatado = {
      nome: nome.trim(),
      curso: curso.trim()
    }

    return alunoRepository.update(id, alunoFormatado)
  }

  async deletarAluno(id) {
    const aluno = await alunoRepository.findById(id)

    if (!aluno) {
      const error = new Error('Aluno não encontrado')
      error.statusCode = 404
      throw error
    }

    const removido = await alunoRepository.delete(id)

    if (!removido) {
      const error = new Error('Aluno não encontrado')
      error.statusCode = 404
      throw error
    }

    return true
  }
}

export default new AlunoService()
