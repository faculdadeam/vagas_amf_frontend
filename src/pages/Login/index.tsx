import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { auth, logInWithEmailAndPassword } from "../../hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Colors } from "../../utils/colors";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/home");
    }, [user, loading, navigate]);

    return (
        <Container maxWidth="xl" sx={{ paddingTop: 16 }}>
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
                    Entrar no sistema
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "regular", fontFamily: "Poppins" }}
                >
                    Login de acesso restrito
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
                        label="Login"
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    ></TextField>
                    <TextField
                        variant="outlined"
                        label="Senha"
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
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
                            onClick={() => navigate("/")}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: 25, backgroundColor: Colors.primary }}
                            onClick={() => logInWithEmailAndPassword(email, password)}
                        >
                            Entrar
                        </Button>
                    </Container>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;
