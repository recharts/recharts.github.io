import{R as t}from"./iframe-waGCAeMO.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bs9eWJkZ.js";import{B as p}from"./BarChart-Be9PGLkk.js";import{X as l}from"./XAxis-C97Th9HK.js";import{Y as h}from"./YAxis-Bp6_7tMg.js";import{B as x}from"./Brush-DjR5zeaX.js";import{B as c}from"./Bar-BG77Ue60.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dpi9F_1z.js";import"./throttle-CoYevXVP.js";import"./index-CcRKR-Wz.js";import"./index-DUwJtu9Y.js";import"./RechartsWrapper-DrhKOT3w.js";import"./axisSelectors-BpNK-g3S.js";import"./polarAxisSelectors-DtiraoLM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FqfjaXEu.js";import"./index-kB8F1Br5.js";import"./index-3B7lt2Ve.js";import"./renderedTicksSlice-ClDU73ld.js";import"./index-11RgyOoZ.js";import"./fillDefinitions-DkO2tIQI.js";import"./CartesianChart-7iyfeH7l.js";import"./chartDataContext-BbqISvQG.js";import"./CategoricalChart-D2Hb9hNl.js";import"./CartesianAxis-BDzG2Gtt.js";import"./Layer-dmB1mICY.js";import"./Text-C-WU5iwS.js";import"./ZIndexLayer-B2QwwaI-.js";import"./Label-Chhp1CRe.js";import"./types-DrCFt1uv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DwD17VpV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-W9w0JczW.js";import"./useAnimationId-DGRCx4ie.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BuFZhuT8.js";import"./tooltipContext-DOcO8H8O.js";import"./ErrorBarContext-DLQUfAIY.js";import"./activeStyles-Db3JHrE0.js";import"./SetGraphicalItem-DY5DQdLd.js";import"./getZIndexFromUnknown-Bai-ov13.js";import"./useEffectiveDataKey-DONRPZmA.js";import"./omit-Ddtq8Spp.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
