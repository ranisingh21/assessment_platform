import React from "react";

const Pagination = () => {
    return (
        <>
        <div className="PaginationContainer">
          
              <div className="LeftArrow">&lt;</div>
           
    
          <div className="Pagination1">1</div>
          <div className = "DotDiv">...</div>
            <div className="Paginations">2</div>
            <div className="Paginations">3</div>
            <div className="Paginations">4</div>
            {/* < div className ="DotDiv">...</div> */}
            <div className="Pagination5">5</div>
            <div className = "DotDiv">...</div>

            <div className="Paginations">6</div>
            <div className="Paginations">7</div>
            <div className="Pagination">8</div>
            <div className="Paginations">9</div>
            <div className="RightArrow">&gt;</div>
             
            
        </div>
     
            
      </>

    );
};

export default Pagination;
