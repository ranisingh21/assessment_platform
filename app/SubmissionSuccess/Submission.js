const Submission = () => {
    return (
        <div className="SubmittedPage">
            <div className="TickIcon">
                <img src="/Tick.png" className="tick" alt="Logo" />
            </div>
            <div className="MessageBox">
                <div className="submit">Successfully Submitted</div>
                <div className="Paragraph1">Thank you for completing the test! </div>

                <div className="Paragraph2">Review your results and keep practicing.<br />Great job and keep up the hard work </div>
            </div>
            <div className="ScoresDiv">
                <a className="ScorestAtag" href="Scores">
                    Check Your Score
                </a>
            </div>
        </div>
    );
}

export default Submission;
