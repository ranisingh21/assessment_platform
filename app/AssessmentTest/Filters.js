const Filters = () => {
    return (
        <div className="FilterContainer">
            <div className="FilterHeader">
                 <div className="FilterText">FILTERS</div>
                <div className="QuestionScoresDiv">
                    <div className="QuestionScoreDiv">Question-Score</div>
                    <div className="FilterGroupButtons">
                        <button className="FilterButtonAll">All</button>
                        <button className="FilterButton">10</button>
                        <button className="FilterButton">15</button>
                        <button className="FilterButton">20</button>
                    </div>
                </div>
                <div className="QuestionStatusFilter">
                    <div className="FilterStatusHeader">
                        <div className="StatusFilterText">Questions Attempted</div>
                        <div className="FilterStatus">
                            <div className="AllplusAttemptDiv">
                            <div className="AllFilterStatus">All (40)</div>
                            <div className="AttemptedFilterStatus">Attempted (3)</div>
                            </div>
                            <div className="UnattemptedDiv">Unattempted (37)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;




