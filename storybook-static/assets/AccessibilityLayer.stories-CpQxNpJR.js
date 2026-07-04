import{r as A,R as t}from"./iframe-Ds1J5XKD.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CRkbKJM2.js";import{A as E}from"./AreaChart-DJHJRz5D.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BJ2avNT5.js";import{X as g}from"./XAxis-DoWvPRbH.js";import{Y as h}from"./YAxis-eP85-8SJ.js";import{A as a}from"./Area-DJmvBedj.js";import{T as u}from"./Tooltip-Db1eaiSZ.js";import{R as k}from"./zIndexSlice-UCyaaMGS.js";import{L as v}from"./Legend-Dv1icE5q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BAOT1HW_.js";import"./index-D20-MSnL.js";import"./index-BzzxIcBT.js";import"./index-Co2IbVNM.js";import"./index-CzrGLoIQ.js";import"./throttle-BH_VG--i.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-kb1cJng-.js";import"./axisSelectors-Tr36h9al.js";import"./resolveDefaultProps-Do401MpT.js";import"./isWellBehavedNumber-Dz72kwHe.js";import"./d3-scale-C3U5gPbW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DOdhq5wJ.js";import"./chartDataContext-BhVZbVOm.js";import"./CategoricalChart-wjwwJKX3.js";import"./CartesianAxis-CDp_ZXfj.js";import"./Layer-nVED5kUO.js";import"./Text-jdQ0MfG2.js";import"./DOMUtils-DsCGVJ9c.js";import"./Label-CNOb6BUs.js";import"./ZIndexLayer-DZsY-UK0.js";import"./types-BQazP4PY.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-D70ai7P5.js";import"./useAnimationId-CHjE-uiV.js";import"./ActivePoints-Bhs7RZpf.js";import"./Dot-C6VoQzSz.js";import"./RegisterGraphicalItemId-i_epzSee.js";import"./GraphicalItemClipPath-BO5z_Dot.js";import"./SetGraphicalItem-qVzcGAlb.js";import"./getRadiusAndStrokeWidthFromDot-BOSN6lTY.js";import"./ActiveShapeUtils-CcQaIRSL.js";import"./Curve-C9kHMz3L.js";import"./step-7tBtg14U.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DJy1cWpY.js";import"./useElementOffset-D0hlMEgK.js";import"./uniqBy-Cb9ErWqE.js";import"./iteratee-DkjsJILk.js";import"./Cross-BfCfff9L.js";import"./Rectangle-DDz0k9b7.js";import"./util-Dxo8gN5i.js";import"./Sector-9YalwLVX.js";import"./Symbols-DTqalTwC.js";import"./symbol-IDnm7d1z.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={300}>
        <ComposedChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(ComposedChartArgs),
  parameters: {
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [toggle, setToggle] = useState(true);
    return <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle Tooltip
        </button>

        <AreaChart width={500} height={400} data={pageData} margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          {toggle && <Tooltip />}
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
