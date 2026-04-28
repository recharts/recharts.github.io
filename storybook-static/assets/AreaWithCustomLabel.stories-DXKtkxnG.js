import{e as t}from"./iframe-Ucw_npMd.js";import{R as c}from"./arrayEqualityCheck-C_bl4BTF.js";import{C as d}from"./ComposedChart-ClVu3lO0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BRmTTlcn.js";import{R as u}from"./RechartsHookInspector-Egzn0asm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BHeHZryb.js";import"./immer-Df11CBmE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CwfOdweJ.js";import"./index-JYzWfHpx.js";import"./hooks-D7V2KDBB.js";import"./axisSelectors-BH0WFu65.js";import"./d3-scale-0cZeb6CB.js";import"./zIndexSlice-CNerbQ3D.js";import"./renderedTicksSlice-DUMTm3uB.js";import"./CartesianChart-C3CifoRw.js";import"./chartDataContext-C8DSjEnl.js";import"./CategoricalChart-Bvyp3zlR.js";import"./Curve-4SPhgVqC.js";import"./types-_zfRhAxP.js";import"./step-CvXihpec.js";import"./Layer-BHKytU3r.js";import"./ReactUtils-CjeDc-m7.js";import"./Label-GC_DUOEN.js";import"./Text-BMbZi_EC.js";import"./DOMUtils-YtDMkslD.js";import"./ZIndexLayer-D2xlXPPp.js";import"./ActivePoints-UksLcW80.js";import"./Dot-B34r2ooF.js";import"./RegisterGraphicalItemId-CbJhRY50.js";import"./GraphicalItemClipPath-B7jjPwrD.js";import"./SetGraphicalItem-BTRvTts6.js";import"./useAnimationId-CEijT5wS.js";import"./getRadiusAndStrokeWidthFromDot-6YrovPXS.js";import"./graphicalItemSelectors-B4mUjUoF.js";import"./index-BrSV8OVb.js";import"./ChartSizeDimensions-Cz7KN2Sj.js";import"./OffsetShower-BPBpAMRX.js";import"./PlotAreaShower-sLoJpTUh.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
