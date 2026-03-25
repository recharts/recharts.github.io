import{e}from"./iframe-DjpYK-o-.js";import{X as s}from"./XAxis-Bcdqw-wv.js";import{R as y}from"./arrayEqualityCheck-BdSiZsNM.js";import{C as g}from"./ComposedChart-5wDZbkHU.js";import{L as x}from"./Line-BFOWOId7.js";import{R as S}from"./RechartsHookInspector-D54qOyzT.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BGWrA6kg.js";import{T as V}from"./Tooltip-CU6I7B3D.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BU6WfKzj.js";import"./Layer-ClpAj3mi.js";import"./resolveDefaultProps-C42G_ffr.js";import"./Text-hUj7bTMa.js";import"./DOMUtils-Bertp5OK.js";import"./Label-Df3TKPqw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BYBCo22l.js";import"./zIndexSlice-BwAJg9IA.js";import"./immer-D4y8T5a7.js";import"./types-e-ZS-U8T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DA_2QpHv.js";import"./hooks-DMOVvbqY.js";import"./axisSelectors-DOtt8rOg.js";import"./RechartsWrapper-CauuEd3r.js";import"./index-B9U8pH8P.js";import"./CartesianChart-S0vn2j2X.js";import"./chartDataContext-DMhYHlkG.js";import"./CategoricalChart-DEHztz1y.js";import"./ReactUtils-0Og-Hkqc.js";import"./ActivePoints-0ZU6F1s-.js";import"./Dot-CRJ16IiO.js";import"./RegisterGraphicalItemId-BvqmWFzi.js";import"./ErrorBarContext-DPi1-we4.js";import"./GraphicalItemClipPath-CTrBCXbW.js";import"./SetGraphicalItem-a4oiN2v8.js";import"./useAnimationId-DA-f91a4.js";import"./getRadiusAndStrokeWidthFromDot-DAsawtMn.js";import"./ActiveShapeUtils-Dirt4gFG.js";import"./isPlainObject-Bpjrt-ZA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B37Ytfod.js";import"./Trapezoid-BWufpwnM.js";import"./Sector-0IwDdBHs.js";import"./Symbols-BYV52fjj.js";import"./symbol-BODo34re.js";import"./step-BxVjdfNs.js";import"./Curve-B8xtuMQr.js";import"./index-DPPgUz6W.js";import"./ChartSizeDimensions-B8zKV2n0.js";import"./OffsetShower-DWnJVUQp.js";import"./PlotAreaShower-B2Ag3HsK.js";import"./useElementOffset-DnFMhM4t.js";import"./uniqBy-kirwiohz.js";import"./iteratee-CjKMdjLN.js";import"./Cross-CL7uGiLa.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
