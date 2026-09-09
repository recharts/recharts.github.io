import{a as t}from"./iframe-3mrIZkil.js";import{a as p}from"./isWellBehavedNumber-ZyDhg4rS.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as K}from"./utils-ePvtT4un.js";import{p as R}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B-ElDAMV.js";import{R as T}from"./zIndexSlice-L3ODJxG9.js";import{C as M}from"./CartesianGrid-C4bUFIHm.js";import{X as $}from"./XAxis-D6OSWIjP.js";import{Y as I}from"./YAxis-L6Kj6NBD.js";import{L as O}from"./Legend-7PHxIgr_.js";import{T as W}from"./Tooltip-DR2XYmSX.js";import{L as C}from"./Line-C5JoJcVf.js";import{C as X}from"./Curve-Bw-gimBr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-i-Y4kJTh.js";import"./RechartsWrapper-DwVI4RN7.js";import"./axisSelectors-DAOLJeWY.js";import"./throttle-rESuvk1I.js";import"./index-BXM7Ne4y.js";import"./index-CDwIhtzp.js";import"./d3-scale-CguR2U2N.js";import"./index-BtaPmQxv.js";import"./index-BdkN9O5O.js";import"./renderedTicksSlice-DYEa3gne.js";import"./index-pFwFQ5O8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CUvaXipt.js";import"./chartDataContext-FTM0Yeif.js";import"./CategoricalChart-D95OMo3E.js";import"./CartesianAxis-BlnQQ3GL.js";import"./Layer-DjZWmALl.js";import"./Text-DUYy6Shz.js";import"./DOMUtils-CXxLAhGm.js";import"./useId-Cxwt81yN.js";import"./useBackwardsCompatibleTheme-lR8vi8zs.js";import"./Label-BIqKgU55.js";import"./ZIndexLayer-D4cc4mD4.js";import"./types-8JRxRnLp.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B-x4p4sy.js";import"./symbol-Dr6L5N19.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DGkGm79j.js";import"./uniqBy-CSyaLent.js";import"./iteratee-yW488fbm.js";import"./useAnimationId-BnnXfXw0.js";import"./Cross-DJFcvGJF.js";import"./Rectangle-BDa16x25.js";import"./util-Dxo8gN5i.js";import"./Sector-CV6xDlC_.js";import"./AnimatedItems-DhXJ9Je_.js";import"./ActivePoints-DxgGQQ1D.js";import"./Dot-Sx0Kvb2o.js";import"./RegisterGraphicalItemId-BDB0ngzS.js";import"./ErrorBarContext-NAHggWz8.js";import"./GraphicalItemClipPath-Bb5lUrgq.js";import"./SetGraphicalItem-9-RZ0mcl.js";import"./getRadiusAndStrokeWidthFromDot-DN4z1IWE.js";import"./ActiveShapeUtils-BBpy3JCJ.js";import"./useGraphicalItemIdentity-BcKg6UBn.js";import"./step-DsELI93G.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:R,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
