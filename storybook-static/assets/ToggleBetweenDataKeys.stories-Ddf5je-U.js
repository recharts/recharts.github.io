import{r as n,R as t}from"./iframe-CYE_KjLp.js";import{L as p}from"./LineChart-DKUl6LVZ.js";import{R as s}from"./zIndexSlice-BJ5AXs-O.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B1GeT-Va.js";import{X as d}from"./XAxis-CSEJquda.js";import{Y as y}from"./YAxis-DWbbwN0w.js";import{L as u}from"./Legend-CqwLssCU.js";import{L as h}from"./Line-fP0RojnX.js";import{T as g}from"./Tooltip-CA-9nIiI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8_njvAZI.js";import"./index-CwiYvwQ-.js";import"./index-CN526hDZ.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./throttle-CMwKm87I.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./axisSelectors-Cz15TeqU.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./d3-scale-BYal7h8i.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CategoricalChart-DxSK9VeV.js";import"./CartesianAxis-9Uyc6PiW.js";import"./Layer-BAAO02Y6.js";import"./Text-D9p9m1qq.js";import"./DOMUtils-DNa7oSWn.js";import"./Label-DungM5aU.js";import"./ZIndexLayer-Cs3N_7G3.js";import"./types-Bh5it62Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-DAWow7kL.js";import"./symbol-FiS9WCjp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bd-GUmxf.js";import"./uniqBy-Dvg3CN9x.js";import"./iteratee-olANGOHV.js";import"./Curve-DOUq4MA6.js";import"./step-CrVHI12K.js";import"./AnimatedItems-DDp5Wq7I.js";import"./useAnimationId-D2RJw3gt.js";import"./ActivePoints-B2OdHoBR.js";import"./Dot-CNeFMePA.js";import"./RegisterGraphicalItemId-BVUvorB4.js";import"./ErrorBarContext-C6lKsYq3.js";import"./GraphicalItemClipPath-DSlcdUco.js";import"./SetGraphicalItem-DsAOjH_V.js";import"./getRadiusAndStrokeWidthFromDot-eF6yQmlC.js";import"./ActiveShapeUtils-8xIbBFmr.js";import"./Cross-9R2MLVqE.js";import"./Rectangle-B6bKXxl8.js";import"./util-Dxo8gN5i.js";import"./Sector-Dtn8lnsy.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
