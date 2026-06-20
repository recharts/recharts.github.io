import{r as n,R as t}from"./iframe-DXxYhCFt.js";import{L as p}from"./LineChart-Dkym_VxZ.js";import{R as s}from"./zIndexSlice-qI1U9rrE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cc40lTV8.js";import{X as d}from"./XAxis-C9NpqiLb.js";import{Y as y}from"./YAxis-fukBbkBQ.js";import{L as u}from"./Legend-Bx1y-bzw.js";import{L as h}from"./Line-Cp4Gdh_1.js";import{T as g}from"./Tooltip-CQgnAVgk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlzjOLMT.js";import"./index-cTUjJegW.js";import"./index-BxnCQVmB.js";import"./index-CK1-JLS2.js";import"./index-B4aunhTl.js";import"./immer-D7akT6tS.js";import"./get-DDC6WZq8.js";import"./renderedTicksSlice-3Dm4ElKF.js";import"./axisSelectors-CmDHWXKB.js";import"./d3-scale-rcor9ivz.js";import"./resolveDefaultProps-Bho5O1tb.js";import"./isWellBehavedNumber-CZeoqkhJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DvdTpmiF.js";import"./chartDataContext-Bh9U9MSr.js";import"./CategoricalChart-DnXiIflv.js";import"./CartesianAxis-DhUSnw0c.js";import"./Layer-BUsxcvuT.js";import"./Text-BFOIQrpY.js";import"./DOMUtils-Bd7kqUhA.js";import"./Label-C324QdBW.js";import"./ZIndexLayer-DA8tUdaM.js";import"./types-AXOViau4.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./Symbols-p6tzUQrv.js";import"./symbol-BLNVVXJX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DvUrxQBN.js";import"./uniqBy-B4OTk4uG.js";import"./iteratee-B4Viaby6.js";import"./Curve-BoZszlOQ.js";import"./step-CUCP3dE9.js";import"./AnimatedItems-u581L8cQ.js";import"./useAnimationId-B_zUITBn.js";import"./ActivePoints-Br1nV-ho.js";import"./Dot-D-QyW_An.js";import"./RegisterGraphicalItemId-zrXRLiIJ.js";import"./ErrorBarContext-oapAiLxU.js";import"./GraphicalItemClipPath-qvKBcuDL.js";import"./SetGraphicalItem-UU_FN1uP.js";import"./getRadiusAndStrokeWidthFromDot-BS98lfES.js";import"./ActiveShapeUtils-BJbjDOel.js";import"./Cross-BpQQmoe6.js";import"./Rectangle-Cjbse2NQ.js";import"./util-Dxo8gN5i.js";import"./Sector-DaxcHb1i.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
