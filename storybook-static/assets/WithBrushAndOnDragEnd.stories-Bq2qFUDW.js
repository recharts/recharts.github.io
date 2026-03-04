import{e as t}from"./iframe-BWK9ES1u.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-C3hQ_dNx.js";import{B as p}from"./BarChart-BL7RUltd.js";import{X as l}from"./XAxis-DPIaAqKp.js";import{Y as h}from"./YAxis--KyRCAkW.js";import{B as c}from"./Brush-BWomoLWC.js";import{B as x}from"./Bar-BlgHTcej.js";import{R as u}from"./RechartsHookInspector-PHAVE2qS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-UiVGC4WG.js";import"./immer-H-Wjh2uu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BOGHGYF3.js";import"./index-CFdRl6ey.js";import"./hooks-7NwdUe8t.js";import"./axisSelectors-_XyMcvnR.js";import"./d3-scale-BLK5VF-M.js";import"./zIndexSlice-D32FYtu3.js";import"./renderedTicksSlice-DeqeruMc.js";import"./CartesianChart-CW6-YABt.js";import"./chartDataContext-cUJ3hXxI.js";import"./CategoricalChart-BCO7gYoN.js";import"./CartesianAxis-DXQ2RzcP.js";import"./Layer-FfNANwFp.js";import"./Text-D_AFYo3_.js";import"./DOMUtils-BiksdwSe.js";import"./Label-CkGBtdJT.js";import"./ZIndexLayer-bCgYEHqC.js";import"./types-BDXHojhp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Dv9lVTn5.js";import"./ReactUtils-CHwdflEM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-pcY95NPm.js";import"./isPlainObject-CWcMf8n5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQknosyX.js";import"./useAnimationId-CpY_S6-T.js";import"./Trapezoid-2vK08j-g.js";import"./Sector-Bmz-EyPe.js";import"./Symbols-CaAoNy9I.js";import"./symbol-CBLdl9lx.js";import"./step-DmOlkDZ0.js";import"./Curve-W2IHKA5j.js";import"./RegisterGraphicalItemId-Dl_9XwyC.js";import"./ErrorBarContext-pBc660wi.js";import"./GraphicalItemClipPath-Cpkp19yU.js";import"./SetGraphicalItem-sg4XQgsj.js";import"./getZIndexFromUnknown-CSIDQUX5.js";import"./graphicalItemSelectors-C-LZ4Oc6.js";import"./index-CIhAteaz.js";import"./ChartSizeDimensions-6JZOYWf1.js";import"./OffsetShower-D5r1e2Xk.js";import"./PlotAreaShower-DQz1z3XL.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
