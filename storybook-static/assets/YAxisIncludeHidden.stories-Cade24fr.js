import{r as f,R as e}from"./iframe-DGZg1BaY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BZtV9zAx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-RSobkBfJ.js";import{C as k}from"./ComposedChart-CYWMV96h.js";import{X as K}from"./XAxis-BkrEDfGE.js";import{L as v}from"./Legend-Bucg_Anc.js";import{B as s}from"./Bar-D63UQKwZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DY0OjSK6.js";import"./CartesianAxis-DDEi9eFQ.js";import"./Layer--_bnQ9Ul.js";import"./resolveDefaultProps-BjAvdkCv.js";import"./Text-BqNTVXko.js";import"./DOMUtils-BzC8w9yF.js";import"./isWellBehavedNumber-0KuhYisV.js";import"./Label-B4XUjnXV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-5g4pRwMA.js";import"./index-Cct5a00b.js";import"./index-clGj1WHq.js";import"./types-CUzx8cK0.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Dewx_RJS.js";import"./immer-BT6VGnPe.js";import"./RechartsWrapper-Bacgswk5.js";import"./index-CkL0GuEG.js";import"./index-BXki0_jB.js";import"./axisSelectors-CdelNDSz.js";import"./d3-scale-CTB_TOgf.js";import"./CartesianChart-BJ5L6c8p.js";import"./chartDataContext-Cq7x5jLr.js";import"./CategoricalChart-BMzuLFGj.js";import"./Symbols-dDjIREJ5.js";import"./symbol-CR9QZI-y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-FCVSXiSc.js";import"./uniqBy-Dd2sidz2.js";import"./iteratee-6x__QjEC.js";import"./tooltipContext-CrpRND0v.js";import"./AnimatedItems-CAvgFIRj.js";import"./useAnimationId-CGxH7MOe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C6RAZfOj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dc_2IcP9.js";import"./RegisterGraphicalItemId-BYwdAoF6.js";import"./ErrorBarContext-DCQzTmNl.js";import"./GraphicalItemClipPath-gslOIRLN.js";import"./SetGraphicalItem-BCxyd91k.js";import"./getZIndexFromUnknown-CtuNIEM3.js";import"./graphicalItemSelectors-DLWsIefM.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
