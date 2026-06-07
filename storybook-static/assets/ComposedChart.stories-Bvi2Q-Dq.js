import{R as e}from"./iframe-CIqcR0nr.js";import{C as r}from"./ComposedChartArgs-CgvqQqFx.js";import{g as d}from"./utils-ePvtT4un.js";import{p as o}from"./Page-Cj8EiXz7.js";import{t as H}from"./Time-CZh6Vidc.js";import{C as E}from"./ComposedChart-bqMlW8-b.js";import{A as p}from"./Area-BYWQt4Ke.js";import{B as a}from"./Bar-BJLp41mc.js";import{L as c}from"./Line-BX67Nlm1.js";import{R as P}from"./zIndexSlice-BaZcNNNO.js";import{X as f}from"./XAxis-sUTGKqnh.js";import{Y as g}from"./YAxis-Cp6hJTBs.js";import{L as y}from"./Legend-By7FykyZ.js";import{C as u}from"./CartesianGrid-DpNIM-D2.js";import{R as Z}from"./ReferenceLine-DgmtDLO8.js";import{R as _}from"./ReferenceDot-BTa7SM8E.js";import{B as G}from"./Brush-C98rpBBl.js";import{L as X}from"./LineChart-DtGALauj.js";import{T as h}from"./Tooltip-CAkkWeYW.js";import{S as Y}from"./Scatter-hdpJBBYy.js";const I={argTypes:r,component:E},C={render:t=>e.createElement(P,{width:"100%",height:300},e.createElement(E,{...t,data:o,margin:{top:20,right:20,bottom:20,left:20}},t.children))},n={name:"Simple Chart",...C,args:{...d(r),data:o,children:e.createElement(e.Fragment,null,e.createElement(p,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"uv"}),e.createElement(c,{dataKey:"pv"}))}},l={...C,args:{...d(r),data:o,children:e.createElement(e.Fragment,null,e.createElement(f,{dataKey:"name",scale:"band"}),e.createElement(g,null),e.createElement(y,{layout:"vertical",align:"right",verticalAlign:"middle"}),e.createElement(u,{stroke:"#f5f5f5"}),e.createElement(p,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"uv",fill:"#ff7300"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(Z,{x:"Page C",stroke:"red",label:"Max PV PAGE"}),e.createElement(_,{x:"Page C",y:1300,stroke:"red"}),e.createElement(G,null,e.createElement(X,null,e.createElement(c,{dataKey:"uv",stroke:"#ff7300",dot:!1}))),e.createElement(h,null))}},m={...C,args:{...d(r),data:o,children:e.createElement(e.Fragment,null,e.createElement(f,{dataKey:"name"}),e.createElement(g,null),e.createElement(y,{layout:"vertical",align:"right",verticalAlign:"middle"}),e.createElement(u,{stroke:"#f5f5f5"}),e.createElement(p,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(c,{type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(Y,{dataKey:"pv",fill:"red"}),e.createElement(G,null),e.createElement(h,null))}},i={...C,args:{...d(r),data:o,children:e.createElement(e.Fragment,null,e.createElement(f,null),e.createElement(g,null),e.createElement(y,null),e.createElement(u,{stroke:"#f5f5f5"}),e.createElement(a,{dataKey:"pv",barSize:20,fill:"#413ea0"}),e.createElement(c,{type:"monotone",dataKey:"pv",stroke:"#ff7300"}),e.createElement(h,null))}},s={render:t=>{const O=j=>j.toLocaleString("en-GB",{timeZone:"UTC",dateStyle:"medium"});return e.createElement("div",{style:{width:"600px"}},e.createElement("p",null,"A ComposedChart of time scale"),e.createElement(P,{width:"100%",height:500},e.createElement("div",{className:"composed-chart-wrapper"},e.createElement(E,{width:600,height:400,data:t.timeData,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(u,{stroke:"#f5f5f5"}),e.createElement(f,{dataKey:"x",domain:[t.from.getTime(),t.to.getTime()],scale:"time",type:"number",tick:{fontSize:10,fill:"red"},tickFormatter:O}),e.createElement(g,null),e.createElement(y,null),e.createElement(p,{type:"monotone",dataKey:"y",fill:"#8884d8",stroke:"#8884d8"}),e.createElement(a,{dataKey:"y",barSize:20,fill:"#413ea0"}),e.createElement(c,{type:"monotone",dataKey:"y",stroke:"#ff7300"}),e.createElement(h,null)))))},args:{...d(r),from:new Date("2019-07-04T00:00:00.000Z"),to:new Date("2019-07-10T00:00:00.000Z"),timeData:H,data:o}};var A,v,S;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Simple Chart',
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" />
        <Line dataKey="pv" />
      </>
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var K,k,T;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" fill="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceDot x="Page C" y={1300} stroke="red" />
        <Brush>
          <LineChart>
            <Line dataKey="uv" stroke="#ff7300" dot={false} />
          </LineChart>
        </Brush>
        <Tooltip />
      </>
  }
}`,...(T=(k=l.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var b,L,x;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Scatter dataKey="pv" fill="red" />
        <Brush />
        <Tooltip />
      </>
  }
}`,...(x=(L=m.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var B,z,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...HorizontalChartTemplate,
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    data: pageData,
    children: <>
        <XAxis />
        <YAxis />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" />
        <Tooltip />
      </>
  }
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,w,R;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: Args) => {
    const tickFormatter = (tick: Date) => {
      return tick.toLocaleString('en-GB', {
        /*
         * Forced timezone so that our visual diff renders the same for all contributors.
         * In real app you will probably leave timeZone undefined
         */
        timeZone: 'UTC',
        dateStyle: 'medium'
      });
    };
    return <div style={{
      width: '600px'
    }}>
        <p>A ComposedChart of time scale</p>
        <ResponsiveContainer width="100%" height={500}>
          <div className="composed-chart-wrapper">
            <Composed width={600} height={400} data={args.timeData} margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="x" domain={[args.from.getTime(), args.to.getTime()]} scale="time" type="number" tick={{
              fontSize: 10,
              fill: 'red'
            }} tickFormatter={tickFormatter} />
              <YAxis />
              <Legend />
              <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="y" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="y" stroke="#ff7300" />
              <Tooltip />
            </Composed>
          </div>
        </ResponsiveContainer>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ComposedChartArgs),
    from: new Date('2019-07-04T00:00:00.000Z'),
    to: new Date('2019-07-10T00:00:00.000Z'),
    timeData,
    data: pageData
  }
}`,...(R=(w=s.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const M=["API","ComplexChart","LineBarAreaScatter","LineBarHorizontal","LineBarAreaScatterTimeScale"],pe=Object.freeze(Object.defineProperty({__proto__:null,API:n,ComplexChart:l,LineBarAreaScatter:m,LineBarAreaScatterTimeScale:s,LineBarHorizontal:i,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{n as A,pe as C};
