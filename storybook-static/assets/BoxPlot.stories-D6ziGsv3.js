import{e}from"./iframe-D1sKzd9f.js";import{C as u}from"./ComposedChart-D7QMmcGv.js";import{R as h}from"./arrayEqualityCheck-CuEsOyc1.js";import{C as k}from"./CartesianGrid-W01p8so4.js";import{B as o}from"./Bar-DS-Islxy.js";import{Z as x}from"./ZAxis-DRgcSj8r.js";import{S as y}from"./Scatter-Dz0RexyZ.js";import{X as B}from"./XAxis-BOA4yCHe.js";import{Y as E}from"./YAxis-BOXDE0eJ.js";import{R as f}from"./RechartsHookInspector-DnaIUpyH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BpD_sNud.js";import"./hooks-DdtZHK8g.js";import"./axisSelectors-DyIQ7_k2.js";import"./zIndexSlice-LstRJYK0.js";import"./resolveDefaultProps-DP_tbxO-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Biy4tQe4.js";import"./chartDataContext-CRIv2raa.js";import"./CategoricalChart-C6tF-OgQ.js";import"./CartesianAxis-C9kYKoRG.js";import"./Layer-WzWTapMZ.js";import"./Text-Cjdiq18G.js";import"./DOMUtils-gW35XdYA.js";import"./Label-BUubujAP.js";import"./ZIndexLayer-C_HSTCV-.js";import"./types-EtQqMNLc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CrfAdeah.js";import"./ReactUtils-CN0W71Xc.js";import"./ActiveShapeUtils-fLb35mLW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CjCqdVKq.js";import"./useAnimationId-CobcEi0h.js";import"./Trapezoid-CC-7WT-k.js";import"./Sector-BNWuE3Lx.js";import"./Symbols-B6J6F5uc.js";import"./Curve-BmiU29ay.js";import"./RegisterGraphicalItemId-1mClqvPm.js";import"./ErrorBarContext-BoOFKdx-.js";import"./GraphicalItemClipPath-D104b0kU.js";import"./SetGraphicalItem-elsOCW9j.js";import"./getZIndexFromUnknown-HH07cRKm.js";import"./graphicalItemSelectors-CPJau7EC.js";import"./index-BzSbAqoW.js";import"./ChartSizeDimensions-C9qcdOPY.js";import"./OffsetShower-0TFjDlvn.js";import"./PlotAreaShower-D6laSGCk.js";const K=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}],ye={component:u},s=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r,y1:t,x2:r+n,y2:t,stroke:"#000",strokeWidth:3})},l=a=>{const{x:r,y:t,width:n,height:i}=a;return r==null||t==null||n==null||i==null?null:e.createElement("line",{x1:r+n/2,y1:t+i,x2:r+n/2,y2:t,stroke:"#000",strokeWidth:5,strokeDasharray:"5"})},g=a=>e.useMemo(()=>a.map(t=>({min:t.min,bottomWhisker:t.lowerQuartile-t.min,bottomBox:t.median-t.lowerQuartile,topBox:t.upperQuartile-t.median,topWhisker:t.max-t.upperQuartile,average:t.average,size:250})),[a]),m={render:()=>{const a=g(K);return e.createElement(h,{minHeight:600},e.createElement(u,{data:a},e.createElement(k,{strokeDasharray:"3 3"}),e.createElement(o,{stackId:"a",dataKey:"min",fill:"none"}),e.createElement(o,{stackId:"a",dataKey:"bar-min",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bottomBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"bar-avg",shape:e.createElement(s,null)}),e.createElement(o,{stackId:"a",dataKey:"topBox",fill:"#8884d8"}),e.createElement(o,{stackId:"a",dataKey:"topWhisker",shape:e.createElement(l,null)}),e.createElement(o,{stackId:"a",dataKey:"bar-max",shape:e.createElement(s,null)}),e.createElement(x,{type:"number",dataKey:"size",range:[0,250]}),e.createElement(y,{dataKey:"average",fill:"red",stroke:"#FFF"}),e.createElement(B,null),e.createElement(E,null),e.createElement(f,null)))},args:{}};var p,d,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
