import Link from "next/link"
import QuestList from "../components/quests/QuestList"
import styles from "./quest.module.css"

function Quests() {
  return (
    <div className={styles.questsContainer}>
      <div className={styles.menu}>
        <div>
          <Link href="/map">Menu</Link>
        </div>
      </div>
      <QuestList />
    </div>
  )
}

export default Quests
