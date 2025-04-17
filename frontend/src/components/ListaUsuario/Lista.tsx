import { useEffect, useState } from "react";
import api from "../../services/api";
import { Header } from "../Header/Header";
import { Button, Input } from "../Login/style";
import { List, ListContainer } from "./style";

interface Usuario {
    id: number;
    nome_completo: string;
    cpf: string;
    endereco: string;
    email: string;
    telefone: string;
}

export default function Lista() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [dadosEdicao, setDadosEdicao] = useState<Partial<Usuario>>({});

    const buscarUsuarios = async () => {
        try {
            const token = localStorage.getItem("accessToken");
            const response = await api.get("https://register-system-h2r6.onrender.com/api/usuarios/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsuarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    const deletarUsuario = async (id: number) => {
        try {
            await api.delete(`/usuarios/${id}/`);
            buscarUsuarios();
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
        }
    };

    const iniciarEdicao = (usuario: Usuario) => {
        setEditandoId(usuario.id);
        setDadosEdicao({ ...usuario });
    };

    const cancelarEdicao = () => {
        setEditandoId(null);
        setDadosEdicao({});
    };

    const salvarEdicao = async () => {
        try {
            await api.put(`/usuarios/${editandoId}/`, dadosEdicao);
            setEditandoId(null);
            setDadosEdicao({});
            buscarUsuarios();
        } catch (error) {
            console.error("Erro ao salvar edição:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDadosEdicao({
            ...dadosEdicao,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        buscarUsuarios();
    }, []);

    return (
        <>
            <Header />
            <ListContainer>
                <h2>Lista de Pessoas</h2>
                <ul>
                    {usuarios.map((usuario) => (
                        <List key={usuario.id}>
                            {editandoId === usuario.id ? (
                                <>
                                    <Input
                                        name="nome_completo"
                                        value={dadosEdicao.nome_completo || ""}
                                        onChange={handleChange}
                                        placeholder="Nome completo"
                                    />
                                    <Input
                                        name="email"
                                        value={dadosEdicao.email || ""}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                    <Input
                                        name="cpf"
                                        value={dadosEdicao.cpf || ""}
                                        onChange={handleChange}
                                        placeholder="CPF"
                                    />
                                    <Input
                                        name="endereco"
                                        value={dadosEdicao.endereco || ""}
                                        onChange={handleChange}
                                        placeholder="Endereço"
                                    />
                                    <Input
                                        name="telefone"
                                        value={dadosEdicao.telefone || ""}
                                        onChange={handleChange}
                                        placeholder="Telefone"
                                    />
                                    <br />
                                    <Button onClick={salvarEdicao}>
                                        Salvar
                                    </Button>
                                    <Button onClick={cancelarEdicao}>
                                        Cancelar
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <p><strong>Nome:</strong> {usuario.nome_completo}</p>
                                    <p><strong>Email:</strong> {usuario.email}</p>
                                    <p><strong>CPF:</strong> {usuario.cpf}</p>
                                    <p><strong>Endereço:</strong> {usuario.endereco}</p>
                                    <p><strong>Telefone:</strong> {usuario.telefone}</p>
                                    <Button onClick={() => iniciarEdicao(usuario)} style={{ marginRight: "10px" }}>
                                        Editar
                                    </Button>
                                    <Button onClick={() => deletarUsuario(usuario.id)}>
                                        Excluir
                                    </Button>
                                </>
                            )}
                        </List>
                    ))}
                </ul>
            </ListContainer>
        </>
    );
}
