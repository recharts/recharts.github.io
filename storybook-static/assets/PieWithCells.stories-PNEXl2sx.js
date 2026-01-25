import{e}from"./iframe-CKoXL-7H.js";import{P as c,a as v}from"./PieChart-CvD7GwYH.js";import{R as f}from"./arrayEqualityCheck-GexdJw_D.js";import{S as h}from"./Sector-D9S-bODI.js";import{C as g}from"./tooltipContext-COHTcDE8.js";import{L as C}from"./Legend-lNiWfytJ.js";import{T as k}from"./Tooltip-xGWrVpZA.js";import{R as y}from"./RechartsHookInspector-CMD5YE2l.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BaEbAQrQ.js";import"./Layer-CVCSBl5u.js";import"./Curve-CYqbtLFF.js";import"./types-CIdldEzr.js";import"./Text-BUTkcAxm.js";import"./DOMUtils-BXsvg6Zu.js";import"./ReactUtils-DZNkeyHe.js";import"./Label-Cl7hxCC5.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-0nKnHyxR.js";import"./zIndexSlice-muSoLd76.js";import"./RechartsWrapper-CSLBjixG.js";import"./hooks-Wghpb3Lr.js";import"./axisSelectors-DPsIzSXr.js";import"./ActiveShapeUtils-CJx1zFrR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLY94iSC.js";import"./useAnimationId-2NBy4alx.js";import"./Trapezoid-NNoDFDG-.js";import"./Symbols-D2digf2k.js";import"./RegisterGraphicalItemId-Dd6TmGbZ.js";import"./SetGraphicalItem-B8zEjMN_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-BlqS0ySg.js";import"./PolarChart-DMKtEywm.js";import"./chartDataContext-Bkp8uQCT.js";import"./CategoricalChart-Nf_fZ3uc.js";import"./useElementOffset-B4fkln4G.js";import"./iteratee-DT9v8GkJ.js";import"./Cross-BFexLb6d.js";import"./index-DasXKjzD.js";import"./ChartSizeDimensions-CbnBpjpJ.js";import"./OffsetShower-BeXAkU7y.js";import"./PlotAreaShower-otv1tPFG.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
