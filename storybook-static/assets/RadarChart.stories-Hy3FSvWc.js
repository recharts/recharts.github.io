import{a as e}from"./iframe-7Yqq7fCu.js";import{g as c}from"./utils-ePvtT4un.js";import{R as n}from"./RadarChartArgs-DPOlJbFs.js";import{p}from"./Page-Cj8EiXz7.js";import{R as o}from"./RadarChart-DrqAufI9.js";import{P as u}from"./PolarAngleAxis-DtlOaY5W.js";import{P as A}from"./PolarRadiusAxis-DPga0BHY.js";import{P as h}from"./PolarGrid-DTF2K5xw.js";import{L as f}from"./Legend-B0A2aPD8.js";import{T as R}from"./Tooltip-B_7JlKfR.js";import{R as y}from"./Radar-V1ZTpCge.js";const C={argTypes:n,component:o},r={name:"Simple",render:t=>e.createElement(o,{...t},e.createElement(u,{dataKey:"name"}),e.createElement(A,null),e.createElement(h,null),e.createElement(f,null),e.createElement(R,{defaultIndex:1}),e.createElement(y,{dataKey:"uv",stroke:"green",strokeOpacity:.7,fill:"green",fillOpacity:.5,strokeWidth:3})),args:{...c(n),data:p,width:800,height:300}},a={name:"Counter clockwise",render:t=>e.createElement(o,{...t},e.createElement(u,{dataKey:"name"}),e.createElement(A,null),e.createElement(h,null),e.createElement(y,{dataKey:"uv",stroke:"green",strokeOpacity:.7,fill:"green",fillOpacity:.5,strokeWidth:3})),args:{...c(n),data:p,width:800,height:300,startAngle:-270,endAngle:90}},k=["API","CounterClockwise"];var s,l,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Counter clockwise',
  render: (args: Args) => {
    return <RadarChart {...args}>
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <PolarGrid />
        <Radar dataKey="uv" stroke="green" strokeOpacity={0.7} fill="green" fillOpacity={0.5} strokeWidth={3} />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartArgs),
    data: pageData,
    width: 800,
    height: 300,
    startAngle: -270,
    endAngle: 90
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const v=Object.freeze(Object.defineProperty({__proto__:null,API:r,CounterClockwise:a,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{r as A,v as C};
