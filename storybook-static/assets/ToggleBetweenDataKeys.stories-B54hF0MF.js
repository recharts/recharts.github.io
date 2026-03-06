import{r as n,e as t}from"./iframe-CwQqlQJt.js";import{L as p}from"./LineChart-DfS_0INM.js";import{R as s}from"./arrayEqualityCheck-BajvuZUd.js";import{C as c}from"./CartesianGrid-DF56C0NO.js";import{X as l}from"./XAxis-WQ1W94Oc.js";import{Y as d}from"./YAxis-DZx2Qb_9.js";import{L as y}from"./Legend-D6ctV7Iy.js";import{L as h}from"./Line-D-d04PHZ.js";import{T as u}from"./Tooltip-BrhBI4fk.js";import{R as g}from"./RechartsHookInspector-DE9uvm11.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-mfnwaW4T.js";import"./index-_RolKYTX.js";import"./immer-Bw_kturo.js";import"./hooks-CEEbPwwQ.js";import"./axisSelectors-CiLIxTM1.js";import"./d3-scale-MvDvfgbn.js";import"./zIndexSlice-C8qpENF4.js";import"./renderedTicksSlice-DD88ZL81.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CB-rBxO3.js";import"./chartDataContext-DhwkPQ9I.js";import"./CategoricalChart-D6AbF0nJ.js";import"./resolveDefaultProps-BwAiebew.js";import"./CartesianAxis--UFkxmwi.js";import"./Layer-BfeVm7hl.js";import"./Text-DEfSdBAV.js";import"./DOMUtils-Dk-0Y4qu.js";import"./Label-L2ClqQk9.js";import"./ZIndexLayer-BhfIIgcP.js";import"./types-iTXorHjM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B_0LQQd8.js";import"./symbol-BrIbO22w.js";import"./step-CzpXmVwk.js";import"./useElementOffset-XAjKA6pX.js";import"./uniqBy-HUwiZ0iN.js";import"./iteratee-DxQhEFlx.js";import"./ReactUtils-3SZUbpqz.js";import"./ActivePoints-DZhXgF4L.js";import"./Dot-C5aKWjVV.js";import"./RegisterGraphicalItemId-j64FPojn.js";import"./ErrorBarContext-CnIL0nCY.js";import"./GraphicalItemClipPath-CGVVVryc.js";import"./SetGraphicalItem-B838l6ba.js";import"./useAnimationId-BkdqwMyM.js";import"./getRadiusAndStrokeWidthFromDot-DbN4thuv.js";import"./ActiveShapeUtils-Cc01wXEA.js";import"./isPlainObject-BdAdFHxg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfTwe_Uy.js";import"./Trapezoid-DuD6k8aH.js";import"./Sector-DlF65nWv.js";import"./Curve-DVUJSzGy.js";import"./Cross-C-HRGopZ.js";import"./index-D_-HOL7T.js";import"./ChartSizeDimensions-B33reZ_o.js";import"./OffsetShower-CD2wvvOr.js";import"./PlotAreaShower-CwvzOICJ.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
