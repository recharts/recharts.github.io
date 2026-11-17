import{R as t}from"./iframe-CGL4wxKn.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-099KjRSH.js";import{B as p}from"./BarChart-CIUafE6J.js";import{X as l}from"./XAxis-wodCK_Hv.js";import{Y as h}from"./YAxis-EQaJTxBr.js";import{B as x}from"./Brush-Du3dKGz9.js";import{B as c}from"./Bar-roKbAEHR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-J1iMbWnO.js";import"./throttle-DUUYxzVG.js";import"./index-BZoAXlEM.js";import"./index-CB__xCeL.js";import"./RechartsWrapper-g5knetkm.js";import"./axisSelectors-BMd3ki3_.js";import"./polarAxisSelectors-DW8rryyn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-o5WrViM1.js";import"./index-BG2Ge-ql.js";import"./index-XB5jojxJ.js";import"./renderedTicksSlice-CQkNy6Mm.js";import"./index-D3e94DhQ.js";import"./fillDefinitions-Vr_akuqj.js";import"./CartesianChart-Co-UKN43.js";import"./chartDataContext-B0uy7sqw.js";import"./CategoricalChart-rWqih0Ao.js";import"./CartesianAxis-DY7911f8.js";import"./Layer-Ch4A95GV.js";import"./Text-D29ZLY8y.js";import"./ZIndexLayer-CN_fYC_z.js";import"./Label-gT4vohqn.js";import"./types-Blkz6f-Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CVCXFzjz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTmZooah.js";import"./useAnimationId-D89zGJBE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2rQYcmX.js";import"./tooltipContext-qSO0Oja6.js";import"./ErrorBarContext-CSfn8gVg.js";import"./activeStyles-BKPzxJKn.js";import"./SetGraphicalItem-DNJWjlHF.js";import"./getZIndexFromUnknown-BiUm8eGn.js";import"./useEffectiveDataKey-SnOfofuT.js";import"./omit-DgyzUTqO.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
