import React from 'react';
import McqQuestions from './McqQuestions';
import AllAttempted from './AllAttempted';

const Score = () => {
  return (
    <>
      <div className="ScoreSummaryContainer">
        <div className="ScoreSummaryContainer1">
          <div className="ScoreItems">
            <div className="ScoreValue">35/40</div>
            <div className="ScoredText">Your Scored</div>
          </div>
          <div className="ScoreItemsContainer">
            <div className="ScoreItem1">
              <div className="Icon">
                <img src="/Check.png" className="logo" alt="Logo" />
              </div>
              <div className='ValueUnAttemptDiv'>
              <div className="UnAttemptText">Unattempted:</div>
              <div className="Value">3</div>
              </div>
             
            </div>
            <div class="vl"></div>
            <div className="ScoreItem2">
              <div className="Icon">
              <img src="/Tick.png"  alt="Logo" />

      
              </div>
              < div className ="ValueCorrectDiv">
              <div className="CorrectTextDiv">Correct:</div>
              <div className="Value2">35</div>
              </div>
             
            </div>
            <div class="vl"></div>
            <div className="ScoreItem3">
              {/* Uncomment the following block if you want to use the Wrong section */}
              <div className="Icon">
              <img src="/Yes Grp.svg" alt="Logo" />

              </div>
              <div className ="ValueWrongDiv">
              <div className="WrongText">Wrong:</div> 
             <div className="Value">2</div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div className = "CheckYourAnsText">
      CHECK YOUR ANSWERS
      </div>
  <div className ="HrDiv"></div>
      <div className="TickIconContainer">
      <div className="RightAnsContainer"> 
     
      
        <div className ="RightAnsDiv">
          <div className="RightIcon">
          <img src="/Tick.png"  alt="Logo" />

          </div>
          <div className ="NumberText">
           10
          </div>
          <div className ="EachQuestions">
          Q1
          </div>

        
        </div>
        <div className ="PlusIcon">
         
            <img src="/Property 1=Expand.png" className="Plus" alt="Logo" />

          </div>
        
           
       

    </div>
         
        <McqQuestions />
        <hr/>
        <div className="WrongAnsContainer"> 
     
      
     <div className ="WrongAnsDiv">
       < div className ="WrongIcon">
       <img src="/Yes Grp.svg" alt="Logo" />
       

       </div>
       <div className ="NumberText">
          00
          </div>
          <div className ="EachQuestions">
          Q2
          </div>

     </div>
     <div className ="PlusIcon">
     <img src="/Property 1=Expand.png" className="Plus" alt="Logo" />

       </div>
      
    

 </div>
        <McqQuestions />
      </div>
      <AllAttempted />
<div className='ExlamationmarkContainer'>
      <div className="ExlamationmarkContainer1">
        <div className="ExlamationAnsDiv">
          <div className="ExlamationIcon">
            <img src="/Check.png" alt="Logo" />
          </div>
          <div className="NumberText">0</div>
          <div className="EachQuestion">Q38</div>
        </div>
        <div className="PlusIcon">
          <img src="/Property 1=Expand.png" className="Plus" alt="Logo" />
        </div>
      </div>
      <McqQuestions />
      <hr />
      <div className="ExlamationmarkContainer1">
        <div className="ExlamationAnsDiv">
          <div className="ExlamationIcon">
            <img src="/Check.png" alt="Logo" />
          </div>
          <div className="NumberText">0</div>
          <div className="EachQuestion">Q39</div>
        </div>
        <div className="PlusIcon">
          <img src="/Property 1=Expand.png" className="Plus" alt="Logo" />
        </div>
      </div>
      <hr />
      <div className="ExlamationmarkContainer1">
        <div className="ExlamationAnsDiv">
          <div className="ExlamationIcon">
            <img src="/Check.png" alt="Logo" />
          </div>
          <div className="NumberText">0</div>
          <div className="EachQuestion">Q40</div>
        </div>
        <div className="PlusIcon">
          <img src="/Property 1=Expand.png" className="Plus" alt="Logo" />
        </div>
      </div>
      <div className ="Hr2Div"></div>
      </div>
       
    </>
  );
};

export default Score;
