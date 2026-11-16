import{R as e}from"./iframe-DQXFH2fN.js";import{P as o}from"./_data-CE1j0ret.js";import{g as d}from"./utils-ePvtT4un.js";import{T as i}from"./TooltipArgs-Df-PoQrY.js";import{T as p}from"./Tooltip-INA8wN3X.js";import{R as l}from"./zIndexSlice-Dfa7PPo3.js";import{C as c}from"./ComposedChart-BBGwgebC.js";import{p as g}from"./Page-Cj8EiXz7.js";import{A as r}from"./Area-BLzUV1Is.js";import{L as A}from"./Line-CSVCJdJ6.js";import{X as v}from"./XAxis-DeVff73G.js";import{Y as u}from"./YAxis-DxKBEaoV.js";import{L as f}from"./Legend-CQCF_VZ5.js";const y={argTypes:i,title:"API/hooks/useActiveTooltipDataPoints",component:p},T=o.map(a=>({name:a.name,uv:a.uv})),C=o.map(a=>({name:a.name,pv:a.pv})),P=o.map(a=>({name:a.name,amt:a.amt})),t={name:"useActiveTooltipDataPoints",render:a=>e.createElement(l,{width:"100%",height:400},e.createElement(c,{data:g},e.createElement(r,{data:C,dataKey:"pv"}),e.createElement(r,{data:T,dataKey:"uv"}),e.createElement(A,{data:P,dataKey:"amt"}),e.createElement(v,{dataKey:"name",allowDuplicatedCategory:!1}),e.createElement(u,null),e.createElement(f,null),e.createElement(p,{...a}))),args:d(i)},D=["UseActiveTooltipDataPoints"];var s,n,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
