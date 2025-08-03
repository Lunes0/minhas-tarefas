import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        status: enums.Status.PENDENTE,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Form onSubmit={cadastrarTarefa}>
        <Titulo>Nova Tarefa</Titulo>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título da tarefa"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <h3>Prioridade</h3>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                onChange={({ target }) =>
                  setPrioridade(target.value as enums.Prioridade)
                }
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
