import{e}from"./iframe-Ucw_npMd.js";import{R as i}from"./arrayEqualityCheck-C_bl4BTF.js";import{C as p}from"./ComposedChart-ClVu3lO0.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BJDjwPUI.js";import{X as s}from"./XAxis-Z-pG1K5-.js";import{Y as c}from"./YAxis-Ny3PLxgr.js";import{L as d}from"./Line-xp0DzpuK.js";import{R as g}from"./ReferenceLine-Cd2a-955.js";import{R as f}from"./RechartsHookInspector-Egzn0asm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BHeHZryb.js";import"./immer-Df11CBmE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CwfOdweJ.js";import"./index-JYzWfHpx.js";import"./hooks-D7V2KDBB.js";import"./axisSelectors-BH0WFu65.js";import"./d3-scale-0cZeb6CB.js";import"./zIndexSlice-CNerbQ3D.js";import"./renderedTicksSlice-DUMTm3uB.js";import"./CartesianChart-C3CifoRw.js";import"./chartDataContext-C8DSjEnl.js";import"./CategoricalChart-Bvyp3zlR.js";import"./CartesianAxis-C30jVrg6.js";import"./Layer-BHKytU3r.js";import"./Text-BMbZi_EC.js";import"./DOMUtils-YtDMkslD.js";import"./Label-GC_DUOEN.js";import"./ZIndexLayer-D2xlXPPp.js";import"./types-_zfRhAxP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CjeDc-m7.js";import"./ActivePoints-UksLcW80.js";import"./Dot-B34r2ooF.js";import"./RegisterGraphicalItemId-CbJhRY50.js";import"./ErrorBarContext-DyEjoJld.js";import"./GraphicalItemClipPath-B7jjPwrD.js";import"./SetGraphicalItem-BTRvTts6.js";import"./useAnimationId-CEijT5wS.js";import"./getRadiusAndStrokeWidthFromDot-6YrovPXS.js";import"./ActiveShapeUtils-DW7P1xTB.js";import"./isPlainObject-DLsDG0Z3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdjFgehH.js";import"./Trapezoid-DDcYuR4h.js";import"./Sector-SP2qnp6i.js";import"./Symbols-ODbCcosS.js";import"./symbol-C71I-RBu.js";import"./step-CvXihpec.js";import"./Curve-4SPhgVqC.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BrSV8OVb.js";import"./ChartSizeDimensions-Cz7KN2Sj.js";import"./OffsetShower-BPBpAMRX.js";import"./PlotAreaShower-sLoJpTUh.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
