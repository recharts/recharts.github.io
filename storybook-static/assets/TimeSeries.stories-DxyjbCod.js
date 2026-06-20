import{R as e}from"./iframe-DXxYhCFt.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C9NpqiLb.js";import{R as h}from"./zIndexSlice-qI1U9rrE.js";import{C as g}from"./ComposedChart-BYcLXDZ1.js";import{L as x}from"./Line-Cp4Gdh_1.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-rcor9ivz.js";import{T as V}from"./Tooltip-CQgnAVgk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DDC6WZq8.js";import"./CartesianAxis-DhUSnw0c.js";import"./Layer-BUsxcvuT.js";import"./resolveDefaultProps-Bho5O1tb.js";import"./Text-BFOIQrpY.js";import"./DOMUtils-Bd7kqUhA.js";import"./isWellBehavedNumber-CZeoqkhJ.js";import"./Label-C324QdBW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DA8tUdaM.js";import"./index-CK1-JLS2.js";import"./index-B4aunhTl.js";import"./types-AXOViau4.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./renderedTicksSlice-3Dm4ElKF.js";import"./immer-D7akT6tS.js";import"./RechartsWrapper-DlzjOLMT.js";import"./index-cTUjJegW.js";import"./index-BxnCQVmB.js";import"./axisSelectors-CmDHWXKB.js";import"./CartesianChart-DvdTpmiF.js";import"./chartDataContext-Bh9U9MSr.js";import"./CategoricalChart-DnXiIflv.js";import"./Curve-BoZszlOQ.js";import"./step-CUCP3dE9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-u581L8cQ.js";import"./useAnimationId-B_zUITBn.js";import"./ActivePoints-Br1nV-ho.js";import"./Dot-D-QyW_An.js";import"./RegisterGraphicalItemId-zrXRLiIJ.js";import"./ErrorBarContext-oapAiLxU.js";import"./GraphicalItemClipPath-qvKBcuDL.js";import"./SetGraphicalItem-UU_FN1uP.js";import"./getRadiusAndStrokeWidthFromDot-BS98lfES.js";import"./ActiveShapeUtils-BJbjDOel.js";import"./useElementOffset-DvUrxQBN.js";import"./uniqBy-B4OTk4uG.js";import"./iteratee-B4Viaby6.js";import"./Cross-BpQQmoe6.js";import"./Rectangle-Cjbse2NQ.js";import"./util-Dxo8gN5i.js";import"./Sector-DaxcHb1i.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
