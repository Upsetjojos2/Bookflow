# meu-app

Aplicação React simples que exibe uma estante de livros com componentes reutilizáveis.

## Funcionalidades

- Pesquisa de livros
- Lista de últimos lançamentos
- Cards de recomendação
- Estilização com `styled-components`

## Tecnologias

- React
- styled-components
- Create React App

## Como rodar localmente

1. Instale as dependências:

```bash
cd meu-app
npm install
```

2. Rode em modo de desenvolvimento:

```bash
npm start
```

3. Gere o build de produção:

```bash
npm run build
```

## Estrutura principal

- `src/` — código fonte
  - `componentes/` — componentes React
  - `imagens/` — imagens usadas pelo app
  - `App.js` — componente raiz

## Publicar no GitHub

Opção A — usando `git` (manual):

```bash
cd meu-app
git init
git add .
git commit -m "Initial commit"
git branch -M main
# substitua <URL_DO_REPO> pela URL do seu repositório remoto
git remote add origin <URL_DO_REPO>
git push -u origin main
```

Opção B — usando `gh` (GitHub CLI):

```bash
cd meu-app
# substitua USER/REPO pelo seu usuário e nome de repositório
gh repo create USER/REPO --public --source=. --remote=origin --push
```

> Se você não tem um repositório remoto criado, pode criar um no https://github.com e depois rodar os comandos acima.

## .gitignore sugerido

Adicione (caso ainda não exista):

```
node_modules
build
.env
.DS_Store
```

## Observações

- Se quiser, eu posso: criar o commit automaticamente e tentar dar push (você precisará autorizar/fornecer as credenciais ou configurar o `origin`).
- Me diga se quer que eu crie também um `LICENSE` ou ajuste o `package.json` antes de publicar.

---

Desenvolvido localmente — se quiser que eu publique agora, diga qual método prefere (git/gh) e a URL ou usuário do repositório.
