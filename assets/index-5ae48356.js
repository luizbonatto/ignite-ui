import{r as a,R as W,a as Ye,$ as Pt,b as Ot}from"./index-6bd1afc7.js";function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},k.apply(this,arguments)}function $e(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function Ue(e,t=[]){let n=[];function o(i,s){const c=a.createContext(s),l=n.length;n=[...n,s];function d(u){const{scope:m,children:f,...h}=u,v=(m==null?void 0:m[e][l])||c,w=a.useMemo(()=>h,Object.values(h));return a.createElement(v.Provider,{value:w},f)}function p(u,m){const f=(m==null?void 0:m[e][l])||c,h=a.useContext(f);if(h)return h;if(s!==void 0)return s;throw new Error(`\`${u}\` must be used within \`${i}\``)}return d.displayName=i+"Provider",[d,p]}const r=()=>{const i=n.map(s=>a.createContext(s));return function(c){const l=(c==null?void 0:c[e])||i;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:l}}),[c,l])}};return r.scopeName=e,[o,At(r,...t)]}function At(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(i){const s=o.reduce((c,{useScope:l,scopeName:d})=>{const u=l(i)[`__scope${d}`];return{...c,...u}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Rt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function qe(...e){return t=>e.forEach(n=>Rt(n,t))}function Q(...e){return a.useCallback(qe(...e),e)}const de=a.forwardRef((e,t)=>{const{children:n,...o}=e,r=a.Children.toArray(n),i=r.find(Dt);if(i){const s=i.props.children,c=r.map(l=>l===i?a.Children.count(s)>1?a.Children.only(null):a.isValidElement(s)?s.props.children:null:l);return a.createElement(Ee,k({},o,{ref:t}),a.isValidElement(s)?a.cloneElement(s,void 0,c):null)}return a.createElement(Ee,k({},o,{ref:t}),n)});de.displayName="Slot";const Ee=a.forwardRef((e,t)=>{const{children:n,...o}=e;return a.isValidElement(n)?a.cloneElement(n,{...Tt(o,n.props),ref:t?qe(t,n.ref):n.ref}):a.Children.count(n)>1?a.Children.only(null):null});Ee.displayName="SlotClone";const St=({children:e})=>a.createElement(a.Fragment,null,e);function Dt(e){return a.isValidElement(e)&&e.type===St}function Tt(e,t){const n={...t};for(const o in t){const r=e[o],i=t[o];/^on[A-Z]/.test(o)?r&&i?n[o]=(...c)=>{i(...c),r(...c)}:r&&(n[o]=r):o==="style"?n[o]={...r,...i}:o==="className"&&(n[o]=[r,i].filter(Boolean).join(" "))}return{...e,...n}}function Xn(e){const t=e+"CollectionProvider",[n,o]=Ue(t),[r,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=f=>{const{scope:h,children:v}=f,w=W.useRef(null),g=W.useRef(new Map).current;return W.createElement(r,{scope:h,itemMap:g,collectionRef:w},v)},c=e+"CollectionSlot",l=W.forwardRef((f,h)=>{const{scope:v,children:w}=f,g=i(c,v),b=Q(h,g.collectionRef);return W.createElement(de,{ref:b},w)}),d=e+"CollectionItemSlot",p="data-radix-collection-item",u=W.forwardRef((f,h)=>{const{scope:v,children:w,...g}=f,b=W.useRef(null),y=Q(h,b),x=i(d,v);return W.useEffect(()=>(x.itemMap.set(b,{ref:b,...g}),()=>void x.itemMap.delete(b))),W.createElement(de,{[p]:"",ref:y},w)});function m(f){const h=i(e+"CollectionConsumer",f);return W.useCallback(()=>{const w=h.collectionRef.current;if(!w)return[];const g=Array.from(w.querySelectorAll(`[${p}]`));return Array.from(h.itemMap.values()).sort((x,$)=>g.indexOf(x.ref.current)-g.indexOf($.ref.current))},[h.collectionRef,h.itemMap])}return[{Provider:s,Slot:l,ItemSlot:u},m,o]}const Lt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Z=Lt.reduce((e,t)=>{const n=a.forwardRef((o,r)=>{const{asChild:i,...s}=o,c=i?de:t;return a.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),a.createElement(c,k({},s,{ref:r}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function _t(e,t){e&&Ye.flushSync(()=>e.dispatchEvent(t))}function te(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function Mt(e,t=globalThis==null?void 0:globalThis.document){const n=te(e);a.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[n,t])}const Ce="dismissableLayer.update",kt="dismissableLayer.pointerDownOutside",Nt="dismissableLayer.focusOutside";let ke;const Ke=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ft=a.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:c,onDismiss:l,...d}=e,p=a.useContext(Ke),[u,m]=a.useState(null),f=(n=u==null?void 0:u.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,h]=a.useState({}),v=Q(t,C=>m(C)),w=Array.from(p.layers),[g]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),b=w.indexOf(g),y=u?w.indexOf(u):-1,x=p.layersWithOutsidePointerEventsDisabled.size>0,$=y>=b,E=Bt(C=>{const D=C.target,T=[...p.branches].some(P=>P.contains(D));!$||T||(i==null||i(C),c==null||c(C),C.defaultPrevented||l==null||l())},f),R=It(C=>{const D=C.target;[...p.branches].some(P=>P.contains(D))||(s==null||s(C),c==null||c(C),C.defaultPrevented||l==null||l())},f);return Mt(C=>{y===p.layers.size-1&&(r==null||r(C),!C.defaultPrevented&&l&&(C.preventDefault(),l()))},f),a.useEffect(()=>{if(u)return o&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(ke=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(u)),p.layers.add(u),Ne(),()=>{o&&p.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=ke)}},[u,f,o,p]),a.useEffect(()=>()=>{u&&(p.layers.delete(u),p.layersWithOutsidePointerEventsDisabled.delete(u),Ne())},[u,p]),a.useEffect(()=>{const C=()=>h({});return document.addEventListener(Ce,C),()=>document.removeEventListener(Ce,C)},[]),a.createElement(Z.div,k({},d,{ref:v,style:{pointerEvents:x?$?"auto":"none":void 0,...e.style},onFocusCapture:$e(e.onFocusCapture,R.onFocusCapture),onBlurCapture:$e(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:$e(e.onPointerDownCapture,E.onPointerDownCapture)}))}),Wt=a.forwardRef((e,t)=>{const n=a.useContext(Ke),o=a.useRef(null),r=Q(t,o);return a.useEffect(()=>{const i=o.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),a.createElement(Z.div,k({},e,{ref:r}))});function Bt(e,t=globalThis==null?void 0:globalThis.document){const n=te(e),o=a.useRef(!1),r=a.useRef(()=>{});return a.useEffect(()=>{const i=c=>{if(c.target&&!o.current){let d=function(){Ze(kt,n,l,{discrete:!0})};const l={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=d,t.addEventListener("click",r.current,{once:!0})):d()}o.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function It(e,t=globalThis==null?void 0:globalThis.document){const n=te(e),o=a.useRef(!1);return a.useEffect(()=>{const r=i=>{i.target&&!o.current&&Ze(Nt,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Ne(){const e=new CustomEvent(Ce);document.dispatchEvent(e)}function Ze(e,t,n,{discrete:o}){const r=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?_t(r,i):r.dispatchEvent(i)}const Yn=Ft,Un=Wt,ue=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},Ht=Pt["useId".toString()]||(()=>{});let zt=0;function qn(e){const[t,n]=a.useState(Ht());return ue(()=>{e||n(o=>o??String(zt++))},[e]),e||(t?`radix-${t}`:"")}const Vt=["top","right","bottom","left"],Y=Math.min,_=Math.max,pe=Math.round,ae=Math.floor,U=e=>({x:e,y:e}),jt={left:"right",right:"left",bottom:"top",top:"bottom"},Xt={start:"end",end:"start"};function Pe(e,t,n){return _(e,Y(t,n))}function H(e,t){return typeof e=="function"?e(t):e}function z(e){return e.split("-")[0]}function ne(e){return e.split("-")[1]}function Ae(e){return e==="x"?"y":"x"}function Re(e){return e==="y"?"height":"width"}function oe(e){return["top","bottom"].includes(z(e))?"y":"x"}function Se(e){return Ae(oe(e))}function Yt(e,t,n){n===void 0&&(n=!1);const o=ne(e),r=Se(e),i=Re(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=he(s)),[s,he(s)]}function Ut(e){const t=he(e);return[Oe(e),t,Oe(t)]}function Oe(e){return e.replace(/start|end/g,t=>Xt[t])}function qt(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function Kt(e,t,n,o){const r=ne(e);let i=qt(z(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(Oe)))),i}function he(e){return e.replace(/left|right|bottom|top/g,t=>jt[t])}function Zt(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ge(e){return typeof e!="number"?Zt(e):{top:e,right:e,bottom:e,left:e}}function me(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Fe(e,t,n){let{reference:o,floating:r}=e;const i=oe(t),s=Se(t),c=Re(s),l=z(t),d=i==="y",p=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,m=o[c]/2-r[c]/2;let f;switch(l){case"top":f={x:p,y:o.y-r.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-r.width,y:u};break;default:f={x:o.x,y:o.y}}switch(ne(t)){case"start":f[s]-=m*(n&&d?-1:1);break;case"end":f[s]+=m*(n&&d?-1:1);break}return f}const Gt=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let d=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:u}=Fe(d,o,l),m=o,f={},h=0;for(let v=0;v<c.length;v++){const{name:w,fn:g}=c[v],{x:b,y,data:x,reset:$}=await g({x:p,y:u,initialPlacement:o,placement:m,strategy:r,middlewareData:f,rects:d,platform:s,elements:{reference:e,floating:t}});if(p=b??p,u=y??u,f={...f,[w]:{...f[w],...x}},$&&h<=50){h++,typeof $=="object"&&($.placement&&(m=$.placement),$.rects&&(d=$.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):$.rects),{x:p,y:u}=Fe(d,m,l)),v=-1;continue}}return{x:p,y:u,placement:m,strategy:r,middlewareData:f}};async function re(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:m=!1,padding:f=0}=H(t,e),h=Ge(f),w=c[m?u==="floating"?"reference":"floating":u],g=me(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:d,rootBoundary:p,strategy:l})),b=u==="floating"?{...s.floating,x:o,y:r}:s.reference,y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),x=await(i.isElement==null?void 0:i.isElement(y))?await(i.getScale==null?void 0:i.getScale(y))||{x:1,y:1}:{x:1,y:1},$=me(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:y,strategy:l}):b);return{top:(g.top-$.top+h.top)/x.y,bottom:($.bottom-g.bottom+h.bottom)/x.y,left:(g.left-$.left+h.left)/x.x,right:($.right-g.right+h.right)/x.x}}const We=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c}=t,{element:l,padding:d=0}=H(e,t)||{};if(l==null)return{};const p=Ge(d),u={x:n,y:o},m=Se(r),f=Re(m),h=await s.getDimensions(l),v=m==="y",w=v?"top":"left",g=v?"bottom":"right",b=v?"clientHeight":"clientWidth",y=i.reference[f]+i.reference[m]-u[m]-i.floating[f],x=u[m]-i.reference[m],$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let E=$?$[b]:0;(!E||!await(s.isElement==null?void 0:s.isElement($)))&&(E=c.floating[b]||i.floating[f]);const R=y/2-x/2,C=E/2-h[f]/2-1,D=Y(p[w],C),T=Y(p[g],C),P=D,F=E-h[f]-T,A=E/2-h[f]/2+R,S=Pe(P,A,F),O=ne(r)!=null&&A!=S&&i.reference[f]/2-(A<P?D:T)-h[f]/2<0?A<P?P-A:F-A:0;return{[m]:u[m]-O,data:{[m]:S,centerOffset:A-S+O}}}}),Jt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:r,rects:i,initialPlacement:s,platform:c,elements:l}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:h=!0,...v}=H(e,t),w=z(o),g=z(s)===s,b=await(c.isRTL==null?void 0:c.isRTL(l.floating)),y=u||(g||!h?[he(s)]:Ut(s));!u&&f!=="none"&&y.push(...Kt(s,h,f,b));const x=[s,...y],$=await re(t,v),E=[];let R=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&E.push($[w]),p){const P=Yt(o,i,b);E.push($[P[0]],$[P[1]])}if(R=[...R,{placement:o,overflows:E}],!E.every(P=>P<=0)){var C,D;const P=(((C=r.flip)==null?void 0:C.index)||0)+1,F=x[P];if(F)return{data:{index:P,overflows:R},reset:{placement:F}};let A=(D=R.filter(S=>S.overflows[0]<=0).sort((S,L)=>S.overflows[1]-L.overflows[1])[0])==null?void 0:D.placement;if(!A)switch(m){case"bestFit":{var T;const S=(T=R.map(L=>[L.placement,L.overflows.filter(O=>O>0).reduce((O,X)=>O+X,0)]).sort((L,O)=>L[1]-O[1])[0])==null?void 0:T[0];S&&(A=S);break}case"initialPlacement":A=s;break}if(o!==A)return{reset:{placement:A}}}return{}}}};function Be(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ie(e){return Vt.some(t=>e[t]>=0)}const Qt=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=H(e,t);switch(o){case"referenceHidden":{const i=await re(t,{...r,elementContext:"reference"}),s=Be(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ie(s)}}}case"escaped":{const i=await re(t,{...r,altBoundary:!0}),s=Be(i,n.floating);return{data:{escapedOffsets:s,escaped:Ie(s)}}}default:return{}}}}};async function en(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=z(n),c=ne(n),l=oe(n)==="y",d=["left","top"].includes(s)?-1:1,p=i&&l?-1:1,u=H(t,e);let{mainAxis:m,crossAxis:f,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof h=="number"&&(f=c==="end"?h*-1:h),l?{x:f*p,y:m*d}:{x:m*d,y:f*p}}const tn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,r=await en(t,e);return{x:n+r.x,y:o+r.y,data:r}}}},nn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:g,y:b}=w;return{x:g,y:b}}},...l}=H(e,t),d={x:n,y:o},p=await re(t,l),u=oe(z(r)),m=Ae(u);let f=d[m],h=d[u];if(i){const w=m==="y"?"top":"left",g=m==="y"?"bottom":"right",b=f+p[w],y=f-p[g];f=Pe(b,f,y)}if(s){const w=u==="y"?"top":"left",g=u==="y"?"bottom":"right",b=h+p[w],y=h-p[g];h=Pe(b,h,y)}const v=c.fn({...t,[m]:f,[u]:h});return{...v,data:{x:v.x-n,y:v.y-o}}}}},on=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:c=0,mainAxis:l=!0,crossAxis:d=!0}=H(e,t),p={x:n,y:o},u=oe(r),m=Ae(u);let f=p[m],h=p[u];const v=H(c,t),w=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const y=m==="y"?"height":"width",x=i.reference[m]-i.floating[y]+w.mainAxis,$=i.reference[m]+i.reference[y]-w.mainAxis;f<x?f=x:f>$&&(f=$)}if(d){var g,b;const y=m==="y"?"width":"height",x=["top","left"].includes(z(r)),$=i.reference[u]-i.floating[y]+(x&&((g=s.offset)==null?void 0:g[u])||0)+(x?0:w.crossAxis),E=i.reference[u]+i.reference[y]+(x?0:((b=s.offset)==null?void 0:b[u])||0)-(x?w.crossAxis:0);h<$?h=$:h>E&&(h=E)}return{[m]:f,[u]:h}}}},rn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:r,elements:i}=t,{apply:s=()=>{},...c}=H(e,t),l=await re(t,c),d=z(n),p=ne(n),u=oe(n)==="y",{width:m,height:f}=o.floating;let h,v;d==="top"||d==="bottom"?(h=d,v=p===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(v=d,h=p==="end"?"top":"bottom");const w=f-l[h],g=m-l[v],b=!t.middlewareData.shift;let y=w,x=g;if(u){const E=m-l.left-l.right;x=p||b?Y(g,E):E}else{const E=f-l.top-l.bottom;y=p||b?Y(w,E):E}if(b&&!p){const E=_(l.left,0),R=_(l.right,0),C=_(l.top,0),D=_(l.bottom,0);u?x=m-2*(E!==0||R!==0?E+R:_(l.left,l.right)):y=f-2*(C!==0||D!==0?C+D:_(l.top,l.bottom))}await s({...t,availableWidth:x,availableHeight:y});const $=await r.getDimensions(i.floating);return m!==$.width||f!==$.height?{reset:{rects:!0}}:{}}}};function q(e){return Je(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function j(e){var t;return(t=(Je(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Je(e){return e instanceof Node||e instanceof M(e).Node}function V(e){return e instanceof Element||e instanceof M(e).Element}function B(e){return e instanceof HTMLElement||e instanceof M(e).HTMLElement}function He(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof M(e).ShadowRoot}function ie(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=N(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function sn(e){return["table","td","th"].includes(q(e))}function De(e){const t=Te(),n=N(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function cn(e){let t=ee(e);for(;B(t)&&!we(t);){if(De(t))return t;t=ee(t)}return null}function Te(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function we(e){return["html","body","#document"].includes(q(e))}function N(e){return M(e).getComputedStyle(e)}function be(e){return V(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ee(e){if(q(e)==="html")return e;const t=e.assignedSlot||e.parentNode||He(e)&&e.host||j(e);return He(t)?t.host:t}function Qe(e){const t=ee(e);return we(t)?e.ownerDocument?e.ownerDocument.body:e.body:B(t)&&ie(t)?t:Qe(t)}function ge(e,t){var n;t===void 0&&(t=[]);const o=Qe(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),i=M(o);return r?t.concat(i,i.visualViewport||[],ie(o)?o:[]):t.concat(o,ge(o))}function et(e){const t=N(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=B(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,c=pe(n)!==i||pe(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function Le(e){return V(e)?e:e.contextElement}function J(e){const t=Le(e);if(!B(t))return U(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=et(t);let s=(i?pe(n.width):n.width)/o,c=(i?pe(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const ln=U(0);function tt(e){const t=M(e);return!Te()||!t.visualViewport?ln:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function an(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==M(e)?!1:t}function K(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=Le(e);let s=U(1);t&&(o?V(o)&&(s=J(o)):s=J(e));const c=an(i,n,o)?tt(i):U(0);let l=(r.left+c.x)/s.x,d=(r.top+c.y)/s.y,p=r.width/s.x,u=r.height/s.y;if(i){const m=M(i),f=o&&V(o)?M(o):o;let h=m.frameElement;for(;h&&o&&f!==m;){const v=J(h),w=h.getBoundingClientRect(),g=N(h),b=w.left+(h.clientLeft+parseFloat(g.paddingLeft))*v.x,y=w.top+(h.clientTop+parseFloat(g.paddingTop))*v.y;l*=v.x,d*=v.y,p*=v.x,u*=v.y,l+=b,d+=y,h=M(h).frameElement}}return me({width:p,height:u,x:l,y:d})}function fn(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=B(n),i=j(n);if(n===i)return t;let s={scrollLeft:0,scrollTop:0},c=U(1);const l=U(0);if((r||!r&&o!=="fixed")&&((q(n)!=="body"||ie(i))&&(s=be(n)),B(n))){const d=K(n);c=J(n),l.x=d.x+n.clientLeft,l.y=d.y+n.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-s.scrollLeft*c.x+l.x,y:t.y*c.y-s.scrollTop*c.y+l.y}}function dn(e){return Array.from(e.getClientRects())}function nt(e){return K(j(e)).left+be(e).scrollLeft}function un(e){const t=j(e),n=be(e),o=e.ownerDocument.body,r=_(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=_(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+nt(e);const c=-n.scrollTop;return N(o).direction==="rtl"&&(s+=_(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function pn(e,t){const n=M(e),o=j(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,l=0;if(r){i=r.width,s=r.height;const d=Te();(!d||d&&t==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:c,y:l}}function hn(e,t){const n=K(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=B(e)?J(e):U(1),s=e.clientWidth*i.x,c=e.clientHeight*i.y,l=r*i.x,d=o*i.y;return{width:s,height:c,x:l,y:d}}function ze(e,t,n){let o;if(t==="viewport")o=pn(e,n);else if(t==="document")o=un(j(e));else if(V(t))o=hn(t,n);else{const r=tt(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return me(o)}function ot(e,t){const n=ee(e);return n===t||!V(n)||we(n)?!1:N(n).position==="fixed"||ot(n,t)}function mn(e,t){const n=t.get(e);if(n)return n;let o=ge(e).filter(c=>V(c)&&q(c)!=="body"),r=null;const i=N(e).position==="fixed";let s=i?ee(e):e;for(;V(s)&&!we(s);){const c=N(s),l=De(s);!l&&c.position==="fixed"&&(r=null),(i?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ie(s)&&!l&&ot(e,s))?o=o.filter(p=>p!==s):r=c,s=ee(s)}return t.set(e,o),o}function gn(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?mn(t,this._c):[].concat(n),o],c=s[0],l=s.reduce((d,p)=>{const u=ze(t,p,r);return d.top=_(u.top,d.top),d.right=Y(u.right,d.right),d.bottom=Y(u.bottom,d.bottom),d.left=_(u.left,d.left),d},ze(t,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function vn(e){return et(e)}function wn(e,t,n){const o=B(t),r=j(t),i=n==="fixed",s=K(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const l=U(0);if(o||!o&&!i)if((q(t)!=="body"||ie(r))&&(c=be(t)),o){const d=K(t,!0,i,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else r&&(l.x=nt(r));return{x:s.left+c.scrollLeft-l.x,y:s.top+c.scrollTop-l.y,width:s.width,height:s.height}}function Ve(e,t){return!B(e)||N(e).position==="fixed"?null:t?t(e):e.offsetParent}function rt(e,t){const n=M(e);if(!B(e))return n;let o=Ve(e,t);for(;o&&sn(o)&&N(o).position==="static";)o=Ve(o,t);return o&&(q(o)==="html"||q(o)==="body"&&N(o).position==="static"&&!De(o))?n:o||cn(e)||n}const bn=async function(e){let{reference:t,floating:n,strategy:o}=e;const r=this.getOffsetParent||rt,i=this.getDimensions;return{reference:wn(t,await r(n),o),floating:{x:0,y:0,...await i(n)}}};function xn(e){return N(e).direction==="rtl"}const yn={convertOffsetParentRelativeRectToViewportRelativeRect:fn,getDocumentElement:j,getClippingRect:gn,getOffsetParent:rt,getElementRects:bn,getClientRects:dn,getDimensions:vn,getScale:J,isElement:V,isRTL:xn};function $n(e,t){let n=null,o;const r=j(e);function i(){clearTimeout(o),n&&n.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),i();const{left:d,top:p,width:u,height:m}=e.getBoundingClientRect();if(c||t(),!u||!m)return;const f=ae(p),h=ae(r.clientWidth-(d+u)),v=ae(r.clientHeight-(p+m)),w=ae(d),b={rootMargin:-f+"px "+-h+"px "+-v+"px "+-w+"px",threshold:_(0,Y(1,l))||1};let y=!0;function x($){const E=$[0].intersectionRatio;if(E!==l){if(!y)return s();E?s(!1,E):o=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(x,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(x,b)}n.observe(e)}return s(!0),i}function En(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,d=Le(e),p=r||i?[...d?ge(d):[],...ge(t)]:[];p.forEach(g=>{r&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const u=d&&c?$n(d,n):null;let m=-1,f=null;s&&(f=new ResizeObserver(g=>{let[b]=g;b&&b.target===d&&f&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{f&&f.observe(t)})),n()}),d&&!l&&f.observe(d),f.observe(t));let h,v=l?K(e):null;l&&w();function w(){const g=K(e);v&&(g.x!==v.x||g.y!==v.y||g.width!==v.width||g.height!==v.height)&&n(),v=g,h=requestAnimationFrame(w)}return n(),()=>{p.forEach(g=>{r&&g.removeEventListener("scroll",n),i&&g.removeEventListener("resize",n)}),u&&u(),f&&f.disconnect(),f=null,l&&cancelAnimationFrame(h)}}const Cn=(e,t,n)=>{const o=new Map,r={platform:yn,...n},i={...r.platform,_c:o};return Gt(e,t,{...r,platform:i})},Pn=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?We({element:o.current,padding:r}).fn(n):{}:o?We({element:o,padding:r}).fn(n):{}}}};var fe=typeof document<"u"?a.useLayoutEffect:a.useEffect;function ve(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(o=n;o--!==0;)if(!ve(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!ve(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function it(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function je(e,t){const n=it(e);return Math.round(t*n)/n}function Xe(e){const t=a.useRef(e);return fe(()=>{t.current=e}),t}function On(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:l,open:d}=e,[p,u]=a.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,f]=a.useState(o);ve(m,o)||f(o);const[h,v]=a.useState(null),[w,g]=a.useState(null),b=a.useCallback(O=>{O!=E.current&&(E.current=O,v(O))},[v]),y=a.useCallback(O=>{O!==R.current&&(R.current=O,g(O))},[g]),x=i||h,$=s||w,E=a.useRef(null),R=a.useRef(null),C=a.useRef(p),D=Xe(l),T=Xe(r),P=a.useCallback(()=>{if(!E.current||!R.current)return;const O={placement:t,strategy:n,middleware:m};T.current&&(O.platform=T.current),Cn(E.current,R.current,O).then(X=>{const I={...X,isPositioned:!0};F.current&&!ve(C.current,I)&&(C.current=I,Ye.flushSync(()=>{u(I)}))})},[m,t,n,T]);fe(()=>{d===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,u(O=>({...O,isPositioned:!1})))},[d]);const F=a.useRef(!1);fe(()=>(F.current=!0,()=>{F.current=!1}),[]),fe(()=>{if(x&&(E.current=x),$&&(R.current=$),x&&$){if(D.current)return D.current(x,$,P);P()}},[x,$,P,D]);const A=a.useMemo(()=>({reference:E,floating:R,setReference:b,setFloating:y}),[b,y]),S=a.useMemo(()=>({reference:x,floating:$}),[x,$]),L=a.useMemo(()=>{const O={position:n,left:0,top:0};if(!S.floating)return O;const X=je(S.floating,p.x),I=je(S.floating,p.y);return c?{...O,transform:"translate("+X+"px, "+I+"px)",...it(S.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:X,top:I}},[n,c,S.floating,p.x,p.y]);return a.useMemo(()=>({...p,update:P,refs:A,elements:S,floatingStyles:L}),[p,P,A,S,L])}const An=a.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...i}=e;return a.createElement(Z.svg,k({},i,{ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:a.createElement("polygon",{points:"0,0 30,0 15,10"}))}),Rn=An;function Sn(e){const[t,n]=a.useState(void 0);return ue(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,c;if("borderBoxSize"in i){const l=i.borderBoxSize,d=Array.isArray(l)?l[0]:l;s=d.inlineSize,c=d.blockSize}else s=e.offsetWidth,c=e.offsetHeight;n({width:s,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}const st="Popper",[ct,Kn]=Ue(st),[Dn,lt]=ct(st),Tn=e=>{const{__scopePopper:t,children:n}=e,[o,r]=a.useState(null);return a.createElement(Dn,{scope:t,anchor:o,onAnchorChange:r},n)},Ln="PopperAnchor",_n=a.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=lt(Ln,n),s=a.useRef(null),c=Q(t,s);return a.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:a.createElement(Z.div,k({},r,{ref:c}))}),at="PopperContent",[Mn,kn]=ct(at),Nn=a.forwardRef((e,t)=>{var n,o,r,i,s,c,l,d;const{__scopePopper:p,side:u="bottom",sideOffset:m=0,align:f="center",alignOffset:h=0,arrowPadding:v=0,collisionBoundary:w=[],collisionPadding:g=0,sticky:b="partial",hideWhenDetached:y=!1,avoidCollisions:x=!0,onPlaced:$,...E}=e,R=lt(at,p),[C,D]=a.useState(null),T=Q(t,ye=>D(ye)),[P,F]=a.useState(null),A=Sn(P),S=(n=A==null?void 0:A.width)!==null&&n!==void 0?n:0,L=(o=A==null?void 0:A.height)!==null&&o!==void 0?o:0,O=u+(f!=="center"?"-"+f:""),X=typeof g=="number"?g:{top:0,right:0,bottom:0,left:0,...g},I=Array.isArray(w)?w:[w],dt=I.length>0,xe={padding:X,boundary:I.filter(In),altBoundary:dt},{refs:ut,floatingStyles:_e,placement:pt,isPositioned:se,middlewareData:G}=On({strategy:"fixed",placement:O,whileElementsMounted:En,elements:{reference:R.anchor},middleware:[tn({mainAxis:m+L,alignmentAxis:h}),x&&nn({mainAxis:!0,crossAxis:!1,limiter:b==="partial"?on():void 0,...xe}),x&&Jt({...xe}),rn({...xe,apply:({elements:ye,rects:xt,availableWidth:yt,availableHeight:$t})=>{const{width:Et,height:Ct}=xt.reference,le=ye.floating.style;le.setProperty("--radix-popper-available-width",`${yt}px`),le.setProperty("--radix-popper-available-height",`${$t}px`),le.setProperty("--radix-popper-anchor-width",`${Et}px`),le.setProperty("--radix-popper-anchor-height",`${Ct}px`)}}),P&&Pn({element:P,padding:v}),Hn({arrowWidth:S,arrowHeight:L}),y&&Qt({strategy:"referenceHidden"})]}),[Me,ht]=ft(pt),ce=te($);ue(()=>{se&&(ce==null||ce())},[se,ce]);const mt=(r=G.arrow)===null||r===void 0?void 0:r.x,gt=(i=G.arrow)===null||i===void 0?void 0:i.y,vt=((s=G.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[wt,bt]=a.useState();return ue(()=>{C&&bt(window.getComputedStyle(C).zIndex)},[C]),a.createElement("div",{ref:ut.setFloating,"data-radix-popper-content-wrapper":"",style:{..._e,transform:se?_e.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:wt,"--radix-popper-transform-origin":[(c=G.transformOrigin)===null||c===void 0?void 0:c.x,(l=G.transformOrigin)===null||l===void 0?void 0:l.y].join(" ")},dir:e.dir},a.createElement(Mn,{scope:p,placedSide:Me,onArrowChange:F,arrowX:mt,arrowY:gt,shouldHideArrow:vt},a.createElement(Z.div,k({"data-side":Me,"data-align":ht},E,{ref:T,style:{...E.style,animation:se?void 0:"none",opacity:(d=G.hide)!==null&&d!==void 0&&d.referenceHidden?0:void 0}}))))}),Fn="PopperArrow",Wn={top:"bottom",right:"left",bottom:"top",left:"right"},Bn=a.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,i=kn(Fn,o),s=Wn[i.placedSide];return a.createElement("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0}},a.createElement(Rn,k({},r,{ref:n,style:{...r.style,display:"block"}})))});function In(e){return e!==null}const Hn=e=>({name:"transformOrigin",options:e,fn(t){var n,o,r,i,s;const{placement:c,rects:l,middlewareData:d}=t,u=((n=d.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,m=u?0:e.arrowWidth,f=u?0:e.arrowHeight,[h,v]=ft(c),w={start:"0%",center:"50%",end:"100%"}[v],g=((o=(r=d.arrow)===null||r===void 0?void 0:r.x)!==null&&o!==void 0?o:0)+m/2,b=((i=(s=d.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+f/2;let y="",x="";return h==="bottom"?(y=u?w:`${g}px`,x=`${-f}px`):h==="top"?(y=u?w:`${g}px`,x=`${l.floating.height+f}px`):h==="right"?(y=`${-f}px`,x=u?w:`${b}px`):h==="left"&&(y=`${l.floating.width+f}px`,x=u?w:`${b}px`),{data:{x:y,y:x}}}});function ft(e){const[t,n="center"]=e.split("-");return[t,n]}const Zn=Tn,Gn=_n,Jn=Nn,Qn=Bn,eo=a.forwardRef((e,t)=>{var n;const{container:o=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...r}=e;return o?Ot.createPortal(a.createElement(Z.div,k({},r,{ref:t})),o):null});function to({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,r]=zn({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:o,c=te(n),l=a.useCallback(d=>{if(i){const u=typeof d=="function"?d(e):d;u!==e&&c(u)}else r(d)},[i,e,r,c]);return[s,l]}function zn({defaultProp:e,onChange:t}){const n=a.useState(e),[o]=n,r=a.useRef(o),i=te(t);return a.useEffect(()=>{r.current!==o&&(i(o),r.current=o)},[o,r,i]),n}function no(e){const t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const Vn=a.forwardRef((e,t)=>a.createElement(Z.span,k({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),oo=Vn;export{Ue as $,k as _,Z as a,te as b,ue as c,Q as d,to as e,$e as f,no as g,Sn as h,Xn as i,Un as j,Vn as k,Yn as l,eo as m,_t as n,Kn as o,qn as p,Zn as q,Gn as r,Ft as s,Jn as t,St as u,oo as v,Qn as w,de as x};
//# sourceMappingURL=index-5ae48356.js.map
