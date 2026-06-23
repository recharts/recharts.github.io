import{r as n,R as t}from"./iframe-pl42v7Eu.js";import{L as p}from"./LineChart-M_6qFPCU.js";import{R as s}from"./zIndexSlice-D6Ury5DQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-COBbHqLx.js";import{X as d}from"./XAxis-0siPSpiK.js";import{Y as y}from"./YAxis-CTEyBNt3.js";import{L as u}from"./Legend-CymuCPFQ.js";import{L as h}from"./Line-BLy4f1Fi.js";import{T as g}from"./Tooltip-DSTzYmHX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ByLHuOcy.js";import"./index-BTDreE9O.js";import"./index-Cmb4UkZ_.js";import"./index-Df70QOpj.js";import"./index-ntLeohj2.js";import"./immer-C_PxOxT8.js";import"./get-Ci1Zslo5.js";import"./renderedTicksSlice-nJaW__V7.js";import"./axisSelectors-49otWNoQ.js";import"./d3-scale-EDGtIYyd.js";import"./resolveDefaultProps-BgT3I9Pa.js";import"./isWellBehavedNumber-B6cHM4DS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CkSibwuY.js";import"./chartDataContext-BUPOQjbb.js";import"./CategoricalChart-BDx0yEeS.js";import"./CartesianAxis-Dyaa3QOt.js";import"./Layer-DIETCOs-.js";import"./Text-DHqN6Wmv.js";import"./DOMUtils-C0435NEl.js";import"./Label-jH0IUTIN.js";import"./ZIndexLayer-DHOvoudh.js";import"./types-Cax0x9Pi.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Symbols-8zp00i_z.js";import"./symbol-Dq8p-R2M.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Btpwl7wC.js";import"./uniqBy-DtZ7esPP.js";import"./iteratee-OzssNQ-a.js";import"./Curve-V8Cs5yUz.js";import"./step-BQEtcvlA.js";import"./AnimatedItems-wt0_sn45.js";import"./useAnimationId-bxLMfI7c.js";import"./ActivePoints-sxoM3gYg.js";import"./Dot-BMK0KkKw.js";import"./RegisterGraphicalItemId-Rj2Lqe9e.js";import"./ErrorBarContext-BQo0CyvO.js";import"./GraphicalItemClipPath-CviR7UKP.js";import"./SetGraphicalItem-BX03rWwK.js";import"./getRadiusAndStrokeWidthFromDot-5IlnILBr.js";import"./ActiveShapeUtils-DL8AZGaA.js";import"./Cross-CJ4qchKv.js";import"./Rectangle-Dhsi5AWp.js";import"./util-Dxo8gN5i.js";import"./Sector-BMZf45Ok.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
