# 📈 Sales Manager MVC | Painel de Controle de Vendas

> Sistema de gestão comercial desenvolvido com o robusto ecossistema .NET.

Este projeto é uma aplicação web focada no controle administrativo de vendas, permitindo a visualização e gerenciamento de registros comerciais. A aplicação foi construída seguindo o padrão de arquitetura **MVC (Model-View-Controller)**, garantindo código limpo, escalável e de fácil manutenção.

---

### 🚀 Funcionalidades & Arquitetura

* **Arquitetura MVC:** Separação clara entre a lógica de negócios (Controllers), interface do usuário (Views/Razor) e dados (Models).
* **Gestão de Vendas:** Interface para visualização e controle de métricas de vendas.
* **Routing Avançado:** Gerenciamento de rotas nativo do ASP.NET Core.
* **Frontend Integrado:** Utilização de Razor Pages (`.cshtml`) para renderização dinâmica de dados no servidor (Server-Side Rendering).

---

### 🛠️ Tecnologias Utilizadas

* **Backend:** C# / .NET Core
* **Framework:** ASP.NET Core MVC
* **Frontend:** Razor Views (CSHTML), HTML5, CSS3, JavaScript
* **Infraestrutura:** Kestrel Server (Padrão .NET)

---

### 📦 Como rodar o projeto

Pré-requisitos: Ter o [.NET SDK](https://dotnet.microsoft.com/download) instalado.

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/ramiles3712/sales-dashboard-mvc.git](https://github.com/ramiles3712/sales-dashboard-mvc.git)
    ```
2.  Navegue até a pasta do projeto e restaure as dependências:
    ```bash
    dotnet restore
    ```
3.  Inicie a aplicação:
    ```bash
    dotnet run
    ```
4.  Acesse no navegador (geralmente em `https://localhost:5001` ou `http://localhost:5000`).

---

### 🔍 Estrutura do Projeto

* `Controllers/`: Lógica de controle e fluxo de dados (ex: `HomeController.cs`).
* `Views/`: Interfaces de usuário renderizadas via Razor (ex: `Index.cshtml`).
* `wwwroot/`: Arquivos estáticos (CSS, JS, Imagens).
