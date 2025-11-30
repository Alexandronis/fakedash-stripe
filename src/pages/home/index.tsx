// @ts-nocheck
import React, { useState } from 'react';
import HourlyGraph from '../../components/charts/hourlyGraph';

import './home.scss';
const HomePage: React.FC = () => {
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
              <div className="home-bottom-buttons">
                <a className="home-button">
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.85 1a.85.85 0 1 0-1.7 0v4.15H1a.85.85 0 0 0 0 1.7h4.15V11a.85.85 0 1 0 1.7 0V6.85H11a.85.85 0 1 0 0-1.7H6.85V1Z" />
                  </svg>
                  <span>Add</span>
                </a>
                <a className="home-button">
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.368 4.49a.997.997 0 0 1 .632.93v1.16a1 1 0 0 1-.917.996l-.819.069a.126.126 0 0 0-.105.078.126.126 0 0 0 .02.13l.53.627a.999.999 0 0 1-.056 1.353l-.82.82a1 1 0 0 1-1.353.056l-.628-.53a.126.126 0 0 0-.13-.02.126.126 0 0 0-.077.105l-.069.819A1 1 0 0 1 6.58 12H5.42a1 1 0 0 1-.996-.917l-.069-.819a.126.126 0 0 0-.078-.105.126.126 0 0 0-.13.02l-.627.53a1.002 1.002 0 0 1-1.353-.056l-.82-.82a1 1 0 0 1-.056-1.354l.53-.627a.126.126 0 0 0 .02-.13.126.126 0 0 0-.105-.077l-.819-.069A1 1 0 0 1 0 6.58V5.42a1 1 0 0 1 .917-.996l.819-.069a.126.126 0 0 0 .105-.078.126.126 0 0 0-.02-.13l-.53-.627a1 1 0 0 1 .056-1.353l.82-.82a1 1 0 0 1 1.353-.056l.628.53a.123.123 0 0 0 .13.02.126.126 0 0 0 .077-.105l.069-.819A1 1 0 0 1 5.42 0h1.16a1 1 0 0 1 .996.917l.069.819a.126.126 0 0 0 .078.105.124.124 0 0 0 .13-.02l.627-.53a1 1 0 0 1 1.353.056l.82.82a1 1 0 0 1 .056 1.353l-.53.628a.126.126 0 0 0-.02.13.126.126 0 0 0 .105.077l.82.069a1 1 0 0 1 .284.066Zm-1.762-1.6-.382.451a1.376 1.376 0 0 0 .937 2.261l.589.05v.699l-.59.049a1.376 1.376 0 0 0-.936 2.26l.382.452-.495.495-.451-.382a1.376 1.376 0 0 0-2.261.936l-.05.59H5.65l-.049-.59a1.376 1.376 0 0 0-2.26-.936l-.452.382-.495-.495.382-.451A1.376 1.376 0 0 0 1.84 6.4l-.59-.05v-.7l.59-.049a1.376 1.376 0 0 0 .936-2.26l-.382-.452.495-.495.451.382a1.376 1.376 0 0 0 2.261-.936l.05-.59h.699l.049.59a1.376 1.376 0 0 0 2.26.936l.452-.382.495.495Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM6 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    />
                  </svg>
                  <span>Edit</span>
                </a>
              </div>
            </div>
            <div className="home-bottom-sections">

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

