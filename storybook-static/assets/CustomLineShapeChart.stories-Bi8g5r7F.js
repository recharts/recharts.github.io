import{e as t}from"./iframe-oUl0Edsa.js";import{R as D,i as s}from"./arrayEqualityCheck-DO0IznND.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DGoarcLp.js";import{C as K}from"./CartesianGrid-Di7JZSsJ.js";import{X as T}from"./XAxis-CkmpPqZg.js";import{Y as M}from"./YAxis-B5DZSFg9.js";import{L as $}from"./Legend-hwbRD3v4.js";import{T as O}from"./Tooltip-CTmktQmX.js";import{L as C}from"./Line-WQvpZLVg.js";import{R as W}from"./RechartsHookInspector-DzCPY6-s.js";import{C as X}from"./Curve-DW9fdXku.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAhGbC_6.js";import"./immer-B4_TuAzJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hGE8ryIc.js";import"./index-BpdNigRW.js";import"./hooks-BR4mxfYm.js";import"./axisSelectors-oQCI-_oE.js";import"./d3-scale-vJidlWzy.js";import"./zIndexSlice-DaoY5asK.js";import"./renderedTicksSlice-BwLnTfQZ.js";import"./CartesianChart-QkTvUAzL.js";import"./chartDataContext-0PCCbTAT.js";import"./CategoricalChart-D3ZmkNqf.js";import"./CartesianAxis-DHjsb2H9.js";import"./Layer-D8QuYoPE.js";import"./Text-CIurUiqp.js";import"./DOMUtils-QcPDFTXM.js";import"./Label-CQcshbP4.js";import"./ZIndexLayer-Dv9xqvVt.js";import"./types-DJAvwsGW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Byia_tNj.js";import"./symbol-BAzjQ5Pa.js";import"./step-DDhJKU_a.js";import"./useElementOffset-Dmkt4__O.js";import"./uniqBy-qeo26kI_.js";import"./iteratee-a1Bwo6uA.js";import"./useAnimationId-Ce3W7lPK.js";import"./Cross-BZQ8mnai.js";import"./Rectangle-CWqU2ttX.js";import"./Sector-CpUI0G8W.js";import"./ReactUtils-DtRK-XUg.js";import"./ActivePoints-BgKB9eRs.js";import"./Dot-BoytNhYo.js";import"./RegisterGraphicalItemId-D0Ds9Sqy.js";import"./ErrorBarContext-B_Z1VglQ.js";import"./GraphicalItemClipPath-BI0ffFR3.js";import"./SetGraphicalItem-DwmwyDT6.js";import"./getRadiusAndStrokeWidthFromDot-CThWr5VZ.js";import"./ActiveShapeUtils-CRXMg51J.js";import"./isPlainObject-kds9_JFm.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-D_tQTiyy.js";import"./index-CrxHXiCq.js";import"./ChartSizeDimensions-BcXpSJ4G.js";import"./OffsetShower-CWs6Hx-m.js";import"./PlotAreaShower-CXnVCFpH.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
