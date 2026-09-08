import{u as n,j as r}from"./index-CQ8yx-Wl.js";import{M as p,C as s,a}from"./blocks-DacPCQaj.js";import{C as m,A as i}from"./ErrorBar.stories-CEtjGx4K.js";import"./iframe-SuqF0IOU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DY-qAKzO.js";import"./index-iK0jM_n6.js";import"./index-VBcGpDGq.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DEYE4Pn0.js";import"./Layer-CeZWaGzt.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7DzpjnqO.js";import"./ErrorBarContext-BJEyAykc.js";import"./RechartsWrapper-Bg2tG11C.js";import"./zIndexSlice-DfamN9Zs.js";import"./throttle-D6-FoWPM.js";import"./isWellBehavedNumber-DJK-MsfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DbgUQ8Ul.js";import"./d3-scale-DnD8-5rl.js";import"./index-DLroYRR9.js";import"./renderedTicksSlice-DomOKpq5.js";import"./index-DHZGQ52F.js";import"./RegisterGraphicalItemId-BaNEX7Pr.js";import"./useId-CsqHk6Y-.js";import"./CSSTransitionAnimate-DbpDkpvd.js";import"./useAnimationId-ol_mxPID.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-BN_mfTvc.js";import"./useBackwardsCompatibleTheme-C6-DbdWl.js";import"./ScatterChart-3iXZ7uFQ.js";import"./CartesianChart-Cji0pvqd.js";import"./chartDataContext-B0QyEg6f.js";import"./CategoricalChart-D2xX8P6u.js";import"./CartesianGrid-DMiSp8n0.js";import"./CartesianAxis-Bvk6yXFf.js";import"./Text-UuMUK1_u.js";import"./DOMUtils-DsJOOh9b.js";import"./Label-9O6_T9C4.js";import"./types-CS_OGYEB.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./XAxis-DR2rtjC5.js";import"./YAxis-CUvLYKI6.js";import"./Scatter-BCUbevru.js";import"./AnimatedItems-DXL71NvC.js";import"./Curve-E3qca46q.js";import"./step-Crr8VZH2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C3LWRUAx.js";import"./Symbols-D-3Eog6Z.js";import"./symbol-B7wzKwMw.js";import"./ActiveShapeUtils-DYWxkXZ9.js";import"./GraphicalItemClipPath-TmHiHpN1.js";import"./SetGraphicalItem-C7X7ybgb.js";import"./graphicalItemIdentity-CdZfZkJ-.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
