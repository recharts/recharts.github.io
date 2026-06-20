import{r as f,R as e}from"./iframe-DXxYhCFt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-fukBbkBQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-qI1U9rrE.js";import{C as k}from"./ComposedChart-BYcLXDZ1.js";import{X as K}from"./XAxis-C9NpqiLb.js";import{L as v}from"./Legend-Bx1y-bzw.js";import{B as s}from"./Bar-B_qDC8lm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DDC6WZq8.js";import"./CartesianAxis-DhUSnw0c.js";import"./Layer-BUsxcvuT.js";import"./resolveDefaultProps-Bho5O1tb.js";import"./Text-BFOIQrpY.js";import"./DOMUtils-Bd7kqUhA.js";import"./isWellBehavedNumber-CZeoqkhJ.js";import"./Label-C324QdBW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DA8tUdaM.js";import"./index-CK1-JLS2.js";import"./index-B4aunhTl.js";import"./types-AXOViau4.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-3Dm4ElKF.js";import"./immer-D7akT6tS.js";import"./RechartsWrapper-DlzjOLMT.js";import"./index-cTUjJegW.js";import"./index-BxnCQVmB.js";import"./axisSelectors-CmDHWXKB.js";import"./d3-scale-rcor9ivz.js";import"./CartesianChart-DvdTpmiF.js";import"./chartDataContext-Bh9U9MSr.js";import"./CategoricalChart-DnXiIflv.js";import"./Symbols-p6tzUQrv.js";import"./symbol-BLNVVXJX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DvUrxQBN.js";import"./uniqBy-B4OTk4uG.js";import"./iteratee-B4Viaby6.js";import"./tooltipContext-Dvz-E8_R.js";import"./AnimatedItems-u581L8cQ.js";import"./useAnimationId-B_zUITBn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cjbse2NQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJbjDOel.js";import"./RegisterGraphicalItemId-zrXRLiIJ.js";import"./ErrorBarContext-oapAiLxU.js";import"./GraphicalItemClipPath-qvKBcuDL.js";import"./SetGraphicalItem-UU_FN1uP.js";import"./getZIndexFromUnknown-CgPdAe6m.js";import"./graphicalItemSelectors-DZShIzeY.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
