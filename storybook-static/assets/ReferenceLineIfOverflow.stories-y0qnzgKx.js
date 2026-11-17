import{R as e}from"./iframe-Czzk5Bx-.js";import{R as a}from"./zIndexSlice-CcZCAOP2.js";import{C as p}from"./ComposedChart-BWfmB2id.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DwzIWQpU.js";import{X as f}from"./XAxis-DWUu3518.js";import{Y as l}from"./YAxis-DskmDTW_.js";import{L as d}from"./Line-jtIGshLA.js";import{R as h}from"./ReferenceLine-DWo4TfRl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Csc694qB.js";import"./throttle-Dlw7_zhK.js";import"./index-CtnBEbb_.js";import"./index-CElqLkJS.js";import"./RechartsWrapper-C5Ex_ZCH.js";import"./axisSelectors-BthV4RsX.js";import"./polarAxisSelectors-Bgc5VpYB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CS0QJ-EZ.js";import"./index-CAks9lDH.js";import"./index-yeT-45bY.js";import"./renderedTicksSlice-BwJ2p4Mi.js";import"./index-CsxmvEat.js";import"./fillDefinitions-DaR2TDo1.js";import"./CartesianChart-D3FUkn-t.js";import"./chartDataContext--mSdRmgw.js";import"./CategoricalChart-a1Xr9UIu.js";import"./CartesianAxis-5U6hsfI6.js";import"./Layer-CarPpKFV.js";import"./Text-CSorP4yu.js";import"./ZIndexLayer-DISaA8MD.js";import"./Label-CoDIIawi.js";import"./types-Bykt0Hlw.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-BOcadJ27.js";import"./Curve-DNAnmcp5.js";import"./step-C5vJ1U24.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C8IdewjD.js";import"./ActivePoints-7NJ9DiE-.js";import"./Dot-qyx0vbCn.js";import"./activeStyles-Dd2x1Ur1.js";import"./useAnimationId-BMmeHowj.js";import"./Symbols-DOiO9HXo.js";import"./symbol-DOUGW8Ut.js";import"./ErrorBarContext-BTwK65Em.js";import"./SetGraphicalItem-DZqA_DJ9.js";import"./ActiveShapeUtils-BDX2WB3N.js";import"./useEffectiveDataKey-BCok4F6X.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
