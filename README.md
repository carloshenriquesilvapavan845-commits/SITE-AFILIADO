# RR14 Marketplace

Base arquitetural do marketplace de motopeças, desenvolvido em etapas.

## Estrutura inicial

- `src/app`: rotas, layouts e APIs do Next.js (App Router)
- `src/components`: componentes reutilizáveis, separados por domínio
- `src/features`: regras e interfaces específicas de cada área do produto
- `src/lib`: integrações, utilitários e configurações compartilhadas
- `src/server`: serviços, repositórios e regras executadas no servidor
- `src/types`: tipos globais do TypeScript
- `prisma`: schema, migrations e dados iniciais do banco
- `public`: arquivos estáticos, incluindo a futura logo
- `tests`: testes unitários, de integração e de interface
- `docs`: decisões de arquitetura e documentação do projeto

As dependências e os arquivos de configuração serão adicionados nas próximas etapas.
