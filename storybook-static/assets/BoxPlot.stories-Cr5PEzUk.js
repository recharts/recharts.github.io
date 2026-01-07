import{e}from"./iframe-DaCZzlB4.js";import{C as u}from"./ComposedChart-qrh-EwWj.js";import{R as h}from"./arrayEqualityCheck-xIdjdXyO.js";import{C as k}from"./CartesianGrid-DqFR1Dv1.js";import{B as o}from"./Bar-BP5Xpgoo.js";import{Z as x}from"./ZAxis-CGSCGCgc.js";import{S as y}from"./Scatter-LKXiDm0w.js";import{X as B}from"./XAxis-Xd1zSAtt.js";import{Y as E}from"./YAxis-CjzxMwK0.js";import{R as f}from"./RechartsHookInspector-C1qZr8kA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CytJWPJg.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./zIndexSlice-B7osVKE5.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./PolarUtils-CS41bXSK.js";import"./CartesianChart-CmxBhKD5.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./CartesianAxis-B3Ks68Jf.js";import"./Layer-BKXPn5xD.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./Label-D2rMkPMU.js";import"./ZIndexLayer-Deqw7_sa.js";import"./types-CyhQh7_Z.js";import"./tooltipContext-CtRObmAP.js";import"./ReactUtils-yqeNEccg.js";import"./ActiveShapeUtils-DeHR3FEj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-z0Tijc68.js";import"./useAnimationId-DMDiR4YX.js";import"./Trapezoid-OHYhJgzZ.js";import"./Sector-D1uAN8IN.js";import"./Symbols-CqwnDYaa.js";import"./Curve-BcpAE4Ao.js";import"./RegisterGraphicalItemId-BC9wjUC-.js";import"./ErrorBarContext-D3ibGYOb.js";import"./GraphicalItemClipPath-CLpO-bZw.js";import"./SetGraphicalItem-DKRKp8eM.js";import"./getZIndexFromUnknown-D_uz6Rbn.js";import"./graphicalItemSelectors-kdl34reE.js";import"./index-DqUfe0wd.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./OffsetShower-CyCVWv2W.js";import"./PlotAreaShower-DACZviw9.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],xe={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ye=["BoxPlotChart"];export{m as BoxPlotChart,ye as __namedExportsOrder,xe as default};
