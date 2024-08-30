import React from "react";
import Header from './components/Header';
import AssessmentRules from './components/AssessmentRules';

const Page = () => {
  return (
    <div className="container">
      <Header />
      <h1>MCQ Test Portal</h1>
      <AssessmentRules />
    </div>
  );
};

export default Page;
