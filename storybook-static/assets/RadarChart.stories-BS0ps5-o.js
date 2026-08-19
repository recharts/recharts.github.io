import{R as e}from"./iframe-W15_yS8y.js";import{g as l}from"./utils-ePvtT4un.js";import{R as s}from"./RadarChartArgs-CZJR9Ha0.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as m}from"./RadarChart-Bu27Sa3L.js";import{P as d}from"./PolarAngleAxis-BJB4rXeP.js";import{P as p}from"./PolarRadiusAxis-BKsHmkcG.js";import{P as g}from"./PolarGrid-DPRyzmGn.js";import{L as c}from"./Legend-B-cKma5Y.js";import{T as f}from"./Tooltip-C7MXsF6u.js";import{R as u}from"./Radar-CPTh0JbM.js";const A={argTypes:s,component:m},r={name:"Simple",render:i=>e.createElement(m,{...i},e.createElement(d,{dataKey:"name"}),e.createElement(p,null),e.createElement(g,null),e.createElement(c,null),e.createElement(f,{defaultIndex:1}),e.createElement(u,{dataKey:"uv",stroke:"green",strokeOpacity:.7,fill:"green",fillOpacity:.5,strokeWidth:3})),args:{...l(s),data:n,width:800,height:300}};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <RadarChart {...args}>
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <PolarGrid />
        <Legend />
        <Tooltip defaultIndex={1} />
        <Radar dataKey="uv" stroke="green" strokeOpacity={0.7} fill="green" fillOpacity={0.5} strokeWidth={3} />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartArgs),
    data: pageData,
    width: 800,
    height: 300
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const y=["API"],b=Object.freeze(Object.defineProperty({__proto__:null,API:r,__namedExportsOrder:y,default:A},Symbol.toStringTag,{value:"Module"}));export{r as A,b as C};
