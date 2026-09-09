import{a as r}from"./iframe-3mrIZkil.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./RadialBarChartArgs-CrVaOc1U.js";import{p as d}from"./Page-Cj8EiXz7.js";import{R as i}from"./RadialBarChart-Ct0eSLiV.js";import{R as m}from"./RadialBar-Bm_UcwYD.js";import{T as p}from"./Tooltip-DR2XYmSX.js";const g={argTypes:n,component:i},a={name:"Simple",render:s=>r.createElement(i,{...s},r.createElement(m,{dataKey:"uv",activeShape:{fill:"red"},label:{position:"insideStart",fill:"white"}}),r.createElement(p,{defaultIndex:3})),args:{...l(n),data:d,width:800,height:400}},c=["API"];var e,t,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const b=Object.freeze(Object.defineProperty({__proto__:null,API:a,__namedExportsOrder:c,default:g},Symbol.toStringTag,{value:"Module"}));export{a as A,b as C};
