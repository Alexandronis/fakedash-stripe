import React from 'react';
import { useTranslation } from "react-i18next";
import './footer.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="sticky-footer">
      <div
        id="developers-link"
        aria-label="Développeurs"
        tabIndex={0}
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        className=""
      >
        <svg
          data-testid="primary-nav-item-icon"
          aria-hidden="true"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="⚙ as-x as-y as-z as-10 as-5s as-5i as-5j as-5d as-5e as-5k ⚙1mpsp7d"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 2.5H3A1.5 1.5 0 0 0 1.5 4v8A1.5 1.5 0 0 0 3 13.5h10a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 13 2.5ZM3 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H3Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.43 4.512a.75.75 0 0 1 1.058-.081l3.5 3a.75.75 0 0 1 0 1.138l-3.5 3a.75.75 0 1 1-.976-1.138L6.348 8 3.512 5.57a.75.75 0 0 1-.081-1.058ZM8 10.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"
          />
        </svg>
        <span id="text_developers">{t("footer.developers")}</span>
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'space-between', width: 208 }}
        className="footer-tools"
      >
        <div
          style={{
            width: 152,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>
            <svg
              aria-hidden="true"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.67 1.25A2.33 2.33 0 0 0 2.44 2.9L.179 10.302A4.097 4.097 0 0 0 0 11.5a3.5 3.5 0 1 0 7 0V9.394C7.47 9.093 7.786 9 8 9c.214 0 .53.093 1 .394V11.5a3.5 3.5 0 1 0 7 0 4.1 4.1 0 0 0-.179-1.197L13.56 2.899A2.33 2.33 0 0 0 9 3.58v.581A3.127 3.127 0 0 0 8 4c-.348 0-.683.055-1 .161v-.58A2.33 2.33 0 0 0 4.67 1.25Zm.83 7.377V3.58a.83.83 0 0 0-1.625-.242l-1.478 4.84A3.497 3.497 0 0 1 3.5 8c.744 0 1.433.232 2 .627Zm-4 2.873a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm11 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-5.5c.386 0 .757.062 1.103.177l-1.479-4.84a.83.83 0 0 0-1.624.243v5.047a3.484 3.484 0 0 1 2-.627ZM7 5.838v1.868c.33-.131.664-.206 1-.206.336 0 .67.075 1 .206V5.838A1.615 1.615 0 0 0 8 5.5c-.358 0-.692.106-1 .338Z"
              />
            </svg>
          </span>
          <span>
            <svg
              aria-hidden="true"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd"
                    d="m10.461 1.705 4.918 8.941a3 3 0 0 1 .371 1.446v.658a3 3 0 0 1-3 3h-9.5a3 3 0 0 1-3-3v-.658a3 3 0 0 1 .371-1.446l4.918-8.94a2.809 2.809 0 0 1 4.922 0ZM12.75 14.25h-9.5a1.5 1.5 0 0 1-1.5-1.5v-.658a1.5 1.5 0 0 1 .186-.723l4.917-8.941a1.309 1.309 0 0 1 2.294 0l4.917 8.941a1.5 1.5 0 0 1 .186.723v.658a1.5 1.5 0 0 1-1.5 1.5Z">
              </path>
              <path
                d="M9.25 11.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM7 5.499c-.029-.543.456-.999 1-.999s1.029.456 1 .999L8.79 8.5a.79.79 0 0 1-1.58 0L7 5.5Z">
              </path>
            </svg>
          </span>
          <span>
            <svg
              aria-hidden="true"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.2 4.74a.75.75 0 0 0 1.1 1.02l1.95-2.1v10.59a.75.75 0 0 0 1.5 0V3.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L8.2 4.74Zm-3.45 7.6 1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0L.2 11.26a.747.747 0 0 1 .04-1.06.75.75 0 0 1 1.06.04l1.95 2.1V1.75a.75.75 0 0 1 1.5 0v10.59Z">
              </path>
            </svg>
          </span>
          <span>
            <svg
              aria-hidden="true"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.431 12.346a3.81 3.81 0 0 0 3.757 3.154c2.103 0 3.812-1.7 3.812-3.803a3.808 3.808 0 0 0-3.812-3.803c-.403 0-.796.06-1.168.178l-.51-.888a3.775 3.775 0 0 0 1.327-2.88A3.808 3.808 0 0 0 8.025.5a3.808 3.808 0 0 0-3.812 3.803c0 1.146.507 2.176 1.314 2.874l-.521.897a3.807 3.807 0 0 0-1.194-.19A3.808 3.808 0 0 0 0 11.687a3.808 3.808 0 0 0 3.812 3.803 3.81 3.81 0 0 0 3.755-3.15l.864.006ZM8.025 2a2.308 2.308 0 0 0-2.312 2.303c0 .85.459 1.594 1.155 1.994a.75.75 0 0 1 .375.68.746.746 0 0 1-.1.407l-2.683 4.61a.75.75 0 0 1-1.296-.754l1.059-1.82A2.308 2.308 0 0 0 1.5 11.687a2.308 2.308 0 0 0 2.312 2.303 2.31 2.31 0 0 0 2.312-2.313h.006a.75.75 0 0 1 .749-.84l5.383.03a.75.75 0 0 1-.008 1.5l-2.282-.013A2.312 2.312 0 0 0 12.188 14a2.308 2.308 0 0 0 2.312-2.303 2.308 2.308 0 0 0-2.312-2.303 2.28 2.28 0 0 0-1.147.299.75.75 0 0 1-1.11-.506l-2.556-4.45a.75.75 0 1 1 1.3-.747l1.066 1.856c.37-.406.596-.947.596-1.543A2.308 2.308 0 0 0 8.025 2Z">
              </path>
            </svg>
          </span>
        </div>

        <span>
          <svg
            aria-hidden="true"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.28 9.78a.75.75 0 0 1-1.06 0L8 6.56 4.78 9.78a.75.75 0 0 1-1.06-1.06l3.75-3.75a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 1.5A6.5 6.5 0 0 0 1.5 8c0 3.592 2.9 6.5 6.5 6.5A6.5 6.5 0 0 0 14.5 8 6.5 6.5 0 0 0 8 1.5ZM8 0a8 8 0 0 0-8 8c0 4.419 3.57 8 8 8a8 8 0 0 0 8-8 8 8 0 0 0-8-8Z"
            />
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
