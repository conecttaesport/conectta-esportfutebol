# Conectta Esport · Futebol Society

App web (PWA) para gerenciar rachas de futebol society: cadastro de jogadores, sorteio de times, placar com cronômetro (7 min / 2 gols), pausa com registro, classificação com rebaixamento, Rei da Quadra (Donos da Quadra), punições e compartilhamento.

## Como rodar
É um site estático. Basta abrir `index.html` em um navegador, ou publicar numa hospedagem (ex: GitHub Pages).

## Publicar no GitHub Pages
1. Suba esta pasta `futebol-society/` dentro do repositório `conectta-esport`.
2. Em **Settings → Pages**, selecione a branch `main`.
3. Link final: `https://SEU-USUARIO.github.io/conectta-esport/futebol-society/`

## Adicionar à tela inicial
- **iPhone (Safari):** Compartilhar → Adicionar à Tela de Início.
- **Android (Chrome):** menu ⋮ → Instalar app / Adicionar à tela inicial.

## Arquivos
- `index.html` — app completo
- `manifest.webmanifest` — configuração do PWA
- `sw.js` — service worker (funciona offline)
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — ícones do app
- `logo.png` — logo do topo
- `sp1.png`, `sp2.png` — patrocinadores (Auto Vidros, Conectta)

## Dados
Os dados ficam salvos no próprio aparelho (localStorage). Cada pessoa tem o seu.
