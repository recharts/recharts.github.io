import{a as e}from"./iframe-Br90fEj5.js";import{R as m}from"./zIndexSlice-DrwH1jfn.js";import{C as p}from"./ComposedChart-CHD1wSbm.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-x83Z4uNt.js";import{X as f}from"./XAxis-DGeDsLv7.js";import{Y as l}from"./YAxis-DdYWFMJf.js";import{R as d}from"./ReferenceDot-B5QMxRGv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BtlLZFJi.js";import"./index-xBkJObNc.js";import"./index-CFRdOJzL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJrJLZqi.js";import"./isWellBehavedNumber-Cp5K1yLZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CvaMq-_r.js";import"./axisSelectors-DfYTYXSn.js";import"./d3-scale-BG2Gp8e0.js";import"./index-DZZQKCIH.js";import"./index-DCsT-Kwq.js";import"./renderedTicksSlice-BJ1ZC3VH.js";import"./index-Ux_jSD8J.js";import"./CartesianChart-DhQLJKy3.js";import"./chartDataContext-BJ8faAsD.js";import"./CategoricalChart-CWTSAfNd.js";import"./CartesianAxis-De1AZe26.js";import"./Layer-vC2iAjl-.js";import"./Text-CYmtT5C7.js";import"./DOMUtils-DQ9aPFfp.js";import"./useId-BR1QS50g.js";import"./useBackwardsCompatibleTheme-plzmt3ou.js";import"./Label-BXLkvKad.js";import"./ZIndexLayer-1J001_po.js";import"./types-BSZ9BCSJ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CzsTOlQY.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
