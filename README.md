# Projeto de Teste com Playwright

## Descrição
Este projeto utiliza o Playwright para realizar testes automatizados de ponta a ponta. A estrutura do projeto segue o padrão Page Object Model (POM) para facilitar a manutenção e a legibilidade dos testes.

### Estrutura de Pastas

```bash
src/
├── factory/   # Classes que geram dados dinâmicos usando @faker-js/faker
│   └── user.factory.ts
├── fixture/   # Classe que abstrai a criação de pages do Playwright
│   └── fixture.page.ts
├── pages/     # Padrão Page Object Model (POM) para mapear componentes das páginas
│   └── home.page.ts
├── tests/     # Testes automatizados utilizando Playwright
│   └── home.spec.ts
```


- **src/**: Contém o código principal da aplicação.
- **factory/**: Contém classes que utilizam a biblioteca `@faker-js/faker` para gerar dados dinâmicos, como emails, nomes e senhas, que são usados nos testes.
- **fixture/**: Contém a classe que abstrai a criação de pages do Playwright, facilitando a reutilização de código e a manutenção dos testes.
- **pages/**: Implementa o padrão **Page Object Model (POM)**, onde cada classe mapeia os componentes de uma página específica da aplicação.
- **tests/**: Contém os testes automatizados escritos com Playwright. Cada arquivo de teste valida uma funcionalidade específica da aplicação.

## Pré-requisitos
Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Instale os navegadores necessários para o Playwright:
   ```bash
   npx playwright install
   ```

## Configuração
O projeto utiliza variáveis de ambiente para configurar URLs e outros parâmetros. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias, como no exemplo abaixo:

```env
#URLs
BASE_URL_DEV=https://other.domain.bugbank.netlify.app/#
BASE_URL_HOM=https://bugbank.netlify.app/#
BASE_URL_PROD=https://another.domain.bugbank.netlify.app/#

#TITLES
EXPECTED_HOME_TITLE="O banco com bugs e falhas do seu jeito"
```

## Executando os Testes

### Testes em Modo Headless (sem interface gráfica)
Para rodar os testes em modo headless (sem abrir o navegador), execute o seguinte comando:

```bash
npm run test:e2e
```

### Testes com Interface Gráfica
Se você quiser visualizar os testes sendo executados no navegador, utilize o seguinte comando:

```bash
npm run test:local
```

### Debugando os Testes
Para rodar os testes em modo de depuração, onde você pode pausar e inspecionar o que está acontecendo, utilize:

```bash
npm run test:debug
```

## Relatórios
Os relatórios de execução dos testes são gerados automaticamente em formato HTML. Para visualizar o relatório, execute:

```bash
npx playwright show-report
```
## Autor

Este projeto foi desenvolvido por [Rafael Berçam](https://github.com/rafaelbercam).

Sinta-se à vontade para entrar em contato ou contribuir com o projeto!

## Contribuição
Sinta-se à vontade para contribuir com este projeto. Para isso, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações e commit (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
