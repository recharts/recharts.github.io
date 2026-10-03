import{r as p,a as t}from"./iframe-7Yqq7fCu.js";import{L as n}from"./LineChart-C-KEEQ7Q.js";import{R as s}from"./zIndexSlice-Clo6-Yyn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DdQBLXg1.js";import{X as d}from"./XAxis-1FKbFMeO.js";import{Y as y}from"./YAxis-Cy7XE4j-.js";import{L as u}from"./Legend-B0A2aPD8.js";import{L as h}from"./Line-y-Q91fXJ.js";import{T as g}from"./Tooltip-B_7JlKfR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BmN3AX4B.js";import"./resolveDefaultProps-DPH1JWez.js";import"./get-C2VjdU0L.js";import"./axisSelectors-TNeFeRD0.js";import"./throttle-CPS_vYKA.js";import"./index-BP89nsqC.js";import"./index-Bvs3nnJ3.js";import"./isWellBehavedNumber-3XLFrVwb.js";import"./d3-scale-BucieWce.js";import"./index-CMyPnnGY.js";import"./index-CIvsYy-Z.js";import"./renderedTicksSlice-C7nR0wuC.js";import"./index-BmRJq5r2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7Vexiif.js";import"./chartDataContext-BDajETE7.js";import"./CategoricalChart-DGs6T5PE.js";import"./CartesianAxis-Tr4fBNdd.js";import"./Layer-B4eFX6wr.js";import"./Text-CBP65qj4.js";import"./DOMUtils-DFLenfZw.js";import"./useId-CQKco8O5.js";import"./useBackwardsCompatibleTheme-DsG9X6Al.js";import"./Label-BeKnll5A.js";import"./ZIndexLayer-CY2z0VDd.js";import"./types-BLNI4yrZ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CRebEb5d.js";import"./symbol-TqHkyfS6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVlFUWt-.js";import"./uniqBy-CgUI3qsR.js";import"./iteratee-DqkESnyS.js";import"./Curve-Bx49RMW5.js";import"./step-CY_23fua.js";import"./AnimatedItems-BlURIwD6.js";import"./useAnimationId-OFL2L8Zq.js";import"./ActivePoints-Df4Z0MND.js";import"./Dot-B0z70aRe.js";import"./RegisterGraphicalItemId-CBb6S0jv.js";import"./ErrorBarContext-B86Z1RsK.js";import"./GraphicalItemClipPath-ElSd1RxM.js";import"./SetGraphicalItem-DDBsqrXQ.js";import"./getRadiusAndStrokeWidthFromDot-BA9-tDMT.js";import"./ActiveShapeUtils-RlmFljs4.js";import"./useGraphicalItemIdentity-C_cMOVZX.js";import"./Cross-BBg7bcb6.js";import"./Rectangle-D0MukTZZ.js";import"./util-Dxo8gN5i.js";import"./Sector-BMtiqe0D.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
