import{e as t}from"./iframe-DIwakdDt.js";import{a as I}from"./ChartProps-Cvo8vJEE.js";import{R as K,n as p}from"./arrayEqualityCheck-lRYvQggb.js";import{L as v}from"./LineChart-ClzNmX99.js";import{C as b}from"./CartesianGrid-rKt-n5uW.js";import{X as A}from"./XAxis-BkI1-gXN.js";import{Y as M}from"./YAxis-BVx4kJfi.js";import{L as $}from"./Legend-CjGNw3nJ.js";import{T}from"./Tooltip-dhHmrtEI.js";import{L as y}from"./Line-Bwc3LNl1.js";import{R as W}from"./RechartsHookInspector-CY1ODLVc.js";import{C as X}from"./Curve-9VNPy8uR.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-DW7u54OO.js";import"./PolarUtils-B3Fap3OI.js";import"./RechartsWrapper-B94VsC0l.js";import"./hooks-DWXVssZN.js";import"./axisSelectors-B4kb62nw.js";import"./zIndexSlice-BsupxljC.js";import"./CartesianChart-DVLAyEBq.js";import"./chartDataContext-DWbSa9NP.js";import"./CategoricalChart-DSVP0XQf.js";import"./CartesianAxis-D7MVicsA.js";import"./Layer-CFi2OPVU.js";import"./Text-D6OkCyx_.js";import"./DOMUtils-B36TL8VT.js";import"./Label-CWjd44lV.js";import"./ZIndexLayer-Cgd7Iecl.js";import"./types-B72H97bN.js";import"./Symbols-CAX0rTwl.js";import"./useElementOffset-BkezN8gQ.js";import"./iteratee-CHcqC_Hc.js";import"./Cross-B44w4EXc.js";import"./Rectangle-C0jTOdyj.js";import"./useAnimationId-OdOX1ryX.js";import"./Sector-BBGpgSZE.js";import"./ReactUtils-D3B4C902.js";import"./ActivePoints-DyDkHbPU.js";import"./Dot-DKxmRIiM.js";import"./RegisterGraphicalItemId-mhUZ9dId.js";import"./ErrorBarContext-B4VuOyB0.js";import"./GraphicalItemClipPath-BZiUpPN4.js";import"./SetGraphicalItem-Cri-Qe4J.js";import"./getRadiusAndStrokeWidthFromDot-5N_ef9yY.js";import"./ActiveShapeUtils-Dm9ayMJH.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-wlixMr2J.js";import"./index-DvyeDb-a.js";import"./ChartSizeDimensions-Dw8_76VR.js";import"./OffsetShower-CvNNPebB.js";import"./PlotAreaShower-nYxw-fUs.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
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
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
