import{r as f,a as e}from"./iframe-D_Sr4lJG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CK9b0jPJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D0QIWFDJ.js";import{C as k}from"./ComposedChart-ZURsynXK.js";import{X as K}from"./XAxis-CiVYw4TJ.js";import{L as v}from"./Legend-6Kaq28I2.js";import{B as s}from"./Bar-CCLdWIC_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CeC9waPr.js";import"./Text-DkNPAJgx.js";import"./resolveDefaultProps-BKaajls5.js";import"./DOMUtils-zvxYmMZo.js";import"./isWellBehavedNumber-Dv4TPBJ2.js";import"./useId-Dl8Yfg4u.js";import"./useBackwardsCompatibleTheme-Kv-Z1TIM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cx1K1yql.js";import"./index-DzVo4Gjf.js";import"./index-Bx0q42bk.js";import"./RechartsWrapper-BTyxoPDx.js";import"./index-CqdW1tHD.js";import"./index-DYQHTRz1.js";import"./throttle-DGVbE07Y.js";import"./axisSelectors-B4F-1YW3.js";import"./d3-scale-DfRtt2DS.js";import"./renderedTicksSlice-DGuDkWT4.js";import"./CartesianAxis-B-dcY2MJ.js";import"./Layer-D9Oc_uBt.js";import"./types-D5gXUhG3.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-JxmHMprN.js";import"./chartDataContext-AwrwRhEc.js";import"./CategoricalChart-DKW5S15G.js";import"./Symbols-CxVleFr4.js";import"./symbol-DWmT4zeF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CuHOZIfT.js";import"./uniqBy-SCEa_4Mg.js";import"./iteratee-DHY7e-mB.js";import"./AnimatedItems-DooKJjtX.js";import"./useAnimationId-KZvr8oE4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNEw1Bzs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYI-DMZT.js";import"./tooltipContext-RZhMVhIV.js";import"./RegisterGraphicalItemId-DO9NFESU.js";import"./ErrorBarContext-pr_CmNON.js";import"./GraphicalItemClipPath-BKqVnbRS.js";import"./SetGraphicalItem-DDVudLdC.js";import"./getZIndexFromUnknown-DFzjspXH.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CpcZwHhR.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
