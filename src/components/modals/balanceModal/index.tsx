import React from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import "./balanceModal.scss";

const BalanceModal = ({ isOpen, onClose }: any) => {
  const { i18n } = useTranslation();

  if (!isOpen) return null;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang); // automatically saves to cookie
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>×</span>

        <form id="settingsForm">

          <div className="settings-form-group">
            <div className="settings-form-group-inner">
              <label htmlFor="totalEarnings">Total Earnings</label>

              <div className="settings-input-wrapper">
                <span className="settings-currency-symbol">$</span>
                <input
                  type="text"
                  id="totalEarnings"
                  defaultValue="98,934.52"
                />
              </div>
            </div>
          </div>

          <div className="settings-form-group">
            <div className="settings-form-group-inner">
              <label htmlFor="language">Language & Currency</label>
              <select
                id="language"
                value={i18n.language}
                onChange={handleLanguageChange}
              >
                <option value="en">English ($)</option>
                <option value="fr">French (€)</option>
              </select>
            </div>

            <div className="settings-form-group-inner">
              <label htmlFor="curr_sign">USD - AUD</label>
              <select id="curr_sign">
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
          </div>

          <div className="settings-form-group save">
            <button type="submit" className="settings-save-btn">Save Changes</button>
          </div>

          <div className="settings-form-group last">
            <button type="button" className="settings-save-btn">Logout</button>
            <button type="button" className="settings-save-btn">Reset</button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default BalanceModal;
