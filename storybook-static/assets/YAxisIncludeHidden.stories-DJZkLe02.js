import{r as f,R as e}from"./iframe-pl42v7Eu.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CTEyBNt3.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D6Ury5DQ.js";import{C as k}from"./ComposedChart-Bj059aV9.js";import{X as K}from"./XAxis-0siPSpiK.js";import{L as v}from"./Legend-CymuCPFQ.js";import{B as s}from"./Bar-gxMR1ANn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Ci1Zslo5.js";import"./CartesianAxis-Dyaa3QOt.js";import"./Layer-DIETCOs-.js";import"./resolveDefaultProps-BgT3I9Pa.js";import"./Text-DHqN6Wmv.js";import"./DOMUtils-C0435NEl.js";import"./isWellBehavedNumber-B6cHM4DS.js";import"./Label-jH0IUTIN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DHOvoudh.js";import"./index-Df70QOpj.js";import"./index-ntLeohj2.js";import"./types-Cax0x9Pi.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-nJaW__V7.js";import"./immer-C_PxOxT8.js";import"./RechartsWrapper-ByLHuOcy.js";import"./index-BTDreE9O.js";import"./index-Cmb4UkZ_.js";import"./axisSelectors-49otWNoQ.js";import"./d3-scale-EDGtIYyd.js";import"./CartesianChart-CkSibwuY.js";import"./chartDataContext-BUPOQjbb.js";import"./CategoricalChart-BDx0yEeS.js";import"./Symbols-8zp00i_z.js";import"./symbol-Dq8p-R2M.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Btpwl7wC.js";import"./uniqBy-DtZ7esPP.js";import"./iteratee-OzssNQ-a.js";import"./tooltipContext-DiL1jzmy.js";import"./AnimatedItems-wt0_sn45.js";import"./useAnimationId-bxLMfI7c.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dhsi5AWp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DL8AZGaA.js";import"./RegisterGraphicalItemId-Rj2Lqe9e.js";import"./ErrorBarContext-BQo0CyvO.js";import"./GraphicalItemClipPath-CviR7UKP.js";import"./SetGraphicalItem-BX03rWwK.js";import"./getZIndexFromUnknown-JdepF8ak.js";import"./graphicalItemSelectors-yDFIsm5P.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
