import{R as t}from"./iframe-GMBZ_Ugx.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CaGWsk0_.js";import{B as p}from"./BarChart-_oN_GDS9.js";import{X as l}from"./XAxis-CWBxARwY.js";import{Y as h}from"./YAxis-B3CJ0t9T.js";import{B as x}from"./Brush-7mYkZInY.js";import{B as c}from"./Bar-DW33fKra.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-8AAf0mWE.js";import"./index-CWyz9jhc.js";import"./index-BJeMs6TD.js";import"./get-Gz1PRcGr.js";import"./resolveDefaultProps-CaBwGHvy.js";import"./isWellBehavedNumber-CHbHfbVW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0SxcSOH.js";import"./index-B_gRMuPi.js";import"./index-Gz1Qo9An.js";import"./renderedTicksSlice-CW6yCQrF.js";import"./axisSelectors-CTNvdk-R.js";import"./d3-scale-DrE5OPOC.js";import"./CartesianChart-rtXvtu0b.js";import"./chartDataContext-CUGtjOSs.js";import"./CategoricalChart-CElM-v-_.js";import"./CartesianAxis-DMU5FiQJ.js";import"./Layer-BXGTwaUB.js";import"./Text-xcPGheUs.js";import"./DOMUtils-BjtWwWtu.js";import"./Label-BaqULLaE.js";import"./ZIndexLayer-DxP6hcPK.js";import"./types-M4hw7OKT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./tooltipContext-BN4wceTB.js";import"./AnimatedItems-NvoGhX2w.js";import"./useAnimationId-DgxmZKXq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaFvPD3t.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CK3PQT9Y.js";import"./RegisterGraphicalItemId-Dh_QLlB5.js";import"./ErrorBarContext-C1t_9iin.js";import"./GraphicalItemClipPath-DlEa2W6_.js";import"./SetGraphicalItem-CZxAdJP0.js";import"./getZIndexFromUnknown-DC9MddM9.js";import"./graphicalItemSelectors-D3zVZ2eQ.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
