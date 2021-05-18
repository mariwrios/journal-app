import { Sidebar } from "./Sidebar"
import { useSelector } from "react-redux";
import { NoteScreem } from "../notes/NoteScreem"
import { NothingSelected } from "./NothingSelected"


export const JournalScreem = () => {

  const { active } = useSelector(state => state.notes)

  return (
    <div className='journal__main-content'>
      <Sidebar />
      <main>
        {
          (active) ?
            <NoteScreem /> :
            <NothingSelected />

        }
      </main>
    </div>
  )
}
