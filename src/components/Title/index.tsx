import Typography from "@mui/material/Typography";
import React from "react";

const Title: React.FC<any> = ({ children }) => {
  return (
    <Typography>
        {children}
    </Typography>
  );
};

export default Title;
