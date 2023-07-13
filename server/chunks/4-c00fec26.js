const prerender = false;
const ssr = true;
const csr = true;
const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  const email = "d.prostiruk@innopolis.university";
  async function getID(email2) {
    const url = `https://fwd.innopolis.app/api/hw2?${new URLSearchParams({
      email: email2
    })}`;
    const response = await fetch(url);
    return await response.json();
  }
  async function fetchInfo(id2) {
    const url = `https://fwd.innopolis.university/api/comic?${new URLSearchParams(
      { id: id2 }
    )}`;
    const response = await fetch(url);
    return await response.json();
  }
  const id = await getID(email);
  const comic = await fetchInfo(id);
  return { comic };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  load: load,
  prerender: prerender,
  ssr: ssr
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ca222b84.js')).default;
const universal_id = "src/routes/comic/+page.ts";
const imports = ["_app/immutable/nodes/4.a54a60d2.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.faba9f8e.js"];
const stylesheets = ["_app/immutable/assets/4.f986ce51.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-c00fec26.js.map
