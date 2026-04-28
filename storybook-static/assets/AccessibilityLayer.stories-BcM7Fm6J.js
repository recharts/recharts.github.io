import{r as A,e as t}from"./iframe-Ucw_npMd.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-ClVu3lO0.js";import{A as E}from"./AreaChart-CN99B2PX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BJDjwPUI.js";import{X as g}from"./XAxis-Z-pG1K5-.js";import{Y as h}from"./YAxis-Ny3PLxgr.js";import{A as a}from"./Area-BRmTTlcn.js";import{T as u}from"./Tooltip-DhN8fm3x.js";import{R as y}from"./RechartsHookInspector-Egzn0asm.js";import{R as v}from"./arrayEqualityCheck-C_bl4BTF.js";import{L as T}from"./Legend-pjRhjC8Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CwfOdweJ.js";import"./index-JYzWfHpx.js";import"./immer-Df11CBmE.js";import"./hooks-D7V2KDBB.js";import"./axisSelectors-BH0WFu65.js";import"./d3-scale-0cZeb6CB.js";import"./zIndexSlice-CNerbQ3D.js";import"./renderedTicksSlice-DUMTm3uB.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3CifoRw.js";import"./chartDataContext-C8DSjEnl.js";import"./CategoricalChart-Bvyp3zlR.js";import"./resolveDefaultProps-BHeHZryb.js";import"./CartesianAxis-C30jVrg6.js";import"./Layer-BHKytU3r.js";import"./Text-BMbZi_EC.js";import"./DOMUtils-YtDMkslD.js";import"./Label-GC_DUOEN.js";import"./ZIndexLayer-D2xlXPPp.js";import"./types-_zfRhAxP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-4SPhgVqC.js";import"./step-CvXihpec.js";import"./ReactUtils-CjeDc-m7.js";import"./ActivePoints-UksLcW80.js";import"./Dot-B34r2ooF.js";import"./RegisterGraphicalItemId-CbJhRY50.js";import"./GraphicalItemClipPath-B7jjPwrD.js";import"./SetGraphicalItem-BTRvTts6.js";import"./useAnimationId-CEijT5wS.js";import"./getRadiusAndStrokeWidthFromDot-6YrovPXS.js";import"./graphicalItemSelectors-B4mUjUoF.js";import"./useElementOffset-sej1y7uw.js";import"./uniqBy-bXe7YxKg.js";import"./iteratee-B_1kyU97.js";import"./Cross-9WsfiIUp.js";import"./Rectangle-DdjFgehH.js";import"./Sector-SP2qnp6i.js";import"./index-BrSV8OVb.js";import"./ChartSizeDimensions-Cz7KN2Sj.js";import"./OffsetShower-BPBpAMRX.js";import"./PlotAreaShower-sLoJpTUh.js";import"./Symbols-ODbCcosS.js";import"./symbol-C71I-RBu.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
