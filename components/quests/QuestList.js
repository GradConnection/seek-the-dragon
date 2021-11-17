import styles from "./QuestList.module.css";
import QuestItem from "./QuestItem";

const mockJobs1 = [
  {
    id: 1,
    roleTitle: "Software Developer",
    companyName: "Seek Ltd",
    hasApplied: true,
    hasInterview: true,
    questResult: "pending",
  },
  {
    id: 2,
    roleTitle: "Fullstack Developer",
    companyName: "Seek Ltd",
    hasApplied: true,
    hasInterview: true,
    questResult: "success",
  },
  {
    id: 3,
    roleTitle: "Frontend Developer",
    companyName: "Myer",
    hasApplied: true,
    hasInterview: true,
    questResult: "fail",
  },
];

const mockJobs2 = [
  {
    id: 4,
    roleTitle: "Developer",
    companyName: "Swinburne University of Technology",
    hasApplied: true,
    hasInterview: true,
    questResult: "fail",
  },
  {
    id: 5,
    roleTitle: "Administrator",
    companyName: "Myer",
    hasApplied: false,
    hasInterview: false,
    questResult: "pending",
  },
  {
    id: 6,
    roleTitle: "Cleaner",
    companyName: "Myer",
    hasApplied: true,
    hasInterview: false,
    questResult: "pending",
  },
];

function QuestList() {
  return (
    <div className={styles.questListContainer}>
      <div className={styles.container}>
        <div className={styles.year}>2021</div>
        <ul>
          <li>
            <span className={styles.date}>
              <span>Jan 18</span>
            </span>
            <div className={styles.joblist}>
              {mockJobs1.map((job) => (
                <QuestItem job={job} key={job.id} />
              ))}
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <span className={styles.date}>
              <span>Jan 19</span>
            </span>
            <div className={styles.joblist}>
              {mockJobs2.map((job) => (
                <QuestItem job={job} key={job.id} />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestList;
