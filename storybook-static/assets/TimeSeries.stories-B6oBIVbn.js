import{e}from"./iframe-DIwakdDt.js";import{X as s}from"./XAxis-BkI1-gXN.js";import{R as y}from"./arrayEqualityCheck-lRYvQggb.js";import{C as g}from"./ComposedChart-DZdYEtXz.js";import{L as x}from"./Line-Bwc3LNl1.js";import{R as S}from"./RechartsHookInspector-CY1ODLVc.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-B4kb62nw.js";import{T as O}from"./Tooltip-dhHmrtEI.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DW7u54OO.js";import"./CartesianAxis-D7MVicsA.js";import"./Layer-CFi2OPVU.js";import"./Text-D6OkCyx_.js";import"./DOMUtils-B36TL8VT.js";import"./Label-CWjd44lV.js";import"./PolarUtils-B3Fap3OI.js";import"./ZIndexLayer-Cgd7Iecl.js";import"./zIndexSlice-BsupxljC.js";import"./types-B72H97bN.js";import"./hooks-DWXVssZN.js";import"./CategoricalChart-DSVP0XQf.js";import"./RechartsWrapper-B94VsC0l.js";import"./CartesianChart-DVLAyEBq.js";import"./chartDataContext-DWbSa9NP.js";import"./ReactUtils-D3B4C902.js";import"./ActivePoints-DyDkHbPU.js";import"./Dot-DKxmRIiM.js";import"./RegisterGraphicalItemId-mhUZ9dId.js";import"./ErrorBarContext-B4VuOyB0.js";import"./GraphicalItemClipPath-BZiUpPN4.js";import"./SetGraphicalItem-Cri-Qe4J.js";import"./useAnimationId-OdOX1ryX.js";import"./getRadiusAndStrokeWidthFromDot-5N_ef9yY.js";import"./ActiveShapeUtils-Dm9ayMJH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0jTOdyj.js";import"./Trapezoid-wlixMr2J.js";import"./Sector-BBGpgSZE.js";import"./Symbols-CAX0rTwl.js";import"./Curve-9VNPy8uR.js";import"./index-DvyeDb-a.js";import"./ChartSizeDimensions-Dw8_76VR.js";import"./OffsetShower-CvNNPebB.js";import"./PlotAreaShower-nYxw-fUs.js";import"./useElementOffset-BkezN8gQ.js";import"./iteratee-CHcqC_Hc.js";import"./Cross-B44w4EXc.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
