import{R as t}from"./iframe-jkWlGRao.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BJ_azL3V.js";import{B as p}from"./BarChart-CDu5f6eS.js";import{X as l}from"./XAxis-B6q08DjL.js";import{Y as h}from"./YAxis-Df9BpDFL.js";import{B as x}from"./Brush-BAbtXGeM.js";import{B as c}from"./Bar-B0aSYe8E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJCkAT-c.js";import"./throttle-BclcIM3t.js";import"./index-CafydseE.js";import"./index-l6IDK4X2.js";import"./RechartsWrapper-CYIxj0Xh.js";import"./axisSelectors-B57c623a.js";import"./polarAxisSelectors-vXDHLkfy.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7YXqmgC.js";import"./index-CT6JOO-H.js";import"./index-lkQeFUlC.js";import"./renderedTicksSlice-MrcmxqRq.js";import"./index-BIDLCapd.js";import"./CartesianChart-DNa8wuZh.js";import"./ZIndexPortal-PvuD5_Md.js";import"./CategoricalChart-BIz6y0X4.js";import"./CartesianAxis-vLbE4lIP.js";import"./Layer-DGNDN2U_.js";import"./Text-CsCVaUmy.js";import"./pageBackground-B7N8_bCe.js";import"./ZIndexLayer-Cz3uOrDa.js";import"./Label-C3QhHNfQ.js";import"./types-BwHsgyny.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BN7i6-QW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTBIyY9m.js";import"./useAnimationId-CAUjhf76.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KQXKVatm.js";import"./tooltipContext-Coe7V1ij.js";import"./dataEntryStyles-ZVub37-6.js";import"./ErrorBarContext-CbF4zTiN.js";import"./activeStyles-EBU2roz0.js";import"./SetGraphicalItem-BoktD6a2.js";import"./getZIndexFromUnknown-hyD2UNCX.js";import"./useEffectiveDataKey-CJQQkbyt.js";import"./omit-V3INHSAr.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
