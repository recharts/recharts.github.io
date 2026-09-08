import{a as t}from"./iframe-SuqF0IOU.js";import{a as p}from"./isWellBehavedNumber-DJK-MsfJ.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as K}from"./utils-ePvtT4un.js";import{p as R}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BNV_EBls.js";import{R as T}from"./zIndexSlice-DfamN9Zs.js";import{C as M}from"./CartesianGrid-DMiSp8n0.js";import{X as $}from"./XAxis-DR2rtjC5.js";import{Y as I}from"./YAxis-CUvLYKI6.js";import{L as O}from"./Legend-BFabakbB.js";import{T as W}from"./Tooltip-CA2lSlIq.js";import{L as C}from"./Line-BjrkBSD6.js";import{C as X}from"./Curve-E3qca46q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7DzpjnqO.js";import"./RechartsWrapper-Bg2tG11C.js";import"./axisSelectors-DbgUQ8Ul.js";import"./throttle-D6-FoWPM.js";import"./index-DY-qAKzO.js";import"./index-iK0jM_n6.js";import"./d3-scale-DnD8-5rl.js";import"./index-DLroYRR9.js";import"./index-VBcGpDGq.js";import"./renderedTicksSlice-DomOKpq5.js";import"./index-DHZGQ52F.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cji0pvqd.js";import"./chartDataContext-B0QyEg6f.js";import"./CategoricalChart-D2xX8P6u.js";import"./CartesianAxis-Bvk6yXFf.js";import"./Layer-CeZWaGzt.js";import"./Text-UuMUK1_u.js";import"./DOMUtils-DsJOOh9b.js";import"./useId-CsqHk6Y-.js";import"./useBackwardsCompatibleTheme-C6-DbdWl.js";import"./Label-9O6_T9C4.js";import"./ZIndexLayer-BN_mfTvc.js";import"./types-CS_OGYEB.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D-3Eog6Z.js";import"./symbol-B7wzKwMw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C83rORx-.js";import"./uniqBy-BLInEi1g.js";import"./iteratee-DO-aH00D.js";import"./useAnimationId-ol_mxPID.js";import"./Cross-Du3GMiU6.js";import"./Rectangle-BY0JMHo5.js";import"./util-Dxo8gN5i.js";import"./Sector-BRdwZ5XO.js";import"./AnimatedItems-DXL71NvC.js";import"./ActivePoints-BPtrfnyz.js";import"./Dot-Bait8-xr.js";import"./RegisterGraphicalItemId-BaNEX7Pr.js";import"./ErrorBarContext-BJEyAykc.js";import"./GraphicalItemClipPath-TmHiHpN1.js";import"./SetGraphicalItem-C7X7ybgb.js";import"./getRadiusAndStrokeWidthFromDot-Di11GS2z.js";import"./ActiveShapeUtils-DYWxkXZ9.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-Crr8VZH2.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:R,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
