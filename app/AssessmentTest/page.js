import AssessmentTestHeader from "./AssesmentTestHeader";
import "./AssessmentTest.css"; // Importing the CSS file
import QuesDisplay from "./QuesDisplay";
import Timer from "./Timer";
import Filters from "./Filters";

const Page = () => {
    return (
        <div className="AssessmentContainer">
            <AssessmentTestHeader />
            <div className="ExamContainer">
                 <div className="ExamContainer1">
                    <div className="FilterTimeContainer">
                        <Timer />
                        <div className="FilterTextContainer">
                        <img src="/Mobile.png" alt="MenuIcon" />

                             
                          </div>
                        <Filters />
                    </div>
                    <div className="QuestionsContainer">
                         <QuesDisplay />
                          <QuesDisplay /> 
                        <QuesDisplay/>
                        <QuesDisplay />
                        <QuesDisplay />   
                    </div>

                </div> 
            </div>
        </div>
    );
}

export default Page;
