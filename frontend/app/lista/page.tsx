"use client";

import Lista from "@/src/components/ListaUsuario/Lista";
import ProtectedRoute from "@/src/components/RotaProtegida/RotaProtegida";

export default function PageLista() {
    return (
        <ProtectedRoute>
        <Lista/>
        </ProtectedRoute>
    )
}