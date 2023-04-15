import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useCycle } from '../../../../contexts/CyclesContext'
import * as S from './styles'
import { Countdown } from '../Countdown'
import { Button } from '../../../../components/atoms/Button'

const newCycleFormValitionSchema = zod.object({
  task: zod.string().min(1, 'Digite uma tarefa'),
  minutesAmount: zod
    .number()
    .min(1, { message: 'O ciclo precisa de no mínimo 5 minutos' })
    .max(60, { message: 'O ciclo precisa de no máximo 60 minutos' }),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValitionSchema>

export const NewCycleForm = () => {
  const { activeCycle, interruptedCurrentCycle, createNewCycle } = useCycle()

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValitionSchema),
    defaultValues: {
      task: '',
      // minutesAmount: ,
    },
  })

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = newCycleForm

  // CAMPOS CONTROLADOS
  const task = watch('task')
  const minutesAmount = watch('minutesAmount')

  // SUBMIT DESATIVADO CASO ALGUM CAMPO VAZIO
  const isSubmitDisbled = !task || !minutesAmount

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  return (
    <>
      <S.Form id="form" onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <label htmlFor="task">Vou trabalhar em</label>
        <S.TaskInput
          id="task"
          list="task-suggestions"
          disabled={!!activeCycle}
          placeholder="Dê um nome para o seu projeto"
          {...register('task')}
        />

        {/* <datalist id="task-suggestions">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto 4" />
        </datalist> */}

        <label htmlFor="minutesAmount">durante</label>
        <S.MinuteAmount
          type="number"
          id="minutesAmount"
          // step={5}
          min={0}
          max={60}
          disabled={!!activeCycle}
          placeholder="- 00 +"
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <label>minutos.</label>
        <S.Erros>{errors?.minutesAmount?.message}</S.Erros>
      </S.Form>

      <Countdown />

      {activeCycle ? (
        <Button
          type="button"
          interruped="interruped"
          form="form"
          onClick={interruptedCurrentCycle}
        >
          Interromper
        </Button>
      ) : (
        <Button
          type="submit"
          // interruped={false}
          form="form"
          disabled={isSubmitDisbled}
        >
          Começar
        </Button>
      )}
    </>
  )
}
