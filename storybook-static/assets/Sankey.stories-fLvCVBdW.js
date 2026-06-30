import{g as Ne,r as y,R as x}from"./iframe-CysaVPuT.js";import{g as F}from"./utils-ePvtT4un.js";import{m as Ce}from"./maxBy-CP7PMDPu.js";import{r as Pe}from"./iteratee-DuqmaN7B.js";import{g as we}from"./get-Dv3cK-ON.js";import{i as te,S as Le}from"./isWellBehavedNumber-CHReb6Hq.js";import{L as $}from"./Layer-DQgbcZ6W.js";import{R as Me}from"./Rectangle-V2sNlqNc.js";import{W as Ve,X as Te,u as je,a as Ie,t as V,f as fe,R as z}from"./zIndexSlice-CBspyTeT.js";import{R as De,d as Re,a0 as Ae,$ as $e,i as Xe,P as pe,O as ge,N as ke}from"./RechartsWrapper-CXNQztOV.js";import{R as We,S as qe}from"./RegisterGraphicalItemId-BIn5Riid.js";import{S as Ge}from"./chartDataContext-BsGd8oTW.js";import{r as Oe,n as Ye,s as _,q as Fe,b as ve}from"./resolveDefaultProps-CB9Bmy8P.js";import{T as ze}from"./Tooltip-DULMtNKm.js";var G={},ne;function _e(){if(ne)return G;ne=1;const e=Pe();function n(o,s){if(!o||!o.length)return 0;s!=null&&(s=e.iteratee(s));let t;for(let r=0;r<o.length;r++){const a=s?s(o[r]):o[r];a!==void 0&&(t===void 0?t=a:t+=a)}return t}return G.sumBy=n,G}var O,ae;function Be(){return ae||(ae=1,O=_e().sumBy),O}var Ke=Be();const Ue=Ne(Ke),He=(e,n)=>{const o=+e,s=n-o;return t=>o+s*t},M=e=>e.y+e.dy/2,Je=(e,n,o,s,t)=>{const r=1-t;return r**3*e+3*r**2*t*n+3*r*t**2*o+t**3*s},D=e=>e&&e.value||0,R=(e,n)=>n.reduce((o,s)=>o+D(e[s]),0),Qe=(e,n,o)=>o.reduce((s,t)=>{const r=n[t];if(r==null)return s;const a=e[r.source];return a==null?s:s+M(a)*D(n[t])},0),Ze=(e,n,o)=>o.reduce((s,t)=>{const r=n[t];if(r==null)return s;const a=e[r.target];return a==null?s:s+M(a)*D(n[t])},0),et=(e,n)=>e.y-n.y,tt=(e,n)=>{const o=[],s=[],t=[],r=[];for(let a=0,c=e.length;a<c;a++){const i=e[a];(i==null?void 0:i.source)===n&&(t.push(i.target),r.push(a)),(i==null?void 0:i.target)===n&&(o.push(i.source),s.push(a))}return{sourceNodes:o,sourceLinks:s,targetLinks:r,targetNodes:t}},Se=(e,n)=>{const{targetNodes:o}=n;for(let s=0,t=o.length;s<t;s++){const r=o[s];if(r==null)continue;const a=e[r];a&&(a.depth=Math.max(n.depth+1,a.depth),Se(e,a))}},nt=({nodes:e,links:n},o,s,t)=>{var c;const r=e.map((i,u)=>{const l=tt(n,u);return{...i,...l,value:Math.max(R(n,l.sourceLinks),R(n,l.targetLinks)),depth:0}});for(let i=0,u=r.length;i<u;i++){const l=r[i];l!=null&&!l.sourceNodes.length&&Se(r,l)}const a=((c=Ce(r,i=>i.depth))==null?void 0:c.depth)??0;if(a>=1){const i=(o-s)/a;for(let u=0,l=r.length;u<l;u++){const d=r[u];d!=null&&(d.targetNodes.length||t==="justify"&&(d.depth=a),d.x=d.depth*i,d.dx=s)}}return{tree:r,maxDepth:a}},at=e=>{var o;const n=[];for(let s=0,t=e.length;s<t;s++){const r=e[s];r!=null&&(n[r.depth]||(n[r.depth]=[]),(o=n[r.depth])==null||o.push(r))}return n},rt=(e,n,o,s,t)=>{let r=Math.min(...e.map(a=>{const c=Ue(a,D);return c===0?1/0:(n-(a.length-1)*o)/c}));r===1/0&&(r=0);for(let a=0,c=e.length;a<c;a++){const i=e[a];if(i!=null)if(t==="top"){let u=0;for(let l=0,d=i.length;l<d;l++){const m=i[l];m!=null&&(m.dy=m.value*r,m.y=u,u+=m.dy+o)}}else for(let u=0,l=i.length;u<l;u++){const d=i[u];d!=null&&(d.y=u,d.dy=d.value*r)}}return s.map(a=>({...a,dy:D(a)*r}))},Y=(e,n,o,s=!0)=>{for(let t=0,r=e.length;t<r;t++){const a=e[t];if(a==null)continue;const c=a.length;s&&a.sort(et);let i=0;for(let u=0;u<c;u++){const l=a[u];if(l==null)continue;const d=i-l.y;d>0&&(l.y+=d),i=l.y+l.dy+o}i=n+o;for(let u=c-1;u>=0;u--){const l=a[u];if(l==null)continue;const d=l.y+l.dy+o-i;if(d>0)l.y-=d,i=l.y;else break}}},ot=(e,n,o,s)=>{for(let t=0,r=n.length;t<r;t++){const a=n[t];if(a!=null)for(let c=0,i=a.length;c<i;c++){const u=a[c];if(u!=null&&u.sourceLinks.length){const l=R(o,u.sourceLinks),d=Qe(e,o,u.sourceLinks),m=l===0?M(u):d/l;u.y+=(m-M(u))*s}}}},st=(e,n,o,s)=>{for(let t=n.length-1;t>=0;t--){const r=n[t];if(r!=null)for(let a=0,c=r.length;a<c;a++){const i=r[a];if(i!=null&&i.targetLinks.length){const u=R(o,i.targetLinks),l=Ze(e,o,i.targetLinks),d=u===0?M(i):l/u;i.y+=(d-M(i))*s}}}},re=(e,n)=>{for(let o=0,s=e.length;o<s;o++){const t=e[o];if(t==null)continue;let r=0,a=0;t.targetLinks.sort((c,i)=>{var v,p,S,h;const u=(v=n[c])==null?void 0:v.target,l=(p=n[i])==null?void 0:p.target;if(u==null||l==null)return 0;const d=(S=e[u])==null?void 0:S.y,m=(h=e[l])==null?void 0:h.y;return d==null||m==null?0:d-m}),t.sourceLinks.sort((c,i)=>{var v,p,S,h;const u=(v=n[c])==null?void 0:v.source,l=(p=n[i])==null?void 0:p.source;if(u==null||l==null)return 0;const d=(S=e[u])==null?void 0:S.y,m=(h=e[l])==null?void 0:h.y;return d==null||m==null?0:d-m});for(let c=0,i=t.targetLinks.length;c<i;c++){const u=t.targetLinks[c];if(u==null)continue;const l=n[u];l&&(l.sy=r,r+=l.dy)}for(let c=0,i=t.sourceLinks.length;c<i;c++){const u=t.sourceLinks[c];if(u==null)continue;const l=n[u];l&&(l.ty=a,a+=l.dy)}}},it=(e,n,o,s)=>{const t=e.x+e.dx,r=n.x,a=r===t?0:(s-t)/(r-t),c=Math.min(Math.max(a,0),1),i=e.y+(o.sy??0)+o.dy/2,u=n.y+(o.ty??0)+o.dy/2;return Je(i,i,u,u,c)},lt=(e,n,o,s,t)=>{const r=new Map;for(let a=0;a<n.length;a++){const c=n[a];if(c!=null)for(const i of c)r.set(i,a)}for(let a=0;a<n.length;a++){const c=n[a];if(c==null||c.length===0)continue;const i=c[0]==null?void 0:c[0].x+c[0].dx/2;if(i==null)continue;const l=o.flatMap(h=>{const f=e[h.source],b=e[h.target];if(f==null||b==null)return[];const N=r.get(f),P=r.get(b);return N==null||P==null?[]:a<=Math.min(N,P)||a>=Math.max(N,P)?[]:[{y:it(f,b,h,i)-h.dy/2,dy:h.dy,fixed:!0}]}).filter(h=>c.some(f=>f.y>=h.y&&f.y+f.dy<=h.y+h.dy));if(l.length===0)continue;const d=h=>h.fixed?h.y:h.node.y,m=h=>h.fixed?h.dy:h.node.dy;let v=[...c.map(h=>({node:h,fixed:!1})),...l].sort((h,f)=>d(h)-d(f)),p=0;for(const h of v){if(h.fixed){p=Math.max(p,h.y+h.dy+t);continue}h.node.y<p&&(h.node.y=p),p=h.node.y+h.node.dy+t}v=v.sort((h,f)=>d(h)-d(f));let S=s+t;for(let h=v.length-1;h>=0;h--){const f=v[h];if(f==null)continue;if(f.fixed){S=Math.min(S,f.y-t);continue}const b=f.node.y+m(f)+t-S;b>0&&(f.node.y-=b),S=f.node.y}}},ct=({data:e,width:n,height:o,iterations:s,nodeWidth:t,nodePadding:r,sort:a,verticalAlign:c,align:i})=>{const{links:u}=e,{tree:l}=nt(e,n,t,i),d=at(l),m=rt(d,o,r,u,c);if(Y(d,o,r,a),c==="justify"){let p=1;for(let S=1;S<=s;S++)st(l,d,m,p*=.99),Y(d,o,r,a),ot(l,d,m,p),Y(d,o,r,a)}return re(l,m),lt(l,d,m,o,r),re(l,m),{nodes:l,links:m}},ut=e=>({x:+e.x+ +e.width/2,y:+e.y+ +e.height/2}),dt=e=>"sourceX"in e?{x:(e.sourceX+e.targetX)/2,y:(e.sourceY+e.targetY)/2}:void 0,ht=(e,n,o)=>{const{payload:s}=e;if(n==="node")return{payload:s,name:V(s,o,""),value:V(s,"value")};if("source"in s&&s.source&&s.target){const t=V(s.source,o,""),r=V(s.target,o,"");return{payload:s,name:`${t} - ${r}`,value:V(s,"value")}}},mt=(e,n,o,s)=>{if(n==null||typeof n!="string"||o==null||typeof o!="object")return;const t=n.split("-"),[r,a]=t,c=we(o,`${r}s[${a}]`);if(c)return ht(c,r,s)},yt={chartName:"Sankey",defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],tooltipPayloadSearcher:mt,eventEmitter:void 0},ft=y.memo(({dataKey:e,nameKey:n,stroke:o,strokeWidth:s,fill:t,name:r,data:a,id:c})=>{const i={dataDefinedOnItem:a,getPosition:Ye,settings:{stroke:o,strokeWidth:s,fill:t,dataKey:e,name:r,nameKey:n,hide:!1,type:void 0,color:t,unit:"",graphicalItemId:c}};return y.createElement(qe,{tooltipEntrySettings:i})});function pt(e,n){if(y.isValidElement(e))return y.cloneElement(e,n);if(typeof e=="function")return e(n);const{sourceX:o,sourceY:s,sourceControlX:t,targetX:r,targetY:a,targetControlX:c,linkWidth:i,...u}=n;return y.createElement("path",{className:"recharts-sankey-link",d:`
          M${o},${s}
          C${t},${s} ${c},${a} ${r},${a}
        `,fill:"none",stroke:"#333",strokeWidth:i,strokeOpacity:"0.2",..._(u)})}const gt=({link:e,nodes:n,left:o,top:s,i:t,linkContent:r,linkCurvature:a})=>{const{sy:c,ty:i,dy:u}=e,l=n[e.source],d=n[e.target];if(l==null||d==null)return;const m=l.x+l.dx+o,v=d.x+o,p=He(m,v),S=p(a),h=p(1-a),f=l.y+c+u/2+s,b=d.y+i+u/2+s;return{sourceX:m,targetX:v,sourceY:f,targetY:b,sourceControlX:S,targetControlX:h,sourceRelativeY:c,targetRelativeY:i,linkWidth:u,index:t,payload:{...e,source:l,target:d},...ve(r)}};function kt({graphicalItemId:e,props:n,i:o,linkContent:s,onMouseEnter:t,onMouseLeave:r,onClick:a,dataKey:c}){const i=dt(n),u=`link-${o}`,l=fe(),d={onMouseEnter:m=>{l(ke({activeIndex:u,activeDataKey:c,activeCoordinate:i,activeGraphicalItemId:e})),t(n,m)},onMouseLeave:m=>{l(ge()),r(n,m)},onClick:m=>{l(pe({activeIndex:u,activeDataKey:c,activeCoordinate:i,activeGraphicalItemId:e})),a(n,m)}};return y.createElement($,{...d},pt(s,n))}function vt({graphicalItemId:e,modifiedLinks:n,links:o,linkContent:s,onMouseEnter:t,onMouseLeave:r,onClick:a,dataKey:c}){return y.createElement($,{className:"recharts-sankey-links",key:"recharts-sankey-links"},o.map((i,u)=>{const l=n[u];return l==null?null:y.createElement(kt,{graphicalItemId:e,key:`link-${i.source}-${i.target}-${i.value}`,props:l,linkContent:s,i:u,onMouseEnter:t,onMouseLeave:r,onClick:a,dataKey:c})}))}function St(e,n){return y.isValidElement(e)?y.cloneElement(e,n):typeof e=="function"?e(n):y.createElement(Me,{className:"recharts-sankey-node",fill:"#0088fe",fillOpacity:"0.8",..._(n)})}const bt=({node:e,nodeContent:n,top:o,left:s,i:t})=>{const{x:r,y:a,dx:c,dy:i}=e;return{...ve(n),x:r+s,y:a+o,width:c,height:i,index:t,payload:e}};function xt({graphicalItemId:e,props:n,nodeContent:o,i:s,onMouseEnter:t,onMouseLeave:r,onClick:a,dataKey:c}){const i=fe(),u=ut(n),l=`node-${s}`,d={onMouseEnter:m=>{i(ke({activeIndex:l,activeDataKey:c,activeCoordinate:u,activeGraphicalItemId:e})),t(n,m)},onMouseLeave:m=>{i(ge()),r(n,m)},onClick:m=>{i(pe({activeIndex:l,activeDataKey:c,activeCoordinate:u,activeGraphicalItemId:e})),a(n,m)}};return y.createElement($,{...d},St(o,n))}function Et({graphicalItemId:e,modifiedNodes:n,nodeContent:o,onMouseEnter:s,onMouseLeave:t,onClick:r,dataKey:a}){return y.createElement($,{className:"recharts-sankey-nodes",key:"recharts-sankey-nodes"},n.map((c,i)=>y.createElement(xt,{graphicalItemId:e,key:`node-${c.index}-${c.x}-${c.y}`,props:c,nodeContent:o,i,onMouseEnter:s,onMouseLeave:t,onClick:r,dataKey:a})))}const Nt={align:"justify",dataKey:"value",iterations:32,linkCurvature:.5,margin:{top:5,right:5,bottom:5,left:5},nameKey:"name",nodePadding:10,nodeWidth:10,sort:!0,verticalAlign:"justify",...Xe};function Ct(e){const{className:n,style:o,children:s,id:t,...r}=e,{link:a,dataKey:c,node:i,onMouseEnter:u,onMouseLeave:l,onClick:d,data:m,iterations:v,nodeWidth:p,nodePadding:S,sort:h,linkCurvature:f,margin:b,verticalAlign:N,align:P}=e,B=_(r),w=je(),L=Ie(),{links:be,modifiedLinks:K,modifiedNodes:U}=y.useMemo(()=>{if(!m||!w||!L||w<=0||L<=0)return{nodes:[],links:[],modifiedLinks:[],modifiedNodes:[]};const g=w-(b.left??0)-(b.right??0),k=L-(b.top??0)-(b.bottom??0),E=ct({data:m,width:g,height:k,iterations:v,nodeWidth:p,nodePadding:S,sort:h,verticalAlign:N,align:P}),Z=b.top||0,ee=b.left||0,xe=E.links.map((W,q)=>gt({link:W,nodes:E.nodes,i:q,top:Z,left:ee,linkContent:a,linkCurvature:f})).filter(Fe),Ee=E.nodes.map((W,q)=>bt({node:W,nodeContent:i,i:q,top:Z,left:ee}));return{nodes:E.nodes,links:E.links,modifiedLinks:xe,modifiedNodes:Ee}},[m,w,L,b,v,p,S,h,a,i,f,P,N]),H=y.useCallback((g,k,E)=>{u&&u(g,k,E)},[u]),J=y.useCallback((g,k,E)=>{l&&l(g,k,E)},[l]),Q=y.useCallback((g,k,E)=>{d&&d(g,k,E)},[d]);return!te(w)||!te(L)||!m||!m.links||!m.nodes?null:y.createElement(y.Fragment,null,y.createElement(Ge,{computedData:{links:K,nodes:U}}),y.createElement(Le,{...B,width:w,height:L},s,y.createElement(vt,{graphicalItemId:t,links:be,modifiedLinks:K,linkContent:a,dataKey:c,onMouseEnter:(g,k)=>H(g,"link",k),onMouseLeave:(g,k)=>J(g,"link",k),onClick:(g,k)=>Q(g,"link",k)}),y.createElement(Et,{graphicalItemId:t,modifiedNodes:U,nodeContent:i,dataKey:c,onMouseEnter:(g,k)=>H(g,"node",k),onMouseLeave:(g,k)=>J(g,"node",k),onClick:(g,k)=>Q(g,"node",k)})))}function C(e){const n=Oe(e,Nt),{width:o,height:s,style:t,className:r,id:a,throttleDelay:c,throttledEvents:i}=n,[u,l]=y.useState(null);return y.createElement(De,{preloadedState:{options:yt},reduxStoreName:r??"Sankey"},y.createElement(Ve,{width:o,height:s}),y.createElement(Te,{margin:n.margin}),y.createElement(Re,{throttleDelay:c,throttledEvents:i}),y.createElement(Ae,{className:r,style:t,width:o,height:s,responsive:!1,ref:d=>{d&&!u&&l(d)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},y.createElement($e.Provider,{value:u},y.createElement(We,{id:a,type:"sankey"},d=>y.createElement(y.Fragment,null,y.createElement(ft,{dataKey:n.dataKey,nameKey:n.nameKey,stroke:n.stroke,strokeWidth:n.strokeWidth,fill:n.fill,name:n.name,data:n.data,id:d}),y.createElement(Ct,{...n,id:d}))))))}C.displayName="Sankey";try{C.displayName="Sankey",C.__docgenInfo={description:`Flow diagram in which the width of the arrows is proportional to the flow rate.
It is typically used to visualize energy or material or cost transfers between processes.`,displayName:"Sankey",filePath:"/home/runner/work/recharts/recharts/src/chart/Sankey.tsx",methods:[],props:{nameKey:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.",name:"nameKey",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{defaultValue:"name"},type:{name:"string | number | ((obj: any) => any)"}},dataKey:{defaultValue:{value:"'value'"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.

Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
the value of each link is directly taken from the 'value' property of the link objects.`,name:"dataKey",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"'value'"},type:{name:"string | number | ((obj: any) => any)"}},width:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`The width of chart container.
Can be a number or a percent string like "100%".`,name:"width",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{see:"{@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}"},type:{name:"number | `${number}%`"}},height:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`The height of chart container.
Can be a number or a percent string like "100%".`,name:"height",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{see:"{@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}"},type:{name:"number | `${number}%`"}},data:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`The source data, including the array of nodes, and the relationships, represented by links.

Note that Sankey requires a specific data structure.
Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
This is different from other chart types in Recharts, which accept arbitrary data.`,name:"data",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!0,tags:{example:`nodes: [
  { name: 'Visit' },
  { name: 'Direct-Favourite' },
  { name: 'Page-Click' },
  { name: 'Detail-Favourite' },
  { name: 'Lost' },
],
links: [
  { source: 0, target: 1, value: 3728.3 },
  { source: 0, target: 2, value: 354170 },
  { source: 2, target: 3, value: 62429 },
  { source: 2, target: 4, value: 291741 },
],`},type:{name:"SankeyData"}},nodePadding:{defaultValue:{value:"10"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The padding between the nodes",name:"nodePadding",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"10"},type:{name:"number"}},nodeWidth:{defaultValue:{value:"10"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The width of node",name:"nodeWidth",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"10"},type:{name:"number"}},linkCurvature:{defaultValue:{value:"0.5"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The curvature of width",name:"linkCurvature",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"0.5"},type:{name:"number"}},iterations:{defaultValue:{value:"32"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The number of the iterations between the links",name:"iterations",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"32"},type:{name:"number"}},node:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`If set an object, the option is the configuration of nodes.
If set a React element, the option is the custom react element of drawing the nodes.`,name:"node",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{example:`<Sankey node={MyCustomComponent} />
<Sankey node={{stroke: #77c878, strokeWidth: 2}} />`},type:{name:"SankeyNodeOptions"}},link:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`If set an object, the option is the configuration of links.
If set a React element, the option is the custom react element of drawing the links.`,name:"link",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{example:`<Sankey link={MyCustomComponent} />
<Sankey link={{ fill: #77c878 }} />`},type:{name:"SankeyLinkOptions"}},style:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"",name:"style",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"CSSProperties"}},className:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"",name:"className",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"string"}},margin:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"Empty space around the container.",name:"margin",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{defaultValue:'{"top":5,"right":5,"bottom":5,"left":5}'},type:{name:"Partial<Margin>"}},onClick:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The customized event handler of click on the area in this group",name:"onClick",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"((item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement, MouseEvent>) => void)"}},onMouseEnter:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The customized event handler of mouseenter on the area in this group",name:"onMouseEnter",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"((item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The customized event handler of mouseleave on the area in this group",name:"onMouseLeave",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"((item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement, MouseEvent>) => void)"}},sort:{defaultValue:{value:"true"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",name:"sort",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},verticalAlign:{defaultValue:{value:"'justify'"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",name:"verticalAlign",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"'justify'"},type:{name:"enum",raw:"SankeyVerticalAlign",value:[{value:'"top"'},{value:'"justify"'}]}},align:{defaultValue:{value:"'justify'"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",name:"align",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"'justify'"},type:{name:"enum",raw:'"left" | "justify"',value:[{value:'"left"'},{value:'"justify"'}]}},throttleDelay:{defaultValue:null,declarations:[{fileName:"recharts/src/util/types.ts",name:"EventThrottlingProps"}],description:"Decides the time interval to throttle events.\nOnly events defined in `throttledEvents` prop are throttled.\nAll other events are executed immediately/synchronously.\n\nOptions:\n- `number`: the time interval in milliseconds\n- `'raf'`: use requestAnimationFrame to schedule updates.",name:"throttleDelay",parent:{fileName:"recharts/src/util/types.ts",name:"EventThrottlingProps"},required:!1,tags:{defaultValue:"'raf'"},type:{name:'number | "raf"'}},throttledEvents:{defaultValue:null,declarations:[{fileName:"recharts/src/util/types.ts",name:"EventThrottlingProps"}],description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.`,name:"throttledEvents",parent:{fileName:"recharts/src/util/types.ts",name:"EventThrottlingProps"},required:!1,tags:{defaultValue:'["mousemove","touchmove","pointermove","scroll","wheel"]'},type:{name:'"all" | readonly (keyof GlobalEventHandlersEventMap)[]'}}},tags:{consumes:"ResponsiveContainerContext",provides:"TooltipEntrySettings"}}}catch{}const A={nodes:[{name:"Visit"},{name:"Direct-Favourite"},{name:"Page-Click"},{name:"Detail-Favourite"},{name:"Lost"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:291741},{source:2,target:4,value:62429}]},oe={nodes:[{name:"Income"},{name:"Budget"},{name:"Investment"},{name:"Real Estate"},{name:"Crypto"},{name:"Stocks & Funds"},{name:"Saving"},{name:"Scpi"},{name:"BTC"},{name:"ETH"},{name:"SOL"},{name:"Housing"},{name:"Food"},{name:"Rent"},{name:"Utility"},{name:"Mortgage"},{name:"Groceries"},{name:"Delivery"},{name:"Restaurant"}],links:[{source:0,target:1,value:8500},{source:1,target:2,value:2300},{source:1,target:3,value:400},{source:1,target:4,value:1250},{source:2,target:5,value:1800},{source:2,target:6,value:500},{source:3,target:7,value:400},{source:4,target:8,value:500},{source:4,target:9,value:500},{source:4,target:10,value:250},{source:1,target:11,value:3384},{source:1,target:12,value:800},{source:11,target:13,value:1234},{source:11,target:14,value:150},{source:11,target:15,value:2e3},{source:12,target:16,value:450},{source:12,target:17,value:200},{source:12,target:18,value:150}]},X={align:{description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",table:{type:{summary:'"justify" | "left"'},category:"General",defaultValue:{summary:"justify"}},defaultValue:"justify"},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},data:{description:`The source data, including the array of nodes, and the relationships, represented by links.

Note that Sankey requires a specific data structure.
Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
This is different from other chart types in Recharts, which accept arbitrary data.`,table:{type:{summary:"SankeyData"},category:"General"}},dataKey:{description:`dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.

Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
the value of each link is directly taken from the 'value' property of the link objects.`,table:{type:{summary:"Function | number | string"},category:"General",defaultValue:{summary:"value"}},defaultValue:"value"},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}},iterations:{description:"The number of the iterations between the links",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"32"}},defaultValue:32},link:{description:`If set an object, the option is the configuration of links.
If set a React element, the option is the custom react element of drawing the links.`,table:{type:{summary:"Function | React.SVGProps<SVGPathElement> | ReactNode"},category:"General"}},linkCurvature:{description:"The curvature of width",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0.5"}},defaultValue:.5},margin:{description:"Empty space around the container.",table:{type:{summary:"Partial<Margin>"},category:"General",defaultValue:{summary:'{"top":5,"right":5,"bottom":5,"left":5}'}},defaultValue:{top:5,right:5,bottom:5,left:5}},nameKey:{description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.",table:{type:{summary:"Function | number | string"},category:"General",defaultValue:{summary:"name"}},defaultValue:"name"},node:{description:`If set an object, the option is the configuration of nodes.
If set a React element, the option is the custom react element of drawing the nodes.`,table:{type:{summary:"Function | Props | ReactNode"},category:"General"}},nodePadding:{description:"The padding between the nodes",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"10"}},defaultValue:10},nodeWidth:{description:"The width of node",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"10"}},defaultValue:10},onClick:{description:"The customized event handler of click on the area in this group",table:{type:{summary:"Function"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the area in this group",table:{type:{summary:"Function"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the area in this group",table:{type:{summary:"Function"},category:"Events"}},sort:{description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},style:{table:{type:{summary:"React.CSSProperties"},category:"Style"}},throttleDelay:{description:"Decides the time interval to throttle events.\nOnly events defined in `throttledEvents` prop are throttled.\nAll other events are executed immediately/synchronously.\n\nOptions:\n- `number`: the time interval in milliseconds\n- `'raf'`: use requestAnimationFrame to schedule updates.",table:{type:{summary:'"raf" | number'},category:"General",defaultValue:{summary:"raf"}},defaultValue:"raf"},throttledEvents:{description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.`,table:{type:{summary:'"all" | Array<keyof GlobalEventHandlersEventMap>'},category:"General",defaultValue:{summary:'["mousemove","touchmove","pointermove","scroll","wheel"]'}},defaultValue:["mousemove","touchmove","pointermove","scroll","wheel"]},verticalAlign:{description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",table:{type:{summary:'"justify" | "top"'},category:"General",defaultValue:{summary:"justify"}},defaultValue:"justify"},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}}},Pt={argTypes:X,component:C},T={name:"Simple",render:e=>x.createElement(z,{width:"100%",height:400},x.createElement(C,{data:A,...e},x.createElement(ze,null))),args:{...F(X),data:A}},j={render:e=>x.createElement(z,{width:"100%",height:400},x.createElement(C,{data:A,...e})),args:{...F(X),data:A,nodeWidth:10,nodePadding:60,height:500,width:960}},I={render:e=>{const n=["#3C898E","#486DF0","#6F50E5"],o=t=>x.createElement("rect",{x:t.x+4,y:t.y-2,width:t.width-8,height:t.height+4,fill:n[t.payload.depth%n.length],rx:2.5}),s=t=>x.createElement("g",null,x.createElement("path",{d:`
  M${t.sourceX},${t.sourceY}
  C${t.sourceControlX},${t.sourceY} ${t.targetControlX},${t.targetY} ${t.targetX},${t.targetY}`,fill:"none",stroke:n[t.payload.source.depth%n.length],strokeOpacity:.4,strokeWidth:t.linkWidth,strokeLinecap:"butt"}),x.createElement("foreignObject",{x:t.sourceX,y:t.targetY-t.linkWidth/2,width:Math.max(t.targetX,t.sourceX)-Math.min(t.targetX,t.sourceX),height:t.linkWidth,style:{overflow:"visible"}},x.createElement("div",{style:{boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%",height:"100%",overflow:"visible",padding:"0.5em",gap:8}},x.createElement("div",{style:{fontSize:10,fontFamily:"sans-serif",textAlign:"center",backgroundColor:"#f1f5fe80",padding:"0.25em 0.5em",borderRadius:4,position:"relative",zIndex:1}},t.payload.target.name?`${t.payload.target.name}: `:"",t.payload.value," €"))));return x.createElement(z,{width:"100%",height:400},x.createElement(C,{data:oe,node:o,link:s,...e}))},args:{...F(X),data:oe,nodeWidth:16,nodePadding:14,height:500,width:960,sort:!1,margin:{top:20,left:20,right:20,bottom:20}}};var se,ie,le;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args}>
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: nodeLinkData
  }
}`,...(le=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,de;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args} />
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: nodeLinkData,
    nodeWidth: 10,
    nodePadding: 60,
    height: 500,
    width: 960
  }
}`,...(de=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var he,me,ye;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: (args: Args) => {
    const colors = ['#3C898E', '#486DF0', '#6F50E5'];
    type CustomNodePayload = {
      name: string;
      sourceNodes: number[];
      sourceLinks: number[];
      targetLinks: number[];
      targetNodes: number[];
      value: number;
      depth: number;
      x: number;
      dx: number;
      y: number;
      dy: number;
    };
    const CustomNode = (props: NodeProps): React.ReactElement => {
      return <rect x={props.x + 4} y={props.y - 2} width={props.width - 8} height={props.height + 4} fill={colors[props.payload.depth % colors.length]} rx={2.5} />;
    };
    type CustomLinkPayload = {
      source: CustomNodePayload;
      target: CustomNodePayload;
      value: number;
      dy: number;
      sy: number;
      ty: number;
    };
    const CustomLink = (props: {
      sourceX: number;
      targetX: number;
      sourceY: number;
      targetY: number;
      sourceControlX: number;
      targetControlX: number;
      sourceRelativeY: number;
      targetRelativeY: number;
      linkWidth: number;
      index: number;
      payload: CustomLinkPayload;
    }) => {
      return <g>
          <path d={\`
  M\${props.sourceX},\${props.sourceY}
  C\${props.sourceControlX},\${props.sourceY} \${props.targetControlX},\${props.targetY} \${props.targetX},\${props.targetY}\`} fill="none" stroke={colors[props.payload.source.depth % colors.length]} strokeOpacity={0.4} strokeWidth={props.linkWidth} strokeLinecap="butt" />
          <foreignObject x={props.sourceX} y={props.targetY - props.linkWidth / 2} width={Math.max(props.targetX, props.sourceX) - Math.min(props.targetX, props.sourceX)} height={props.linkWidth} style={{
          overflow: 'visible'
        }}>
            <div style={{
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            height: '100%',
            overflow: 'visible',
            padding: '0.5em',
            gap: 8
          }}>
              <div style={{
              fontSize: 10,
              fontFamily: 'sans-serif',
              textAlign: 'center',
              backgroundColor: '#f1f5fe80',
              padding: '0.25em 0.5em',
              borderRadius: 4,
              position: 'relative',
              zIndex: 1
            }}>
                {props.payload.target.name ? \`\${props.payload.target.name}: \` : ''}
                {props.payload.value}
                &nbsp;€
              </div>
            </div>
          </foreignObject>
        </g>;
    };
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={complexNodeLinkData} node={CustomNode} link={CustomLink} {...args} />
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: complexNodeLinkData,
    nodeWidth: 16,
    nodePadding: 14,
    height: 500,
    width: 960,
    sort: false,
    margin: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20
    }
  }
}`,...(ye=(me=I.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};const wt=["API","Customized","CustomNodeAndLink"],Ot=Object.freeze(Object.defineProperty({__proto__:null,API:T,CustomNodeAndLink:I,Customized:j,__namedExportsOrder:wt,default:Pt},Symbol.toStringTag,{value:"Module"}));export{T as A,Ot as C};
