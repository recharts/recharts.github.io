import{R as e}from"./iframe-C-fup5Id.js";import{u as m,a as h,d,E as u}from"./zIndexSlice-NTR0fs-C.js";import{C as g}from"./ChartSizeDimensions-DtgujR68.js";import{C as p}from"./ComposedChart-Jz5lk914.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-8TCI2H73.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./get-p2wvzD9I.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B95PZmfT.js";import"./index-DNWmVjf2.js";import"./index-BlVQDt2E.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
