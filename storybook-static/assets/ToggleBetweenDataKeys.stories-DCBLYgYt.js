import{r as p,R as t}from"./iframe-m3pGEKfa.js";import{L as n}from"./LineChart-x4yLBDfG.js";import{R as s}from"./zIndexSlice-CiEd_T_p.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-SQ0kUj6g.js";import{X as d}from"./XAxis-BaVE9EFQ.js";import{Y as y}from"./YAxis-swa8vM-B.js";import{L as u}from"./Legend-CjIsYFiG.js";import{L as h}from"./Line-DRnRZKUl.js";import{T as g}from"./Tooltip-BD7v7yEF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1DLlNjF.js";import"./resolveDefaultProps-1_D7OVbj.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BuHzQOVj.js";import"./throttle-C3qsSQmj.js";import"./index-Bk15LyvO.js";import"./index-B2FvYHPH.js";import"./polarAxisSelectors-BjeSYPTx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-COa--qib.js";import"./index-CwIe0M5T.js";import"./index-CVYSO0b0.js";import"./renderedTicksSlice-riwhMnsC.js";import"./index-D_gkyxlq.js";import"./fillDefinitions-gM0_oynF.js";import"./CartesianChart-CVVFQDxq.js";import"./ZIndexPortal-CX0wxjxU.js";import"./CategoricalChart-Cbbud_Be.js";import"./CartesianAxis-4cS3xnQT.js";import"./Layer-CWJJdVGN.js";import"./Text-C8slSLt5.js";import"./DOMUtils-CgNaQgzY.js";import"./ZIndexLayer-dW6YEDVz.js";import"./Label-BWwlrPxZ.js";import"./types-NW0KOpFv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C8vox5bW.js";import"./symbol-QU-hqetJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ON2NhW56.js";import"./uniqBy-D3YFn-Gt.js";import"./iteratee-CrOyoWYC.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C8JVR8tL.js";import"./step-JD5lrPB_.js";import"./LabelList-DpjRmARQ.js";import"./ActivePoints-BT3v0Z1P.js";import"./Dot-Bo6Iz36c.js";import"./activeStyles-Bu9SIE65.js";import"./useAnimationId-CZ85B9in.js";import"./dataEntryStyles-D1ArbIJ7.js";import"./ErrorBarContext-CKCqOaVD.js";import"./SetGraphicalItem-Cdf126o-.js";import"./getRadiusAndStrokeWidthFromDot-fp1uavHZ.js";import"./ActiveShapeUtils-hQzu6D3o.js";import"./useEffectiveDataKey-DabJGTLc.js";import"./Cross-BW0Pnu8r.js";import"./Rectangle-BcfuQLVE.js";import"./util-Dxo8gN5i.js";import"./Sector-BXQzfWqs.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
