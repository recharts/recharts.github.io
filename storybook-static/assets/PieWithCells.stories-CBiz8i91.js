import{e}from"./iframe-B_ZhM03Y.js";import{P as c,a as v}from"./PieChart-CLcrlA1u.js";import{R as f}from"./arrayEqualityCheck-CloHfm1b.js";import{S as h}from"./Sector-zu_K_Cyg.js";import{C as g}from"./tooltipContext-DORR-wbc.js";import{L as C}from"./Legend-DZt9zyY3.js";import{T as k}from"./Tooltip-DYgfdLdw.js";import{R as y}from"./RechartsHookInspector-CedEGYW7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C2hO3de9.js";import"./Layer-BOxBWqHH.js";import"./Curve-CacS2CA9.js";import"./types-CPNOLsga.js";import"./Text-DQMzR-Rn.js";import"./DOMUtils-DIxanI67.js";import"./ReactUtils-CV9gD_3H.js";import"./Label-G2FvxRoa.js";import"./PolarUtils-CgPgv3CO.js";import"./ZIndexLayer-DQM-WqDQ.js";import"./zIndexSlice-DOM2ZPVV.js";import"./RechartsWrapper-u6yQp6qc.js";import"./hooks-C0kAm8Eo.js";import"./axisSelectors-CpGC88wy.js";import"./ActiveShapeUtils-C6bCBIkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXZfm4Mc.js";import"./useAnimationId-GdkLb2Sd.js";import"./Trapezoid-Bxl0rgJp.js";import"./Symbols-B_O8HrI4.js";import"./RegisterGraphicalItemId-DXkXPQtf.js";import"./SetGraphicalItem-DKzya-iG.js";import"./polarSelectors-GDE9oigm.js";import"./PolarChart-C3frwXTT.js";import"./chartDataContext-BdXMgBWg.js";import"./CategoricalChart-B5rfhQvt.js";import"./useElementOffset-ArqjKzWR.js";import"./iteratee-Cb2JYpEF.js";import"./Cross-DBCc1P9s.js";import"./index-C4JY2suC.js";import"./ChartSizeDimensions-Bu3QszIW.js";import"./OffsetShower-C0fU06Jz.js";import"./PlotAreaShower-Mptvcbb5.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
