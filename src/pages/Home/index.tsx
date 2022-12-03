import { Box, Button, Card, CardContent, Container, Icon, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import { getOpportunities } from "../../hooks/opportunities";
import IOpportunity from "../../interfaces/IOpportunity";
import { Colors } from "../../utils/colors";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import EditIcon from '@mui/icons-material/Edit';

const Home: React.FC = () => {
  const [opportunities, setOpportunities] = useState<IOpportunity[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getOpportunities().then((response) => {
      setOpportunities(response.data);
    });

  }, []);

  return (
    <Container maxWidth="xl" sx={{
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          paddingTop: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "Poppins", fontSize: 24 }}
        >
          Vagas Disponíveis
        </Typography>

        <Button
          variant="contained"
          sx={{ borderRadius: 25, backgroundColor: Colors.primary, marginTop: "20px", marginBottom: "20px" }}
          onClick={() => navigate('/register-opportunity')}
        >
          Adicionar vaga
        </Button>

        {opportunities.map((opportunity) => (
          <Card
            key={opportunity.id}
            sx={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "20px",
              width: "768px",
              height: "243px",
              background: "#FFFFFF",
              borderRadius: "4px"
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
                  <Typography sx={{ fontWeight: "400", fontFamily: "Poppins", fontSize: 24 }}>{opportunity.company}</Typography>
                  <EditIcon sx={{ fontSize: 20, marginRight: "10px", cursor: "pointer", color: "#2A5EE4" }}
                    onClick={() => navigate("/register-opportunity", {
                      state: {
                        opportunity
                      }
                    })}
                  />
                </div>
                <Typography sx={{ fontWeight: "400", fontFamily: "Poppins", fontSize: 16, color: "#424242", marginBottom: "20px" }}>{opportunity.name}</Typography>
                <Typography sx={{ fontWeight: "400", fontFamily: "Poppins", fontSize: 16, color: "#9E9E9E", marginBottom: "30px" }}>{opportunity.description}</Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%"
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
                    <Typography>{opportunity.workplaceType}</Typography>

                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <QueryBuilderIcon sx={{ color: "#2A5EE4", marginRight: "10px" }} />
                    <Typography>{new Date(opportunity.validUntil).getDay()}/{new Date(opportunity.validUntil).getMonth()}/{new Date(opportunity.validUntil).getFullYear()}</Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "30px"
                  }}
                >
                  <Button variant="outlined" sx={{ borderRadius: 25, backgroundColor: Colors.primary, width: "100%" }}>Ver mais</Button>
                </div>

              </div>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Home;