import { atom } from 'recoil'

const displayedDraftEventsState = atom({
  key: 'displayedEvents',
  default: []
})

export default displayedDraftEventsState