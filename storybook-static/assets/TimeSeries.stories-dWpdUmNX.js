import{e}from"./iframe-Kkd8-ubb.js";import{X as s}from"./XAxis-CbFnoS6J.js";import{R as y}from"./arrayEqualityCheck-Ielmuttt.js";import{C as g}from"./ComposedChart-Bo7YXCXq.js";import{L as x}from"./Line-CYMWQ0PF.js";import{R as S}from"./RechartsHookInspector-CcR4oLvT.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-CQsBMpsc.js";import{T as O}from"./Tooltip-BNbvwB7J.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e46786Oc.js";import"./CartesianAxis-CgavSOcU.js";import"./Layer-Cyu_K3I4.js";import"./Text-D0iQ_q13.js";import"./DOMUtils-BRB7Whks.js";import"./Label-Cj_m_2Cw.js";import"./PolarUtils-dpEG3P4_.js";import"./ZIndexLayer-BavQVgOF.js";import"./zIndexSlice-oaE3QQvX.js";import"./types-CKa1MlE2.js";import"./hooks-DpEg8B1p.js";import"./CategoricalChart-BHUUzYjw.js";import"./RechartsWrapper-DfR_FMJ_.js";import"./CartesianChart-yQMyY-ky.js";import"./chartDataContext-Cn2HGoq0.js";import"./ReactUtils-BqeFDjfd.js";import"./ActivePoints-C2lViDCT.js";import"./Dot-Cz1V9H5e.js";import"./RegisterGraphicalItemId-Dq1gRlWd.js";import"./ErrorBarContext-MQ-0FIOF.js";import"./GraphicalItemClipPath-CBxCy0LY.js";import"./SetGraphicalItem-umYxrYzv.js";import"./useAnimationId-BuYZFA9f.js";import"./getRadiusAndStrokeWidthFromDot-D45MSBdu.js";import"./ActiveShapeUtils-D0hO1fBl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyJZTmCf.js";import"./Trapezoid-BXOoNxp9.js";import"./Sector-cedV6umc.js";import"./Symbols-Do2U4jAb.js";import"./Curve-bqTY_rZQ.js";import"./index-Cr9WdP25.js";import"./ChartSizeDimensions-DHaCW3zv.js";import"./OffsetShower-4UKMZo9R.js";import"./PlotAreaShower-DaKuRwAM.js";import"./useElementOffset-Bmnuk-bQ.js";import"./iteratee-B1LaAQ2a.js";import"./Cross-Df3Rz39u.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
