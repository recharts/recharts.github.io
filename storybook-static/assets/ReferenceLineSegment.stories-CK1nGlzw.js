import{e}from"./iframe-BlCBiEbC.js";import{R as i}from"./arrayEqualityCheck-X93wQEqh.js";import{C as a}from"./ComposedChart-kZ-KCn3S.js";import{C as p}from"./CartesianGrid--4MurOwU.js";import{X as n}from"./XAxis-DLSC__Q9.js";import{Y as s}from"./YAxis-HRoag-1v.js";import{L as c}from"./Line-IZ3Aphmi.js";import{R as d}from"./ReferenceLine-LyV1MF4a.js";import{R as g}from"./RechartsHookInspector-CHVk1qod.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bzr_YW23.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DkDok3zQ.js";import"./hooks-BT650JQT.js";import"./axisSelectors-0_eHLV3I.js";import"./zIndexSlice-RKZlw9rR.js";import"./CartesianChart-DgUfEX9r.js";import"./chartDataContext-B-D1_Xyu.js";import"./CategoricalChart-CX-nrdd_.js";import"./CartesianAxis-DPYmPxl5.js";import"./Layer-BoA-MhSr.js";import"./Text-RTBsPD27.js";import"./DOMUtils-Iuyw-z7a.js";import"./Label-yaREi1fu.js";import"./ZIndexLayer-jahJ6frp.js";import"./types-DYooLvZu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CVZw63sI.js";import"./ActivePoints-JZ1NxC6S.js";import"./Dot-D7kgANXO.js";import"./RegisterGraphicalItemId-CF1HBkTr.js";import"./ErrorBarContext-CmWkVzrA.js";import"./GraphicalItemClipPath-C8x-oaPF.js";import"./SetGraphicalItem-SfTyueuB.js";import"./useAnimationId-DmUtWl3R.js";import"./getRadiusAndStrokeWidthFromDot-BIGLa0yQ.js";import"./ActiveShapeUtils-DglLsZWb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8Cog5YP.js";import"./Trapezoid-DBjSOHQz.js";import"./Sector-DXYt-lKs.js";import"./Symbols-KFHdQ1ay.js";import"./Curve-CHEFd7Ta.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D4FkNtIV.js";import"./ChartSizeDimensions-1GSyPMX1.js";import"./OffsetShower-BzuY3Qm6.js";import"./PlotAreaShower-D5VmZD6S.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
