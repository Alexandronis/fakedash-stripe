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
        </div>
      </div>
    </main>
  );
};

export default HomePage;

