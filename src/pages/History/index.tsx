import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useCycle } from '../../contexts/CyclesContext'
import * as S from './styles'

export const History = () => {
  const { cycle } = useCycle()

  console.log(cycle)

  return (
    <S.Container>
      <h1>Meu histórico</h1>

      <S.HistoryTable>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycle.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <S.Status statusColor="green">Concluído</S.Status>
                    )}
                    {cycle.interruptedDate && (
                      <S.Status statusColor="red">Interrompido</S.Status>
                    )}
                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <S.Status statusColor="yellow">Em andamemto</S.Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </S.HistoryTable>
    </S.Container>
  )
}
