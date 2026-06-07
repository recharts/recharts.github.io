import{R as e}from"./iframe-CIqcR0nr.js";import{A as r}from"./AreaChart-BT38hKpB.js";import{R as n}from"./zIndexSlice-BaZcNNNO.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DpNIM-D2.js";import{X as i}from"./XAxis-sUTGKqnh.js";import{Y as m}from"./YAxis-Cp6hJTBs.js";import{A as l}from"./Area-BYWQt4Ke.js";import{T as s}from"./Tooltip-CAkkWeYW.js";import{L as f}from"./LineChart-DtGALauj.js";import{L as x}from"./Line-BX67Nlm1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CO7Bj1Ew.js";import"./index-BRQXzpqS.js";import"./index-iWp3ygHn.js";import"./index-CI5kewFp.js";import"./index-D3_7IQAj.js";import"./immer-DOlCD6_E.js";import"./get-CuhoYgBd.js";import"./renderedTicksSlice-uyZ8N1qc.js";import"./axisSelectors-Dp0MorEj.js";import"./d3-scale-BVoLe-e3.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-X_RPaIii.js";import"./isWellBehavedNumber-CN_oQGvc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BiFR7vHR.js";import"./chartDataContext-BkIJbLAm.js";import"./CategoricalChart-OQdWBIBS.js";import"./CartesianAxis-wzAvkxKf.js";import"./Layer-Cz--vJfn.js";import"./Text-CimnMCMD.js";import"./DOMUtils-DMPXj1nB.js";import"./Label-CuY-JOss.js";import"./ZIndexLayer-B9KPNn2Z.js";import"./types-3DMlx_O9.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./AnimatedItems-5cW9jO0l.js";import"./useAnimationId-BJaGTs_s.js";import"./ActivePoints-B5L26l-l.js";import"./Dot-C6Y9kE6a.js";import"./RegisterGraphicalItemId-BxGDByrp.js";import"./GraphicalItemClipPath-CMCMKENx.js";import"./SetGraphicalItem-C8JcvXzc.js";import"./getRadiusAndStrokeWidthFromDot-D2ZfklZg.js";import"./ActiveShapeUtils-BLEsVfwW.js";import"./Curve-DrcpD24k.js";import"./step-DBJepXtz.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-_qDBExF4.js";import"./useElementOffset-DG3jpNvQ.js";import"./uniqBy-BGYajFOV.js";import"./iteratee-DoUmNYIo.js";import"./Cross-CEVyxNrn.js";import"./Rectangle-BMn1e7Xa.js";import"./Sector-ILL068cZ.js";import"./ErrorBarContext-D7ZmPrb-.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
