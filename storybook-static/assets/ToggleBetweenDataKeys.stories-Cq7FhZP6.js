import{r as n,R as t}from"./iframe-B06eq_mz.js";import{L as p}from"./LineChart-arGliIX9.js";import{R as s}from"./zIndexSlice-DZ0Q8BZb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cw3uAQ6C.js";import{X as d}from"./XAxis-D6J_FGoO.js";import{Y as y}from"./YAxis-CIZVFNfM.js";import{L as u}from"./Legend-i3AyAOa9.js";import{L as h}from"./Line-C0wSPNkw.js";import{T as g}from"./Tooltip-JRW53VRw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5NLQSdK.js";import"./index-C5xxdLaM.js";import"./index-tCsMn5v1.js";import"./index-CYBZJJ0c.js";import"./index-CdiP4uoA.js";import"./throttle-DWlJTWeN.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Hn5vD_Co.js";import"./axisSelectors-B1LI97QB.js";import"./resolveDefaultProps-DtTSgpqn.js";import"./isWellBehavedNumber-DNvLaw60.js";import"./d3-scale-AtM_X8t9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-W-yd_mhO.js";import"./chartDataContext-Sk-D_ye3.js";import"./CategoricalChart-OHkYYYd7.js";import"./CartesianAxis-Ctfj6_7f.js";import"./Layer-XBL4Rxwk.js";import"./Text-C48XOo8y.js";import"./DOMUtils-CKORyHt8.js";import"./Label-DB6uwHR-.js";import"./ZIndexLayer-fQY0BiB2.js";import"./types-CeAaMoTr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-CaqXhdeL.js";import"./symbol-D6tYqKs9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BWoSWIsM.js";import"./uniqBy-CAuwwug3.js";import"./iteratee-CQFk0lUx.js";import"./Curve-Di_KaZv8.js";import"./step-Baald1Gr.js";import"./AnimatedItems-C0zIpN2y.js";import"./useAnimationId-Dv1roAA4.js";import"./ActivePoints-DN8GaRZ0.js";import"./Dot-DHSjX4gV.js";import"./RegisterGraphicalItemId-DDWl-fOV.js";import"./ErrorBarContext-BroTLh2z.js";import"./GraphicalItemClipPath-DtkF5P7U.js";import"./SetGraphicalItem-C5vdnQC6.js";import"./getRadiusAndStrokeWidthFromDot-YCuK-otx.js";import"./ActiveShapeUtils-B667TR48.js";import"./Cross-XqcFIe7m.js";import"./Rectangle-D_tYzf8y.js";import"./util-Dxo8gN5i.js";import"./Sector-lZm3UC2o.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
