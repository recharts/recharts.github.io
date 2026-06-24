import{r as A,R as t}from"./iframe-GMBZ_Ugx.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DtzDaUqm.js";import{A as E}from"./AreaChart-CMKDeb2Z.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bfv7sfJd.js";import{X as g}from"./XAxis-CWBxARwY.js";import{Y as h}from"./YAxis-B3CJ0t9T.js";import{A as a}from"./Area-C23sWy8t.js";import{T as u}from"./Tooltip-DqLYQ53s.js";import{R as k}from"./zIndexSlice-CaGWsk0_.js";import{L as v}from"./Legend-L5x1DYLc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0SxcSOH.js";import"./index-B_gRMuPi.js";import"./index-Gz1Qo9An.js";import"./index-CWyz9jhc.js";import"./index-BJeMs6TD.js";import"./immer-8AAf0mWE.js";import"./get-Gz1PRcGr.js";import"./renderedTicksSlice-CW6yCQrF.js";import"./axisSelectors-CTNvdk-R.js";import"./d3-scale-DrE5OPOC.js";import"./resolveDefaultProps-CaBwGHvy.js";import"./isWellBehavedNumber-CHbHfbVW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rtXvtu0b.js";import"./chartDataContext-CUGtjOSs.js";import"./CategoricalChart-CElM-v-_.js";import"./CartesianAxis-DMU5FiQJ.js";import"./Layer-BXGTwaUB.js";import"./Text-xcPGheUs.js";import"./DOMUtils-BjtWwWtu.js";import"./Label-BaqULLaE.js";import"./ZIndexLayer-DxP6hcPK.js";import"./types-M4hw7OKT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-NvoGhX2w.js";import"./useAnimationId-DgxmZKXq.js";import"./ActivePoints-PmkOapvV.js";import"./Dot-DN0s5ohL.js";import"./RegisterGraphicalItemId-Dh_QLlB5.js";import"./GraphicalItemClipPath-DlEa2W6_.js";import"./SetGraphicalItem-CZxAdJP0.js";import"./getRadiusAndStrokeWidthFromDot-Bfj8OsGQ.js";import"./ActiveShapeUtils-CK3PQT9Y.js";import"./Curve-DWsbrokm.js";import"./step-D2IVGUQU.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D3zVZ2eQ.js";import"./useElementOffset-CI5bYttM.js";import"./uniqBy-RjHfO3JH.js";import"./iteratee-CA-p00eZ.js";import"./Cross-Xi6mjM4Q.js";import"./Rectangle-CaFvPD3t.js";import"./util-Dxo8gN5i.js";import"./Sector-9EfWoqS9.js";import"./Symbols-DeSiMhF3.js";import"./symbol-Ds44gbWS.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
