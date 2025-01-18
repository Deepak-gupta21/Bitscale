import React from "react";
import "./Header.css";

import { GoArrowLeft } from "react-icons/go";
const TopHeader = () => {
  const [autoSave, setAutoSave] = React.useState(false);

  return (
    <div className="top-header">
       {/* <div className="file-name">File Name</div> */}
      <div className="back_file">
      <div className="icon" title="Home">
          < GoArrowLeft />
        </div>
        <div className="file-name">File Name</div>
       
      </div>

      <div className="right-section">
        <button
          className={`auto-save-toggle ${autoSave ? "active" : ""}`}
          onClick={() => setAutoSave(!autoSave)}
        >
          Auto Save
        </button>
        <div className="profile-icon">👤</div>
      </div>
    </div>
  );
};

export default TopHeader;
