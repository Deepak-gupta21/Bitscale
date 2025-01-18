import React, { useState } from "react";
import "./Maincontent.css";

const MainContent = () => {
  // Initial grid with pre-filled rows and columns
  const [grid, setGrid] = useState([
    ["", "" ,"1", "2", "3"],
    ["1","", "", "", ""],
    ["2", "","", "", ""],
    ["3", "", "", "",""],
  ]);

  // Add a new column
  const addColumn = () => {
    setGrid((prev) =>
      prev.map((row, rowIndex) =>
        rowIndex === 0 ? [...row, `${row.length}`] : [...row, ""]
      )
    );
  };

  // Add a new row
  const addRow = () => {
    const newRow = Array(grid[0].length).fill("");
    newRow[0] = `${grid.length}`;
    setGrid((prev) => [...prev, newRow]);
  };

  // Handle column name update
  const handleColumnClick = (colIndex) => {
    const newName = prompt("Enter column name:");
    if (newName) {
      setGrid((prev) => {
        const updatedGrid = [...prev];
        updatedGrid[0][colIndex] = newName;
        return updatedGrid;
      });
    }
  };

  // Handle row name update
  const handleRowClick = (rowIndex) => {
    const newName = prompt("Enter row name:");
    if (newName) {
      setGrid((prev) => {
        const updatedGrid = [...prev];
        updatedGrid[rowIndex][0] = newName;
        return updatedGrid;
      });
    }
  };

  // Handle cell content update
  const handleCellClick = (rowIndex, colIndex) => {
    const newContent = prompt("Enter cell content:");
    if (newContent) {
      setGrid((prev) => {
        const updatedGrid = [...prev];
        updatedGrid[rowIndex][colIndex] = newContent;
        return updatedGrid;
      });
    }
  };

  return (
    <div className="main-content">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${!cell ? "empty" : ""}`}
                onClick={() => {
                  if (rowIndex === 0 && colIndex > 0) {
                    handleColumnClick(colIndex); // Edit column header
                  } else if (colIndex === 0 && rowIndex > 0) {
                    handleRowClick(rowIndex); // Edit row header
                  } else if (rowIndex > 0 && colIndex > 0) {
                    handleCellClick(rowIndex, colIndex); // Edit cell content
                  }
                }}
              >
                {cell || (rowIndex === 0 || colIndex === 0 ? "+" : "")}
              </div>
            ))}
            {/* Add column button at the end of each column header */}
            {rowIndex === 0 && (
              <button
                className="cell add-column-btn"
                onClick={addColumn}
                role="button"
                tabIndex="0"
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    addColumn();
                  }
                }}
              >
                + Column
              </button>
            )}
          </div>
        ))}
        {/* <div className="row">
         
          {grid[0].map((_, colIndex) => (
            <div key={colIndex} className="cell add-column-btn" onClick={addColumn}>
              {colIndex === 0 ? "+ Col" : ""}
            </div>
          ))}
        </div> */}

        <div className="row">
          {/* Add Row button displayed only once */}

        {/* { tabIndex === 2 && ( */}
          <div className="cell add-row-btn" onClick={addRow}>
            + Row
          </div> 
          {/* )}; */}

          
        </div>
        
      </div>
    </div>
  );
};

export default MainContent;
