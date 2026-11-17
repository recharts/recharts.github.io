import{R as e}from"./iframe-CGL4wxKn.js";import{R as i}from"./zIndexSlice-099KjRSH.js";import{C as n}from"./ComposedChart-B3F4nto3.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BlMJaVi_.js";import{X as s}from"./XAxis-wodCK_Hv.js";import{Y as c}from"./YAxis-EQaJTxBr.js";import{L as d}from"./Line-rl6ls2qQ.js";import{R as g}from"./ReferenceLine-Ck-aWyz6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-J1iMbWnO.js";import"./throttle-DUUYxzVG.js";import"./index-BZoAXlEM.js";import"./index-CB__xCeL.js";import"./RechartsWrapper-g5knetkm.js";import"./axisSelectors-BMd3ki3_.js";import"./polarAxisSelectors-DW8rryyn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-o5WrViM1.js";import"./index-BG2Ge-ql.js";import"./index-XB5jojxJ.js";import"./renderedTicksSlice-CQkNy6Mm.js";import"./index-D3e94DhQ.js";import"./fillDefinitions-Vr_akuqj.js";import"./CartesianChart-Co-UKN43.js";import"./chartDataContext-B0uy7sqw.js";import"./CategoricalChart-rWqih0Ao.js";import"./CartesianAxis-DY7911f8.js";import"./Layer-Ch4A95GV.js";import"./Text-D29ZLY8y.js";import"./ZIndexLayer-CN_fYC_z.js";import"./Label-gT4vohqn.js";import"./types-Blkz6f-Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CHOREDeS.js";import"./step-GQgXeu2E.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CVCXFzjz.js";import"./ActivePoints-zAqYXl3v.js";import"./Dot-Dqevxc0i.js";import"./activeStyles-BKPzxJKn.js";import"./useAnimationId-D89zGJBE.js";import"./Symbols-Bc9bgKwE.js";import"./symbol-VmBVfDDj.js";import"./ErrorBarContext-CSfn8gVg.js";import"./SetGraphicalItem-DNJWjlHF.js";import"./getRadiusAndStrokeWidthFromDot-CxKHEBK2.js";import"./ActiveShapeUtils-B2rQYcmX.js";import"./useEffectiveDataKey-SnOfofuT.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
