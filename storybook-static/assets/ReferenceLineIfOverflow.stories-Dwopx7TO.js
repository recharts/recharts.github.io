import{a as e}from"./iframe-BPQD5v1C.js";import{R as a}from"./zIndexSlice-DfAJCemw.js";import{C as p}from"./ComposedChart-X06hY2YO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BjsXEzWG.js";import{X as f}from"./XAxis-Tde5CSPK.js";import{Y as l}from"./YAxis-DB1Rqz7t.js";import{L as d}from"./Line-COu1GzzV.js";import{R as h}from"./ReferenceLine-r2yi2tcP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DC1LNmjU.js";import"./index-Tuf2nq6s.js";import"./index-CXovuven.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-upxpdF4p.js";import"./isWellBehavedNumber-C9SB8Pzn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cu7qj_jR.js";import"./axisSelectors-CGRWr5-t.js";import"./d3-scale-BcAkS-dE.js";import"./index-yHndqaau.js";import"./index-BNGNsbfJ.js";import"./renderedTicksSlice-Bnytbutp.js";import"./index-NpnztBAt.js";import"./CartesianChart-KMtmBeRo.js";import"./chartDataContext-BEETkhZS.js";import"./CategoricalChart-0gTJFCdb.js";import"./CartesianAxis-kXg3v2M0.js";import"./Layer-B7QJBZyG.js";import"./Text-BGkNki-C.js";import"./pageBackground-D3c52TtU.js";import"./useId-BM-r51MU.js";import"./useBackwardsCompatibleTheme-CpAd0K8h.js";import"./Label-ZHQGm3zg.js";import"./ZIndexLayer-CyIARuTz.js";import"./dataEntryStyles-ClqDXIzp.js";import"./types-BZME1xI7.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-1sBQTzGW.js";import"./step-DY16rTOH.js";import"./path-DyVhHtw_.js";import"./activeStyles-BpdD72zS.js";import"./useAnimationId-D3CbYaCo.js";import"./ActivePoints-DRTN0ggX.js";import"./Dot-BcjnvPbe.js";import"./RegisterGraphicalItemId-C_N6zcJ6.js";import"./ErrorBarContext-Bd0khpbf.js";import"./SetGraphicalItem-DTtwRFlr.js";import"./getRadiusAndStrokeWidthFromDot-DE7pHRh0.js";import"./ActiveShapeUtils-CD8s1oUL.js";import"./useEffectiveDataKey-fbFyI37i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
