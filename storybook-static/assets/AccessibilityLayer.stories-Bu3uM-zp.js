import{r as A,R as t}from"./iframe-jkWlGRao.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-B8s0ij_q.js";import{A as E}from"./AreaChart-BvOODDxP.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CsqRH0Ym.js";import{X as g}from"./XAxis-B6q08DjL.js";import{Y as h}from"./YAxis-Df9BpDFL.js";import{A as a}from"./Area-Dy0juIgx.js";import{T as u}from"./Tooltip-DbtTA0dS.js";import{R as k}from"./zIndexSlice-BJ_azL3V.js";import{L as v}from"./Legend-DYuoz8s7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CYIxj0Xh.js";import"./resolveDefaultProps-BJCkAT-c.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B57c623a.js";import"./throttle-BclcIM3t.js";import"./index-CafydseE.js";import"./index-l6IDK4X2.js";import"./polarAxisSelectors-vXDHLkfy.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7YXqmgC.js";import"./index-CT6JOO-H.js";import"./index-lkQeFUlC.js";import"./renderedTicksSlice-MrcmxqRq.js";import"./index-BIDLCapd.js";import"./CartesianChart-DNa8wuZh.js";import"./ZIndexPortal-PvuD5_Md.js";import"./CategoricalChart-BIz6y0X4.js";import"./CartesianAxis-vLbE4lIP.js";import"./Layer-DGNDN2U_.js";import"./Text-CsCVaUmy.js";import"./pageBackground-B7N8_bCe.js";import"./ZIndexLayer-Cz3uOrDa.js";import"./Label-C3QhHNfQ.js";import"./types-BwHsgyny.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BN7i6-QW.js";import"./ActivePoints-DFqnjh3O.js";import"./Dot-xzrAS9lw.js";import"./activeStyles-EBU2roz0.js";import"./useAnimationId-CAUjhf76.js";import"./dataEntryStyles-ZVub37-6.js";import"./Symbols-wGnZNd4F.js";import"./symbol-BOEnk89t.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BoktD6a2.js";import"./getRadiusAndStrokeWidthFromDot-Shmwq5gJ.js";import"./ActiveShapeUtils-KQXKVatm.js";import"./Curve-Ch6LAljQ.js";import"./step-CscB7pF3.js";import"./useEffectiveDataKey-CJQQkbyt.js";import"./useElementOffset-CZ3cyGKX.js";import"./uniqBy-C6LXGOxF.js";import"./iteratee-kDWc3wPx.js";import"./isArguments-yB-y1yaH.js";import"./Cross-ol7G7syJ.js";import"./Rectangle-CTBIyY9m.js";import"./util-Dxo8gN5i.js";import"./Sector-Mnux8RH-.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
