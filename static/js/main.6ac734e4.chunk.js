(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),i=n.n(a),s=(n(14),n(0));var o=function(){return Object(s.jsx)("nav",{className:"green darken-1",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"#!",className:"brand-logo",children:"Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"sass.html",children:"React Shop"})})})]})})};var d=function(){var e=(new Date).getFullYear();return Object(s.jsxs)("footer",{className:"page-footer green lighten-4",children:[Object(s.jsx)("div",{className:"container"}),Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",e," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})]})},l=n(8),j=n(9),u=n(2);function O(e,t){var n=t.type,c=t.payload;switch(n){case"SET_GOODS":return Object(u.a)(Object(u.a)({},e),{},{goods:c||[],loading:!1});case"ADD_ORDER_TO_BASKET":var r=e.order,a=e.goods,i=c.id,s=a.find((function(e){return e.id===i}));return Object(u.a)(Object(u.a)({},e),{},{order:[].concat(Object(j.a)(r),[s])});case"REMOVE_ORDER_FROM_BASKET":var o=e.order,d=c.id;return Object(u.a)(Object(u.a)({},e),{},{order:o.filter((function(e){return e.id!==d}))});case"INCRISE_QUANTITY_TO_ORDER":var l=e.order,O=c.id,b=l.map((function(e){var t=(e.quantity||0)+1;return e.id===O?Object(u.a)(Object(u.a)({},e),{},{quantity:t}):e}));return Object(u.a)(Object(u.a)({},e),{},{order:b});case"DECREASE_QUANTITY_TO_ORDER":var h=e.order,m=c.id,f=h.map((function(e){var t=e.quantity||0;return t=t>1?t-1:1,e.id===m?Object(u.a)(Object(u.a)({},e),{},{quantity:t}):e}));return Object(u.a)(Object(u.a)({},e),{},{order:f});case"SET_BASKET_SHOW":return Object(u.a)(Object(u.a)({},e),{},{isBasketShow:c.isBasketShow||!1});case"SET_ALERT_NAME":return Object(u.a)(Object(u.a)({},e),{},{alertName:c.name});default:return e}}var b=Object(c.createContext)(),h={goods:[],loading:!0,order:[],isBasketShow:!1,alertName:""},m=function(e){var t=e.children,n=Object(c.useReducer)(O,h),r=Object(l.a)(n,2),a=r[0],i=r[1];return a.setGoods=function(e){i({type:"SET_GOODS",payload:e})},a.addOrderToBasket=function(e){i({type:"ADD_ORDER_TO_BASKET",payload:{id:e}})},a.removeOrderFromBasket=function(e){i({type:"REMOVE_ORDER_FROM_BASKET",payload:{id:e}})},a.incriseQuantityToOrder=function(e){i({type:"INCRISE_QUANTITY_TO_ORDER",payload:{id:e}})},a.decreaseQuantityToOrder=function(e){i({type:"DECREASE_QUANTITY_TO_ORDER",payload:{id:e}})},a.setBasketShow=function(e){i({type:"SET_BASKET_SHOW",payload:{isBasketShow:e}})},a.setAlertName=function(e){i({type:"SET_ALERT_NAME",payload:{name:e}})},Object(s.jsx)(b.Provider,{value:a,children:t})},f=n(7),x=function e(){var t=this;Object(f.a)(this,e),this.getDataTransfom=function(e){return e.map((function(e){return{id:e.id,name:e.name,description:e.description,price:e.price,fullBackground:e.full_background}}))},this.getData=function(){return fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"0735de07-3afaed97-0f67483a-2f86590b"}}).then((function(e){return e.json()})).then((function(e){var n=e.featured;return t.getDataTransfom(n)}))}};var v=function(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})};var p=function(e){var t=Object(c.useContext)(b),n=t.goods,r=t.order,a=t.addOrderToBasket,i=t.incriseQuantityToOrder,o=t.setAlertName,d=e.id,l=e.name,j=e.description,u=e.price,O=e.fullBackground;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:O,alt:l})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:l}),Object(s.jsx)("p",{children:j})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){!function(e){var t=function(t){return t.id===e},c=n.find(t).name;r.findIndex(t)>-1||a(e),i(e),o(c)}(d)},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[u," \u0440\u0443\u0431."]})]})]})};var N=function(){var e=Object(c.useContext)(b).goods;return e.length?Object(s.jsx)("div",{className:"goods",children:e.map((function(e){var t=e.id;return Object(s.jsx)(p,Object(u.a)({},e),t)}))}):Object(s.jsx)("h3",{children:"Nothing here"})};var g=function(){var e=Object(c.useContext)(b),t=e.order,n=e.setBasketShow,r=e.isBasketShow,a=t.length;return Object(s.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:function(){n(!r)},children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),a?Object(s.jsx)("span",{className:"cart-quantity",children:a}):null]})};var T=function(e){var t=e.id,n=e.children,r=Object(c.useContext)(b).decreaseQuantityToOrder;return Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return r(t)},children:n})};var E=function(e){var t=e.id,n=e.children,r=Object(c.useContext)(b).incriseQuantityToOrder;return Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return r(t)},children:n})};var y=function(e){var t=e.id,n=e.children,r=Object(c.useContext)(b).removeOrderFromBasket;return Object(s.jsx)("i",{className:"material-icons basket-delete",onClick:function(){return r(t)},children:n})};function _(e){var t=e.id,n=e.name,c=e.price,r=e.quantity,a=c*r;return Object(s.jsxs)("li",{className:"collection-item",children:[n,"\xa0",Object(s.jsx)(T,{id:t,children:"remove"}),"\xa0",r,"\xa0",Object(s.jsx)(E,{id:t,children:"add"}),"= ".concat(a," \u0440\u0443\u0431."),Object(s.jsx)("span",{className:"secondary-content",children:Object(s.jsx)(y,{id:t,children:"close"})})]})}var S=function(){var e=Object(c.useContext)(b),t=e.order,n=e.setBasketShow,r=e.isBasketShow,a=t.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),t.length?t.map((function(e){return Object(s.jsx)(_,Object(u.a)({},e),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",a," \u0440\u0443\u0431."]}),Object(s.jsx)("li",{className:"collection-item",children:Object(s.jsx)("button",{className:"btn btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:function(){n(!r)},children:"close"})]})};var k=function(){var e=Object(c.useContext)(b),t=e.setAlertName,n=e.alertName;function r(){t("")}return Object(c.useEffect)((function(){var e=setTimeout(r,3e3);return function(){clearTimeout(e)}}),[n]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[n," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})};var R=function(){var e=new x,t=Object(c.useContext)(b),n=t.loading,r=t.setGoods,a=t.isBasketShow,i=t.alertName;return Object(c.useEffect)((function(){e.getData().then((function(e){return r(e)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(g,{}),n?Object(s.jsx)(v,{}):Object(s.jsx)(N,{}),a&&Object(s.jsx)(S,{}),i&&Object(s.jsx)(k,{})]})};var B=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(m,{children:Object(s.jsx)(R,{})}),Object(s.jsx)(d,{})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6ac734e4.chunk.js.map