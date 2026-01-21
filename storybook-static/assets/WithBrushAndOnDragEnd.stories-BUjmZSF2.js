import{e as t}from"./iframe-CnfUedcN.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-rY7iVDz-.js";import{B as p}from"./BarChart-CRN2GBuo.js";import{X as l}from"./XAxis-veq9g2__.js";import{Y as h}from"./YAxis-CRL5LUi9.js";import{B as c}from"./Brush-D3C2Asmo.js";import{B as x}from"./Bar-BdqUYNFc.js";import{R as u}from"./RechartsHookInspector-r5irvpzN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVejQHWD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-UZgszUQZ.js";import"./hooks-dlNhbOk4.js";import"./axisSelectors-vytjTI39.js";import"./zIndexSlice-Dvx1lbqL.js";import"./CartesianChart-CxN-AX8e.js";import"./chartDataContext-DVPFzTpf.js";import"./CategoricalChart-Bvh-Z6kO.js";import"./CartesianAxis-CDEvUzTG.js";import"./Layer-D-nKIsW1.js";import"./Text-Bxj3u51B.js";import"./DOMUtils-BXcCCvqt.js";import"./Label-YyARJRE4.js";import"./ZIndexLayer-DbY_9wcH.js";import"./types-D8riT1ui.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-B3rjCElX.js";import"./ReactUtils-BJDXxPy8.js";import"./ActiveShapeUtils-BJYqXFPt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD8FGW0K.js";import"./useAnimationId-34yVtl_d.js";import"./Trapezoid-BFp34q_q.js";import"./Sector-CKxLHTaG.js";import"./Symbols-cggM9Iun.js";import"./Curve-Cyx3ROtR.js";import"./RegisterGraphicalItemId-B0F4aXR1.js";import"./ErrorBarContext-DNwwyg_J.js";import"./GraphicalItemClipPath-Dl9XvTzN.js";import"./SetGraphicalItem-CDc4e0JF.js";import"./getZIndexFromUnknown-BBAaZkPT.js";import"./graphicalItemSelectors-BAxa5j0B.js";import"./index-BUn4aue4.js";import"./ChartSizeDimensions-BN5VWsPC.js";import"./OffsetShower-Bj6jxFEA.js";import"./PlotAreaShower-fzrOqZm1.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
