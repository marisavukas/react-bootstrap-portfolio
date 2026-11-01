# marisavukas.com

My personal portfolio site, live at **[marisavukas.com](https://marisavukas.com)**.

I'm Marisa Vukas, a full-stack software engineer in Chicago. By day I build reporting and portfolio management tools with ASP.NET Core and Angular at Winthrop Capital Management. This site is where I share my background, resume and side projects.

## Built with

- [React 18](https://react.dev/) (Create React App)
- [React Router 6](https://reactrouter.com/) for client-side routing
- [styled-components](https://styled-components.com/) for component styles
- [react-grid-system](https://github.com/sealninja/react-grid-system) for layout
- [Terminal.css](https://terminalcss.xyz/) for the retro terminal look
- [react-icons](https://react-icons.github.io/react-icons/)

The site started out on Bootstrap. I later swapped it for a lighter combination of react-grid-system and Terminal.css.

## Project structure

```
public/            static assets (resume PDF, profile photo, social preview image)
src/
  App.js           routes: / , /about-me , /projects
  Layout.js        shared page shell (nav + footer)
  components/      AboutMe, Projects, NavigationBar, Footer, WebPage (home)
```

## Running locally

```bash
npm install
npm run dev        # dev server at http://localhost:3000
```

## Building

```bash
npm run build      # production build in /build
npm start          # serves /build with `serve`
```

## Contact

- [LinkedIn](https://www.linkedin.com/in/marisa-vukas/)
- [marisavukas@gmail.com](mailto:marisavukas@gmail.com)
