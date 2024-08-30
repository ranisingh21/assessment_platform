const AssessmentRules = () => {
  return (
    <>
      <div className="instructions">
        <div className="instruction">Instructions</div>
        <div className="allMainContent">
          <div className="paragraph1">Please read the instructions carefully before you begin:</div>
          <div className="main-box">
            <ul>
              <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
              <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
              <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
              <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
              <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
              <li>Review: After submission, you may review your answers and scores.</li>
            </ul>
          </div>
          <div className="paragraph2">Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</div>
          <div className="paragraph3">Click 'Let's Start' to begin the test.<br /><b>Good luck!</b></div>
        </div>
        <hr />
        <div className="StartDiv">
          <a className="start_Atag" href="AssessmentTest">
            Let's Start!
          </a>
        </div>
      </div>
    </>
  );
};

export default AssessmentRules;
