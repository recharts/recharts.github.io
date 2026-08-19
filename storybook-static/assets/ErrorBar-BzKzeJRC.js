import{u as n,j as r}from"./index-BMVfEb7n.js";import{M as s,C as p,a}from"./blocks-ha2jADCQ.js";import{C as m,A as i}from"./ErrorBar.stories-ByGFV8yd.js";import"./iframe-W15_yS8y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DJoXYd_8.js";import"./index-C4zsw-i5.js";import"./index-CzfOThSk.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CguJQLlz.js";import"./Layer-mEuTxfDi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-PB6tg1uE.js";import"./ErrorBarContext-C5-u35E5.js";import"./RechartsWrapper-B53AJGL_.js";import"./zIndexSlice-KjfXmz6K.js";import"./throttle-Dvj2OlWT.js";import"./isWellBehavedNumber-J_RQo-Gx.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Df7Hn4Pb.js";import"./axisSelectors-D1dvC9r7.js";import"./d3-scale-DaTRSSxE.js";import"./renderedTicksSlice--xVLPDDU.js";import"./RegisterGraphicalItemId-qtKCK3s0.js";import"./CategoricalChart-DCYct-dD.js";import"./CSSTransitionAnimate-D3_IPJ7d.js";import"./useAnimationId-B9um5jhW.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-DRPG0BG4.js";import"./ScatterChart-B7qkcauQ.js";import"./CartesianChart-CGOzuY2G.js";import"./chartDataContext-CMgd62s5.js";import"./CartesianGrid-BbZSyktV.js";import"./CartesianAxis-lMcf7VGx.js";import"./Text-BvMd1KWD.js";import"./DOMUtils-Mq767cy3.js";import"./useBackwardsCompatibleTheme-CVh47B6N.js";import"./Label-v2JLpAzt.js";import"./types-DbtskFGe.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./XAxis-8Au-a6fB.js";import"./YAxis-CxEXFC67.js";import"./Scatter-BfycTJbA.js";import"./AnimatedItems-CZGuNW2p.js";import"./Curve-CZbGXK3M.js";import"./step-DFacBfaf.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dhbi8ip2.js";import"./Symbols-By7z1KVb.js";import"./symbol-DiB428ur.js";import"./ActiveShapeUtils-CzKUxwm_.js";import"./GraphicalItemClipPath-DHit8l0N.js";import"./SetGraphicalItem-BYTBa9Xv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
