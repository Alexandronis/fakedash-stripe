import React from 'react';
import './balance.scss';

const BalancePage: React.FC = () => {
  return (
    <main className="balance-page">
      <div className="content-wrapper">
        <div className="content-inner-wrapper">
          <div className="header-block">
            <div className="header-block-inner">
              <h1 className="main-header">Balances</h1>
              <span className="balance-amount">$0.00</span>
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="balance-icon"
                fill="rgb(84, 89, 105)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 2.5H5A2.5 2.5 0 0 0 2.5 5v6A2.5 2.5 0 0 0 5 13.5h6a2.5 2.5 0 0 0 2.5-2.5V5A2.5 2.5 0 0 0 11 2.5ZM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.25 8A.75.75 0 0 1 7 7.25h1.25A.75.75 0 0 1 9 8v3.5a.75.75 0 0 1-1.5 0V8.75H7A.75.75 0 0 1 6.25 8Z"
                />
                <path d="M6.75 5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BalancePage;
