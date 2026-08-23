import{a as e}from"./iframe-D_Sr4lJG.js";import{e as n}from"./CategoricalChart-DKW5S15G.js";import{R as i}from"./zIndexSlice-D0QIWFDJ.js";import{C as m}from"./ComposedChart-ZURsynXK.js";import{p}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-CUH4TpmU.js";import{X as d}from"./XAxis-CiVYw4TJ.js";import{Y as h}from"./YAxis-CK9b0jPJ.js";import{L as g}from"./Legend-6Kaq28I2.js";const c={title:"API/hooks/useOffset",component:n,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},t={name:"useOffset",render:r=>e.createElement(i,{width:r.width,height:r.height},e.createElement(m,{data:p,margin:r.margin},e.createElement(f,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(h,null),e.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const l=["UseOffset"],A=Object.freeze(Object.defineProperty({__proto__:null,UseOffset:t,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{A as C};
