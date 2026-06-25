import{r as f,R as e}from"./iframe-_8NIVtea.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Cq9nELWF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DHi0zTqt.js";import{C as k}from"./ComposedChart-BQ1MbbEq.js";import{X as K}from"./XAxis-CXj9NRSO.js";import{L as v}from"./Legend-ClfQGzY5.js";import{B as s}from"./Bar-QbwUo4NR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BPH4xIrS.js";import"./CartesianAxis-BJg7B04w.js";import"./Layer-CvtIbty1.js";import"./resolveDefaultProps-DWak00ij.js";import"./Text-Dn8CYcWJ.js";import"./DOMUtils-DxzVORfb.js";import"./isWellBehavedNumber-C_LYkTy5.js";import"./Label-Bho1wkfx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D0YIaJsD.js";import"./index-CMd9L2k1.js";import"./index-DP0Hg4Uq.js";import"./types-B89ht9kr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-BSwSfTVH.js";import"./immer-DtWKh-al.js";import"./RechartsWrapper-Btm1Myi_.js";import"./index-C4r4CwZ3.js";import"./index-DXHSNIUu.js";import"./axisSelectors-B0oXaHqO.js";import"./d3-scale-CJIJLRQO.js";import"./CartesianChart-CyMc8rJv.js";import"./chartDataContext-CURMS4bg.js";import"./CategoricalChart-Cq5j6ts0.js";import"./Symbols-DuOYoSda.js";import"./symbol-CNSzdyHw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZoIycEd.js";import"./uniqBy-Ckq71Btn.js";import"./iteratee-BauMAWQN.js";import"./tooltipContext-h71PSfG3.js";import"./AnimatedItems-BQ9vzcvs.js";import"./useAnimationId-D4zdEFfm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DNmx5GJU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCiDKEDP.js";import"./RegisterGraphicalItemId-IKsKal1D.js";import"./ErrorBarContext--tZY8j9K.js";import"./GraphicalItemClipPath-D7_UBVME.js";import"./SetGraphicalItem-rhq5lQpj.js";import"./getZIndexFromUnknown-AoYqtJuj.js";import"./graphicalItemSelectors-jiUl-4hm.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
