# Ficha Forte

Aplicativo web (PWA) para controlar **treinos de academia e CrossFit**, **dieta e macros**, **hidratação**, **periodização**, **recordes** e **desafios** (100 flexões e 50 elevações). Funciona no navegador do celular ou do computador, pode ser instalado na tela inicial e continua funcionando offline depois da primeira visita.

## Funcionalidades

| Aba | O que faz |
|---|---|
| **Hoje** | Treinos do dia, macros consumidos, água, desafios ativos e calendário semanal/mensal com planejamento de treino e cardápio por dia |
| **Treinar** | Execução do treino: carga, repetições e RIR por série, cronômetro de descanso, sugestão de progressão de carga, histórico, volume semanal e recordes recentes |
| **Montar treino** | Criação e edição de fichas, rotação automática (ex.: Push/Pull/Legs), séries por grupo muscular e biblioteca com 70 exercícios ilustrados e animados |
| **Agenda** | Visualização diária, semanal e mensal; semana padrão; tipo de dia (A/B/C) |
| **Dieta & macros** | TMB (Mifflin-St Jeor, Harris-Benedict, Katch-McArdle, Cunningham), gasto por METs, ciclo de carboidratos, cardápios com opções, substituições e suplementos |
| **Hidratação** | Meta personalizada (peso, treino e clima) com animação da garrafa (com sede, cheia, transbordando) |
| **RPs** | Recordes de levantamentos, WODs de referência e corrida; 1RM estimado dos treinos; calculadora de % de 1RM |
| **Periodização** | Recomposição 12 semanas, linear por blocos e ondulatória; questionário para escolher o modelo |
| **Desafios** | 100 Flexões e 50 Elevações: teste inicial, níveis, 6 semanas, testes de exaustão, agenda automática |
| **Progresso** | Peso com mascote motivacional (sutil ou agressivo), cintura, FC de repouso, sono e ajuste calórico recomendado |
| **Perfil & parceiros** | Dados pessoais, METs, modelos de profissionais por código e backup |
| **Configurações & ajuda** | Tema, cor, fonte, tamanho do texto, animações e guia de uso |

## Como rodar no computador

O app é estático (HTML, CSS e JavaScript, sem build). Basta servir a pasta:

```bash
# Python
python3 -m http.server 8000
# ou Node
npx serve .
```

Abra `http://localhost:8000`. (Abrir o `index.html` direto pelo arquivo também funciona, mas sem modo offline.)

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `ficha-forte`).
2. Envie os arquivos desta pasta:
   ```bash
   git init
   git add .
   git commit -m "Ficha Forte: primeira versão"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/ficha-forte.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. Em 1–2 minutos o app fica em `https://SEU-USUARIO.github.io/ficha-forte/`.
5. No celular, abra o link e use **Adicionar à tela inicial** para instalar.

## Estrutura

```
index.html            página, estilos e estrutura
app.js                lógica do app (telas, cálculos, armazenamento)
data.js               biblioteca de exercícios, fichas, cardápios, periodizações, frases dos mascotes
exart.js              ilustrações animadas dos exercícios (SVG gerado por código)
sw.js                 service worker (modo offline)
manifest.webmanifest  instalação como app (PWA)
icons/                ícones do app
*.webp                garrafas da hidratação, prato de macros e mascotes
```

## Dados

Nesta versão os dados ficam no **navegador** (`localStorage`) de cada pessoa. Para trocar de aparelho, use **Perfil & parceiros → Exportar meus dados** e depois **Importar backup**.

A troca de modelos por código (profissional → aluno) e o login com Google precisam de um servidor. Próximo passo sugerido: **Firebase** (Authentication com Google + Firestore). A camada de armazenamento está isolada no objeto `Store` em `app.js`, o que facilita a troca.

## Referências usadas

- Plano de Recomposição Corporal (12 semanas) — base das fichas Push/Pull/Legs, cardápios A/B/C e periodização.
- Enciclopédia do Treinamento e Nutrição Esportiva — tabela de % de 1RM, volume por nível, faixas de macronutrientes e periodização ondulatória.
- Ainsworth et al. (2011), *Compendium of Physical Activities* — valores de MET.
- Desafios inspirados em [100flexoes.net](https://www.100flexoes.net/) e [50elevacoes.net](https://www.50elevacoes.net/) (o cronograma do app é gerado a partir do teste do usuário).

## Aviso

Os valores do app são estimativas. Avaliação de composição corporal e acompanhamento de nutricionista e profissional de educação física permitem refinar os números. Em caso de dor, lesão ou condição de saúde, procure atendimento.
