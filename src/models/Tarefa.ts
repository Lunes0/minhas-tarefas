import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  constructor(
    public titulo: string,
    public prioridade: enums.Prioridade,
    public status: enums.Status,
    public descricao: string,
    public id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
