import{e}from"./iframe-DIwakdDt.js";import{a as c,P as v}from"./PieChart-B2qkZ_8x.js";import{R as f}from"./arrayEqualityCheck-lRYvQggb.js";import{S as h}from"./Sector-BBGpgSZE.js";import{C as g}from"./tooltipContext-DqYXgPmr.js";import{L as C}from"./Legend-CjGNw3nJ.js";import{T as k}from"./Tooltip-dhHmrtEI.js";import{R as y}from"./RechartsHookInspector-CY1ODLVc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DW7u54OO.js";import"./Layer-CFi2OPVU.js";import"./Curve-9VNPy8uR.js";import"./types-B72H97bN.js";import"./Text-D6OkCyx_.js";import"./DOMUtils-B36TL8VT.js";import"./ReactUtils-D3B4C902.js";import"./Label-CWjd44lV.js";import"./PolarUtils-B3Fap3OI.js";import"./ZIndexLayer-Cgd7Iecl.js";import"./zIndexSlice-BsupxljC.js";import"./RechartsWrapper-B94VsC0l.js";import"./hooks-DWXVssZN.js";import"./axisSelectors-B4kb62nw.js";import"./ActiveShapeUtils-Dm9ayMJH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0jTOdyj.js";import"./useAnimationId-OdOX1ryX.js";import"./Trapezoid-wlixMr2J.js";import"./Symbols-CAX0rTwl.js";import"./RegisterGraphicalItemId-mhUZ9dId.js";import"./SetGraphicalItem-Cri-Qe4J.js";import"./polarSelectors-v_S8LPBj.js";import"./PolarChart-sYwwGhzh.js";import"./chartDataContext-DWbSa9NP.js";import"./CategoricalChart-DSVP0XQf.js";import"./useElementOffset-BkezN8gQ.js";import"./iteratee-CHcqC_Hc.js";import"./Cross-B44w4EXc.js";import"./index-DvyeDb-a.js";import"./ChartSizeDimensions-Dw8_76VR.js";import"./OffsetShower-CvNNPebB.js";import"./PlotAreaShower-nYxw-fUs.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
