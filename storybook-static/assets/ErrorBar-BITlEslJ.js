import{u as n,j as r}from"./index-OmEe0b8A.js";import{M as s,C as p,a}from"./blocks-DDkqFHjC.js";import{C as m,A as i}from"./ErrorBar.stories-4QW14zTE.js";import"./iframe-jkWlGRao.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CafydseE.js";import"./index-l6IDK4X2.js";import"./index-lkQeFUlC.js";import"./utils-ePvtT4un.js";import"./ErrorBar-yA4niKZo.js";import"./Layer-DGNDN2U_.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJCkAT-c.js";import"./ErrorBarContext-CbF4zTiN.js";import"./RechartsWrapper-CYIxj0Xh.js";import"./zIndexSlice-BJ_azL3V.js";import"./throttle-BclcIM3t.js";import"./axisSelectors-B57c623a.js";import"./polarAxisSelectors-vXDHLkfy.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7YXqmgC.js";import"./index-CT6JOO-H.js";import"./renderedTicksSlice-MrcmxqRq.js";import"./index-BIDLCapd.js";import"./dataEntryStyles-ZVub37-6.js";import"./pageBackground-B7N8_bCe.js";import"./CSSTransitionAnimate-DKvtYGyw.js";import"./useAnimationId-CAUjhf76.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-Cz3uOrDa.js";import"./ScatterChart-Bqu-degv.js";import"./CartesianChart-DNa8wuZh.js";import"./ZIndexPortal-PvuD5_Md.js";import"./CategoricalChart-BIz6y0X4.js";import"./CartesianGrid-CsqRH0Ym.js";import"./CartesianAxis-vLbE4lIP.js";import"./Text-CsCVaUmy.js";import"./Label-C3QhHNfQ.js";import"./types-BwHsgyny.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./XAxis-B6q08DjL.js";import"./YAxis-Df9BpDFL.js";import"./Scatter-CS8jJw0N.js";import"./LabelList-BN7i6-QW.js";import"./activeStyles-EBU2roz0.js";import"./Curve-Ch6LAljQ.js";import"./step-CscB7pF3.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Coe7V1ij.js";import"./Symbols-wGnZNd4F.js";import"./symbol-BOEnk89t.js";import"./ActiveShapeUtils-KQXKVatm.js";import"./SetGraphicalItem-BoktD6a2.js";import"./useEffectiveDataKey-CJQQkbyt.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function dr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{dr as default};
