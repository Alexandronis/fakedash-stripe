// @ts-nocheck
import React, { useState } from 'react';
import HourlyGraph from '../../components/charts/hourlyGraph';
import { useHomeData } from "../../context/HomeDataContext";

import './home.scss';
import MonthlyGraph from "../../components/charts/monthlyChart";
const HomePage: React.FC = () => {
  const [primary, setPrimary] = useState({ value: null, hour: null });
  const [secondary, setSecondary] = useState({ value: null, hour: null });
  const { data } = useHomeData();
  const expectedTomorrow = (data.totalEarnings * data.payoutPercent) / 100; // same formula for example
  const estimatedFuturePayouts = data.totalEarnings * 0.03221;
  const failedEarnings = (data.totalEarnings * data.failedPaymentsPercent) / 100;
  const refundedEarnings = (data.totalEarnings * data.refundsPercent) / 100;
  const linkEarnings = (data.totalEarnings * data.linkPaymentsPercent) / 100;

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
                          <div className="left-item-amount">
                            {primary.value != null
                              ? `$${primary.value.toLocaleString()}`
                              : "$256.28"}
                          </div>
                          <div className="left-item-time">{secondary.hour != null ? secondary.hour : "9:00 PM"}</div>
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
                            {secondary.value != null
                              ? `$${secondary.value.toLocaleString()}`
                              : "$7,797.64"}
                          </div>
                          <div className="left-item-time">
                            {secondary.hour != null ? secondary.hour : "9:00 PM"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-graph">
                  <div className="main-graph-inner">
                      <HourlyGraph
                        onHoverValueChangePrimary={setPrimary}
                        onHoverValueChangeSecondary={setSecondary}
                      />
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
                    <div className="main-right-middle">
                      {data.currencySign}{estimatedFuturePayouts.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
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
                    <div className="main-right-middle">
                      {data.currencySign}{expectedTomorrow.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
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

              <div className="bottom-section-single">
                <div className="bottom-section-single-inner">
                  <div className="bottom-section-single-header">
                    <div className="bottom-graph-inner">
                      <div className="bottom-section-single-header-inner-wrapper">
                        <div className="bottom-section-single-header-inner">
                          <span className="single-title">Gross volume</span>
                          <a href="#" className="single-icon" onClick={(e) => e.preventDefault()}>
                            <svg
                              aria-hidden="false"
                              aria-label="Info"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="rgb(108, 118, 136)"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.75 1.75h-5.5a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5h5.5a1.5 1.5 0 0 0 1.5-1.5v-5.5a1.5 1.5 0 0 0-1.5-1.5ZM3.25.25a3 3 0 0 0-3 3v5.5a3 3 0 0 0 3 3h5.5a3 3 0 0 0 3-3v-5.5a3 3 0 0 0-3-3h-5.5Z"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.482 6.5a.7.7 0 0 1 .7-.7h1.09a.7.7 0 0 1 .7.7v2a.7.7 0 1 1-1.4 0V7.2h-.39a.7.7 0 0 1-.7-.7Z"
                              />
                              <path d="M5 4a1.001 1.001 0 0 1 2 0 1.001 1.001 0 0 1-2 0Z"/>
                            </svg>
                          </a>
                        </div>
                        <div className="gross-amount">
                          {data.currencySign}{data.totalEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div className="bottom-section-explore">
                        <a href="#" className="bottom-section-explore-link" onClick={(e) => e.preventDefault()}>
                          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16"
                               xmlns="http://www.w3.org/2000/svg"
                               className="⚙   as-y as-z as-10 as-11 as-9x as-6f as-6g ⚙psn2hp">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M4.67 1.25A2.33 2.33 0 0 0 2.44 2.9L.179 10.302A4.097 4.097 0 0 0 0 11.5a3.5 3.5 0 1 0 7 0V9.394C7.47 9.093 7.786 9 8 9c.214 0 .53.093 1 .394V11.5a3.5 3.5 0 1 0 7 0 4.1 4.1 0 0 0-.179-1.197L13.56 2.899A2.33 2.33 0 0 0 9 3.58v.581A3.127 3.127 0 0 0 8 4c-.348 0-.683.055-1 .161v-.58A2.33 2.33 0 0 0 4.67 1.25Zm.83 7.377V3.58a.83.83 0 0 0-1.625-.242l-1.478 4.84A3.497 3.497 0 0 1 3.5 8c.744 0 1.433.232 2 .627Zm-4 2.873a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm11 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-5.5c.386 0 .757.062 1.103.177l-1.479-4.84a.83.83 0 0 0-1.624.243v5.047a3.484 3.484 0 0 1 2-.627ZM7 5.838v1.868c.33-.131.664-.206 1-.206.336 0 .67.075 1 .206V5.838A1.615 1.615 0 0 0 8 5.5c-.358 0-.692.106-1 .338Z"></path>
                          </svg>
                          <span className="bottom-section-explore-text">Explore</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-section-single-data">
                    <div className="bottom-section-single-top">
                      {/* Second chart goes here */}
                    </div>
                    <div className="bottom-section-single-bottom">
                    <div className="bottom-section-single-left">Updated 2:12 PM</div>
                      <div className="bottom-section-single-right">
                        <a href="#" className="" onClick={(e) => e.preventDefault()}>View more</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="monthly-graph">
                  <div
                    id="monthly-tooltip"
                    style={{
                      position: "absolute",
                      pointerEvents: "none",
                      opacity: 0,
                      background: "rgba(0,0,0,0.8)",
                      color: "#fff",
                      padding: "6px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      transition: "all 0.1s ease",
                      whiteSpace: "nowrap",
                      zIndex: 1000,
                    }}
                  />
                  <MonthlyGraph/>
                </div>
              </div>

              <div className="bottom-section-single">
                <div className="bottom-section-single-inner">
                  <div className="bottom-section-single-header">
                    <div className="bottom-section-single-header-inner">
                      <span className="single-title">Payments</span>
                      <a href="#" className="single-icon" onClick={(e) => e.preventDefault()}>
                        <svg
                          aria-hidden="false"
                          aria-label="Info"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="rgb(108, 118, 136)"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.75 1.75h-5.5a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5h5.5a1.5 1.5 0 0 0 1.5-1.5v-5.5a1.5 1.5 0 0 0-1.5-1.5ZM3.25.25a3 3 0 0 0-3 3v5.5a3 3 0 0 0 3 3h5.5a3 3 0 0 0 3-3v-5.5a3 3 0 0 0-3-3h-5.5Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.482 6.5a.7.7 0 0 1 .7-.7h1.09a.7.7 0 0 1 .7.7v2a.7.7 0 1 1-1.4 0V7.2h-.39a.7.7 0 0 1-.7-.7Z"
                          />
                          <path d="M5 4a1.001 1.001 0 0 1 2 0 1.001 1.001 0 0 1-2 0Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="bottom-section-single-data">
                    <div className="bottom-section-single-top">
                      <div className="line-chart">
                        <a href="#" className="line-chart-first" onClick={(e) => e.preventDefault()}/>
                        <a href="#" className="line-chart-last" onClick={(e) => e.preventDefault()}/>
                      </div>
                      <div className="line-chart-details">
                        <div className="line-chart-details-inner">
                          <div className="line-chart-square">
                            <div className="line-chart-square-inner"/>
                          </div>
                          <div className="line-chart-status">Succeeded</div>
                          <div className="line-chart-amount">
                            {data.currencySign}{data.totalEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </div>
                      </div>
                      <div className="line-chart-details second not-first">
                        <div className="line-chart-details-inner">
                          <div className="line-chart-square">
                            <div className="line-chart-square-inner"/>
                          </div>
                          <div className="line-chart-status">Uncaptured</div>
                          <div className="line-chart-amount">$0.00</div>
                        </div>
                      </div>
                      <div className="line-chart-details third not-first">
                        <div className="line-chart-details-inner">
                          <div className="line-chart-square">
                            <div className="line-chart-square-inner"/>
                          </div>
                          <div className="line-chart-status">Refunded</div>
                          <div className="line-chart-amount">
                            {data.currencySign}{refundedEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </div>
                      </div>
                      <div className="line-chart-details fourth not-first">
                        <div className="line-chart-details-inner">
                          <div className="line-chart-square">
                            <div className="line-chart-square-inner"/>
                          </div>
                          <div className="line-chart-status">Failed</div>
                          <div className="line-chart-amount">
                            {data.currencySign}{failedEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-section-single-bottom">
                      <div className="bottom-section-single-left">Updated 2:12 PM</div>
                      <div className="bottom-section-single-right">
                        <a href="#" className="" onClick={(e) => e.preventDefault()}>View more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom-section-single">
                <div className="bottom-section-single-inner">
                  <div className="bottom-section-single-header">
                    <div className="bottom-section-single-header-inner">
                      <span className="single-title">Top payment methods</span>
                      <a href="#" className="single-icon" onClick={(e) => e.preventDefault()}>
                        <svg
                          aria-hidden="false"
                          aria-label="Info"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="rgb(108, 118, 136)"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.75 1.75h-5.5a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5h5.5a1.5 1.5 0 0 0 1.5-1.5v-5.5a1.5 1.5 0 0 0-1.5-1.5ZM3.25.25a3 3 0 0 0-3 3v5.5a3 3 0 0 0 3 3h5.5a3 3 0 0 0 3-3v-5.5a3 3 0 0 0-3-3h-5.5Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.482 6.5a.7.7 0 0 1 .7-.7h1.09a.7.7 0 0 1 .7.7v2a.7.7 0 1 1-1.4 0V7.2h-.39a.7.7 0 0 1-.7-.7Z"
                          />
                          <path d="M5 4a1.001 1.001 0 0 1 2 0 1.001 1.001 0 0 1-2 0Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="bottom-section-single-data">
                    <div className="bottom-section-single-top">
                      <div className="line-chart line-chart-methods">
                        <a href="#" className="line-chart-first" onClick={(e) => e.preventDefault()}/>
                        <a href="#" className="line-chart-last" onClick={(e) => e.preventDefault()}/>
                      </div>
                      <div className="line-chart-details">
                        <div className="line-chart-details-inner">
                          <div className="line-chart-square">
                            <div className="line-chart-square-inner"/>
                          </div>
                          <div className="line-chart-status">Card</div>
                          <div className="line-chart-amount">
                            {data.currencySign}{data.totalEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </div>
                      </div>
                      <div className="line-chart-details second not-first">
                        <div className="line-chart-details-inner">
                          <div className="line-chart-square">
                            <div className="line-chart-square-inner"/>
                          </div>
                          <div className="line-chart-status">Link</div>
                          <div className="line-chart-amount">
                            {data.currencySign}{linkEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-section-single-bottom">
                      <div className="bottom-section-single-left">Updated 2:12 PM</div>
                      <div className="bottom-section-single-right">
                        <a href="#" className="" onClick={(e) => e.preventDefault()}>View more</a>
                      </div>
                    </div>
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

