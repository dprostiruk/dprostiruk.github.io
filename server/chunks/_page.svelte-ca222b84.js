import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './ssr-bcb86966.js';

const css = {
  code: ".comic-container.svelte-12rlm9{display:grid;grid-template-rows:auto auto auto;gap:10px;text-align:center}.comic-image.svelte-12rlm9{max-width:100%;height:auto}",
  map: null
};
const Comic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comic } = $$props;
  if ($$props.comic === void 0 && $$bindings.comic && comic !== void 0)
    $$bindings.comic(comic);
  $$result.css.add(css);
  return `<div class="comic-container svelte-12rlm9"><img class="comic-image svelte-12rlm9"${add_attribute("src", comic.img, 0)}${add_attribute("alt", comic.alt, 0)}> <h1 class="comic-title">${escape(comic.safe_title)}</h1> <p class="comic-date">${escape(comic.day)}, ${escape(comic.year)}</p> <p class="comic-ago"></p> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const comic = data.comic;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1p0s09v_START -->${$$result.title = `<title>Comic</title>`, ""}<meta name="description" content="Funny comic"><style data-svelte-h="svelte-jgdgh9">body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
        }

        nav {
            height: 100%;
        }</style><!-- HEAD_svelte-1p0s09v_END -->`, ""} <nav data-svelte-h="svelte-19yucru"><button class="button" onclick="location.href='/'">Main Page</button></nav> <div>${validate_component(Comic, "Comic").$$render($$result, { comic }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ca222b84.js.map
