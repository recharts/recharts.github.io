import{e}from"./iframe-BlCBiEbC.js";import{e as m,f as h,b as d,B as u}from"./arrayEqualityCheck-X93wQEqh.js";import{C as f}from"./ChartSizeDimensions-1GSyPMX1.js";import{C as c}from"./ComposedChart-kZ-KCn3S.js";import{R as g}from"./RechartsHookInspector-CHVk1qod.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bzr_YW23.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DkDok3zQ.js";import"./hooks-BT650JQT.js";import"./axisSelectors-0_eHLV3I.js";import"./zIndexSlice-RKZlw9rR.js";import"./CartesianChart-DgUfEX9r.js";import"./chartDataContext-B-D1_Xyu.js";import"./CategoricalChart-CX-nrdd_.js";import"./index-D4FkNtIV.js";import"./OffsetShower-BzuY3Qm6.js";import"./PlotAreaShower-D5VmZD6S.js";function x(){const s=m(),r=h(),p=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${p}`))}const B={component:c,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(c,{...s},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      height: '100vh'
    }}>
        <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }} className="spacer-top">
          <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '100px'
        }} className="spacer-left">
            <ComposedChart {...args}>
              <ChartSizeDimensions />
              <ShowScale />
              <RechartsHookInspector />
            </ComposedChart>
          </div>
        </div>
      </div>;
  },
  args: {
    width: 500,
    height: 500
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const D=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,D as __namedExportsOrder,B as default};
