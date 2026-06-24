import{R as t}from"./iframe-C-fup5Id.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-NTR0fs-C.js";import{B as p}from"./BarChart-baj1hXPK.js";import{X as l}from"./XAxis-DODICsjR.js";import{Y as h}from"./YAxis-B46hC9dU.js";import{B as x}from"./Brush-CunNBE2X.js";import{B as c}from"./Bar-DTR1hdUL.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-8TCI2H73.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./get-p2wvzD9I.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B95PZmfT.js";import"./index-DNWmVjf2.js";import"./index-BlVQDt2E.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";import"./CartesianAxis-DNfda7To.js";import"./Layer-BxCAIV-n.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./Label-Dx6_KP12.js";import"./ZIndexLayer-DdUd9A7h.js";import"./types-BIM6WHXQ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./tooltipContext-DBZ8XCai.js";import"./AnimatedItems-BHa_3vog.js";import"./useAnimationId-CHZsXmiy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-MYtIjh59.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmOgDWMs.js";import"./RegisterGraphicalItemId-mXg0uLQv.js";import"./ErrorBarContext-P4JGsE5W.js";import"./GraphicalItemClipPath-CURGfNfz.js";import"./SetGraphicalItem-KcsUgiZW.js";import"./getZIndexFromUnknown-Duif59Mg.js";import"./graphicalItemSelectors-DMr6zMpw.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
