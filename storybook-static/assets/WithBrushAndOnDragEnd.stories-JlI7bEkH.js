import{R as t}from"./iframe-B06eq_mz.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DZ0Q8BZb.js";import{B as p}from"./BarChart-DkjWFItl.js";import{X as l}from"./XAxis-D6J_FGoO.js";import{Y as h}from"./YAxis-CIZVFNfM.js";import{B as x}from"./Brush-BcW_402g.js";import{B as c}from"./Bar-COjpy02_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DWlJTWeN.js";import"./index-CYBZJJ0c.js";import"./index-CdiP4uoA.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DtTSgpqn.js";import"./isWellBehavedNumber-DNvLaw60.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5NLQSdK.js";import"./index-C5xxdLaM.js";import"./index-tCsMn5v1.js";import"./renderedTicksSlice-Hn5vD_Co.js";import"./axisSelectors-B1LI97QB.js";import"./d3-scale-AtM_X8t9.js";import"./CartesianChart-W-yd_mhO.js";import"./chartDataContext-Sk-D_ye3.js";import"./CategoricalChart-OHkYYYd7.js";import"./CartesianAxis-Ctfj6_7f.js";import"./Layer-XBL4Rxwk.js";import"./Text-C48XOo8y.js";import"./DOMUtils-CKORyHt8.js";import"./Label-DB6uwHR-.js";import"./ZIndexLayer-fQY0BiB2.js";import"./types-CeAaMoTr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-wRzVS-RS.js";import"./AnimatedItems-C0zIpN2y.js";import"./useAnimationId-Dv1roAA4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_tYzf8y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B667TR48.js";import"./RegisterGraphicalItemId-DDWl-fOV.js";import"./ErrorBarContext-BroTLh2z.js";import"./GraphicalItemClipPath-DtkF5P7U.js";import"./SetGraphicalItem-C5vdnQC6.js";import"./getZIndexFromUnknown-DmMzeTz5.js";import"./graphicalItemSelectors-DuBEe48Q.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
