import{a as e}from"./iframe-CNkb7Pxq.js";import{j as s}from"./RechartsWrapper-CE0LDB2v.js";import{R as i}from"./zIndexSlice-wl2-d2L7.js";import{C as m}from"./ComposedChart-C_D-eBru.js";import{p}from"./Page-Cj8EiXz7.js";import{L as l}from"./Line-gVhmKqSC.js";import{X as d}from"./XAxis-Cy627mpO.js";import{Y as c}from"./YAxis-Bv4i31q_.js";import{L as h}from"./Legend-DTeqwQyH.js";const g={title:"API/hooks/usePlotArea",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},t={name:"usePlotAreaExample",render:r=>e.createElement(i,{width:r.width,height:r.height},e.createElement(m,{data:p,margin:r.margin,style:r.style},e.createElement(l,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(c,null),e.createElement(h,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},u=["UsePlotArea"];var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
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
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const _=Object.freeze(Object.defineProperty({__proto__:null,UsePlotArea:t,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{_ as C,t as U};
