import React from 'react';
import './Subheader.css';
import { GoLink, GoDesktopDownload ,GoTrash} from "react-icons/go";

const SecondHeader = () => {
  return (
    <div className="second-header">
      <div className="leftSide">
      <input className="search-bar" type="text" placeholder="Search..." />
      <button className="filter-btn">1/1</button>
      <button className="sort-btn">3/3</button>
      <button className="filter-btn">Filter</button>
      <button className="sort-btn">Sort</button>
        </div>
      <div className="rightSide">
      <button className="action-btn">Enrich</button>
      <div className="icons">
        <span><GoLink/></span>
        <span> <GoDesktopDownload/></span>
        <span style={{ color: "red" }}><GoTrash/></span>
      </div>
        </div>
     
    </div>
  );
};

export default SecondHeader;
