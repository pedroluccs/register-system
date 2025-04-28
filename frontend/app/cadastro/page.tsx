"use client";
import ProtectedRoute from "@/src/components/RotaProtegida/RotaProtegida";
import Cadastro from "../../src/components/CadastroUsuario/Cadastro";

export default function PageCadastro() {
return (
    <ProtectedRoute>
    <Cadastro />
     </ProtectedRoute>
)
}
