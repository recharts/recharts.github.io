import{a as t}from"./iframe-D_Sr4lJG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D0QIWFDJ.js";import{B as p}from"./BarChart-DCJmP8vL.js";import{X as l}from"./XAxis-CiVYw4TJ.js";import{Y as h}from"./YAxis-CK9b0jPJ.js";import{B as x}from"./Brush-BqfVvW88.js";import{B as c}from"./Bar-CCLdWIC_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DGVbE07Y.js";import"./index-DzVo4Gjf.js";import"./index-Bx0q42bk.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKaajls5.js";import"./isWellBehavedNumber-Dv4TPBJ2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BTyxoPDx.js";import"./index-CqdW1tHD.js";import"./index-DYQHTRz1.js";import"./axisSelectors-B4F-1YW3.js";import"./d3-scale-DfRtt2DS.js";import"./renderedTicksSlice-DGuDkWT4.js";import"./CartesianChart-JxmHMprN.js";import"./chartDataContext-AwrwRhEc.js";import"./CategoricalChart-DKW5S15G.js";import"./CartesianAxis-B-dcY2MJ.js";import"./Layer-D9Oc_uBt.js";import"./Text-DkNPAJgx.js";import"./DOMUtils-zvxYmMZo.js";import"./useId-Dl8Yfg4u.js";import"./useBackwardsCompatibleTheme-Kv-Z1TIM.js";import"./Label-CeC9waPr.js";import"./ZIndexLayer-Cx1K1yql.js";import"./types-D5gXUhG3.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DooKJjtX.js";import"./useAnimationId-KZvr8oE4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNEw1Bzs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYI-DMZT.js";import"./tooltipContext-RZhMVhIV.js";import"./RegisterGraphicalItemId-DO9NFESU.js";import"./ErrorBarContext-pr_CmNON.js";import"./GraphicalItemClipPath-BKqVnbRS.js";import"./SetGraphicalItem-DDVudLdC.js";import"./getZIndexFromUnknown-DFzjspXH.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CpcZwHhR.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
