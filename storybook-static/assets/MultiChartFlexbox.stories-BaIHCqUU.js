import{R as e}from"./iframe-Ds1J5XKD.js";import{A as r}from"./AreaChart-DJHJRz5D.js";import{R as n}from"./zIndexSlice-UCyaaMGS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-BJ2avNT5.js";import{X as i}from"./XAxis-DoWvPRbH.js";import{Y as m}from"./YAxis-eP85-8SJ.js";import{A as l}from"./Area-DJmvBedj.js";import{T as s}from"./Tooltip-Db1eaiSZ.js";import{L as f}from"./LineChart-m26wqSLq.js";import{L as x}from"./Line-DuxS_s48.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BAOT1HW_.js";import"./index-D20-MSnL.js";import"./index-BzzxIcBT.js";import"./index-Co2IbVNM.js";import"./index-CzrGLoIQ.js";import"./throttle-BH_VG--i.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-kb1cJng-.js";import"./axisSelectors-Tr36h9al.js";import"./resolveDefaultProps-Do401MpT.js";import"./isWellBehavedNumber-Dz72kwHe.js";import"./d3-scale-C3U5gPbW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DOdhq5wJ.js";import"./chartDataContext-BhVZbVOm.js";import"./CategoricalChart-wjwwJKX3.js";import"./CartesianAxis-CDp_ZXfj.js";import"./Layer-nVED5kUO.js";import"./Text-jdQ0MfG2.js";import"./DOMUtils-DsCGVJ9c.js";import"./Label-CNOb6BUs.js";import"./ZIndexLayer-DZsY-UK0.js";import"./types-BQazP4PY.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-D70ai7P5.js";import"./useAnimationId-CHjE-uiV.js";import"./ActivePoints-Bhs7RZpf.js";import"./Dot-C6VoQzSz.js";import"./RegisterGraphicalItemId-i_epzSee.js";import"./GraphicalItemClipPath-BO5z_Dot.js";import"./SetGraphicalItem-qVzcGAlb.js";import"./getRadiusAndStrokeWidthFromDot-BOSN6lTY.js";import"./ActiveShapeUtils-CcQaIRSL.js";import"./Curve-C9kHMz3L.js";import"./step-7tBtg14U.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DJy1cWpY.js";import"./useElementOffset-D0hlMEgK.js";import"./uniqBy-Cb9ErWqE.js";import"./iteratee-DkjsJILk.js";import"./Cross-BfCfff9L.js";import"./Rectangle-DDz0k9b7.js";import"./util-Dxo8gN5i.js";import"./Sector-9YalwLVX.js";import"./ErrorBarContext-aJ-QmRys.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <>
        <p>Resize the window to test ResponsiveContainer</p>
        <div className="flex-parent">
          <ResponsiveContainer width="100%" className="flex-child">
            <AreaChart data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
          <ResponsiveContainer className="flex-child">
            <LineChart data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="amt" stroke="orange" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>;
  },
  args: {}
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,u,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    }, {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }, {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    }, {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    }, {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    }, {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    }, {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }];
    return <div style={{
      height: '100%',
      width: '100%',
      margin: 0
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '200px'
      }}>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>;
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ke=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,ke as __namedExportsOrder,Re as default};
