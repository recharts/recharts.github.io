import{r as p,a as t}from"./iframe-BPQD5v1C.js";import{L as n}from"./LineChart-CSXojFc2.js";import{R as s}from"./zIndexSlice-DfAJCemw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BjsXEzWG.js";import{X as d}from"./XAxis-Tde5CSPK.js";import{Y as y}from"./YAxis-DB1Rqz7t.js";import{L as u}from"./Legend-Cr3itvfN.js";import{L as h}from"./Line-COu1GzzV.js";import{T as g}from"./Tooltip-DUW2EXoj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cu7qj_jR.js";import"./resolveDefaultProps-upxpdF4p.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CGRWr5-t.js";import"./throttle-DC1LNmjU.js";import"./index-Tuf2nq6s.js";import"./index-CXovuven.js";import"./isWellBehavedNumber-C9SB8Pzn.js";import"./d3-scale-BcAkS-dE.js";import"./index-yHndqaau.js";import"./index-BNGNsbfJ.js";import"./renderedTicksSlice-Bnytbutp.js";import"./index-NpnztBAt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KMtmBeRo.js";import"./chartDataContext-BEETkhZS.js";import"./CategoricalChart-0gTJFCdb.js";import"./CartesianAxis-kXg3v2M0.js";import"./Layer-B7QJBZyG.js";import"./Text-BGkNki-C.js";import"./pageBackground-D3c52TtU.js";import"./useId-BM-r51MU.js";import"./useBackwardsCompatibleTheme-CpAd0K8h.js";import"./Label-ZHQGm3zg.js";import"./ZIndexLayer-CyIARuTz.js";import"./dataEntryStyles-ClqDXIzp.js";import"./types-BZME1xI7.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-ntiaWcY8.js";import"./symbol-DA7s8c0S.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DZ6cu7_x.js";import"./uniqBy-SNVjjllr.js";import"./iteratee-DN6PB4Ph.js";import"./isArguments-yB-y1yaH.js";import"./Curve-1sBQTzGW.js";import"./step-DY16rTOH.js";import"./activeStyles-BpdD72zS.js";import"./useAnimationId-D3CbYaCo.js";import"./ActivePoints-DRTN0ggX.js";import"./Dot-BcjnvPbe.js";import"./RegisterGraphicalItemId-C_N6zcJ6.js";import"./ErrorBarContext-Bd0khpbf.js";import"./SetGraphicalItem-DTtwRFlr.js";import"./getRadiusAndStrokeWidthFromDot-DE7pHRh0.js";import"./ActiveShapeUtils-CD8s1oUL.js";import"./useEffectiveDataKey-fbFyI37i.js";import"./Cross-CMzu5cot.js";import"./Rectangle-Dvfx4mjp.js";import"./util-Dxo8gN5i.js";import"./Sector-D1oJu_pB.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Tt as __namedExportsOrder,kt as default};
