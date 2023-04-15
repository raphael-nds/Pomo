import { ReactNode, createContext, useContext, useState } from 'react'

interface CycleProviderProps {
  children: ReactNode
}
interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}
interface CreateCycleData {
  task: string
  minutesAmount: number
}
interface CycleContext {
  cycle: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountCurrentSecond: number
  markCurrentCycleAsFinished: () => void
  interruptedCurrentCycle: () => void
  createNewCycle: (data: CreateCycleData) => void
  setAmountSecond: (second: number) => void
}

const cycleContext = createContext({} as CycleContext)

export const CycleProvider = ({ children }: CycleProviderProps) => {
  const [cycle, setCycle] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountCurrentSecond, setAmountCurrentSecond] = useState(0)

  // VERIFICAR SE JÁ EXISTE UM CICLO EM ANDAMENTO
  const activeCycle = cycle.find(
    (cycle: { id: any }) => cycle.id === activeCycleId,
  )

  // set amount
  const setAmountSecond = (second: number) => {
    setAmountCurrentSecond(second)
  }
  // MARCAR CICLO ATUAL COMO FINALIZADO
  const markCurrentCycleAsFinished = () => {
    setCycle((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  // CRIAR NOVO CICLO
  const createNewCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycle((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountCurrentSecond(0)
  }

  // INTERROMPER CICLO
  const interruptedCurrentCycle = () => {
    cycle.map((cycle) => {
      if (cycle.id === activeCycleId)
        return { ...cycle, interruptedDate: new Date() }
      else return cycle
    })
    setActiveCycleId(null)
  }

  return (
    <cycleContext.Provider
      value={{
        cycle,
        activeCycleId,
        activeCycle,
        amountCurrentSecond,
        markCurrentCycleAsFinished,
        interruptedCurrentCycle,
        createNewCycle,
        setAmountSecond,
      }}
    >
      {children}
    </cycleContext.Provider>
  )
}

export function useCycle() {
  const cycle = useContext(cycleContext)

  return cycle
}
