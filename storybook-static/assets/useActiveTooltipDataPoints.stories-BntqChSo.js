import{e as t}from"./iframe-Ucw_npMd.js";import{P as o}from"./_data-CE1j0ret.js";import{g as d}from"./utils-ePvtT4un.js";import{T as n}from"./TooltipArgs-B4vqbkYQ.js";import{T as p}from"./Tooltip-DhN8fm3x.js";import{R as l}from"./arrayEqualityCheck-C_bl4BTF.js";import{C as c}from"./ComposedChart-ClVu3lO0.js";import{p as g}from"./Page-Cj8EiXz7.js";import{A as r}from"./Area-BRmTTlcn.js";import{L as A}from"./Line-xp0DzpuK.js";import{X as u}from"./XAxis-Z-pG1K5-.js";import{Y as v}from"./YAxis-Ny3PLxgr.js";import{L as f}from"./Legend-pjRhjC8Y.js";import{R as T}from"./RechartsHookInspector-Egzn0asm.js";const y={argTypes:n,title:"API/hooks/useActiveTooltipDataPoints",component:p},C=o.map(e=>({name:e.name,uv:e.uv})),P=o.map(e=>({name:e.name,pv:e.pv})),D=o.map(e=>({name:e.name,amt:e.amt})),a={name:"useActiveTooltipDataPoints",render:e=>t.createElement(l,{width:"100%",height:400},t.createElement(c,{data:g},t.createElement(r,{data:P,dataKey:"pv"}),t.createElement(r,{data:C,dataKey:"uv"}),t.createElement(A,{data:D,dataKey:"amt"}),t.createElement(u,{dataKey:"name",allowDuplicatedCategory:!1}),t.createElement(v,null),t.createElement(f,null),t.createElement(p,{...e}),t.createElement(T,{defaultOpened:"useActiveTooltipDataPoints"}))),args:d(n)};var s,m,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <RechartsHookInspector defaultOpened="useActiveTooltipDataPoints" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(TooltipArgs)
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const h=["UseActiveTooltipDataPoints"],X=Object.freeze(Object.defineProperty({__proto__:null,UseActiveTooltipDataPoints:a,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{X as C};
