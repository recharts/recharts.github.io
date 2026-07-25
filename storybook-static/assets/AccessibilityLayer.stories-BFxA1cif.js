import{r as A,R as t}from"./iframe-B06eq_mz.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-5JCLGpBO.js";import{A as E}from"./AreaChart-v2lQCZkM.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Cw3uAQ6C.js";import{X as g}from"./XAxis-D6J_FGoO.js";import{Y as h}from"./YAxis-CIZVFNfM.js";import{A as a}from"./Area-BJEEr59K.js";import{T as u}from"./Tooltip-JRW53VRw.js";import{R as k}from"./zIndexSlice-DZ0Q8BZb.js";import{L as v}from"./Legend-i3AyAOa9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5NLQSdK.js";import"./index-C5xxdLaM.js";import"./index-tCsMn5v1.js";import"./index-CYBZJJ0c.js";import"./index-CdiP4uoA.js";import"./throttle-DWlJTWeN.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Hn5vD_Co.js";import"./axisSelectors-B1LI97QB.js";import"./resolveDefaultProps-DtTSgpqn.js";import"./isWellBehavedNumber-DNvLaw60.js";import"./d3-scale-AtM_X8t9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-W-yd_mhO.js";import"./chartDataContext-Sk-D_ye3.js";import"./CategoricalChart-OHkYYYd7.js";import"./CartesianAxis-Ctfj6_7f.js";import"./Layer-XBL4Rxwk.js";import"./Text-C48XOo8y.js";import"./DOMUtils-CKORyHt8.js";import"./Label-DB6uwHR-.js";import"./ZIndexLayer-fQY0BiB2.js";import"./types-CeAaMoTr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-C0zIpN2y.js";import"./useAnimationId-Dv1roAA4.js";import"./ActivePoints-DN8GaRZ0.js";import"./Dot-DHSjX4gV.js";import"./RegisterGraphicalItemId-DDWl-fOV.js";import"./GraphicalItemClipPath-DtkF5P7U.js";import"./SetGraphicalItem-C5vdnQC6.js";import"./getRadiusAndStrokeWidthFromDot-YCuK-otx.js";import"./ActiveShapeUtils-B667TR48.js";import"./Curve-Di_KaZv8.js";import"./step-Baald1Gr.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DuBEe48Q.js";import"./useElementOffset-BWoSWIsM.js";import"./uniqBy-CAuwwug3.js";import"./iteratee-CQFk0lUx.js";import"./Cross-XqcFIe7m.js";import"./Rectangle-D_tYzf8y.js";import"./util-Dxo8gN5i.js";import"./Sector-lZm3UC2o.js";import"./Symbols-CaqXhdeL.js";import"./symbol-D6tYqKs9.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
