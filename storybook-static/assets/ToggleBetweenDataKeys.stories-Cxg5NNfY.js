import{r as n,R as t}from"./iframe-CysaVPuT.js";import{L as p}from"./LineChart-C38OP0rp.js";import{R as s}from"./zIndexSlice-CBspyTeT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BVNtE_L6.js";import{X as d}from"./XAxis-BHTWnpmK.js";import{Y as y}from"./YAxis-hZ4kGdBq.js";import{L as u}from"./Legend-CzfoJSHE.js";import{L as h}from"./Line-ez-HBiNN.js";import{T as g}from"./Tooltip-DULMtNKm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXNQztOV.js";import"./index-ClhA1x-k.js";import"./index-CIm0M9H5.js";import"./index-BoQpP3ng.js";import"./index-C8sovufb.js";import"./throttle-BijqxQd6.js";import"./get-Dv3cK-ON.js";import"./renderedTicksSlice-L6Kj9uMm.js";import"./axisSelectors-CybQsixZ.js";import"./d3-scale-BWFUWIRC.js";import"./resolveDefaultProps-CB9Bmy8P.js";import"./isWellBehavedNumber-CHReb6Hq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dlco-df9.js";import"./chartDataContext-BsGd8oTW.js";import"./CategoricalChart-B4xuyyeZ.js";import"./CartesianAxis-ACLpIvis.js";import"./Layer-DQgbcZ6W.js";import"./Text-DqT5jcn2.js";import"./DOMUtils-z1JZhy6H.js";import"./Label-B_m_1QPA.js";import"./ZIndexLayer-C6PjgPWA.js";import"./types-DWuPiLas.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Symbols-eew_Q_1o.js";import"./symbol-CNPuKnzX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-396utJ.js";import"./uniqBy-BJRjFRzK.js";import"./iteratee-DuqmaN7B.js";import"./Curve-DVkbv2J8.js";import"./step-vxR68qu5.js";import"./AnimatedItems-HWCD5qdq.js";import"./useAnimationId-XV22nS6k.js";import"./ActivePoints-CQLYJKIJ.js";import"./Dot-dmuSDw2U.js";import"./RegisterGraphicalItemId-BIn5Riid.js";import"./ErrorBarContext-CYyCl8MN.js";import"./GraphicalItemClipPath-DMny06t1.js";import"./SetGraphicalItem-ihbnCYD8.js";import"./getRadiusAndStrokeWidthFromDot-DDSmqaVx.js";import"./ActiveShapeUtils-HeGPuRiV.js";import"./Cross-DqrQduZ1.js";import"./Rectangle-V2sNlqNc.js";import"./util-Dxo8gN5i.js";import"./Sector-Dozb6yk1.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
