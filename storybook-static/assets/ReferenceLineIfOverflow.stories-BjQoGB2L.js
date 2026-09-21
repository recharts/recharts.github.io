import{a as e}from"./iframe-Br90fEj5.js";import{R as a}from"./zIndexSlice-DrwH1jfn.js";import{C as p}from"./ComposedChart-CHD1wSbm.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-x83Z4uNt.js";import{X as f}from"./XAxis-DGeDsLv7.js";import{Y as l}from"./YAxis-DdYWFMJf.js";import{L as d}from"./Line-J4GxzHaN.js";import{R as h}from"./ReferenceLine-my6rHc3j.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BtlLZFJi.js";import"./index-xBkJObNc.js";import"./index-CFRdOJzL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJrJLZqi.js";import"./isWellBehavedNumber-Cp5K1yLZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CvaMq-_r.js";import"./axisSelectors-DfYTYXSn.js";import"./d3-scale-BG2Gp8e0.js";import"./index-DZZQKCIH.js";import"./index-DCsT-Kwq.js";import"./renderedTicksSlice-BJ1ZC3VH.js";import"./index-Ux_jSD8J.js";import"./CartesianChart-DhQLJKy3.js";import"./chartDataContext-BJ8faAsD.js";import"./CategoricalChart-CWTSAfNd.js";import"./CartesianAxis-De1AZe26.js";import"./Layer-vC2iAjl-.js";import"./Text-CYmtT5C7.js";import"./DOMUtils-DQ9aPFfp.js";import"./useId-BR1QS50g.js";import"./useBackwardsCompatibleTheme-plzmt3ou.js";import"./Label-BXLkvKad.js";import"./ZIndexLayer-1J001_po.js";import"./types-BSZ9BCSJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Curve-ce5L2urE.js";import"./step-a76R8hck.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDiDUfRj.js";import"./useAnimationId-CxK571sH.js";import"./ActivePoints-CjeI93YB.js";import"./Dot-CzsTOlQY.js";import"./RegisterGraphicalItemId-nSf1Px3R.js";import"./ErrorBarContext-DkLC3v4H.js";import"./GraphicalItemClipPath-BqifZnDC.js";import"./SetGraphicalItem-jDsg55aJ.js";import"./getRadiusAndStrokeWidthFromDot-Bq3tql2n.js";import"./ActiveShapeUtils-DUSmPc-T.js";import"./useGraphicalItemIdentity-BFkPxhIu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
