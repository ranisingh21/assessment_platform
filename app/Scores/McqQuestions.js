import React from 'react';

const McqQuestions = () => {
  return (
    <>
     
      <div className="paraMcqQuestions">
        <div className="paragraph">
          Which of the following committees recommended the inclusion of fundamental duties?
        </div>
        <div className="McqQuestions">
          <form action="/action_page.php">
            <div className="inputOptionDiv">
              <div className="OptionTag">
                <input type="radio" className="input1" id="option1" name="committee" value="option1" />
                <label htmlFor="option1" className="option">Tarapore Committee</label>
              </div>
            </div>

            <div className="inputOptionDiv">
              <div className="OptionTag">
                <input type="radio" className="input1" id="option2" name="committee" value="option2" />
                <label htmlFor="option2" className="option">Sarkaria Committee</label>
              </div>
            </div>

            <div className="inputOptionDiv">
              <div className="OptionTag">
                <input type="radio" className="input1" id="option3" name="committee" value="option3" />
                <label htmlFor="option3" className="option">BalwantRai Mehta Committee</label>
              </div>
            </div>

            <div className="inputOptionDiv">
              <div className="OptionTag">
                <input type="radio" className="input1" id="option4" name="committee" value="option4" />
                <label htmlFor="option4" className="option">Swaran Singh Committee</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default McqQuestions;
