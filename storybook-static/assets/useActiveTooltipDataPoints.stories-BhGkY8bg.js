import{a as e}from"./iframe-7Yqq7fCu.js";import{P as o}from"./_data-CE1j0ret.js";import{g as d}from"./utils-ePvtT4un.js";import{T as i}from"./TooltipArgs-TAq2cD4k.js";import{T as p}from"./Tooltip-B_7JlKfR.js";import{R as l}from"./zIndexSlice-Clo6-Yyn.js";import{C as c}from"./ComposedChart-CzrLMxQE.js";import{p as g}from"./Page-Cj8EiXz7.js";import{A as r}from"./Area-Cm62p_1O.js";import{L as A}from"./Line-y-Q91fXJ.js";import{X as v}from"./XAxis-1FKbFMeO.js";import{Y as u}from"./YAxis-Cy7XE4j-.js";import{L as f}from"./Legend-B0A2aPD8.js";const y={argTypes:i,title:"API/hooks/useActiveTooltipDataPoints",component:p},T=o.map(a=>({name:a.name,uv:a.uv})),C=o.map(a=>({name:a.name,pv:a.pv})),P=o.map(a=>({name:a.name,amt:a.amt})),t={name:"useActiveTooltipDataPoints",render:a=>e.createElement(l,{width:"100%",height:400},e.createElement(c,{data:g},e.createElement(r,{data:C,dataKey:"pv"}),e.createElement(r,{data:T,dataKey:"uv"}),e.createElement(A,{data:P,dataKey:"amt"}),e.createElement(v,{dataKey:"name",allowDuplicatedCategory:!1}),e.createElement(u,null),e.createElement(f,null),e.createElement(p,{...a}))),args:d(i)},D=["UseActiveTooltipDataPoints"];var s,n,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const X=Object.freeze(Object.defineProperty({__proto__:null,UseActiveTooltipDataPoints:t,__namedExportsOrder:D,default:y},Symbol.toStringTag,{value:"Module"}));export{X as C,t as U};
