import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar React',
    prioridade: 'Importante',
    status: 'Pendente',
    descricao: 'Ver aula 4'
  },
  {
    titulo: 'Pagar contas',
    prioridade: 'Urgente',
    status: 'Concluída',
    descricao: 'Acessar faturas pelo e-mail'
  },
  {
    titulo: 'Academia',
    prioridade: 'Normal',
    status: 'Pendente',
    descricao: 'Treinar pernas'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
            titulo={t.titulo}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
