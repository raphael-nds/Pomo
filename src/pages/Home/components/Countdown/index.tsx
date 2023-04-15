// import { differenceInSeconds } from 'date-fns'
// import { useEffect } from 'react'
import { useCycle } from '../../../../contexts/CyclesContext'
import * as S from './styles'

export const Countdown = () => {
  const {
    activeCycle,
    // activeCycleId,
    // markCurrentCycleAsFinished,
    amountCurrentSecond,
    // setAmountSecond,
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
  // useEffect(() => {
  //   let interval: number

  //   if (activeCycle) {
  //     interval = setInterval(() => {
  //       const secondsDifference = differenceInSeconds(
  //         new Date(),
  //         activeCycle.startDate,
  //       )

  //       if (secondsDifference >= totalSecond) {
  //         markCurrentCycleAsFinished()
  //         setAmountSecond(totalSecond)
  //         clearInterval(interval)
  //       } else {
  //         setAmountSecond(secondsDifference)
  //       }
  //     }, 1000)
  //   }

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [
  //   activeCycle,
  //   activeCycleId,
  //   markCurrentCycleAsFinished,
  //   setAmountSecond,
  //   totalSecond,
  // ])

  // TITULO DA PAGINA COM CONTADOR
  // useEffect(() => {
  //   if (activeCycle) {
  //     document.title = `${minutes}:${seconds}`
  //   } else document.title = `Meu Tempo`
  // }, [minutes, seconds, activeCycle])

  return (
    <S.Container>
      <div>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
      </div>
      <S.Separator>:</S.Separator>
      <div>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </div>
    </S.Container>
  )
}
