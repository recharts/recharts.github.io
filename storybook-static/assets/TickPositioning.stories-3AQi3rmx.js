import{a as t}from"./iframe-Br90fEj5.js";import{R as m}from"./zIndexSlice-DrwH1jfn.js";import{L as s}from"./LineChart-B6VzaaLK.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-J4GxzHaN.js";import{X as l}from"./XAxis-DGeDsLv7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BtlLZFJi.js";import"./index-xBkJObNc.js";import"./index-CFRdOJzL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJrJLZqi.js";import"./isWellBehavedNumber-Cp5K1yLZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CvaMq-_r.js";import"./axisSelectors-DfYTYXSn.js";import"./d3-scale-BG2Gp8e0.js";import"./index-DZZQKCIH.js";import"./index-DCsT-Kwq.js";import"./renderedTicksSlice-BJ1ZC3VH.js";import"./index-Ux_jSD8J.js";import"./CartesianChart-DhQLJKy3.js";import"./chartDataContext-BJ8faAsD.js";import"./CategoricalChart-CWTSAfNd.js";import"./Layer-vC2iAjl-.js";import"./Curve-ce5L2urE.js";import"./types-BSZ9BCSJ.js";import"./step-a76R8hck.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDiDUfRj.js";import"./Label-BXLkvKad.js";import"./Text-CYmtT5C7.js";import"./DOMUtils-DQ9aPFfp.js";import"./useId-BR1QS50g.js";import"./useBackwardsCompatibleTheme-plzmt3ou.js";import"./ZIndexLayer-1J001_po.js";import"./useAnimationId-CxK571sH.js";import"./ActivePoints-CjeI93YB.js";import"./Dot-CzsTOlQY.js";import"./RegisterGraphicalItemId-nSf1Px3R.js";import"./ErrorBarContext-DkLC3v4H.js";import"./GraphicalItemClipPath-BqifZnDC.js";import"./SetGraphicalItem-jDsg55aJ.js";import"./getRadiusAndStrokeWidthFromDot-Bq3tql2n.js";import"./ActiveShapeUtils-DUSmPc-T.js";import"./useGraphicalItemIdentity-BFkPxhIu.js";import"./CartesianAxis-De1AZe26.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
