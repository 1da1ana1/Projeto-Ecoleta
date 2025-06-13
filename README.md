# Ecoleta ♻️


Projeto full-stack de um marketplace para coleta de resíduos, desenvolvido durante a Next Level Week da Rocketseat. A aplicação conecta pessoas a pontos de coleta de forma eficiente, com um back-end robusto e um front-end dinâmico.

### Funcionalidades Principais

* **Cadastro de Pontos de Coleta:** Formulário completo para registrar novas entidades e os tipos de resíduos que coletam.
* **Busca e Listagem de Pontos:** Página de busca que exibe os pontos de coleta disponíveis em uma determinada localidade.
* **Integração com API Externa:** Uso da API do IBGE para popular dinamicamente os campos de Estado e Cidade, melhorando a experiência do usuário.
* **Páginas Dinâmicas:** Renderização de páginas no lado do servidor (SSR) com Nunjucks, permitindo a exibição de dados do banco de dados diretamente no HTML.

---

###  Tecnologias e Ferramentas Utilizadas

Este projeto foi construído do zero, abrangendo tanto o back-end quanto o front-end. As principais tecnologias utilizadas foram:

#### **Back-end**
* **Node.js:** Ambiente de execução para o JavaScript no servidor.
* **Express.js:** Framework para a criação do servidor e gerenciamento de rotas.
* **SQLite:** Banco de dados SQL relacional, gerenciado pelo driver `sqlite3`.
* **Nunjucks:** Template Engine para renderização de HTML dinâmico no servidor.

#### **Front-end**
* **HTML5** e **CSS3:** Estruturação e estilização das páginas, com foco em semântica e layouts modernos.
* **JavaScript (ES6+):** Manipulação do DOM para interatividade, como a seleção de itens e a comunicação com APIs.

#### **Ferramentas e Ecossistema**
* **Git & GitHub:** Versionamento e armazenamento do código.
* **Nodemon:** Monitoramento de arquivos para reiniciar o servidor automaticamente durante o desenvolvimento.
* **VS Code:** Editor de código principal.

---

### Como Executar o Projeto

```bash
# 1. Clone este repositório
$ git clone https://github.com/1da1ana1/Projeto-Ecoleta.git

# 2. Acesse a pasta do projeto no terminal
$ cd Projeto-Ecoleta

# 3. Instale as dependências
$ npm install

# 4. Inicie o servidor
$ npm start
```
Após executar os comandos, abra `http://localhost:3000` no seu navegador.

---

### Autor

**Yasmim Daiana**

* LinkedIn: [Seu Perfil no LinkedIn](https://www.linkedin.com/in/yasmim-daiana/)
* Email: y166939@dac.unicamp.br
