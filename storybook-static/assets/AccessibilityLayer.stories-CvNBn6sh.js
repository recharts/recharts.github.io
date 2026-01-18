import{e as t,r as A}from"./iframe-B_ZhM03Y.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-QL3NRICu.js";import{R as E}from"./arrayEqualityCheck-CloHfm1b.js";import{A as a}from"./Area-DMNyJxwc.js";import{L as b}from"./Legend-DZt9zyY3.js";import{X as d}from"./XAxis-BwiG5zlQ.js";import{Y as g}from"./YAxis-MqnRM2TT.js";import{T as h}from"./Tooltip-DYgfdLdw.js";import{R as u}from"./RechartsHookInspector-CedEGYW7.js";import{A as v}from"./AreaChart-CJrz8_lP.js";import{C as T}from"./CartesianGrid-BhaeF8ti.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-u6yQp6qc.js";import"./hooks-C0kAm8Eo.js";import"./axisSelectors-CpGC88wy.js";import"./zIndexSlice-DOM2ZPVV.js";import"./resolveDefaultProps-C2hO3de9.js";import"./PolarUtils-CgPgv3CO.js";import"./CartesianChart-Re97mOhW.js";import"./chartDataContext-BdXMgBWg.js";import"./CategoricalChart-B5rfhQvt.js";import"./Curve-CacS2CA9.js";import"./types-CPNOLsga.js";import"./Layer-BOxBWqHH.js";import"./ReactUtils-CV9gD_3H.js";import"./Label-G2FvxRoa.js";import"./Text-DQMzR-Rn.js";import"./DOMUtils-DIxanI67.js";import"./ZIndexLayer-DQM-WqDQ.js";import"./ActivePoints-ypNM3A09.js";import"./Dot-CuMCJhAb.js";import"./RegisterGraphicalItemId-DXkXPQtf.js";import"./GraphicalItemClipPath-ju3MUMLR.js";import"./SetGraphicalItem-DKzya-iG.js";import"./useAnimationId-GdkLb2Sd.js";import"./getRadiusAndStrokeWidthFromDot-Cx0j_eyy.js";import"./graphicalItemSelectors-Cx0Ncgg-.js";import"./Symbols-B_O8HrI4.js";import"./useElementOffset-ArqjKzWR.js";import"./iteratee-Cb2JYpEF.js";import"./CartesianAxis-B6B84b8_.js";import"./Cross-DBCc1P9s.js";import"./Rectangle-CXZfm4Mc.js";import"./Sector-zu_K_Cyg.js";import"./index-C4JY2suC.js";import"./ChartSizeDimensions-Bu3QszIW.js";import"./OffsetShower-C0fU06Jz.js";import"./PlotAreaShower-Mptvcbb5.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
