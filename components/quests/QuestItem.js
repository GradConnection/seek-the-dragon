import { useState } from "react";
import styles from "./QuestItem.module.css";

const QuestItem = ({ job }) => {
  const { roleTitle, companyName, hasApplied, hasInterview, questResult } = job;
  const [hasInterviewState, setHasInterviewState] = useState(hasInterview);
  const [result, setResult] = useState(questResult);
  const [showModal, setShowModal] = useState(false);

  const toggleInterview = (interviewState) => {
    setHasInterviewState(!interviewState);
  };

  const selectResult = () => {};

  return (
    <div className={styles.questItemContainer}>
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        ></div>
      )}
      {"test" + showModal + " test"}

      {/* position: fixed;
    z-index: 1; */}
      {showModal && (
        <div
          style={{ position: "fixed", zIndex: 2 }}
          className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
        >
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Successful!
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Account has been successfully registered!
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
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
              onClick={() => setShowModal(true)}
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
  );
};

export default QuestItem;
