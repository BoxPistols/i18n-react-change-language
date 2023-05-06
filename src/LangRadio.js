import React from "react";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const LangRadio = ({ language, handleLangChange }) => {
  return (
    <>
      <section className="section">
        <FormControl>
          <FormLabel id="group-label">Lang</FormLabel>
          <RadioGroup
            row
            aria-labelledby="group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio />}
              label="JA"
              id="ja"
              type="radio"
              name="lng"
              value="ja"
              checked={language === "ja"}
              onChange={handleLangChange}
            />
            <FormControlLabel
              label="EN"
              control={<Radio />}
              id="en"
              type="radio"
              name="lng"
              value="en"
              checked={language === "en"}
              onChange={handleLangChange}
            />
          </RadioGroup>
        </FormControl>
      </section>
    </>
  );
};

export default LangRadio;
