import{r as n,R as t}from"./iframe-CZrGjRVd.js";import{L as p}from"./LineChart-Bk-Iu9Nj.js";import{R as s}from"./zIndexSlice-DVGip-HY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-GyzhCgPJ.js";import{X as d}from"./XAxis-CseioX8F.js";import{Y as y}from"./YAxis-DvRRjJMV.js";import{L as u}from"./Legend-DamiN0od.js";import{L as h}from"./Line-v0oLTd-W.js";import{T as g}from"./Tooltip-OX_sIqSh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Db3bv7S_.js";import"./index-BNgNXemJ.js";import"./index-DxrI-k1l.js";import"./index-DAuCYBcx.js";import"./index-BqYtnYZK.js";import"./throttle-iaCNi1Qj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BcK_sHSr.js";import"./axisSelectors-DxaBLx_c.js";import"./resolveDefaultProps-DJ2k4-YE.js";import"./isWellBehavedNumber-sGwfAa8m.js";import"./d3-scale-uXV0YxbH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-HZeUFd.js";import"./chartDataContext-DtAKwxQ-.js";import"./CategoricalChart-BkyPecya.js";import"./CartesianAxis-Bv2Blqsa.js";import"./Layer-CQqaCNmW.js";import"./Text-BZ2aXp_V.js";import"./DOMUtils-DGi0GryR.js";import"./Label-D0FS6r7s.js";import"./ZIndexLayer-BIAG6lUs.js";import"./types-BqsVHy7N.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-DfJNg9cL.js";import"./symbol-r9RnqTaM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DOoW8cLw.js";import"./uniqBy-BSSdRogv.js";import"./iteratee-zsLWQ0iB.js";import"./Curve-DmlyDZC5.js";import"./step-1n_WS_bQ.js";import"./AnimatedItems-CMzmfQX_.js";import"./useAnimationId-Dfan-wHL.js";import"./ActivePoints-DzdtVF-l.js";import"./Dot-B_n5UQyN.js";import"./RegisterGraphicalItemId-CHZ0a46K.js";import"./ErrorBarContext-putfb1U3.js";import"./GraphicalItemClipPath-CrMwIhJh.js";import"./SetGraphicalItem-DKI6WvVx.js";import"./getRadiusAndStrokeWidthFromDot-DAppAzWA.js";import"./ActiveShapeUtils-Cxg-zL3x.js";import"./Cross-W8LAXQo4.js";import"./Rectangle-B1vqueAd.js";import"./util-Dxo8gN5i.js";import"./Sector-B_S4VSs-.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
