import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { Dayjs } from "dayjs";

import React, { useState } from "react";
import ChipSelect from "../../components/ChipSelect";
import DatePickerCustom from "../../components/DatePickerCustom";
import { createOpportunity } from "../../hooks/opportunities";
import IOpportunity, { IContact } from "../../interfaces/IOpportunity";
import { Colors } from "../../utils/colors";
import { useNavigate } from "react-router-dom";

const coursesNames = [
  "Sistemas de Informação",
  "Administração",
  "Ontopsicologia",
  "Pedagogia",
  "Direito",
  "Contábeis",
  "Gastronomia",
];

const hiringMethods = [
  "Estágio",
  "Efetivo",
  "Freelance",
  "Voluntário",
  "Pessoa jurídica",
];

const workMethods = ["Presencial", "Híbrido", "Home Office"];

const RegisterOpportunity: React.FC = () => {
  const [opportunityData, setOpportunityData] = useState<IOpportunity>({
    id: "",
    name: "",
    description: "",
    contacts: [],
    status: "active",
    company: "",
    contractType: "",
    courses: [],
    salary: [],
    workplaceType: "",
    image: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    validUntil: new Date(),
  });

  const [hiringMethod, setHiringMethod] = useState<string>("");
  const [workMethod, setWorkMethod] = useState<string>("");

  const [salaryDisabled, setSalaryDisabled] = useState<boolean>(true);

  const [salary, setSalary] = useState<number[]>([0, 8000]);

  const [date, setDate] = React.useState<Dayjs | null>(null);

  const [courses, setCourses] = React.useState<string[]>([]);

  const navigate = useNavigate();

  const handleChangeOpportunityData = (type: string, data: any) => {
    let newOpportunityData = opportunityData;
    Object.keys(newOpportunityData).forEach((key) => {
      if (key === type) {
        newOpportunityData[key as keyof typeof opportunityData] = data;
      }
    });
    setOpportunityData(newOpportunityData);
    console.log(opportunityData);
  };

  const handleContacts = (data: IContact) => {
    let newOpportunityData = opportunityData;
    let checkExists = false;
    if (newOpportunityData.contacts.length > 0) {
      newOpportunityData.contacts.forEach((value) => {
        if (value.type === data.type && !checkExists) {
          checkExists = true;
          value.value = data.value;
        }
      });
    }
    if (!checkExists) {
      newOpportunityData.contacts.push(data);
    }
    console.log(newOpportunityData);

    setOpportunityData(newOpportunityData);
  };

  const handleChangeSalary = (event: Event, newSalary: number | number[]) => {
    setSalary(newSalary as number[]);
    handleChangeOpportunityData("salary", salary);
  };

  const handleChangeCourses = (event: SelectChangeEvent<typeof courses>) => {
    const {
      target: { value },
    } = event;
    setCourses(typeof value === "string" ? value.split(",") : value);
    handleChangeOpportunityData("courses", courses);
  };

  const saveOpportunity = async () => {
    await createOpportunity(opportunityData);
    navigate("/");
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "Poppins", fontSize: 24 }}
        >
          Cadastrar Nova Vaga
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: "regular", fontFamily: "Poppins" }}
        >
          Insira os dados nos campos abaixo para cadastrar uma nova vaga
        </Typography>
        <Paper
          elevation={2}
          sx={{
            marginTop: 4,
            paddingY: 4,
            paddingX: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "40%",
            gap: 2,
            border: `1px solid #${Colors.primary}`,
          }}
        >
          <TextField
            variant="outlined"
            label="Título da vaga"
            fullWidth
            onChange={(e) =>
              handleChangeOpportunityData("name", e.target.value)
            }
          ></TextField>
          <TextField
            variant="outlined"
            label="Nome da empresa"
            fullWidth
            onChange={(e) =>
              handleChangeOpportunityData("company", e.target.value)
            }
          ></TextField>

          <Container
            disableGutters
            maxWidth={false}
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            <TextField
              variant="outlined"
              label="Telefone"
              fullWidth
              onChange={(e) =>
                handleContacts({ type: "Phone", value: e.target.value })
              }
            ></TextField>
            <TextField
              variant="outlined"
              label="Celular"
              fullWidth
              onChange={(e) =>
                handleContacts({ type: "Cellphone", value: e.target.value })
              }
            ></TextField>
          </Container>
          <TextField
            variant="outlined"
            label="E-mail"
            fullWidth
            onChange={(e) =>
              handleContacts({ type: "Email", value: e.target.value })
            }
          ></TextField>
          <Container
            disableGutters
            maxWidth={false}
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            <FormControl fullWidth>
              <InputLabel id="hiring-method-label">
                Forma de contratação
              </InputLabel>
              <Select
                labelId="hiring-method-label"
                id="hiring-method"
                label="Forma de contratação"
                value={hiringMethod}
                onChange={(e: SelectChangeEvent) => {
                  handleChangeOpportunityData("contractType", e.target.value);
                  setHiringMethod(e.target.value);
                }}
              >
                {hiringMethods.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="work-method-label">
                Modalidade de trabalho
              </InputLabel>
              <Select
                labelId="work-method-label"
                label="Modalidade de trabalho"
                value={workMethod}
                onChange={(e: SelectChangeEvent) => {
                  handleChangeOpportunityData("workplaceType", e.target.value);
                  setWorkMethod(e.target.value);
                }}
              >
                {workMethods.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Container
            maxWidth={false}
            disableGutters
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            <FormControl fullWidth>
              <DatePickerCustom
                label="Data expiração da vaga"
                onChange={(newDate) => {
                  if (newDate !== null) {
                    newDate = newDate.add(1, "days").add(-1, "milliseconds");
                    handleChangeOpportunityData("validUntil", newDate.toDate());
                    setDate(newDate);
                  }
                }}
                value={date}
              />
            </FormControl>

            <ChipSelect
              onChange={handleChangeCourses}
              values={coursesNames}
              value={courses}
              label="Cursos"
            />
          </Container>
          <Container disableGutters>
            <Container
              disableGutters
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Checkbox
                inputProps={{ "aria-label": "Checkbox" }}
                sx={{ marginLeft: -1.5 }}
                onChange={() => setSalaryDisabled(!salaryDisabled)}
              />
              <Typography>Adicionar faixa salarial</Typography>
            </Container>
            <Container
              disableGutters
              sx={{ display: `${salaryDisabled ? "none" : "visible"}` }}
            >
              <Typography>Faixa salarial</Typography>
              <Slider
                getAriaLabel={() => "Faixa salarial"}
                value={salary}
                min={0}
                max={8000}
                step={100}
                onChange={handleChangeSalary}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => `R$${value}`}
                valueLabelFormat={(value) =>
                  `R$ ${value}${value === 8000 ? "+" : ""}`
                }
              />
            </Container>
          </Container>
          <TextField
            variant="outlined"
            label="Descrição"
            fullWidth
            multiline
            rows={6}
            onChange={(e) =>
              handleChangeOpportunityData("description", e.target.value)
            }
          ></TextField>
          <Container
            disableGutters
            sx={{
              marginY: 2,
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="text"
              sx={{ borderRadius: 25, color: Colors.primary }}
              onClick={() => navigate('/')}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: 25, backgroundColor: Colors.primary }}
              onClick={() => saveOpportunity()}
            >
              Salvar vaga
            </Button>
          </Container>
        </Paper>
      </Box>
    </Container>
  );
};

export default RegisterOpportunity;
