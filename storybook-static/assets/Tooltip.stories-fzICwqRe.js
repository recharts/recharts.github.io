import{e}from"./iframe-VKSiBROl.js";import{g}from"./utils-ePvtT4un.js";import{T as i}from"./TooltipArgs-B4vqbkYQ.js";import{T as n}from"./Tooltip-Bwd3S6gV.js";import{R as c}from"./arrayEqualityCheck-BB0HA1wg.js";import{L as h}from"./LineChart-BpqRZu6s.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BVKPMqu3.js";import{R as f}from"./RechartsHookInspector-Bk4R2bPq.js";const u={argTypes:i,component:n},t={render:m=>{const[p,r]=[600,300];return e.createElement(c,{width:"100%",height:r},e.createElement(h,{width:p,height:r,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(d,{dataKey:"uv"}),e.createElement(n,{...m}),e.createElement(f,null)))},args:{...g(i),trigger:"hover",shared:!1,useTranslate3d:!1}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const T=["API"],H=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:T,default:u},Symbol.toStringTag,{value:"Module"}));export{t as A,H as C};
