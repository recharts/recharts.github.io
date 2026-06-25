import{r as n,R as t}from"./iframe-_8NIVtea.js";import{L as p}from"./LineChart-BRMzTMWg.js";import{R as s}from"./zIndexSlice-DHi0zTqt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-225WjMr5.js";import{X as d}from"./XAxis-CXj9NRSO.js";import{Y as y}from"./YAxis-Cq9nELWF.js";import{L as u}from"./Legend-ClfQGzY5.js";import{L as h}from"./Line-CCJiTV3u.js";import{T as g}from"./Tooltip-Dikr2jjx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Btm1Myi_.js";import"./index-C4r4CwZ3.js";import"./index-DXHSNIUu.js";import"./index-CMd9L2k1.js";import"./index-DP0Hg4Uq.js";import"./immer-DtWKh-al.js";import"./get-BPH4xIrS.js";import"./renderedTicksSlice-BSwSfTVH.js";import"./axisSelectors-B0oXaHqO.js";import"./d3-scale-CJIJLRQO.js";import"./resolveDefaultProps-DWak00ij.js";import"./isWellBehavedNumber-C_LYkTy5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyMc8rJv.js";import"./chartDataContext-CURMS4bg.js";import"./CategoricalChart-Cq5j6ts0.js";import"./CartesianAxis-BJg7B04w.js";import"./Layer-CvtIbty1.js";import"./Text-Dn8CYcWJ.js";import"./DOMUtils-DxzVORfb.js";import"./Label-Bho1wkfx.js";import"./ZIndexLayer-D0YIaJsD.js";import"./types-B89ht9kr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Symbols-DuOYoSda.js";import"./symbol-CNSzdyHw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZoIycEd.js";import"./uniqBy-Ckq71Btn.js";import"./iteratee-BauMAWQN.js";import"./Curve-7XStj8oj.js";import"./step-BedGzIKx.js";import"./AnimatedItems-BQ9vzcvs.js";import"./useAnimationId-D4zdEFfm.js";import"./ActivePoints-q58bNkUv.js";import"./Dot-BCuViEZD.js";import"./RegisterGraphicalItemId-IKsKal1D.js";import"./ErrorBarContext--tZY8j9K.js";import"./GraphicalItemClipPath-D7_UBVME.js";import"./SetGraphicalItem-rhq5lQpj.js";import"./getRadiusAndStrokeWidthFromDot-CVKaSFAr.js";import"./ActiveShapeUtils-CCiDKEDP.js";import"./Cross-BxD1Hd53.js";import"./Rectangle-DNmx5GJU.js";import"./util-Dxo8gN5i.js";import"./Sector-twgwZ-Ic.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
