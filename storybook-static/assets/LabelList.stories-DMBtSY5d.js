import{R as e}from"./iframe-CysaVPuT.js";import{g as u}from"./utils-ePvtT4un.js";import{L as o}from"./AnimatedItems-HWCD5qdq.js";import{R as h}from"./zIndexSlice-CBspyTeT.js";import{L as V}from"./LineChart-C38OP0rp.js";import{p,s as N}from"./Page-Cj8EiXz7.js";import{X as g}from"./XAxis-BHTWnpmK.js";import{Y as f}from"./YAxis-hZ4kGdBq.js";import{L as _}from"./Line-ez-HBiNN.js";import{B as y}from"./BarChart-Cf4EpQfk.js";import{C as b}from"./CartesianGrid-BVNtE_L6.js";import{B as A}from"./Bar-BOeSX_EU.js";import{R as X}from"./RadarChart-D2PayejK.js";import{P as Y}from"./PolarGrid-CHIaOP9e.js";import{P as q}from"./PolarAngleAxis-BU3HlXKO.js";import{P as M}from"./PolarRadiusAxis-lPjM74o8.js";import{R as U}from"./Radar-jYgk1MFh.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},clockWise:{description:"The parameter to calculate the view box of label in radial charts.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},content:{description:`If set a React element, the option is the customized React element of rendering each label.
If set to a function, the function is called once for each item`,table:{type:{summary:"Function | ReactNode"},category:"General"}},dataKey:{description:`Decides how to extract the value of each label from the data:
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},$={argTypes:n,component:o},i={render:a=>{const[r,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(V,{width:r,height:t,margin:{top:20,right:20,bottom:20,left:20},data:p},e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(_,{dataKey:"uv"},e.createElement(o,{...a}))))},args:{...u(n),dataKey:"uv",position:"top",offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},l={render:a=>{const[r,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:r,height:t,margin:{top:20,right:20,bottom:20,left:20},data:p},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...a}))))},args:{...u(n),dataKey:"uv",position:"top",offset:5}},c={render:a=>e.createElement(X,{width:500,height:400,data:N},e.createElement(Y,null),e.createElement(q,{dataKey:"subject"}),e.createElement(M,null),e.createElement(U,{name:"A",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6},e.createElement(o,{...a}))),args:{...u(n),dataKey:"A",position:"outside",clockWise:!0}},d={render:a=>{const r=j=>{const{x:I,y:F,width:z,value:v}=j;if(v==null)return null;const x=Number(I)+Number(z)/2,L=Number(F)-14;return e.createElement("g",null,e.createElement("circle",{cx:x,cy:L,r:10,fill:"#8884d8"}),e.createElement("text",{x,y:L,fill:"#fff",textAnchor:"middle",dominantBaseline:"middle",fontSize:10},v))},[t,s]=[600,300];return e.createElement(h,{width:"100%",height:s},e.createElement(y,{width:t,height:s,margin:{top:30,right:20,bottom:20,left:20},data:p},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"pv",fill:"#82ca9d"},e.createElement(o,{...a,content:r}))))},args:{...u(n),dataKey:"pv"}},m={render:a=>{const[r,t]=[600,300];return e.createElement(h,{width:"100%",height:t},e.createElement(y,{width:r,height:t,margin:{top:20,right:20,bottom:20,left:20},data:p},e.createElement(b,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name"}),e.createElement(f,null),e.createElement(A,{dataKey:"uv",fill:"#8884d8"},e.createElement(o,{...a,formatter:s=>s!=null?`${s} visitors`:""}))))},args:{...u(n),dataKey:"uv",position:"top"}};var C,w,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var K,R,T;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var B,P,W;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var S,k,G;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(G=(k=d.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var H,O,D;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const Z=["API","OnBarChart","OnRadarChart","WithCustomContent","WithFormatter"],ge=Object.freeze(Object.defineProperty({__proto__:null,API:i,OnBarChart:l,OnRadarChart:c,WithCustomContent:d,WithFormatter:m,__namedExportsOrder:Z,default:$},Symbol.toStringTag,{value:"Module"}));export{i as A,ge as C};
