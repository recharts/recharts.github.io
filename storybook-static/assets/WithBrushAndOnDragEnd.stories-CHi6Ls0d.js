import{e as t}from"./iframe-VKSiBROl.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BB0HA1wg.js";import{B as p}from"./BarChart-uQEhhUw3.js";import{X as l}from"./XAxis-c6QFLIoy.js";import{Y as h}from"./YAxis-D4wJ7AYM.js";import{B as c}from"./Brush-CeWFjdba.js";import{B as x}from"./Bar-RoOBD0ue.js";import{R as u}from"./RechartsHookInspector-Bk4R2bPq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-NGq3vz57.js";import"./immer-CPTHWkkH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaY8BgmV.js";import"./index-Z1DhqR18.js";import"./hooks-ZL9qLpLY.js";import"./axisSelectors-C7KTOZ5c.js";import"./d3-scale-BjDGrkpd.js";import"./zIndexSlice-DsFodTYX.js";import"./renderedTicksSlice-C68_OdSZ.js";import"./CartesianChart-o8YH5MQb.js";import"./chartDataContext-PCAfxVIZ.js";import"./CategoricalChart-ChVNCGBd.js";import"./CartesianAxis-CQXTkaRJ.js";import"./Layer-B5Q3HgyD.js";import"./Text-DIF9PeK1.js";import"./DOMUtils-BrJ5g_oy.js";import"./Label-CFO9NE9M.js";import"./ZIndexLayer-VGyT3hqP.js";import"./types-DY717biQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CMgj9Eu9.js";import"./ReactUtils-DMEWBI26.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bo5Iqhwn.js";import"./isPlainObject-BPft1dx1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CyZMqhQE.js";import"./useAnimationId-CxCW2e1W.js";import"./Trapezoid-YALS9NHT.js";import"./Sector-B_TUtlds.js";import"./Symbols-BAu9sMjT.js";import"./symbol-BFLJpHsz.js";import"./step-CaHu3Oa5.js";import"./Curve-yzuL5_Sr.js";import"./RegisterGraphicalItemId-0d646qS_.js";import"./ErrorBarContext-DHVubtbe.js";import"./GraphicalItemClipPath-m88eTwMP.js";import"./SetGraphicalItem-B6CVGLUm.js";import"./getZIndexFromUnknown-BY1D_rCU.js";import"./graphicalItemSelectors-BDTb2oUm.js";import"./index-FZYKqp9j.js";import"./ChartSizeDimensions-Ckuhl4O0.js";import"./OffsetShower-DRsWIFHd.js";import"./PlotAreaShower-DlV2zhuR.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
