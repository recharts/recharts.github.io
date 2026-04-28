import{e}from"./iframe-Ucw_npMd.js";import{g as n}from"./utils-ePvtT4un.js";import{R as s}from"./RadarChartArgs-CZJR9Ha0.js";import{p as i}from"./Page-Cj8EiXz7.js";import{R as m}from"./RadarChart-Ck_DkTeK.js";import{P as d}from"./PolarAngleAxis-DI1LXVAU.js";import{P as p}from"./PolarRadiusAxis-BM-Y_LDy.js";import{P as c}from"./PolarGrid-Nhux5KNV.js";import{L as g}from"./Legend-pjRhjC8Y.js";import{T as f}from"./Tooltip-DhN8fm3x.js";import{R as u}from"./Radar-NtQN7JmR.js";import{R as h}from"./RechartsHookInspector-Egzn0asm.js";const A={argTypes:s,component:m},r={name:"Simple",render:l=>e.createElement(m,{...l},e.createElement(d,{dataKey:"name"}),e.createElement(p,null),e.createElement(c,null),e.createElement(g,null),e.createElement(f,{defaultIndex:1}),e.createElement(u,{dataKey:"uv",stroke:"green",strokeOpacity:.7,fill:"green",fillOpacity:.5,strokeWidth:3}),e.createElement(h,null)),args:{...n(s),data:i,width:800,height:300}};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <RadarChart {...args}>
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <PolarGrid />
        <Legend />
        <Tooltip defaultIndex={1} />
        <Radar dataKey="uv" stroke="green" strokeOpacity={0.7} fill="green" fillOpacity={0.5} strokeWidth={3} />
        <RechartsHookInspector />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartArgs),
    data: pageData,
    width: 800,
    height: 300
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const R=["API"],j=Object.freeze(Object.defineProperty({__proto__:null,API:r,__namedExportsOrder:R,default:A},Symbol.toStringTag,{value:"Module"}));export{r as A,j as C};
