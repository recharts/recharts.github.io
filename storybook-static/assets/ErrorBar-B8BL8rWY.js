import{u as n,j as r}from"./index-CJxp3CVa.js";import{M as s,C as a,a as p}from"./blocks-m37shd7K.js";import{C as l,A as i}from"./ErrorBar.stories-CIddvjPU.js";import"./iframe-GMBZ_Ugx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CWyz9jhc.js";import"./index-BJeMs6TD.js";import"./index-Gz1Qo9An.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DDZIQcc-.js";import"./Layer-BXGTwaUB.js";import"./get-Gz1PRcGr.js";import"./resolveDefaultProps-CaBwGHvy.js";import"./ErrorBarContext-C1t_9iin.js";import"./RechartsWrapper-B0SxcSOH.js";import"./zIndexSlice-CaGWsk0_.js";import"./immer-8AAf0mWE.js";import"./isWellBehavedNumber-CHbHfbVW.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B_gRMuPi.js";import"./renderedTicksSlice-CW6yCQrF.js";import"./axisSelectors-CTNvdk-R.js";import"./d3-scale-DrE5OPOC.js";import"./RegisterGraphicalItemId-Dh_QLlB5.js";import"./CategoricalChart-CElM-v-_.js";import"./CSSTransitionAnimate-D0XVryZx.js";import"./useAnimationId-DgxmZKXq.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-DxP6hcPK.js";import"./ScatterChart-C4p0JAOk.js";import"./CartesianChart-rtXvtu0b.js";import"./chartDataContext-CUGtjOSs.js";import"./CartesianGrid-Bfv7sfJd.js";import"./CartesianAxis-DMU5FiQJ.js";import"./Text-xcPGheUs.js";import"./DOMUtils-BjtWwWtu.js";import"./Label-BaqULLaE.js";import"./types-M4hw7OKT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-CWBxARwY.js";import"./YAxis-B3CJ0t9T.js";import"./Scatter-0V0rNYMT.js";import"./AnimatedItems-NvoGhX2w.js";import"./Curve-DWsbrokm.js";import"./step-D2IVGUQU.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BN4wceTB.js";import"./Symbols-DeSiMhF3.js";import"./symbol-Ds44gbWS.js";import"./ActiveShapeUtils-CK3PQT9Y.js";import"./GraphicalItemClipPath-DlEa2W6_.js";import"./SetGraphicalItem-CZxAdJP0.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
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
`,r.jsx(p,{of:i})]})}function pr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{pr as default};
