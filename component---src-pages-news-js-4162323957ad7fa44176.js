(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{FJi0:function(e,t,a){"use strict";a.r(t),a.d(t,"articleQuery",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=a("vcKG"),c=a("lCdV"),i=a("S3iu"),m="2409299637";t.default=function(e){var t=e.data.pages.edges;return r.a.createElement(l.a,{className:"page-news"},r.a.createElement(i.a,{title:"博客"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"layout-basic"},r.a.createElement("div",{className:"title-news page-title"},r.a.createElement("h1",null,"博客")),r.a.createElement("div",{className:"news-list"},r.a.createElement(c.b,{items:t})))))}},lCdV:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return f})),a.d(t,"c",(function(){return y}));var n=a("9eSz"),r=a.n(n),l=a("q1tI"),c=a.n(l),i=a("yDJ3"),m=a.n(i),d=a("Wbzz"),o=function(e){var t=e.item;return c.a.createElement("article",{key:"article-"+m()(t,"node.id")},c.a.createElement(r.a,{fluid:m()(t,"node.frontmatter.image.childImageSharp.fluid"),alt:""}),c.a.createElement("div",{className:"item-content"},c.a.createElement("h1",{key:"h1-"+m()(t,"node.id")},m()(t,"node.frontmatter.title")),c.a.createElement("p",{className:"date"},y(m()(t,"node.frontmatter.date"))),c.a.createElement("p",{className:"desc",key:"desc-"+m()(t,"node.id")},m()(t,"node.frontmatter.description")),c.a.createElement("p",{className:"link",key:"link-"+m()(t,"node.id")},"Read more")))},s=function(e){return e.items.map((function(e){return m()(e,"node.frontmatter.external")?c.a.createElement("a",{className:"item",key:"item-"+m()(e,"node.id"),target:"_blank",rel:"noopener noreferrer",href:m()(e,"node.frontmatter.path")},c.a.createElement("div",null,c.a.createElement(o,{item:e}))):c.a.createElement(d.Link,{className:"item",key:"item-"+m()(e,"node.id"),to:"/news"+m()(e,"node.frontmatter.path")},c.a.createElement("div",null,c.a.createElement(o,{item:e})))}))};s.defaultProps={items:[]};var u=s,f=function(){return c.a.createElement(d.StaticQuery,{query:"3997582993",render:function(e){return c.a.createElement(u,{items:e.allMarkdownRemark.edges})}})},y=(a("EnZy"),function(e){var t=e.split("-"),a=new Date(t[2],t[0]-1,t[1]);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()]+", "+["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+" "+a.getDate()+", "+a.getFullYear()})}}]);
//# sourceMappingURL=component---src-pages-news-js-4162323957ad7fa44176.js.map