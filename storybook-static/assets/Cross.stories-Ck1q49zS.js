import{a as t}from"./iframe-3mrIZkil.js";import{C as s}from"./Cross-DJFcvGJF.js";import{R as i}from"./zIndexSlice-L3ODJxG9.js";import{C as p}from"./ComposedChart-B1NQbFGd.js";const h={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},height:{description:"Height of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},left:{description:"The x-coordinate of the top left point in the boundary box of the cross.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},top:{description:"The y-coordinate of the top left point in the boundary box of the cross.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},width:{description:"Width of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},x:{description:"The x-coordinate of the vertical line of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}},y:{description:"The y-coordinate of the horizontal line of the cross in pixels.",table:{type:{summary:"number | string"},category:"General"}}},m={component:s,argTypes:h},e={render:a=>t.createElement(i,{width:"100%",height:500},t.createElement(p,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},t.createElement(s,{...a}))),args:{y:100,x:500,top:0,left:0,height:1e3,width:1e3,stroke:"#000",fill:"none",strokeDasharray:"3 3",strokeWidth:10,strokeOpacity:.5}},c=["API"];var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={300} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Cross {...args} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    y: 100,
    x: 500,
    top: 0,
    left: 0,
    height: 1000,
    width: 1000,
    stroke: '#000',
    fill: 'none',
    strokeDasharray: '3 3',
    strokeWidth: 10,
    strokeOpacity: 0.5
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const f=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{e as A,f as C};
