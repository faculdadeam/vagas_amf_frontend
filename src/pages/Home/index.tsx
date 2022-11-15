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