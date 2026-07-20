import{u as c,j as t}from"./index-I_XfylHF.js";import{p as r}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DKUl6LVZ.js";import{L as o}from"./Line-fP0RojnX.js";import{C as i}from"./CartesianGrid-B1GeT-Va.js";import{X as s}from"./XAxis-CSEJquda.js";import{Y as d}from"./YAxis-DWbbwN0w.js";import{T as m}from"./Tooltip-CA-9nIiI.js";import"./iframe-CYE_KjLp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8_njvAZI.js";import"./zIndexSlice-BJ5AXs-O.js";import"./throttle-CMwKm87I.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CwiYvwQ-.js";import"./index-CN526hDZ.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./axisSelectors-Cz15TeqU.js";import"./d3-scale-BYal7h8i.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CategoricalChart-DxSK9VeV.js";import"./Layer-BAAO02Y6.js";import"./Curve-DOUq4MA6.js";import"./types-Bh5it62Q.js";import"./step-CrVHI12K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDp5Wq7I.js";import"./Label-DungM5aU.js";import"./Text-D9p9m1qq.js";import"./DOMUtils-DNa7oSWn.js";import"./ZIndexLayer-Cs3N_7G3.js";import"./useAnimationId-D2RJw3gt.js";import"./ActivePoints-B2OdHoBR.js";import"./Dot-CNeFMePA.js";import"./RegisterGraphicalItemId-BVUvorB4.js";import"./ErrorBarContext-C6lKsYq3.js";import"./GraphicalItemClipPath-DSlcdUco.js";import"./SetGraphicalItem-DsAOjH_V.js";import"./getRadiusAndStrokeWidthFromDot-eF6yQmlC.js";import"./ActiveShapeUtils-8xIbBFmr.js";import"./CartesianAxis-9Uyc6PiW.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-Bd-GUmxf.js";import"./uniqBy-Dvg3CN9x.js";import"./iteratee-olANGOHV.js";import"./Cross-9R2MLVqE.js";import"./Rectangle-B6bKXxl8.js";import"./util-Dxo8gN5i.js";import"./Sector-Dtn8lnsy.js";const l=(...n)=>{const{x:e,y:p,stroke:y,payload:x}=n[0];return t.jsx("g",{transform:`translate(${e},${p})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.h2,{id:"choose-the-type-of-chart-you-need",children:"Choose the type of chart you need."}),`
`,t.jsx(e.p,{children:`With the help of babel-plugin-recharts, we can import components we actually need, making the project smaller than otherwise.
Generate a simple chart by using plain javascript data (usually an array of objects).`}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { LineChart, Line } from 'recharts';
const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
`})}),`
`,t.jsx(a,{width:400,height:400,data:r,children:t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"})}),`
`,t.jsx(e.h2,{id:"add-components-that-you-want-to-be-drawn",children:"Add components that you want to be drawn"}),`
`,t.jsx(e.p,{children:"LineChart can have XAxis, YAxis, Legend, CartesianGrid and so on."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
`})}),`
`,t.jsxs(a,{width:600,height:300,data:r,children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
`,t.jsx(e.h2,{id:"adjust-the-props-of-some-components",children:"Adjust the props of some components"}),`
`,t.jsx(e.p,{children:"For example, margin-right should be bigger in order to display the right-most x-axis label and the stroke style of the cartesian grid can be dashed for better readability."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
`})}),`
`,t.jsxs(a,{width:600,height:300,data:r,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
`,t.jsx(e.h2,{id:"add-interactions",children:"Add interactions"}),`
`,t.jsx(e.p,{children:"We can easily drop-in a Tooltip component and have rich hovering tooltip functionality."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);
`})}),`
`,t.jsxs(a,{width:600,height:300,data:r,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{}),t.jsx(m,{})]}),`
`,t.jsx(e.h2,{id:"customize-your-components",children:"Customize your components"}),`
`,t.jsx(e.p,{children:"For example, you can edit your x-axis label very easily by passing in a custom axis tick render function. You can do similar things with other graphs as well, such as custom shapes for bar charts and much more!"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import React, { PureComponent } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const CustomizedAxisTick = (...args) => {
  const { x, y, stroke, payload } = args[0];
  return (
    <g transform={\`translate(\${x},\${y})\`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
    <YAxis />
    <Tooltip />
  </LineChart>
);
`})}),`
`,`
`,t.jsxs(a,{width:600,height:300,data:r,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function ut(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(h,{...n})}):h(n)}export{l as CustomizedAxisTick,ut as default};
