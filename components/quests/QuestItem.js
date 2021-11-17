import { useState } from "react"
import styles from "./QuestItem.module.css"

const QuestItem = ({ job }) => {
  const { roleTitle, companyName, hasApplied, hasInterview, questResult } = job
  const [hasInterviewState, setHasInterviewState] = useState(hasInterview)
  const [result, setResult] = useState(questResult)

  const toggleInterview = (interviewState) => {
    setHasInterviewState(!interviewState)
  }

  const selectResult = () => {}

  return (
    <div className={styles.questItemContainer}>
      <ul>
        <li>
          <div className={styles.job}>
            <div className={styles.jobDetails}>
              <div className={styles.roleTitle}>{roleTitle}</div>
              <div className={styles.companyName}>{companyName}</div>
            </div>
            <div
              className={`${styles.icon} ${
                hasApplied ? styles.hasApplied : styles.hasNotApplied
              }`}
            ></div>

            <div
              onClick={() => toggleInterview(hasInterviewState)}
              className={`${styles.icon} ${
                hasInterviewState ? styles.hasInterview : styles.hasNoInterview
              }`}
            ></div>

            <div
              onClick={() => selectResult()}
              className={`${styles.icon} ${
                result == "success"
                  ? styles.success
                  : result == "fail"
                  ? styles.fail
                  : styles.pending
              }`}
            ></div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default QuestItem
