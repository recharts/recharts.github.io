import{r as p,a as t}from"./iframe-CptpVVdK.js";import{L as n}from"./LineChart-DQvxSp_3.js";import{R as s}from"./zIndexSlice-CAnxLxZK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-jU27Ye3i.js";import{X as d}from"./XAxis-r2oUn28C.js";import{Y as y}from"./YAxis-DNukS_kg.js";import{L as u}from"./Legend-B0PIbuxJ.js";import{L as h}from"./Line-TfJoKlI6.js";import{T as g}from"./Tooltip-BGwmOjgF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-c3RFdf0m.js";import"./resolveDefaultProps-Bdo80tkX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DPTiSWkh.js";import"./throttle-BVKLcYc0.js";import"./index-BTwylabs.js";import"./index-alo09WMF.js";import"./isWellBehavedNumber-Cb3PSSsF.js";import"./d3-scale-DZZpobVW.js";import"./index-Dqps63Gr.js";import"./index-CniHkqMt.js";import"./renderedTicksSlice-Cw--JOgv.js";import"./index-Bya_Ui15.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-kEptpjHt.js";import"./chartDataContext-YVUr32e2.js";import"./CategoricalChart-DUkp-alm.js";import"./CartesianAxis-CgAlW-mI.js";import"./Layer-DZV5gQWy.js";import"./Text-DTbKMiqG.js";import"./pageBackground-0u46-xLx.js";import"./useId-BHxaLpBq.js";import"./useBackwardsCompatibleTheme-Ck1iBTHP.js";import"./Label-DWXJ-Xrk.js";import"./ZIndexLayer-DRWh5tG_.js";import"./dataEntryStyles-pGU1xid_.js";import"./types-LYqggaBA.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-L3kNcT1G.js";import"./symbol-B8SgR90p.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_-dcokC.js";import"./uniqBy-CvITKWaF.js";import"./iteratee-OHPjqRYA.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DFA3txiV.js";import"./step-BF-v6b5j.js";import"./activeStyles-tsd2tFv6.js";import"./useAnimationId-CHix4qCt.js";import"./ActivePoints-E2x2ttJQ.js";import"./Dot-BPOiKA3s.js";import"./RegisterGraphicalItemId-BgCOPa3U.js";import"./ErrorBarContext-BZkeDBub.js";import"./SetGraphicalItem-CBYCujS3.js";import"./getRadiusAndStrokeWidthFromDot-LLnmfsQ1.js";import"./ActiveShapeUtils-D7m_xdxo.js";import"./useEffectiveDataKey-DVLIQZiI.js";import"./Cross-vdYesahO.js";import"./Rectangle-DZ_c966o.js";import"./util-Dxo8gN5i.js";import"./Sector-DOX8-R8o.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
