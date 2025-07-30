import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={4} />
        <FiltroCard legenda="Concluídas" contador={3} />
        <FiltroCard legenda="Urgentes" contador={1} />
        <FiltroCard legenda="Importantes" contador={2} />
        <FiltroCard legenda="Normal" contador={4} />
        <FiltroCard legenda="Todas" contador={7} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
