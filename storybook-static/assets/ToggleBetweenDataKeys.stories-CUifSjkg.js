import{r as p,a as t}from"./iframe-3mrIZkil.js";import{L as n}from"./LineChart-B-ElDAMV.js";import{R as s}from"./zIndexSlice-L3ODJxG9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C4bUFIHm.js";import{X as d}from"./XAxis-D6OSWIjP.js";import{Y as y}from"./YAxis-L6Kj6NBD.js";import{L as u}from"./Legend-7PHxIgr_.js";import{L as h}from"./Line-C5JoJcVf.js";import{T as g}from"./Tooltip-DR2XYmSX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwVI4RN7.js";import"./resolveDefaultProps-i-Y4kJTh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DAOLJeWY.js";import"./throttle-rESuvk1I.js";import"./index-BXM7Ne4y.js";import"./index-CDwIhtzp.js";import"./isWellBehavedNumber-ZyDhg4rS.js";import"./d3-scale-CguR2U2N.js";import"./index-BtaPmQxv.js";import"./index-BdkN9O5O.js";import"./renderedTicksSlice-DYEa3gne.js";import"./index-pFwFQ5O8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CUvaXipt.js";import"./chartDataContext-FTM0Yeif.js";import"./CategoricalChart-D95OMo3E.js";import"./CartesianAxis-BlnQQ3GL.js";import"./Layer-DjZWmALl.js";import"./Text-DUYy6Shz.js";import"./DOMUtils-CXxLAhGm.js";import"./useId-Cxwt81yN.js";import"./useBackwardsCompatibleTheme-lR8vi8zs.js";import"./Label-BIqKgU55.js";import"./ZIndexLayer-D4cc4mD4.js";import"./types-8JRxRnLp.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B-x4p4sy.js";import"./symbol-Dr6L5N19.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DGkGm79j.js";import"./uniqBy-CSyaLent.js";import"./iteratee-yW488fbm.js";import"./Curve-Bw-gimBr.js";import"./step-DsELI93G.js";import"./AnimatedItems-DhXJ9Je_.js";import"./useAnimationId-BnnXfXw0.js";import"./ActivePoints-DxgGQQ1D.js";import"./Dot-Sx0Kvb2o.js";import"./RegisterGraphicalItemId-BDB0ngzS.js";import"./ErrorBarContext-NAHggWz8.js";import"./GraphicalItemClipPath-Bb5lUrgq.js";import"./SetGraphicalItem-9-RZ0mcl.js";import"./getRadiusAndStrokeWidthFromDot-DN4z1IWE.js";import"./ActiveShapeUtils-BBpy3JCJ.js";import"./useGraphicalItemIdentity-BcKg6UBn.js";import"./Cross-DJFcvGJF.js";import"./Rectangle-BDa16x25.js";import"./util-Dxo8gN5i.js";import"./Sector-CV6xDlC_.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
