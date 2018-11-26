(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{151:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("These are some troubleshooting tips for more common issues people might run into while developing, including more information on what might be happening and how to fix the problem.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("Make sure you've followed the instructions for "),n("router-link",{attrs:{to:"./development.html"}},[e._v("Setup and development")]),e._v(". If you already have, try deleting the "),n("code",[e._v("node_modules")]),e._v(" folder and installing fresh:")],1),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._m(6)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"#errors-running-scripts-eg-yarn-dev"}},[this._v("Errors running scripts (e.g. "),t("code",[this._v("yarn dev")]),this._v(")")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"errors-running-scripts-e-g-yarn-dev"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errors-running-scripts-e-g-yarn-dev","aria-hidden":"true"}},[this._v("#")]),this._v(" Errors running Scripts (e.g. "),t("code",[this._v("yarn dev")]),this._v(")")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token comment"}},[e._v("# 1. Delete all previously-installed dependencies.")]),e._v("\n"),n("span",{attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf node_modules\n\n"),n("span",{attrs:{class:"token comment"}},[e._v("# 2. Install dependencies fresh.")]),e._v("\nyarn "),n("span",{attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If that doesn't work, it's possible that a newer version of a dependency is creating a problem. If this is the problem, you can work around it by installing dependencies from the "),t("code",[this._v("yarn.lock")]),this._v(" file of a previously working branch or commit.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token comment"}},[e._v("# 1. Delete all previously-installed dependencies.")]),e._v("\n"),n("span",{attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf node_modules\n\n"),n("span",{attrs:{class:"token comment"}},[e._v("# 2. Use the same yarn.lock as the `origin/master` branch. If the problem")]),e._v("\n"),n("span",{attrs:{class:"token comment"}},[e._v("# exists on the `origin/master` as well, instead use the last-known")]),e._v("\n"),n("span",{attrs:{class:"token comment"}},[e._v("# working branch or commit.")]),e._v("\n"),n("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout origin/master -- yarn.lock\n\n"),n("span",{attrs:{class:"token comment"}},[e._v("# 2. Install dependencies fresh, using only the exact versions specified")]),e._v("\n"),n("span",{attrs:{class:"token comment"}},[e._v("# in the `yarn.lock` file.")]),e._v("\nyarn "),n("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" --frozen-lockfile\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If this solves your problem, you can use "),t("code",[this._v("yarn outdated")]),this._v(" to see the packages that may have received updates, then upgrade them one at a time with "),t("code",[this._v("yarn upgrade the-package-name")]),this._v(" to see which upgrade introduces the problem.")])}],!1,null,null,null);a.options.__file="troubleshooting.md";t.default=a.exports}}]);