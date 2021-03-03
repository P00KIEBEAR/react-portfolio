import React from "react";

function Nav({ handlePageChange, currentPage }) {
  const tabs = ["About", "Work", "Contact"];
  return (
    <div class="header">
      <h1>PATRICK PAGGI</h1>

      <div>
        <title>Pat Paggi</title>

        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => handlePageChange(tab)}
                className={currentPage === tab ? "nav-link active" : "nav-link"}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
