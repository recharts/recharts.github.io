import{r as p,R as t}from"./iframe-waGCAeMO.js";import{L as n}from"./LineChart-DmlHMtRG.js";import{R as s}from"./zIndexSlice-Bs9eWJkZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-K2byEmuF.js";import{X as d}from"./XAxis-C97Th9HK.js";import{Y as y}from"./YAxis-Bp6_7tMg.js";import{L as u}from"./Legend-Bgc8srvp.js";import{L as h}from"./Line-DJadcpEB.js";import{T as g}from"./Tooltip-the880DM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DrhKOT3w.js";import"./resolveDefaultProps-Dpi9F_1z.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BpNK-g3S.js";import"./throttle-CoYevXVP.js";import"./index-CcRKR-Wz.js";import"./index-DUwJtu9Y.js";import"./polarAxisSelectors-DtiraoLM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FqfjaXEu.js";import"./index-kB8F1Br5.js";import"./index-3B7lt2Ve.js";import"./renderedTicksSlice-ClDU73ld.js";import"./index-11RgyOoZ.js";import"./fillDefinitions-DkO2tIQI.js";import"./CartesianChart-7iyfeH7l.js";import"./chartDataContext-BbqISvQG.js";import"./CategoricalChart-D2Hb9hNl.js";import"./CartesianAxis-BDzG2Gtt.js";import"./Layer-dmB1mICY.js";import"./Text-C-WU5iwS.js";import"./ZIndexLayer-B2QwwaI-.js";import"./Label-Chhp1CRe.js";import"./types-DrCFt1uv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-sTKgXRyZ.js";import"./symbol-CRbcfw6A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFWzqZEl.js";import"./uniqBy-CqnsSxDI.js";import"./iteratee-DPicYX8A.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-D4lP154T.js";import"./Curve-Cb7BkQkF.js";import"./step-CvjzszA2.js";import"./dataEntryStyles-DwD17VpV.js";import"./ActivePoints-SMrH9LpN.js";import"./Dot-KwlPPybH.js";import"./activeStyles-Db3JHrE0.js";import"./useAnimationId-DGRCx4ie.js";import"./ErrorBarContext-DLQUfAIY.js";import"./SetGraphicalItem-DY5DQdLd.js";import"./ActiveShapeUtils-BuFZhuT8.js";import"./useEffectiveDataKey-DONRPZmA.js";import"./Cross-CgvdF31W.js";import"./Rectangle-W9w0JczW.js";import"./util-Dxo8gN5i.js";import"./Sector-C6LMEFyk.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
