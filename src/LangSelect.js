import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

const LangSelect = ({ language, handleLangChange }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <section className="section">
        <Box sx={{ p: 4, display: "flex", flexDirection: "column", gap: 3 }}>
          <div className="card">
            <p>
              i18n.language: <b>{i18n.language}</b>
            </p>
            <Box
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column"
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="select-label">Lang</InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  label="Lng"
                  onChange={handleLangChange}
                  value={language}
                  checked={language}
                >
                  <MenuItem value="ja" checked={language === "ja"}>
                    JA
                  </MenuItem>
                  <MenuItem value="en" checked={language === "en"}>
                    EN
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </Box>
      </section>
    </>
  );
};

export default LangSelect;
