import { useState } from "react";
import { Header } from "../Header/Header";
import axios from "axios";
import { Button, Input } from "../Login/style";
import { ContainerCadastro } from "./style";

export default function Cadastro() {
    const [usuario, setUsuario] = useState({
        nome_completo: "",
        cpf: "",
        endereco: "",
        email: "",
        telefone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem("accessToken");
        console.log("Token:", token)

        try {
            await axios.post("https://register-system-h2r6.onrender.com/api/cadastro/", usuario, {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });

            alert("Usuário cadastrado!");
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            alert("Erro ao cadastrar usuário")
        }
    }


    return (
        <>
        <Header/>
        <form onSubmit={handleSubmit}>
        <ContainerCadastro>
            <h1>Cadastro</h1>
            <Input name="nome_completo" placeholder="Nome" onChange={handleChange} />
            <Input name="cpf" placeholder="CPF" onChange={handleChange} />
            <Input name="endereco" placeholder="Endereço" onChange={handleChange} />
            <Input name="email" placeholder="E-mail" onChange={handleChange} />
            <Input name="telefone" placeholder="Telefone" onChange={handleChange} />
            <Button type="submit">Cadastrar</Button>
        </ContainerCadastro>
        </form>
        </>
    )
}