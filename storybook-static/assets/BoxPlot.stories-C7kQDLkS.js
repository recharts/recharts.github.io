import{e}from"./iframe-CnfUedcN.js";import{C as u}from"./ComposedChart-BAo7iPrY.js";import{R as h}from"./arrayEqualityCheck-rY7iVDz-.js";import{C as k}from"./CartesianGrid-B1kAbEgK.js";import{B as o}from"./Bar-BdqUYNFc.js";import{Z as x}from"./ZAxis-C4-ky6SN.js";import{S as y}from"./Scatter-BzxurqdC.js";import{X as B}from"./XAxis-veq9g2__.js";import{Y as E}from"./YAxis-CRL5LUi9.js";import{R as f}from"./RechartsHookInspector-r5irvpzN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-UZgszUQZ.js";import"./hooks-dlNhbOk4.js";import"./axisSelectors-vytjTI39.js";import"./zIndexSlice-Dvx1lbqL.js";import"./resolveDefaultProps-CVejQHWD.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-CxN-AX8e.js";import"./chartDataContext-DVPFzTpf.js";import"./CategoricalChart-Bvh-Z6kO.js";import"./CartesianAxis-CDEvUzTG.js";import"./Layer-D-nKIsW1.js";import"./Text-Bxj3u51B.js";import"./DOMUtils-BXcCCvqt.js";import"./Label-YyARJRE4.js";import"./ZIndexLayer-DbY_9wcH.js";import"./types-D8riT1ui.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-B3rjCElX.js";import"./ReactUtils-BJDXxPy8.js";import"./ActiveShapeUtils-BJYqXFPt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD8FGW0K.js";import"./useAnimationId-34yVtl_d.js";import"./Trapezoid-BFp34q_q.js";import"./Sector-CKxLHTaG.js";import"./Symbols-cggM9Iun.js";import"./Curve-Cyx3ROtR.js";import"./RegisterGraphicalItemId-B0F4aXR1.js";import"./ErrorBarContext-DNwwyg_J.js";import"./GraphicalItemClipPath-Dl9XvTzN.js";import"./SetGraphicalItem-CDc4e0JF.js";import"./getZIndexFromUnknown-BBAaZkPT.js";import"./graphicalItemSelectors-BAxa5j0B.js";import"./index-BUn4aue4.js";import"./ChartSizeDimensions-BN5VWsPC.js";import"./OffsetShower-Bj6jxFEA.js";import"./PlotAreaShower-fzrOqZm1.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const data = useBoxPlot(boxPlots);
    return <ResponsiveContainer minHeight={600}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar stackId="a" dataKey="min" fill="none" />
          <Bar stackId="a" dataKey="bar-min" shape={<HorizonBar />} />
          <Bar stackId="a" dataKey="bottomWhisker" shape={<DotBar />} />
          <Bar stackId="a" dataKey="bottomBox" fill="#8884d8" />
          <Bar stackId="a" dataKey="bar-avg" shape={<HorizonBar />} />
          <Bar stackId="a" dataKey="topBox" fill="#8884d8" />
          <Bar stackId="a" dataKey="topWhisker" shape={<DotBar />} />
          <Bar stackId="a" dataKey="bar-max" shape={<HorizonBar />} />
          <ZAxis type="number" dataKey="size" range={[0, 250]} />

          <Scatter dataKey="average" fill="red" stroke="#FFF" />
          <XAxis />
          <YAxis />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {}
}`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Be=["BoxPlotChart"];export{m as BoxPlotChart,Be as __namedExportsOrder,ye as default};
