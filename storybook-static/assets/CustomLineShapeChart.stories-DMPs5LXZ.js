import{R as t}from"./iframe-pl42v7Eu.js";import{a as p}from"./isWellBehavedNumber-B6cHM4DS.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-M_6qFPCU.js";import{R as T}from"./zIndexSlice-D6Ury5DQ.js";import{C as M}from"./CartesianGrid-COBbHqLx.js";import{X as $}from"./XAxis-0siPSpiK.js";import{Y as I}from"./YAxis-CTEyBNt3.js";import{L as O}from"./Legend-CymuCPFQ.js";import{T as W}from"./Tooltip-DSTzYmHX.js";import{L as C}from"./Line-BLy4f1Fi.js";import{C as X}from"./Curve-V8Cs5yUz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Ci1Zslo5.js";import"./resolveDefaultProps-BgT3I9Pa.js";import"./RechartsWrapper-ByLHuOcy.js";import"./index-BTDreE9O.js";import"./index-Cmb4UkZ_.js";import"./index-Df70QOpj.js";import"./index-ntLeohj2.js";import"./immer-C_PxOxT8.js";import"./renderedTicksSlice-nJaW__V7.js";import"./axisSelectors-49otWNoQ.js";import"./d3-scale-EDGtIYyd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CkSibwuY.js";import"./chartDataContext-BUPOQjbb.js";import"./CategoricalChart-BDx0yEeS.js";import"./CartesianAxis-Dyaa3QOt.js";import"./Layer-DIETCOs-.js";import"./Text-DHqN6Wmv.js";import"./DOMUtils-C0435NEl.js";import"./Label-jH0IUTIN.js";import"./ZIndexLayer-DHOvoudh.js";import"./types-Cax0x9Pi.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Symbols-8zp00i_z.js";import"./symbol-Dq8p-R2M.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Btpwl7wC.js";import"./uniqBy-DtZ7esPP.js";import"./iteratee-OzssNQ-a.js";import"./useAnimationId-bxLMfI7c.js";import"./Cross-CJ4qchKv.js";import"./Rectangle-Dhsi5AWp.js";import"./util-Dxo8gN5i.js";import"./Sector-BMZf45Ok.js";import"./AnimatedItems-wt0_sn45.js";import"./ActivePoints-sxoM3gYg.js";import"./Dot-BMK0KkKw.js";import"./RegisterGraphicalItemId-Rj2Lqe9e.js";import"./ErrorBarContext-BQo0CyvO.js";import"./GraphicalItemClipPath-CviR7UKP.js";import"./SetGraphicalItem-BX03rWwK.js";import"./getRadiusAndStrokeWidthFromDot-5IlnILBr.js";import"./ActiveShapeUtils-DL8AZGaA.js";import"./step-BQEtcvlA.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
