import{s as _,n as r}from"../chunks/scheduler.e108d1fd.js";import{S as y,i as H,g as m,s as g,h as p,z as h,c as v,k as M,a as n,f as l}from"../chunks/index.7e6a41e6.js";function b(x){let e,u=`<title>Comic</title> <script src="/dist/bundle.js"><\/script> <style>body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
        }

        .comic-container {
            display: grid;
            grid-template-rows: auto auto auto;
            gap: 10px;
            text-align: center;
        }

        .comic-image {
            max-width: 100%;
            height: auto;
        }

        nav {
            height: 100%;
        }</style>`,c,a,f='<button class="button" onclick="location.href=&#39;/&#39;">Main Page</button>',o,i,d='<img class="comic-image" src="/images/Spinner-1s-200px.gif" alt=""/> <h1 class="comic-title"></h1> <p class="comic-date"></p> <p class="comic-ago"></p>';return{c(){e=m("head"),e.innerHTML=u,c=g(),a=m("nav"),a.innerHTML=f,o=g(),i=m("div"),i.innerHTML=d,this.h()},l(t){e=p(t,"HEAD",{"data-svelte-h":!0}),h(e)!=="svelte-ln3cfh"&&(e.innerHTML=u),c=v(t),a=p(t,"NAV",{"data-svelte-h":!0}),h(a)!=="svelte-19yucru"&&(a.innerHTML=f),o=v(t),i=p(t,"DIV",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1akb1n8"&&(i.innerHTML=d),this.h()},h(){M(i,"class","comic-container")},m(t,s){n(t,e,s),n(t,c,s),n(t,a,s),n(t,o,s),n(t,i,s)},p:r,i:r,o:r,d(t){t&&(l(e),l(c),l(a),l(o),l(i))}}}class C extends y{constructor(e){super(),H(this,e,null,b,_,{})}}export{C as component};
