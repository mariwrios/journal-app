import { Provider } from 'react-redux'

import { store } from './store/store'
import { AppRouters } from "./routers/AppRouters"
import { JournalEntries } from './components/journal/JournalEntries'
import { JournalScreem } from './components/journal/JournalScreem'


export const JournalApp = () => {


  return (
    <div>
      <Provider store={store}>

        <AppRouters />
      </Provider>
    </div>
  )
}

