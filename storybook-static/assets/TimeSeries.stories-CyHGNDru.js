import{e}from"./iframe-B9GGDGS1.js";import{X as s}from"./XAxis-BhXpxA_M.js";import{R as y}from"./arrayEqualityCheck-COtCLy3x.js";import{C as g}from"./ComposedChart-CIiFVJBI.js";import{L as x}from"./Line-BRyNeqPY.js";import{R as S}from"./RechartsHookInspector-BWkI8hZR.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CJw_J5vV.js";import{T as V}from"./Tooltip-qjJxg-q0.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DyjzRIeL.js";import"./Layer-DcWLpeG9.js";import"./resolveDefaultProps-CwlEvTRj.js";import"./Text-BfPYOH_N.js";import"./DOMUtils-BTQMQKLS.js";import"./Label-DbaG7Uem.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbIo1jp-.js";import"./zIndexSlice-Dr0l4bHj.js";import"./immer-D8haotDT.js";import"./types-88pgmlG4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-q0M83NPg.js";import"./hooks-C2J7naOZ.js";import"./axisSelectors-8xv55RbV.js";import"./RechartsWrapper-EHfwRfBb.js";import"./index-D1V-1Kud.js";import"./CartesianChart-YXzBIFVQ.js";import"./chartDataContext-Z-R_60d5.js";import"./CategoricalChart-BBfSxrd4.js";import"./ReactUtils-CrjF-zMe.js";import"./ActivePoints-CNPbEPL7.js";import"./Dot-B6uirbug.js";import"./RegisterGraphicalItemId-CE2Hr5pe.js";import"./ErrorBarContext-DMLt-c7m.js";import"./GraphicalItemClipPath-B6fH0RLB.js";import"./SetGraphicalItem-Df3jzsrS.js";import"./useAnimationId-DnjhYXkZ.js";import"./getRadiusAndStrokeWidthFromDot-BxwKgIZR.js";import"./ActiveShapeUtils-DstCBXr6.js";import"./isPlainObject-Drfk2luO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMlO_C8p.js";import"./Trapezoid-Cz1Qyrxg.js";import"./Sector-CREvb1nt.js";import"./Symbols-Drc7wV6L.js";import"./symbol-qWW-wzEd.js";import"./step-DJMv4gH4.js";import"./Curve-BqOd-kHx.js";import"./index-DZx9HZGn.js";import"./ChartSizeDimensions-C9x1Brk2.js";import"./OffsetShower-BIWjLM9_.js";import"./PlotAreaShower-Dpy9Dm8W.js";import"./useElementOffset-BftyTVso.js";import"./uniqBy-D0TRTuXO.js";import"./iteratee-ou_oC-Sl.js";import"./Cross-DLmPD2Pq.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
