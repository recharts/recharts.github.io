import{R as r}from"./iframe-CIqcR0nr.js";import{g as d}from"./utils-ePvtT4un.js";import{R as i}from"./RadialBarChartArgs-CrVaOc1U.js";import{p as m}from"./Page-Cj8EiXz7.js";import{R as s}from"./RadialBarChart-DwCxhV1_.js";import{R as p}from"./RadialBar-BUderKMR.js";import{T as n}from"./Tooltip-CAkkWeYW.js";const g={argTypes:i,component:s},a={name:"Simple",render:l=>r.createElement(s,{...l},r.createElement(p,{dataKey:"uv",activeShape:{fill:"red"},label:{position:"insideStart",fill:"white"}}),r.createElement(n,{defaultIndex:3})),args:{...d(i),data:m,width:800,height:400}};var e,t,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: StorybookArgs) => {
    return <RadialBarChart {...args}>
        <RadialBar dataKey="uv" activeShape={{
        fill: 'red'
      }} label={{
        position: 'insideStart',
        fill: 'white'
      }} />
        <Tooltip defaultIndex={3} />
      </RadialBarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartArgs),
    data: pageData,
    width: 800,
    height: 400
  }
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const c=["API"],b=Object.freeze(Object.defineProperty({__proto__:null,API:a,__namedExportsOrder:c,default:g},Symbol.toStringTag,{value:"Module"}));export{a as A,b as C};
