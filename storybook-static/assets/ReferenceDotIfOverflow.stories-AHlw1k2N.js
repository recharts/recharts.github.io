import{a as e}from"./iframe-CNkb7Pxq.js";import{R as m}from"./zIndexSlice-wl2-d2L7.js";import{C as p}from"./ComposedChart-C_D-eBru.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Ck43GCkE.js";import{X as f}from"./XAxis-Cy627mpO.js";import{Y as l}from"./YAxis-Bv4i31q_.js";import{R as d}from"./ReferenceDot-Bzl41z6b.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9QF5i1l.js";import"./index-hgSNbj3_.js";import"./index-B0O4glZn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LXGJzsB2.js";import"./isWellBehavedNumber-cZPS57La.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CE0LDB2v.js";import"./axisSelectors-D4hfpt9F.js";import"./d3-scale-hNSavMKY.js";import"./index-nHtRpei8.js";import"./index-BkiX-XNJ.js";import"./renderedTicksSlice-DjfT86KI.js";import"./index-D8V4aljY.js";import"./CartesianChart-Dvu2owgZ.js";import"./chartDataContext-eHLxlpVB.js";import"./CategoricalChart-D2oZJ6cq.js";import"./CartesianAxis-UL5z8CfQ.js";import"./Layer-BE_omtYE.js";import"./Text-DlOSKY9M.js";import"./DOMUtils-BQzfSO_G.js";import"./useId-C8-4auv_.js";import"./useBackwardsCompatibleTheme-BLuzOGOd.js";import"./Label-CgRMMdp1.js";import"./ZIndexLayer-V6Rl9PTE.js";import"./types-CyS4-dLr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BOo7AQIZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
