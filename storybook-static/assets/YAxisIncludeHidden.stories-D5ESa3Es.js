import{r as f,R as e}from"./iframe-CYE_KjLp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DWbbwN0w.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BJ5AXs-O.js";import{C as k}from"./ComposedChart-FkotVeZi.js";import{X as K}from"./XAxis-CSEJquda.js";import{L as v}from"./Legend-CqwLssCU.js";import{B as s}from"./Bar-47vseenK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-9Uyc6PiW.js";import"./Layer-BAAO02Y6.js";import"./resolveDefaultProps-Bfx-m_zh.js";import"./Text-D9p9m1qq.js";import"./DOMUtils-DNa7oSWn.js";import"./isWellBehavedNumber-D2iFNJG8.js";import"./Label-DungM5aU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cs3N_7G3.js";import"./index-Ph9m1nQR.js";import"./index-BT3sj--6.js";import"./types-Bh5it62Q.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-Bk_hKtUF.js";import"./throttle-CMwKm87I.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-8_njvAZI.js";import"./index-CwiYvwQ-.js";import"./index-CN526hDZ.js";import"./axisSelectors-Cz15TeqU.js";import"./d3-scale-BYal7h8i.js";import"./CartesianChart-g8MVdMo8.js";import"./chartDataContext-3J9QrXTl.js";import"./CategoricalChart-DxSK9VeV.js";import"./Symbols-DAWow7kL.js";import"./symbol-FiS9WCjp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bd-GUmxf.js";import"./uniqBy-Dvg3CN9x.js";import"./iteratee-olANGOHV.js";import"./tooltipContext-Bs0EcAMz.js";import"./AnimatedItems-DDp5Wq7I.js";import"./useAnimationId-D2RJw3gt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6bKXxl8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8xIbBFmr.js";import"./RegisterGraphicalItemId-BVUvorB4.js";import"./ErrorBarContext-C6lKsYq3.js";import"./GraphicalItemClipPath-DSlcdUco.js";import"./SetGraphicalItem-DsAOjH_V.js";import"./getZIndexFromUnknown-BsuskYxw.js";import"./graphicalItemSelectors-FraeXnF0.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
