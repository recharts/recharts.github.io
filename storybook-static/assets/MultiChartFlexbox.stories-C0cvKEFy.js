import{a as e}from"./iframe-7Yqq7fCu.js";import{A as a}from"./AreaChart-B2WZHWGN.js";import{R as r}from"./zIndexSlice-Clo6-Yyn.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DdQBLXg1.js";import{X as i}from"./XAxis-1FKbFMeO.js";import{Y as m}from"./YAxis-Cy7XE4j-.js";import{A as s}from"./Area-Cm62p_1O.js";import{T as p}from"./Tooltip-B_7JlKfR.js";import{L as f}from"./LineChart-C-KEEQ7Q.js";import{L as x}from"./Line-y-Q91fXJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BmN3AX4B.js";import"./resolveDefaultProps-DPH1JWez.js";import"./get-C2VjdU0L.js";import"./axisSelectors-TNeFeRD0.js";import"./throttle-CPS_vYKA.js";import"./index-BP89nsqC.js";import"./index-Bvs3nnJ3.js";import"./isWellBehavedNumber-3XLFrVwb.js";import"./d3-scale-BucieWce.js";import"./index-CMyPnnGY.js";import"./index-CIvsYy-Z.js";import"./renderedTicksSlice-C7nR0wuC.js";import"./index-BmRJq5r2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7Vexiif.js";import"./chartDataContext-BDajETE7.js";import"./CategoricalChart-DGs6T5PE.js";import"./CartesianAxis-Tr4fBNdd.js";import"./Layer-B4eFX6wr.js";import"./Text-CBP65qj4.js";import"./DOMUtils-DFLenfZw.js";import"./useId-CQKco8O5.js";import"./useBackwardsCompatibleTheme-DsG9X6Al.js";import"./Label-BeKnll5A.js";import"./ZIndexLayer-CY2z0VDd.js";import"./types-BLNI4yrZ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BlURIwD6.js";import"./useAnimationId-OFL2L8Zq.js";import"./ActivePoints-Df4Z0MND.js";import"./Dot-B0z70aRe.js";import"./RegisterGraphicalItemId-CBb6S0jv.js";import"./GraphicalItemClipPath-ElSd1RxM.js";import"./SetGraphicalItem-DDBsqrXQ.js";import"./getRadiusAndStrokeWidthFromDot-BA9-tDMT.js";import"./ActiveShapeUtils-RlmFljs4.js";import"./Curve-Bx49RMW5.js";import"./step-CY_23fua.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C_cMOVZX.js";import"./useElementOffset-CVlFUWt-.js";import"./uniqBy-CgUI3qsR.js";import"./iteratee-DqkESnyS.js";import"./Cross-BBg7bcb6.js";import"./Rectangle-D0MukTZZ.js";import"./util-Dxo8gN5i.js";import"./Sector-BMtiqe0D.js";import"./ErrorBarContext-B86Z1RsK.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,u,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};export{t as MultiChartFlexbox,n as ResponsiveContainerWithFlexbox,be as __namedExportsOrder,Pe as default};
