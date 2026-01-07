import{e}from"./iframe-DaCZzlB4.js";import{a as c,P as v}from"./PieChart-B3a2h-d3.js";import{R as f}from"./arrayEqualityCheck-xIdjdXyO.js";import{S as h}from"./Sector-D1uAN8IN.js";import{C as g}from"./tooltipContext-CtRObmAP.js";import{L as C}from"./Legend-LNiW__wh.js";import{T as k}from"./Tooltip-dVF4BIVJ.js";import{R as y}from"./RechartsHookInspector-C1qZr8kA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./Layer-BKXPn5xD.js";import"./Curve-BcpAE4Ao.js";import"./types-CyhQh7_Z.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./ReactUtils-yqeNEccg.js";import"./Label-D2rMkPMU.js";import"./PolarUtils-CS41bXSK.js";import"./ZIndexLayer-Deqw7_sa.js";import"./zIndexSlice-B7osVKE5.js";import"./RechartsWrapper-CytJWPJg.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./ActiveShapeUtils-DeHR3FEj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-z0Tijc68.js";import"./useAnimationId-DMDiR4YX.js";import"./Trapezoid-OHYhJgzZ.js";import"./Symbols-CqwnDYaa.js";import"./RegisterGraphicalItemId-BC9wjUC-.js";import"./SetGraphicalItem-DKRKp8eM.js";import"./polarSelectors-6lJ8-H_B.js";import"./PolarChart-VL5GfEHT.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./useElementOffset-CL0kWG2p.js";import"./iteratee-m2fxanZQ.js";import"./Cross-CAbEIlW6.js";import"./index-DqUfe0wd.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./OffsetShower-CyCVWv2W.js";import"./PlotAreaShower-DACZviw9.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [activeIndices, setActiveIndices] = React.useState<number[]>([]);
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="percent" {...args} onClick={(_, index) => {
          if (index != null) {
            setActiveIndices(prev => {
              if (prev.includes(index)) {
                return prev.filter(i => i !== index);
              }
              return [...prev, index];
            });
          }
        }} shape={(props, index) => {
          const isActive = activeIndices.includes(index);
          return <Sector {...props} fill={isActive ? 'yellow' : props.fill} stroke="#111" />;
        }}>
            {data.map(d => <Cell key={\`d-\${d.value}\`} fill={d.color} stroke="none" />)}
          </Pie>
          <Legend />
          <Tooltip />
          <RechartsHookInspector />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: '50%',
    cy: '50%',
    data,
    dataKey: 'percent',
    nameKey: 'value',
    fill: '#8884d8',
    label: true
  }
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const se=["PieWithCells"];export{i as PieWithCells,se as __namedExportsOrder,ce as default};
