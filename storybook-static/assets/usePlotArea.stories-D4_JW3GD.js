import{R as e}from"./iframe-CYE_KjLp.js";import{u as i}from"./CategoricalChart-DxSK9VeV.js";import{R as n}from"./zIndexSlice-BJ5AXs-O.js";import{C as m}from"./ComposedChart-FkotVeZi.js";import{p}from"./Page-Cj8EiXz7.js";import{L as l}from"./Line-fP0RojnX.js";import{X as d}from"./XAxis-CSEJquda.js";import{Y as c}from"./YAxis-DWbbwN0w.js";import{L as h}from"./Legend-CqwLssCU.js";const g={title:"API/hooks/usePlotArea",component:i,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},t={name:"usePlotAreaExample",render:r=>e.createElement(n,{width:r.width,height:r.height},e.createElement(m,{data:p,margin:r.margin,style:r.style},e.createElement(l,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(c,null),e.createElement(h,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const u=["UsePlotArea"],_=Object.freeze(Object.defineProperty({__proto__:null,UsePlotArea:t,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{_ as C};
