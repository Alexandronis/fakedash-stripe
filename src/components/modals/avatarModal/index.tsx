import React, { useState } from "react";
import "./avatarModal.scss";

interface AvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAvatarSelect: (url: string) => void;
  avatars: string[];
}

const AvatarModal: React.FC<AvatarModalProps> = ({
 isOpen,
 onClose,
 onAvatarSelect,
 avatars,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    setSelectedAvatar(url);
    onAvatarSelect(url);
    setShowConfirmation(true);

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
          {avatars.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`avatar-${index}`}
              className={selectedAvatar === src ? "selected" : ""}
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

          <button type="button">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default AvatarModal;
