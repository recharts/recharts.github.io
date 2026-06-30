import{R as t}from"./iframe-CysaVPuT.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CBspyTeT.js";import{B as p}from"./BarChart-Cf4EpQfk.js";import{X as l}from"./XAxis-BHTWnpmK.js";import{Y as h}from"./YAxis-hZ4kGdBq.js";import{B as x}from"./Brush-n7_O0xUJ.js";import{B as c}from"./Bar-BOeSX_EU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BijqxQd6.js";import"./index-BoQpP3ng.js";import"./index-C8sovufb.js";import"./get-Dv3cK-ON.js";import"./resolveDefaultProps-CB9Bmy8P.js";import"./isWellBehavedNumber-CHReb6Hq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXNQztOV.js";import"./index-ClhA1x-k.js";import"./index-CIm0M9H5.js";import"./renderedTicksSlice-L6Kj9uMm.js";import"./axisSelectors-CybQsixZ.js";import"./d3-scale-BWFUWIRC.js";import"./CartesianChart-Dlco-df9.js";import"./chartDataContext-BsGd8oTW.js";import"./CategoricalChart-B4xuyyeZ.js";import"./CartesianAxis-ACLpIvis.js";import"./Layer-DQgbcZ6W.js";import"./Text-DqT5jcn2.js";import"./DOMUtils-z1JZhy6H.js";import"./Label-B_m_1QPA.js";import"./ZIndexLayer-C6PjgPWA.js";import"./types-DWuPiLas.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./tooltipContext-CzV606mp.js";import"./AnimatedItems-HWCD5qdq.js";import"./useAnimationId-XV22nS6k.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-V2sNlqNc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HeGPuRiV.js";import"./RegisterGraphicalItemId-BIn5Riid.js";import"./ErrorBarContext-CYyCl8MN.js";import"./GraphicalItemClipPath-DMny06t1.js";import"./SetGraphicalItem-ihbnCYD8.js";import"./getZIndexFromUnknown-DeY8ZrPG.js";import"./graphicalItemSelectors-C4W5Yao6.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
