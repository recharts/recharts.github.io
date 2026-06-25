import{r as A,R as t}from"./iframe-_8NIVtea.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BQ1MbbEq.js";import{A as E}from"./AreaChart-LGgpLuaZ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-225WjMr5.js";import{X as g}from"./XAxis-CXj9NRSO.js";import{Y as h}from"./YAxis-Cq9nELWF.js";import{A as a}from"./Area-nRmh2whi.js";import{T as u}from"./Tooltip-Dikr2jjx.js";import{R as k}from"./zIndexSlice-DHi0zTqt.js";import{L as v}from"./Legend-ClfQGzY5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Btm1Myi_.js";import"./index-C4r4CwZ3.js";import"./index-DXHSNIUu.js";import"./index-CMd9L2k1.js";import"./index-DP0Hg4Uq.js";import"./immer-DtWKh-al.js";import"./get-BPH4xIrS.js";import"./renderedTicksSlice-BSwSfTVH.js";import"./axisSelectors-B0oXaHqO.js";import"./d3-scale-CJIJLRQO.js";import"./resolveDefaultProps-DWak00ij.js";import"./isWellBehavedNumber-C_LYkTy5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyMc8rJv.js";import"./chartDataContext-CURMS4bg.js";import"./CategoricalChart-Cq5j6ts0.js";import"./CartesianAxis-BJg7B04w.js";import"./Layer-CvtIbty1.js";import"./Text-Dn8CYcWJ.js";import"./DOMUtils-DxzVORfb.js";import"./Label-Bho1wkfx.js";import"./ZIndexLayer-D0YIaJsD.js";import"./types-B89ht9kr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-BQ9vzcvs.js";import"./useAnimationId-D4zdEFfm.js";import"./ActivePoints-q58bNkUv.js";import"./Dot-BCuViEZD.js";import"./RegisterGraphicalItemId-IKsKal1D.js";import"./GraphicalItemClipPath-D7_UBVME.js";import"./SetGraphicalItem-rhq5lQpj.js";import"./getRadiusAndStrokeWidthFromDot-CVKaSFAr.js";import"./ActiveShapeUtils-CCiDKEDP.js";import"./Curve-7XStj8oj.js";import"./step-BedGzIKx.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-jiUl-4hm.js";import"./useElementOffset-BZoIycEd.js";import"./uniqBy-Ckq71Btn.js";import"./iteratee-BauMAWQN.js";import"./Cross-BxD1Hd53.js";import"./Rectangle-DNmx5GJU.js";import"./util-Dxo8gN5i.js";import"./Sector-twgwZ-Ic.js";import"./Symbols-DuOYoSda.js";import"./symbol-CNSzdyHw.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
