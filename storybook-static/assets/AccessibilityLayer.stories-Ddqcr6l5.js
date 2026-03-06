import{r as A,e as t}from"./iframe-B6PVJaTx.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-BmpGplUO.js";import{A as E}from"./AreaChart-C4tg8h0s.js";import{C as b}from"./CartesianGrid-mAYc4o0w.js";import{X as d}from"./XAxis-B6nzW_y2.js";import{Y as g}from"./YAxis-D3KHnhFR.js";import{A as a}from"./Area-CZqtWsXA.js";import{T as h}from"./Tooltip-DPR5Vxgj.js";import{R as u}from"./RechartsHookInspector-DAdFhUj3.js";import{R as v}from"./arrayEqualityCheck--l5nbOOj.js";import{L as T}from"./Legend-1gH1ntlQ.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BP-lLfVx.js";import"./index-BYl1MF2O.js";import"./immer-C_TrIJMh.js";import"./hooks-CMcsnkVg.js";import"./axisSelectors-Bycocccg.js";import"./d3-scale-B9ZoAAf3.js";import"./zIndexSlice-67Af1QFi.js";import"./renderedTicksSlice-BgZ61m11.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-VouzMpCB.js";import"./chartDataContext-KAdJCeqF.js";import"./CategoricalChart-BKdjoORw.js";import"./resolveDefaultProps-SbZpfCF8.js";import"./CartesianAxis-DZRbozUC.js";import"./Layer-B8Qqjz1b.js";import"./Text-C0kuQw6e.js";import"./DOMUtils-C2NDlTFm.js";import"./Label-BcLUaBCG.js";import"./ZIndexLayer-d-D4FVJh.js";import"./types-D2EFyeKu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DFsvHQ10.js";import"./step-D3frr3Yw.js";import"./ReactUtils-BX8s_uVv.js";import"./ActivePoints-DKGt-sO1.js";import"./Dot-D4UjwoyQ.js";import"./RegisterGraphicalItemId-u9lrCCFO.js";import"./GraphicalItemClipPath-BvACd4D_.js";import"./SetGraphicalItem-D73Bmw1S.js";import"./useAnimationId-BQkpZnA1.js";import"./getRadiusAndStrokeWidthFromDot-BFZegUjF.js";import"./graphicalItemSelectors-A5PqSJ0a.js";import"./useElementOffset-DEktGNVm.js";import"./uniqBy-BfHwhh8s.js";import"./iteratee-CmfJSOYg.js";import"./Cross-BYRz6Hta.js";import"./Rectangle-BTXCPNQZ.js";import"./Sector-DBXvXTeF.js";import"./index-DliOLYsg.js";import"./ChartSizeDimensions-DJ4EsjSA.js";import"./OffsetShower-BD_1fIgB.js";import"./PlotAreaShower-CzP38MFh.js";import"./Symbols-D85bhFp3.js";import"./symbol-JouRlcFh.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
