import{r as A,e as t}from"./iframe-oUl0Edsa.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-BhkpT6ho.js";import{A as E}from"./AreaChart-BijvDb9z.js";import{C as b}from"./CartesianGrid-Di7JZSsJ.js";import{X as d}from"./XAxis-CkmpPqZg.js";import{Y as g}from"./YAxis-B5DZSFg9.js";import{A as a}from"./Area-DzUg9X9x.js";import{T as h}from"./Tooltip-CTmktQmX.js";import{R as u}from"./RechartsHookInspector-DzCPY6-s.js";import{R as v}from"./arrayEqualityCheck-DO0IznND.js";import{L as T}from"./Legend-hwbRD3v4.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-hGE8ryIc.js";import"./index-BpdNigRW.js";import"./immer-B4_TuAzJ.js";import"./hooks-BR4mxfYm.js";import"./axisSelectors-oQCI-_oE.js";import"./d3-scale-vJidlWzy.js";import"./zIndexSlice-DaoY5asK.js";import"./renderedTicksSlice-BwLnTfQZ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QkTvUAzL.js";import"./chartDataContext-0PCCbTAT.js";import"./CategoricalChart-D3ZmkNqf.js";import"./resolveDefaultProps-CAhGbC_6.js";import"./CartesianAxis-DHjsb2H9.js";import"./Layer-D8QuYoPE.js";import"./Text-CIurUiqp.js";import"./DOMUtils-QcPDFTXM.js";import"./Label-CQcshbP4.js";import"./ZIndexLayer-Dv9xqvVt.js";import"./types-DJAvwsGW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DW9fdXku.js";import"./step-DDhJKU_a.js";import"./ReactUtils-DtRK-XUg.js";import"./ActivePoints-BgKB9eRs.js";import"./Dot-BoytNhYo.js";import"./RegisterGraphicalItemId-D0Ds9Sqy.js";import"./GraphicalItemClipPath-BI0ffFR3.js";import"./SetGraphicalItem-DwmwyDT6.js";import"./useAnimationId-Ce3W7lPK.js";import"./getRadiusAndStrokeWidthFromDot-CThWr5VZ.js";import"./graphicalItemSelectors-iqdDBaQ3.js";import"./useElementOffset-Dmkt4__O.js";import"./uniqBy-qeo26kI_.js";import"./iteratee-a1Bwo6uA.js";import"./Cross-BZQ8mnai.js";import"./Rectangle-CWqU2ttX.js";import"./Sector-CpUI0G8W.js";import"./index-CrxHXiCq.js";import"./ChartSizeDimensions-BcXpSJ4G.js";import"./OffsetShower-CWs6Hx-m.js";import"./PlotAreaShower-CXnVCFpH.js";import"./Symbols-Byia_tNj.js";import"./symbol-BAzjQ5Pa.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
