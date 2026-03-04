import{e}from"./iframe-BWK9ES1u.js";import{X as s}from"./XAxis-DPIaAqKp.js";import{R as y}from"./arrayEqualityCheck-C3hQ_dNx.js";import{C as g}from"./ComposedChart-Dkw93O4i.js";import{L as x}from"./Line-WEZT4w3U.js";import{R as S}from"./RechartsHookInspector-PHAVE2qS.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BLK5VF-M.js";import{T as V}from"./Tooltip-BPgkSb2x.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DXQ2RzcP.js";import"./Layer-FfNANwFp.js";import"./resolveDefaultProps-UiVGC4WG.js";import"./Text-D_AFYo3_.js";import"./DOMUtils-BiksdwSe.js";import"./Label-CkGBtdJT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bCgYEHqC.js";import"./zIndexSlice-D32FYtu3.js";import"./immer-H-Wjh2uu.js";import"./types-BDXHojhp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DeqeruMc.js";import"./hooks-7NwdUe8t.js";import"./axisSelectors-_XyMcvnR.js";import"./RechartsWrapper-BOGHGYF3.js";import"./index-CFdRl6ey.js";import"./CartesianChart-CW6-YABt.js";import"./chartDataContext-cUJ3hXxI.js";import"./CategoricalChart-BCO7gYoN.js";import"./ReactUtils-CHwdflEM.js";import"./ActivePoints-BYRAlD7T.js";import"./Dot-WO8tOduR.js";import"./RegisterGraphicalItemId-Dl_9XwyC.js";import"./ErrorBarContext-pBc660wi.js";import"./GraphicalItemClipPath-Cpkp19yU.js";import"./SetGraphicalItem-sg4XQgsj.js";import"./useAnimationId-CpY_S6-T.js";import"./getRadiusAndStrokeWidthFromDot-DGvf84G4.js";import"./ActiveShapeUtils-pcY95NPm.js";import"./isPlainObject-CWcMf8n5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQknosyX.js";import"./Trapezoid-2vK08j-g.js";import"./Sector-Bmz-EyPe.js";import"./Symbols-CaAoNy9I.js";import"./symbol-CBLdl9lx.js";import"./step-DmOlkDZ0.js";import"./Curve-W2IHKA5j.js";import"./index-CIhAteaz.js";import"./ChartSizeDimensions-6JZOYWf1.js";import"./OffsetShower-D5r1e2Xk.js";import"./PlotAreaShower-DQz1z3XL.js";import"./useElementOffset-gbWWMt5M.js";import"./uniqBy-BqXP0SWa.js";import"./iteratee-9NvUXoXE.js";import"./Cross-DQJGi_Jg.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
