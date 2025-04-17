import Link from "next/link"
import { MainHeader, Nav } from "./style"


export const Header = () => {
    return (
    <MainHeader>
        <Nav>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cadastro">Cadastro</Link></li>
            <li><Link href="/lista">Lista</Link></li>
        </Nav>
    </MainHeader>
)}