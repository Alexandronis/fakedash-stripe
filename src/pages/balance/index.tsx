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
                <path d="M6.75 5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" />
              </svg>
            </div>
            <div className="header-buttons">
              <div className="header-buttons-inner">
                <a className="header-button">
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button-icon"
                  >
                    <path d="M6.85 1a.85.85 0 1 0-1.7 0v4.15H1a.85.85 0 0 0 0 1.7h4.15V11a.85.85 0 1 0 1.7 0V6.85H11a.85.85 0 1 0 0-1.7H6.85V1Z" />
                  </svg>
                  <span className="button-text">Add funds</span>
                </a>

                <a className="header-button">
                  <span className="button-text">Manage payouts</span>
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button-icon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M.381 3.381a.875.875 0 0 1 1.238 0L6 7.763l4.381-4.382A.875.875 0 1 1 11.62 4.62l-5 5a.875.875 0 0 1-1.238 0l-5-5a.875.875 0 0 1 0-1.238Z"
                    ></path>
                  </svg>
                </a>

                <a
                  className="⚙ rs-2 rs-1 rs-0 rs-3 rs-4 rs-5 as-1i as-1j as-1k as-w as-x as-1l as-1m as-1n as-h as-1o as-1p as-1q as-1r as-1s as-1t as-1u as-1v as-1w as-36 as-gm as-gn as-go as-gp as-gq as-3t as-gr as-gs as-gt as-gu as-gv as-gw as-gx as-gy as-gz as-h0 as-h1 as-h2 as-h3 as-h4 as-h5 as-h6 as-h7 as-h8 ⚙1orjo2k"
                  style={{ userSelect: 'none', display: 'none' }}
                >
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    className="⚙ as-x as-y as-z as-10 as-42 as-43 as-44 ⚙1q2p59a"
                  >
                    <path d="M6 7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4.5 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-9 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="balances-content-wrapper">
            <div className="balances-content-inner">
              <div className="balances-left">
                <div className="balance-summary">
                  <div className="balance-summary-inner">
                    <div className="balance-summary-title">
                      <span id="text_balance_summary">Balance summary</span>
                    </div>
                    <div className="balance-summary-data">
                      <div className="balance-summary-data-inner">
                        <div className="balance-summary-data-line">
                          <a id="percent_incoming" className="balance-summary-data-line-link" />
                          <a id="percent_avaiable" className="balance-summary-data-line-link" />
                        </div>
                        <div className="balance-summary-data-list">
                          <div
                            role="listitem"
                            id="type_header"
                            className="balance-summary-data-list-top"
                          >
                            <div className="balance-summary-data-list-top-wrapper">
                              <span id="text_payments_type">Payments type</span>
                              <span id="text_amount">Amount</span>
                            </div>
                          </div>
                          <div className="data-list-item">
                            <div className="list-item-left">
                              <div className="list-item-square" />
                              <span id="text_incoming" className="list-item-text">Incoming</span>
                            </div>
                            <span className="list-item-right">
                              <span id="total_incoming" className="list-item-text">
                                $99,934.52
                              </span>
                            </span>
                          </div>
                          <div className="data-list-item data-list-item-available">
                            <div className="list-item-left">
                              <div className="list-item-square"/>
                              <span id="text_available" className="list-item-text">Available</span>
                            </div>
                            <span className="list-item-right">
                              <span id="total_available" className="list-item-text">
                                $0.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recent-activity">
                  <div className="recent-activity-header-wrapper">
                    <h3 className="recent-activity-header">Recent activity</h3>
                  </div>
                  <div className="recent-activity-tabs">
                    <nav className="recent-activity-nav">
                      <div className="recent-activity-nav-inner">
                        <a href="#" className="recent-activity-nav-item active" onClick={(e) => e.preventDefault()}>
                          <span className="nav-item-text">Payouts</span>
                        </a>
                        <a href="#" className="recent-activity-nav-item" onClick={(e) => e.preventDefault()}>
                          <span className="nav-item-text">Top-ups</span>
                        </a>
                        <a href="#" className="recent-activity-nav-item" onClick={(e) => e.preventDefault()}>
                          <span className="nav-item-text">All activity</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="balances-right">
                <h2 className="balances-right-header">Reports</h2>
                <div className="balances-right-list">
                  <a href="#" className="balances-right-list-item" onClick={(e) => e.preventDefault()}>
                    <div className="list-item-icon">
                      <svg
                        aria-hidden="true"
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 2a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 1 2Zm0 8a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5A.75.75 0 0 1 1 10Zm2.25-4.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM2.5 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 2.5 14Z"/>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                        />
                      </svg>
                    </div>
                    <div className="list-item-texts">
                      <div className="list-item-title">Balance summary</div>
                      <div className="list-item-date">Oct 2025</div>
                    </div>
                  </a>
                  <a href="#" className="balances-right-list-item" onClick={(e) => e.preventDefault()}>
                    <div className="list-item-icon">
                      <svg
                        aria-hidden="true"
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.2 4.74a.75.75 0 0 0 1.1 1.02l1.95-2.1v10.59a.75.75 0 0 0 1.5 0V3.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L8.2 4.74Zm-3.45 7.6 1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0L.2 11.26a.747.747 0 0 1 .04-1.06.75.75 0 0 1 1.06.04l1.95 2.1V1.75a.75.75 0 0 1 1.5 0v10.59Z"/>
                      </svg>
                    </div>
                    <div className="list-item-texts">
                      <div className="list-item-title">Payout reconciliation</div>
                      <div className="list-item-date">Oct 2025</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BalancePage;
