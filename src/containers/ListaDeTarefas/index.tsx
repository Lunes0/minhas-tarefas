import { Container, Resultado } from './styles'
import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'Status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      } else if (criterio === 'Prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const resuldadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    const plural = quantidade > 1 ? 's' : ''

    if (criterio === 'Todas') {
      mensagem = `${quantidade} tarefa${plural} encontrada${plural} como: "Todas" ${complemento}`
    } else {
      mensagem = `${quantidade} tarefa${plural} encontrada${plural} como: "${criterio} = ${valor}" ${complemento}`
    }
    return mensagem
  }

  const tarefas = filtrarTarefas()
  const mensagem = resuldadoFiltragem(tarefas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
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
}

export default ListaDeTarefas
