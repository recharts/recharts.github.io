import{R as e}from"./iframe-DGZg1BaY.js";import{C as s,R as i}from"./zIndexSlice-RSobkBfJ.js";import{C as m}from"./ComposedChart-CYWMV96h.js";import{p as g}from"./Page-Cj8EiXz7.js";import{L as p}from"./Line-BjwcwMYh.js";import{X as d}from"./XAxis-BkrEDfGE.js";import{Y as h}from"./YAxis-BZtV9zAx.js";import{L as c}from"./Legend-Bucg_Anc.js";const l={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:r=>e.createElement(i,{width:r.width,height:r.height},e.createElement(m,{data:g,margin:r.margin},e.createElement(p,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(h,null),e.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'useMargin',
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const u=["UseMargin"],x=Object.freeze(Object.defineProperty({__proto__:null,UseMargin:t,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{x as C};
