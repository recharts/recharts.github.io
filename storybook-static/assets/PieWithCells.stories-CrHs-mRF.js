import{e}from"./iframe-BlCBiEbC.js";import{P as c,a as v}from"./PieChart-Y2LaVDEs.js";import{R as f}from"./arrayEqualityCheck-X93wQEqh.js";import{S as h}from"./Sector-DXYt-lKs.js";import{C as g}from"./tooltipContext-CdjW7zH-.js";import{L as C}from"./Legend-Cy5DFzGZ.js";import{T as k}from"./Tooltip-DRnhlVYL.js";import{R as y}from"./RechartsHookInspector-CHVk1qod.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bzr_YW23.js";import"./Layer-BoA-MhSr.js";import"./Curve-CHEFd7Ta.js";import"./types-DYooLvZu.js";import"./Text-RTBsPD27.js";import"./DOMUtils-Iuyw-z7a.js";import"./ReactUtils-CVZw63sI.js";import"./Label-yaREi1fu.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-jahJ6frp.js";import"./zIndexSlice-RKZlw9rR.js";import"./RechartsWrapper-DkDok3zQ.js";import"./hooks-BT650JQT.js";import"./axisSelectors-0_eHLV3I.js";import"./ActiveShapeUtils-DglLsZWb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8Cog5YP.js";import"./useAnimationId-DmUtWl3R.js";import"./Trapezoid-DBjSOHQz.js";import"./Symbols-KFHdQ1ay.js";import"./RegisterGraphicalItemId-CF1HBkTr.js";import"./SetGraphicalItem-SfTyueuB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-CHvjQBHr.js";import"./PolarChart-CJzYtiZQ.js";import"./chartDataContext-B-D1_Xyu.js";import"./CategoricalChart-CX-nrdd_.js";import"./useElementOffset-COtcTsvw.js";import"./iteratee-DeqlCdre.js";import"./Cross-MCEDr6go.js";import"./index-D4FkNtIV.js";import"./ChartSizeDimensions-1GSyPMX1.js";import"./OffsetShower-BzuY3Qm6.js";import"./PlotAreaShower-D5VmZD6S.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const me=["PieWithCells"];export{i as PieWithCells,me as __namedExportsOrder,se as default};
