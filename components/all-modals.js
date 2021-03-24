import { Modals } from './modals'

import { useStore } from '../store'

import { ExampleModal } from './modals/example-modal'

export function AllModals () {
  const setModal = useStore(state => state.setModal)
  const modal = useStore(state => state.modal)

  return (
    <Modals value={modal} syncState={setModal}>
      <ExampleModal />
    </Modals>
  )
}