import{r as t,e}from"./iframe-CnfUedcN.js";import{P as v,a as b}from"./PieChart-B71HIexQ.js";import{C as P}from"./tooltipContext-B3rjCElX.js";import{T as k}from"./Tooltip-DNXpKUzG.js";import{L as x}from"./Legend-R6yr_B-U.js";import{R as y}from"./RechartsHookInspector-r5irvpzN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVejQHWD.js";import"./arrayEqualityCheck-rY7iVDz-.js";import"./PolarUtils-DdS5KPsI.js";import"./Layer-D-nKIsW1.js";import"./Curve-Cyx3ROtR.js";import"./types-D8riT1ui.js";import"./Text-Bxj3u51B.js";import"./DOMUtils-BXcCCvqt.js";import"./ReactUtils-BJDXxPy8.js";import"./Label-YyARJRE4.js";import"./ZIndexLayer-DbY_9wcH.js";import"./zIndexSlice-Dvx1lbqL.js";import"./RechartsWrapper-UZgszUQZ.js";import"./hooks-dlNhbOk4.js";import"./axisSelectors-vytjTI39.js";import"./ActiveShapeUtils-BJYqXFPt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD8FGW0K.js";import"./useAnimationId-34yVtl_d.js";import"./Trapezoid-BFp34q_q.js";import"./Sector-CKxLHTaG.js";import"./Symbols-cggM9Iun.js";import"./RegisterGraphicalItemId-B0F4aXR1.js";import"./SetGraphicalItem-CDc4e0JF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-DNqWuBVq.js";import"./PolarChart-CjnTC3aR.js";import"./chartDataContext-DVPFzTpf.js";import"./CategoricalChart-Bvh-Z6kO.js";import"./useElementOffset-B72OBasZ.js";import"./iteratee-Cd2H1Txl.js";import"./Cross-Y6lhzYYK.js";import"./index-BUn4aue4.js";import"./ChartSizeDimensions-BN5VWsPC.js";import"./OffsetShower-Bj6jxFEA.js";import"./PlotAreaShower-fzrOqZm1.js";const D=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],c=["#0088FE","#00C49F","#FFBB28","#FF8042"],L=({active:m,payload:a})=>m&&a&&a.length>0?e.createElement("div",{className:"my-custom-tooltip",style:{border:"solid 1px black",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#111",backgroundColor:"#eee",padding:"5px",borderRadius:"10px"}},a.map(o=>e.createElement("p",{key:o.name},`${o.name} : ${o.value}`)),e.createElement("div",{className:"tooltip-arrow"})):null,Ce={component:v},i={render:m=>{const[a,o]=t.useState(void 0),[f,r]=t.useState(!1),[l,h]=t.useState(D),C=t.useCallback((s,n)=>{o({x:n.clientX-185,y:n.offsetY})},[o]),M=t.useMemo(()=>l.map((s,n)=>e.createElement(P,{key:`cell-${s.name}`,fill:c[n%c.length]})),[l]),g=t.useCallback(()=>{r(!0)},[r]),E=t.useCallback(()=>{r(!1)},[r]);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{h(s=>s.map(n=>({...n,value:Math.round(Math.random()*1e3)})))}},"Change Data"),e.createElement(b,{width:400,height:400,data:l,onMouseMove:C},e.createElement(v,{...m,dataKey:"value",onMouseEnter:g,onMouseLeave:E},M),e.createElement(k,{content:L,position:a,active:f}),e.createElement(x,null),e.createElement(y,null)))},args:{cx:200,cy:200,fill:"#8884d8",outerRadius:80,labelLine:!1}};var p,u,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [ttPos, setTtPos] = useState<Coordinate | undefined>(undefined);
    const [active, setActive] = useState(false);
    const [randomData, setRandomData] = useState(data);
    const onMouseMove = useCallback((_: unknown, event: MouseEvent) => {
      // follow the mouse and adjust for some offset
      setTtPos({
        x: event.clientX - 185,
        y: event.offsetY
      });
    }, [setTtPos]);
    const cells = useMemo(() => randomData.map((value: DataPoint, index: number) => <Cell key={\`cell-\${value.name}\`} fill={COLORS[index % COLORS.length]} />), [randomData]);
    const onMouseEnter = useCallback(() => {
      setActive(true);
    }, [setActive]);
    const onMouseLeave = useCallback(() => {
      setActive(false);
    }, [setActive]);
    return <>
        <button type="button" onClick={() => {
        setRandomData(old => old.map(d => ({
          ...d,
          value: Math.round(Math.random() * 1000)
        })));
      }}>
          Change Data
        </button>
        <PieChart width={400} height={400} data={randomData}
      // @ts-expect-error recharts needs more specific type for the event
      onMouseMove={onMouseMove}>
          <Pie {...args} dataKey="value" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {cells}
          </Pie>
          <Tooltip content={CustomContent} position={ttPos} active={active} />
          <Legend />
          <RechartsHookInspector />
        </PieChart>
      </>;
  },
  args: {
    cx: 200,
    cy: 200,
    fill: '#8884d8',
    outerRadius: 80,
    labelLine: false
  }
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Me=["PieWithTooltip"];export{i as PieWithTooltip,Me as __namedExportsOrder,Ce as default};
