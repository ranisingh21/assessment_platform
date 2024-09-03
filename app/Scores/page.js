import React from 'react';
import Header from "../components/Header";
import './score.css';
import Score from "./Score";
import McqQuestions from "./McqQuestions"

const Page = () => {
    return (
        <div className="ScoresContainer">
            <Header />
            <Score />
            
            
        </div>
    );
}

export default Page;
