import{r as n,e as t}from"./iframe-DU8eCc54.js";import{L as p}from"./LineChart-_NATcFYh.js";import{R as s}from"./arrayEqualityCheck-Qp-5SSbe.js";import{C as c}from"./CartesianGrid-DYSU-Spr.js";import{X as l}from"./XAxis-BLh_gYvb.js";import{Y as d}from"./YAxis-DVMQwddV.js";import{L as y}from"./Legend-ByrniZpa.js";import{L as h}from"./Line-9yXbec6r.js";import{T as u}from"./Tooltip-K-N_9545.js";import{R as g}from"./RechartsHookInspector-BoR36NoE.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5gztReH.js";import"./index-DQdIN_Xy.js";import"./immer-DU5qWI3u.js";import"./hooks-BJclsIvf.js";import"./axisSelectors-_6DhXqkc.js";import"./d3-scale-DU3kIA5p.js";import"./zIndexSlice-DTpubRK7.js";import"./renderedTicksSlice-Bn5V3AB5.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9jAZwRS.js";import"./chartDataContext-B3buAU5Y.js";import"./CategoricalChart-NWkiMroK.js";import"./resolveDefaultProps-DuF4MmFq.js";import"./CartesianAxis-Cm-albbm.js";import"./Layer-BvRSrkrt.js";import"./Text-CoSb7mYB.js";import"./DOMUtils-CJsccqgn.js";import"./Label-DOEvYZv6.js";import"./ZIndexLayer-yILhEk3Y.js";import"./types-BuwCBhFk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DiLU7ggZ.js";import"./symbol-BOFZ4ILC.js";import"./step-rHtSy8FE.js";import"./useElementOffset-C0xso2Z-.js";import"./uniqBy-BjwhPhif.js";import"./iteratee-B-u3NDKL.js";import"./ReactUtils-BqHSyciS.js";import"./ActivePoints-DjvL664p.js";import"./Dot-DP4gaPK3.js";import"./RegisterGraphicalItemId-DkNBI1Sa.js";import"./ErrorBarContext-BNplQJsE.js";import"./GraphicalItemClipPath-DikKl46E.js";import"./SetGraphicalItem-EApE1d4j.js";import"./useAnimationId-DBo0HAQE.js";import"./getRadiusAndStrokeWidthFromDot-Bhc0P-qN.js";import"./ActiveShapeUtils-BG4C0dYN.js";import"./isPlainObject-BxgfEpp7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H4hJrl9W.js";import"./Trapezoid-DHbRiH3v.js";import"./Sector-B3eubpfo.js";import"./Curve-CxvlU3dw.js";import"./Cross-DsTXFGbh.js";import"./index-Cm2tec04.js";import"./ChartSizeDimensions-56Hl6M0T.js";import"./OffsetShower-lCaRoXjj.js";import"./PlotAreaShower-Cn7QQOSS.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
