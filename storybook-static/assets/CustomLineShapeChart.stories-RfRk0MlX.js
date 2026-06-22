import{R as t}from"./iframe-Clh6Am28.js";import{a as p}from"./isWellBehavedNumber-BTdz8jY9.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CKx9vK2l.js";import{R as T}from"./zIndexSlice-C8WH1sbl.js";import{C as M}from"./CartesianGrid-BYNjs-5G.js";import{X as $}from"./XAxis-CX5kJZWB.js";import{Y as I}from"./YAxis-Bbuu0E_L.js";import{L as O}from"./Legend-d_m8qdNU.js";import{T as W}from"./Tooltip-DcVhVaK_.js";import{L as C}from"./Line-DpvpjAPB.js";import{C as X}from"./Curve-CCuEPsAe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-ReXw4Xs6.js";import"./resolveDefaultProps-Cp4jCd2q.js";import"./RechartsWrapper-kLRmp8Nc.js";import"./index-B67Qu5hK.js";import"./index-81KY_DK_.js";import"./index-mbhNu375.js";import"./index-D983Ac__.js";import"./immer-CCKY-2O_.js";import"./renderedTicksSlice--OmlTIq-.js";import"./axisSelectors-CtcLf7W7.js";import"./d3-scale-BSnqKxuH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DYzbJdNk.js";import"./chartDataContext-BpoRQBsX.js";import"./CategoricalChart-ISWmGPOG.js";import"./CartesianAxis-EoQ_2pVo.js";import"./Layer-rOqvObKk.js";import"./Text-X5OcHqR4.js";import"./DOMUtils-CtdcYe6Z.js";import"./Label-gvCBOhLE.js";import"./ZIndexLayer-4xKONL83.js";import"./types-Clw2FxQC.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Symbols-Cq5S2wug.js";import"./symbol-Dcr2-_AE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BidkkjV3.js";import"./uniqBy-BKbVvzyr.js";import"./iteratee-CWb0-VE6.js";import"./useAnimationId-CWbLQsSM.js";import"./Cross-tf1sjMsM.js";import"./Rectangle-CZG00UlM.js";import"./util-Dxo8gN5i.js";import"./Sector-Z4utyPCe.js";import"./AnimatedItems-B05rhmS4.js";import"./ActivePoints-DadMhNWA.js";import"./Dot-CTX7NV8r.js";import"./RegisterGraphicalItemId-C0MecWm_.js";import"./ErrorBarContext-DAn4MkTm.js";import"./GraphicalItemClipPath-Ngq7bur3.js";import"./SetGraphicalItem-BUpAV2uu.js";import"./getRadiusAndStrokeWidthFromDot-BP39ATEv.js";import"./ActiveShapeUtils-BsSwQSYp.js";import"./step-Dyxzv1f8.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
