import{R as t}from"./iframe-C-fup5Id.js";import{g as p}from"./utils-ePvtT4un.js";import{T as i}from"./TooltipArgs-g5krDHcT.js";import{T as n}from"./Tooltip-ghccvaKJ.js";import{R as c}from"./zIndexSlice-NTR0fs-C.js";import{L as h}from"./LineChart-DEUCtJll.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-Bwf9fLP_.js";const l={argTypes:i,component:n},e={render:g=>{const[m,r]=[600,300];return t.createElement(c,{width:"100%",height:r},t.createElement(h,{width:m,height:r,margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(f,{dataKey:"uv"}),t.createElement(n,{...g})))},args:{...p(i),trigger:"hover",shared:!1,useTranslate3d:!1}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const u=["API"],R=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{e as A,R as C};
