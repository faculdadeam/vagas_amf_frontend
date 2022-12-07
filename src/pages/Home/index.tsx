import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  DialogContent,
  DialogTitle,
  Icon,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import { getOpportunities } from "../../hooks/opportunities";
import IOpportunity from "../../interfaces/IOpportunity";
import { Colors } from "../../utils/colors";
import SeeMore from "../../components/SeeMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import { ContentCopy } from "@mui/icons-material";
import SeeMore from "../../components/SeeMore";

const Home: React.FC = () => {
  const [opportunities, setOpportunities] = useState<IOpportunity[]>([]);
  const [openedDialog, setOpenedDialog] = useState<IOpportunity | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getOpportunities().then((response) => {
      setOpportunities(response.data);
    });
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Dialog
        open={!!openedDialog}
        onClose={() => setOpenedDialog(null)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent
          sx={{
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 8,
            paddingTop: 8,
          }}
        >
          <Typography
            sx={{ fontWeight: "400", fontFamily: "Poppins", fontSize: 24 }}
          >
            {openedDialog?.company}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontFamily: "Poppins",
              fontSize: 16,
              color: "#424242",
              marginBottom: "20px",
            }}
          >
            {openedDialog?.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "35px",
              padding: "20px",
              border: "1px solid #E0E0E0",
              marginBottom: "25px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontFamily: "Poppins",
                fontSize: 16,
                color: "#9E9E9E",
              }}
            >
              {openedDialog?.description}
            </Typography>
          </Box>

          <Typography
            sx={{ fontWeight: "400", fontFamily: "Poppins", fontSize: 24 }}
          >
            Informações sobre a vaga:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "10px",
              padding: "20px",
              border: "1px solid #E0E0E0",
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontFamily: "Poppins",
                fontSize: 16,
                color: "#9E9E9E",
              }}
            >
              Cursos ({openedDialog?.courses.join(", ")})
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "10px",
              padding: "20px",
              border: "1px solid #E0E0E0",
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontFamily: "Poppins",
                fontSize: 16,
                color: "#9E9E9E",
              }}
            >
              Forma de Contratação ({openedDialog?.contractType})
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "10px",
              padding: "20px",
              border: "1px solid #E0E0E0",
              marginBottom: "25px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontFamily: "Poppins",
                fontSize: 16,
                color: "#9E9E9E",
              }}
            >
              Modalidade de Trabalho ({openedDialog?.workplaceType})
            </Typography>
          </Box>

          <Typography
            sx={{ fontWeight: "400", fontFamily: "Poppins", fontSize: 24 }}
          >
            Contatos:
          </Typography>
          {openedDialog?.contacts.map((contact, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                flex: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 5,
                  alignItems: "flex-start",
                  marginTop: "10px",
                  padding: "20px",
                  border: "1px solid #E0E0E0",
                  marginRight: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    fontSize: 16,
                    color: "#9E9E9E",
                  }}
                >
                  {contact.value}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: "10px",
                  padding: "20px",
                  border: "1px solid #E0E0E0",
                  flex: 1,
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(contact.value);
                }}
              >
                <ContentCopy
                  sx={{
                    color: "#9E9E9E",

                    marginRight: "10px",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    fontSize: 16,
                    color: "#9E9E9E",
                  }}
                >
                  Copiar
                </Typography>
              </Box>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <LocationOnIcon sx={{ color: "#2A5EE4", marginRight: "10px" }} />
              <Typography>{openedDialog?.workplaceType}</Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <QueryBuilderIcon
                sx={{ color: "#2A5EE4", marginRight: "10px" }}
              />
              <Typography>
                {openedDialog?.validUntil &&
                  new Date(openedDialog?.validUntil).getDay()}
                /
                {openedDialog?.validUntil &&
                  new Date(openedDialog?.validUntil).getMonth()}
                /
                {openedDialog?.validUntil &&
                  new Date(openedDialog?.validUntil).getFullYear()}
              </Typography>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          paddingTop: "20px",
          paddingBottom: "50px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: 25,
            backgroundColor: "#2A5EE4",
            marginTop: "20px",
            marginBottom: "30px",
            alignSelf: "flex-end",
          }}
          onClick={() => navigate("/register-opportunity")}
        >
          <AddIcon sx={{ marginRight: "10px" }} />
          Adicionar vaga
        </Button>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins",
            fontSize: 24,
            color: "#424242",
          }}
        >
          Vagas Disponíveis
        </Typography>

        {opportunities.map((opportunity) => (
          <Card
            key={opportunity.id}
            sx={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "30px",
              width: "768px",
              background: "#FFFFFF",
              borderRadius: "4px",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontFamily: "Poppins",
                      fontSize: 24,
                    }}
                  >
                    {opportunity.company}
                  </Typography>
                  <EditIcon
                    sx={{
                      fontSize: 20,
                      marginRight: "10px",
                      cursor: "pointer",
                      color: "#2A5EE4",
                    }}
                    onClick={() =>
                      navigate("/register-opportunity", {
                        state: {
                          opportunity,
                        },
                      })
                    }
                  />
                </div>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    fontSize: 16,
                    color: "#424242",
                    marginBottom: "20px",
                  }}
                >
                  {opportunity.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    fontSize: 16,
                    color: "#9E9E9E",
                    marginBottom: "30px",
                  }}
                >
                  {opportunity.description}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon
                      sx={{ color: "#2A5EE4", marginRight: "10px" }}
                    />
                    <Typography>{opportunity.workplaceType}</Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <QueryBuilderIcon
                      sx={{ color: "#2A5EE4", marginRight: "10px" }}
                    />
                    <Typography>
                      {new Date(opportunity.validUntil).getDay()}/
                      {new Date(opportunity.validUntil).getMonth()}/
                      {new Date(opportunity.validUntil).getFullYear()}
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "30px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: 25,
                      backgroundColor: Colors.primary,
                      width: "100%",
                    }}
                    onClick={() => setOpenedDialog(opportunity)}
                  >
                    Ver mais
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
