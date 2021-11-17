import { useState } from "react";
import styles from "./QuestItem.module.css";
import Router from "next/router";

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
          style={{ position: "fixed", zIndex: 1 }}
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
              Interview results
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">How did the interview go?</p>
            </div>
            {/* <div className="items-center px-8 py-3"> */}
            <div className="flex items-center justify-between">
              <button
                id="ok-btn"
                onClick={() => Router.push("/recharge")}
                // className="py-2 px-4 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Not this time
              </button>
              <button
                id="ok-btn"
                onClick={() => Router.push("/congratulations")}
                // className="py-2 px-4 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Got the job!
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
