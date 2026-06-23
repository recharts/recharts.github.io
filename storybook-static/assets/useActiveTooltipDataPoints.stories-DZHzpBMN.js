import{R as a}from"./iframe-DGZg1BaY.js";import{P as o}from"./_data-CE1j0ret.js";import{g as d}from"./utils-ePvtT4un.js";import{T as n}from"./TooltipArgs-g5krDHcT.js";import{T as p}from"./Tooltip-Zz8cIuvo.js";import{R as l}from"./zIndexSlice-RSobkBfJ.js";import{C as c}from"./ComposedChart-CYWMV96h.js";import{p as g}from"./Page-Cj8EiXz7.js";import{A as r}from"./Area-CGiiw1Iu.js";import{L as A}from"./Line-BjwcwMYh.js";import{X as v}from"./XAxis-BkrEDfGE.js";import{Y as u}from"./YAxis-BZtV9zAx.js";import{L as f}from"./Legend-Bucg_Anc.js";const y={argTypes:n,title:"API/hooks/useActiveTooltipDataPoints",component:p},T=o.map(e=>({name:e.name,uv:e.uv})),C=o.map(e=>({name:e.name,pv:e.pv})),P=o.map(e=>({name:e.name,amt:e.amt})),t={name:"useActiveTooltipDataPoints",render:e=>a.createElement(l,{width:"100%",height:400},a.createElement(c,{data:g},a.createElement(r,{data:C,dataKey:"pv"}),a.createElement(r,{data:T,dataKey:"uv"}),a.createElement(A,{data:P,dataKey:"amt"}),a.createElement(v,{dataKey:"name",allowDuplicatedCategory:!1}),a.createElement(u,null),a.createElement(f,null),a.createElement(p,{...e}))),args:d(n)};var s,m,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
