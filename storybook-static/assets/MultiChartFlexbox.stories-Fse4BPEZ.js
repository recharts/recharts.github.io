import{R as e}from"./iframe-DGZg1BaY.js";import{A as r}from"./AreaChart-BaYrgCCR.js";import{R as n}from"./zIndexSlice-RSobkBfJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-Cxo9TLCz.js";import{X as i}from"./XAxis-BkrEDfGE.js";import{Y as m}from"./YAxis-BZtV9zAx.js";import{A as l}from"./Area-CGiiw1Iu.js";import{T as s}from"./Tooltip-Zz8cIuvo.js";import{L as f}from"./LineChart-B0ff9JVA.js";import{L as x}from"./Line-BjwcwMYh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bacgswk5.js";import"./index-CkL0GuEG.js";import"./index-BXki0_jB.js";import"./index-Cct5a00b.js";import"./index-clGj1WHq.js";import"./immer-BT6VGnPe.js";import"./get-DY0OjSK6.js";import"./renderedTicksSlice-Dewx_RJS.js";import"./axisSelectors-CdelNDSz.js";import"./d3-scale-CTB_TOgf.js";import"./resolveDefaultProps-BjAvdkCv.js";import"./isWellBehavedNumber-0KuhYisV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BJ5L6c8p.js";import"./chartDataContext-Cq7x5jLr.js";import"./CategoricalChart-BMzuLFGj.js";import"./CartesianAxis-DDEi9eFQ.js";import"./Layer--_bnQ9Ul.js";import"./Text-BqNTVXko.js";import"./DOMUtils-BzC8w9yF.js";import"./Label-B4XUjnXV.js";import"./ZIndexLayer-5g4pRwMA.js";import"./types-CUzx8cK0.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-CAvgFIRj.js";import"./useAnimationId-CGxH7MOe.js";import"./ActivePoints-DJFCrMTb.js";import"./Dot-DiO2Qmm4.js";import"./RegisterGraphicalItemId-BYwdAoF6.js";import"./GraphicalItemClipPath-gslOIRLN.js";import"./SetGraphicalItem-BCxyd91k.js";import"./getRadiusAndStrokeWidthFromDot-BOdJyA31.js";import"./ActiveShapeUtils-Dc_2IcP9.js";import"./Curve-BNlPs19R.js";import"./step-BQdN9BCS.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DLWsIefM.js";import"./useElementOffset-FCVSXiSc.js";import"./uniqBy-Dd2sidz2.js";import"./iteratee-6x__QjEC.js";import"./Cross-C5QwhTX2.js";import"./Rectangle-C6RAZfOj.js";import"./util-Dxo8gN5i.js";import"./Sector-aFnSVPUo.js";import"./ErrorBarContext-DCQzTmNl.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
