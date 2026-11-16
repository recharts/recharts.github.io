import{R as e}from"./iframe-DQXFH2fN.js";import{R as a}from"./zIndexSlice-Dfa7PPo3.js";import{C as p}from"./ComposedChart-BBGwgebC.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CvQm-C4w.js";import{X as f}from"./XAxis-DeVff73G.js";import{Y as l}from"./YAxis-DxKBEaoV.js";import{L as d}from"./Line-CSVCJdJ6.js";import{R as h}from"./ReferenceLine-pfIrMP3o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-lSPh-jGh.js";import"./throttle-CBXVztye.js";import"./index-LVwk1DdF.js";import"./index-BledrYYe.js";import"./RechartsWrapper-FcCSE1mG.js";import"./axisSelectors-DJbzZfhu.js";import"./polarAxisSelectors-D125t7LL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XeOVwhgh.js";import"./index-CIcJU2zj.js";import"./index-Bra-aG0C.js";import"./renderedTicksSlice-CbHdjAK6.js";import"./index-BsheJTgc.js";import"./fillDefinitions-KRhWslMp.js";import"./CartesianChart-DQGbpwTu.js";import"./chartDataContext-DJ78QJpQ.js";import"./CategoricalChart-t_6GcrEg.js";import"./CartesianAxis-FqFP5ld6.js";import"./Layer-B0dm1oba.js";import"./Text-DcdnatC4.js";import"./ZIndexLayer-D9yot1xi.js";import"./Label-CZ1SHjxx.js";import"./types-CN3-AGJF.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Dawv8-Of.js";import"./step-Bu-hwkdA.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CDXKXbSY.js";import"./ActivePoints-CfjMsAgl.js";import"./Dot-CC2Uce3B.js";import"./activeStyles-DgOGJt0j.js";import"./useAnimationId-BlZ_idpE.js";import"./Symbols-D7I-QI86.js";import"./symbol-8Qaz948q.js";import"./ErrorBarContext-CbK3TAVw.js";import"./SetGraphicalItem-CRYZ3Qzj.js";import"./getRadiusAndStrokeWidthFromDot-CxI0qt08.js";import"./ActiveShapeUtils-CbcAbfiK.js";import"./useEffectiveDataKey-FX7cYr8p.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
