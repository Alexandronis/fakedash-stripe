import React, { useState } from "react";
import { useAvatar } from "../../../context/AvatarContext";
import "./avatarModal.scss";

// Define your available avatars
const avatarList = [
  "/avatars/avatar (1).jpg",
  "/avatars/avatar (1).png",
  "/avatars/avatar (2).jpg",
  "/avatars/avatar (3).jpg",
  "/avatars/avatar (4).jpg",
  "/avatars/avatar (6).jpg",
  "/avatars/avatar (7).jpg",
  "/avatars/avatar (9).jpg",
  "/avatars/avatar (11).jpg",
  "/avatars/avatar (14).jpg",
  "/avatars/avatar (15).jpg",
  "/avatars/avatar (17).jpg",
  "/avatars/avatar (18).jpg",
  "/avatars/avatar (19).jpg",
  "/avatars/avatar (20).jpg",
  "/avatars/avatar (21).jpg",
  "/avatars/avatar (22).jpg",
  "/avatars/avatar (23).jpg",
  "/avatars/avatar (24).jpg",
  "/avatars/avatar (26).jpg",
  "/avatars/avatar (27).jpg",
  "/avatars/avatar (28).jpg",
  "/avatars/avatar (29).jpg",
  "/avatars/avatar (30).jpg",
  "/avatars/avatar (31).jpg",
  "/avatars/avatar (32).jpg",
  "/avatars/avatar (33).jpg",
  "/avatars/avatar (34).jpg",
  "/avatars/avatar (35).jpg",
  "/avatars/avatar (37).jpg",
  "/avatars/avatar (38).jpg",
  "/avatars/avatar (40).jpg",
  "/avatars/avatar (42).jpg",
  "/avatars/avatar (44).jpg",
  "/avatars/avatar (45).jpg",
  "/avatars/avatar (46).jpg",
  "/avatars/avatar (47).jpg",
  "/avatars/avatar (48).jpg",
  "/avatars/avatar (49).jpg",
  "/avatars/avatar (50).jpg",
  "/avatars/avatar (51).jpg",
  "/avatars/avatar (52).jpg",
  "/avatars/avatar (53).jpg",
  "/avatars/avatar (54).jpg",
  "/avatars/avatar (55).jpg",
  "/avatars/avatar (56).jpg",
  "/avatars/avatar (57).jpg",
  "/avatars/avatar (58).jpg",
  "/avatars/avatar (60).jpg",
  "/avatars/avatar (62).jpg",
  "/avatars/avatar (63).jpg",
  "/avatars/avatar (66).jpg",
  "/avatars/avatar (69).jpg",
  "/avatars/avatar (70).jpg",
  "/avatars/avatar (73).jpg",
  "/avatars/avatar (74).jpg",
  "/avatars/avatar (75).jpg",
  "/avatars/avatar (76).jpg",
  "/avatars/avatar (77).jpg",
  "/avatars/avatar (78).jpg",
  "/avatars/avatar (79).jpg",
  "/avatars/avatar (80).jpg",
  "/avatars/avatar (82).jpg",
  "/avatars/avatar (83).jpg",
  "/avatars/avatar (84).jpg",
  "/avatars/avatar (85).jpg",
  "/avatars/avatar (86).jpg",
  "/avatars/avatar (87).jpg",
  "/avatars/avatar (88).jpg",
  "/avatars/avatar (90).jpg",
  "/avatars/avatar (91).jpg",
  "/avatars/avatar (93).jpg",
  "/avatars/avatar (94).jpg",
  "/avatars/avatar (96).jpg",
  "/avatars/avatar (97).jpg",
  "/avatars/avatar (97) (1).jpg",
  "/avatars/avatar (100).jpg",
  "/avatars/avatar (101).jpg",
  "/avatars/avatar (103).jpg",
  "/avatars/avatar (104).jpg",
  "/avatars/avatar (106).jpg",
  "/avatars/avatar (107).jpg",
  "/avatars/avatar (108).jpg",
  "/avatars/avatar (109).jpg",
  "/avatars/avatar (110).jpg",
  "/avatars/avatar (111).jpg",
  "/avatars/avatar (112).jpg",
  "/avatars/avatar (115).jpg",
  "/avatars/avatar (117).jpg",
  "/avatars/avatar (118).jpg",
  "/avatars/avatar (119).jpg",
  "/avatars/avatar (120).jpg",
];


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
