import{R as e}from"./iframe-W15_yS8y.js";import{G as s,R as i}from"./zIndexSlice-KjfXmz6K.js";import{C as m}from"./ComposedChart-DruFp6Y2.js";import{p as g}from"./Page-Cj8EiXz7.js";import{L as p}from"./Line-DKuxCNpr.js";import{X as d}from"./XAxis-8Au-a6fB.js";import{Y as h}from"./YAxis-CxEXFC67.js";import{L as c}from"./Legend-B-cKma5Y.js";const l={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:r=>e.createElement(i,{width:r.width,height:r.height},e.createElement(m,{data:g,margin:r.margin},e.createElement(p,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(h,null),e.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
