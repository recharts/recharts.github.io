import{e}from"./iframe-BRu_qZg1.js";import{P as $,a as N}from"./PieChart-50NEt3b1.js";import{R as w}from"./arrayEqualityCheck-BgwbYKtC.js";import{T as G}from"./Tooltip-CmHJro1j.js";import{R as K}from"./RechartsHookInspector-CJy-wMRv.js";import{S as l}from"./Sector-7rMGIqOV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./immer-CiIZXnz-.js";import"./Layer-BK1KTr5e.js";import"./resolveDefaultProps-ClDGSYA8.js";import"./Curve-CSGMMXpz.js";import"./types-CV4LMBiy.js";import"./step-XF9-athh.js";import"./Text-CZ6mhO2l.js";import"./DOMUtils-Np4d91u5.js";import"./tooltipContext-CX0tBQ1W.js";import"./hooks-cMPGG-ti.js";import"./axisSelectors-WgiG_2zA.js";import"./d3-scale-DgD4kZyM.js";import"./ReactUtils-gnwCD4Om.js";import"./Label-PVHJRfQa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C8D4smXi.js";import"./zIndexSlice-CjcwtRul.js";import"./index-DYVbWT0W.js";import"./ActiveShapeUtils-jyCby69N.js";import"./isPlainObject-Dl8lI7a1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99z7Ziu.js";import"./useAnimationId-D8a-5J-X.js";import"./Trapezoid-CJsPOYXY.js";import"./Symbols-DM4rdUCn.js";import"./symbol-D-gvh6cA.js";import"./RegisterGraphicalItemId-KDJ0wyU8.js";import"./SetGraphicalItem-DZJju-u_.js";import"./RechartsWrapper-B9gb15RL.js";import"./renderedTicksSlice-XQiDw47v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-RYR9WPG0.js";import"./PolarChart-BNdQVQ7F.js";import"./chartDataContext-BYCMtEPQ.js";import"./CategoricalChart-CRbty2Pg.js";import"./useElementOffset-DDNpUSNQ.js";import"./uniqBy-L6IG3ASA.js";import"./iteratee-CIdgG0p2.js";import"./Cross-DvVkkamE.js";import"./index-CUWwfEzD.js";import"./ChartSizeDimensions-DNlI3sC4.js";import"./OffsetShower-Cm8zLz0R.js";import"./PlotAreaShower-Bj1zpgLw.js";const Ke={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=m=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=m,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return m.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(l,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(l,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(l,{...m})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Le=["CustomActiveShapePieChart"];export{c as CustomActiveShapePieChart,Le as __namedExportsOrder,Ke as default};
