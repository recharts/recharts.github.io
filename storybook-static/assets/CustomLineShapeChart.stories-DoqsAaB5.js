import{e as t}from"./iframe-eaOsasXA.js";import{R as D,i as s}from"./arrayEqualityCheck-CMs0gYkZ.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CP1DuSNU.js";import{C as K}from"./CartesianGrid-XpHpCMJI.js";import{X as T}from"./XAxis-3ftlLggt.js";import{Y as M}from"./YAxis-D0SSpyRh.js";import{L as $}from"./Legend-Zi18hU_C.js";import{T as O}from"./Tooltip-BdXqARe_.js";import{L as C}from"./Line-CuhRYagr.js";import{R as W}from"./RechartsHookInspector-CfQxcoqC.js";import{C as X}from"./Curve-BpLwOdP7.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRN_chMz.js";import"./immer-h0oz4gDz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kQIwCL0D.js";import"./index-CBq7QNMe.js";import"./hooks-DkQXEwbK.js";import"./axisSelectors-rZ1oBaef.js";import"./d3-scale-fyi29fM7.js";import"./zIndexSlice-CQVRJFSN.js";import"./renderedTicksSlice-HUT3i4LQ.js";import"./CartesianChart-DqLib-3F.js";import"./chartDataContext-BZaY1x-g.js";import"./CategoricalChart-BHzek6ba.js";import"./CartesianAxis-QrZ9YuOP.js";import"./Layer-CEQ15rDn.js";import"./Text-CS5oLB7f.js";import"./DOMUtils-DKDW8odg.js";import"./Label-CM17nvk9.js";import"./ZIndexLayer-4Bmx0L-z.js";import"./types-DVEQRe7O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DwawNnsL.js";import"./symbol-DkR6dB45.js";import"./step-wTrvujLP.js";import"./useElementOffset-CA1reWi7.js";import"./uniqBy-DxeT86xP.js";import"./iteratee-GUobkNTQ.js";import"./useAnimationId-Cipx0nDt.js";import"./Cross-Bm5d82mo.js";import"./Rectangle-DCXniG-Q.js";import"./Sector-DlrpmWZs.js";import"./ReactUtils-rQN1ow78.js";import"./ActivePoints-_V2GyU66.js";import"./Dot-CL5p6Fms.js";import"./RegisterGraphicalItemId-1T1LHaRb.js";import"./ErrorBarContext-BRJpaXpn.js";import"./GraphicalItemClipPath-DHbALYaQ.js";import"./SetGraphicalItem-CI6Uk2ug.js";import"./getRadiusAndStrokeWidthFromDot-Cifjzjy_.js";import"./ActiveShapeUtils-DuB5RKi8.js";import"./isPlainObject-DOptfpMt.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-B7u96FyR.js";import"./index-D4X9rB5g.js";import"./ChartSizeDimensions-DQ43uIY8.js";import"./OffsetShower-Y12_Isjl.js";import"./PlotAreaShower-ND2vevs1.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
