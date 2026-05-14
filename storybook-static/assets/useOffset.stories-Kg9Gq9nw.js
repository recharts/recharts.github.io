import{e}from"./iframe-VKSiBROl.js";import{O as n}from"./OffsetShower-DRsWIFHd.js";import{d as i}from"./hooks-ZL9qLpLY.js";import{R as m}from"./arrayEqualityCheck-BB0HA1wg.js";import{C as f}from"./ComposedChart-DRm_ML7n.js";import{p}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BVKPMqu3.js";import{X as h}from"./XAxis-c6QFLIoy.js";import{Y as g}from"./YAxis-D4wJ7AYM.js";import{L as c}from"./Legend-BQN-DIkP.js";const l={title:"API/hooks/useOffset",component:i,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},t={name:"useOffset",render:r=>e.createElement(m,{width:r.width,height:r.height},e.createElement(f,{data:p,margin:r.margin},e.createElement(d,{dataKey:"pv"}),e.createElement(h,{dataKey:"name"}),e.createElement(g,null),e.createElement(c,null),e.createElement(n,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const u=["UseOffset"],S=Object.freeze(Object.defineProperty({__proto__:null,UseOffset:t,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{S as C};
