const Timer = () => {
  return (
    <div className="TimerContainer">
      <div className="TimerDiv">
        <div className="CircularTimer">
          <div className="TimeDisplay">
            <div className="MinSecDiv">
              <div className="MinutesDiv">
                <div className="NumOfMin">
                  50
                </div>
                <div className="MinTextDiv">min</div>
              </div>
              <div className="TimerColon">
                :
              </div>
              <div className="SecondDiv">
                <div className="NumOfSecond">
                  66
                </div>
                <div className="SecondTextDiv">
                  sec
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="RemainingTimeText">Remaining Time</div>
      </div>
    </div>
  )
}

export default Timer;
