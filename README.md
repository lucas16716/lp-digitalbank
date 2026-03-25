<div align="center">

# Digitalbank

**Landing Page desenvolvida a partir do desafio do Frontend Mentor**

*Prática de arquitetura Sass, design tokens e layout responsivo com AXIS*

[![Status](https://img.shields.io/badge/status-concluído-e8e4de?style=flat-square&labelColor=10b981&color=1c1b2e)](https://lucas16716.github.io/lp-digitalbank/)&nbsp;
[![Feito com AXIS](https://img.shields.io/badge/desenvolvido%20com-AXIS-e8e4de?style=flat-square&labelColor=3437e6&color=1c1b2e)](https://github.com/lucas16716/axis)&nbsp;
[![Finalidade Estudo](https://img.shields.io/badge/finalidade-estudo-e8e4de?style=flat-square&labelColor=orange&color=1c1b2e)]()&nbsp;
[![Licença](https://img.shields.io/badge/licença-MIT-e8e4de?style=flat-square&labelColor=ef4444&color=1c1b2e)](./LICENSE)

</div>

<p align="center">
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#o-que-pratiquei">O que pratiquei</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#estrutura">Estrutura</a>
</p>

<h2 id="projeto">PROJETO</h2>

Solução para o desafio [Digitalbank Landing Page](https://www.frontendmentor.io/challenges/digital-bank-landing-page-WaUhkoDN) do Frontend Mentor, desenvolvida como exercício prático de arquitetura Sass.

O objetivo não foi apenas replicar o layout — foi aplicar o [AXIS](https://github.com/lucas16716/axis), minha própria arquitetura Sass, em um projeto real, consolidando a disciplina de tokens de design, sistema de componentes e responsividade fluida, além de aplicar práticas imprecindíveis de acessibilidade.

🌐 [Acesse o projeto](https://lucas16716.github.io/lp-digitalbank/)

<h2 id="o-que-pratiquei">O QUE PRATIQUEI</h2>

- 🏗️ **Arquitetura AXIS:** aplicação das cinco camadas (abstracts, base, layout, components, sections) em um projeto do zero.
- 🎨 **Design tokens semânticos:** cores, tipografia, espaçamento e interações definidos por partial.
- 📐 **Design Fluido:** uso inteligente de `clamp()` e Flexbox/Grid para reduzir a dependência excessiva de media queries.
- 📱 **Responsividade:** `@include respond()` para controle cirúrgico de breakpoints e sobreposição de elementos complexos.
- ♿ **Acessibilidade Avançada:** `aria-labelledby`, navegação por teclado (`:focus-visible` ring), links expansíveis via CSS sem quebrar o fluxo do leitor de tela, e alertas semânticos para `target="_blank"`.
- 🔍 **SEO e social:** Open Graph, Twitter Card e URL canônica configurados.
- ⚡ **Otimização de produção:** UnCSS Online + CSS minificado via Live Sass Compiler (~80% de redução).

<h2 id="tecnologias">TECNOLOGIAS</h2>

| Tecnologia | Uso |
|---|---|
| HTML5 | Código semântico e acessível |
| Sass (SCSS) | Arquitetura modular AXIS |
| CSS | Compilado e minificado via Live Sass Compiler |

<h2 id="estrutura">ESTRUTURA</h2>

```
lp-digitalbank/
├── assets/
│   ├── favicon/             → favicon.png e apple-touch-icon.png
│   ├── fonts/               → ClashDisplay-Variable.ttf
│   ├── media/img/           → Mockups do hero e imagens dos articles
│   └── svg/                 → Logo e ícones
├── dist/
│   └── main.min.css         → CSS minificado e purgado (produção)
├── src/
│   ├── css/
│   │   └── main.css         → CSS compilado (desenvolvimento)
│   └── sass/
│       ├── abstracts/       → Tokens, funções e mixins (AXIS)
│       ├── base/            → Reset, tipografia, global e utilitários (AXIS)
│       ├── layout/          → Container flex e grid (AXIS)
│       ├── components/      → Button, card (AXIS)
│       ├── sections/        → header, hero, about, articles, footer
│       └── main.scss        → Ponto de entrada único
└── index.html
```

<h2>LICENÇA</h2>

O código deste projeto está licenciado sob a licença MIT — veja o arquivo [LICENSE](./LICENSE).  
O design original pertence ao [Frontend Mentor](https://www.frontendmentor.io) e está sujeito aos [termos de uso](https://www.frontendmentor.io/terms) da plataforma.

<h2>AUTOR</h2>

Desenvolvido por [Lucas Couto](https://linkedin.com/in/lucas-coutoti).  
Veja meu trabalho em [Lucas Code](https://bio.site/lucascode).
