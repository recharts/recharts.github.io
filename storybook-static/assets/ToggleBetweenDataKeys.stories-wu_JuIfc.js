import{r as p,a as t}from"./iframe-Br90fEj5.js";import{L as n}from"./LineChart-B6VzaaLK.js";import{R as s}from"./zIndexSlice-DrwH1jfn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-x83Z4uNt.js";import{X as d}from"./XAxis-DGeDsLv7.js";import{Y as y}from"./YAxis-DdYWFMJf.js";import{L as u}from"./Legend-CmqZY_Dx.js";import{L as h}from"./Line-J4GxzHaN.js";import{T as g}from"./Tooltip-C3K0gvKc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CvaMq-_r.js";import"./resolveDefaultProps-CJrJLZqi.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DfYTYXSn.js";import"./throttle-BtlLZFJi.js";import"./index-xBkJObNc.js";import"./index-CFRdOJzL.js";import"./isWellBehavedNumber-Cp5K1yLZ.js";import"./d3-scale-BG2Gp8e0.js";import"./index-DZZQKCIH.js";import"./index-DCsT-Kwq.js";import"./renderedTicksSlice-BJ1ZC3VH.js";import"./index-Ux_jSD8J.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DhQLJKy3.js";import"./chartDataContext-BJ8faAsD.js";import"./CategoricalChart-CWTSAfNd.js";import"./CartesianAxis-De1AZe26.js";import"./Layer-vC2iAjl-.js";import"./Text-CYmtT5C7.js";import"./DOMUtils-DQ9aPFfp.js";import"./useId-BR1QS50g.js";import"./useBackwardsCompatibleTheme-plzmt3ou.js";import"./Label-BXLkvKad.js";import"./ZIndexLayer-1J001_po.js";import"./types-BSZ9BCSJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-hfwrgc-L.js";import"./symbol-CopPs-zj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DmwgRP6o.js";import"./uniqBy-IvYMjdnd.js";import"./iteratee-CwMz1arw.js";import"./Curve-ce5L2urE.js";import"./step-a76R8hck.js";import"./AnimatedItems-BDiDUfRj.js";import"./useAnimationId-CxK571sH.js";import"./ActivePoints-CjeI93YB.js";import"./Dot-CzsTOlQY.js";import"./RegisterGraphicalItemId-nSf1Px3R.js";import"./ErrorBarContext-DkLC3v4H.js";import"./GraphicalItemClipPath-BqifZnDC.js";import"./SetGraphicalItem-jDsg55aJ.js";import"./getRadiusAndStrokeWidthFromDot-Bq3tql2n.js";import"./ActiveShapeUtils-DUSmPc-T.js";import"./useGraphicalItemIdentity-BFkPxhIu.js";import"./Cross-ctkwK30O.js";import"./Rectangle-BZ-ww0Nu.js";import"./util-Dxo8gN5i.js";import"./Sector-Cl71ey6c.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
