import{r as g,a as e}from"./iframe-D_Sr4lJG.js";import{B as s}from"./Brush-BqfVvW88.js";import{R as B}from"./zIndexSlice-D0QIWFDJ.js";import{C as p}from"./ComposedChart-ZURsynXK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CUH4TpmU.js";import{L as D}from"./LineChart-Dc1iJVAL.js";import{R as m}from"./ReferenceLine-oGPD4QZ0.js";import{C as d}from"./CartesianGrid-B3y5rILo.js";import{X as S}from"./XAxis-CiVYw4TJ.js";import{Y as A}from"./YAxis-CK9b0jPJ.js";import{L as w}from"./Legend-6Kaq28I2.js";import{T as N}from"./Tooltip-D6jlTmCI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-D9Oc_uBt.js";import"./resolveDefaultProps-BKaajls5.js";import"./Text-DkNPAJgx.js";import"./DOMUtils-zvxYmMZo.js";import"./isWellBehavedNumber-Dv4TPBJ2.js";import"./useId-Dl8Yfg4u.js";import"./useBackwardsCompatibleTheme-Kv-Z1TIM.js";import"./chartDataContext-AwrwRhEc.js";import"./axisSelectors-B4F-1YW3.js";import"./throttle-DGVbE07Y.js";import"./index-DzVo4Gjf.js";import"./index-Bx0q42bk.js";import"./d3-scale-DfRtt2DS.js";import"./RechartsWrapper-BTyxoPDx.js";import"./index-CqdW1tHD.js";import"./index-DYQHTRz1.js";import"./renderedTicksSlice-DGuDkWT4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-JxmHMprN.js";import"./CategoricalChart-DKW5S15G.js";import"./Curve-5OWOJy9s.js";import"./types-D5gXUhG3.js";import"./step-BEJyHAO7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DooKJjtX.js";import"./Label-CeC9waPr.js";import"./ZIndexLayer-Cx1K1yql.js";import"./useAnimationId-KZvr8oE4.js";import"./ActivePoints-BSKOHmnc.js";import"./Dot-yV7k0mxe.js";import"./RegisterGraphicalItemId-DO9NFESU.js";import"./ErrorBarContext-pr_CmNON.js";import"./GraphicalItemClipPath-BKqVnbRS.js";import"./SetGraphicalItem-DDVudLdC.js";import"./getRadiusAndStrokeWidthFromDot-DctFTReD.js";import"./ActiveShapeUtils-CYI-DMZT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B-dcY2MJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CxVleFr4.js";import"./symbol-DWmT4zeF.js";import"./useElementOffset-CuHOZIfT.js";import"./uniqBy-SCEa_4Mg.js";import"./iteratee-DHY7e-mB.js";import"./Cross-C0Kswt5F.js";import"./Rectangle-CNEw1Bzs.js";import"./util-Dxo8gN5i.js";import"./Sector-CpQIQdBs.js";const je={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (_args: Args) => {
    const [startIndex, setStartIndex] = useState<number | undefined>(2);
    const [endIndex, setEndIndex] = useState<number | undefined>(5);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" isAnimationActive={false} />

            <Brush startIndex={startIndex} endIndex={endIndex} onChange={e => {
            setEndIndex(e.endIndex);
            setStartIndex(e.startIndex);
          }} alwaysShowText />
          </ComposedChart>
        </ResponsiveContainer>
        <input type="number" aria-label="startIndex" value={startIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setStartIndex(num);
      }} />
        <input aria-label="endIndex" value={endIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setEndIndex(num);
      }} />
      </>;
  }
}`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,I,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData} margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
        r: 8
      }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <ReferenceLine stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
        <Brush dataKey="name">
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <Tooltip />
      </ComposedChart>;
  }
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,b,K;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData}>
        <Brush>
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
      </ComposedChart>;
  }
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const qe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,qe as __namedExportsOrder,je as default};
