import{a as e}from"./iframe-BPQD5v1C.js";import{g as h}from"./utils-ePvtT4un.js";import{L as n}from"./activeStyles-BpdD72zS.js";import{R as u}from"./zIndexSlice-DfAJCemw.js";import{L as z}from"./LineChart-CSXojFc2.js";import{p as g,s as N}from"./Page-Cj8EiXz7.js";import{X as p}from"./XAxis-Tde5CSPK.js";import{Y as f}from"./YAxis-DB1Rqz7t.js";import{L as _}from"./Line-COu1GzzV.js";import{B as y}from"./BarChart-lJIotYo2.js";import{C as b}from"./CartesianGrid-BjsXEzWG.js";import{B as A}from"./Bar-D8PVLJDr.js";import{R as X}from"./RadarChart-BPsq4h1N.js";import{P as Y}from"./PolarGrid-BOx8VJKH.js";import{P as M}from"./PolarAngleAxis-DjqZGYur.js";import{P as U}from"./PolarRadiusAxis-BWIQ4p33.js";import{R as q}from"./Radar-BzKSky4K.js";const o={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a rectangle behind each label, for example to keep labels readable on top of filled shapes.\n\n- `true` draws the background with the styles from the theme's `graphicalItems[n].label.background`.\n  If neither sets a `fill`, the fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n  It is merged over the theme styles key by key.\n- `false` draws no background, even if the theme turns backgrounds on.\n- `undefined` uses the theme's `graphicalItems[n].label.background`, and draws no background without a theme.\n\nEach background is sized from its rendered label and follows curved label paths.\nIt is not drawn for custom `content`.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},clockWise:{description:"The parameter to calculate the view box of label in radial charts.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},content:{description:"If set a React element, the option is the customized React element of rendering each label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set to a function, the function is called once for each item",table:{type:{summary:"Function | ReactNode"},category:"General"}},dataKey:{description:`Decides how to extract the value of each label from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value of each label.

If set, then valueAccessor will be ignored.

Scatter requires this prop to be set.
Other graphical components will show the same value as the dataKey of the component by default.`,table:{type:{summary:"Function | number | string"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},offset:{description:`The offset to the specified "position".
Direction of the offset depends on the position.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},valueAccessor:{description:"The accessor function to get the value of each label. Is ignored if dataKey is specified.",table:{type:{summary:"Function"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},$={argTypes:o,component:n},i={render:a=>{const[r,t]=[600,300];return e.createElement(u,{width:"100%",height:t},e.createElement(z,{width:r,height:t,margin:{top:20,right:20,bottom:20,left:20},data:g},e.createElement(p,{dataKey:"name"}),e.createElement(f,null),e.createElement(_,{dataKey:"uv"},e.createElement(n,{...a}))))},args:{...h(o),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},l={render:a=>{const[r,t]=[600,300];return e.createElement(u,{width:"100%",height:t},e.createElement(y,{width:r,height:t,margin:{top:20,right:20,bottom:20,left:20},data:g},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(p,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...a}))))},args:{...h(o),dataKey:"uv",position:"top",offset:5}},c={render:a=>e.createElement(X,{width:500,height:400,data:N},e.createElement(Y,null),e.createElement(M,{dataKey:"subject"}),e.createElement(U,null),e.createElement(q,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(n,{...a}))),args:{...h(o),dataKey:"A",position:"outside",clockWise:!0}},d={render:a=>{const r=O=>{const{x:j,y:F,width:V,value:v}=O;if(v==null)return null;const x=Number(j)+Number(V)/2,w=Number(F)-14;return e.createElement("g",null,e.createElement("circle",{cx:x,cy:w,r:10,fill:"#8884d8"}),e.createElement("text",{x,y:w,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},v))},[t,s]=[600,300];return e.createElement(u,{width:"100%",height:s},e.createElement(y,{width:t,height:s,margin:{top:30,right:20,bottom:20,left:20},data:g},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(p,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"pv",fill:"#82ca9d"},e.createElement(n,{...a,content:r}))))},args:{...h(o),dataKey:"pv"}},m={render:a=>{const[r,t]=[600,300];return e.createElement(u,{width:"100%",height:t},e.createElement(y,{width:r,height:t,margin:{top:20,right:20,bottom:20,left:20},data:g},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(p,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(n,{...a,formatter:s=>s!=null?`${s} visitors`:""}))))},args:{...h(o),dataKey:"uv",position:"top"}},Z=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"];var L,C,E;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Line dataKey="uv">
            <LabelList {...args} />
          </Line>
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    // This API story should have explicit values for all props
    dataKey: 'uv',
    position: 'top',
    offset: 5,
    angle: 0,
    textBreakAll: false,
    zIndex: 2000
  }
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var K,k,R;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <BarChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Bar dataKey="uv" fill="#8884d8">
            <LabelList {...args} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'uv',
    position: 'top',
    offset: 5
  }
}`,...(R=(k=l.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var T,B,P;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <RadarChart width={500} height={400} data={subjectData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        {/* The target component */}
        <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}>
          <LabelList {...args} />
        </Radar>
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'A',
    position: 'outside',
    clockWise: true
  }
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var G,S,I;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: Args) => {
    const renderCustomLabel = (props: LabelProps) => {
      const {
        x,
        y,
        width,
        value
      } = props;
      if (value == null) {
        return null;
      }
      const xPos = Number(x) + Number(width) / 2;
      const yPos = Number(y) - 14;
      return <g>
          <circle cx={xPos} cy={yPos} r={10} fill="#8884d8" />
          <text x={xPos} y={yPos} fill="#fff" textAnchor="middle" dominantBaseline="middle" fontSize={10}>
            {value}
          </text>
        </g>;
    };
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <BarChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 30,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component with custom content renderer */}
          <Bar dataKey="pv" fill="#82ca9d">
            <LabelList {...args} content={renderCustomLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'pv'
  }
}`,...(I=(S=d.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var W,H,D;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <BarChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component with formatter */}
          <Bar dataKey="uv" fill="#8884d8">
            <LabelList {...args} formatter={value => value != null ? \`\${value} visitors\` : ''} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'uv',
    position: 'top'
  }
}`,...(D=(H=m.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};const pe=Object.freeze(Object.defineProperty({__proto__:null,API:i,OnBarChart:l,OnRadarChart:c,WithCustomContent:d,WithFormatter:m,__namedExportsOrder:Z,default:$},Symbol.toStringTag,{value:"Module"}));export{i as A,pe as C};
