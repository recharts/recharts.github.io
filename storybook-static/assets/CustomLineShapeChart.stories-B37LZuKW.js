import{a as t}from"./iframe-7Yqq7fCu.js";import{a as p}from"./isWellBehavedNumber-3XLFrVwb.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as R}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C-KEEQ7Q.js";import{R as T}from"./zIndexSlice-Clo6-Yyn.js";import{C as M}from"./CartesianGrid-DdQBLXg1.js";import{X as $}from"./XAxis-1FKbFMeO.js";import{Y as I}from"./YAxis-Cy7XE4j-.js";import{L as O}from"./Legend-B0A2aPD8.js";import{T as W}from"./Tooltip-B_7JlKfR.js";import{L as C}from"./Line-y-Q91fXJ.js";import{C as X}from"./Curve-Bx49RMW5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DPH1JWez.js";import"./RechartsWrapper-BmN3AX4B.js";import"./axisSelectors-TNeFeRD0.js";import"./throttle-CPS_vYKA.js";import"./index-BP89nsqC.js";import"./index-Bvs3nnJ3.js";import"./d3-scale-BucieWce.js";import"./index-CMyPnnGY.js";import"./index-CIvsYy-Z.js";import"./renderedTicksSlice-C7nR0wuC.js";import"./index-BmRJq5r2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7Vexiif.js";import"./chartDataContext-BDajETE7.js";import"./CategoricalChart-DGs6T5PE.js";import"./CartesianAxis-Tr4fBNdd.js";import"./Layer-B4eFX6wr.js";import"./Text-CBP65qj4.js";import"./DOMUtils-DFLenfZw.js";import"./useId-CQKco8O5.js";import"./useBackwardsCompatibleTheme-DsG9X6Al.js";import"./Label-BeKnll5A.js";import"./ZIndexLayer-CY2z0VDd.js";import"./types-BLNI4yrZ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CRebEb5d.js";import"./symbol-TqHkyfS6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVlFUWt-.js";import"./uniqBy-CgUI3qsR.js";import"./iteratee-DqkESnyS.js";import"./useAnimationId-OFL2L8Zq.js";import"./Cross-BBg7bcb6.js";import"./Rectangle-D0MukTZZ.js";import"./util-Dxo8gN5i.js";import"./Sector-BMtiqe0D.js";import"./AnimatedItems-BlURIwD6.js";import"./ActivePoints-Df4Z0MND.js";import"./Dot-B0z70aRe.js";import"./RegisterGraphicalItemId-CBb6S0jv.js";import"./ErrorBarContext-B86Z1RsK.js";import"./GraphicalItemClipPath-ElSd1RxM.js";import"./SetGraphicalItem-DDBsqrXQ.js";import"./getRadiusAndStrokeWidthFromDot-BA9-tDMT.js";import"./ActiveShapeUtils-RlmFljs4.js";import"./useGraphicalItemIdentity-C_cMOVZX.js";import"./step-CY_23fua.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:R,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
