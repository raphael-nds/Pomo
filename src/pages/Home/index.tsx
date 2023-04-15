import * as S from './styles'

import { NewCycleForm } from './components/NewCycleForm'
import { useEffect } from 'react'
import { useCycle } from '../../contexts/CyclesContext'
import { differenceInSeconds } from 'date-fns'

export const Home = () => {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountCurrentSecond,
    setAmountSecond,
  } = useCycle()

  // CONVERTER TOTAL DE MINUTOS EM SEGUNDOS
  const totalSecond = activeCycle ? activeCycle.minutesAmount * 60 : 0

  // TOTAL DE SEGUNDOS ATUAL
  let currentSecond = activeCycle ? totalSecond - amountCurrentSecond : 0
  if (currentSecond < 0) currentSecond = 0

  // AJUSTAR CASAS DECIMAIS
  const minutes = String(Math.floor(currentSecond / 60)).padStart(2, '0')
  const seconds = String(currentSecond % 60).padStart(2, '0')

  // DECRESCER O CONTADOR
  // useEffect(() => {
  //   let interval: number

  //   if (activeCycle) {
  //     interval = setInterval(() => {
  //       setAmountSecond(differenceInSeconds(new Date(), activeCycle.startDate))
  //     }, 1000)
  //   }

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [activeCycle, setAmountSecond])

  //   FINALIZAR TAREFA
  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSecond) {
          markCurrentCycleAsFinished()
          setAmountSecond(totalSecond)
          clearInterval(interval)
        } else {
          setAmountSecond(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    setAmountSecond,
    totalSecond,
  ])

  // TITULO DA PAGINA COM CONTADOR
  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else document.title = `Meu Tempo`
  }, [minutes, seconds, activeCycle])

  return (
    <S.Container>
      <NewCycleForm />
    </S.Container>
  )
}
