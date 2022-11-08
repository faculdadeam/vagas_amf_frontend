import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import IOpportunity from "../../interfaces/IOpportunity";

const Opportunity: React.FC<IOpportunity> = (props: IOpportunity) => {

  //shadow card
  const shadow = {
    boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)"
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, width: 768, gap: 1, p: 2, borderRadius: 1 }} style={shadow}>
      <Typography sx={{ fontSize: 18 }}>
        {props.company}
      </Typography>
      <Typography sx={{ fontSize: 14 }}>
        {props.name}
      </Typography>
      <Typography sx={{ color: "#9E9E9E", mb: 4, mt: 1 }}>
        {props.description}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <LocationOnOutlinedIcon style={{ fill: "#2A5EE4" }} />
          <Typography sx={{ color: "#2A5EE4" }}>
            Brasil/Santa Maria
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <AccessTimeOutlinedIcon style={{ fill: "#2A5EE4" }} />
          <Typography sx={{ color: "#2A5EE4" }}>
            {props.validUntil.toISOString()}
          </Typography>
        </Box>
      </Box>
      <Button variant="outlined" style={{ borderStyle: "dashed", color: "rgba(0, 0, 0, 0.6)" }}>Ver mais</Button>
    </Box>
  );
};

export default Opportunity;
