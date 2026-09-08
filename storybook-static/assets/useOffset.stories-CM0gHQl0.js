import{a as e}from"./iframe-CNkb7Pxq.js";import{B as s}from"./RechartsWrapper-CE0LDB2v.js";import{R as i}from"./zIndexSlice-wl2-d2L7.js";import{C as m}from"./ComposedChart-C_D-eBru.js";import{p}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-gVhmKqSC.js";import{X as d}from"./XAxis-Cy627mpO.js";import{Y as h}from"./YAxis-Bv4i31q_.js";import{L as g}from"./Legend-DTeqwQyH.js";const c={title:"API/hooks/useOffset",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},t={name:"useOffset",render:r=>e.createElement(i,{width:r.width,height:r.height},e.createElement(m,{data:p,margin:r.margin},e.createElement(f,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(h,null),e.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},l=["UseOffset"];var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const A=Object.freeze(Object.defineProperty({__proto__:null,UseOffset:t,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{A as C,t as U};
