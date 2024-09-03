import Pagination from './Pagination';

const AssessmentTestHeader = () => {
  return (
    <div className="HeaderContainer">
      <div className="AssessmentHeader1">
        <div className="NaviglogoDiv">
          <div className='LogoContainer'>
            <img src="/Logo Grp.png" className="logoOne" alt="Logo" />
            <img src="/QA.png" className="logoTwo" alt="Logo" />
          </div>
         

            <Pagination />
        

        </div>

        <div className="ButtonDiv">
          <a className="SubmitAtag" href="SubmissionSuccess">
            Submit
          </a>
        </div>
      </div>
     </div>
  );
};

export default AssessmentTestHeader;
