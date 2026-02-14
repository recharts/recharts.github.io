import{e as t,r as A}from"./iframe-D1sKzd9f.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-D7QMmcGv.js";import{R as E}from"./arrayEqualityCheck-CuEsOyc1.js";import{A as a}from"./Area-Ad-qQXDy.js";import{L as b}from"./Legend-xkXWy3Kp.js";import{X as d}from"./XAxis-BOA4yCHe.js";import{Y as g}from"./YAxis-BOXDE0eJ.js";import{T as h}from"./Tooltip-CG-69AbX.js";import{R as u}from"./RechartsHookInspector-DnaIUpyH.js";import{A as v}from"./AreaChart-CwHQdvJC.js";import{C as T}from"./CartesianGrid-W01p8so4.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BpD_sNud.js";import"./hooks-DdtZHK8g.js";import"./axisSelectors-DyIQ7_k2.js";import"./zIndexSlice-LstRJYK0.js";import"./resolveDefaultProps-DP_tbxO-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Biy4tQe4.js";import"./chartDataContext-CRIv2raa.js";import"./CategoricalChart-C6tF-OgQ.js";import"./Curve-BmiU29ay.js";import"./types-EtQqMNLc.js";import"./Layer-WzWTapMZ.js";import"./ReactUtils-CN0W71Xc.js";import"./Label-BUubujAP.js";import"./Text-Cjdiq18G.js";import"./DOMUtils-gW35XdYA.js";import"./ZIndexLayer-C_HSTCV-.js";import"./ActivePoints-2K88Psn3.js";import"./Dot-CvFh2CAB.js";import"./RegisterGraphicalItemId-1mClqvPm.js";import"./GraphicalItemClipPath-D104b0kU.js";import"./SetGraphicalItem-elsOCW9j.js";import"./useAnimationId-CobcEi0h.js";import"./getRadiusAndStrokeWidthFromDot-ChFRxLXf.js";import"./graphicalItemSelectors-CPJau7EC.js";import"./Symbols-B6J6F5uc.js";import"./useElementOffset-DMBXxydz.js";import"./iteratee-Do7b8DA9.js";import"./CartesianAxis-C9kYKoRG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-B96eXILH.js";import"./Rectangle-CjCqdVKq.js";import"./Sector-BNWuE3Lx.js";import"./index-BzSbAqoW.js";import"./ChartSizeDimensions-C9qcdOPY.js";import"./OffsetShower-0TFjDlvn.js";import"./PlotAreaShower-D6laSGCk.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Tt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Tt as __namedExportsOrder,vt as default};
