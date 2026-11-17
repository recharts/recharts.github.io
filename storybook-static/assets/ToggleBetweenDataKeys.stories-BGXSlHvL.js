import{r as p,R as t}from"./iframe-Czzk5Bx-.js";import{L as n}from"./LineChart-Cjr1jBIX.js";import{R as s}from"./zIndexSlice-CcZCAOP2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DwzIWQpU.js";import{X as d}from"./XAxis-DWUu3518.js";import{Y as y}from"./YAxis-DskmDTW_.js";import{L as u}from"./Legend-CtEKVYW6.js";import{L as h}from"./Line-jtIGshLA.js";import{T as g}from"./Tooltip-D_YzDKbO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5Ex_ZCH.js";import"./resolveDefaultProps-Csc694qB.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BthV4RsX.js";import"./throttle-Dlw7_zhK.js";import"./index-CtnBEbb_.js";import"./index-CElqLkJS.js";import"./polarAxisSelectors-Bgc5VpYB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CS0QJ-EZ.js";import"./index-CAks9lDH.js";import"./index-yeT-45bY.js";import"./renderedTicksSlice-BwJ2p4Mi.js";import"./index-CsxmvEat.js";import"./fillDefinitions-DaR2TDo1.js";import"./CartesianChart-D3FUkn-t.js";import"./chartDataContext--mSdRmgw.js";import"./CategoricalChart-a1Xr9UIu.js";import"./CartesianAxis-5U6hsfI6.js";import"./Layer-CarPpKFV.js";import"./Text-CSorP4yu.js";import"./ZIndexLayer-DISaA8MD.js";import"./Label-CoDIIawi.js";import"./types-Bykt0Hlw.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DOiO9HXo.js";import"./symbol-DOUGW8Ut.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zxdJRS0e.js";import"./uniqBy-CjJbYxjU.js";import"./iteratee-CC6hZy84.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BOcadJ27.js";import"./Curve-DNAnmcp5.js";import"./step-C5vJ1U24.js";import"./dataEntryStyles-C8IdewjD.js";import"./ActivePoints-7NJ9DiE-.js";import"./Dot-qyx0vbCn.js";import"./activeStyles-Dd2x1Ur1.js";import"./useAnimationId-BMmeHowj.js";import"./ErrorBarContext-BTwK65Em.js";import"./SetGraphicalItem-DZqA_DJ9.js";import"./ActiveShapeUtils-BDX2WB3N.js";import"./useEffectiveDataKey-BCok4F6X.js";import"./Cross-5c-8ZAhj.js";import"./Rectangle-B6IFm27t.js";import"./util-Dxo8gN5i.js";import"./Sector-D1PeNtRJ.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
