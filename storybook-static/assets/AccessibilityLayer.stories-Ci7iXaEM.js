import{r as A,R as t}from"./iframe-DGZg1BaY.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CYWMV96h.js";import{A as E}from"./AreaChart-BaYrgCCR.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Cxo9TLCz.js";import{X as g}from"./XAxis-BkrEDfGE.js";import{Y as h}from"./YAxis-BZtV9zAx.js";import{A as a}from"./Area-CGiiw1Iu.js";import{T as u}from"./Tooltip-Zz8cIuvo.js";import{R as k}from"./zIndexSlice-RSobkBfJ.js";import{L as v}from"./Legend-Bucg_Anc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bacgswk5.js";import"./index-CkL0GuEG.js";import"./index-BXki0_jB.js";import"./index-Cct5a00b.js";import"./index-clGj1WHq.js";import"./immer-BT6VGnPe.js";import"./get-DY0OjSK6.js";import"./renderedTicksSlice-Dewx_RJS.js";import"./axisSelectors-CdelNDSz.js";import"./d3-scale-CTB_TOgf.js";import"./resolveDefaultProps-BjAvdkCv.js";import"./isWellBehavedNumber-0KuhYisV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BJ5L6c8p.js";import"./chartDataContext-Cq7x5jLr.js";import"./CategoricalChart-BMzuLFGj.js";import"./CartesianAxis-DDEi9eFQ.js";import"./Layer--_bnQ9Ul.js";import"./Text-BqNTVXko.js";import"./DOMUtils-BzC8w9yF.js";import"./Label-B4XUjnXV.js";import"./ZIndexLayer-5g4pRwMA.js";import"./types-CUzx8cK0.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-CAvgFIRj.js";import"./useAnimationId-CGxH7MOe.js";import"./ActivePoints-DJFCrMTb.js";import"./Dot-DiO2Qmm4.js";import"./RegisterGraphicalItemId-BYwdAoF6.js";import"./GraphicalItemClipPath-gslOIRLN.js";import"./SetGraphicalItem-BCxyd91k.js";import"./getRadiusAndStrokeWidthFromDot-BOdJyA31.js";import"./ActiveShapeUtils-Dc_2IcP9.js";import"./Curve-BNlPs19R.js";import"./step-BQdN9BCS.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DLWsIefM.js";import"./useElementOffset-FCVSXiSc.js";import"./uniqBy-Dd2sidz2.js";import"./iteratee-6x__QjEC.js";import"./Cross-C5QwhTX2.js";import"./Rectangle-C6RAZfOj.js";import"./util-Dxo8gN5i.js";import"./Sector-aFnSVPUo.js";import"./Symbols-dDjIREJ5.js";import"./symbol-CR9QZI-y.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
