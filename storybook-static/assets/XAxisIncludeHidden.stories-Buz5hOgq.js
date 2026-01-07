import{r as f,e}from"./iframe-DaCZzlB4.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-CjzxMwK0.js";import{R as C}from"./arrayEqualityCheck-xIdjdXyO.js";import{C as K}from"./ComposedChart-qrh-EwWj.js";import{X as A}from"./XAxis-Xd1zSAtt.js";import{L as v}from"./Legend-LNiW__wh.js";import{B as a}from"./Bar-BP5Xpgoo.js";import{R as x}from"./RechartsHookInspector-C1qZr8kA.js";import{p as s}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-CDCOnC3u.js";import"./CartesianAxis-B3Ks68Jf.js";import"./Layer-BKXPn5xD.js";import"./Text-3g0qzZJG.js";import"./DOMUtils-DZpmyTbi.js";import"./Label-D2rMkPMU.js";import"./PolarUtils-CS41bXSK.js";import"./ZIndexLayer-Deqw7_sa.js";import"./zIndexSlice-B7osVKE5.js";import"./types-CyhQh7_Z.js";import"./hooks-96RhMqDh.js";import"./axisSelectors-BaN6N1Lo.js";import"./RechartsWrapper-CytJWPJg.js";import"./CartesianChart-CmxBhKD5.js";import"./chartDataContext-C2uZEvtu.js";import"./CategoricalChart-BnmCoL2H.js";import"./Symbols-CqwnDYaa.js";import"./Curve-BcpAE4Ao.js";import"./useElementOffset-CL0kWG2p.js";import"./iteratee-m2fxanZQ.js";import"./tooltipContext-CtRObmAP.js";import"./ReactUtils-yqeNEccg.js";import"./ActiveShapeUtils-DeHR3FEj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-z0Tijc68.js";import"./useAnimationId-DMDiR4YX.js";import"./Trapezoid-OHYhJgzZ.js";import"./Sector-D1uAN8IN.js";import"./RegisterGraphicalItemId-BC9wjUC-.js";import"./ErrorBarContext-D3ibGYOb.js";import"./GraphicalItemClipPath-CLpO-bZw.js";import"./SetGraphicalItem-DKRKp8eM.js";import"./getZIndexFromUnknown-D_uz6Rbn.js";import"./graphicalItemSelectors-kdl34reE.js";import"./index-DqUfe0wd.js";import"./ChartSizeDimensions-Dn5P1TLL.js";import"./OffsetShower-CyCVWv2W.js";import"./PlotAreaShower-DACZviw9.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
