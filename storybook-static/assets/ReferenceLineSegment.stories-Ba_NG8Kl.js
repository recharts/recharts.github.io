import{e}from"./iframe-D1sKzd9f.js";import{R as i}from"./arrayEqualityCheck-CuEsOyc1.js";import{C as a}from"./ComposedChart-D7QMmcGv.js";import{C as p}from"./CartesianGrid-W01p8so4.js";import{X as n}from"./XAxis-BOA4yCHe.js";import{Y as s}from"./YAxis-BOXDE0eJ.js";import{L as c}from"./Line-BaZkLRn3.js";import{R as d}from"./ReferenceLine-S7RnELaM.js";import{R as g}from"./RechartsHookInspector-DnaIUpyH.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DP_tbxO-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BpD_sNud.js";import"./hooks-DdtZHK8g.js";import"./axisSelectors-DyIQ7_k2.js";import"./zIndexSlice-LstRJYK0.js";import"./CartesianChart-Biy4tQe4.js";import"./chartDataContext-CRIv2raa.js";import"./CategoricalChart-C6tF-OgQ.js";import"./CartesianAxis-C9kYKoRG.js";import"./Layer-WzWTapMZ.js";import"./Text-Cjdiq18G.js";import"./DOMUtils-gW35XdYA.js";import"./Label-BUubujAP.js";import"./ZIndexLayer-C_HSTCV-.js";import"./types-EtQqMNLc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CN0W71Xc.js";import"./ActivePoints-2K88Psn3.js";import"./Dot-CvFh2CAB.js";import"./RegisterGraphicalItemId-1mClqvPm.js";import"./ErrorBarContext-BoOFKdx-.js";import"./GraphicalItemClipPath-D104b0kU.js";import"./SetGraphicalItem-elsOCW9j.js";import"./useAnimationId-CobcEi0h.js";import"./getRadiusAndStrokeWidthFromDot-ChFRxLXf.js";import"./ActiveShapeUtils-fLb35mLW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CjCqdVKq.js";import"./Trapezoid-CC-7WT-k.js";import"./Sector-BNWuE3Lx.js";import"./Symbols-B6J6F5uc.js";import"./Curve-BmiU29ay.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BzSbAqoW.js";import"./ChartSizeDimensions-C9qcdOPY.js";import"./OffsetShower-0TFjDlvn.js";import"./PlotAreaShower-D6laSGCk.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
