import{r as n,R as t}from"./iframe-C-fup5Id.js";import{L as p}from"./LineChart-DEUCtJll.js";import{R as s}from"./zIndexSlice-NTR0fs-C.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DnMjpwq0.js";import{X as d}from"./XAxis-DODICsjR.js";import{Y as y}from"./YAxis-B46hC9dU.js";import{L as u}from"./Legend-DuXEzb1r.js";import{L as h}from"./Line-Bwf9fLP_.js";import{T as g}from"./Tooltip-ghccvaKJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B95PZmfT.js";import"./index-DNWmVjf2.js";import"./index-BlVQDt2E.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./immer-8TCI2H73.js";import"./get-p2wvzD9I.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";import"./CartesianAxis-DNfda7To.js";import"./Layer-BxCAIV-n.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./Label-Dx6_KP12.js";import"./ZIndexLayer-DdUd9A7h.js";import"./types-BIM6WHXQ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Symbols-Dk8hcEz4.js";import"./symbol-DNpitnQR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-e7BpmwTH.js";import"./uniqBy-DmJ3MZLP.js";import"./iteratee-C8R--wWy.js";import"./Curve-BxzrSemv.js";import"./step-BjlE7YIb.js";import"./AnimatedItems-BHa_3vog.js";import"./useAnimationId-CHZsXmiy.js";import"./ActivePoints-_HKP03c-.js";import"./Dot-Blb5FiAy.js";import"./RegisterGraphicalItemId-mXg0uLQv.js";import"./ErrorBarContext-P4JGsE5W.js";import"./GraphicalItemClipPath-CURGfNfz.js";import"./SetGraphicalItem-KcsUgiZW.js";import"./getRadiusAndStrokeWidthFromDot-BZItNAyz.js";import"./ActiveShapeUtils-BmOgDWMs.js";import"./Cross-B8v49sfh.js";import"./Rectangle-MYtIjh59.js";import"./util-Dxo8gN5i.js";import"./Sector-CMpapL9a.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
