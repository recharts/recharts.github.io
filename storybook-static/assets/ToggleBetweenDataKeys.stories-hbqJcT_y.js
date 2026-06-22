import{r as n,R as t}from"./iframe-Clh6Am28.js";import{L as p}from"./LineChart-CKx9vK2l.js";import{R as s}from"./zIndexSlice-C8WH1sbl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BYNjs-5G.js";import{X as d}from"./XAxis-CX5kJZWB.js";import{Y as y}from"./YAxis-Bbuu0E_L.js";import{L as u}from"./Legend-d_m8qdNU.js";import{L as h}from"./Line-DpvpjAPB.js";import{T as g}from"./Tooltip-DcVhVaK_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-kLRmp8Nc.js";import"./index-B67Qu5hK.js";import"./index-81KY_DK_.js";import"./index-mbhNu375.js";import"./index-D983Ac__.js";import"./immer-CCKY-2O_.js";import"./get-ReXw4Xs6.js";import"./renderedTicksSlice--OmlTIq-.js";import"./axisSelectors-CtcLf7W7.js";import"./d3-scale-BSnqKxuH.js";import"./resolveDefaultProps-Cp4jCd2q.js";import"./isWellBehavedNumber-BTdz8jY9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DYzbJdNk.js";import"./chartDataContext-BpoRQBsX.js";import"./CategoricalChart-ISWmGPOG.js";import"./CartesianAxis-EoQ_2pVo.js";import"./Layer-rOqvObKk.js";import"./Text-X5OcHqR4.js";import"./DOMUtils-CtdcYe6Z.js";import"./Label-gvCBOhLE.js";import"./ZIndexLayer-4xKONL83.js";import"./types-Clw2FxQC.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Symbols-Cq5S2wug.js";import"./symbol-Dcr2-_AE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BidkkjV3.js";import"./uniqBy-BKbVvzyr.js";import"./iteratee-CWb0-VE6.js";import"./Curve-CCuEPsAe.js";import"./step-Dyxzv1f8.js";import"./AnimatedItems-B05rhmS4.js";import"./useAnimationId-CWbLQsSM.js";import"./ActivePoints-DadMhNWA.js";import"./Dot-CTX7NV8r.js";import"./RegisterGraphicalItemId-C0MecWm_.js";import"./ErrorBarContext-DAn4MkTm.js";import"./GraphicalItemClipPath-Ngq7bur3.js";import"./SetGraphicalItem-BUpAV2uu.js";import"./getRadiusAndStrokeWidthFromDot-BP39ATEv.js";import"./ActiveShapeUtils-BsSwQSYp.js";import"./Cross-tf1sjMsM.js";import"./Rectangle-CZG00UlM.js";import"./util-Dxo8gN5i.js";import"./Sector-Z4utyPCe.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
