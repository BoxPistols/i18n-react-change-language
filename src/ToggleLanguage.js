import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ToggleLanguage = ({ language, setLanguage }) => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleLangChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    handleClose();
  };

  return (
    <div>
      <>
        <Button onClick={handleClick} color="inherit">
          lng：{" "}
          {language === "ja" ? (
            <img
              src="https://img.icons8.com/color/30/000000/japan.png"
              alt="img"
            />
          ) : (
            <img
              src="https://img.icons8.com/color/30/000000/usa.png"
              alt="img"
            />
          )}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => toggleLangChange("ja")}>JA</MenuItem>
          <MenuItem onClick={() => toggleLangChange("en")}>EN</MenuItem>
        </Menu>
      </>
    </div>
  );
};

export default ToggleLanguage;
