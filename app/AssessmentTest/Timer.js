const Timer = () => {
  return (
    <div className="TimerContainer">
  <div className="TimerDiv ">
  <div class="CircularTimer">
   <div class="TimeDisplay">
    <div className ="MinSecDiv">
      <div className ="MinutesDiv">
        <div className ="NumOfMin">
          50
        </div>
        <div className ="MinTextDiv">min</div>
        </div>
        <div className = "DotDiv">
        :
        </div>
        < div className ="SecondDiv">
        <div className ="NumOfSecond">
          66
        </div>
        <div className ="SecondTextDiv">
            sec
          </div>
      </div>
     
    </div>
      {/* <span class="minutes">50</span> : <span class="seconds">20</span>
    </div>
    <div class="time-labels">
      <span class="min-label">min</span>
      <span class="sec-label">Sec</span> */}
    </div> 
  </div>
  </div>
  <div class="RemainingTimeText">Remaining Time</div>
</div>

  

  )

}
export default Timer;