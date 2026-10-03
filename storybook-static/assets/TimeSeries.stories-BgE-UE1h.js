import{a as e}from"./iframe-7Yqq7fCu.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-1FKbFMeO.js";import{R as h}from"./zIndexSlice-Clo6-Yyn.js";import{C as g}from"./ComposedChart-CzrLMxQE.js";import{L as x}from"./Line-y-Q91fXJ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BucieWce.js";import{T as V}from"./Tooltip-B_7JlKfR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Tr4fBNdd.js";import"./Layer-B4eFX6wr.js";import"./resolveDefaultProps-DPH1JWez.js";import"./Text-CBP65qj4.js";import"./DOMUtils-DFLenfZw.js";import"./isWellBehavedNumber-3XLFrVwb.js";import"./useId-CQKco8O5.js";import"./useBackwardsCompatibleTheme-DsG9X6Al.js";import"./Label-BeKnll5A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CY2z0VDd.js";import"./index-BP89nsqC.js";import"./index-Bvs3nnJ3.js";import"./types-BLNI4yrZ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-C7nR0wuC.js";import"./throttle-CPS_vYKA.js";import"./index-CMyPnnGY.js";import"./index-CIvsYy-Z.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BmN3AX4B.js";import"./axisSelectors-TNeFeRD0.js";import"./index-BmRJq5r2.js";import"./CartesianChart-B7Vexiif.js";import"./chartDataContext-BDajETE7.js";import"./CategoricalChart-DGs6T5PE.js";import"./Curve-Bx49RMW5.js";import"./step-CY_23fua.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BlURIwD6.js";import"./useAnimationId-OFL2L8Zq.js";import"./ActivePoints-Df4Z0MND.js";import"./Dot-B0z70aRe.js";import"./RegisterGraphicalItemId-CBb6S0jv.js";import"./ErrorBarContext-B86Z1RsK.js";import"./GraphicalItemClipPath-ElSd1RxM.js";import"./SetGraphicalItem-DDBsqrXQ.js";import"./getRadiusAndStrokeWidthFromDot-BA9-tDMT.js";import"./ActiveShapeUtils-RlmFljs4.js";import"./useGraphicalItemIdentity-C_cMOVZX.js";import"./useElementOffset-CVlFUWt-.js";import"./uniqBy-CgUI3qsR.js";import"./iteratee-DqkESnyS.js";import"./Cross-BBg7bcb6.js";import"./Rectangle-D0MukTZZ.js";import"./util-Dxo8gN5i.js";import"./Sector-BMtiqe0D.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),R=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?R(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
