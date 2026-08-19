import{r as f,R as e}from"./iframe-W15_yS8y.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CxEXFC67.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-KjfXmz6K.js";import{C as k}from"./ComposedChart-DruFp6Y2.js";import{X as K}from"./XAxis-8Au-a6fB.js";import{L as v}from"./Legend-B-cKma5Y.js";import{B as s}from"./Bar-JnvSsJKH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-v2JLpAzt.js";import"./Text-BvMd1KWD.js";import"./resolveDefaultProps-PB6tg1uE.js";import"./DOMUtils-Mq767cy3.js";import"./isWellBehavedNumber-J_RQo-Gx.js";import"./useBackwardsCompatibleTheme-CVh47B6N.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRPG0BG4.js";import"./index-DJoXYd_8.js";import"./index-C4zsw-i5.js";import"./RechartsWrapper-B53AJGL_.js";import"./index-Df7Hn4Pb.js";import"./index-CzfOThSk.js";import"./throttle-Dvj2OlWT.js";import"./axisSelectors-D1dvC9r7.js";import"./d3-scale-DaTRSSxE.js";import"./renderedTicksSlice--xVLPDDU.js";import"./CartesianAxis-lMcf7VGx.js";import"./Layer-mEuTxfDi.js";import"./types-DbtskFGe.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CGOzuY2G.js";import"./chartDataContext-CMgd62s5.js";import"./CategoricalChart-DCYct-dD.js";import"./Symbols-By7z1KVb.js";import"./symbol-DiB428ur.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D060Lqzv.js";import"./uniqBy-CHYStU7Q.js";import"./iteratee-3tM74Wvb.js";import"./AnimatedItems-CZGuNW2p.js";import"./useAnimationId-B9um5jhW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBPyqCCf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CzKUxwm_.js";import"./tooltipContext-Dhbi8ip2.js";import"./RegisterGraphicalItemId-qtKCK3s0.js";import"./ErrorBarContext-C5-u35E5.js";import"./GraphicalItemClipPath-DHit8l0N.js";import"./SetGraphicalItem-BYTBa9Xv.js";import"./getZIndexFromUnknown-DJTrSOrY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-E6qKB9xL.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
