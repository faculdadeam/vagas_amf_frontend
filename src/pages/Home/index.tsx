import { Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { getOpportunities } from "../../hooks/opportunities";
import IOpportunity from "../../interfaces/IOpportunity";

const Home: React.FC = () => {
  const [opportunities, setOpportunities] = useState<IOpportunity[]>([]);

  useEffect(() => {
    getOpportunities().then((response) => {
      setOpportunities(response.data);
    });

  }, []);

  return (
    <div>
      <Title>Vagas Disponíveis</Title>

      {opportunities.map((opportunity) => (
        <Card key={opportunity.id}>
          <CardContent>
            <h1>{opportunity.name}</h1>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Home;