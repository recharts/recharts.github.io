import{a as t}from"./iframe-BPQD5v1C.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DfAJCemw.js";import{B as p}from"./BarChart-lJIotYo2.js";import{X as l}from"./XAxis-Tde5CSPK.js";import{Y as h}from"./YAxis-DB1Rqz7t.js";import{B as x}from"./Brush-DR9ji4O_.js";import{B as c}from"./Bar-D8PVLJDr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DC1LNmjU.js";import"./index-Tuf2nq6s.js";import"./index-CXovuven.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-upxpdF4p.js";import"./isWellBehavedNumber-C9SB8Pzn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cu7qj_jR.js";import"./axisSelectors-CGRWr5-t.js";import"./d3-scale-BcAkS-dE.js";import"./index-yHndqaau.js";import"./index-BNGNsbfJ.js";import"./renderedTicksSlice-Bnytbutp.js";import"./index-NpnztBAt.js";import"./CartesianChart-KMtmBeRo.js";import"./chartDataContext-BEETkhZS.js";import"./CategoricalChart-0gTJFCdb.js";import"./CartesianAxis-kXg3v2M0.js";import"./Layer-B7QJBZyG.js";import"./Text-BGkNki-C.js";import"./pageBackground-D3c52TtU.js";import"./useId-BM-r51MU.js";import"./useBackwardsCompatibleTheme-CpAd0K8h.js";import"./Label-ZHQGm3zg.js";import"./ZIndexLayer-CyIARuTz.js";import"./dataEntryStyles-ClqDXIzp.js";import"./types-BZME1xI7.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BpdD72zS.js";import"./useAnimationId-D3CbYaCo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dvfx4mjp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CD8s1oUL.js";import"./tooltipContext-89q0ReT3.js";import"./RegisterGraphicalItemId-C_N6zcJ6.js";import"./ErrorBarContext-Bd0khpbf.js";import"./SetGraphicalItem-DTtwRFlr.js";import"./getZIndexFromUnknown-CRPi8KYR.js";import"./useEffectiveDataKey-fbFyI37i.js";import"./omit-Ci_YbqS7.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
