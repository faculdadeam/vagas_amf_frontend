import { Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import { getOpportunities } from "../../hooks/opportunities";
import IOpportunity from "../../interfaces/IOpportunity";
import { Colors } from "../../utils/colors";

const Home: React.FC = () => {
  const [opportunities, setOpportunities] = useState<IOpportunity[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getOpportunities().then((response) => {
      setOpportunities(response.data);
    });

  }, []);

  return (
    <div>
      <Title>Vagas Disponíveis</Title>

      <Button
        variant="contained"
        sx={{ borderRadius: 25, backgroundColor: Colors.primary }}
        onClick={() => navigate('/register-opportunity')}
      >
        Adicionar vaga
      </Button>

      {opportunities.map((opportunity) => (
        <Card key={opportunity.id} onClick={() => navigate("/register-opportunity", {
          state: {
            opportunity
          }
        })}>
          <CardContent>
            <h1>{opportunity.company}</h1>
            <h3>{opportunity.name}</h3>
            <p>{opportunity.description}</p>
            <p>{opportunity.workplaceType}</p>
            <p>{new Date(opportunity.validUntil).getDay()}/{new Date(opportunity.validUntil).getMonth()}/{new Date(opportunity.validUntil).getFullYear()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Home;