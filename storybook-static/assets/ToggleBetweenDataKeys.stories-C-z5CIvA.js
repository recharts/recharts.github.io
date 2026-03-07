import{r as n,e as t}from"./iframe-BRu_qZg1.js";import{L as p}from"./LineChart-DNmDi6TE.js";import{R as s}from"./arrayEqualityCheck-BgwbYKtC.js";import{C as c}from"./CartesianGrid-fEnEi-FK.js";import{X as l}from"./XAxis-CkACgIfp.js";import{Y as d}from"./YAxis-BW9q8bD-.js";import{L as y}from"./Legend-BJ_ZIhKW.js";import{L as h}from"./Line-BQ93j6Ys.js";import{T as u}from"./Tooltip-CmHJro1j.js";import{R as g}from"./RechartsHookInspector-CJy-wMRv.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9gb15RL.js";import"./index-DYVbWT0W.js";import"./immer-CiIZXnz-.js";import"./hooks-cMPGG-ti.js";import"./axisSelectors-WgiG_2zA.js";import"./d3-scale-DgD4kZyM.js";import"./zIndexSlice-CjcwtRul.js";import"./renderedTicksSlice-XQiDw47v.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DNVXg1S9.js";import"./chartDataContext-BYCMtEPQ.js";import"./CategoricalChart-CRbty2Pg.js";import"./resolveDefaultProps-ClDGSYA8.js";import"./CartesianAxis-D1FaLS9g.js";import"./Layer-BK1KTr5e.js";import"./Text-CZ6mhO2l.js";import"./DOMUtils-Np4d91u5.js";import"./Label-PVHJRfQa.js";import"./ZIndexLayer-C8D4smXi.js";import"./types-CV4LMBiy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DM4rdUCn.js";import"./symbol-D-gvh6cA.js";import"./step-XF9-athh.js";import"./useElementOffset-DDNpUSNQ.js";import"./uniqBy-L6IG3ASA.js";import"./iteratee-CIdgG0p2.js";import"./ReactUtils-gnwCD4Om.js";import"./ActivePoints-lX6lnj3q.js";import"./Dot-DbWS2m0E.js";import"./RegisterGraphicalItemId-KDJ0wyU8.js";import"./ErrorBarContext-CfL1_1JT.js";import"./GraphicalItemClipPath-rMExk2wU.js";import"./SetGraphicalItem-DZJju-u_.js";import"./useAnimationId-D8a-5J-X.js";import"./getRadiusAndStrokeWidthFromDot-CXiKui9m.js";import"./ActiveShapeUtils-jyCby69N.js";import"./isPlainObject-Dl8lI7a1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99z7Ziu.js";import"./Trapezoid-CJsPOYXY.js";import"./Sector-7rMGIqOV.js";import"./Curve-CSGMMXpz.js";import"./Cross-DvVkkamE.js";import"./index-CUWwfEzD.js";import"./ChartSizeDimensions-DNlI3sC4.js";import"./OffsetShower-Cm8zLz0R.js";import"./PlotAreaShower-Bj1zpgLw.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
