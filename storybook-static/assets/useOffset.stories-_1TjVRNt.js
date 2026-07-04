import{R as e}from"./iframe-Ds1J5XKD.js";import{e as n}from"./CategoricalChart-wjwwJKX3.js";import{R as i}from"./zIndexSlice-UCyaaMGS.js";import{C as m}from"./ComposedChart-CRkbKJM2.js";import{p}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-DuxS_s48.js";import{X as d}from"./XAxis-DoWvPRbH.js";import{Y as h}from"./YAxis-eP85-8SJ.js";import{L as g}from"./Legend-Dv1icE5q.js";const c={title:"API/hooks/useOffset",component:n,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},t={name:"useOffset",render:r=>e.createElement(i,{width:r.width,height:r.height},e.createElement(m,{data:p,margin:r.margin},e.createElement(f,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(h,null),e.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const l=["UseOffset"],A=Object.freeze(Object.defineProperty({__proto__:null,UseOffset:t,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{A as C};
