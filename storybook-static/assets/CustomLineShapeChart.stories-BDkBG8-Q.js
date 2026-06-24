import{R as t}from"./iframe-GMBZ_Ugx.js";import{a as p}from"./isWellBehavedNumber-CHbHfbVW.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DKQ-hGYc.js";import{R as T}from"./zIndexSlice-CaGWsk0_.js";import{C as M}from"./CartesianGrid-Bfv7sfJd.js";import{X as $}from"./XAxis-CWBxARwY.js";import{Y as I}from"./YAxis-B3CJ0t9T.js";import{L as O}from"./Legend-L5x1DYLc.js";import{T as W}from"./Tooltip-DqLYQ53s.js";import{L as C}from"./Line-DW-frjCE.js";import{C as X}from"./Curve-DWsbrokm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Gz1PRcGr.js";import"./resolveDefaultProps-CaBwGHvy.js";import"./RechartsWrapper-B0SxcSOH.js";import"./index-B_gRMuPi.js";import"./index-Gz1Qo9An.js";import"./index-CWyz9jhc.js";import"./index-BJeMs6TD.js";import"./immer-8AAf0mWE.js";import"./renderedTicksSlice-CW6yCQrF.js";import"./axisSelectors-CTNvdk-R.js";import"./d3-scale-DrE5OPOC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rtXvtu0b.js";import"./chartDataContext-CUGtjOSs.js";import"./CategoricalChart-CElM-v-_.js";import"./CartesianAxis-DMU5FiQJ.js";import"./Layer-BXGTwaUB.js";import"./Text-xcPGheUs.js";import"./DOMUtils-BjtWwWtu.js";import"./Label-BaqULLaE.js";import"./ZIndexLayer-DxP6hcPK.js";import"./types-M4hw7OKT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Symbols-DeSiMhF3.js";import"./symbol-Ds44gbWS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CI5bYttM.js";import"./uniqBy-RjHfO3JH.js";import"./iteratee-CA-p00eZ.js";import"./useAnimationId-DgxmZKXq.js";import"./Cross-Xi6mjM4Q.js";import"./Rectangle-CaFvPD3t.js";import"./util-Dxo8gN5i.js";import"./Sector-9EfWoqS9.js";import"./AnimatedItems-NvoGhX2w.js";import"./ActivePoints-PmkOapvV.js";import"./Dot-DN0s5ohL.js";import"./RegisterGraphicalItemId-Dh_QLlB5.js";import"./ErrorBarContext-C1t_9iin.js";import"./GraphicalItemClipPath-DlEa2W6_.js";import"./SetGraphicalItem-CZxAdJP0.js";import"./getRadiusAndStrokeWidthFromDot-Bfj8OsGQ.js";import"./ActiveShapeUtils-CK3PQT9Y.js";import"./step-D2IVGUQU.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
