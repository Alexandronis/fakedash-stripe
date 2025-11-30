import React, { useState } from 'react';
import HourlyGraph from '../../components/charts/hourlyGraph';

import './home.scss';
const HomePage = () => {
  const [hoveredPoint, setHoveredPoint] = useState<{ value: number | null; hour: string | null }>({ value: null, hour: null });

  return (
    <main className="home-page">
      <div className="content-wrapper">
        <div className="content-inner-wrapper">
          <div className="home-top">
            <h1 className="top-header">Today</h1>
            <div className="separator" />
            <div className="home-main-block">
              <div className="main-left">
                <div className="main-left-inner">
                  <div className="main-texts">
                    <div className="main-text-left">
                      <div className="left-top">
                        <div className="left-item-first">
                          <button className="left-item-button">
                            <div className="button-inner">
                              <span className="button-text">Gross volume</span>
                              <div className="button-icon">
                                <svg
                                  aria-hidden="true"
                                  className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--chevronDown-svg Icon-color-svg Icon-color--gray600-svg"
                                  height="8"
                                  width="8"
                                  viewBox="0 0 16 16"
                                  fill="rgb(84, 89, 105)"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M.381 4.381a.875.875 0 0 1 1.238 0L8 10.763l6.381-6.382A.875.875 0 1 1 15.62 5.62l-7 7a.875.875 0 0 1-1.238 0l-7-7a.875.875 0 0 1 0-1.238Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="left-item-amount">€256.28</div>
                          <div className="left-item-time">9:00 PM</div>
                        </div>
                        <div className="left-item-second" />
                      </div>
                    </div>
                    <div className="main-text-right">
                      <div className="left-top">
                        <div className="left-item-first">
                          <button className="left-item-button">
                            <div className="button-inner">
                              <span className="button-text">Gross volume</span>
                              <div className="button-icon">
                                <svg
                                  aria-hidden="true"
                                  className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--chevronDown-svg Icon-color-svg Icon-color--gray600-svg"
                                  height="8"
                                  width="8"
                                  viewBox="0 0 16 16"
                                  fill="rgb(84, 89, 105)"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M.381 4.381a.875.875 0 0 1 1.238 0L8 10.763l6.381-6.382A.875.875 0 1 1 15.62 5.62l-7 7a.875.875 0 0 1-1.238 0l-7-7a.875.875 0 0 1 0-1.238Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="left-item-amount">
                            {hoveredPoint.value != null
                              ? `$${hoveredPoint.value.toLocaleString()}`
                              : "$7,797.64"}
                          </div>
                          <div className="left-item-time">
                            {hoveredPoint.hour != null ? hoveredPoint.hour : "9:00 PM"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-graph">
                  <div className="main-graph-inner">
                      <HourlyGraph onHoverValueChange={setHoveredPoint} />
                      <div className="graph-bottom-text">
                        <div className="graph-bottom-text-inner">
                          <div className="graph-bottom-left">12:00 AM</div>
                          <div className="graph-bottom-right">11:59 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-right">
                <div className="main-right-single">
                  <div className="main-right-single-inner">
                    <div className="main-right-top">
                      <div className="main-right-top-text">USD balance</div>
                      <a className="main-right-top-link" href="#" onClick={(e) => e.preventDefault()}>
                        View
                      </a>
                    </div>
                    <div className="main-right-middle">$5,010.17</div>
                    <div className="main-right-bottom">Estimated future payouts</div>
                  </div>
                </div>
                <div className="main-right-single bottom">
                  <div className="main-right-single-inner">
                    <div className="main-right-top">
                      <div className="main-right-top-text">Payouts</div>
                      <a className="main-right-top-link" href="#" onClick={(e) => e.preventDefault()}>
                        View
                      </a>
                    </div>
                    <div className="main-right-middle">$15,559.53</div>
                    <div className="main-right-bottom">Expected tomorrow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <div className="home-bottom-title-wrapper">
              <h1 className="home-bottom-title">Your overview</h1>
            </div>
            <div className="home-bottom-filters-wrapper">
              <div className="home-bottom-filters">
                <div className="date-filter">
                  <span className="date-filter-inner">
                    <dl>
                      <dt>Date range</dt>
                      <span className="separator"/>
                      <dd>Month to date</dd>
                    </dl>
                    <a className="arrow-link">
                      <svg
                        aria-hidden="true"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M.606 2.334a.75.75 0 0 0-.022 1.06l2.875 3a.75.75 0 0 0 1.082 0L7.416 3.4a.75.75 0 0 0-1.082-1.038L4 4.79 1.667 2.357a.75.75 0 0 0-1.06-.022Z">
                        </path>
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="date-filter">
                  <span className="date-filter-inner">
                    <dl>
                      <dd>Daily</dd>
                    </dl>
                    <a className="arrow-link">
                      <svg
                        aria-hidden="true"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M.606 2.334a.75.75 0 0 0-.022 1.06l2.875 3a.75.75 0 0 0 1.082 0L7.416 3.4a.75.75 0 0 0-1.082-1.038L4 4.79 1.667 2.357a.75.75 0 0 0-1.06-.022Z">
                        </path>
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="date-filter compare">
                  <span className="date-filter-inner">
                    <a className="arrow-link">
                      <svg
                        aria-hidden="true"
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.75 4.25a.75.75 0 0 0-1.5 0v3h-3a.75.75 0 0 0 0 1.5h3v3a.75.75 0 0 0 1.5 0v-3h3a.75.75 0 0 0 0-1.5h-3v-3Z" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 8a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8c4.43 0 8 3.581 8 8Zm-1.5 0A6.5 6.5 0 0 1 8 14.5 6.5 6.5 0 0 1 1.5 8 6.5 6.5 0 0 1 8 1.5c3.6 0 6.5 2.908 6.5 6.5Z"
                        />
                      </svg>
                    </a>
                    <dl>
                      <dt>Compare</dt>
                    </dl>
                    <a className="arrow-link">
                      <svg
                        aria-hidden="true"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M.606 2.334a.75.75 0 0 0-.022 1.06l2.875 3a.75.75 0 0 0 1.082 0L7.416 3.4a.75.75 0 0 0-1.082-1.038L4 4.79 1.667 2.357a.75.75 0 0 0-1.06-.022Z">
                        </path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="home-bottom-buttons"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

