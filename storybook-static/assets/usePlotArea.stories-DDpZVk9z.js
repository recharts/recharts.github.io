import{e}from"./iframe-Ucw_npMd.js";import{P as n}from"./PlotAreaShower-sLoJpTUh.js";import{c as i}from"./hooks-D7V2KDBB.js";import{R as m}from"./arrayEqualityCheck-C_bl4BTF.js";import{C as l}from"./ComposedChart-ClVu3lO0.js";import{p}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-xp0DzpuK.js";import{X as c}from"./XAxis-Z-pG1K5-.js";import{Y as h}from"./YAxis-Ny3PLxgr.js";import{L as g}from"./Legend-pjRhjC8Y.js";const u={title:"API/hooks/usePlotArea",component:i,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},t={name:"usePlotAreaExample",render:r=>e.createElement(m,{width:r.width,height:r.height},e.createElement(l,{data:p,margin:r.margin,style:r.style},e.createElement(d,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,null),e.createElement(g,null),e.createElement(n,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const f=["UsePlotArea"],L=Object.freeze(Object.defineProperty({__proto__:null,UsePlotArea:t,__namedExportsOrder:f,default:u},Symbol.toStringTag,{value:"Module"}));export{L as C};
