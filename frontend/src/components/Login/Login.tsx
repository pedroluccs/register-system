"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button, Container, Input } from "./style";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await axios.post("https://register-system-h2r6.onrender.com/api/token/", {
                username,
                password,
            });

            const { access, refresh } = response.data;

            console.log("Login bem-sucedido!");
            console.log("Access Token:", access);

            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);


            router.push("/lista"); 


        } catch (err) {
            console.error("Erro ao fazer login:", err);
            setError("Usuário ou senha incorretos");
        }
    };

    return (
        <Container>
            <h1>Login</h1>
            <Input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Entrar</Button>
            <button onClick={() => router.push("/lista")}>Ir para Lista</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </Container>
    );
}
