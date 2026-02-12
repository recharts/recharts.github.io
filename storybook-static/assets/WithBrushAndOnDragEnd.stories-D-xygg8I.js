import{e as t}from"./iframe-BQCoiva3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B0366wwk.js";import{B as p}from"./BarChart-BknJ3ZMg.js";import{X as l}from"./XAxis-adUeWkz6.js";import{Y as h}from"./YAxis-Cm9krEUT.js";import{B as c}from"./Brush-B5aawwRT.js";import{B as x}from"./Bar-BaE5f4z2.js";import{R as u}from"./RechartsHookInspector-CnEEIRv_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BkSCP0UE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vpzrlwOs.js";import"./hooks-6nrvr-mh.js";import"./axisSelectors-BeeHNvPl.js";import"./zIndexSlice-DIQaSorX.js";import"./CartesianChart-3obF7LW0.js";import"./chartDataContext-DynAjYRS.js";import"./CategoricalChart-BUFP8crF.js";import"./CartesianAxis-DjqIVAOB.js";import"./Layer-DJ1Ub_Mt.js";import"./Text-DJjW_aea.js";import"./DOMUtils-CR4mIpeb.js";import"./Label-DcE3tZRQ.js";import"./ZIndexLayer-MNqDcOIF.js";import"./types-D3fsuIcd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-B7Gcn_PF.js";import"./ReactUtils-CBZ7FQLf.js";import"./ActiveShapeUtils-BR9LCKJd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bkr_shZz.js";import"./useAnimationId-D9Kszw7L.js";import"./Trapezoid-D1e_n1ob.js";import"./Sector-DlkTEg1T.js";import"./Symbols-DO7aFqSH.js";import"./Curve-CIPXZY-U.js";import"./RegisterGraphicalItemId-BshdgZU9.js";import"./ErrorBarContext-Ht_zzjWi.js";import"./GraphicalItemClipPath-Bi8mSekh.js";import"./SetGraphicalItem-DgSBR6IQ.js";import"./getZIndexFromUnknown-dNQMhXcK.js";import"./graphicalItemSelectors-4UHVuMlx.js";import"./index-DKG7AucC.js";import"./ChartSizeDimensions-_A7Mz-FY.js";import"./OffsetShower-D2FIRFNu.js";import"./PlotAreaShower-j01VLlBO.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
