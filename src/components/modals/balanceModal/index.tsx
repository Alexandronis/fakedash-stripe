import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./balanceModal.scss";

interface BalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BalanceModal: React.FC<BalanceModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="modal-close" onClick={onClose}>×</span>
        <h2>
          <a href="http://fakedash.com/my-account/">
            <img src="assets/logo.png" alt="" style={{ width: 144 }} />
          </a>
        </h2>

        <form id="settingsForm">
          <div className="settings-form-group">
            <div className="settings-form-group-inner">
              <label htmlFor="totalEarnings">Total Earnings</label>
              <div className="settings-input-wrapper">
                <span className="settings-currency-symbol">$</span>
                <input
                  type="text"
                  id="totalEarnings"
                  className="settings-total-earnings"
                  defaultValue="98,934.52"
                  min={0}
                  step={0.01}
                  max={99999999}
                  required
                />
              </div>
            </div>
          </div>

          <div className="settings-form-group">
            <div className="settings-form-group-inner">
              <label htmlFor="language">Language & Currency</label>
              <select id="language" required>
                <option value="0">English ($)</option>
                <option value="1">French (€)</option>
              </select>
            </div>

            <div className="settings-form-group-inner">
              <label htmlFor="curr_sign">USD - AUD</label>
              <select id="curr_sign" required>
                <option value="0">USD</option>
                <option value="1">AUD</option>
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
    </div>
    ,
    document.body
  );
};

export default BalanceModal;
