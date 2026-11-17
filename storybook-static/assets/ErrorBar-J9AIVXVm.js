import{u as n,j as r}from"./index-BrQ4PZJi.js";import{M as s,C as p,a}from"./blocks-Dxe0U5HB.js";import{C as l,A as i}from"./ErrorBar.stories-BClnH6P9.js";import"./iframe-Czzk5Bx-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtnBEbb_.js";import"./index-CElqLkJS.js";import"./index-yeT-45bY.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DgZGfs9P.js";import"./Layer-CarPpKFV.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Csc694qB.js";import"./ErrorBarContext-BTwK65Em.js";import"./RechartsWrapper-C5Ex_ZCH.js";import"./zIndexSlice-CcZCAOP2.js";import"./throttle-Dlw7_zhK.js";import"./axisSelectors-BthV4RsX.js";import"./polarAxisSelectors-Bgc5VpYB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CS0QJ-EZ.js";import"./index-CAks9lDH.js";import"./renderedTicksSlice-BwJ2p4Mi.js";import"./index-CsxmvEat.js";import"./fillDefinitions-DaR2TDo1.js";import"./dataEntryStyles-C8IdewjD.js";import"./Label-CoDIIawi.js";import"./Text-CSorP4yu.js";import"./ZIndexLayer-DISaA8MD.js";import"./CSSTransitionAnimate-CKb0XC3d.js";import"./useAnimationId-BMmeHowj.js";import"./util-Dxo8gN5i.js";import"./ScatterChart-BCAvLL5d.js";import"./CartesianChart-D3FUkn-t.js";import"./chartDataContext--mSdRmgw.js";import"./CategoricalChart-a1Xr9UIu.js";import"./CartesianGrid-DwzIWQpU.js";import"./CartesianAxis-5U6hsfI6.js";import"./types-Bykt0Hlw.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./XAxis-DWUu3518.js";import"./YAxis-DskmDTW_.js";import"./Scatter-Ce6-oo2_.js";import"./activeStyles-Dd2x1Ur1.js";import"./Curve-DNAnmcp5.js";import"./step-C5vJ1U24.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Ds2DbmQs.js";import"./Symbols-DOiO9HXo.js";import"./symbol-DOUGW8Ut.js";import"./ActiveShapeUtils-BDX2WB3N.js";import"./SetGraphicalItem-DZqA_DJ9.js";import"./useEffectiveDataKey-BCok4F6X.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
