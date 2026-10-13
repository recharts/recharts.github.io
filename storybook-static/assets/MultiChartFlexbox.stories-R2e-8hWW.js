import{a as e}from"./iframe-_HfAVjpf.js";import{A as a}from"./AreaChart-B_j2KtL_.js";import{R as r}from"./zIndexSlice-BBpCjLLT.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-CWYHd3Ws.js";import{X as i}from"./XAxis-BPfOL0q9.js";import{Y as m}from"./YAxis-BoV0AlEf.js";import{A as s}from"./Area-CMToonfJ.js";import{T as p}from"./Tooltip-CLDh_MwF.js";import{L as f}from"./LineChart-BOtHmLbx.js";import{L as x}from"./Line-Ds-1cdF_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3bcu809.js";import"./resolveDefaultProps-D7IrzSl6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BggHFTDq.js";import"./throttle-DIGsG3tn.js";import"./index-Cs9o5rrz.js";import"./index-CIyvwLXB.js";import"./isWellBehavedNumber-DviO5hHm.js";import"./d3-scale-B5oQCS6M.js";import"./index-ATsp3Ecu.js";import"./index-uZk8L8Al.js";import"./renderedTicksSlice-BNJCO30A.js";import"./index-CIMOmY0A.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-De3rsgvn.js";import"./chartDataContext-Dyk7Yokq.js";import"./CategoricalChart-a-VUE4A0.js";import"./CartesianAxis-Chrpiu6A.js";import"./Layer-CacweoVl.js";import"./Text-WmpuDBGa.js";import"./pageBackground-CfQpba4h.js";import"./useId-B3zQHx_-.js";import"./useBackwardsCompatibleTheme-BJsCYBM6.js";import"./Label-CR54GT5X.js";import"./ZIndexLayer-BrUuampD.js";import"./types-BGnPJWtT.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BdpGsFup.js";import"./useAnimationId-BhBKKO0p.js";import"./dataEntryStyles-Ucx7Hmoa.js";import"./ActivePoints-BDWzEukD.js";import"./Dot-fMnVn2BH.js";import"./GraphicalItemClipPath-C1A7eGe6.js";import"./SetGraphicalItem-Cj-t7_ZW.js";import"./getRadiusAndStrokeWidthFromDot-BqM4XHNM.js";import"./ActiveShapeUtils-4DLJyt96.js";import"./Curve-DpQ41Ei2.js";import"./step-Max-Kn08.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-C_P0BrSn.js";import"./useElementOffset-B927Oy_l.js";import"./uniqBy-TLIumvzr.js";import"./iteratee-CTU_33At.js";import"./Cross-BzOjiYoL.js";import"./Rectangle-Cur1iMCQ.js";import"./util-Dxo8gN5i.js";import"./Sector-BC_dkoX6.js";import"./ErrorBarContext-BDsk2xtE.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
