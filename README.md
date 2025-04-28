Sistema de Cadastro de Usuários
Sistema Full Stack para cadastro, listagem, edição e exclusão de usuários, com autenticação via token JWT.

📁 Estrutura do Projeto <br/>
/backend: API desenvolvida com Django e Django Rest Framework. <br/>

/frontend: Interface web criada em Next.js e TypeScript. <br/>


🚀 Tecnologias Utilizadas <br/>
Backend (Django) <br/>
Django 5.1: Framework web robusto e seguro. <br/>

Django Rest Framework: Criação de APIs REST de forma prática. <br/>

Djoser: Endpoints para registro, login e gerenciamento de usuários. <br/>

SimpleJWT: Autenticação baseada em JSON Web Tokens (JWT). <br/>

CORS Headers: Permite comunicação entre domínios diferentes (frontend ↔ backend). <br/>

Frontend (Next.js) <br/>
Next.js 15: Framework React para construção de aplicações web rápidas. <br/>

React 19: Biblioteca JavaScript para interfaces de usuário. <br/>

TypeScript: Superset de JavaScript com tipagem estática.<br/>

Styled Components: Estilização de componentes de forma modular.<br/>

Axios: Cliente HTTP para consumir a API.<br/>

Next Navigation: Navegação entre rotas no projeto.<br/>



🛠️ Como Rodar o Projeto Localmente<br/>
1. Clone o repositório<br/>
git clone https://github.com/seu-usuario/seu-repositorio.git<br/>
cd seu-repositorio<br/>

2. Configurar o Backend<br/>
cd backend<br/>
python -m venv venv<br/>
source venv/bin/activate        (Linux/Mac)<br/>
ou<br/>
venv\Scripts\activate           (Windows)<br/>

pip install -r requirements.txt<br/>
python manage.py migrate<br/>
python manage.py runserver<br/>
A API estará disponível em: http://127.0.0.1:8000/<br/>

3. Configurar o Frontend<br/>
cd frontend<br/>
npm install<br/>
npm run dev<br/>
A interface estará disponível em: http://localhost:3000/<br/>

Endpoints Importantes:<br/>
Login: /api/token/ → Retorna access e refresh tokens.<br/>

Cadastro de Usuário: /api/usuarios/<br/>

Listagem de Usuários: /api/usuarios/<br/>

Edição de Usuário: /api/usuarios/{id}/<br/>

Exclusão de Usuário: /api/usuarios/{id}/<br/>

Importante: Para acessar rotas protegidas, é necessário enviar o token de autenticação no cabeçalho da requisição.<br/>

🔒 Proteção de Rotas (Frontend)<br/>
As páginas de cadastro e listagem de usuários são protegidas — usuários não autenticados são redirecionados para a página de login.<br/>


Demonstração<br/>
Deploy Frontend: https://register-system-nu.vercel.app<br/>

Deploy Backend: https://register-system-h2r6.onrender.com<br/>



