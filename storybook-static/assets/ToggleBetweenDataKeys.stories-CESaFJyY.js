import{r as p,a as t}from"./iframe-_HfAVjpf.js";import{L as n}from"./LineChart-BOtHmLbx.js";import{R as s}from"./zIndexSlice-BBpCjLLT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CWYHd3Ws.js";import{X as d}from"./XAxis-BPfOL0q9.js";import{Y as y}from"./YAxis-BoV0AlEf.js";import{L as u}from"./Legend-W5IYhstw.js";import{L as h}from"./Line-Ds-1cdF_.js";import{T as g}from"./Tooltip-CLDh_MwF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3bcu809.js";import"./resolveDefaultProps-D7IrzSl6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BggHFTDq.js";import"./throttle-DIGsG3tn.js";import"./index-Cs9o5rrz.js";import"./index-CIyvwLXB.js";import"./isWellBehavedNumber-DviO5hHm.js";import"./d3-scale-B5oQCS6M.js";import"./index-ATsp3Ecu.js";import"./index-uZk8L8Al.js";import"./renderedTicksSlice-BNJCO30A.js";import"./index-CIMOmY0A.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-De3rsgvn.js";import"./chartDataContext-Dyk7Yokq.js";import"./CategoricalChart-a-VUE4A0.js";import"./CartesianAxis-Chrpiu6A.js";import"./Layer-CacweoVl.js";import"./Text-WmpuDBGa.js";import"./pageBackground-CfQpba4h.js";import"./useId-B3zQHx_-.js";import"./useBackwardsCompatibleTheme-BJsCYBM6.js";import"./Label-CR54GT5X.js";import"./ZIndexLayer-BrUuampD.js";import"./types-BGnPJWtT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ytZN-S27.js";import"./symbol-r9QtLlV8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B927Oy_l.js";import"./uniqBy-TLIumvzr.js";import"./iteratee-CTU_33At.js";import"./Curve-DpQ41Ei2.js";import"./step-Max-Kn08.js";import"./activeStyles-BdpGsFup.js";import"./useAnimationId-BhBKKO0p.js";import"./dataEntryStyles-Ucx7Hmoa.js";import"./ActivePoints-BDWzEukD.js";import"./Dot-fMnVn2BH.js";import"./ErrorBarContext-BDsk2xtE.js";import"./GraphicalItemClipPath-C1A7eGe6.js";import"./SetGraphicalItem-Cj-t7_ZW.js";import"./getRadiusAndStrokeWidthFromDot-BqM4XHNM.js";import"./ActiveShapeUtils-4DLJyt96.js";import"./useEffectiveDataKey-C_P0BrSn.js";import"./Cross-BzOjiYoL.js";import"./Rectangle-Cur1iMCQ.js";import"./util-Dxo8gN5i.js";import"./Sector-BC_dkoX6.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
