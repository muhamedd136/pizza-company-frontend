(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(74),r=a(13),c=a(20),l=a(55),o=a(76),s=a.n(o),i=a(5),m=a(44),u=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{qty:Number(e.qty)+Number(t.qty)}):e})):[].concat(Object(m.a)(e),[t])},d=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{qty:Number(e.qty)+1}):e})):[].concat(Object(m.a)(e),[t])},p=function(e,t){return 1===e.find((function(e){return e.id===t.id})).qty?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{qty:e.qty-1}):e}))},E="TOGGLE_SHOW_CART",f="ADD_ITEM",b="REMOVE_ITEM",v="DECREATE_ITEM_QTY",h="ADD_QTY",g="EMPTY_CART",O={showCart:!1,cartItems:[]},N={key:"root",storage:s.a,whitelist:["cart"]},y=Object(c.c)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(i.a)(Object(i.a)({},e),{},{showCart:!e.showCart});case f:return Object(i.a)(Object(i.a)({},e),{},{cartItems:u(e.cartItems,t.payload)});case b:return Object(i.a)(Object(i.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case v:return Object(i.a)(Object(i.a)({},e),{},{cartItems:p(e.cartItems,t.payload)});case h:return Object(i.a)(Object(i.a)({},e),{},{cartItems:d(e.cartItems,t.payload)});case g:return Object(i.a)(Object(i.a)({},e),{},{cartItems:[]});default:return e}}}),C=Object(l.a)(N,y),j=Object(c.d)(C,c.a.apply(void 0,[])),k=Object(l.b)(j),I=a(12),w=a.n(I),S=a(0),F=a.n(S),_=a(37),T=a(8),x=a(26),M=a(9),q=function(){return{type:E}},z=a(58),B=Object(z.a)([function(e){return e.cart}],(function(e){return e.cartItems})),D=Object(z.a)([B],(function(e){return e.reduce((function(e,t){return e+t.qty}),0)})),P=(Object(z.a)([B],(function(e){return e.reduce((function(e,t){return e+t.qty*t.price}),0)})),a(94),function(e){var t=e.item,a=t.image,n=t.price,r=t.name,c=t.qty;return F.a.createElement("div",{className:"CartItem"},F.a.createElement("img",{src:a,alt:"item"}),F.a.createElement("div",{className:"CardItem-detailsContainer"},F.a.createElement("span",{className:"CardItem-name"}," ",r),F.a.createElement("span",{className:"CardItem-price"},c," x $",n)))}),L=a(77),A=(a(95),Object(T.f)(Object(r.b)((function(e){return{cartItems:B(e)}}),(function(e){return{toggleShowCart:function(){return e(q())}}}))((function(e){var t=e.cartItems,a=e.toggleShowCart;return F.a.createElement("div",{className:"CartDropdown"},t.length?F.a.createElement("div",{className:"CartDropdown-items"},t.length?t.map((function(e,t){return F.a.createElement(P,{key:t,item:e})})):null):F.a.createElement("span",{className:"CartDropdown-emptyMessage"},"Your cart is empty"),F.a.createElement(L.a,{size:"lg",variant:"outline-primary",block:!0,onClick:function(){e.history.push("/checkout"),a()}},"GO TO CHECKOUT"))})))),H=(a(97),Object(r.b)(null,(function(e){return{addItemQty:function(t){return e(function(e){return{type:h,payload:e}}(t))},removeItem:function(t){return e(function(e){return{type:b,payload:e}}(t))},decreaseItemQty:function(t){return e(function(e){return{type:v,payload:e}}(t))}}}))((function(e){var t=e.item,a=e.removeItem,n=e.decreaseItemQty,r=e.addItemQty;return F.a.createElement("div",{className:"CheckoutItem"},F.a.createElement("div",{className:"CheckoutItem-imageContainer"},F.a.createElement("img",{src:t.image,alt:"item"})),F.a.createElement("span",{className:"CheckoutItem-name"},t.name),F.a.createElement("span",{className:"CheckoutItem-quantity"},F.a.createElement("div",{className:"CheckoutItem-arrow",onClick:function(){return n(t)}},"\u276e"),F.a.createElement("span",{className:"CheckoutItem-value"},t.qty),F.a.createElement("div",{className:"CheckoutItem-arrow",onClick:function(){return r(t)}},"\u276f")),F.a.createElement("span",{className:"CheckoutItem-price"},"$",t.price),F.a.createElement("div",{className:"CheckoutItem-remove",onClick:function(){return a(t)}},"\u2715"))}))),R=a(45),Q=a.n(R),K=a(63),$=a(136),Y=a(138),J=a(139),G=a(137),W=a(135),V=a(32),U="https://pizza-company-backend.herokuapp.com",X=a(29),Z=a.n(X),ee=function(e){return Z.a.post("".concat(U,"/api/register"),e)},te=function(e){return Z.a.post("".concat(U,"/api/login"),e)},ae=(a(116),Object(r.b)((function(e){return{showCart:e.cart.showCart}}))((function(e){var t=e.showCart,a=Object(S.useState)(!0),n=Object(M.a)(a,2),r=(n[0],n[1]),c=Object(S.useState)(!0),l=Object(M.a)(c,2),o=(l[0],l[1]),s=Object(S.useState)(!1),m=Object(M.a)(s,2),u=m[0],d=m[1],p=Object(S.useState)(!1),E=Object(M.a)(p,2),f=E[0],b=E[1],v=Object(S.useState)(!1),h=Object(M.a)(v,2),g=h[0],O=h[1],N=Object(S.useState)(!1),y=Object(M.a)(N,2),C=y[0],j=y[1],k=Object(S.useState)(!1),I=Object(M.a)(k,2),w=I[0],T=I[1],q=Object(S.useState)({email:"",password:""}),z=Object(M.a)(q,2),B=z[0],D=z[1],P=Object(S.useState)({full_name:"",email:"",password:""}),H=Object(M.a)(P,2),R=H[0],V=H[1],U=Object(S.useState)(!!localStorage.getItem("access_token")),X=Object(M.a)(U,2),Z=X[0],ae=(X[1],function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;D(Object(i.a)(Object(i.a)({},B),{},Object(x.a)({},a,n)))}),ne=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;V(Object(i.a)(Object(i.a)({},R),{},Object(x.a)({},a,n)))},re=function(){var e=Object(K.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==B.email.length||0!==B.password.length){e.next=5;break}return r(!0),e.abrupt("return");case 5:return r(!1),j(!0),e.next=9,te(B).then((function(e){localStorage.setItem("access_token",e.data.token)})).catch((function(e){return console.log(e)}));case 9:j(!1),b(!1),window.location.reload();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(K.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==R.full_name.length||0!==R.email.length||0!==R.password.length){e.next=5;break}return o(!0),e.abrupt("return");case 5:return o(!1),T(!0),e.next=9,ee(R).then((function(){O(!1),b(!0)})).catch((function(e){return console.log(e)}));case 9:T(!1),O(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=F.a.createElement("form",{className:"Form"},F.a.createElement("div",{className:"Form-group"},F.a.createElement("label",{className:"Form-label"},"Email"),F.a.createElement("input",{className:"Form-input",type:"email",placeholder:"Email",name:"email",value:B.email,onChange:ae})),F.a.createElement("div",{className:"Form-group"},F.a.createElement("label",{className:"Form-label"},"Password"),F.a.createElement("input",{className:"Form-input",type:"password",placeholder:"Password",name:"password",value:B.password,onChange:ae}))),oe=F.a.createElement("form",{className:"Form"},F.a.createElement("div",{className:"Form-group"},F.a.createElement("label",{className:"Form-label"},"Full name"),F.a.createElement("input",{className:"Form-input",type:"text",placeholder:"Full name",name:"full_name",value:R.full_name,onChange:ne})),F.a.createElement("div",{className:"Form-group"},F.a.createElement("label",{className:"Form-label"},"Email"),F.a.createElement("input",{className:"Form-input",type:"email",placeholder:"Email",name:"email",value:R.email,onChange:ne})),F.a.createElement("div",{className:"Form-group"},F.a.createElement("label",{className:"Form-label"},"Password"),F.a.createElement("input",{className:"Form-input",type:"password",placeholder:"Password",name:"password",value:R.password,onChange:ne})));return F.a.createElement("div",{className:"NavHeader"},F.a.createElement($.a,{show:f,onHide:function(){return b(!1)},className:"signout_modal",centered:!0},F.a.createElement($.a.Header,{closeButton:!0},F.a.createElement($.a.Title,null,"Sign in")),F.a.createElement($.a.Body,null,le,F.a.createElement("div",{className:"SignIn-helptext"},F.a.createElement("span",null,"Don't have an acount?"),F.a.createElement(L.a,{variant:"link",onClick:function(){b(!1),O(!0)}},"Sign up"))),F.a.createElement($.a.Footer,null,F.a.createElement("div",{className:"modal-buttons"},F.a.createElement(L.a,{className:"Modal-button-secondary",size:"md",variant:"outline-secondary",onClick:function(){b(!1)}},"Cancel"),F.a.createElement(L.a,{className:"Modal-button",size:"md",variant:"outline-primary",onClick:function(){re()}},C?F.a.createElement(W.a,{size:"sm",animation:"border"}):"Sign in")))),F.a.createElement($.a,{show:g,onHide:function(){return O(!1)},className:"signout_modal",centered:!0},F.a.createElement($.a.Header,{closeButton:!0},F.a.createElement($.a.Title,null,"Sign up")),F.a.createElement($.a.Body,null,oe,F.a.createElement("div",{className:"SignIn-helptext"},F.a.createElement("span",null,"Already have an acount?"),F.a.createElement(L.a,{variant:"link",onClick:function(){b(!0),O(!1)}},"Sign in"))),F.a.createElement($.a.Footer,null,F.a.createElement("div",{className:"modal-buttons"},F.a.createElement(L.a,{className:"Modal-button-secondary",size:"md",variant:"outline-secondary",onClick:function(){b(!1)}},"Cancel"),F.a.createElement(L.a,{className:"Modal-button",size:"md",variant:"outline-primary",onClick:function(){ce()}},w?F.a.createElement(W.a,{size:"sm",animation:"border"}):"Sign up")))),F.a.createElement($.a,{show:u,onHide:function(){return d(!1)},className:"signout_modal",centered:!0},F.a.createElement($.a.Header,{closeButton:!0},F.a.createElement($.a.Title,null,"Sign out")),F.a.createElement($.a.Body,null,"Are you sure you want to sign out?"),F.a.createElement($.a.Footer,null,F.a.createElement("div",{className:"modal-buttons"},F.a.createElement(L.a,{className:"Modal-button-secondary",size:"md",variant:"outline-secondary",onClick:function(){d(!1)}},"No"),F.a.createElement(L.a,{className:"Modal-button",size:"md",variant:"outline-primary",onClick:function(){d(!1),localStorage.removeItem("access_token"),e.history.push("/"),window.location.reload()}},"Yes")))),F.a.createElement(Y.a,{collapseOnSelect:!0,expand:"md"},F.a.createElement(Y.a.Toggle,null),F.a.createElement(Y.a.Collapse,{id:"responsive-navbar-nav"},F.a.createElement(J.a,{className:"navBase"},F.a.createElement(J.a.Link,{eventKey:"2",as:_.b,to:"/"},"Menu"),Z?F.a.createElement(J.a.Link,{eventKey:"3",as:_.b,to:"/orders"},"Orders"):null,F.a.createElement(G.a.Divider,null),Z?F.a.createElement(J.a.Link,{eventKey:"100",className:"sign_out-mobile",onClick:function(){d(!0),e.history.push("/")}},"Sign out"):F.a.createElement(J.a.Link,{eventKey:"100",className:"sign_out-mobile",onClick:function(){b(!0)}},"Sign in"))),F.a.createElement(J.a.Link,{className:"cart-link",eventKey:"4"},F.a.createElement(ie,null)),Z?F.a.createElement(J.a.Link,{className:"sign_out-desktop",eventKey:"101",onClick:function(){d(!0)}},"Sign out"):F.a.createElement(J.a.Link,{className:"sign_out-desktop",eventKey:"101",onClick:function(){b(!0)}},"Sign in")),t?F.a.createElement(A,null):null)}))),ne=(a(120),Object(r.b)(null,(function(e){return{addItem:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))((function(e){var t=e.name,a=e.price,n=e.image,r=e.ingredients,c=e.id,l=e.addItem,o=Object(S.useState)({id:c,name:t,price:a,image:n,ingredients:r,qty:1}),s=Object(M.a)(o,2),m=s[0],u=s[1];return F.a.createElement("div",{className:"MenuCard"},F.a.createElement("img",{className:"MenuCard-img",src:n,alt:"pizza"}),F.a.createElement("div",null,F.a.createElement("div",{className:"MenuCard-text"},t),F.a.createElement("div",{className:"MenuCard-price"}," $",a," "),F.a.createElement("div",{className:"MenuCard-ingredients"},r)),F.a.createElement("div",{className:"Qty-Btn"},F.a.createElement("div",{className:"MenuCard-qty"},F.a.createElement("label",null,"Quantity:"),F.a.createElement("input",{type:"number",name:"qty",min:1,max:99,value:Number(m.qty),onChange:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;u(Object(i.a)(Object(i.a)({},m),{},Object(x.a)({},a,Number(n))))}})),F.a.createElement(L.a,{size:"sm",block:!0,variant:"outline-primary",onClick:function(){l(m)}},"Add to cart")))})));function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var le=F.a.createElement("g",null,F.a.createElement("path",{d:"m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:"#FFFFFF"}),F.a.createElement("script",{xmlns:"",className:"active-path"})),oe=function(e){var t=e.svgRef,a=e.title,n=ce(e,["svgRef","title"]);return F.a.createElement("svg",re({height:"512px",viewBox:"-35 0 512 512.00102",width:"512px",className:"",ref:t},n),a?F.a.createElement("title",null,a):null,le)},se=F.a.forwardRef((function(e,t){return F.a.createElement(oe,re({svgRef:t},e))})),ie=(a.p,a(121),Object(r.b)((function(e){return{itemCount:D(e)}}),(function(e){return{toggleShowCart:function(){return e(q())}}}))((function(e){var t=e.toggleShowCart,a=e.itemCount;return F.a.createElement("div",{className:"CartIcon",onClick:t},F.a.createElement(se,{className:"CartIcon-shoppingIcon"}),F.a.createElement("span",{className:"CartIcon-itemCount"},a))}))),me=(a(122),function(e){var t=e.id,a=e.details,n=e.total,r=e.created,c=e.address,l=e.contact,o=JSON.parse(a),s=new Date(r);return F.a.createElement("div",{className:"OrderCard"},F.a.createElement("div",null,F.a.createElement("h4",null,"Order ",t),F.a.createElement("div",{className:"OrderCard-details"},o.details?o.details.map((function(e,a){return F.a.createElement("div",{className:"OrderCard-detail",key:t+a},F.a.createElement("span",null,F.a.createElement("strong",null,"Name: "),e.name," "),F.a.createElement("br",null),F.a.createElement("span",null,F.a.createElement("strong",null,"Quantity: ")," ",e.qty))})):null)),F.a.createElement("div",null,F.a.createElement("div",{className:"OrderCard-detail"},F.a.createElement("strong",null,"Address: "),c),F.a.createElement("div",{className:"OrderCard-detail"},F.a.createElement("strong",null,"Contact: "),l),F.a.createElement("div",{className:"OrderCard-detail"},F.a.createElement("strong",null,"Total price: "),"$",n," (\u20ac",.86*n,")"),F.a.createElement("div",{className:"OrderCard-detail"},F.a.createElement("strong",null,"Date: "),s.toLocaleString())))}),ue=function(e){return Z.a.get("".concat(U,"/api/getOrders/").concat(e))},de=function(e){return Z.a.post("".concat(U,"/api/createOrder"),e)},pe=(a(123),Object(r.b)((function(e){return{total:e.cart.cartItems.reduce((function(e,t){return e+t.qty*t.price}),0),cartItems:e.cart.cartItems}}),(function(e){return{emptyCart:function(){return e({type:g})}}}))((function(e){var t=e.total,a=e.cartItems,n=e.emptyCart,r=localStorage.getItem("access_token"),c=r?JSON.parse(atob(r.split(".")[1])):null,l={details:[]},o=Object(S.useState)({address:"",contact:""}),s=Object(M.a)(o,2),u=s[0],d=s[1],p=Object(S.useState)(!1),E=Object(M.a)(p,2),f=E[0],b=E[1],v={userId:null,details:"",created:"",total:0,address:"",contact:""},h=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;d(Object(i.a)(Object(i.a)({},u),{},Object(x.a)({},a,n)))};return F.a.createElement("div",{className:"Checkout"},F.a.createElement("div",{className:"Checkout-header"},F.a.createElement("div",{className:"Chekout-headerBlock"},F.a.createElement("span",null,"Image")),F.a.createElement("div",{className:"Chekout-headerBlock"},F.a.createElement("span",null,"Name")),F.a.createElement("div",{className:"Chekout-headerBlock"},F.a.createElement("span",null,"Quantity")),F.a.createElement("div",{className:"Chekout-headerBlock"},F.a.createElement("span",null,"Price")),F.a.createElement("div",{className:"Chekout-headerBlock"},F.a.createElement("span",null,"Remove"))),F.a.createElement("div",{style:{width:"100%",overflowY:"scroll"}},a?a.map((function(e){return F.a.createElement(H,{key:e.id,item:e})})):null),F.a.createElement("div",{className:"Checkout-footer"},F.a.createElement("div",{className:"Checkout-userInfo"},F.a.createElement("div",{className:"CheckoutForm-group"},F.a.createElement("label",{className:"CheckoutForm-label"},"Address"),F.a.createElement("input",{className:"CheckoutForm-input",type:"text",placeholder:"Address",name:"address",value:u.address,onChange:h})),F.a.createElement("div",{className:"CheckoutForm-group"},F.a.createElement("label",{className:"CheckoutForm-label"},"Contact number"),F.a.createElement("input",{className:"CheckoutForm-input",type:"text",placeholder:"Contact number",name:"contact",value:u.contact,onChange:h}))),F.a.createElement("div",{className:"Checkout-total"},F.a.createElement("span",null,"DELIVERY: $5 (\u20ac",4.3,")"),F.a.createElement("span",{className:"Checkout-span"},"BILL: $",t," (\u20ac",.86*t,")"),F.a.createElement("span",null,"TOTAL: $",t+5," (\u20ac",.86*(t+5),")"))),F.a.createElement(L.a,{onClick:function(){if(!(a.length&&u.address.length&&u.contact.length))return e=a.length?"Enter contact details.":"No items in cart.",void V.b.error(e,{position:V.b.POSITION.TOP_RIGHT,autoClose:3550,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0});var e;b(!0),a.forEach((function(e){l.details=[].concat(Object(m.a)(l.details),[{name:e.name,qty:e.qty}]),v=Object(i.a)(Object(i.a)({},v),{},{userId:r?c.sub:null,created:(new Date).toLocaleString(),total:t})})),v=Object(i.a)(Object(i.a)({},v),{},{details:JSON.stringify(l),address:u.address,contact:u.contact}),de(v).then((function(){var e;console.log("success"),n(),d({address:"",contact:""}),e="Order successfuly placed.",V.b.success(e,{position:V.b.POSITION.TOP_RIGHT,autoClose:3550,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0})})).catch((function(e){return console.log(e)})),b(!1)},variant:"outline-primary",size:"lg"},f?F.a.createElement(W.a,{size:"sm",animation:"border"}):"Complete order"))}))),Ee=(a(124),function(){var e=localStorage.getItem("access_token"),t=e?JSON.parse(atob(e.split(".")[1])):null,a=Object(S.useState)(),n=Object(M.a)(a,2),r=n[0],c=n[1];return Object(S.useEffect)((function(){var a;e&&(a=t.sub,ue(a).then((function(e){return c(e.data.orders)})).catch((function(e){return console.log(e)})))}),[]),F.a.createElement("div",{className:"Orders"},F.a.createElement("h1",null,"Orders"),r?F.a.createElement("div",{className:"Orders-list"},r?r.map((function(e,t){return F.a.createElement(me,{key:t,id:e.id,details:e.details,created:e.created,total:e.total,address:e.address,contact:e.contact})})):"No orders."):F.a.createElement(W.a,{animation:"border"}))}),fe=function(){return Z.a.get("".concat(U,"/api/menu"))},be=(a(125),function(){var e=Object(S.useState)(),t=Object(M.a)(e,2),a=t[0],n=t[1];return Object(S.useEffect)((function(){fe().then((function(e){return n(e.data.menu)})).catch((function(e){return console.log(e)}))}),[]),F.a.createElement("div",{className:"Menu"},F.a.createElement("h1",null,"Menu"),a?F.a.createElement("div",{className:"Menu-list"},a?a.map((function(e,t){return F.a.createElement(ne,{key:t,id:e.id,image:e.image,name:e.name,ingredients:e.ingredients,price:e.price})})):"No items in menu."):F.a.createElement(W.a,{size:"lg",animation:"border"}))});a(126),a(127);var ve=function(){return F.a.createElement("div",{className:"App"},F.a.createElement(_.a,null,F.a.createElement(T.a,{component:ae}),F.a.createElement(V.a,null),F.a.createElement(T.c,null,F.a.createElement(T.a,{exact:!0,path:"/orders",component:Ee}),F.a.createElement(T.a,{exact:!0,path:"/checkout",component:pe}),F.a.createElement(T.a,{path:"/",component:be}))))};a(128);w.a.render(F.a.createElement(r.a,{store:j},F.a.createElement(F.a.StrictMode,null,F.a.createElement(n.a,{persistor:k},F.a.createElement(ve,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a(129)},94:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.2a783a75.chunk.js.map