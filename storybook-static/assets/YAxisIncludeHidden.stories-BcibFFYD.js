import{r as f,R as e}from"./iframe-C-fup5Id.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-B46hC9dU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-NTR0fs-C.js";import{C as k}from"./ComposedChart-Jz5lk914.js";import{X as K}from"./XAxis-DODICsjR.js";import{L as v}from"./Legend-DuXEzb1r.js";import{B as s}from"./Bar-DTR1hdUL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-p2wvzD9I.js";import"./CartesianAxis-DNfda7To.js";import"./Layer-BxCAIV-n.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./Label-Dx6_KP12.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DdUd9A7h.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./types-BIM6WHXQ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./immer-8TCI2H73.js";import"./RechartsWrapper-B95PZmfT.js";import"./index-DNWmVjf2.js";import"./index-BlVQDt2E.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CategoricalChart-2uAqMqKC.js";import"./Symbols-Dk8hcEz4.js";import"./symbol-DNpitnQR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-e7BpmwTH.js";import"./uniqBy-DmJ3MZLP.js";import"./iteratee-C8R--wWy.js";import"./tooltipContext-DBZ8XCai.js";import"./AnimatedItems-BHa_3vog.js";import"./useAnimationId-CHZsXmiy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-MYtIjh59.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmOgDWMs.js";import"./RegisterGraphicalItemId-mXg0uLQv.js";import"./ErrorBarContext-P4JGsE5W.js";import"./GraphicalItemClipPath-CURGfNfz.js";import"./SetGraphicalItem-KcsUgiZW.js";import"./getZIndexFromUnknown-Duif59Mg.js";import"./graphicalItemSelectors-DMr6zMpw.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
