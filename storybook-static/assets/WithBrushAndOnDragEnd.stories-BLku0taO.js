import{e as t}from"./iframe-CKoXL-7H.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-GexdJw_D.js";import{B as p}from"./BarChart-DJcUrFmm.js";import{X as l}from"./XAxis-rLQI09xS.js";import{Y as h}from"./YAxis-RWI4s0em.js";import{B as c}from"./Brush-DSCj_qhy.js";import{B as x}from"./Bar-wsZ6Ro1r.js";import{R as u}from"./RechartsHookInspector-CMD5YE2l.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BaEbAQrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CSLBjixG.js";import"./hooks-Wghpb3Lr.js";import"./axisSelectors-DPsIzSXr.js";import"./zIndexSlice-muSoLd76.js";import"./CartesianChart-BnHhxgzL.js";import"./chartDataContext-Bkp8uQCT.js";import"./CategoricalChart-Nf_fZ3uc.js";import"./CartesianAxis-DXu08t8h.js";import"./Layer-CVCSBl5u.js";import"./Text-BUTkcAxm.js";import"./DOMUtils-BXsvg6Zu.js";import"./Label-Cl7hxCC5.js";import"./ZIndexLayer-0nKnHyxR.js";import"./types-CIdldEzr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-COHTcDE8.js";import"./ReactUtils-DZNkeyHe.js";import"./ActiveShapeUtils-CJx1zFrR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLY94iSC.js";import"./useAnimationId-2NBy4alx.js";import"./Trapezoid-NNoDFDG-.js";import"./Sector-D9S-bODI.js";import"./Symbols-D2digf2k.js";import"./Curve-CYqbtLFF.js";import"./RegisterGraphicalItemId-Dd6TmGbZ.js";import"./ErrorBarContext-CfkXyv19.js";import"./GraphicalItemClipPath-CoiOEHHo.js";import"./SetGraphicalItem-B8zEjMN_.js";import"./getZIndexFromUnknown-D7m_SwVP.js";import"./graphicalItemSelectors--EjS1ncZ.js";import"./index-DasXKjzD.js";import"./ChartSizeDimensions-CbnBpjpJ.js";import"./OffsetShower-BeXAkU7y.js";import"./PlotAreaShower-otv1tPFG.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
