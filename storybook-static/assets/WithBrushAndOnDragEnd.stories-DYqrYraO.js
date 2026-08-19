import{R as t}from"./iframe-W15_yS8y.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-KjfXmz6K.js";import{B as p}from"./BarChart-XrHANw05.js";import{X as l}from"./XAxis-8Au-a6fB.js";import{Y as h}from"./YAxis-CxEXFC67.js";import{B as x}from"./Brush-CvB3t22p.js";import{B as c}from"./Bar-JnvSsJKH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dvj2OlWT.js";import"./index-DJoXYd_8.js";import"./index-C4zsw-i5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-PB6tg1uE.js";import"./isWellBehavedNumber-J_RQo-Gx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B53AJGL_.js";import"./index-Df7Hn4Pb.js";import"./index-CzfOThSk.js";import"./axisSelectors-D1dvC9r7.js";import"./d3-scale-DaTRSSxE.js";import"./renderedTicksSlice--xVLPDDU.js";import"./CartesianChart-CGOzuY2G.js";import"./chartDataContext-CMgd62s5.js";import"./CategoricalChart-DCYct-dD.js";import"./CartesianAxis-lMcf7VGx.js";import"./Layer-mEuTxfDi.js";import"./Text-BvMd1KWD.js";import"./DOMUtils-Mq767cy3.js";import"./useBackwardsCompatibleTheme-CVh47B6N.js";import"./Label-v2JLpAzt.js";import"./ZIndexLayer-DRPG0BG4.js";import"./types-DbtskFGe.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CZGuNW2p.js";import"./useAnimationId-B9um5jhW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBPyqCCf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CzKUxwm_.js";import"./tooltipContext-Dhbi8ip2.js";import"./RegisterGraphicalItemId-qtKCK3s0.js";import"./ErrorBarContext-C5-u35E5.js";import"./GraphicalItemClipPath-DHit8l0N.js";import"./SetGraphicalItem-BYTBa9Xv.js";import"./getZIndexFromUnknown-DJTrSOrY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-E6qKB9xL.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
