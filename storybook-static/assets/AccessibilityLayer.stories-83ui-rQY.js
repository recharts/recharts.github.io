import{r as A,a as t}from"./iframe-CNkb7Pxq.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C_D-eBru.js";import{A as E}from"./AreaChart-CRqbjyJa.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Ck43GCkE.js";import{X as g}from"./XAxis-Cy627mpO.js";import{Y as h}from"./YAxis-Bv4i31q_.js";import{A as a}from"./Area-CdP97sQO.js";import{T as u}from"./Tooltip-1bb6gcko.js";import{R as k}from"./zIndexSlice-wl2-d2L7.js";import{L as v}from"./Legend-DTeqwQyH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CE0LDB2v.js";import"./resolveDefaultProps-LXGJzsB2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D4hfpt9F.js";import"./throttle-D9QF5i1l.js";import"./index-hgSNbj3_.js";import"./index-B0O4glZn.js";import"./isWellBehavedNumber-cZPS57La.js";import"./d3-scale-hNSavMKY.js";import"./index-nHtRpei8.js";import"./index-BkiX-XNJ.js";import"./renderedTicksSlice-DjfT86KI.js";import"./index-D8V4aljY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dvu2owgZ.js";import"./chartDataContext-eHLxlpVB.js";import"./CategoricalChart-D2oZJ6cq.js";import"./CartesianAxis-UL5z8CfQ.js";import"./Layer-BE_omtYE.js";import"./Text-DlOSKY9M.js";import"./DOMUtils-BQzfSO_G.js";import"./useId-C8-4auv_.js";import"./useBackwardsCompatibleTheme-BLuzOGOd.js";import"./Label-CgRMMdp1.js";import"./ZIndexLayer-V6Rl9PTE.js";import"./types-CyS4-dLr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dtnyeebx.js";import"./useAnimationId-BDE8tpoz.js";import"./ActivePoints-Bj-iwanM.js";import"./Dot-BOo7AQIZ.js";import"./RegisterGraphicalItemId-BCZSUoIT.js";import"./GraphicalItemClipPath-CWom5q5K.js";import"./SetGraphicalItem-ChHo-vHf.js";import"./getRadiusAndStrokeWidthFromDot-Dwt09wXZ.js";import"./ActiveShapeUtils-BcbuTBin.js";import"./Curve-BoDwc6R9.js";import"./step-B7Ifq5jY.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DaSL7yW8.js";import"./useElementOffset-BfGkUEya.js";import"./uniqBy-DrBmN39C.js";import"./iteratee-C4UAKD1z.js";import"./Cross-CL_xgF11.js";import"./Rectangle-ByMG9fnn.js";import"./util-Dxo8gN5i.js";import"./Sector-Bc34-crJ.js";import"./Symbols-BQ5awPLZ.js";import"./symbol-CTLfMt-z.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
