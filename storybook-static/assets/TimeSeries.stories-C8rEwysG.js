import{e}from"./iframe-B6PVJaTx.js";import{X as s}from"./XAxis-B6nzW_y2.js";import{R as y}from"./arrayEqualityCheck--l5nbOOj.js";import{C as g}from"./ComposedChart-BmpGplUO.js";import{L as x}from"./Line-D8kksclE.js";import{R as S}from"./RechartsHookInspector-DAdFhUj3.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-B9ZoAAf3.js";import{T as V}from"./Tooltip-DPR5Vxgj.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DZRbozUC.js";import"./Layer-B8Qqjz1b.js";import"./resolveDefaultProps-SbZpfCF8.js";import"./Text-C0kuQw6e.js";import"./DOMUtils-C2NDlTFm.js";import"./Label-BcLUaBCG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-d-D4FVJh.js";import"./zIndexSlice-67Af1QFi.js";import"./immer-C_TrIJMh.js";import"./types-D2EFyeKu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BgZ61m11.js";import"./hooks-CMcsnkVg.js";import"./axisSelectors-Bycocccg.js";import"./RechartsWrapper-BP-lLfVx.js";import"./index-BYl1MF2O.js";import"./CartesianChart-VouzMpCB.js";import"./chartDataContext-KAdJCeqF.js";import"./CategoricalChart-BKdjoORw.js";import"./ReactUtils-BX8s_uVv.js";import"./ActivePoints-DKGt-sO1.js";import"./Dot-D4UjwoyQ.js";import"./RegisterGraphicalItemId-u9lrCCFO.js";import"./ErrorBarContext-CPj1LVBL.js";import"./GraphicalItemClipPath-BvACd4D_.js";import"./SetGraphicalItem-D73Bmw1S.js";import"./useAnimationId-BQkpZnA1.js";import"./getRadiusAndStrokeWidthFromDot-BFZegUjF.js";import"./ActiveShapeUtils-B_lqA0BU.js";import"./isPlainObject-BDf_CSQT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BTXCPNQZ.js";import"./Trapezoid-B69mIrTK.js";import"./Sector-DBXvXTeF.js";import"./Symbols-D85bhFp3.js";import"./symbol-JouRlcFh.js";import"./step-D3frr3Yw.js";import"./Curve-DFsvHQ10.js";import"./index-DliOLYsg.js";import"./ChartSizeDimensions-DJ4EsjSA.js";import"./OffsetShower-BD_1fIgB.js";import"./PlotAreaShower-CzP38MFh.js";import"./useElementOffset-DEktGNVm.js";import"./uniqBy-BfHwhh8s.js";import"./iteratee-CmfJSOYg.js";import"./Cross-BYRz6Hta.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
