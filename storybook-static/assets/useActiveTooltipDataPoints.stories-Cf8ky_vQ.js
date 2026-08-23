import{a as e}from"./iframe-D_Sr4lJG.js";import{P as o}from"./_data-CE1j0ret.js";import{g as d}from"./utils-ePvtT4un.js";import{T as n}from"./TooltipArgs-TAq2cD4k.js";import{T as p}from"./Tooltip-D6jlTmCI.js";import{R as l}from"./zIndexSlice-D0QIWFDJ.js";import{C as c}from"./ComposedChart-ZURsynXK.js";import{p as g}from"./Page-Cj8EiXz7.js";import{A as r}from"./Area-Yy7M8V9F.js";import{L as A}from"./Line-CUH4TpmU.js";import{X as v}from"./XAxis-CiVYw4TJ.js";import{Y as u}from"./YAxis-CK9b0jPJ.js";import{L as f}from"./Legend-6Kaq28I2.js";const y={argTypes:n,title:"API/hooks/useActiveTooltipDataPoints",component:p},T=o.map(a=>({name:a.name,uv:a.uv})),C=o.map(a=>({name:a.name,pv:a.pv})),P=o.map(a=>({name:a.name,amt:a.amt})),t={name:"useActiveTooltipDataPoints",render:a=>e.createElement(l,{width:"100%",height:400},e.createElement(c,{data:g},e.createElement(r,{data:C,dataKey:"pv"}),e.createElement(r,{data:T,dataKey:"uv"}),e.createElement(A,{data:P,dataKey:"amt"}),e.createElement(v,{dataKey:"name",allowDuplicatedCategory:!1}),e.createElement(u,null),e.createElement(f,null),e.createElement(p,{...a}))),args:d(n)};var s,m,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'useActiveTooltipDataPoints',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={pageData}>
          <Area data={dataPv} dataKey="pv" />
          <Area data={dataUv} dataKey="uv" />
          <Line data={dataAmt} dataKey="amt" />
          <XAxis dataKey="name" allowDuplicatedCategory={false} />
          <YAxis />
          <Legend />
          <Tooltip {...args} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(TooltipArgs)
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const D=["UseActiveTooltipDataPoints"],X=Object.freeze(Object.defineProperty({__proto__:null,UseActiveTooltipDataPoints:t,__namedExportsOrder:D,default:y},Symbol.toStringTag,{value:"Module"}));export{X as C};
