import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Redux',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar Redux Toolkit e suas funcionalidades',
      1
    ),
    new Tarefa(
      'Criar projeto',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Criar um projeto utilizando Redux Toolkit',
      2
    ),
    new Tarefa(
      'Revisar código',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Revisar o código do projeto atual',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
