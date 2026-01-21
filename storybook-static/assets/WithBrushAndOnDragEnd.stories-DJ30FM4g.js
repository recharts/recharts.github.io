import{e as t}from"./iframe-BlCBiEbC.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-X93wQEqh.js";import{B as p}from"./BarChart--39dxPWg.js";import{X as l}from"./XAxis-DLSC__Q9.js";import{Y as h}from"./YAxis-HRoag-1v.js";import{B as c}from"./Brush-C-s1XYpM.js";import{B as x}from"./Bar-DLAVhNBA.js";import{R as u}from"./RechartsHookInspector-CHVk1qod.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bzr_YW23.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DkDok3zQ.js";import"./hooks-BT650JQT.js";import"./axisSelectors-0_eHLV3I.js";import"./zIndexSlice-RKZlw9rR.js";import"./CartesianChart-DgUfEX9r.js";import"./chartDataContext-B-D1_Xyu.js";import"./CategoricalChart-CX-nrdd_.js";import"./CartesianAxis-DPYmPxl5.js";import"./Layer-BoA-MhSr.js";import"./Text-RTBsPD27.js";import"./DOMUtils-Iuyw-z7a.js";import"./Label-yaREi1fu.js";import"./ZIndexLayer-jahJ6frp.js";import"./types-DYooLvZu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CdjW7zH-.js";import"./ReactUtils-CVZw63sI.js";import"./ActiveShapeUtils-DglLsZWb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8Cog5YP.js";import"./useAnimationId-DmUtWl3R.js";import"./Trapezoid-DBjSOHQz.js";import"./Sector-DXYt-lKs.js";import"./Symbols-KFHdQ1ay.js";import"./Curve-CHEFd7Ta.js";import"./RegisterGraphicalItemId-CF1HBkTr.js";import"./ErrorBarContext-CmWkVzrA.js";import"./GraphicalItemClipPath-C8x-oaPF.js";import"./SetGraphicalItem-SfTyueuB.js";import"./getZIndexFromUnknown-yHW4b60R.js";import"./graphicalItemSelectors-BBoAQcBZ.js";import"./index-D4FkNtIV.js";import"./ChartSizeDimensions-1GSyPMX1.js";import"./OffsetShower-BzuY3Qm6.js";import"./PlotAreaShower-D5VmZD6S.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
