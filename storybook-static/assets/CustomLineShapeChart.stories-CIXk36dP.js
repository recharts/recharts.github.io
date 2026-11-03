import{R as t}from"./iframe-m3pGEKfa.js";import{R as D,l as p}from"./zIndexSlice-CiEd_T_p.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-x4yLBDfG.js";import{C as M}from"./CartesianGrid-SQ0kUj6g.js";import{X as $}from"./XAxis-BaVE9EFQ.js";import{Y as I}from"./YAxis-swa8vM-B.js";import{L as O}from"./Legend-CjIsYFiG.js";import{T as W}from"./Tooltip-BD7v7yEF.js";import{L as f}from"./Line-DRnRZKUl.js";import{C as X}from"./Curve-C8JVR8tL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-1_D7OVbj.js";import"./throttle-C3qsSQmj.js";import"./index-Bk15LyvO.js";import"./index-B2FvYHPH.js";import"./RechartsWrapper-B1DLlNjF.js";import"./axisSelectors-BuHzQOVj.js";import"./polarAxisSelectors-BjeSYPTx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-COa--qib.js";import"./index-CwIe0M5T.js";import"./index-CVYSO0b0.js";import"./renderedTicksSlice-riwhMnsC.js";import"./index-D_gkyxlq.js";import"./fillDefinitions-gM0_oynF.js";import"./CartesianChart-CVVFQDxq.js";import"./ZIndexPortal-CX0wxjxU.js";import"./CategoricalChart-Cbbud_Be.js";import"./CartesianAxis-4cS3xnQT.js";import"./Layer-CWJJdVGN.js";import"./Text-C8slSLt5.js";import"./DOMUtils-CgNaQgzY.js";import"./ZIndexLayer-dW6YEDVz.js";import"./Label-BWwlrPxZ.js";import"./types-NW0KOpFv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C8vox5bW.js";import"./symbol-QU-hqetJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ON2NhW56.js";import"./uniqBy-D3YFn-Gt.js";import"./iteratee-CrOyoWYC.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CZ85B9in.js";import"./Cross-BW0Pnu8r.js";import"./Rectangle-BcfuQLVE.js";import"./util-Dxo8gN5i.js";import"./Sector-BXQzfWqs.js";import"./LabelList-DpjRmARQ.js";import"./ActivePoints-BT3v0Z1P.js";import"./Dot-Bo6Iz36c.js";import"./activeStyles-Bu9SIE65.js";import"./dataEntryStyles-D1ArbIJ7.js";import"./ErrorBarContext-CKCqOaVD.js";import"./SetGraphicalItem-Cdf126o-.js";import"./getRadiusAndStrokeWidthFromDot-fp1uavHZ.js";import"./ActiveShapeUtils-hQzu6D3o.js";import"./useEffectiveDataKey-DabJGTLc.js";import"./step-JD5lrPB_.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
