import{R as t}from"./iframe-CIqcR0nr.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BaZcNNNO.js";import{B as p}from"./BarChart-CeIcOQz7.js";import{X as l}from"./XAxis-sUTGKqnh.js";import{Y as h}from"./YAxis-Cp6hJTBs.js";import{B as x}from"./Brush-C98rpBBl.js";import{B as c}from"./Bar-BJLp41mc.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DOlCD6_E.js";import"./index-CI5kewFp.js";import"./index-D3_7IQAj.js";import"./get-CuhoYgBd.js";import"./resolveDefaultProps-X_RPaIii.js";import"./isWellBehavedNumber-CN_oQGvc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CO7Bj1Ew.js";import"./index-BRQXzpqS.js";import"./index-iWp3ygHn.js";import"./renderedTicksSlice-uyZ8N1qc.js";import"./axisSelectors-Dp0MorEj.js";import"./d3-scale-BVoLe-e3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BiFR7vHR.js";import"./chartDataContext-BkIJbLAm.js";import"./CategoricalChart-OQdWBIBS.js";import"./CartesianAxis-wzAvkxKf.js";import"./Layer-Cz--vJfn.js";import"./Text-CimnMCMD.js";import"./DOMUtils-DMPXj1nB.js";import"./Label-CuY-JOss.js";import"./ZIndexLayer-B9KPNn2Z.js";import"./types-3DMlx_O9.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./tooltipContext-ORHnKUld.js";import"./AnimatedItems-5cW9jO0l.js";import"./useAnimationId-BJaGTs_s.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BMn1e7Xa.js";import"./ActiveShapeUtils-BLEsVfwW.js";import"./RegisterGraphicalItemId-BxGDByrp.js";import"./ErrorBarContext-D7ZmPrb-.js";import"./GraphicalItemClipPath-CMCMKENx.js";import"./SetGraphicalItem-C8JcvXzc.js";import"./getZIndexFromUnknown-2HE1KQzT.js";import"./graphicalItemSelectors-_qDBExF4.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
