import{r as f,e}from"./iframe-D1sKzd9f.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-BOXDE0eJ.js";import{R as A}from"./arrayEqualityCheck-CuEsOyc1.js";import{C}from"./ComposedChart-D7QMmcGv.js";import{X as K}from"./XAxis-BOA4yCHe.js";import{L as v}from"./Legend-xkXWy3Kp.js";import{B as a}from"./Bar-DS-Islxy.js";import{R as x}from"./RechartsHookInspector-DnaIUpyH.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DP_tbxO-.js";import"./CartesianAxis-C9kYKoRG.js";import"./Layer-WzWTapMZ.js";import"./Text-Cjdiq18G.js";import"./DOMUtils-gW35XdYA.js";import"./Label-BUubujAP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C_HSTCV-.js";import"./zIndexSlice-LstRJYK0.js";import"./types-EtQqMNLc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DdtZHK8g.js";import"./axisSelectors-DyIQ7_k2.js";import"./RechartsWrapper-BpD_sNud.js";import"./CartesianChart-Biy4tQe4.js";import"./chartDataContext-CRIv2raa.js";import"./CategoricalChart-C6tF-OgQ.js";import"./Symbols-B6J6F5uc.js";import"./Curve-BmiU29ay.js";import"./useElementOffset-DMBXxydz.js";import"./iteratee-Do7b8DA9.js";import"./tooltipContext-CrfAdeah.js";import"./ReactUtils-CN0W71Xc.js";import"./ActiveShapeUtils-fLb35mLW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CjCqdVKq.js";import"./useAnimationId-CobcEi0h.js";import"./Trapezoid-CC-7WT-k.js";import"./Sector-BNWuE3Lx.js";import"./RegisterGraphicalItemId-1mClqvPm.js";import"./ErrorBarContext-BoOFKdx-.js";import"./GraphicalItemClipPath-D104b0kU.js";import"./SetGraphicalItem-elsOCW9j.js";import"./getZIndexFromUnknown-HH07cRKm.js";import"./graphicalItemSelectors-CPJau7EC.js";import"./index-BzSbAqoW.js";import"./ChartSizeDimensions-C9qcdOPY.js";import"./OffsetShower-0TFjDlvn.js";import"./PlotAreaShower-D6laSGCk.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
