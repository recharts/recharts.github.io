import{r as f,a as e}from"./iframe-SuqF0IOU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CUvLYKI6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DfamN9Zs.js";import{C as k}from"./ComposedChart-BtkawvAi.js";import{X as K}from"./XAxis-DR2rtjC5.js";import{L as v}from"./Legend-BFabakbB.js";import{B as a}from"./Bar-Dx1JhkKq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-9O6_T9C4.js";import"./Text-UuMUK1_u.js";import"./resolveDefaultProps-7DzpjnqO.js";import"./DOMUtils-DsJOOh9b.js";import"./isWellBehavedNumber-DJK-MsfJ.js";import"./useId-CsqHk6Y-.js";import"./useBackwardsCompatibleTheme-C6-DbdWl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BN_mfTvc.js";import"./index-DY-qAKzO.js";import"./index-iK0jM_n6.js";import"./RechartsWrapper-Bg2tG11C.js";import"./axisSelectors-DbgUQ8Ul.js";import"./throttle-D6-FoWPM.js";import"./d3-scale-DnD8-5rl.js";import"./index-DLroYRR9.js";import"./index-VBcGpDGq.js";import"./renderedTicksSlice-DomOKpq5.js";import"./index-DHZGQ52F.js";import"./CartesianAxis-Bvk6yXFf.js";import"./Layer-CeZWaGzt.js";import"./types-CS_OGYEB.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cji0pvqd.js";import"./chartDataContext-B0QyEg6f.js";import"./CategoricalChart-D2xX8P6u.js";import"./Symbols-D-3Eog6Z.js";import"./symbol-B7wzKwMw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C83rORx-.js";import"./uniqBy-BLInEi1g.js";import"./iteratee-DO-aH00D.js";import"./AnimatedItems-DXL71NvC.js";import"./useAnimationId-ol_mxPID.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BY0JMHo5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DYWxkXZ9.js";import"./tooltipContext-C3LWRUAx.js";import"./RegisterGraphicalItemId-BaNEX7Pr.js";import"./ErrorBarContext-BJEyAykc.js";import"./GraphicalItemClipPath-TmHiHpN1.js";import"./SetGraphicalItem-C7X7ybgb.js";import"./getZIndexFromUnknown-B5NA7H4K.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BUySm8JS.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Le as default};
