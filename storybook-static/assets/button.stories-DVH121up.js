(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`button{padding:4px 8px;border-radius:8px;color:#fff;background-color:var(--color-button-default, rgba(0, 124, 186, .95));border:none;box-shadow:none;min-height:36px;font-size:16px;display:flex;align-items:center;justify-content:center;cursor:pointer}button.text-uppercase{text-transform:uppercase}button.border{border:1px solid var(--color-button-default, rgba(0, 124, 186, .95))}button.secondary{background-color:var(--color-button-secondary, #001C29)}button.secondary.border{border:1px solid var(--color-button-secondary, #001C29)}button.outline{background-color:var(--color-button-outline);border:1px solid var(--color-button-default);color:var(--color-button-default)}button.outline:hover{background-color:var(--color-clear-button-hover)}button.outline:disabled{background-color:var(--color-button);border:1px solid var(--color-background-disabled);color:var(--color-background-disabled)}button.clear{background-color:var(--color-transparent);color:var(--color-button-default)}button.clear:hover{background-color:var(--color-clear-button-hover)}button.clear:disabled{background-color:var(--color-transparent);color:var(--color-background-disabled)}button.small{min-height:30px;min-width:30px}button.medium{min-height:36px;min-width:36px}button.large{min-height:42px;min-width:42px}.success{color:var(--color, var(--color-text-button));background-color:var(--color, var(--color-success))}.success.border{border:1px solid var(--color-success)}.success.outline{background-color:var(--color-button-outline);border:1px solid var(--color-success);color:var(--color-success)}.success.outline:hover{background-color:var(--color-clear-button-success-hover)}.success.outline:disabled{background-color:var(--color-button);border:1px solid var(--color-background-disabled);color:var(--color-background-disabled)}.success.clear{background-color:var(--color-transparent);color:var(--color-success)}.success.clear:hover{background-color:var(--color-clear-button-success-hover)}.success.clear:disabled{background-color:var(--color-transparent);color:var(--color-background-disabled)}.warning{color:var(--color, var(--color-text-button));background-color:var(--color, var(--color-warning))}.warning.border{border:1px solid var(--color-warning)}.warning.outline{background-color:var(--color-button-outline);border:1px solid var(--color-warning);color:var(--color-warning)}.warning.outline:hover{background-color:var(--color-clear-button-warning-hover)}.warning.outline:disabled{background-color:var(--color-button);border:1px solid var(--color-background-disabled);color:var(--color-background-disabled)}.warning.clear{background-color:var(--color-transparent);color:var(--color-warning)}.warning.clear:hover{background-color:var(--color-clear-button-warning-hover)}.warning.clear:disabled{background-color:var(--color-transparent);color:var(--color-background-disabled)}.error{color:var(--color, var(--color-text-button));background-color:var(--color, var(--color-error))}.error.border{border:1px solid var(--color-error)}.error.outline{background-color:var(--color-button-outline);border:1px solid var(--color-error);color:var(--color-error)}.error.outline:hover{background-color:var(--color-clear-button-error-hover)}.error.outline:disabled{background-color:var(--color-button);border:1px solid var(--color-background-disabled);color:var(--color-background-disabled)}.error.clear{background-color:var(--color-transparent);color:var(--color-error)}.error.clear:hover{background-color:var(--color-clear-button-error-hover)}.error.clear:disabled{background-color:var(--color-transparent);color:var(--color-background-disabled)}.default{color:var(#ffffff, var(--color-text-button));background-color:var(rgba(0, 124, 186, .95), var(--color-button-default))}.default.border{border:1px solid var(rgba(0, 124, 186, .95), var(--color-button-default))}.primary{color:var(#ffffff, var(--color-text-button));background-color:var(rgba(0, 124, 186, .95), var(--color-button-default))}.primary.border{border:1px solid var(rgba(0, 124, 186, .95), var(--color-button-default))}.disabled{background-color:var(--color, var(--color-background-disabled));color:var(--color, var(--color-text-disabled));cursor:not-allowed}.disabled.border{border:1px solid var(--color-background-disabled)}:disabled{background-color:var(--color, var(--color-background-disabled));color:var(--color, var(--color-text-disabled));cursor:not-allowed}.standard{color:var(--color, var(--color-text-button));background-color:var(--color, var(--color-button-default))}.standard.border{border:1px solid var(--color-button-default)}
:root{--color-success: green;--color-warning: #ffc400;--color-error: #ff0000;--color-text-disabled: lightgray;--color-background-disabled: rgba(128, 128, 128, .2);--color-button-default: rgba(0, 124, 186, .95);--color-button-secondary: #001C29;--color-text-button: white;--color-button-outline: white;--color-transparent: transparent;--color-clear-button-hover: rgba(211, 211, 211, .2);--color-clear-button-success-hover: rgba(144, 238, 144, .2);--color-clear-button-warning-hover: rgba(255, 196, 0, .2);--color-clear-button-error-hover: rgb(255, 71, 71, .2);--base-text-color: rgb(0, 28, 41);--color-info: #9747FF;--roboto: "Roboto", sans-serif;--roboto-thin: 100;--roboto-light: 300;--roboto-regular: 400;--roboto-medium: 500;--roboto-bold: 700;--roboto-black: 900;--roboto-italic: italic;--roboto-normal: normal}`)),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import{j as ee}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";function Ir({children:Rr,...qr}){const{color:Ar="primary",disabled:v,fill:Jr="solid",border:Kr,size:Qr="medium",uppercase:Xr,maxWidth:W,minWidth:F,maxHeight:M,minHeight:H,customBGColor:Yr,customColor:Zr,customBorderColor:$r,buttonClick:re}=qr;return ee.jsx("button",{style:{minWidth:F?F+"px":"",maxWidth:W?W+"px":"",minHeight:H?H+"px":"",maxHeight:M?M+"px":"",backgroundColor:Yr,color:Zr,borderColor:$r},className:[Ar,Jr,Qr,Kr?"border":"",Xr?"text-uppercase":""].join(" "),onClick:re,disabled:v||void 0,children:Rr})}Ir.__docgenInfo={description:"",methods:[],displayName:"Button"};const te={title:"Components/Button",component:Ir,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:{type:"text"},defaultValue:{summary:" "},description:"Button Text"},color:{options:["default","success","warning","error","disabled",void 0],control:{type:"select"},defaultValue:{summary:"default"},description:"Define Color: 'default', 'success', 'warning', 'error', 'disabled', undefined"},fill:{options:["solid","outline","clear",void 0],control:{type:"select"},defaultValue:{summary:"solid"}},border:{options:["true",void 0],control:{type:"select"},defaultValue:{summary:"false"}},size:{options:["small","medium","large",void 0],control:{type:"select"},defaultValue:{summary:"medium"},description:"Define Size: 'small', 'medium', 'large', undefined"},uppercase:{options:["true",void 0],control:{type:"select"},defaultValue:{summary:void 0}},minWidth:{control:{type:"number"},defaultValue:{summary:void 0}},maxWidth:{control:{type:"number"},defaultValue:{summary:void 0}},disabled:{control:{type:"boolean"},defaultValue:{summary:void 0}},customBGColor:{control:{type:"color"},defaultValue:{summary:void 0}},customColor:{control:{type:"color"},defaultValue:{summary:void 0}},customBorderColor:{control:{type:"color"},defaultValue:{summary:void 0}}},args:{buttonClick:void 0,children:"Button",size:void 0,fill:void 0,border:void 0,color:void 0,uppercase:void 0,disabled:!1,minWidth:void 0,maxWidth:void 0,customBGColor:void 0,customColor:void 0,customBorderColor:void 0}},r={args:{children:"Primary Button"}},e={args:{children:"Primary Button",color:"primary"}},o={args:{children:"Secondary Color Button",color:"secondary"}},s={args:{children:"Success Color Button",color:"success"}},a={args:{children:"Warning Color Button",color:"warning"}},t={args:{children:"Error Color Button",color:"error"}},n={args:{children:"Disabled Color Button",color:"disabled"}},c={args:{children:"Solid Fill Button",fill:"solid"}},i={args:{children:"Outline Fill Button",fill:"outline"}},l={args:{children:"No Fill Button",fill:"clear"}},d={args:{children:"Border Button",border:"true"}},u={args:{children:"Disabled Button",disabled:!0}},m={args:{children:"Small Button",size:"small"}},p={args:{children:"Medium Button",size:"medium"}},g={args:{children:"Large Button",size:"large"}},h={args:{children:"Uppercase Button",uppercase:"true"}},B={args:{children:"Max Width Button",maxWidth:400}},C={args:{children:"Min Width 400px Button",minWidth:400}},y={args:{children:"Max Height Button",maxHeight:200}},S={args:{children:"Min Height 400px Button",minHeight:200}},f={args:{children:"Custom Background Color Button",customBGColor:"#FFC0CB"}},x={args:{children:"Custom Text Color Button",customColor:"#800000"}},b={args:{children:"Custom Border Color Button",customBorderColor:"#FF4d00",border:"true"}};var D,V,z;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button'
  }
}`,...(z=(V=r.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var G,k,E;e.parameters={...e.parameters,docs:{...(G=e.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    color: 'primary'
  }
}`,...(E=(k=e.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var N,P,O;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Color Button',
    color: 'secondary'
  }
}`,...(O=(P=o.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var j,w,L;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Success Color Button',
    color: 'success'
  }
}`,...(L=(w=s.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var T,U,_;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Warning Color Button',
    color: 'warning'
  }
}`,...(_=(U=a.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var I,R,q;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Error Color Button',
    color: 'error'
  }
}`,...(q=(R=t.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,J,K;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Color Button',
    color: 'disabled'
  }
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: 'Solid Fill Button',
    fill: 'solid'
  }
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: 'Outline Fill Button',
    fill: 'outline'
  }
}`,...(rr=($=i.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,or,sr;l.parameters={...l.parameters,docs:{...(er=l.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    children: 'No Fill Button',
    fill: 'clear'
  }
}`,...(sr=(or=l.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var ar,tr,nr;d.parameters={...d.parameters,docs:{...(ar=d.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    children: 'Border Button',
    border: 'true'
  }
}`,...(nr=(tr=d.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var cr,ir,lr;u.parameters={...u.parameters,docs:{...(cr=u.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...(lr=(ir=u.parameters)==null?void 0:ir.docs)==null?void 0:lr.source}}};var dr,ur,mr;m.parameters={...m.parameters,docs:{...(dr=m.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'small'
  }
}`,...(mr=(ur=m.parameters)==null?void 0:ur.docs)==null?void 0:mr.source}}};var pr,gr,hr;p.parameters={...p.parameters,docs:{...(pr=p.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  args: {
    children: 'Medium Button',
    size: 'medium'
  }
}`,...(hr=(gr=p.parameters)==null?void 0:gr.docs)==null?void 0:hr.source}}};var Br,Cr,yr;g.parameters={...g.parameters,docs:{...(Br=g.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'large'
  }
}`,...(yr=(Cr=g.parameters)==null?void 0:Cr.docs)==null?void 0:yr.source}}};var Sr,fr,xr;h.parameters={...h.parameters,docs:{...(Sr=h.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  args: {
    children: 'Uppercase Button',
    uppercase: 'true'
  }
}`,...(xr=(fr=h.parameters)==null?void 0:fr.docs)==null?void 0:xr.source}}};var br,vr,Wr;B.parameters={...B.parameters,docs:{...(br=B.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    children: 'Max Width Button',
    maxWidth: 400
  }
}`,...(Wr=(vr=B.parameters)==null?void 0:vr.docs)==null?void 0:Wr.source}}};var Fr,Mr,Hr;C.parameters={...C.parameters,docs:{...(Fr=C.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  args: {
    children: 'Min Width 400px Button',
    minWidth: 400
  }
}`,...(Hr=(Mr=C.parameters)==null?void 0:Mr.docs)==null?void 0:Hr.source}}};var Dr,Vr,zr;y.parameters={...y.parameters,docs:{...(Dr=y.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  args: {
    children: 'Max Height Button',
    maxHeight: 200
  }
}`,...(zr=(Vr=y.parameters)==null?void 0:Vr.docs)==null?void 0:zr.source}}};var Gr,kr,Er;S.parameters={...S.parameters,docs:{...(Gr=S.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
  args: {
    children: 'Min Height 400px Button',
    minHeight: 200
  }
}`,...(Er=(kr=S.parameters)==null?void 0:kr.docs)==null?void 0:Er.source}}};var Nr,Pr,Or;f.parameters={...f.parameters,docs:{...(Nr=f.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  args: {
    children: 'Custom Background Color Button',
    customBGColor: '#FFC0CB'
  }
}`,...(Or=(Pr=f.parameters)==null?void 0:Pr.docs)==null?void 0:Or.source}}};var jr,wr,Lr;x.parameters={...x.parameters,docs:{...(jr=x.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  args: {
    children: 'Custom Text Color Button',
    customColor: '#800000'
  }
}`,...(Lr=(wr=x.parameters)==null?void 0:wr.docs)==null?void 0:Lr.source}}};var Tr,Ur,_r;b.parameters={...b.parameters,docs:{...(Tr=b.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
  args: {
    children: 'Custom Border Color Button',
    customBorderColor: '#FF4d00',
    border: 'true'
  }
}`,...(_r=(Ur=b.parameters)==null?void 0:Ur.docs)==null?void 0:_r.source}}};const ne=["Default","Primary","Secondary","Success","Warning","Error","DisabledColor","SolidFill","OutlineFill","NoFill","Border","Disabled","Small","Medium","Large","Uppercase","MaxWidth","MinWidth","MaxHeight","MinHeight","customBGColor","customColor","customBorderColor"];export{d as Border,r as Default,u as Disabled,n as DisabledColor,t as Error,g as Large,y as MaxHeight,B as MaxWidth,p as Medium,S as MinHeight,C as MinWidth,l as NoFill,i as OutlineFill,e as Primary,o as Secondary,m as Small,c as SolidFill,s as Success,h as Uppercase,a as Warning,ne as __namedExportsOrder,f as customBGColor,b as customBorderColor,x as customColor,te as default};
