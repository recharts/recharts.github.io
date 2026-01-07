import{e}from"./iframe-DaCZzlB4.js";import{a as $,P as N}from"./PieChart-B3a2h-d3.js";import{R as w}from"./arrayEqualityCheck-xIdjdXyO.js";import{T as G}from"./Tooltip-dVF4BIVJ.js";import{R as K}from"./RechartsHookInspector-C1qZr8kA.js";import{S as m}from"./Sector-D1uAN8IN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./Layer-BKXPn5xD.js";import"./Curve-BcpAE4Ao.js";import"./types-CyhQh7_Z.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./tooltipContext-CtRObmAP.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./ReactUtils-yqeNEccg.js";import"./Label-D2rMkPMU.js";import"./PolarUtils-CS41bXSK.js";import"./ZIndexLayer-Deqw7_sa.js";import"./zIndexSlice-B7osVKE5.js";import"./RechartsWrapper-CytJWPJg.js";import"./ActiveShapeUtils-DeHR3FEj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-z0Tijc68.js";import"./useAnimationId-DMDiR4YX.js";import"./Trapezoid-OHYhJgzZ.js";import"./Symbols-CqwnDYaa.js";import"./RegisterGraphicalItemId-BC9wjUC-.js";import"./SetGraphicalItem-DKRKp8eM.js";import"./polarSelectors-6lJ8-H_B.js";import"./PolarChart-VL5GfEHT.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./useElementOffset-CL0kWG2p.js";import"./iteratee-m2fxanZQ.js";import"./Cross-CAbEIlW6.js";import"./index-DqUfe0wd.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./OffsetShower-CyCVWv2W.js";import"./PlotAreaShower-DACZviw9.js";const Ee={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=l=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=l,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return l.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(m,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(m,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(m,{...l})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    const renderActiveShape = (props: PieSectorDataItem & {
      isActive: boolean;
    }) => {
      const RADIAN = Math.PI / 180;
      const {
        cx = 0,
        cy = 0,
        midAngle = 0,
        innerRadius,
        outerRadius = 0,
        startAngle,
        endAngle,
        fill,
        payload,
        percent = 0,
        value
      } = props;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + (outerRadius + 10) * cos;
      const sy = cy + (outerRadius + 10) * sin;
      const mx = cx + (outerRadius + 30) * cos;
      const my = cy + (outerRadius + 30) * sin;
      const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      const ey = my;
      const textAnchor = cos >= 0 ? 'start' : 'end';
      return props.isActive ? <g>
          <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
            {payload.name}
          </text>
          <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
          <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
          <path d={\`M\${sx},\${sy}L\${mx},\${my}L\${ex},\${ey}\`} stroke={fill} fill="none" />
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{\`PV \${value}\`}</text>
          <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
            {\`(Rate \${(percent * 100).toFixed(2)}%)\`}
          </text>
        </g> : <Sector {...props} />;
    };
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="value" {...args} shape={renderActiveShape} />
          <Tooltip defaultIndex={0} content={NoContent} />
          <RechartsHookInspector />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: '50%',
    cy: '50%',
    data,
    dataKey: 'value',
    fill: '#8884d8',
    innerRadius: 60,
    outerRadius: 80
  }
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Pe=["CustomActiveShapePieChart"];export{c as CustomActiveShapePieChart,Pe as __namedExportsOrder,Ee as default};
