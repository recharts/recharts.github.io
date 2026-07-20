import{R as e}from"./iframe-CYE_KjLp.js";import{z as m,A as h,b as d,C as u}from"./zIndexSlice-BJ5AXs-O.js";import{C as g}from"./ChartSizeDimensions-CeIPBDXO.js";import{C as p}from"./ComposedChart-FkotVeZi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMwKm87I.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8_njvAZI.js";import"./index-CwiYvwQ-.js";import"./index-CN526hDZ.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./axisSelectors-Cz15TeqU.js";import"./d3-scale-BYal7h8i.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CategoricalChart-DxSK9VeV.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
            </ComposedChart>
          </div>
        </div>
      </div>;
  },
  args: {
    width: 500,
    height: 500
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const L=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,L as __namedExportsOrder,H as default};
