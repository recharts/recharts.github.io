import{r as y,e}from"./iframe-BRu_qZg1.js";import{g as l}from"./utils-ePvtT4un.js";import{T as n}from"./TooltipArgs-BBATqmz9.js";import{T as i,D as Me}from"./Tooltip-CmHJro1j.js";import{R as d}from"./arrayEqualityCheck-BgwbYKtC.js";import{C as g}from"./ComposedChart-BejM8Hgg.js";import{X as v}from"./XAxis-CkACgIfp.js";import{Y as T}from"./YAxis-BW9q8bD-.js";import{L as o}from"./Line-BQ93j6Ys.js";import{R as c}from"./RechartsHookInspector-CJy-wMRv.js";import{B as u}from"./Bar-1dCBYxG2.js";import{L as j}from"./LineChart-DNmDi6TE.js";import{B as Z}from"./BarChart-CPhj5Fid.js";import{C as Xe}from"./CartesianGrid-fEnEi-FK.js";import{L as $e}from"./Legend-BJ_ZIhKW.js";import{A as Ne}from"./Area-Gk-NLr9b.js";import{R as Ue}from"./RadialBarChart-DWZUDk4p.js";import{R as X}from"./RadialBar-Bk77elIu.js";import{p as m}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CiIZXnz-.js";import"./clsx-B-dksMZM.js";import"./useAnimationId-D8a-5J-X.js";import"./resolveDefaultProps-ClDGSYA8.js";import"./useElementOffset-DDNpUSNQ.js";import"./uniqBy-L6IG3ASA.js";import"./iteratee-CIdgG0p2.js";import"./RechartsWrapper-B9gb15RL.js";import"./index-DYVbWT0W.js";import"./hooks-cMPGG-ti.js";import"./axisSelectors-WgiG_2zA.js";import"./d3-scale-DgD4kZyM.js";import"./zIndexSlice-CjcwtRul.js";import"./renderedTicksSlice-XQiDw47v.js";import"./PolarUtils-CTnnDHZv.js";import"./types-CV4LMBiy.js";import"./Curve-CSGMMXpz.js";import"./step-XF9-athh.js";import"./Cross-DvVkkamE.js";import"./Rectangle-C99z7Ziu.js";import"./Sector-7rMGIqOV.js";import"./ZIndexLayer-C8D4smXi.js";import"./CartesianChart-DNVXg1S9.js";import"./chartDataContext-BYCMtEPQ.js";import"./CategoricalChart-CRbty2Pg.js";import"./CartesianAxis-D1FaLS9g.js";import"./Layer-BK1KTr5e.js";import"./Text-CZ6mhO2l.js";import"./DOMUtils-Np4d91u5.js";import"./Label-PVHJRfQa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-gnwCD4Om.js";import"./ActivePoints-lX6lnj3q.js";import"./Dot-DbWS2m0E.js";import"./RegisterGraphicalItemId-KDJ0wyU8.js";import"./ErrorBarContext-CfL1_1JT.js";import"./GraphicalItemClipPath-rMExk2wU.js";import"./SetGraphicalItem-DZJju-u_.js";import"./getRadiusAndStrokeWidthFromDot-CXiKui9m.js";import"./ActiveShapeUtils-jyCby69N.js";import"./isPlainObject-Dl8lI7a1.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CJsPOYXY.js";import"./Symbols-DM4rdUCn.js";import"./symbol-D-gvh6cA.js";import"./index-CUWwfEzD.js";import"./ChartSizeDimensions-DNlI3sC4.js";import"./OffsetShower-Cm8zLz0R.js";import"./PlotAreaShower-Bj1zpgLw.js";import"./tooltipContext-CX0tBQ1W.js";import"./tiny-invariant-CopsF_GD.js";import"./getZIndexFromUnknown-CP3QIbNe.js";import"./graphicalItemSelectors-C1DBQX2m.js";import"./PolarChart-BNdQVQ7F.js";import"./polarScaleSelectors-BuhOYMuD.js";import"./polarSelectors-RYR9WPG0.js";function*ze(t){let s=t;for(s>0&&s<1&&(s=Math.round(s*1e3));s<0;)s+=65537;for(;;)s=(75*s+74)%65537,yield Math.round(s)}function W(t,a,r){return t.next().value%(r-a)+a}function Ge(t,a){const r=[],p=ze(a);for(let s=0;s<t;s++)r.push({label:`Iter: ${s}`,x:W(p,100,300),y:W(p,400,800),z:W(p,1e3,2e3)});return r}y.createContext(null);const Ta={argTypes:n,component:i},P={render:t=>e.createElement(d,{width:"100%",height:400},e.createElement(g,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(T,null),e.createElement(i,{...t}),e.createElement(o,{dataKey:"uv"}),e.createElement(c,null)))},C={...P,args:{...l(n),active:!0}},A={render:t=>e.createElement(j,{width:500,height:300,data:m,accessibilityLayer:!0,margin:{top:5,right:5,bottom:5,left:0}},e.createElement(Xe,{stroke:"#eee",strokeDasharray:"5 5"}),e.createElement(v,{dataKey:"name"}),e.createElement(T,null),e.createElement(i,{...t}),e.createElement(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),e.createElement(o,{type:"monotone",dataKey:"pv",stroke:"#82ca9d"}),e.createElement(c,null)),args:{...l(n),defaultIndex:2}},b={render:t=>{const[a,r]=e.useState(!1),[p,s]=e.useState({}),f=h=>(!a&&h.payload&&h.payload.length>0&&h.coordinate.x!==p.x&&s({payload:h.payload,x:h.coordinate.x,label:h.label}),e.createElement(Me,{...h,payload:h.tooltipData.payload??h.payload,label:h.tooltipData.label??h.label}));return e.createElement(d,{width:"100%",height:500},e.createElement(g,{data:m,onClick:()=>{r(!a)}},e.createElement(i,{...t,position:{y:0,x:p.x},content:e.createElement(f,{tooltipData:p})}),e.createElement(o,{dataKey:"uv"}),e.createElement(u,{dataKey:"pv"}),e.createElement(c,null)))},description:"This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.",args:{...l(n)}},w={render:t=>{const[a,r]=y.useState(1.2),p=y.useCallback(()=>r(f=>f+.1),[]),s=y.useCallback(()=>r(f=>f-.1),[]);return e.createElement("div",{style:{width:"100%"}},e.createElement("h2",null,"No transform: scale"),e.createElement("div",{style:{display:"flex"}},e.createElement(d,{width:"100%",height:200},e.createElement(g,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{dataKey:"uv"}),e.createElement(u,{dataKey:"pv"})))),e.createElement("h2",null,"Parent container",` <div style={{transform: scale(${a})}}> ...`),e.createElement("button",{type:"button",onClick:p},"Zoom In"),e.createElement("button",{type:"button",onClick:s},"Zoom Out"),e.createElement("div",{style:{transform:`scale(${a})`,transformOrigin:"50% 0"}},e.createElement(d,{width:"100%",height:200},e.createElement(g,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(o,{dataKey:"uv"}),e.createElement(u,{dataKey:"pv"}),e.createElement(i,{...t}),e.createElement(c,null)))))},description:"This example shows if Tooltip is shown correctly when parent component use transform:scale styling",args:{...l(n)}},_e=[{category:"A",value:.2},{category:"B",value:.3},{category:"B",value:.5},{category:"C",value:.6},{category:"C",value:.7},{category:"D",value:.4}],Je=[{category:"A",value:null},{category:"B",value:null},{category:"B",value:null},{category:"C",value:.2},{category:"C",value:.4},{category:"D",value:.6}],S={render:t=>e.createElement(d,{width:"100%",height:500},e.createElement(g,{data:_e},e.createElement(v,{dataKey:"category",type:"category"}),e.createElement(T,{dataKey:"value"}),e.createElement(i,{...t}),e.createElement(Ne,{dataKey:"value"}),e.createElement(o,{dataKey:"value",data:Je}),e.createElement(c,null))),args:{...l(n)}},R={...P,args:{...l(n),trigger:"click"}},qe=({active:t,payload:a})=>e.createElement("div",{style:{backgroundColor:"#5b63ffe7",padding:"10px",borderRadius:"10px",boxShadow:"1px 2px 10px -2px #7873ffb1",visibility:t?"visible":"hidden"}},a==null?void 0:a.map(r=>e.createElement("p",{key:r.name,style:{borderStyle:"solid 1px",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#fff"}},`${r.name} : ${r.value}`))),x={...P,args:{...l(n),content:e.createElement(qe,null),trigger:"hover"}},K={render:t=>{const[a,r]=[600,300];return e.createElement(d,{width:"100%",height:r},e.createElement(g,{width:a,height:r,margin:{top:20,right:20,bottom:20,left:20},data:Ge(1e3,334058656)},e.createElement(i,{...t}),e.createElement(o,{dataKey:"x"}),e.createElement(o,{dataKey:"y"}),e.createElement(o,{dataKey:"z"}),e.createElement(c,null)))},args:{...l(n)}},k={render:t=>{const[a,r]=[600,300];return e.createElement(d,{width:"100%",height:r},e.createElement(g,{width:a,height:r,margin:{top:20,right:20,bottom:20,left:20},data:m},e.createElement(i,{...t}),e.createElement(o,{dataKey:"uv"}),e.createElement(o,{dataKey:"pv",hide:!0}),e.createElement(c,null)))},args:{...l(n),includeHidden:!0}},L={render:t=>e.createElement(d,{width:"100%",height:400},e.createElement(Z,{data:m},e.createElement(u,{dataKey:"uv",fill:"green"}),e.createElement(u,{dataKey:"pv",fill:"red"}),e.createElement(i,{...t}),e.createElement(c,null))),args:{...l(n),shared:!1,defaultIndex:2,active:!0}},I={render:t=>e.createElement(d,{width:"100%",height:400},e.createElement(Ue,{data:m},e.createElement(X,{dataKey:"uv",fill:"green"}),e.createElement(X,{dataKey:"pv",fill:"red"}),e.createElement(i,{...t}),e.createElement(c,null))),args:{...l(n),shared:!1,defaultIndex:2,active:!0}},E={render:t=>e.createElement(j,{width:"100%",height:50,responsive:!0,data:m},e.createElement(i,{...t}),e.createElement(o,{dataKey:"uv",fill:"green"}),e.createElement(o,{dataKey:"pv",fill:"red"}),e.createElement(o,{dataKey:"amt",fill:"amt"}),e.createElement(c,null)),args:{...l(n),defaultIndex:2,active:!0}},B={render:t=>{const[a,r]=y.useState(null);return e.createElement(e.Fragment,null,e.createElement(d,{width:"100%",height:400},e.createElement(j,{data:m},a&&e.createElement(i,{...t,portal:a}),e.createElement(o,{dataKey:"uv",fill:"green"}),e.createElement(o,{dataKey:"pv",fill:"red"}),e.createElement(c,null))),e.createElement("div",{ref:p=>{a==null&&p!=null&&r(p)}},e.createElement("p",null,"Inspect the resulting HTML to see that the Tooltip element is rendered according to the portal ref."),e.createElement("p",null,"You now control the container the Tooltip renders in, as well as style attributes such as width, height, etc. Those can be managed via the Tooltip wrapperStyle prop.")))},args:{...l(n),wrapperStyle:{width:"25%",marginLeft:10},defaultIndex:3,active:!0}},Ye=[{Triggers:10,date:"Jan 1, 2025"},{Triggers:10,date:"Feb 28, 2025"}],D={render:t=>{const[,a]=y.useState(!0);return e.createElement("div",null,e.createElement("div",{style:{height:2e3,width:300}},e.createElement("p",null,"There is a chart here; scroll down")),e.createElement("div",{style:{height:250,width:300}},e.createElement("button",{type:"button",onClick:()=>a(r=>!r)},"set random unused state"),e.createElement(d,null,e.createElement(j,{data:Ye,style:{border:"1px solid black"}},e.createElement(i,{...t}),e.createElement(o,{dataKey:"Triggers"}),e.createElement(c,null)))))},args:{...l(n)}},H={render:t=>{const[,a]=y.useState(!0);return e.createElement("div",null,e.createElement("div",{style:{height:2e3,width:300}},e.createElement("p",null,"There is a chart here; scroll down")),e.createElement("div",{style:{height:250,width:300}},e.createElement("button",{type:"button",onClick:()=>a(r=>!r)},"set random unused state"),e.createElement(d,null,e.createElement(Z,{data:Ye,style:{border:"1px solid black"}},e.createElement(u,{dataKey:"Triggers"}),e.createElement(i,{...t}),e.createElement(c,null)))))},args:{...l(n),shared:!1}},O={render:t=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr"}},e.createElement("div",{style:{width:"200px"}}),e.createElement("div",{style:{position:"relative"}},e.createElement(Z,{width:730,height:250,data:m},e.createElement(Xe,{strokeDasharray:"3 3"}),e.createElement(v,{dataKey:"name"}),e.createElement(T,null),e.createElement(i,{...t}),e.createElement($e,null),e.createElement(u,{dataKey:"pv",fill:"#8884d8"}),e.createElement(u,{dataKey:"uv",fill:"#82ca9d"}),e.createElement(c,null)))),args:{...l(n),cursor:!1}},F={render:t=>e.createElement(d,{width:"100%",height:400},e.createElement(g,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(T,null),e.createElement(o,{dataKey:"uv"}),e.createElement(i,{...t}),e.createElement(c,null))),args:{...l(n),offset:-50,wrapperStyle:{width:100}}};var Y,M,$;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    active: true
  }
}`,...($=(M=C.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var N,U,z;A.parameters={...A.parameters,docs:{...(N=A.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: Args) => <LineChart width={500} height={300} data={pageData} accessibilityLayer margin={{
    top: 5,
    right: 5,
    bottom: 5,
    left: 0
  }}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip {...args} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      <RechartsHookInspector />
    </LineChart>,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    defaultIndex: 2
  }
}`,...(z=(U=A.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,_,J;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [isLocked, setIsLocked] = React.useState(false);
    // The TooltipData contains the payload, the label and the x position of the tooltip.
    // Their update is interrupted by the click event, so we need to store them in a state.
    const [tooltipData, setTooltipData] = React.useState<{
      payload?: unknown[];
      label?: string;
      x?: number;
    }>({});

    // A custom Tooltip that updates the payload of the tooltip if the
    // chart is locked, and either way always renders using the normal Tooltip.
    const CustomTooltip = (props: any) => {
      // If the chart is locked, and the payload is not empty, and the
      // x position of the tooltip has changed, update the tooltipData.
      if (!isLocked && props.payload && props.payload.length > 0 && props.coordinate.x !== tooltipData.x) {
        setTooltipData({
          payload: props.payload,
          x: props.coordinate.x,
          label: props.label
        });
      }
      return <DefaultTooltipContent {...props} payload={props.tooltipData.payload ?? props.payload} label={props.tooltipData.label ?? props.label} />;
    };
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData}
      // Clicking the chart locks the tooltip to the current position, and fixes its content.
      onClick={() => {
        setIsLocked(!isLocked);
      }}>
          <Tooltip {...args} position={{
          y: 0,
          x: tooltipData.x
        }} // The y position fixes the Tooltip to the top of the chart.
        content={<CustomTooltip tooltipData={tooltipData} />} />
          <Line dataKey="uv" />
          <Bar dataKey="pv" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  description: 'This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.',
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(J=(_=b.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var q,Q,V;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [scale, setScale] = useState(1.2);
    const handleZoomIn = useCallback(() => setScale(s => s + 0.1), []);
    const handleZoomOut = useCallback(() => setScale(s => s - 0.1), []);
    return <div style={{
      width: '100%'
    }}>
        <h2>No transform: scale</h2>
        <div style={{
        display: 'flex'
      }}>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={pageData}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <h2>
          Parent container
          {\` <div style={{transform: scale(\${scale})}}> ...\`}
        </h2>
        <button type="button" onClick={handleZoomIn}>
          Zoom In
        </button>
        <button type="button" onClick={handleZoomOut}>
          Zoom Out
        </button>
        <div style={{
        transform: \`scale(\${scale})\`,
        transformOrigin: '50% 0'
      }}>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={pageData}>
              <XAxis dataKey="name" />
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
              <Tooltip {...args} />
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  description: 'This example shows if Tooltip is shown correctly when parent component use transform:scale styling',
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(V=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var ee,te,ae;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={areaData}>
          <XAxis dataKey="category" type="category" />
          <YAxis dataKey="value" />
          <Tooltip {...args} />
          <Area dataKey="value" />
          <Line dataKey="value" data={lineData} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(ae=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,oe,ne;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'click'
  }
}`,...(ne=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,ie,le;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    content: <CustomContent />,
    trigger: 'hover'
  }
}`,...(le=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,pe,de;K.parameters={...K.parameters,docs:{...(ce=K.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={generateMockData(1000, 334058656)}>
          <Tooltip {...args} />
          <Line dataKey="x" />
          <Line dataKey="y" />
          <Line dataKey="z" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(de=(pe=K.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,he,ge;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Tooltip {...args} />
          <Line dataKey="uv" />
          <Line dataKey="pv" hide />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    includeHidden: true
  }
}`,...(ge=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ue,ye,ve;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <BarChart data={pageData}>
          <Bar dataKey="uv" fill="green" />
          <Bar dataKey="pv" fill="red" />
          <Tooltip {...args} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    shared: false,
    defaultIndex: 2,
    active: true
  }
}`,...(ve=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,Ee,Te;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart data={pageData}>
          <RadialBar dataKey="uv" fill="green" />
          <RadialBar dataKey="pv" fill="red" />
          <Tooltip {...args} />
          <RechartsHookInspector />
        </RadialBarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    shared: false,
    defaultIndex: 2,
    active: true
  }
}`,...(Te=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var Ce,Ae,be,we,Se;E.parameters={...E.parameters,docs:{...(Ce=E.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <LineChart width="100%" height={50} responsive data={pageData}>
        <Tooltip {...args} />
        <Line dataKey="uv" fill="green" />
        <Line dataKey="pv" fill="red" />
        <Line dataKey="amt" fill="amt" />
        <RechartsHookInspector />
      </LineChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    defaultIndex: 2,
    active: true
  }
}`,...(be=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:be.source},description:{story:`https://github.com/recharts/recharts/issues/2458

Tooltip that's taller than the chart itself should not clip.
It should instead overflow the chart.`,...(Se=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Se.description}}};var Re,xe,Ke;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={pageData}>
            {portalRef && <Tooltip {...args} portal={portalRef} />}
            <Line dataKey="uv" fill="green" />
            <Line dataKey="pv" fill="red" />
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
        <div ref={node => {
        if (portalRef == null && node != null) {
          setPortalRef(node);
        }
      }}>
          <p>Inspect the resulting HTML to see that the Tooltip element is rendered according to the portal ref.</p>
          <p>
            You now control the container the Tooltip renders in, as well as style attributes such as width, height,
            etc. Those can be managed via the Tooltip wrapperStyle prop.
          </p>
          {/* The Tooltip will render here */}
        </div>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    wrapperStyle: {
      width: '25%',
      marginLeft: 10
    },
    defaultIndex: 3,
    active: true
  }
}`,...(Ke=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:Ke.source}}};var ke,Le,Ie;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [, setRandomUnusedState] = useState(true);
    return <div>
        <div style={{
        height: 2000,
        width: 300
      }}>
          <p>There is a chart here; scroll down</p>
        </div>
        <div style={{
        height: 250,
        width: 300
      }}>
          <button type="button" onClick={() => setRandomUnusedState(v => !v)}>
            set random unused state
          </button>
          <ResponsiveContainer>
            <LineChart data={d1} style={{
            border: '1px solid black'
          }}>
              <Tooltip {...args} />
              <Line dataKey="Triggers" />
              <RechartsHookInspector />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(Ie=(Le=D.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var Be,De,He;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [, setRandomUnusedState] = useState(true);
    return <div>
        <div style={{
        height: 2000,
        width: 300
      }}>
          <p>There is a chart here; scroll down</p>
        </div>
        <div style={{
        height: 250,
        width: 300
      }}>
          <button type="button" onClick={() => setRandomUnusedState(v => !v)}>
            set random unused state
          </button>
          <ResponsiveContainer>
            <BarChart data={d1} style={{
            border: '1px solid black'
          }}>
              <Bar dataKey="Triggers" />
              <Tooltip {...args} />
              <RechartsHookInspector />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    shared: false
  }
}`,...(He=(De=H.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Oe,Fe,je;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr'
    }}>
        <div style={{
        width: '200px'
      }} />
        <div style={{
        position: 'relative'
      }}>
          <BarChart width={730} height={250} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip {...args} />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            <RechartsHookInspector />
          </BarChart>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    cursor: false
  }
}`,...(je=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var We,Ze,Pe;F.parameters={...F.parameters,docs:{...(We=F.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" />
          <Tooltip {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    offset: -50,
    wrapperStyle: {
      width: 100
    }
  }
}`,...(Pe=(Ze=F.parameters)==null?void 0:Ze.docs)==null?void 0:Pe.source}}};const Ca=["ActiveTooltip","SettingTooltipIndex","LockedByClick","CssScaledParent","SeparateDataSetsForChart","TriggerTooltipByClick","CustomContentExample","LargeDataArray","IncludeHidden","SharedTooltipInBarChart","SharedTooltipInRadialBarChart","TallTooltipInNarrowChart","TooltipWithPortal","RechartsAlphaTooltipBug5516Repro","RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip","RechartsTooltipBug5542Repro","TooltipWithNegativeOffset"];export{C as ActiveTooltip,w as CssScaledParent,x as CustomContentExample,k as IncludeHidden,K as LargeDataArray,b as LockedByClick,D as RechartsAlphaTooltipBug5516Repro,H as RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip,O as RechartsTooltipBug5542Repro,S as SeparateDataSetsForChart,A as SettingTooltipIndex,L as SharedTooltipInBarChart,I as SharedTooltipInRadialBarChart,E as TallTooltipInNarrowChart,F as TooltipWithNegativeOffset,B as TooltipWithPortal,R as TriggerTooltipByClick,Ca as __namedExportsOrder,Ta as default};
