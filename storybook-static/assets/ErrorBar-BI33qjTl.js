import{j as r}from"./jsx-runtime-DAQBcvz8.js";import{useMDXComponents as n}from"./index-BcTA99rr.js";import{M as p,C as s,a}from"./blocks-DjSXAnwn.js";import{C as m,A as i}from"./ErrorBar.stories-BlwulsZa.js";import"./iframe-eaOsasXA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D4X9rB5g.js";import"./utils-ePvtT4un.js";import"./ErrorBar-jQFGBBiB.js";import"./Layer-CEQ15rDn.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRN_chMz.js";import"./ErrorBarContext-BRJpaXpn.js";import"./RechartsWrapper-kQIwCL0D.js";import"./arrayEqualityCheck-CMs0gYkZ.js";import"./immer-h0oz4gDz.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CBq7QNMe.js";import"./hooks-DkQXEwbK.js";import"./axisSelectors-rZ1oBaef.js";import"./d3-scale-fyi29fM7.js";import"./zIndexSlice-CQVRJFSN.js";import"./renderedTicksSlice-HUT3i4LQ.js";import"./RegisterGraphicalItemId-1T1LHaRb.js";import"./CSSTransitionAnimate-BBq15jQ6.js";import"./useAnimationId-Cipx0nDt.js";import"./ZIndexLayer-4Bmx0L-z.js";import"./ScatterChart-BP3V3P5P.js";import"./CartesianChart-DqLib-3F.js";import"./chartDataContext-BZaY1x-g.js";import"./CategoricalChart-BHzek6ba.js";import"./CartesianGrid-XpHpCMJI.js";import"./CartesianAxis-QrZ9YuOP.js";import"./Text-CS5oLB7f.js";import"./DOMUtils-DKDW8odg.js";import"./Label-CM17nvk9.js";import"./types-DVEQRe7O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-3ftlLggt.js";import"./YAxis-D0SSpyRh.js";import"./Scatter-IpfxAzIy.js";import"./ReactUtils-rQN1ow78.js";import"./Curve-BpLwOdP7.js";import"./step-wTrvujLP.js";import"./tooltipContext-Cj5Ji5q3.js";import"./Symbols-DwawNnsL.js";import"./symbol-DkR6dB45.js";import"./ActiveShapeUtils-DuB5RKi8.js";import"./isPlainObject-DOptfpMt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCXniG-Q.js";import"./Trapezoid-B7u96FyR.js";import"./Sector-DlrpmWZs.js";import"./GraphicalItemClipPath-DHbALYaQ.js";import"./SetGraphicalItem-CI6Uk2ug.js";import"./RechartsHookInspector-CfQxcoqC.js";import"./ChartSizeDimensions-DQ43uIY8.js";import"./OffsetShower-Y12_Isjl.js";import"./PlotAreaShower-ND2vevs1.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
