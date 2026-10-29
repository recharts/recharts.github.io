import{R as e}from"./iframe-jkWlGRao.js";import{r as s,R as i}from"./zIndexSlice-BJ_azL3V.js";import{C as m}from"./ComposedChart-B8s0ij_q.js";import{p as g}from"./Page-Cj8EiXz7.js";import{L as p}from"./Line-DGiR6I26.js";import{X as d}from"./XAxis-B6q08DjL.js";import{Y as h}from"./YAxis-Df9BpDFL.js";import{L as c}from"./Legend-DYuoz8s7.js";const l={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:r=>e.createElement(i,{width:r.width,height:r.height},e.createElement(m,{data:g,margin:r.margin},e.createElement(p,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(h,null),e.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},u=["UseMargin"];var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=Object.freeze(Object.defineProperty({__proto__:null,UseMargin:t,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{x as C,t as U};
