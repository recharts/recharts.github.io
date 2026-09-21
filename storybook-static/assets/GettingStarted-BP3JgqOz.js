import{u as p,j as t}from"./index-dhzYaQqj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-B6VzaaLK.js";import{L as o}from"./Line-J4GxzHaN.js";import{C as i}from"./CartesianGrid-x83Z4uNt.js";import{X as s}from"./XAxis-DGeDsLv7.js";import{Y as d}from"./YAxis-DdYWFMJf.js";import{T as m}from"./Tooltip-C3K0gvKc.js";import"./iframe-Br90fEj5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CvaMq-_r.js";import"./zIndexSlice-DrwH1jfn.js";import"./throttle-BtlLZFJi.js";import"./index-xBkJObNc.js";import"./index-CFRdOJzL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJrJLZqi.js";import"./isWellBehavedNumber-Cp5K1yLZ.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DfYTYXSn.js";import"./d3-scale-BG2Gp8e0.js";import"./index-DZZQKCIH.js";import"./index-DCsT-Kwq.js";import"./renderedTicksSlice-BJ1ZC3VH.js";import"./index-Ux_jSD8J.js";import"./CartesianChart-DhQLJKy3.js";import"./chartDataContext-BJ8faAsD.js";import"./CategoricalChart-CWTSAfNd.js";import"./Layer-vC2iAjl-.js";import"./Curve-ce5L2urE.js";import"./types-BSZ9BCSJ.js";import"./step-a76R8hck.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDiDUfRj.js";import"./Label-BXLkvKad.js";import"./Text-CYmtT5C7.js";import"./DOMUtils-DQ9aPFfp.js";import"./useId-BR1QS50g.js";import"./useBackwardsCompatibleTheme-plzmt3ou.js";import"./ZIndexLayer-1J001_po.js";import"./useAnimationId-CxK571sH.js";import"./ActivePoints-CjeI93YB.js";import"./Dot-CzsTOlQY.js";import"./RegisterGraphicalItemId-nSf1Px3R.js";import"./ErrorBarContext-DkLC3v4H.js";import"./GraphicalItemClipPath-BqifZnDC.js";import"./SetGraphicalItem-jDsg55aJ.js";import"./getRadiusAndStrokeWidthFromDot-Bq3tql2n.js";import"./ActiveShapeUtils-DUSmPc-T.js";import"./useGraphicalItemIdentity-BFkPxhIu.js";import"./CartesianAxis-De1AZe26.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DmwgRP6o.js";import"./uniqBy-IvYMjdnd.js";import"./iteratee-CwMz1arw.js";import"./Cross-ctkwK30O.js";import"./Rectangle-BZ-ww0Nu.js";import"./util-Dxo8gN5i.js";import"./Sector-Cl71ey6c.js";const l=(...r)=>{const{x:e,y:c,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${c})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
`,t.jsx(a,{width:400,height:400,data:n,children:t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"})}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{}),t.jsx(m,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function kt(r={}){const{wrapper:e}={...p(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(h,{...r})}):h(r)}export{l as CustomizedAxisTick,kt as default};
