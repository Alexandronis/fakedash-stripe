import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { useHomeData } from "../../../context/HomeDataContext";
import AvatarModal from "../avatarModal";
import "./homeModal.scss";

const HomeModal = ({ isOpen, onClose }: any) => {
  const { i18n } = useTranslation();
  const { data, updateMultiple, resetToDefaults } = useHomeData();
  const [isAvatarModalOpen, setIsAvatarModalOpen] = React.useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save form values directly from inputs via DOM values
    const totalEarningsInput = (document.getElementById("totalEarnings") as HTMLInputElement).value;
    const dayBeforeInput = (document.getElementById("dayBefore") as HTMLInputElement).value;
    const payoutInput = (document.getElementById("payoutPercent") as HTMLInputElement).value;
    const failedInput = (document.getElementById("failedPayments") as HTMLInputElement).value;
    const linkInput = (document.getElementById("linkPayments") as HTMLInputElement).value;
    const refundsInput = (document.getElementById("refunds") as HTMLInputElement).value;
    const storeNameInput = (document.getElementById("storeName") as HTMLInputElement).value;
    const currencySelect = (document.getElementById("curr_sign") as HTMLSelectElement).value;

    updateMultiple({
      totalEarnings: parseFloat(totalEarningsInput) || 0,
      dayBeforePercent: Number(dayBeforeInput) || 0,
      payoutPercent: Number(payoutInput) || 0,
      failedPaymentsPercent: Number(failedInput) || 0,
      linkPaymentsPercent: Number(linkInput) || 0,
      refundsPercent: Number(refundsInput) || 0,
      storeName: storeNameInput || "DASHNAMEHERE",
      currencySign: currencySelect || "$",
    });

    onClose();
  };

  const handleReset = () => {
    resetToDefaults();
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    onClose();
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="modal-close" onClick={onClose}>×</span>
          <h2 className="modal-logo">
            <a href="http://fakedash.com/my-account/">
              <img src="/fakedash-logo.png" alt=""/>
            </a>
          </h2>

          <form id="settingsForm" onSubmit={handleSave}>
            {/* TOTAL EARNINGS & DAY BEFORE */}
            <div className="settings-form-group">
              <div className="settings-form-group-inner">
                <label htmlFor="totalEarnings">Total Earnings</label>
                <div className="settings-input-wrapper">
                  <span className="settings-currency-symbol">{data.currencySign}</span>
                  <input
                    type="text"
                    id="totalEarnings"
                    defaultValue={data.totalEarnings.toFixed(2)}
                  />
                </div>
              </div>
              <div className="settings-form-group-inner">
                <label htmlFor="dayBefore">Day Before</label>
                <div className="settings-input-wrapper number">
                  <input
                    type="number"
                    id="dayBefore"
                    defaultValue={data.dayBeforePercent}
                  />
                  <span className="settings-percentage">%</span>
                </div>
              </div>
            </div>

            {/* STORE NAME & AVATAR */}
            <div className="settings-form-group">
              <div className="settings-form-group-inner">
                <label htmlFor="storeName">Store Name</label>
                <div className="settings-input-wrapper">
                  <input type="text" id="storeName" defaultValue={data.storeName} />
                </div>
              </div>
              <div className="settings-form-group-inner">
                <label>Avatar</label>
                <div className="settings-input-wrapper">
                  <button type="button" className="settings-save-btn" onClick={() => setIsAvatarModalOpen(true)}>Edit Avatar</button>
                </div>
              </div>
            </div>

            {/* LANGUAGE & CURRENCY */}
            <div className="settings-form-group">
              <div className="settings-form-group-inner">
                <label htmlFor="language">Language</label>
                <select id="language" value={i18n.language} onChange={handleLanguageChange}>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div className="settings-form-group-inner">
                <label htmlFor="curr_sign">Currency</label>
                <select id="curr_sign" defaultValue={data.currencySign}>
                  <option value="$">USD</option>
                  <option value="A$">AUD</option>
                </select>
              </div>
            </div>

            {/* PAYOUTS & PERCENTAGES */}
            <div className="settings-form-group">
              <div className="settings-form-group-inner">
                <label htmlFor="payoutPercent">Payout</label>
                <div className="settings-input-wrapper number">
                  <input type="number" id="payoutPercent" defaultValue={data.payoutPercent} />
                  <span className="settings-percentage">%</span>
                </div>
              </div>
              <div className="settings-form-group-inner">
                <label htmlFor="failedPayments">Failed Payments</label>
                <div className="settings-input-wrapper number">
                  <input type="number" id="failedPayments" defaultValue={data.failedPaymentsPercent} />
                  <span className="settings-percentage">%</span>
                </div>
              </div>
            </div>

            <div className="settings-form-group">
              <div className="settings-form-group-inner">
                <label htmlFor="linkPayments">Link Payments</label>
                <div className="settings-input-wrapper number">
                  <input type="number" id="linkPayments" defaultValue={data.linkPaymentsPercent} />
                  <span className="settings-percentage">%</span>
                </div>
              </div>
              <div className="settings-form-group-inner">
                <label htmlFor="refunds">Refunds</label>
                <div className="settings-input-wrapper number">
                  <input type="number" id="refunds" defaultValue={data.refundsPercent} />
                  <span className="settings-percentage">%</span>
                </div>
              </div>
            </div>

            {/* SAVE / RESET */}
            <div className="settings-form-group save">
              <button type="submit" className="settings-save-btn">Save Changes</button>
            </div>
            <div className="settings-form-group last">
              <button type="button" className="settings-save-btn">Logout</button>
              <button type="button" className="settings-save-btn" onClick={handleReset}>Reset</button>
            </div>
          </form>
        </div>
      </div>

      <AvatarModal isOpen={isAvatarModalOpen} onClose={() => setIsAvatarModalOpen(false)} />
    </>,
    document.body
  );
};

export default HomeModal;
