import React from "react";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="header-inner-wrapper">
        <div id="chrome-header-toolbar">
          {/* SEARCH FIELD */}
          <div role="search" className="search-wrapper">
            <div className="search-wrapper-inner">
              <div className="search-wrapper-inner-small">
                <div className="search-left">
                  <div className="search-left-icon">
                    <svg
                      aria-hidden="true"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                      className="⚙ as-x as-y as-z as-10 as-5s as-82 as-83 ⚙tzy3gr"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.883 9.085a5 5 0 1 1 1.202-1.202l2.666 2.666a.847.847 0 0 1 0 1.202.847.847 0 0 1-1.202 0L7.883 9.085ZM8.3 5a3.3 3.3 0 1 1-6.6 0 3.3 3.3 0 0 1 6.6 0Z"
                      />
                    </svg>
                  </div>
                  <div className="search-left-text">
                    <div id="text_search">
                      Search
                    </div>
                  </div>
                </div>

                <div className="search-right">
                  <input
                    className="search-input"
                    data-testid="suggestion-input"
                    aria-label="Search"
                    aria-placeholder="Search"
                    autoCorrect="false"
                    spellCheck={false}
                    type="text"
                    tabIndex={1}
                    defaultValue=""
                  />
                  <div className="search-line">
                    <div className="search-line-inner">
                      <span className="search-line-text">
                        <kbd>/</kbd>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="⚙ rs-0 as-w as-8a as-8b as-1m ⚙2esyh">
            {/* Apps icon */}
            <div className="⚙ rs-0 as-w as-1m as-dv as-dw as-dx as-dy as-dz ⚙lncmxe">
              <a
                data-testid="chrome-apps-menu-trigger"
                tabIndex={1}
                aria-label="Apps"
                aria-expanded="false"
                role="button"
                className="⚙ rs-2 rs-1 rs-0 as-1i as-1j as-1k as-16 as-8c as-8d as-8e as-8f as-w as-1u as-8g as-8h as-8i as-8j as-8k as-1m as-8l as-8m as-8n as-5d as-5e as-8o ⚙1aavg84"
                style={{ isolation: "isolate" }}
              >
                <svg
                  aria-hidden="true"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="⚙ as-x as-y as-z as-10 as-8p as-5i as-5j ⚙16s0ncx"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.25 0a.75.75 0 0 1 .75.75V3h2.25a.75.75 0 0 1 0 1.5H13V7a.75.75 0 0 1-1.5 0V4.5H9A.75.75 0 0 1 9 3h2.5V.75a.75.75 0 0 1 .75-.75ZM5 2H2a.5.5 0 0 0-.5.5v3A.5.5 0 0 0 2 6h3a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 0 5 2Z"
                  />
                </svg>
              </a>
            </div>

            {/* Help icon */}
            <a
              tabIndex={1}
              aria-label="Help"
              aria-expanded="false"
              role="button"
              aria-haspopup="true"
              id="react-aria-help"
              className="⚙ rs-2 rs-1 rs-0 as-1i as-1j as-1k as-16 as-8c as-8d as-8e as-8f as-w as-1u as-8g as-8h as-8i as-8j as-8k as-1m as-8l as-8m as-8n as-5d as-5e as-8o ⚙4jchy7"
              style={{ userSelect: "none", isolation: "isolate" }}
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="⚙ as-x as-y as-z as-10 as-8p as-5i as-5j ⚙16s0ncx"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.886 4.923c-.232.25-.386.63-.386 1.122a.75.75 0 1 1-1.5 0c0-.803.254-1.57.788-2.144C6.33 3.32 7.1 3 8 3c.9 0 1.67.32 2.212.901.534.574.788 1.341.788 2.144 0 1.234-.869 1.922-1.436 2.332..."
                />
              </svg>
            </a>

            {/* Notifications */}
            <div className="db-NotificationsX-button">
              <a
                data-testid="chrome-notifications"
                tabIndex={1}
                aria-label="Notifications"
                aria-expanded="false"
                role="button"
                className="⚙ rs-2 rs-1 rs-0 as-1i as-1j as-1k as-16 as-8c as-8d as-8e as-8f as-w as-1u as-8g as-8h as-8i as-8j as-8k as-1m as-8l as-8m as-8n as-5d as-5e as-8o ⚙4jchy7"
                style={{ isolation: "isolate" }}
              >
                {/* SVG preserved */}
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="⚙ as-x as-y as-z as-10 as-8p as-5i as-5j ⚙16s0ncx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.005 13H2.79a1.792 1.792 ..."
                  />
                </svg>
              </a>
            </div>

            {/* Settings */}
            <a
              data-testid="chrome-settings-menu-trigger"
              href="javascript:;"
              tabIndex={1}
              aria-label="Settings"
              aria-expanded="false"
              className="⚙ rs-2 rs-1 rs-0 as-1i as-1j as-1k as-16 as-8c as-8d as-8e as-8f as-w as-1u as-8g as-8h as-8i as-8j as-8k as-1m as-8l as-8m as-8n as-5d as-5e as-8o ⚙4jchy7"
              style={{ isolation: "isolate" }}
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="⚙ as-x as-y as-z as-10 as-8p as-5i as-5j ⚙16s0ncx"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 10a2 2 0 1 0 0-4 2 2..."
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
