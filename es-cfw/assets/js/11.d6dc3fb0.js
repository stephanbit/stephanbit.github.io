(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("The Client Framework uses "),r("router-link",{attrs:{to:"./tech.html#vue-router"}},[e._v("Vue Router")]),e._v(", which we initialize in "),r("code",[e._v("src/router/index.js")]),e._v(", with routes defined in "),r("code",[e._v("src/router/routes.js")]),e._v(". Inside the "),r("code",[e._v("src/router")]),e._v(" folder, there are also two sub-folders, both containing route-specific components: "),r("code",[e._v("layouts")]),e._v(" and "),r("code",[e._v("views")]),e._v(".")],1),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("Each view component will be used by at least one route in "),r("code",[e._v("src/router/routes.js")]),e._v(", to provide a template for the page. They can technically include some additional properties from Vue Router "),r("a",{attrs:{href:"https://router.vuejs.org/guide/advanced/navigation-guards.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("to control navigation"),r("OutboundLink")],1),e._v(", for example to "),r("a",{attrs:{href:"https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-before-navigation",target:"_blank",rel:"noopener noreferrer"}},[e._v("fetch data"),r("OutboundLink")],1),e._v(" before creating the component, but it is recommend adding these guards to "),r("code",[e._v("src/router/routes.js")]),e._v(" instead, as that behavior typically has much more to do with the route (and will sometimes be shared between routes) than it does the view component.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"routing-layouts-and-views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routing-layouts-and-views","aria-hidden":"true"}},[this._v("#")]),this._v(" Routing, Layouts and Views")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"#overview"}},[this._v("Overview")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#layouts"}},[this._v("Layouts")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#views"}},[this._v("Views")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"layouts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#layouts","aria-hidden":"true"}},[this._v("#")]),this._v(" Layouts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Every view component must use a layout component as its base and register it as "),t("code",[this._v("Layout")]),this._v(", as this convention helps us mock out layout components when testing views. Layouts usually aren't very complex, often containing only shared HTML like headers, footers, and navigation to surround the main content in the view.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#views","aria-hidden":"true"}},[this._v("#")]),this._v(" Views")])}],!1,null,null,null);a.options.__file="routing.md";t.default=a.exports}}]);