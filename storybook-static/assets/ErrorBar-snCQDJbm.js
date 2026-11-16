import{u as n,j as r}from"./index-Cg2vDpjV.js";import{M as s,C as p,a}from"./blocks-D3HH9OAf.js";import{C as l,A as i}from"./ErrorBar.stories-BVxlNug3.js";import"./iframe-DQXFH2fN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LVwk1DdF.js";import"./index-BledrYYe.js";import"./index-Bra-aG0C.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BnqnsKKW.js";import"./Layer-B0dm1oba.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-lSPh-jGh.js";import"./ErrorBarContext-CbK3TAVw.js";import"./RechartsWrapper-FcCSE1mG.js";import"./zIndexSlice-Dfa7PPo3.js";import"./throttle-CBXVztye.js";import"./axisSelectors-DJbzZfhu.js";import"./polarAxisSelectors-D125t7LL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XeOVwhgh.js";import"./index-CIcJU2zj.js";import"./renderedTicksSlice-CbHdjAK6.js";import"./index-BsheJTgc.js";import"./fillDefinitions-KRhWslMp.js";import"./dataEntryStyles-CDXKXbSY.js";import"./Label-CZ1SHjxx.js";import"./Text-DcdnatC4.js";import"./ZIndexLayer-D9yot1xi.js";import"./CSSTransitionAnimate-CzzzkyIc.js";import"./useAnimationId-BlZ_idpE.js";import"./util-Dxo8gN5i.js";import"./ScatterChart-D4jNruMH.js";import"./CartesianChart-DQGbpwTu.js";import"./chartDataContext-DJ78QJpQ.js";import"./CategoricalChart-t_6GcrEg.js";import"./CartesianGrid-CvQm-C4w.js";import"./CartesianAxis-FqFP5ld6.js";import"./types-CN3-AGJF.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./XAxis-DeVff73G.js";import"./YAxis-DxKBEaoV.js";import"./Scatter-D6dY_iHu.js";import"./activeStyles-DgOGJt0j.js";import"./Curve-Dawv8-Of.js";import"./step-Bu-hwkdA.js";import"./path-DyVhHtw_.js";import"./tooltipContext-OBuBQcD_.js";import"./Symbols-D7I-QI86.js";import"./symbol-8Qaz948q.js";import"./ActiveShapeUtils-CbcAbfiK.js";import"./SetGraphicalItem-CRYZ3Qzj.js";import"./useEffectiveDataKey-FX7cYr8p.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
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
`,r.jsx(a,{of:i})]})}function mr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{mr as default};
