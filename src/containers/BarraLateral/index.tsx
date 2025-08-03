import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros?: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="Status"
                legenda="Pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="Status"
                legenda="Concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="Prioridade"
                legenda="Urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="Prioridade"
                legenda="Importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="Prioridade"
                legenda="Normal"
              />
              <FiltroCard criterio="Todas" legenda="Todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
