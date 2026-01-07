import{e}from"./iframe-DaCZzlB4.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-xIdjdXyO.js";import{B as p}from"./BarChart-Dw6zcGe1.js";import{X as l}from"./XAxis-Xd1zSAtt.js";import{Y as h}from"./YAxis-CjzxMwK0.js";import{B as c}from"./Brush-4Su3FKE6.js";import{B as x}from"./Bar-BP5Xpgoo.js";import{R as u}from"./RechartsHookInspector-C1qZr8kA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./PolarUtils-CS41bXSK.js";import"./RechartsWrapper-CytJWPJg.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./zIndexSlice-B7osVKE5.js";import"./CartesianChart-CmxBhKD5.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./CartesianAxis-B3Ks68Jf.js";import"./Layer-BKXPn5xD.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./Label-D2rMkPMU.js";import"./ZIndexLayer-Deqw7_sa.js";import"./types-CyhQh7_Z.js";import"./tooltipContext-CtRObmAP.js";import"./ReactUtils-yqeNEccg.js";import"./ActiveShapeUtils-DeHR3FEj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-z0Tijc68.js";import"./useAnimationId-DMDiR4YX.js";import"./Trapezoid-OHYhJgzZ.js";import"./Sector-D1uAN8IN.js";import"./Symbols-CqwnDYaa.js";import"./Curve-BcpAE4Ao.js";import"./RegisterGraphicalItemId-BC9wjUC-.js";import"./ErrorBarContext-D3ibGYOb.js";import"./GraphicalItemClipPath-CLpO-bZw.js";import"./SetGraphicalItem-DKRKp8eM.js";import"./getZIndexFromUnknown-D_uz6Rbn.js";import"./graphicalItemSelectors-kdl34reE.js";import"./index-DqUfe0wd.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./OffsetShower-CyCVWv2W.js";import"./PlotAreaShower-DACZviw9.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};
