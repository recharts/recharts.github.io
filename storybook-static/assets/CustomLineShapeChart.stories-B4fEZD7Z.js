import{e as t}from"./iframe-CKoXL-7H.js";import{R as D,n as p}from"./arrayEqualityCheck-GexdJw_D.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-BbhAuPas.js";import{C as K}from"./CartesianGrid-NqBSLHxo.js";import{X as T}from"./XAxis-rLQI09xS.js";import{Y as M}from"./YAxis-RWI4s0em.js";import{L as $}from"./Legend-lNiWfytJ.js";import{T as O}from"./Tooltip-xGWrVpZA.js";import{L as C}from"./Line-B6AqF2pF.js";import{R as W}from"./RechartsHookInspector-CMD5YE2l.js";import{C as X}from"./Curve-CYqbtLFF.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BaEbAQrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CSLBjixG.js";import"./hooks-Wghpb3Lr.js";import"./axisSelectors-DPsIzSXr.js";import"./zIndexSlice-muSoLd76.js";import"./CartesianChart-BnHhxgzL.js";import"./chartDataContext-Bkp8uQCT.js";import"./CategoricalChart-Nf_fZ3uc.js";import"./CartesianAxis-DXu08t8h.js";import"./Layer-CVCSBl5u.js";import"./Text-BUTkcAxm.js";import"./DOMUtils-BXsvg6Zu.js";import"./Label-Cl7hxCC5.js";import"./ZIndexLayer-0nKnHyxR.js";import"./types-CIdldEzr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D2digf2k.js";import"./useElementOffset-B4fkln4G.js";import"./iteratee-DT9v8GkJ.js";import"./Cross-BFexLb6d.js";import"./Rectangle-BLY94iSC.js";import"./useAnimationId-2NBy4alx.js";import"./Sector-D9S-bODI.js";import"./ReactUtils-DZNkeyHe.js";import"./ActivePoints-0vYfh0ZR.js";import"./Dot-D5rSU5PW.js";import"./RegisterGraphicalItemId-Dd6TmGbZ.js";import"./ErrorBarContext-CfkXyv19.js";import"./GraphicalItemClipPath-CoiOEHHo.js";import"./SetGraphicalItem-B8zEjMN_.js";import"./getRadiusAndStrokeWidthFromDot-Dh2Py107.js";import"./ActiveShapeUtils-CJx1zFrR.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-NNoDFDG-.js";import"./index-DasXKjzD.js";import"./ChartSizeDimensions-CbnBpjpJ.js";import"./OffsetShower-BeXAkU7y.js";import"./PlotAreaShower-otv1tPFG.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
