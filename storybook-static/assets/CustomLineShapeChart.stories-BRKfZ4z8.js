import{R as t}from"./iframe-CGL4wxKn.js";import{R as D,l as p}from"./zIndexSlice-099KjRSH.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BiRcKk-g.js";import{C as M}from"./CartesianGrid-BlMJaVi_.js";import{X as $}from"./XAxis-wodCK_Hv.js";import{Y as I}from"./YAxis-EQaJTxBr.js";import{L as O}from"./Legend-A616B0nC.js";import{T as W}from"./Tooltip-D0wqI5a7.js";import{L as f}from"./Line-rl6ls2qQ.js";import{C as X}from"./Curve-CHOREDeS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-J1iMbWnO.js";import"./throttle-DUUYxzVG.js";import"./index-BZoAXlEM.js";import"./index-CB__xCeL.js";import"./RechartsWrapper-g5knetkm.js";import"./axisSelectors-BMd3ki3_.js";import"./polarAxisSelectors-DW8rryyn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-o5WrViM1.js";import"./index-BG2Ge-ql.js";import"./index-XB5jojxJ.js";import"./renderedTicksSlice-CQkNy6Mm.js";import"./index-D3e94DhQ.js";import"./fillDefinitions-Vr_akuqj.js";import"./CartesianChart-Co-UKN43.js";import"./chartDataContext-B0uy7sqw.js";import"./CategoricalChart-rWqih0Ao.js";import"./CartesianAxis-DY7911f8.js";import"./Layer-Ch4A95GV.js";import"./Text-D29ZLY8y.js";import"./ZIndexLayer-CN_fYC_z.js";import"./Label-gT4vohqn.js";import"./types-Blkz6f-Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Bc9bgKwE.js";import"./symbol-VmBVfDDj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-mRlZC86j.js";import"./uniqBy-DDFgRhke.js";import"./iteratee-CuFGotjJ.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-D89zGJBE.js";import"./Cross-C2vRpyhq.js";import"./Rectangle-BTmZooah.js";import"./util-Dxo8gN5i.js";import"./Sector-BeiTqu4h.js";import"./dataEntryStyles-CVCXFzjz.js";import"./ActivePoints-zAqYXl3v.js";import"./Dot-Dqevxc0i.js";import"./activeStyles-BKPzxJKn.js";import"./ErrorBarContext-CSfn8gVg.js";import"./SetGraphicalItem-DNJWjlHF.js";import"./getRadiusAndStrokeWidthFromDot-CxKHEBK2.js";import"./ActiveShapeUtils-B2rQYcmX.js";import"./useEffectiveDataKey-SnOfofuT.js";import"./step-GQgXeu2E.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
