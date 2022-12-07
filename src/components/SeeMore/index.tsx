import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import * as React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import IOpportunity from "../../interfaces/IOpportunity";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "60%",
  bgcolor: "background.paper",
  borderRadius: 3,
  p: 10,
  pt: 6,
  overflow: "auto",
};

const SeeMore:  React.FC<IOpportunity> = (props: IOpportunity) =>  {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ver mais</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              style={{ fontSize: 22, fontWeight: 400 }}
            >
              {props.company}
            </Typography>
            <Typography
              id="transition-modal-description"
              style={{ fontSize: 18, fontWeight: 400 }}
            >
              {props.name}
            </Typography>
            <Box sx={{ border: 1, mt: 3, padding: 2, color: "#666666" }}>
              <Typography
                style={{ fontSize: 18, fontWeight: 400, color: "#666666" }}
              >
                {props.description}
              </Typography>
            </Box>
            <Typography
              id="transition-modal-title"
              style={{ fontSize: 24, fontWeight: 400, marginTop: 20 }}
            >
              Informações sobre a vaga:
            </Typography>
            <Box sx={{ border: 1, mt: 1, padding: 2, color: "#666666" }}>
              <Typography
                style={{ fontSize: 18, fontWeight: 400, color: "#666666" }}
              >
                {props.courses}
              </Typography>
            </Box>
            <Box sx={{ border: 1, mt: 1, padding: 2, color: "#666666" }}>
              <Typography
                style={{ fontSize: 18, fontWeight: 400, color: "#666666" }}
              >
                {props.contractType}
              </Typography>
            </Box>
            <Box sx={{ border: 1, mt: 1, padding: 2, color: "#666666" }}>
              <Typography
                style={{ fontSize: 18, fontWeight: 400, color: "#666666" }}
              >
                {props.workplaceType}
              </Typography>
            </Box>
            <Typography
              id="transition-modal-title"
              style={{ fontSize: 24, fontWeight: 400, marginTop: 20 }}
            >
              Contatos
            </Typography>
            <Box sx={{ border: 1, mt: 1, padding: 2, color: "#666666" }}>
              <Typography
                style={{ fontSize: 18, fontWeight: 400, color: "#666666" }}
              >
                Email....
              </Typography>
            </Box>
            <Box sx={{ border: 1, mt: 1, padding: 2, color: "#666666" }}>
              <Typography
                style={{ fontSize: 18, fontWeight: 400, color: "#666666" }}
              >
                Número.....
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItens: "center",
                justifyContent: "left",
                mt: 3,
              }}
            >
              <LocationOnOutlinedIcon
                style={{ fill: "#2A5EE4", fontSize: 35 }}
              />
              <Typography
                style={{ fontSize: 18, fontWeight: 400, color: "#666666" }}
              >
                Santa Maria/Brasil....
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SeeMore;
