import{a as t}from"./iframe-SuqF0IOU.js";import{g as p}from"./utils-ePvtT4un.js";import{T as n}from"./TooltipArgs-TAq2cD4k.js";import{T as i}from"./Tooltip-CA2lSlIq.js";import{R as c}from"./zIndexSlice-DfamN9Zs.js";import{L as h}from"./LineChart-BNV_EBls.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-BjrkBSD6.js";const l={argTypes:n,component:i},e={render:g=>{const[m,r]=[600,300];return t.createElement(c,{width:"100%",height:r},t.createElement(h,{width:m,height:r,margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(f,{dataKey:"uv"}),t.createElement(i,{...g})))},args:{...p(n),trigger:"hover",shared:!1,useTranslate3d:!1}},u=["API"];var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Line dataKey="uv" />
          {/* The target component */}
          <Tooltip {...args} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const S=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{e as A,S as C};
