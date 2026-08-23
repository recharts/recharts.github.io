import{r as n,a as t}from"./iframe-D_Sr4lJG.js";import{L as p}from"./LineChart-Dc1iJVAL.js";import{R as s}from"./zIndexSlice-D0QIWFDJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B3y5rILo.js";import{X as d}from"./XAxis-CiVYw4TJ.js";import{Y as y}from"./YAxis-CK9b0jPJ.js";import{L as u}from"./Legend-6Kaq28I2.js";import{L as h}from"./Line-CUH4TpmU.js";import{T as g}from"./Tooltip-D6jlTmCI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BTyxoPDx.js";import"./index-CqdW1tHD.js";import"./index-DYQHTRz1.js";import"./index-DzVo4Gjf.js";import"./index-Bx0q42bk.js";import"./throttle-DGVbE07Y.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B4F-1YW3.js";import"./resolveDefaultProps-BKaajls5.js";import"./isWellBehavedNumber-Dv4TPBJ2.js";import"./d3-scale-DfRtt2DS.js";import"./renderedTicksSlice-DGuDkWT4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-JxmHMprN.js";import"./chartDataContext-AwrwRhEc.js";import"./CategoricalChart-DKW5S15G.js";import"./CartesianAxis-B-dcY2MJ.js";import"./Layer-D9Oc_uBt.js";import"./Text-DkNPAJgx.js";import"./DOMUtils-zvxYmMZo.js";import"./useId-Dl8Yfg4u.js";import"./useBackwardsCompatibleTheme-Kv-Z1TIM.js";import"./Label-CeC9waPr.js";import"./ZIndexLayer-Cx1K1yql.js";import"./types-D5gXUhG3.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CxVleFr4.js";import"./symbol-DWmT4zeF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CuHOZIfT.js";import"./uniqBy-SCEa_4Mg.js";import"./iteratee-DHY7e-mB.js";import"./Curve-5OWOJy9s.js";import"./step-BEJyHAO7.js";import"./AnimatedItems-DooKJjtX.js";import"./useAnimationId-KZvr8oE4.js";import"./ActivePoints-BSKOHmnc.js";import"./Dot-yV7k0mxe.js";import"./RegisterGraphicalItemId-DO9NFESU.js";import"./ErrorBarContext-pr_CmNON.js";import"./GraphicalItemClipPath-BKqVnbRS.js";import"./SetGraphicalItem-DDVudLdC.js";import"./getRadiusAndStrokeWidthFromDot-DctFTReD.js";import"./ActiveShapeUtils-CYI-DMZT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-C0Kswt5F.js";import"./Rectangle-CNEw1Bzs.js";import"./util-Dxo8gN5i.js";import"./Sector-CpQIQdBs.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
