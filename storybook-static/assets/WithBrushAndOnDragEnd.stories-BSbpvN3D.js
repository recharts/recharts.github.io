import{R as t}from"./iframe-CYE_KjLp.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BJ5AXs-O.js";import{B as p}from"./BarChart-KQdvp0Qn.js";import{X as l}from"./XAxis-CSEJquda.js";import{Y as h}from"./YAxis-DWbbwN0w.js";import{B as x}from"./Brush-BAchljCM.js";import{B as c}from"./Bar-47vseenK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMwKm87I.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8_njvAZI.js";import"./index-CwiYvwQ-.js";import"./index-CN526hDZ.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./axisSelectors-Cz15TeqU.js";import"./d3-scale-BYal7h8i.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CategoricalChart-DxSK9VeV.js";import"./CartesianAxis-9Uyc6PiW.js";import"./Layer-BAAO02Y6.js";import"./Text-D9p9m1qq.js";import"./DOMUtils-DNa7oSWn.js";import"./Label-DungM5aU.js";import"./ZIndexLayer-Cs3N_7G3.js";import"./types-Bh5it62Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-Bs0EcAMz.js";import"./AnimatedItems-DDp5Wq7I.js";import"./useAnimationId-D2RJw3gt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6bKXxl8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8xIbBFmr.js";import"./RegisterGraphicalItemId-BVUvorB4.js";import"./ErrorBarContext-C6lKsYq3.js";import"./GraphicalItemClipPath-DSlcdUco.js";import"./SetGraphicalItem-DsAOjH_V.js";import"./getZIndexFromUnknown-BsuskYxw.js";import"./graphicalItemSelectors-FraeXnF0.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
