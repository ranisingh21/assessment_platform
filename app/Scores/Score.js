import React from 'react';

const Score = () => {
  return (
    <div className="ScoreSummaryContainer">
      <div className="ScoreSummaryContainer1">
        <div className="ScoreItems">
           <div className="ScoreValue">35/40</div> 
          <div className="ScoreedText">Your Scored</div> 
        </div>
        <div className="ScoreItemsContainer">
           <div className="ScoreItem1">
            {/* <div className="Icon">
              <img src="/Yes Grp.jpg" className="logo" alt="Logo" />
            </div>
            <div className="Label">Unattempted:</div>
            <div className="Value">3</div> */}
          </div>
           <div className="ScoreItem2">
            {/* <div className="Icon">✅</div>
            <div className="Label">Correct:</div>
            <div className="Value">35</div> */}
          </div>
           <div className="ScoreItem3"> 
            {/* <div className="Icon">❌</div>
            <div className="Label">Wrong:</div>
            <div className="Value">2</div> */}
          </div>  
          
         </div> 
        
      </div>
    </div>
  );
};

export default Score;
