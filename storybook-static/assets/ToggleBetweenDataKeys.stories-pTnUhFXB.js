import{r as p,a as t}from"./iframe-CNkb7Pxq.js";import{L as n}from"./LineChart-BaRYErYy.js";import{R as s}from"./zIndexSlice-wl2-d2L7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Ck43GCkE.js";import{X as d}from"./XAxis-Cy627mpO.js";import{Y as y}from"./YAxis-Bv4i31q_.js";import{L as u}from"./Legend-DTeqwQyH.js";import{L as h}from"./Line-gVhmKqSC.js";import{T as g}from"./Tooltip-1bb6gcko.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CE0LDB2v.js";import"./resolveDefaultProps-LXGJzsB2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D4hfpt9F.js";import"./throttle-D9QF5i1l.js";import"./index-hgSNbj3_.js";import"./index-B0O4glZn.js";import"./isWellBehavedNumber-cZPS57La.js";import"./d3-scale-hNSavMKY.js";import"./index-nHtRpei8.js";import"./index-BkiX-XNJ.js";import"./renderedTicksSlice-DjfT86KI.js";import"./index-D8V4aljY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dvu2owgZ.js";import"./chartDataContext-eHLxlpVB.js";import"./CategoricalChart-D2oZJ6cq.js";import"./CartesianAxis-UL5z8CfQ.js";import"./Layer-BE_omtYE.js";import"./Text-DlOSKY9M.js";import"./DOMUtils-BQzfSO_G.js";import"./useId-C8-4auv_.js";import"./useBackwardsCompatibleTheme-BLuzOGOd.js";import"./Label-CgRMMdp1.js";import"./ZIndexLayer-V6Rl9PTE.js";import"./types-CyS4-dLr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BQ5awPLZ.js";import"./symbol-CTLfMt-z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfGkUEya.js";import"./uniqBy-DrBmN39C.js";import"./iteratee-C4UAKD1z.js";import"./Curve-BoDwc6R9.js";import"./step-B7Ifq5jY.js";import"./AnimatedItems-Dtnyeebx.js";import"./useAnimationId-BDE8tpoz.js";import"./ActivePoints-Bj-iwanM.js";import"./Dot-BOo7AQIZ.js";import"./RegisterGraphicalItemId-BCZSUoIT.js";import"./ErrorBarContext-D2ajplsz.js";import"./GraphicalItemClipPath-CWom5q5K.js";import"./SetGraphicalItem-ChHo-vHf.js";import"./getRadiusAndStrokeWidthFromDot-Dwt09wXZ.js";import"./ActiveShapeUtils-BcbuTBin.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CL_xgF11.js";import"./Rectangle-ByMG9fnn.js";import"./util-Dxo8gN5i.js";import"./Sector-Bc34-crJ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
