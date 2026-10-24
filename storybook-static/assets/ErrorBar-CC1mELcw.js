import{u as n,j as r}from"./index-DvyKjhUD.js";import{M as p,C as s,a}from"./blocks-BVfKIMdP.js";import{C as m,A as i}from"./ErrorBar.stories-DaWx4L8b.js";import"./iframe-CptpVVdK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BTwylabs.js";import"./index-alo09WMF.js";import"./index-CniHkqMt.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CStykr6Q.js";import"./Layer-DZV5gQWy.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bdo80tkX.js";import"./ErrorBarContext-BZkeDBub.js";import"./RechartsWrapper-c3RFdf0m.js";import"./zIndexSlice-CAnxLxZK.js";import"./throttle-BVKLcYc0.js";import"./isWellBehavedNumber-Cb3PSSsF.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DPTiSWkh.js";import"./d3-scale-DZZpobVW.js";import"./index-Dqps63Gr.js";import"./renderedTicksSlice-Cw--JOgv.js";import"./index-Bya_Ui15.js";import"./RegisterGraphicalItemId-BgCOPa3U.js";import"./useId-BHxaLpBq.js";import"./CSSTransitionAnimate-h9bnO9BM.js";import"./useAnimationId-CHix4qCt.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-DRWh5tG_.js";import"./useBackwardsCompatibleTheme-Ck1iBTHP.js";import"./ScatterChart-BA_-DZg8.js";import"./CartesianChart-kEptpjHt.js";import"./chartDataContext-YVUr32e2.js";import"./CategoricalChart-DUkp-alm.js";import"./CartesianGrid-jU27Ye3i.js";import"./CartesianAxis-CgAlW-mI.js";import"./Text-DTbKMiqG.js";import"./pageBackground-0u46-xLx.js";import"./Label-DWXJ-Xrk.js";import"./dataEntryStyles-pGU1xid_.js";import"./types-LYqggaBA.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./XAxis-r2oUn28C.js";import"./YAxis-DNukS_kg.js";import"./Scatter-BhRQSK5t.js";import"./activeStyles-tsd2tFv6.js";import"./Curve-DFA3txiV.js";import"./step-BF-v6b5j.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bus5sfrw.js";import"./Symbols-L3kNcT1G.js";import"./symbol-B8SgR90p.js";import"./ActiveShapeUtils-D7m_xdxo.js";import"./SetGraphicalItem-CBYCujS3.js";import"./useEffectiveDataKey-DVLIQZiI.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:r.jsx(e.p,{children:`Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the
lower bound, second value is the upper bound.`})})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`The values provided are relative to the main data value. For example, if the main data value is 10 and the error value
is 2, the error bar will extend from 8 to 12 for symmetric error bars.`})}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value as the reference point for calculating the
error bar positions.`})}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(a,{of:i})]})}function hr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{hr as default};
