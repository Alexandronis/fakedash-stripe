import React, { useState } from "react";
import { useAvatar } from "../../../context/AvatarContext";
import avatarList from "../../../data/avatars.json";
import "./avatarModal.scss";

interface AvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AvatarModal: React.FC<AvatarModalProps> = ({ isOpen, onClose }) => {
  const { avatarUrl, setAvatarUrl } = useAvatar();
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    setAvatarUrl(url);
    setShowConfirmation(true);
    onClose();
    setTimeout(() => setShowConfirmation(false), 1500);
  };

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          ×
        </span>

        <h2>Select an Avatar</h2>

        <div className="avatar-list">
          {avatarList.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`avatar-${index}`}
              className={avatarUrl === src ? "selected" : ""}
              onClick={() => handleSelect(src)}
            />
          ))}
        </div>

        {showConfirmation && (
          <div className="confirmation">Avatar selected!</div>
        )}

        <form className="upload-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="fileInput" id="customFileLabel">
            Choose a File
          </label>

          <input type="file" id="fileInput" accept="image/*" />

          <button id="uploadButton" type="button">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default AvatarModal;
