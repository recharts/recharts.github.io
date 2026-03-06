import{r as w,e}from"./iframe-CwQqlQJt.js";import{g as B}from"./utils-ePvtT4un.js";import{S as f}from"./ScatterChartArgs-CaeXznmO.js";import{a as S}from"./assertNotNull-uK_qSLsC.js";import{S as c}from"./ScatterChart-C8jz-v2P.js";import{C as g}from"./CartesianGrid-DF56C0NO.js";import{X as b}from"./XAxis-WQ1W94Oc.js";import{Y as l}from"./YAxis-DZx2Qb_9.js";import{Z as F}from"./ZAxis-C-_SK6mx.js";import{T as h}from"./Tooltip-BrhBI4fk.js";import{L as T}from"./Legend-D6ctV7Iy.js";import{S as m}from"./Scatter-C0THQHUI.js";import{R as D}from"./RechartsHookInspector-DE9uvm11.js";import{R as j}from"./arrayEqualityCheck-BajvuZUd.js";import{R as O}from"./ReferenceArea-BujEgE6A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-mfnwaW4T.js";import"./index-_RolKYTX.js";import"./immer-Bw_kturo.js";import"./hooks-CEEbPwwQ.js";import"./axisSelectors-CiLIxTM1.js";import"./d3-scale-MvDvfgbn.js";import"./zIndexSlice-C8qpENF4.js";import"./renderedTicksSlice-DD88ZL81.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CB-rBxO3.js";import"./chartDataContext-DhwkPQ9I.js";import"./CategoricalChart-D6AbF0nJ.js";import"./resolveDefaultProps-BwAiebew.js";import"./CartesianAxis--UFkxmwi.js";import"./Layer-BfeVm7hl.js";import"./Text-DEfSdBAV.js";import"./DOMUtils-Dk-0Y4qu.js";import"./Label-L2ClqQk9.js";import"./ZIndexLayer-BhfIIgcP.js";import"./types-iTXorHjM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useAnimationId-BkdqwMyM.js";import"./useElementOffset-XAjKA6pX.js";import"./uniqBy-HUwiZ0iN.js";import"./iteratee-DxQhEFlx.js";import"./Curve-DVUJSzGy.js";import"./step-CzpXmVwk.js";import"./Cross-C-HRGopZ.js";import"./Rectangle-BfTwe_Uy.js";import"./Sector-DlF65nWv.js";import"./Symbols-B_0LQQd8.js";import"./symbol-BrIbO22w.js";import"./ReactUtils-3SZUbpqz.js";import"./tooltipContext-G5wINDfz.js";import"./ActiveShapeUtils-Cc01wXEA.js";import"./isPlainObject-BdAdFHxg.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DuD6k8aH.js";import"./RegisterGraphicalItemId-j64FPojn.js";import"./ErrorBarContext-CnIL0nCY.js";import"./GraphicalItemClipPath-CGVVVryc.js";import"./SetGraphicalItem-B838l6ba.js";import"./index-D_-HOL7T.js";import"./ChartSizeDimensions-B33reZ_o.js";import"./OffsetShower-CD2wvvOr.js";import"./PlotAreaShower-CwvzOICJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const W=[{year:2011,babies:312,length:194.5},{year:2012,babies:335,length:345.333},{year:2013,babies:366,length:243.667},{year:2014,babies:409,length:843.5},{year:2015,babies:382,length:484.4},{year:2016,babies:427,length:735.898},{year:2017,babies:439,length:733.833},{year:2018,babies:430,length:638.625},{year:2019,babies:438,length:700.172},{year:2020,babies:463,length:1009.8},{year:2021,babies:568,length:1556.52},{year:2022,babies:476,length:1288.42}],et={component:c,argTypes:f,docs:{autodocs:!1}},d={render:t=>e.createElement(c,{...t},e.createElement(g,{vertical:!1,yAxisId:"axis-babies"}),e.createElement(b,{type:"category",dataKey:"year",name:"Year"}),e.createElement(l,{yAxisId:"axis-babies",type:"number",dataKey:"babies",label:{value:"Babies born",position:"center",angle:-90,stroke:"black",dx:-20},domain:["dataMin","dataMax"],stroke:"black",name:"Babies born",unit:"",orientation:"left",axisLine:!1,tickLine:!1,tickCount:5}),e.createElement(l,{yAxisId:"axis-youtube",type:"number",dataKey:"length",stroke:"red",orientation:"right",name:"Video length",unit:"",domain:["dataMin","dataMax"],label:{value:"Length in seconds",position:"center",angle:90,stroke:"red",dx:30},tickCount:5,axisLine:!1,tickLine:!1}),e.createElement(T,null),e.createElement(m,{lineType:"joint",line:!0,name:"Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)",yAxisId:"axis-babies",fill:"black",shape:"diamond",strokeWidth:2,strokeDasharray:"3 1"}),e.createElement(m,{line:!0,lineType:"joint",name:"Average length of Stand-up Maths YouTube videos. Source: YouTube",yAxisId:"axis-youtube",fill:"red",strokeWidth:2,shape:"circle"}),e.createElement(h,{cursor:{strokeDasharray:"3 3"},shared:!1}),e.createElement(D,null)),args:{...B(f),width:800,height:400,margin:{top:0,right:20,bottom:0,left:20},data:W}},u={render:t=>{const r=[{x:100,y:100,z:200},{x:100,y:200,z:200},{x:100,y:300,z:200}];return e.createElement(j,{width:"100%",height:400},e.createElement(c,null,e.createElement(g,null),e.createElement(b,{type:"category",allowDuplicatedCategory:!!t.allowDuplicatedCategory,dataKey:"x",name:"stature",unit:"cm"}),e.createElement(l,{type:"category",allowDuplicatedCategory:!!t.allowDuplicatedCategory,dataKey:"y",name:"weight",unit:"kg"}),e.createElement(m,{activeShape:{fill:"red"},name:"A school",data:r}),e.createElement(h,{cursor:{strokeDasharray:"3 3"}}),e.createElement(T,null),e.createElement(D,null)))},args:{allowDuplicatedCategory:!1}},p={render:t=>{const r=[{x:{value:1},name:"x1"},{x:{value:2},name:"x2"},{x:{value:3},name:"x3"}],a=[{y:{value:3},name:"y1"},{y:{value:2},name:"y2"},{y:{value:1},name:"y3"}],o=s=>(S(s.x),s.x.value),i=s=>(S(s.y),s.y.value),[n,k]=w.useState(!1),[H,x]=w.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{k(!1),x(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{k(!0),x(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{x(!1)}},"Hide"),e.createElement(c,{...t,data:n?a:r},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(b,{dataKey:"name",padding:{left:30,right:30}}),e.createElement(l,{dataKey:n?i:o,width:"auto"}),e.createElement(F,{range:[200,200]}),e.createElement(h,null),e.createElement(T,null),e.createElement(m,{name:"Animated Scatter",lineType:"joint",line:!0,hide:!H,dataKey:n?i:o,stroke:"#8884d8",fill:"#8884d8",strokeWidth:3,strokeDasharray:"2 2",label:{fill:"red",dy:-25,dataKey:n?i:o}}),e.createElement(D,null)))},args:{...B(f),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},z=t=>{const r=new Date(t);let a=r.getHours();const o=r.getMinutes(),i=a>=12?"PM":"AM";return a%=12,a=a===0?12:a,o>0?`${a}:${o.toString().padStart(2,"0")} ${i}`:`${a} ${i}`},y={render:()=>e.createElement(j,{width:"100%",height:400},e.createElement(c,{margin:{top:20,right:20,bottom:20,left:20}},e.createElement(g,null),e.createElement(O,{y1:70,y2:150}),e.createElement(b,{type:"number",allowDataOverflow:!0,ticks:[new Date("2025-05-06T00:00:00").getTime(),new Date("2025-05-06T03:00:00").getTime(),new Date("2025-05-06T06:00:00").getTime(),new Date("2025-05-06T09:00:00").getTime(),new Date("2025-05-06T12:00:00").getTime(),new Date("2025-05-06T15:00:00").getTime(),new Date("2025-05-06T18:00:00").getTime(),new Date("2025-05-06T21:00:00").getTime(),new Date("2025-05-07T00:00:00").getTime()],tickFormatter:(t,r)=>typeof t!="number"?String(t):z(t),dataKey:"hour",domain:[new Date("2025-05-06T00:00:00").getTime(),new Date("2025-05-07T00:00:00").getTime()]}),e.createElement(l,{allowDataOverflow:!0,type:"number",ticks:[0,80,180,220]}),e.createElement(h,{cursor:{strokeDasharray:"3 3"}}),e.createElement(m,{name:"A school",data:[],fill:"#8884d8"})))};var C,A,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ScatterChart {...args}>
        <CartesianGrid vertical={false} yAxisId="axis-babies" />
        <XAxis type="category" dataKey="year" name="Year" />
        <YAxis yAxisId="axis-babies" type="number" dataKey="babies" label={{
        value: 'Babies born',
        position: 'center',
        angle: -90,
        stroke: 'black',
        dx: -20
      }} domain={['dataMin', 'dataMax']} stroke="black" name="Babies born" unit="" orientation="left" axisLine={false} tickLine={false} tickCount={5} />
        <YAxis yAxisId="axis-youtube" type="number" dataKey="length" stroke="red" orientation="right" name="Video length" unit="" domain={['dataMin', 'dataMax']} label={{
        value: 'Length in seconds',
        position: 'center',
        angle: 90,
        stroke: 'red',
        dx: 30
      }} tickCount={5} axisLine={false} tickLine={false} />
        <Legend />
        <Scatter lineType="joint" line name="Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)" yAxisId="axis-babies" fill="black" shape="diamond" strokeWidth={2} strokeDasharray="3 1" />
        <Scatter line lineType="joint" name="Average length of Stand-up Maths YouTube videos. Source: YouTube" yAxisId="axis-youtube" fill="red" strokeWidth={2} shape="circle" />
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} shared={false} />
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    width: 800,
    height: 400,
    margin: {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20
    },
    data: babiesAndVideosCorrelation
  }
}`,...(v=(A=d.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var E,K,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 100,
      z: 200
    }, {
      x: 100,
      y: 200,
      z: 200
    }, {
      x: 100,
      y: 300,
      z: 200
    }];
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="category" allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)} dataKey="x" name="stature" unit="cm" />
          <YAxis type="category" allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)} dataKey="y" name="weight" unit="kg" />
          <Scatter activeShape={{
          fill: 'red'
        }} name="A school" data={data} />
          <Tooltip cursor={{
          strokeDasharray: '3 3'
        }} />
          <Legend />
          <RechartsHookInspector />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    allowDuplicatedCategory: false
  }
}`,...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var R,L,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: Args) => {
    type MockDataType = {
      x?: {
        value: number;
      };
      y?: {
        value: number;
      };
      name: string;
    };
    const data1: ReadonlyArray<MockDataType> = [{
      x: {
        value: 1
      },
      name: 'x1'
    }, {
      x: {
        value: 2
      },
      name: 'x2'
    }, {
      x: {
        value: 3
      },
      name: 'x3'
    }];
    const data2: ReadonlyArray<MockDataType> = [{
      y: {
        value: 3
      },
      name: 'y1'
    }, {
      y: {
        value: 2
      },
      name: 'y2'
    }, {
      y: {
        value: 1
      },
      name: 'y3'
    }];
    const dataKey1 = (d: MockDataType) => {
      assertNotNull(d.x);
      return d.x.value;
    };
    const dataKey2 = (d: MockDataType) => {
      assertNotNull(d.y);
      return d.y.value;
    };
    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);
    return <>
        <button type="button" onClick={() => {
        setUseData2(false);
        setVisible(true);
      }}>
          Use data1
        </button>
        <button type="button" onClick={() => {
        setUseData2(true);
        setVisible(true);
      }}>
          Use data2
        </button>
        <button type="button" onClick={() => {
        setVisible(false);
      }}>
          Hide
        </button>
        <ScatterChart {...args} data={useData2 ? data2 : data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{
          left: 30,
          right: 30
        }} />
          <YAxis dataKey={useData2 ? dataKey2 : dataKey1} width="auto" />
          <ZAxis range={[200, 200]} />
          <Tooltip />
          <Legend />
          <Scatter name="Animated Scatter" lineType="joint" line hide={!visible} dataKey={useData2 ? dataKey2 : dataKey1} stroke="#8884d8" fill="#8884d8" strokeWidth={3} strokeDasharray="2 2" label={{
          fill: 'red',
          dy: -25,
          dataKey: useData2 ? dataKey2 : dataKey1
        }} />
          <RechartsHookInspector />
        </ScatterChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(I=(L=p.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var Y,U,V;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <CartesianGrid />
          <ReferenceArea y1={70} y2={150} />
          <XAxis type="number" allowDataOverflow ticks={[new Date('2025-05-06T00:00:00').getTime(), new Date('2025-05-06T03:00:00').getTime(), new Date('2025-05-06T06:00:00').getTime(), new Date('2025-05-06T09:00:00').getTime(), new Date('2025-05-06T12:00:00').getTime(), new Date('2025-05-06T15:00:00').getTime(), new Date('2025-05-06T18:00:00').getTime(), new Date('2025-05-06T21:00:00').getTime(), new Date('2025-05-07T00:00:00').getTime()]} tickFormatter={(tickValue, _index) => {
          if (typeof tickValue !== 'number') return String(tickValue);
          const label = getHourFromTimestamp(tickValue);
          return label;
        }} dataKey="hour" domain={[new Date('2025-05-06T00:00:00').getTime(), new Date('2025-05-07T00:00:00').getTime()]} />
          <YAxis allowDataOverflow type="number" ticks={[0, 80, 180, 220]} />
          <Tooltip cursor={{
          strokeDasharray: '3 3'
        }} />
          <Scatter name="A school" data={[]} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>;
  }
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const tt=["SpurriousCorrelation","WithDuplicatedCategory","ChangingDataKey","EmptyChart"];export{p as ChangingDataKey,y as EmptyChart,d as SpurriousCorrelation,u as WithDuplicatedCategory,tt as __namedExportsOrder,et as default};
