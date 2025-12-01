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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    setAvatarUrl(url);
    setConfirmationMessage("Avatar selected!");
    setIsError(false);
    setShowConfirmation(true);
    onClose();
    setTimeout(() => setShowConfirmation(false), 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!selectedFile) {
      setConfirmationMessage("Please select a file.");
      setIsError(true);
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 1500);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setAvatarUrl(dataUrl);
      setConfirmationMessage(`File uploaded successfully: ${selectedFile.name}`);
      setIsError(false);
      setShowConfirmation(true);
      onClose();
      setTimeout(() => setShowConfirmation(false), 1500);
      setSelectedFile(null);
    };
    reader.readAsDataURL(selectedFile);
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
          <div className={`confirmation ${isError ? "error" : "success"}`}>
            {confirmationMessage}
          </div>
        )}

        <div className="upload-form">
          <label htmlFor="fileInput" id="customFileLabel">
            Choose a File
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            id="uploadButton"
            type="button"
            onClick={handleUploadClick}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarModal;
