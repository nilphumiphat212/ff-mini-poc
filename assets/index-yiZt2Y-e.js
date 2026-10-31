(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`hat`,`head`,`top`,`pants`,`shoes`,`fists`],t={common:500,rare:1200,epic:2500,legendary:5e3},n=(e,t=0,n=.11)=>({color:e,emissive:t,size:n}),r=[{id:`tactical`,name:`Tactical Ops`,rarity:`common`,color:3359061,source:`qt_swat`,names:{hat:`Combat Helmet`,head:`Visor Operator`,top:`Plate Carrier`,pants:`Tactical Cargo`,shoes:`Combat Boots`,fists:`Tactical Gloves`},hat:{shape:`helmet`,color:5069631,accent:2042167},glove:n(1120295)},{id:`street`,name:`Street Hoodie`,rarity:`common`,color:8141549,source:`qt_hoodie`,names:{hat:`Snapback`,head:`Curly Crew`,top:`Purple Hoodie`,pants:`Denim Shorts`,shoes:`Hi-Top Sneakers`,fists:`Fingerless Gloves`},hat:{shape:`cap`,color:1120295,accent:16436245},glove:n(7153881,0,.1)},{id:`summer`,name:`Beach Summer`,rarity:`common`,color:16436245,source:`qt_casual`,names:{hat:`Sun Cap`,head:`Easy Smile`,top:`Summer Tee`,pants:`Light Jeans`,shoes:`Red Runners`},hat:{shape:`cap`,color:14427686,accent:16317180}},{id:`punk`,name:`Neon Punk`,rarity:`rare`,color:15680580,source:`qt_punk`,names:{head:`Red Mohawk`,top:`Studded Vest`,pants:`Ripped Jeans`,shoes:`Punk Kicks`,fists:`Spike Bracers`},glove:n(2282478,947344,.1),addOns:{fists:[{bone:`WristL`,shape:`ring`,size:[.07,.05,.07],offset:[0,0,0],color:1120295},{bone:`WristR`,shape:`ring`,size:[.07,.05,.07],offset:[0,0,0],color:1120295}]}},{id:`riot`,name:`Pink Riot`,rarity:`rare`,color:15485081,source:`qt_punk_b`,names:{hat:`Pom Beanie`,head:`Pink Bun`,top:`Neon Crop`,pants:`Black Skinny`,shoes:`Grey Trainers`,fists:`Neon Pulse`},hat:{shape:`beanie`,color:15485081,accent:16317180},glove:n(16020150,10295117,.1)},{id:`site`,name:`Site Boss`,rarity:`rare`,color:16096779,source:`qt_worker`,names:{head:`Hard-Hat Boss`,top:`Hi-Vis Vest`,pants:`Work Trousers`,shoes:`Steel Boots`,fists:`Work Gloves`},glove:n(11817737)},{id:`farmer`,name:`Harvest Ranger`,rarity:`rare`,color:6660877,source:`qt_farmer`,names:{hat:`Straw Hat`,head:`Sunburnt Farmer`,top:`Plaid Overall`,pants:`Overall Pants`,shoes:`Field Boots`},hat:{shape:`straw`,color:15255666,accent:12131356}},{id:`explorer`,name:`Jungle Explorer`,rarity:`epic`,color:1483594,source:`qt_adventurer`,names:{hat:`Explorer Bandana`,head:`Explorer`,top:`Field Jacket + Pack`,pants:`Hiking Pants`,shoes:`Trail Boots`,fists:`Leather Gloves`},hat:{shape:`bandana`,color:1409085,accent:16317180},glove:n(7877903)},{id:`agent`,name:`Secret Agent`,rarity:`epic`,color:988970,source:`qt_suit`,names:{head:`Agent Shades`,top:`Black Suit`,pants:`Suit Trousers`,shoes:`Oxford Shoes`,fists:`Leather Gloves`},glove:n(1120295,0,.1),addOns:{head:[{bone:`Head`,shape:`box`,size:[.24,.05,.03],offset:[0,.13,.15],color:724761},{bone:`Head`,shape:`box`,size:[.26,.012,.012],offset:[0,.15,.16],color:13938487}]}},{id:`shadow_ninja`,name:`Shadow Ninja`,rarity:`legendary`,color:2042167,source:`qt_hooded`,names:{hat:`Ninja Headband`,head:`Masked Shinobi`,top:`Shinobi Garb + Scarf`,pants:`Shinobi Hakama`,shoes:`Tabi Sandals`,fists:`Hand Wraps`},hat:{shape:`bandana`,color:1120295,accent:9741240},glove:n(15067115,0,.1),addOns:{hat:[{bone:`Head`,shape:`box`,size:[.11,.05,.015],offset:[0,.2,.16],color:9741240,emissive:2042167}],head:[{bone:`Head`,shape:`box`,size:[.24,.1,.05],offset:[0,.07,.14],color:1120295}],top:[{bone:`Neck`,shape:`ring`,size:[.15,.09,.15],offset:[0,0,0],color:8330525},{bone:`Chest`,shape:`box`,size:[.08,.42,.02],offset:[.08,.02,-.17],rot:[.25,0,.15],color:8330525}]}},{id:`storm_ninja`,name:`Storm Ninja`,rarity:`legendary`,color:16347926,source:`qt_hooded`,names:{hat:`Straw Kasa`,head:`Storm Mask`,top:`Storm Garb + Scarf`,pants:`Storm Hakama`,shoes:`Storm Sandals`,fists:`Storm Wraps`},hat:{shape:`kasa`,color:14070634,accent:8138002},glove:n(16347926,8138002,.1),addOns:{head:[{bone:`Head`,shape:`box`,size:[.24,.1,.05],offset:[0,.07,.14],color:1981066}],top:[{bone:`Neck`,shape:`ring`,size:[.16,.1,.16],offset:[0,0,0],color:16347926},{bone:`Chest`,shape:`box`,size:[.09,.48,.02],offset:[-.08,0,-.17],rot:[.3,0,-.2],color:16347926}]}},{id:`king`,name:`Booyah King`,rarity:`legendary`,color:13938487,source:`qt_king`,names:{hat:`Jewel Crown`,head:`Silver King`,top:`Royal Armor + Cape`,pants:`Royal Greaves`,shoes:`Iron Sabatons`,fists:`Golden Gauntlets`},hat:{shape:`crown`,color:16436245,accent:14427686},glove:n(16436245,4008448,.12),addOns:{top:[{bone:`Chest`,shape:`box`,size:[.46,.8,.03],offset:[0,-.22,-.17],rot:[.12,0,0],color:12131356}]}}],i=new Map,a=r.map(n=>{let r={};for(let t of e){let e=n.names[t];if(!e||t===`hat`&&!n.hat&&!n.addOns?.hat||t===`fists`&&!n.glove)continue;let a=`${n.id}_${t}`,o={id:a,name:e,slot:t,setId:n.id,source:t===`hat`||t===`fists`?void 0:n.source,hat:t===`hat`?n.hat:void 0,glove:t===`fists`?n.glove:void 0,addOns:n.addOns?.[t]};i.set(a,o),r[t]=a}return{id:n.id,name:n.name,rarity:n.rarity,price:t[n.rarity],color:n.color,pieces:r}}),o=`none_hat`,s=`none_fists`;function c(e){return i.get(e)}function l(e){return[...i.values()].filter(t=>t.slot===e)}var u=[{id:`skin_original`,name:`Original`,color:null},{id:`skin_light`,name:`Light`,color:16109749},{id:`skin_medium`,name:`Medium`,color:14262374},{id:`skin_tan`,name:`Tan`,color:11565647},{id:`skin_brown`,name:`Brown`,color:9067067},{id:`skin_dark`,name:`Dark`,color:6044456}],d=[{id:`normal`,name:`Normal`,scale:[1,1,1]},{id:`round`,name:`Round`,scale:[1.12,1.02,1.1]},{id:`tall`,name:`Tall`,scale:[.94,1.14,.96]},{id:`small`,name:`Small`,scale:[.88,.88,.88]}],f=[{id:`skin_default`,name:`Factory`,pattern:`solid`,primary:16777215,secondary:16777215,emissive:0,rarity:`common`},{id:`skin_desert`,name:`Desert Camo`,pattern:`camo`,primary:14070650,secondary:9071163,emissive:0,rarity:`common`},{id:`skin_arctic`,name:`Arctic Digital`,pattern:`digital`,primary:14870768,secondary:6583435,emissive:0,rarity:`rare`},{id:`skin_jungle`,name:`Jungle Camo`,pattern:`camo`,primary:5078031,secondary:1715717,emissive:0,rarity:`rare`},{id:`skin_tiger`,name:`Tiger Stripe`,pattern:`stripes`,primary:16347926,secondary:1841431,emissive:0,rarity:`epic`},{id:`skin_carbon`,name:`Carbon Fiber`,pattern:`carbon`,primary:3621201,secondary:1120295,emissive:0,rarity:`epic`},{id:`skin_gold`,name:`Royal Gold`,pattern:`gradient`,primary:16638023,secondary:11817737,emissive:4008448,rarity:`legendary`},{id:`skin_neon`,name:`Neon Cyber`,pattern:`digital`,primary:2282478,secondary:8141549,emissive:947344,rarity:`legendary`},{id:`skin_dragon`,name:`Crimson Dragon`,pattern:`gradient`,primary:15680580,secondary:4524554,emissive:8330525,rarity:`legendary`},{id:`skin_galaxy`,name:`Galaxy Night`,pattern:`gradient`,primary:6514417,secondary:988970,emissive:3223169,rarity:`legendary`}],p=[`m4a1`,`mp40`,`m1887`];function m(e,t){let n=a.find(t=>t.id===e)??a[0];return{skinTone:t?.skinTone??`skin_original`,headShape:t?.headShape??`normal`,hat:n.pieces.hat??`none_hat`,head:n.pieces.head,top:n.pieces.top,pants:n.pieces.pants,shoes:n.pieces.shoes,fists:n.pieces.fists??`none_fists`}}var h=[`tactical`,`street`,`summer`],g=6e3,_=m(`tactical`),v={m4a1:`skin_default`,mp40:`skin_default`,m1887:`skin_default`},y={street_gold:`tactical`,chrono_cyber:`punk`,cobra_strike:`street`,alok_vip:`king`};function b(e,t){return 100+e*25+(t?300:0)}function x(e,t){if(e===`none_hat`||e===`none_fists`)return!0;let n=c(e);return!!n&&t.includes(n.setId)}function S(e,t=a.map(e=>e.id)){let n=e&&typeof e==`object`?e:{},r=e=>{let r=n[e];if(e===`hat`&&r===`none_hat`||e===`fists`&&r===`none_fists`)return r;let i=c(r);return i&&i.slot===e&&t.includes(i.setId)?r:_[e]};return{hat:r(`hat`),head:r(`head`),top:r(`top`),pants:r(`pants`),shoes:r(`shoes`),fists:r(`fists`),skinTone:u.find(e=>e.id===n.skinTone)?.id??`skin_original`,headShape:d.find(e=>e.id===n.headShape)?.id??`normal`}}function C(e){let t=e&&typeof e==`object`?e:{},n={...v};for(let e of p)n[e]=f.find(n=>n.id===t[e])?.id??`skin_default`;return n}var w=e=>u.find(t=>t.id===e)??u[0],T=e=>f.find(t=>t.id===e)??f[0];function E(e){let t=a[(e*5+3)%a.length],n=f[(e*3+1)%f.length].id;return{loadout:m(t.id),skins:{m4a1:n,mp40:n,m1887:n}}}function D(e,t){return JSON.stringify([e,t??null])}var O={low:{preset:`low`,viewDist:260,viewDistAir:300,detailDist:80,fogNear:140,fogFar:380,pixelRatio:.75,shadowMapSize:1024,botDrawDist:180},medium:{preset:`medium`,viewDist:340,viewDistAir:400,detailDist:130,fogNear:180,fogFar:520,pixelRatio:1,shadowMapSize:1024,botDrawDist:220},high:{preset:`high`,viewDist:360,viewDistAir:480,detailDist:150,fogNear:220,fogFar:600,pixelRatio:1,shadowMapSize:2048,botDrawDist:260}};function k(e){let t=typeof navigator<`u`?navigator:void 0,n=``;try{let t=e?.getExtension(`WEBGL_debug_renderer_info`);n=String(t&&e?.getParameter(t.UNMASKED_RENDERER_WEBGL)||e?.getParameter(e.RENDERER)||``)}catch{n=``}return{cores:t?.hardwareConcurrency??4,memoryGb:t?.deviceMemory??4,gpu:n.toLowerCase(),mobile:!!t&&/android|iphone|ipad|mobile/i.test(t.userAgent)}}function A(e){let t=e.gpu;return/swiftshader|llvmpipe|software|basic render/.test(t)||e.cores<=4||e.memoryGb<=4||/intel.*(uhd|hd) graphics|mali-[gt]?[0-7]\d\b|adreno.*[1-5]\d\d\b|powervr/.test(t)?`low`:e.mobile?e.cores>=8&&e.memoryGb>=8?`medium`:`low`:/nvidia|geforce|rtx|gtx|radeon rx|radeon pro|apple m\d/.test(t)&&e.memoryGb>=8?`high`:`medium`}function j(e,t){return e===`auto`?t:e}var ee=`attached`,M=1e3,N=1001,te=1002,P=1003,ne=1004,re=1005,ie=1006,ae=1007,oe=1008,se=1009,ce=1010,le=1011,ue=1012,de=1013,fe=1014,pe=1015,me=1016,he=1017,ge=1018,_e=1020,ve=35902,ye=35899,be=1021,xe=1022,Se=1023,Ce=1026,we=1027,Te=1028,Ee=1029,De=1030,Oe=1031,ke=1033,Ae=33776,je=33777,Me=33778,Ne=33779,F=35840,Pe=35841,Fe=35842,Ie=35843,I=36196,Le=37492,L=37496,Re=37488,ze=37489,Be=37490,Ve=37491,He=37808,Ue=37809,We=37810,Ge=37811,Ke=37812,qe=37813,Je=37814,Ye=37815,Xe=37816,Ze=37817,Qe=37818,$e=37819,et=37820,tt=37821,nt=36492,rt=36494,it=36495,at=36283,ot=36284,st=36285,ct=36286,lt=2200,ut=2201,dt=2202,ft=2300,pt=2301,mt=2302,ht=2303,gt=2400,_t=2401,vt=2402,yt=2500,bt=2501,xt=3200,St=`srgb`,Ct=`srgb-linear`,wt=`linear`,Tt=`srgb`,Et=7680,Dt=35044,Ot=2e3;function kt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function At(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function jt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Mt(){let e=jt(`canvas`);return e.style.display=`block`,e}var Nt={};function Pt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ft(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=Ft(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=Ft(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function It(...e){let t=e.join(` `);t in Nt||(Nt[t]=!0,R(...e))}function Lt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Rt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},zt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Bt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Vt=1234567,Ht=Math.PI/180,Ut=180/Math.PI;function Wt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bt[e&255]+Bt[e>>8&255]+Bt[e>>16&255]+Bt[e>>24&255]+`-`+Bt[t&255]+Bt[t>>8&255]+`-`+Bt[t>>16&15|64]+Bt[t>>24&255]+`-`+Bt[n&63|128]+Bt[n>>8&255]+`-`+Bt[n>>16&255]+Bt[n>>24&255]+Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]).toLowerCase()}function Gt(e,t,n){return Math.max(t,Math.min(n,e))}function Kt(e,t){return(e%t+t)%t}function qt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Jt(e,t,n){return e===t?0:(n-e)/(t-e)}function Yt(e,t,n){return(1-n)*e+n*t}function Xt(e,t,n,r){return Yt(e,t,1-Math.exp(-n*r))}function Zt(e,t=1){return t-Math.abs(Kt(e,t*2)-t)}function Qt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function $t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function en(e,t){return e+Math.floor(Math.random()*(t-e+1))}function tn(e,t){return e+Math.random()*(t-e)}function nn(e){return e*(.5-Math.random())}function rn(e){e!==void 0&&(Vt=e);let t=Vt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function an(e){return e*Ht}function on(e){return e*Ut}function sn(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function cn(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ln(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function un(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function dn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function fn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var pn={DEG2RAD:Ht,RAD2DEG:Ut,generateUUID:Wt,clamp:Gt,euclideanModulo:Kt,mapLinear:qt,inverseLerp:Jt,lerp:Yt,damp:Xt,pingpong:Zt,smoothstep:Qt,smootherstep:$t,randInt:en,randFloat:tn,randFloatSpread:nn,seededRandom:rn,degToRad:an,radToDeg:on,isPowerOfTwo:sn,ceilPowerOfTwo:cn,floorPowerOfTwo:ln,setQuaternionFromProperEuler:un,normalize:fn,denormalize:dn},B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this.z=Gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this.z=Gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hn.copy(this).projectOnVector(e),this.sub(hn)}reflect(e){return this.sub(hn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hn=new V,gn=new mn,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return It(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(_n.makeScale(e,t)),this}rotate(e){return It(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(_n.makeRotation(-e)),this}translate(e,t){return It(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(_n.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_n=new H,vn=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yn=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bn(){let e={enabled:!0,workingColorSpace:Ct,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=xn(e.r),e.g=xn(e.g),e.b=xn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Sn(e.r),e.g=Sn(e.g),e.b=Sn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?wt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return It(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return It(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ct]:{primaries:t,whitePoint:r,transfer:wt,toXYZ:vn,fromXYZ:yn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:t,whitePoint:r,transfer:Tt,toXYZ:vn,fromXYZ:yn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),e}var U=bn();function xn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Sn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Cn,wn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cn===void 0&&(Cn=jt(`canvas`)),Cn.width=e.width,Cn.height=e.height;let t=Cn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Cn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=jt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=xn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(xn(t[e]/255)*255):t[e]=xn(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Tn=0,En=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tn++}),this.uuid=Wt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Dn(r[t].image)):e.push(Dn(r[t]))}else e=Dn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Dn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?wn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var On=0,kn=new V,An=class e extends zt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=N,i=N,a=ie,o=oe,s=Se,c=se,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:On++}),this.uuid=Wt(),this.name=``,this.source=new En(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kn).x}get height(){return this.source.getSize(kn).y}get depth(){return this.source.getSize(kn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case M:e.x-=Math.floor(e.x);break;case N:e.x=e.x<0?0:1;break;case te:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case M:e.y-=Math.floor(e.y);break;case N:e.y=e.y<0?0:1;break;case te:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null,An.DEFAULT_MAPPING=300,An.DEFAULT_ANISOTROPY=1;var jn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this.z=Gt(this.z,e.z,t.z),this.w=Gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this.z=Gt(this.z,e,t),this.w=Gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mn=class extends zt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new jn(0,0,e,t),this.scissorTest=!1,this.viewport=new jn(0,0,e,t),this.textures=[];let r=new An({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ie,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new En(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nn=class extends Mn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pn=class extends An{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=P,this.minFilter=P,this.wrapR=N,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Fn=class extends An{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=P,this.minFilter=P,this.wrapR=N,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},W=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/In.setFromMatrixColumn(e,0).length(),i=1/In.setFromMatrixColumn(e,1).length(),a=1/In.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rn,e,zn)}lookAt(e,t,n){let r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Bn.crossVectors(n,Hn),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Bn.crossVectors(n,Hn)),Bn.normalize(),Vn.crossVectors(Hn,Bn),r[0]=Bn.x,r[4]=Vn.x,r[8]=Hn.x,r[1]=Bn.y,r[5]=Vn.y,r[9]=Hn.y,r[2]=Bn.z,r[6]=Vn.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=In.set(r[0],r[1],r[2]).length(),o=In.set(r[4],r[5],r[6]).length(),s=In.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ln.copy(this);let c=1/a,l=1/o,u=1/s;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=l,Ln.elements[5]*=l,Ln.elements[6]*=l,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ot,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ot,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},In=new V,Ln=new W,Rn=new V(0,0,0),zn=new V(1,1,1),Bn=new V,Vn=new V,Hn=new V,Un=new W,Wn=new mn,Gn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Gt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wn.setFromEuler(this),this.setFromQuaternion(Wn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER=`XYZ`;var Kn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},qn=0,Jn=new V,Yn=new mn,Xn=new W,Zn=new V,Qn=new V,$n=new V,er=new mn,tr=new V(1,0,0),nr=new V(0,1,0),rr=new V(0,0,1),ir={type:`added`},ar={type:`removed`},or={type:`childadded`,child:null},sr={type:`childremoved`,child:null},cr=class e extends zt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qn++}),this.uuid=Wt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Gn,r=new mn,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new W},normalMatrix:{value:new H}}),this.matrix=new W,this.matrixWorld=new W,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(tr,e)}rotateY(e){return this.rotateOnAxis(nr,e)}rotateZ(e){return this.rotateOnAxis(rr,e)}translateOnAxis(e,t){return Jn.copy(e).applyQuaternion(this.quaternion),this.position.add(Jn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tr,e)}translateY(e){return this.translateOnAxis(nr,e)}translateZ(e){return this.translateOnAxis(rr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zn.copy(e):Zn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Qn,Zn,this.up):Xn.lookAt(Zn,Qn,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(Xn),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ir),or.child=e,this.dispatchEvent(or),or.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ar),sr.child=e,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ir),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,$n),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,er,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};cr.DEFAULT_UP=new V(0,1,0),cr.DEFAULT_MATRIX_AUTO_UPDATE=!0,cr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lr=class extends cr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ur={type:`move`},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ur)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},mr={h:0,s:0,l:0};function hr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,U.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=U.workingColorSpace){return this.r=e,this.g=t,this.b=n,U.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=U.workingColorSpace){if(e=Kt(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=hr(i,r,e+1/3),this.g=hr(i,r,e),this.b=hr(i,r,e-1/3)}return U.colorSpaceToWorking(this,r),this}setStyle(e,t=St){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=fr[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return U.workingToColorSpace(gr.copy(this),e),Math.round(Gt(gr.r*255,0,255))*65536+Math.round(Gt(gr.g*255,0,255))*256+Math.round(Gt(gr.b*255,0,255))}getHexString(e=St){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=U.workingColorSpace){U.workingToColorSpace(gr.copy(this),t);let n=gr.r,r=gr.g,i=gr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=U.workingColorSpace){return U.workingToColorSpace(gr.copy(this),t),e.r=gr.r,e.g=gr.g,e.b=gr.b,e}getStyle(e=St){U.workingToColorSpace(gr.copy(this),e);let t=gr.r,n=gr.g,r=gr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(mr);let n=Yt(pr.h,mr.h,t),r=Yt(pr.s,mr.s,t),i=Yt(pr.l,mr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gr=new G;G.NAMES=fr;var _r=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new G(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vr=class extends cr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yr=new V,br=new V,xr=new V,Sr=new V,Cr=new V,wr=new V,Tr=new V,Er=new V,Dr=new V,Or=new V,kr=new jn,Ar=new jn,jr=new jn,Mr=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yr.subVectors(e,t),r.cross(yr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){yr.subVectors(r,t),br.subVectors(n,t),xr.subVectors(e,t);let a=yr.dot(yr),o=yr.dot(br),s=yr.dot(xr),c=br.dot(br),l=br.dot(xr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Sr)!==null&&Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Sr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Sr.x),s.addScaledVector(a,Sr.y),s.addScaledVector(o,Sr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return kr.setScalar(0),Ar.setScalar(0),jr.setScalar(0),kr.fromBufferAttribute(e,t),Ar.fromBufferAttribute(e,n),jr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(kr,i.x),a.addScaledVector(Ar,i.y),a.addScaledVector(jr,i.z),a}static isFrontFacing(e,t,n,r){return yr.subVectors(n,t),br.subVectors(e,t),yr.cross(br).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yr.subVectors(this.c,this.b),br.subVectors(this.a,this.b),yr.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Cr.subVectors(r,n),wr.subVectors(i,n),Er.subVectors(e,n);let s=Cr.dot(Er),c=wr.dot(Er);if(s<=0&&c<=0)return t.copy(n);Dr.subVectors(e,r);let l=Cr.dot(Dr),u=wr.dot(Dr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Cr,a);Or.subVectors(e,i);let f=Cr.dot(Or),p=wr.dot(Or);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(wr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Tr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Tr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Cr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Fr):Fr.fromBufferAttribute(r,t),Fr.applyMatrix4(e.matrixWorld),this.expandByPoint(Fr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fr),Fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),Wr.subVectors(this.max,Ur),Lr.subVectors(e.a,Ur),Rr.subVectors(e.b,Ur),zr.subVectors(e.c,Ur),Br.subVectors(Rr,Lr),Vr.subVectors(zr,Rr),Hr.subVectors(Lr,zr);let t=[0,-Br.z,Br.y,0,-Vr.z,Vr.y,0,-Hr.z,Hr.y,Br.z,0,-Br.x,Vr.z,0,-Vr.x,Hr.z,0,-Hr.x,-Br.y,Br.x,0,-Vr.y,Vr.x,0,-Hr.y,Hr.x,0];return!qr(t,Lr,Rr,zr,Wr)||(t=[1,0,0,0,1,0,0,0,1],!qr(t,Lr,Rr,zr,Wr))?!1:(Gr.crossVectors(Br,Vr),t=[Gr.x,Gr.y,Gr.z],qr(t,Lr,Rr,zr,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pr=[new V,new V,new V,new V,new V,new V,new V,new V],Fr=new V,Ir=new Nr,Lr=new V,Rr=new V,zr=new V,Br=new V,Vr=new V,Hr=new V,Ur=new V,Wr=new V,Gr=new V,Kr=new V;function qr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Kr.fromArray(e,a);let o=i.x*Math.abs(Kr.x)+i.y*Math.abs(Kr.y)+i.z*Math.abs(Kr.z),s=t.dot(Kr),c=n.dot(Kr),l=r.dot(Kr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Jr=new V,Yr=new B,Xr=0,K=class extends zt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Dt,this.updateRanges=[],this.gpuType=pe,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix4(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyNormalMatrix(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.transformDirection(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Zr=class extends K{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Qr=class extends K{constructor(e,t,n){super(new Uint32Array(e),t,n)}},$r=class extends K{constructor(e,t,n){super(new Float32Array(e),t,n)}},ei=new Nr,ti=new V,ni=new V,ri=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ei.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ti.subVectors(e,this.center);let t=ti.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ti,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ni.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ti.copy(e.center).add(ni)),this.expandByPoint(ti.copy(e.center).sub(ni))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ii=0,ai=new W,oi=new cr,si=new V,ci=new Nr,li=new Nr,ui=new V,di=class e extends zt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ii++}),this.uuid=Wt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(kt(e)?Qr:Zr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return oi.lookAt(e),oi.updateMatrix(),this.applyMatrix4(oi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new $r(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ci.setFromBufferAttribute(n),this.morphTargetsRelative?(ui.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(ui),ui.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(ui)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];li.setFromBufferAttribute(n),this.morphTargetsRelative?(ui.addVectors(ci.min,li.min),ci.expandByPoint(ui),ui.addVectors(ci.max,li.max),ci.expandByPoint(ui)):(ci.expandByPoint(li.min),ci.expandByPoint(li.max))}ci.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ui.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ui));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ui.fromBufferAttribute(a,t),o&&(si.fromBufferAttribute(e,t),ui.add(si)),r=Math.max(r,n.distanceToSquared(ui))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new K(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new K(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ui.fromBufferAttribute(e,t),ui.normalize(),e.setXYZ(t,ui.x,ui.y,ui.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new K(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},fi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Dt,this.updateRanges=[],this.version=0,this.uuid=Wt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pi=new V,mi=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),i=fn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Pt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new K(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hi=new V,gi=new V,_i=new H,vi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hi.subVectors(n,t).cross(gi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_i.getNormalMatrix(e),r=this.coplanarPoint(hi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yi=0,bi=class extends zt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yi++}),this.uuid=Wt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Et,this.stencilZFail=Et,this.stencilZPass=Et,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new vi().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},xi=new V,Si=new V,Ci=new V,wi=new V,Ti=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Si.copy(e).add(t).multiplyScalar(.5),Ci.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Si);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ci),o=wi.dot(this.direction),s=-wi.dot(Ci),c=wi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Si).addScaledVector(Ci,d),f}intersectSphere(e,t){if(e.radius<0)return null;xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),r=xi.dot(xi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,te=C/w,P=1/w,ne=T-N*D,re=E-te*D,ie=O-N*A,ae=k-te*A,oe=j-N*M,se=ee-te*M,ce=oe*ae-se*ie,le=ne*se-re*oe,ue=ie*re-ae*ne;if(r){if(ce<0||le<0||ue<0)return null}else if((ce<0||le<0||ue<0)&&(ce>0||le>0||ue>0))return null;let de=ce+le+ue;if(de===0)return null;let fe=P*(ce*D+le*A+ue*M);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ei=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Di=new W,Oi=new Ti,ki=new ri,Ai=new V,ji=new V,Mi=new V,Ni=new V,Pi=new V,Fi=new V,Ii=new V,Li=new V,q=class extends cr{constructor(e=new di,t=new Ei){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Fi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Pi.fromBufferAttribute(s,e),a?Fi.addScaledVector(Pi,r):Fi.addScaledVector(Pi.sub(t),r))}t.add(Fi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere),ki.applyMatrix4(i),Oi.copy(e.ray).recast(e.near),!(ki.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(ki,Ai)===null||Oi.origin.distanceToSquared(Ai)>(e.far-e.near)**2))&&(Di.copy(i).invert(),Oi.copy(e.ray).applyMatrix4(Di),(n.boundingBox===null||Oi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=zi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=zi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=zi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=zi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Li.copy(s),Li.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Li);return l<n.near||l>n.far?null:{distance:l,point:Li.clone(),object:e}}function zi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ji),e.getVertexPosition(c,Mi),e.getVertexPosition(l,Ni);let u=Ri(e,t,n,r,ji,Mi,Ni,Ii);if(u){let e=new V;Mr.getBarycoord(Ii,ji,Mi,Ni,e),i&&(u.uv=Mr.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=Mr.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=Mr.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Mr.getNormal(ji,Mi,Ni,t.normal),u.face=t,u.barycoord=e}return u}var Bi=new jn,Vi=new jn,Hi=new jn,Ui=new jn,Wi=new W,Gi=new V,Ki=new ri,qi=new W,Ji=new Ti,Yi=class extends q{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=ee,this.bindMatrix=new W,this.bindMatrixInverse=new W,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nr),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Gi),this.boundingBox.expandByPoint(Gi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Gi),this.boundingSphere.expandByPoint(Gi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(r),e.ray.intersectsSphere(Ki)!==!1&&(qi.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(qi),(this.boundingBox===null||Ji.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ji)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new jn,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():R(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Vi.fromBufferAttribute(r.attributes.skinIndex,e),Hi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Bi.copy(t),t.set(0,0,0,0)):(Bi.set(...t,1),t.set(0,0,0)),Bi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Hi.getComponent(e);if(r!==0){let i=Vi.getComponent(e);Wi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Ui.copy(Bi).applyMatrix4(Wi),r)}}return t.isVector4&&(t.w=Bi.w),t.applyMatrix4(this.bindMatrixInverse)}},Xi=class extends cr{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Zi=class extends An{constructor(e=null,t=1,n=1,r,i,a,o,s,c=P,l=P,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qi=new W,$i=new W,ea=class e{constructor(e=[],t=[]){this.uuid=Wt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){R(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new W)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new W;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:$i;Qi.multiplyMatrices(i,t[r]),Qi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Zi(t,e,e,Se,pe);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(R(`Skeleton: No bone found with UUID:`,r),i=new Xi),this.bones.push(i),this.boneInverses.push(new W().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},ta=class extends K{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},na=new W,ra=new W,ia=[],aa=new Nr,oa=new W,sa=new q,ca=new ri,la=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,oa)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,na),aa.copy(e.boundingBox).applyMatrix4(na),this.boundingBox.union(aa)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,na),ca.copy(e.boundingSphere).applyMatrix4(na),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,na),ra.multiplyMatrices(n,na),sa.matrixWorld=ra,sa.raycast(e,ia);for(let e=0,n=ia.length;e<n;e++){let n=ia[e];n.instanceId=i,n.object=this,t.push(n)}ia.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zi(new Float32Array(r*this.count),r,this.count,Te,pe));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ua=new ri,da=new B(.5,.5),fa=new V,pa=class{constructor(e=new vi,t=new vi,n=new vi,r=new vi,i=new vi,a=new vi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ot,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ua.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ua.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ua)}intersectsSprite(e){return ua.center.set(0,0,0),ua.radius=.7071067811865476+da.distanceTo(e.center),ua.applyMatrix4(e.matrixWorld),this.intersectsSphere(ua)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ma=class extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ha=new V,ga=new V,_a=new W,va=new Ti,ya=new ri,ba=new V,xa=new V,Sa=class extends cr{constructor(e=new di,t=new ma){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ha.fromBufferAttribute(t,e-1),ga.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ha.distanceTo(ga);e.setAttribute(`lineDistance`,new $r(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),ya.radius+=i,e.ray.intersectsSphere(ya)===!1)return;_a.copy(r).invert(),va.copy(e.ray).applyMatrix4(_a);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ca(this,e,va,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ca(this,e,va,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ca(this,e,va,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ca(this,e,va,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ca(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ha.fromBufferAttribute(s,i),ga.fromBufferAttribute(s,a),n.distanceSqToSegment(ha,ga,ba,xa)>r)return;ba.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ba);if(!(c<t.near||c>t.far))return{distance:c,point:xa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var wa=new V,Ta=new V,Ea=class extends Sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)wa.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+wa.distanceTo(Ta);e.setAttribute(`lineDistance`,new $r(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Da=class extends Sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},Oa=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ka=new W,Aa=new Ti,ja=new ri,Ma=new V,Na=class extends cr{constructor(e=new di,t=new Oa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),ja.radius+=i,e.ray.intersectsSphere(ja)===!1)return;ka.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(ka);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ma.fromBufferAttribute(l,n),Pa(Ma,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ma.fromBufferAttribute(l,a),Pa(Ma,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Pa(e,t,n,r,i,a,o){let s=Aa.distanceSqToPoint(e);if(s<n){let n=new V;Aa.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fa=class extends An{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ia=class extends An{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},La=class extends An{constructor(e,t,n=fe,r,i,a,o=P,s=P,c,l=Ce,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new En(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ra=class extends La{constructor(e,t=fe,n=301,r,i,a=P,o=P,s,c=Ce){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},za=class extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},J=class e extends di{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new $r(c,3)),this.setAttribute(`normal`,new $r(l,3)),this.setAttribute(`uv`,new $r(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Y=class e extends di{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new $r(u,3)),this.setAttribute(`normal`,new $r(d,3)),this.setAttribute(`uv`,new $r(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ba=class e extends Y{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Va=class e extends di{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new $r(i,3)),this.setAttribute(`normal`,new $r(i.slice(),3)),this.setAttribute(`uv`,new $r(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ha=class e extends Va{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ua=class e extends Va{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Wa=class e extends di{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new $r(p,3)),this.setAttribute(`normal`,new $r(m,3)),this.setAttribute(`uv`,new $r(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ga=class e extends di{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new $r(p,3)),this.setAttribute(`normal`,new $r(m,3)),this.setAttribute(`uv`,new $r(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ka(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ja(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ja(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function qa(e){let t={};for(let n=0;n<e.length;n++){let r=Ka(e[n]);for(let e in r)t[e]=r[e]}return t}function Ja(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ya(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Xa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:U.workingColorSpace}var Za={clone:Ka,merge:qa},Qa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$a=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,eo=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qa,this.fragmentShader=$a,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ka(e.uniforms),this.uniformsGroups=Ya(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new jn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new W().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},to=class extends eo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},no=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ro=class extends no{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new G(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new G(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new G(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},io=class extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ao=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=xt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oo=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function so(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function co(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function lo(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function uo(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function fo(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var po=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},mo=class extends po{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gt,endingEnd:gt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case _t:i=e,o=2*t-n;break;case vt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case _t:a=e,s=2*n-t;break;case vt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ho=class extends po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},go=class extends po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_o=class extends po{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=bo(n,t,g,y,r);i[p]=vo(x,o,_,b,m)}return i}};function vo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function yo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function bo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=vo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=yo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var xo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),co(e.settings)&&(n.settings={inTangents:so(e.settings.inTangents,Array),outTangents:so(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ft:t=this.InterpolantFactoryMethodDiscrete;break;case pt:t=this.InterpolantFactoryMethodLinear;break;case mt:t=this.InterpolantFactoryMethodSmooth;break;case ht:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ft;case this.InterpolantFactoryMethodLinear:return pt;case this.InterpolantFactoryMethodSmooth:return mt;case this.InterpolantFactoryMethodBezier:return ht}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;co(this.settings)&&(So(this.settings.inTangents,e),So(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&At(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===mt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,co(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function So(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}xo.prototype.ValueTypeName=``,xo.prototype.TimeBufferType=Float32Array,xo.prototype.ValueBufferType=Float32Array,xo.prototype.DefaultInterpolation=pt;var Co=class extends xo{constructor(e,t,n){super(e,t,n)}};Co.prototype.ValueTypeName=`bool`,Co.prototype.ValueBufferType=Array,Co.prototype.DefaultInterpolation=ft,Co.prototype.InterpolantFactoryMethodLinear=void 0,Co.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}};wo.prototype.ValueTypeName=`color`;var To=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}};To.prototype.ValueTypeName=`number`;var Eo=class extends po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)mn.slerpFlat(i,0,a,c-o,a,c,s);return i}},Do=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}};Do.prototype.ValueTypeName=`quaternion`,Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends xo{constructor(e,t,n){super(e,t,n)}};Oo.prototype.ValueTypeName=`string`,Oo.prototype.ValueBufferType=Array,Oo.prototype.DefaultInterpolation=ft,Oo.prototype.InterpolantFactoryMethodLinear=void 0,Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}};ko.prototype.ValueTypeName=`vector`;var Ao=class{constructor(e=``,t=-1,n=[],r=yt){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Wt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Mo(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(xo.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=lo(o);o=uo(o,1,c),s=uo(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new To(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function jo(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return To;case`vector`:case`vector2`:case`vector3`:case`vector4`:return ko;case`color`:return wo;case`quaternion`:return Do;case`bool`:case`boolean`:return Co;case`string`:return Oo}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Mo(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=jo(e.type);if(e.times===void 0){let t=[],n=[];fo(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),co(e.settings)&&(n.settings={inTangents:so(e.settings.inTangents,Float32Array),outTangents:so(e.settings.outTangents,Float32Array)}),n}var No={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Po(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Po(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Po(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Fo=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Io=class{constructor(e){this.manager=e===void 0?Fo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Io.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Lo={},Ro=class extends Error{constructor(e,t){super(e),this.response=t}},zo=class extends Io{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=No.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Lo[e]!==void 0){Lo[e].push({onLoad:t,onProgress:n,onError:r});return}Lo[e]=[],Lo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&R(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Lo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Ro(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{No.add(`file:${e}`,t);let n=Lo[e];delete Lo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Lo[e];if(n===void 0)throw this.manager.itemError(e),t;delete Lo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Bo=new WeakMap,Vo=class extends Io{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=No.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Bo.get(a);e===void 0&&(e=[],Bo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=jt(`img`);function s(){l(),t&&t(this);let n=Bo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Bo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),No.remove(`image:${e}`);let n=Bo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Bo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),No.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Ho=class extends Io{constructor(e){super(e)}load(e,t,n,r){let i=new An,a=new Vo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Uo=class extends cr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wo=class extends Uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(cr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Go=new W,Ko=new V,qo=new V,Jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=se,this.map=null,this.mapPass=null,this.matrix=new W,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new jn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ko),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Go,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yo=new V,Xo=new mn,Zo=new V,Qo=class extends cr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new W,this.projectionMatrix=new W,this.projectionMatrixInverse=new W,this.coordinateSystem=Ot,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yo,Xo,Zo),Zo.x===1&&Zo.y===1&&Zo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,Xo,Zo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yo,Xo,Zo),Zo.x===1&&Zo.y===1&&Zo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,Xo,Zo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$o=new V,es=new B,ts=new B,ns=class extends Qo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ut*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ht*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ut*2*Math.atan(Math.tan(Ht*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$o.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($o.x,$o.y).multiplyScalar(-e/$o.z),$o.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($o.x,$o.y).multiplyScalar(-e/$o.z)}getViewSize(e,t){return this.getViewBounds(e,es,ts),t.subVectors(ts,es)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ht*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rs=class extends Jo{constructor(){super(new ns(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ut*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},is=class extends Uo{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(cr.DEFAULT_UP),this.updateMatrix(),this.target=new cr,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new rs}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},as=class extends Jo{constructor(){super(new ns(90,1,.5,500)),this.isPointLightShadow=!0}},os=class extends Uo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new as}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ss=class extends Qo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cs=class extends Jo{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(cr.DEFAULT_UP),this.updateMatrix(),this.target=new cr,this.shadow=new cs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},us=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ds=new WeakMap,fs=class extends Io{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&R(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&R(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=No.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{ds.has(a)===!0?(r&&r(ds.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return No.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),ds.set(s,t),No.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});No.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ps=-90,ms=1,hs=class extends cr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ns(ps,ms,e,t);r.layers=this.layers,this.add(r);let i=new ns(ps,ms,e,t);i.layers=this.layers,this.add(i);let a=new ns(ps,ms,e,t);a.layers=this.layers,this.add(a);let o=new ns(ps,ms,e,t);o.layers=this.layers,this.add(o);let s=new ns(ps,ms,e,t);s.layers=this.layers,this.add(s);let c=new ns(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},gs=class extends ns{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},_s=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vs.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vs(){this._document.hidden===!1&&this.reset()}var ys=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){mn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;mn.multiplyQuaternionsFlat(e,a,e,t,e,n),mn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},bs=`\\[\\]\\.:\\/`,xs=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ss=`[^\\[\\]\\.:\\/]`,Cs=`[^`+bs.replace(`\\.`,``)+`]`,ws=`((?:WC+[\\/:])*)`.replace(`WC`,Ss),Ts=`(WCOD+)?`.replace(`WCOD`,Cs),Es=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ss),Ds=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ss),Os=RegExp(`^`+ws+Ts+Es+Ds+`$`),ks=[`material`,`materials`,`bones`,`map`],As=class{constructor(e,t,n){let r=n||js.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},js=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(xs,``)}static parseTrackName(e){let t=Os.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ks.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};js.Composite=As,js.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},js.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},js.prototype.GetterByBindingType=[js.prototype._getValue_direct,js.prototype._getValue_array,js.prototype._getValue_arrayElement,js.prototype._getValue_toArray],js.prototype.SetterByBindingTypeAndVersioning=[[js.prototype._setValue_direct,js.prototype._setValue_direct_setNeedsUpdate,js.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[js.prototype._setValue_array,js.prototype._setValue_array_setNeedsUpdate,js.prototype._setValue_array_setMatrixWorldNeedsUpdate],[js.prototype._setValue_arrayElement,js.prototype._setValue_arrayElement_setNeedsUpdate,js.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[js.prototype._setValue_fromArray,js.prototype._setValue_fromArray_setNeedsUpdate,js.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ms=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:gt,endingEnd:gt};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ut,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;r<0||n===0?t=0:(this._startTime=null,t=n*r)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case bt:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case yt:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===dt;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this._loopCount=i,this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=_t,r.endingEnd=_t):(r.endingStart=e?this.zeroSlopeAtStart?_t:gt:vt,r.endingEnd=t?this.zeroSlopeAtEnd?_t:gt:vt)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},Ns=new Float32Array(1),Ps=class extends zt{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)++u.referenceCount,a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new ys(js.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ho(new Float32Array(2),new Float32Array(2),1,Ns),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?Ao.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?yt:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new Ms(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?Ao.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Fs(e,t,n,r){let i=Is(r);switch(n){case be:return e*t;case Te:return e*t/i.components*i.byteLength;case Ee:return e*t/i.components*i.byteLength;case De:return e*t*2/i.components*i.byteLength;case Oe:return e*t*2/i.components*i.byteLength;case xe:return e*t*3/i.components*i.byteLength;case Se:return e*t*4/i.components*i.byteLength;case ke:return e*t*4/i.components*i.byteLength;case Ae:case je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Me:case Ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pe:case Ie:return Math.max(e,16)*Math.max(t,8)/4;case F:case Fe:return Math.max(e,8)*Math.max(t,8)/2;case I:case Le:case Re:case ze:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case L:case Be:case Ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case He:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case We:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ke:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case qe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Je:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ze:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Qe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case $e:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case et:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case tt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case nt:case rt:case it:return Math.ceil(e/4)*Math.ceil(t/4)*16;case at:case ot:return Math.ceil(e/4)*Math.ceil(t/4)*8;case st:case ct:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Is(e){switch(e){case se:case ce:return{byteLength:1,components:1};case ue:case le:case me:return{byteLength:2,components:1};case he:case ge:return{byteLength:2,components:4};case fe:case de:case pe:return{byteLength:4,components:1};case ve:case ye:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ls(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Rs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},zs={basic:{uniforms:qa([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:qa([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:qa([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:qa([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:qa([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new G(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:qa([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:qa([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:qa([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:qa([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:qa([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:qa([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:qa([Z.common,Z.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:qa([Z.lights,Z.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};zs.physical={uniforms:qa([zs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var Bs={r:0,b:0,g:0},Vs=new W,Hs=new H;Hs.set(-1,0,0,0,1,0,0,0,1);function Us(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new q(new J(1,1,1),new eo({name:`BackgroundCubeMaterial`,uniforms:Ka(zs.backgroundCube.uniforms),vertexShader:zs.backgroundCube.vertexShader,fragmentShader:zs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Vs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hs),l.material.toneMapped=U.getTransfer(i.colorSpace)!==Tt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new Wa(2,2),new eo({name:`BackgroundMaterial`,uniforms:Ka(zs.background.uniforms),vertexShader:zs.background.vertexShader,fragmentShader:zs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=U.getTransfer(i.colorSpace)!==Tt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Bs,Xa(e)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ws(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Gs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ks(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function qs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vi,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Js=4,Ys=6,Xs=20,Zs=256,Qs=new ss,$s=new G,ec=null,tc=0,nc=0,rc=!1,ic=new V,ac=new V,oc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ic}=i;ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),this._renderer.xr.enabled=rc,e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ie,minFilter:ie,generateMipmaps:!1,type:me,format:Se,colorSpace:Ct,depthBuffer:!1},r=cc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sc(r)),this._blurMaterial=dc(r,e,t),this._ggxMaterial=uc(r,e,t)}return r}_compileMaterial(e){let t=new q(new di,e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,r,i){let a=new ns(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor($s),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new J,new Ei({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy($s),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;lc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;lc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Qs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Js?n-d+Js:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,lc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Qs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,lc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Qs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];lc(t,3*l*(r>this._lodMax-Js?r-this._lodMax+Js:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Qs)}};function sc(e){let t=[],n=[],r=e,i=e-Js+1+Ys;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ac.set(1,r,n):e===1?ac.set(-n,1,-r):e===2?ac.set(-n,r,1):e===3?ac.set(-1,r,-n):e===4?ac.set(-n,-1,r):ac.set(n,r,-1),ac.toArray(l,(e*6+t)*3)}}let u=new di;u.setAttribute(`position`,new K(c,3)),u.setAttribute(`outputDirection`,new K(l,3)),n.push(new q(u,null)),r>Js&&r--}return{lodMeshes:n,sizeLods:t}}function cc(e,t,n){let r=new Nn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function lc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function uc(e,t,n){return new eo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function dc(e,t,n){return new eo({name:`SphericalGaussianBlur`,defines:{SAMPLES:Xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fc(){return new eo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pc(){return new eo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function mc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hc=class extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new J(5,5,5),i=new eo({name:`CubemapFromEquirect`,uniforms:Ka(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ie),new hs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function gc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new hc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new oc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new oc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function _c(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&It(`WebGLRenderer: `+e+` extension not supported.`),t}}}function vc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Qr:Zr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function yc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function bc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function xc(e,t,n){let r=new WeakMap,i=new jn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Pn(h,p,m,u);g.type=pe,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Sc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Cc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function wc(e,t,n,r,i,a){let o=new Nn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new di;l.setAttribute(`position`,new $r([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new $r([0,2,0,0,2,0],2));let u=new to({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new q(l,u),f=new ss(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Nn(t,n,{type:me,depthBuffer:!1,stencilBuffer:!1}),c=new Nn(t,n,{type:me,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},U.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Cc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Tc=new An,Ec=new La(1,1),Dc=new Pn,Oc=new Fn,kc=new Fa,Ac=[],jc=[],Mc=new Float32Array(16),Nc=new Float32Array(9),Pc=new Float32Array(4);function Fc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ac[i];if(a===void 0&&(a=new Float32Array(i),Ac[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ic(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Lc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Rc(e,t){let n=jc[t];n===void 0&&(n=new Int32Array(t),jc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function zc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ic(n,t))return;e.uniform2fv(this.addr,t),Lc(n,t)}}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ic(n,t))return;e.uniform3fv(this.addr,t),Lc(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ic(n,t))return;e.uniform4fv(this.addr,t),Lc(n,t)}}function Uc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ic(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Lc(n,t)}else{if(Ic(n,r))return;Pc.set(r),e.uniformMatrix2fv(this.addr,!1,Pc),Lc(n,r)}}function Wc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ic(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Lc(n,t)}else{if(Ic(n,r))return;Nc.set(r),e.uniformMatrix3fv(this.addr,!1,Nc),Lc(n,r)}}function Gc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ic(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Lc(n,t)}else{if(Ic(n,r))return;Mc.set(r),e.uniformMatrix4fv(this.addr,!1,Mc),Lc(n,r)}}function Kc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ic(n,t))return;e.uniform2iv(this.addr,t),Lc(n,t)}}function Jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ic(n,t))return;e.uniform3iv(this.addr,t),Lc(n,t)}}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ic(n,t))return;e.uniform4iv(this.addr,t),Lc(n,t)}}function Xc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ic(n,t))return;e.uniform2uiv(this.addr,t),Lc(n,t)}}function Qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ic(n,t))return;e.uniform3uiv(this.addr,t),Lc(n,t)}}function $c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ic(n,t))return;e.uniform4uiv(this.addr,t),Lc(n,t)}}function el(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ec.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ec):a=Tc,n.setTexture2D(t||a,i)}function tl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Oc,i)}function nl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||kc,i)}function rl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Dc,i)}function il(e){switch(e){case 5126:return zc;case 35664:return Bc;case 35665:return Vc;case 35666:return Hc;case 35674:return Uc;case 35675:return Wc;case 35676:return Gc;case 5124:case 35670:return Kc;case 35667:case 35671:return qc;case 35668:case 35672:return Jc;case 35669:case 35673:return Yc;case 5125:return Xc;case 36294:return Zc;case 36295:return Qc;case 36296:return $c;case 35678:case 36198:case 36298:case 36306:case 35682:return el;case 35679:case 36299:case 36307:return tl;case 35680:case 36300:case 36308:case 36293:return nl;case 36289:case 36303:case 36311:case 36292:return rl}}function al(e,t){e.uniform1fv(this.addr,t)}function ol(e,t){let n=Fc(t,this.size,2);e.uniform2fv(this.addr,n)}function sl(e,t){let n=Fc(t,this.size,3);e.uniform3fv(this.addr,n)}function cl(e,t){let n=Fc(t,this.size,4);e.uniform4fv(this.addr,n)}function ll(e,t){let n=Fc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ul(e,t){let n=Fc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function dl(e,t){let n=Fc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function fl(e,t){e.uniform1iv(this.addr,t)}function pl(e,t){e.uniform2iv(this.addr,t)}function ml(e,t){e.uniform3iv(this.addr,t)}function hl(e,t){e.uniform4iv(this.addr,t)}function gl(e,t){e.uniform1uiv(this.addr,t)}function _l(e,t){e.uniform2uiv(this.addr,t)}function vl(e,t){e.uniform3uiv(this.addr,t)}function yl(e,t){e.uniform4uiv(this.addr,t)}function bl(e,t,n){let r=this.cache,i=t.length,a=Rc(n,i);Ic(r,a)||(e.uniform1iv(this.addr,a),Lc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ec:Tc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function xl(e,t,n){let r=this.cache,i=t.length,a=Rc(n,i);Ic(r,a)||(e.uniform1iv(this.addr,a),Lc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Oc,a[e])}function Sl(e,t,n){let r=this.cache,i=t.length,a=Rc(n,i);Ic(r,a)||(e.uniform1iv(this.addr,a),Lc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||kc,a[e])}function Cl(e,t,n){let r=this.cache,i=t.length,a=Rc(n,i);Ic(r,a)||(e.uniform1iv(this.addr,a),Lc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Dc,a[e])}function wl(e){switch(e){case 5126:return al;case 35664:return ol;case 35665:return sl;case 35666:return cl;case 35674:return ll;case 35675:return ul;case 35676:return dl;case 5124:case 35670:return fl;case 35667:case 35671:return pl;case 35668:case 35672:return ml;case 35669:case 35673:return hl;case 5125:return gl;case 36294:return _l;case 36295:return vl;case 36296:return yl;case 35678:case 36198:case 36298:case 36306:case 35682:return bl;case 35679:case 36299:case 36307:return xl;case 35680:case 36300:case 36308:case 36293:return Sl;case 36289:case 36303:case 36311:case 36292:return Cl}}var Tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=il(t.type)}},El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wl(t.type)}},Dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function kl(e,t){e.seq.push(t),e.map[t.id]=t}function Al(e,t,n){let r=e.name,i=r.length;for(Ol.lastIndex=0;;){let a=Ol.exec(r),o=Ol.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){kl(n,l===void 0?new Tl(s,e,t):new El(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Dl(s),kl(n,e)),n=e}}}var jl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Al(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ml(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Nl=37297,Pl=0;function Fl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Il=new H;function Ll(e){U._getMatrix(Il,U.workingColorSpace,e);let t=`mat3( ${Il.elements.map(e=>e.toFixed(4))} )`;switch(U.getTransfer(e)){case wt:return[t,`LinearTransferOETF`];case Tt:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Rl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Fl(e.getShaderSource(t),r)}return i}function zl(e,t){let n=Ll(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Bl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Vl(e,t){let n=Bl[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Hl=new V;function Ul(){return U.getLuminanceCoefficients(Hl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Hl.x.toFixed(4)}, ${Hl.y.toFixed(4)}, ${Hl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Wl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ql).join(`
`)}function Gl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Kl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ql(e){return e!==``}function Jl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(e){return e.replace(Xl,$l)}var Ql=new Map;function $l(e,t){let n=X[t];if(n===void 0){let e=Ql.get(t);if(e!==void 0)n=X[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Zl(n)}var eu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(e){return e.replace(eu,nu)}function nu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ru(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var iu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function au(e){return iu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ou={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function su(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ou[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var cu={302:`ENVMAP_MODE_REFRACTION`};function lu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:cu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var uu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function du(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:uu[e.combine]||`ENVMAP_BLENDING_NONE`}function fu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function pu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=au(n),l=su(n),u=lu(n),d=du(n),f=fu(n),p=Wl(n),m=Gl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ql).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ql).join(`
`),_.length>0&&(_+=`
`)):(g=[ru(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ql).join(`
`),_=[ru(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:Vl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,zl(`linearToOutputTexel`,n.outputColorSpace),Ul(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ql).join(`
`)),o=Zl(o),o=Jl(o,n),o=Yl(o,n),s=Zl(s),s=Jl(s,n),s=Yl(s,n),o=tu(o),s=tu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ml(i,i.VERTEX_SHADER,y),S=Ml(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Rl(i,x,`vertex`),n=Rl(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new jl(i,h),T=Kl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Nl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var mu=0,hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gu(e),t.set(e,n)),n}},gu=class{constructor(e){this.id=mu++,this.code=e,this.usedTimes=0}};function _u(e){return e===1030||e===37490||e===36285}function vu(e,t,n,r,i,a){let o=new Kn,s=new hu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=zs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,F=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:U.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&_u(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:F,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:le&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&U.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&U.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=zs[t];n=Za.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new pu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function yu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function bu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function xu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Su(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||bu),r.length>1&&r.sort(t||xu),i.length>1&&i.sort(t||xu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Cu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Su,e.set(t,[i])):n>=r.length?(i=new Su,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function wu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new G};break;case`SpotLight`:n={position:new V,direction:new V,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Tu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Eu=0;function Du(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ou(e){let t=new wu,n=Tu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new W,o=new W;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Du);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Eu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ku(e){let t=new Ou(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Au(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ku(e),t.set(n,[a])):r>=i.length?(a=new ku(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ju=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nu=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Pu=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Fu=new W,Iu=new V,Lu=new V;function Ru(e,t,n){let r=new pa,i=new B,a=new B,o=new jn,s=new ao,c=new oo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new eo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:ju,fragmentShader:Mu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new di;m.setAttribute(`position`,new K(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new q(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Nn(i.x,i.y,{format:De,type:me,minFilter:ie,magFilter:ie,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new La(i.x,i.y,pe),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Ce,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=P,d.map.depthTexture.magFilter=P}else l.isPointLight?(d.map=new hc(i.x),d.map.depthTexture=new Ra(i.x,fe)):(d.map=new Nn(i.x,i.y),d.map.depthTexture=new La(i.x,i.y,fe)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Ce,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ie,d.map.depthTexture.magFilter=ie):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=P,d.map.depthTexture.magFilter=P);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Iu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Iu),Lu.copy(e.position),Lu.add(Nu[t]),e.up.copy(Pu[t]),e.lookAt(Lu),e.updateMatrixWorld(),n.makeTranslation(-Iu.x,-Iu.y,-Iu.z),Fu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Fu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Nn(i.x,i.y,{format:De,type:me}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function zu(e,t){function n(){let t=!1,n=new jn,r=null,i=new jn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new jn().fromArray(re),oe=new jn().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(M&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+ee-1),P!==t&&(e.activeTexture(t),P=t)}function we(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+ee-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Te(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Le(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:ze}}function Bu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):jt(`canvas`)}function g(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?wt:U.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(t,i){let a=r.get(t);if(t.isVideoTexture&&F(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ue(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let fe={[M]:e.REPEAT,[N]:e.CLAMP_TO_EDGE,[te]:e.MIRRORED_REPEAT},pe={[P]:e.NEAREST,[ne]:e.NEAREST_MIPMAP_NEAREST,[re]:e.NEAREST_MIPMAP_LINEAR,[ie]:e.LINEAR,[ae]:e.LINEAR_MIPMAP_NEAREST,[oe]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,pe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,pe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,me[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=se(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=_e(n.start,r.width,4),c=_e(t.start,r.width,4);n.start<=i+1&&a===c&&_e(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ye(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ge(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===``?null:U.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Pe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);he(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===we,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ve(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Fs(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Fs(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Fe(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function be(t,o,s){if(o.image.length!==6)return;let c=ge(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===``?null:U.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Pe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);he(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Fe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),he(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ce(i.depthTexture,0);let u=l.__webglTexture,d=Me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ce(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ce(i.__webglFramebuffer[0],t,0):Ce(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Se(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Se(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&xe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ne(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),he(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)xe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else xe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),he(c,a),xe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),he(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)xe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else xe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ke.push(l),Ae.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(i.maxSamples,e.samples)}function Ne(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function F(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(U.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Vu(e,t){function n(n,r=``){let i,a=U.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Hu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new eo({vertexShader:Hu,fragmentShader:Uu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new Wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends zt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Wu,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=null,T=new ns;T.viewport=new jn;let E=new ns;E.viewport=new jn;let D=[T,E],O=new gs,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new dr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new dr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new dr,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?we:Ce,a=_.stencil?_e:fe);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Nn(d.textureWidth,d.textureHeight,{format:Se,type:se,depthTexture:new La(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Se,type:se,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new V,te=new V;function P(e,t,n){N.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?P(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ut*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ns,o.layers.enable(n),o.viewport=new jn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new za,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let oe=new Ls;oe.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},Ku=new W,qu=new H;qu.set(-1,0,0,0,1,0,0,0,1);function Ju(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Xa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ku.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(qu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Yu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Xu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zu=null;function Qu(){return Zu===null&&(Zu=new Zi(Xu,16,16,De,me),Zu.name=`DFG_LUT`,Zu.minFilter=ie,Zu.magFilter=ie,Zu.wrapS=N,Zu.wrapT=N,Zu.generateMipmaps=!1,Zu.needsUpdate=!0),Zu}var $u=class{constructor(e={}){let{canvas:t=Mt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=se}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ke,Oe,Ee]),g=new Set([se,fe,ue,_e,he,ge]),_=new Uint32Array(4),v=new Int32Array(4),y=new V,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=St;let j=0,ee=0,M=null,N=-1,te=null,P=new jn,ne=new jn,re=null,ie=new G(0),ae=0,ce=t.width,le=t.height,de=1,pe=null,ve=null,ye=new jn(0,0,ce,le),be=new jn(0,0,ce,le),xe=!1,Se=new pa,Ce=!1,we=!1,Te=new W,De=new V,Ae=new jn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return M===null?de:1}let F=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,I,Le,L,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),z(`WebGLRenderer: `+e.message),e}function nt(){Fe=new _c(F),Fe.init(),$e=new Vu(F,Fe),Ie=new Ks(F,Fe,e,$e),I=new zu(F,Fe),Ie.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),A=F.createFramebuffer(),Le=new bc(F),L=new yu,Re=new Bu(F,Fe,I,L,Ie,$e,Le),ze=new gc(T),Be=new Rs(F),et=new Ws(F,Be),Ve=new vc(F,Be,Le,et),He=new Sc(F,Ve,Be,et,Le),Xe=new xc(F,Ie,Re),qe=new qs(L),Ue=new vu(T,ze,Fe,Ie,et,qe),We=new Ju(T,L),Ge=new Cu,Ke=new Au(Fe),Ye=new Us(T,ze,I,He,p,s),Je=new Ru(T,He,Ie),tt=new Yu(F,Le,Ie,I),Ze=new Gs(F,Fe,Le),Qe=new yc(F,Fe,Le),Le.programs=Ue.programs,T.capabilities=Ie,T.extensions=Fe,T.properties=L,T.renderLists=Ge,T.shadowMap=Je,T.state=I,T.info=Le}m!==1009&&(w=new wc(m,t.width,t.height,o,r,i));let rt=new Gu(T,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){rt.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(ce=e,le=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ce*de,le*de).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),I.viewport(P.copy(ye).multiplyScalar(de).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),I.scissor(ne.copy(be).multiplyScalar(de).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){I.setScissorTest(xe=e)},this.setOpaqueSort=function(e){pe=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Ye.dispose(),Ge.dispose(),Ke.dispose(),L.dispose(),ze.dispose(),He.dispose(),et.dispose(),tt.dispose(),Ue.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,pt),rt.removeEventListener(`sessionend`,mt),ht.stop()};function it(e){e.preventDefault(),Pt(`WebGLRenderer: Context Lost.`),E=!0}function at(){Pt(`WebGLRenderer: Context Restored.`),E=!1;let e=Le.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;nt(),Le.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function ot(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),L.remove(e)}function lt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Be.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),Ce===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,r),e.side=0,e.needsUpdate=!0,xt(e,t,r),e.side=2):xt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ke.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),Ce===!0&&qe.setGlobalState(this.clippingPlanes,t),D!==null&&Je.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new Ls;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,rt.setAnimationLoop(e),e===null?ht.stop():ht.start()},rt.addEventListener(`sessionstart`,pt),rt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Ke.get(e,C.length),x.init(t),x.state.textureUnits=Re.getTextureUnits(),C.push(x),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Se.setFromProjectionMatrix(Te,Ot,t.reversedDepth),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),b=Ge.get(e,S.length),b.init(),S.push(b),rt.enabled===!0&&rt.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,T.sortObjects)}gt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(pe,ve),Me=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Me&&Ye.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&qe.beginShadows();let i=x.state.shadowsArray;if(Je.render(i,e,t),Ce===!0&&qe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Me&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(b,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Me&&Ye.render(e),_t(b,e,t)}M!==null&&ee===0&&(Re.updateMultisampleRenderTarget(M),Re.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),et.resetDefaultState(),N=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],Re.setTextureUnits(x.state.textureUnits),Ce===!0&&qe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Se)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=He.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Se))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&b.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Ce===!0&&qe.setGlobalState(T.clippingPlanes,n),r&&I.viewport(P.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Nn(1,1,{generateMipmaps:!0,type:e?me:se,minFilter:oe,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:U.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),Me&&Ye.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Ce===!0&&qe.setGlobalState(T.clippingPlanes,r),yt(e,n,r),Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=Ue.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),wt(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=jl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=je),Re.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:U.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=x.state.lights;if(Ce===!0&&(we===!0||e!==te)){let t=e===te&&r.id===N;qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=xt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==N&&(N=r.id,w=!0),v.needsLights){let e=Tt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(F,`projectionMatrix`,e.projectionMatrix),O.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(F,De.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&O.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(F,`sunShadowMap`,y.state.sunShadowMap,Re),y.state.directionalShadowMap.length>0&&O.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,Re),y.state.spotShadowMap.length>0&&O.setValue(F,`spotShadowMap`,y.state.spotShadowMap,Re),y.state.pointShadowMap.length>0&&O.setValue(F,`pointShadowMap`,y.state.pointShadowMap,Re)),i.isSkinnedMesh){O.setOptional(F,i,`bindMatrix`),O.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(F,`boneTexture`,e.boneTexture,Re))}i.isBatchedMesh&&(O.setOptional(F,i,`batchingTexture`),O.setValue(F,`batchingTexture`,i._matricesTexture,Re),O.setOptional(F,i,`batchingIdTexture`),O.setValue(F,`batchingIdTexture`,i._indirectTexture,Re),O.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(F,`batchingColorTexture`,i._colorsTexture,Re));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Xe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Qu()),w){if(O.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Dt(k,E),a&&r.fog===!0&&We.refreshFogUniforms(k,a),We.refreshMaterialUniforms(k,r,de,le,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}jl.upload(F,Ct(v),k,Re)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(jl.upload(F,Ct(v),k,Re),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(F,`center`,i.center),O.setValue(F,`modelViewMatrix`,i.modelViewMatrix),O.setValue(F,`normalMatrix`,i.normalMatrix),O.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,S),tt.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,I.viewport(P),I.scissor(ne),I.setScissorTest(re),N=-1;return}if(o.__webglFramebuffer===void 0)Re.setupRenderTarget(e);else if(o.__hasExternalTextures)Re.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Re.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Re.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else P.copy(ye).multiplyScalar(de).floor(),ne.copy(be).multiplyScalar(de).floor(),re=xe;if(n!==0&&(r=O),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(P),I.scissor(ne),I.setScissorTest(re),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}N=-1};function At(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=M===null?null:L.get(M).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=M===null?null:L.get(M).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Lt(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Re.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Re.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Re.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Re.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,k),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&Re.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Re.setTextureCube(e,0):e.isData3DTexture?Re.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Re.setTexture2DArray(e,0):Re.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,I.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ot}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=U._getDrawingBufferColorSpace(e),t.unpackColorSpace=U._getUnpackColorSpace()}},ed={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},td=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},nd=new ss(-1,1,1,-1,0,1),rd=new class extends di{constructor(){super(),this.setAttribute(`position`,new $r([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new $r([0,2,0,0,2,0],2))}},id=class{constructor(e){this._mesh=new q(rd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nd)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},ad=class extends td{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof eo?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Za.clone(e.uniforms),this.material=new eo({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new id(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},od=class extends td{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},sd=class extends td{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},cd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:me}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ad(ed),this.copyPass.material.blending=0,this.timer=new _s}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}od!==void 0&&(r instanceof od?n=!0:r instanceof sd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},ld=class extends td{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new G}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},ud={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new G(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},dd=class e extends td{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new B(256,256):new B(e.x,e.y),this.clearColor=new G(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Nn(i,a,{type:me,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Nn(i,a,{type:me,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Nn(i,a,{type:me,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=ud;this.highPassUniforms=Za.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new eo({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Za.clone(ed.uniforms),this.blendMaterial=new eo({uniforms:this.copyUniforms,vertexShader:ed.vertexShader,fragmentShader:ed.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new G,this._oldClearAlpha=1,this._basic=new Ei,this._fsQuad=new id(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new eo({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new eo({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};dd.BlurDirectionX=new B(1,0),dd.BlurDirectionY=new B(0,1);var fd={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},pd=class extends td{constructor(){super(),this.isOutputPass=!0,this.uniforms=Za.clone(fd.uniforms),this.material=new to({name:fd.name,uniforms:this.uniforms,vertexShader:fd.vertexShader,fragmentShader:fd.fragmentShader}),this._fsQuad=new id(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},U.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},md={uniforms:{tDiffuse:{value:null},saturation:{value:1.22},contrast:{value:1.08},warmth:{value:.035},vignette:{value:.22}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float saturation;
    uniform float contrast;
    uniform float warmth;
    uniform float vignette;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(l), c.rgb, saturation);
      c.rgb = (c.rgb - 0.18) * contrast + 0.18;
      c.r += warmth; c.b -= warmth * 0.6;
      float d = distance(vUv, vec2(0.5));
      c.rgb *= 1.0 - vignette * smoothstep(0.35, 0.85, d);
      gl_FragColor = vec4(max(c.rgb, 0.0), c.a);
    }
  `},hd=class{composer;bloom;constructor(e,t,n,r,i){let a=new Nn(r,i,{type:me,samples:4});this.composer=new cd(e,a),this.composer.setPixelRatio(1),this.composer.addPass(new ld(t,n)),this.bloom=new dd(new B(r/2,i/2),.32,.55,.86),this.composer.addPass(this.bloom),this.composer.addPass(new ad(md)),this.composer.addPass(new pd)}setSize(e,t){this.composer.setSize(e,t),this.bloom.resolution.set(e/2,t/2)}render(){this.composer.render()}};function gd(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function _d(e){let t=new Map,n=new Map,r=e.clone();return vd(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function vd(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)vd(e.children[r],t.children[r],n)}var yd=class extends Io{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Ed(e)}),this.register(function(e){return new Dd(e)}),this.register(function(e){return new Id(e)}),this.register(function(e){return new Ld(e)}),this.register(function(e){return new Rd(e)}),this.register(function(e){return new kd(e)}),this.register(function(e){return new Ad(e)}),this.register(function(e){return new jd(e)}),this.register(function(e){return new Md(e)}),this.register(function(e){return new Td(e)}),this.register(function(e){return new Nd(e)}),this.register(function(e){return new Od(e)}),this.register(function(e){return new Fd(e)}),this.register(function(e){return new Pd(e)}),this.register(function(e){return new Cd(e)}),this.register(function(e){return new zd(e,Sd.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new zd(e,Sd.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Bd(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=us.extractUrlBase(e);a=us.resolveURL(t,this.path)}else a=us.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new zo(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Vd){try{a[Sd.KHR_BINARY_GLTF]=new Wd(e)}catch(e){r&&r(e);return}i=JSON.parse(a[Sd.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new _f(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case Sd.KHR_MATERIALS_UNLIT:a[t]=new wd;break;case Sd.KHR_DRACO_MESH_COMPRESSION:a[t]=new Gd(i,this.dracoLoader);break;case Sd.KHR_TEXTURE_TRANSFORM:a[t]=new Kd;break;case Sd.KHR_MESH_QUANTIZATION:a[t]=new qd;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function bd(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function xd(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var Sd={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Cd=class{constructor(e){this.parser=e,this.name=Sd.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new G(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Ct);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new ls(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new os(s),o.distance=c;break;case`spot`:o=new is(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),lf(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},wd=class{constructor(){this.name=Sd.KHR_MATERIALS_UNLIT}getMaterialType(){return Ei}extendParams(e,t,n){let r=[];e.color=new G(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Ct),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,St))}return Promise.all(r)}},Td=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ed=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new B(e,e)}return Promise.all(r)}},Dd=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_DISPERSION}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},Od=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},kd=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_SHEEN}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new G(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Ct)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,St)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Ad=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},jd=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_VOLUME}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new G().setRGB(i[0],i[1],i[2],Ct),Promise.all(r)}},Md=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_IOR}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Nd=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_SPECULAR}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new G().setRGB(i[0],i[1],i[2],Ct),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,St)),Promise.all(r)}},Pd=class{constructor(e){this.parser=e,this.name=Sd.EXT_MATERIALS_BUMP}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Fd=class{constructor(e){this.parser=e,this.name=Sd.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return xd(this.parser,e,this.name)===null?null:ro}extendMaterialParams(e,t){let n=xd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Id=class{constructor(e){this.parser=e,this.name=Sd.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Ld=class{constructor(e){this.parser=e,this.name=Sd.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Rd=class{constructor(e){this.parser=e,this.name=Sd.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},zd=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Bd=class{constructor(e){this.name=Sd.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Zd.TRIANGLES&&e.mode!==Zd.TRIANGLE_STRIP&&e.mode!==Zd.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new W,n=new V,a=new mn,s=new V(1,1,1),c=new la(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new ta(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new di,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new ta(t.array,t.itemSize,t.normalized))}cr.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Vd=`glTF`,Hd=12,Ud={JSON:1313821514,BIN:5130562},Wd=class{constructor(e){this.name=Sd.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Hd),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vd)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Hd,i=new DataView(e,Hd),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Ud.JSON){let r=new Uint8Array(e,Hd+a,t);this.content=n.decode(r)}else if(r===Ud.BIN){let n=Hd+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Gd=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Sd.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=nf[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=nf[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Qd[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Ct,n)})})}},Kd=class{constructor(){this.name=Sd.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},qd=class{constructor(){this.name=Sd.KHR_MESH_QUANTIZATION}},Jd=class extends po{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Yd=new mn,Xd=class extends Jd{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Yd.fromArray(i).normalize().toArray(i),i}},Zd={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qd={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$d={9728:P,9729:ie,9984:ne,9985:ae,9986:re,9987:oe},ef={33071:N,33648:te,10497:M},tf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nf={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},rf={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},af={CUBICSPLINE:void 0,LINEAR:pt,STEP:ft},of={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function sf(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new no({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function cf(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function lf(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function uf(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function df(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function ff(e){let t,n=e.extensions&&e.extensions[Sd.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+pf(n.attributes):e.indices+`:`+pf(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+pf(e.targets[n]);return t}function pf(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function mf(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function hf(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var gf=new W,_f=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bd,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new Ho(this.options.manager):new fs(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zo(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return cf(i,a,r),lf(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Sd.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(us.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=tf[r.type],t=Qd[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new K(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=tf[r.type],o=Qd[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new fi(f,u/s),t.cache.add(n,c)),p=new mi(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new K(f,a,d);if(r.sparse!==void 0){let t=tf.SCALAR,n=Qd[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new K(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=$d[n.magFilter]||1006,t.minFilter=$d[n.minFilter]||1008,t.wrapS=ef[n.wrapS]||1e3,t.wrapT=ef[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new An(e);t.needsUpdate=!0,n(t)}),t.load(us.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),lf(e,a),e.userData.mimeType=a.mimeType||hf(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[Sd.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[Sd.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[Sd.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Oa,bi.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new ma,bi.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return no}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[Sd.KHR_MATERIALS_UNLIT]){let e=r[Sd.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new G(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Ct),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,St)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||of.OPAQUE;if(l===of.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===of.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==Ei&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new B(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==Ei&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Ei){let e=i.emissiveFactor;o.emissive=new G().setRGB(e[0],e[1],e[2],Ct)}return i.emissiveTexture!==void 0&&a!==Ei&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,St)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),lf(n,i),t.associations.set(n,{materials:e}),i.extensions&&cf(r,n,i),n})}createUniqueName(e){let t=js.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[Sd.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return yf(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=ff(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[Sd.KHR_DRACO_MESH_COMPRESSION]?i(o):yf(new di,o,t),o.mode===Zd.TRIANGLE_STRIP?e=e.then(e=>gd(e,1)):o.mode===Zd.TRIANGLE_FAN&&(e=e.then(e=>gd(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?sf(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Zd.TRIANGLES||u.mode===Zd.TRIANGLE_STRIP||u.mode===Zd.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new Yi(l,f):new q(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===Zd.LINES)d=new Ea(l,f);else if(u.mode===Zd.LINE_STRIP)d=new Sa(l,f);else if(u.mode===Zd.LINE_LOOP)d=new Da(l,f);else if(u.mode===Zd.POINTS)d=new Na(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&df(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),lf(d,i),u.extensions&&cf(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&cf(r,c[0],i),c[0];let l=new lr;i.extensions&&cf(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new ns(pn.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new ss(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),lf(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new W;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new ea(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Ao(i,void 0,l);return lf(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,gf)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new V().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Xi:t.length>1?new lr:t.length===1?t[0]:new cr,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),lf(o,i),i.extensions&&cf(n,o,i),i.matrix!==void 0){let e=new W;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new lr;n.name&&(i.name=r.createUniqueName(n.name)),lf(i,n),n.extensions&&cf(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(_d(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof bi||e instanceof An)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}rf[i.path]===rf.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(rf[i.path]){case rf.weights:l=To;break;case rf.rotation:l=Do;break;case rf.translation:case rf.scale:l=ko;break;default:switch(n.itemSize){case 1:l=To;break;default:l=ko}}let u=r.interpolation===void 0?pt:af[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+rf[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=mf(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Do?Xd:Jd)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vf(e,t,n){let r=t.attributes,i=new Nr;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new V(t[0],t[1],t[2]),new V(a[0],a[1],a[2])),e.normalized){let t=mf(Qd[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new V,t=new V;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=mf(Qd[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new ri;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function yf(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=nf[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return U.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${U.workingColorSpace}" not supported.`),lf(e,t),vf(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:uf(e,t.targets,n)})}var bf=[{id:`m4a1`,name:`M4A1 Assault Rifle`,shortName:`M4A1`,category:`AR`,baseDamage:28,headshotMultiplier:2.2,fireRate:6.5,magSize:30,reloadTime:1.6,range:62,pellets:1,spread:.018,adsSpread:.007,sfx:`sfx_ar_shot`,moveSpeed:55},{id:`mp40`,name:`MP40 Submachine Gun`,shortName:`MP40`,category:`SMG`,baseDamage:21,headshotMultiplier:2.2,fireRate:11,magSize:28,reloadTime:1.35,range:38,pellets:1,spread:.032,adsSpread:.015,sfx:`sfx_smg_shot`,moveSpeed:75},{id:`m1887`,name:`M1887 Double Barrel`,shortName:`M1887`,category:`SG`,baseDamage:14,headshotMultiplier:1.8,fireRate:1.9,magSize:2,reloadTime:1.45,range:22,pellets:8,spread:.068,adsSpread:.042,sfx:`sfx_shotgun_shot`,moveSpeed:60},{id:`fists`,name:`Tactical Fists`,shortName:`FISTS`,category:`MELEE`,baseDamage:35,headshotMultiplier:1.5,fireRate:2.2,magSize:999,reloadTime:.1,range:3.2,pellets:1,spread:0,adsSpread:0,sfx:`sfx_smg_shot`,moveSpeed:88}],xf=[{id:`phase_1`,phase:1,waitDuration:60,shrinkDuration:80,startRadius:1100,targetRadius:850,damagePerSecond:1},{id:`phase_2`,phase:2,waitDuration:45,shrinkDuration:70,startRadius:850,targetRadius:600,damagePerSecond:2},{id:`phase_3`,phase:3,waitDuration:40,shrinkDuration:55,startRadius:600,targetRadius:380,damagePerSecond:4},{id:`phase_4`,phase:4,waitDuration:30,shrinkDuration:36,startRadius:380,targetRadius:220,damagePerSecond:7},{id:`phase_5`,phase:5,waitDuration:25,shrinkDuration:23,startRadius:220,targetRadius:110,damagePerSecond:11},{id:`phase_6`,phase:6,waitDuration:20,shrinkDuration:15,startRadius:110,targetRadius:30,damagePerSecond:16}],Sf=[{id:`bot_kelly`,name:`FF_KellyBot`,persona:`Rusher Sprinter`,accentColor:`#ffd600`,outfitId:`street_gold`,preferredWeapon:`mp40`,spawnX:-440,spawnZ:-260,aggression:.78,accuracy:.52},{id:`bot_alok`,name:`FF_AlokBot`,persona:`Tactical Support`,accentColor:`#00e5ff`,outfitId:`alok_vip`,preferredWeapon:`m4a1`,spawnX:420,spawnZ:-340,aggression:.65,accuracy:.56},{id:`bot_hayato`,name:`FF_HayatoBot`,persona:`Close-Quarters Duelist`,accentColor:`#ff3d00`,outfitId:`cobra_strike`,preferredWeapon:`m1887`,spawnX:-360,spawnZ:400,aggression:.84,accuracy:.5},{id:`bot_moco`,name:`FF_MocoBot`,persona:`Recon Marksman`,accentColor:`#a855f7`,outfitId:`chrono_cyber`,preferredWeapon:`m4a1`,spawnX:450,spawnZ:370,aggression:.6,accuracy:.58},{id:`bot_chrono`,name:`FF_ChronoBot`,persona:`Gloo Shield Master`,accentColor:`#38bdf8`,outfitId:`chrono_cyber`,preferredWeapon:`mp40`,spawnX:0,spawnZ:440,aggression:.7,accuracy:.54},{id:`bot_wukong`,name:`FF_WukongBot`,persona:`Island Flanker`,accentColor:`#22c55e`,outfitId:`cobra_strike`,preferredWeapon:`m1887`,spawnX:140,spawnZ:-180,aggression:.74,accuracy:.48}],Cf=[{id:`loot_01`,zone:`Clock Tower`,type:`weapon`,subType:`m4a1`,amount:30,x:-12,z:16},{id:`loot_02`,zone:`Clock Tower`,type:`weapon`,subType:`mp40`,amount:28,x:12,z:16},{id:`loot_03`,zone:`Clock Tower`,type:`weapon`,subType:`m1887`,amount:12,x:0,z:22},{id:`loot_04`,zone:`Clock Tower`,type:`scope`,subType:`scope_2x`,amount:1,x:-8,z:10},{id:`loot_05`,zone:`Clock Tower`,type:`scope`,subType:`scope_4x`,amount:1,x:8,z:10},{id:`loot_06`,zone:`Clock Tower`,type:`gloo`,subType:`gloo_wall`,amount:2,x:-16,z:24},{id:`loot_07`,zone:`Clock Tower`,type:`medkit`,subType:`medkit`,amount:2,x:16,z:24},{id:`loot_08`,zone:`Clock Tower`,type:`armor`,subType:`vest_lv3`,amount:150,x:0,z:-16},{id:`loot_09`,zone:`Pochinok`,type:`weapon`,subType:`m4a1`,amount:30,x:-18,z:405},{id:`loot_10`,zone:`Pochinok`,type:`weapon`,subType:`m1887`,amount:14,x:18,z:405},{id:`loot_11`,zone:`Pochinok`,type:`scope`,subType:`scope_2x`,amount:1,x:0,z:395},{id:`loot_12`,zone:`Pochinok`,type:`scope`,subType:`scope_4x`,amount:1,x:12,z:438},{id:`loot_13`,zone:`Pochinok`,type:`gloo`,subType:`gloo_wall`,amount:3,x:-14,z:438},{id:`loot_14`,zone:`Pochinok`,type:`medkit`,subType:`medkit`,amount:2,x:0,z:448},{id:`loot_15`,zone:`Peak`,type:`weapon`,subType:`m4a1`,amount:30,x:402,z:-340},{id:`loot_16`,zone:`Peak`,type:`weapon`,subType:`mp40`,amount:28,x:438,z:-340},{id:`loot_17`,zone:`Peak`,type:`scope`,subType:`scope_4x`,amount:1,x:420,z:-332},{id:`loot_18`,zone:`Peak`,type:`scope`,subType:`scope_2x`,amount:1,x:420,z:-385},{id:`loot_19`,zone:`Peak`,type:`armor`,subType:`vest_lv3`,amount:150,x:402,z:-382},{id:`loot_20`,zone:`Peak`,type:`gloo`,subType:`gloo_wall`,amount:2,x:438,z:-382},{id:`loot_21`,zone:`Factory & Hangar`,type:`weapon`,subType:`mp40`,amount:28,x:-420,z:-258},{id:`loot_22`,zone:`Factory & Hangar`,type:`weapon`,subType:`m1887`,amount:14,x:-460,z:-258},{id:`loot_23`,zone:`Factory & Hangar`,type:`scope`,subType:`scope_2x`,amount:1,x:-440,z:-252},{id:`loot_24`,zone:`Factory & Hangar`,type:`scope`,subType:`scope_4x`,amount:1,x:-440,z:-308},{id:`loot_25`,zone:`Factory & Hangar`,type:`gloo`,subType:`gloo_wall`,amount:2,x:-418,z:-302},{id:`loot_26`,zone:`Factory & Hangar`,type:`medkit`,subType:`medkit`,amount:2,x:-462,z:-302},{id:`loot_27`,zone:`Bimasakti Strip`,type:`weapon`,subType:`m4a1`,amount:30,x:-340,z:362},{id:`loot_28`,zone:`Bimasakti Strip`,type:`weapon`,subType:`m1887`,amount:12,x:-380,z:362},{id:`loot_29`,zone:`Bimasakti Strip`,type:`scope`,subType:`scope_2x`,amount:1,x:-360,z:355},{id:`loot_30`,zone:`Bimasakti Strip`,type:`gloo`,subType:`gloo_wall`,amount:3,x:-342,z:402},{id:`loot_31`,zone:`Bimasakti Strip`,type:`medkit`,subType:`medkit`,amount:2,x:-378,z:402},{id:`loot_32`,zone:`Mars Electric`,type:`weapon`,subType:`m4a1`,amount:30,x:430,z:332},{id:`loot_33`,zone:`Mars Electric`,type:`weapon`,subType:`mp40`,amount:28,x:470,z:332},{id:`loot_34`,zone:`Mars Electric`,type:`scope`,subType:`scope_4x`,amount:1,x:450,z:325},{id:`loot_35`,zone:`Mars Electric`,type:`armor`,subType:`vest_lv3`,amount:150,x:432,z:374},{id:`loot_36`,zone:`Mars Electric`,type:`gloo`,subType:`gloo_wall`,amount:2,x:468,z:374},{id:`loot_37`,zone:`Clock Tower`,type:`mushroom`,subType:`ep_mushroom`,amount:60,x:-6,z:18},{id:`loot_38`,zone:`Clock Tower`,type:`mushroom`,subType:`ep_mushroom`,amount:60,x:8,z:-6},{id:`loot_39`,zone:`Clock Tower`,type:`medkit`,subType:`medkit`,amount:2,x:-4,z:11},{id:`loot_40`,zone:`Pochinok`,type:`mushroom`,subType:`ep_mushroom`,amount:60,x:-8,z:412},{id:`loot_41`,zone:`Peak`,type:`mushroom`,subType:`ep_mushroom`,amount:60,x:412,z:-352},{id:`loot_42`,zone:`Factory & Hangar`,type:`mushroom`,subType:`ep_mushroom`,amount:60,x:-432,z:-270},{id:`loot_43`,zone:`Bimasakti Strip`,type:`mushroom`,subType:`ep_mushroom`,amount:60,x:-352,z:372},{id:`loot_44`,zone:`Mars Electric`,type:`mushroom`,subType:`ep_mushroom`,amount:60,x:442,z:342}];function wf(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Tf(e,t){let n=Math.imul(Math.floor(e*131)|0,374761393)+Math.imul(Math.floor(t*131)|0,668265263)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var Ef=[{id:`dock`,name:`Container Dockyard`,theme:`dock`,cx:-850,cz:-400},{id:`farm`,name:`Golden Plantation`,theme:`farm`,cx:700,cz:130},{id:`market`,name:`Old Town Market`,theme:`market`,cx:200,cz:-400},{id:`military`,name:`Fort Garrison`,theme:`military`,cx:950,cz:-480},{id:`church`,name:`Stonebridge Chapel`,theme:`church`,cx:-640,cz:700},{id:`observatory`,name:`Starview Hill`,theme:`observatory`,cx:260,cz:800},{id:`quarry`,name:`Redrock Quarry`,theme:`quarry`,cx:-300,cz:-650},{id:`cape`,name:`Lighthouse Cape`,theme:`cape`,cx:1e3,cz:600}],Df=[`#f4efe6`,`#fef3c7`,`#e0f2fe`,`#fde68a`,`#d1fae5`,`#fbcfe8`,`#e2e8f0`],Of=[`#d96b43`,`#0284c7`,`#dc2626`,`#d97706`,`#15803d`,`#b45309`,`#7c3aed`],kf=[`#475569`,`#334155`,`#64748b`,`#78716c`],Af=[`#eab308`,`#0284c7`,`#dc2626`,`#f97316`],Q=(e,t,n,r,i,a,o,s=!1)=>({shape:`box`,size:[r,i,a],color:o,pos:[e,t+i/2,n],solid:s}),jf=(e,t,n,r,i,a,o=!1,s=8)=>({shape:`cyl`,size:[r,i,s],color:a,pos:[e,t+i/2,n],solid:o}),Mf=(e,t,n,r,i,a,o=8)=>({shape:`cone`,size:[r,i,o],color:a,pos:[e,t+i/2,n]});function Nf(e,t,n){let r=[],i=e.cx-(n.cols-1)*n.gapX/2,a=e.cz-(n.rows-1)*n.gapZ/2,o=0;for(let s=0;s<n.rows;s++)for(let c=0;c<n.cols;c++){if(t()<n.skip)continue;let l=n.w[0]+t()*(n.w[1]-n.w[0]),u=n.d[0]+t()*(n.d[1]-n.d[0]),d=n.h[0]+t()*(n.h[1]-n.h[0]),f=(n.cols-1)/2,p=(n.rows-1)/2,m=c<f?-4:c>f?4:0,h=s<p?-4:s>p?4:0;o++,r.push({id:`bld_${e.id}_${o}`,zone:e.name,x:Math.round(i+c*n.gapX+m+(t()-.5)*3),z:Math.round(a+s*n.gapZ+h+(t()-.5)*3),width:Math.round(l*10)/10,depth:Math.round(u*10)/10,height:Math.round(d*10)/10,color:n.walls[Math.floor(t()*n.walls.length)],roofColor:n.roofs[Math.floor(t()*n.roofs.length)],isTower:n.towerEvery?o%n.towerEvery===0:!1})}return r}function Pf(e,t){let n=(t.cols-1)*t.gapX/2+14,r=(t.rows-1)*t.gapZ/2+14,i=[Q(e.cx,.02,e.cz,n*2+16,.1,7,4674921),Q(e.cx,.02,e.cz,7,.1,r*2+16,4674921),Q(e.cx,.04,e.cz,15,.1,15,9741240)];for(let t=-n;t<=n;t+=20)Math.abs(t)<9||i.push(Q(e.cx+t,0,e.cz+4.6,.25,4.6,.25,3621201),Q(e.cx+t,4.4,e.cz+4.6,.8,.3,.8,16638023));for(let t=-r;t<=r;t+=20)Math.abs(t)<9||i.push(Q(e.cx-4.6,0,e.cz+t,.25,4.6,.25,3621201),Q(e.cx-4.6,4.4,e.cz+t,.8,.3,.8,16638023));return i}function Ff(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}function If(e,t){let n=[`m4a1`,`mp40`,`m1887`],r=[],i=[[10,8],[-10,8],[10,-8],[-10,-8],[0,14]],a=[{type:`weapon`,subType:n[Math.floor(t()*3)],amount:24},{type:`medkit`,subType:`medkit`,amount:2},{type:`gloo`,subType:`gloo_wall`,amount:2},{type:`armor`,subType:`vest_lv3`,amount:1},{type:`scope`,subType:t()<.5?`scope_2x`:`scope_4x`,amount:1}];return i.forEach(([t,n],i)=>r.push({...a[i],x:e.cx+t,z:e.cz+n})),r}function Lf(e,t){let n={cols:4,rows:2,gapX:34,gapZ:28,skip:0,walls:kf,roofs:Af,w:[16,22],d:[9,12],h:[6,8.5]},r=Nf(e,t,n),i=Pf(e,n),a=[14427686,165063,15381256,1409085,16347926,6583435],o=0;for(let t=0;t<4;t++)for(let n=0;n<5;n++){let r=1+(t+n)%3;for(let s=0;s<r;s++)i.push(Q(e.cx-40+n*7,s*2.6,e.cz+48+t*3.2,6.2,2.6,2.6,a[(t*5+n+s)%a.length],o++<6&&s===0))}for(let t of[-30,30])i.push(Q(e.cx+t-4,0,e.cz-52,.9,20,.9,16096779)),i.push(Q(e.cx+t+4,0,e.cz-52,.9,20,.9,16096779)),i.push(Q(e.cx+t,20,e.cz-52,20,1.2,1.4,16096779)),i.push(Q(e.cx+t+8,18.5,e.cz-52,1,3,1,2042167));return{id:e.id,name:e.name,theme:e.theme,cx:e.cx,cz:e.cz,buildings:r,parts:i}}function Rf(e,t){let n={cols:4,rows:2,gapX:32,gapZ:28,skip:0,walls:Df,roofs:Of,w:[9,13],d:[7,9],h:[4.6,6]},r=Nf(e,t,n);r.push({id:`bld_farm_barn`,zone:e.name,x:e.cx+76,z:e.cz-6,width:18,depth:11,height:8,color:`#b45309`,roofColor:`#7f1d1d`});let i=Pf(e,n);for(let t=0;t<3;t++)i.push(jf(e.cx+40+t*8,0,e.cz+28,3,12+t%2*2,13358561,t===0)),i.push(Mf(e.cx+40+t*8,12+t%2*2,e.cz+28,3.3,2.4,6583435));for(let t=0;t<6;t++)i.push(Q(e.cx-40+t%3*34,.06,e.cz+52+Math.floor(t/3)*16,30,.12,12,t%2?13934615:6660877));return{id:e.id,name:e.name,theme:e.theme,cx:e.cx,cz:e.cz,buildings:r,parts:i}}function zf(e,t){let n={cols:4,rows:4,gapX:26,gapZ:24,skip:.05,walls:Df,roofs:Of,w:[8,11],d:[7,9],h:[4.8,7],towerEvery:7},r=Nf(e,t,n),i=Pf(e,n);i.push(jf(e.cx,0,e.cz,3,1.1,9741240,!0,10),jf(e.cx,1.1,e.cz,.6,2.4,13358561));let a=[14427686,15381256,165063,1409085,16347926,8141549,15485081,1357990];for(let t=0;t<8;t++){let n=t/8*Math.PI*2,r=e.cx+Math.cos(n)*9.5,o=e.cz+Math.sin(n)*9.5;i.push(Q(r,0,o,2.6,1,1.8,9584654),Q(r,2.2,o,3.4,.2,2.6,a[t])),i.push(Q(r-1.4,0,o-1,.18,2.2,.18,5722958),Q(r+1.4,0,o-1,.18,2.2,.18,5722958))}return{id:e.id,name:e.name,theme:e.theme,cx:e.cx,cz:e.cz,buildings:r,parts:i}}function Bf(e,t){let n={cols:4,rows:2,gapX:28,gapZ:24,skip:0,walls:[`#57534e`,`#4d5b3f`,`#6b705c`],roofs:[`#3f3f46`,`#365314`],w:[12,16],d:[8,11],h:[5,6.5]},r=Nf(e,t,n),i=Pf(e,n),a=7893356,o=60.4;i.push(Q(e.cx,0,e.cz-64,o*2,3,.9,a,!0),Q(e.cx-64,0,e.cz,.9,3,o*2,a,!0),Q(e.cx+64,0,e.cz,.9,3,o*2,a,!0),Q(e.cx-70.4/2,0,e.cz+64,50.4,3,.9,a,!0),Q(e.cx+70.4/2,0,e.cz+64,50.4,3,.9,a,!0));for(let[t,n]of[[-64,-64],[64,-64],[-64,64],[64,64]])r.push({id:`bld_mil_tower_${t}_${n}`,zone:e.name,x:e.cx+t,z:e.cz+n,width:4.4,depth:4.4,height:9,color:`#6b705c`,roofColor:`#3f3f46`,isTower:!0});i.push(jf(e.cx+20,0,e.cz+40,.5,9,9741240),jf(e.cx+20,9,e.cz+40,4.2,.5,14870768,!1,12));for(let t=0;t<10;t++)i.push(Q(e.cx-30+t*3.4,0,e.cz-40,3,.9,1.2,11051678));return{id:e.id,name:e.name,theme:e.theme,cx:e.cx,cz:e.cz,buildings:r,parts:i}}function Vf(e,t){let n={cols:4,rows:2,gapX:28,gapZ:24,skip:0,walls:Df,roofs:Of,w:[8,11],d:[7,9],h:[4.6,6.2]},r=Nf(e,t,n);r.push({id:`bld_church_nave`,zone:e.name,x:e.cx,z:e.cz+44,width:12,depth:20,height:8,color:`#e7e5e4`,roofColor:`#7f1d1d`},{id:`bld_church_tower`,zone:e.name,x:e.cx,z:e.cz+30,width:5.2,depth:5.2,height:17,color:`#d6d3d1`,roofColor:`#7f1d1d`,isTower:!0});let i=Pf(e,n);for(let t=0;t<4;t++)for(let n=0;n<9;n++)i.push(Q(e.cx+24+n*3.2,0,e.cz+38+t*3.6,.7,1.1+(t+n)%3*.2,.25,10265519));return i.push(Q(e.cx+38,0,e.cz+34,30,.9,.18,2042167),Q(e.cx+38,0,e.cz+56,30,.9,.18,2042167)),{id:e.id,name:e.name,theme:e.theme,cx:e.cx,cz:e.cz,buildings:r,parts:i}}function Hf(e,t){let n={cols:4,rows:4,gapX:26,gapZ:24,skip:.05,walls:Df,roofs:Of,w:[8,10.5],d:[7,9],h:[4.4,6]},r=Nf(e,t,n),i=Pf(e,n),a=e.cx+62;i.push(jf(a,0,e.cz,7,8,16317180,!0,12),Mf(a,8,e.cz,7.4,4,9741240,12),Q(a+3,8.4,e.cz,1.2,1.2,12,2042167),Q(a-12,0,e.cz,10,.6,5,9741240),Q(a-9,.6,e.cz,3,.6,5,10592682),Q(a-6,1.2,e.cz,3,.6,5,13358561));for(let t=0;t<3;t++)i.push(jf(a+20,0,e.cz-22+t*20,2.6,3.2,14870768,!1,10),Mf(a+20,3.2,e.cz-22+t*20,2.9,1.6,6583435,10));for(let t=0;t<9;t++)i.push(Q(a-22+t*5.5,0,e.cz+22,.2,1.2,.2,5722958),Q(a-22+t*5.5,1,e.cz+22,5.5,.12,.12,7893356));return{id:e.id,name:e.name,theme:e.theme,cx:e.cx,cz:e.cz,buildings:r,parts:i}}function Uf(e,t){let n={cols:4,rows:2,gapX:30,gapZ:26,skip:0,walls:kf,roofs:Af,w:[11,16],d:[8,11],h:[5,7]},r=Nf(e,t,n),i=Pf(e,n);i.push(Q(e.cx-4,.05,e.cz+62,56,.12,36,4472892));for(let t=0;t<4;t++)i.push(Q(e.cx-4,.12+t*1.5,e.cz+62,56-t*11,1.5,36-t*7,[11045227,12096088,9598810,8153686][t]));i.push(Q(e.cx+34,3,e.cz+40,30,.6,1.4,2042167),Q(e.cx+52,0,e.cz+40,8,9,8,6583435,!0));for(let n=0;n<14;n++){let n=t()*Math.PI*2;i.push(Mf(e.cx-40+Math.cos(n)*18-28,0,e.cz-52+Math.sin(n)*10,3+t()*3,3+t()*3,7893356,6))}return{id:e.id,name:e.name,theme:e.theme,cx:e.cx,cz:e.cz,buildings:r,parts:i}}function Wf(e,t){let n={cols:4,rows:2,gapX:24,gapZ:22,skip:0,walls:[`#e0f2fe`,`#fef3c7`,`#d1fae5`,`#fbcfe8`],roofs:[`#0284c7`,`#dc2626`,`#0f766e`],w:[7.5,10],d:[6.5,8.5],h:[4.2,5.4]},r=Nf(e,t,n),i=Pf(e,n),a=e.cx+48,o=e.cz;i.push(Q(a,0,o,11,1.2,11,9741240));for(let e=0;e<4;e++)i.push(jf(a,1.2+e*5,o,3.2-e*.3,5,e%2?16317180:14427686,e===0,10));i.push(jf(a,21.2,o,3.6,2.2,16638023,!1,10),Mf(a,23.4,o,4.2,2.6,14427686,10));for(let t=0;t<4;t++)i.push(Q(e.cx-30+t*12,.4,e.cz+38,8,1.1,3,[165063,14427686,15381256,1409085][t])),i.push(Q(e.cx-30+t*12,1.5,e.cz+38,3,1.8,2.4,16317180));return{id:e.id,name:e.name,theme:e.theme,cx:e.cx,cz:e.cz,buildings:r,parts:i}}var Gf={dock:Lf,farm:Rf,market:zf,military:Bf,church:Vf,observatory:Hf,quarry:Uf,cape:Wf};function Kf(e=Ef){return e.map(e=>{let t=wf(Ff(e.id)),n=Gf[e.theme](e,t),r=0;for(let t of n.buildings)r=Math.max(r,Math.hypot(t.x-e.cx,t.z-e.cz)+Math.hypot(t.width,t.depth)/2);for(let t of n.parts){let n=t.shape===`box`?t.size[0]/2:t.size[0],i=t.shape===`box`?t.size[2]/2:t.size[0];r=Math.max(r,Math.hypot(Math.abs(t.pos[0]-e.cx)+n,Math.abs(t.pos[2]-e.cz)+i))}return{...n,radius:Math.ceil(r),loot:If(e,t),vehicles:[{type:`pickup`,x:e.cx+12,z:e.cz+2,yaw:Math.PI/2},{type:`tuktuk`,x:e.cx-12,z:e.cz-2,yaw:-Math.PI/2}]}})}var qf=Kf();function Jf(e=qf){let t=[];for(let n of e)for(let e of n.parts){if(!e.solid)continue;let n=e.shape===`box`?e.size[0]/2:e.size[0],r=e.shape===`box`?e.size[2]/2:e.size[0];t.push({minX:e.pos[0]-n,maxX:e.pos[0]+n,minZ:e.pos[2]-r,maxZ:e.pos[2]+r,maxY:e.pos[1]+e.size[1]/2})}return t}function Yf(e,t,n,r,i,a,o){let s=[];for(let a=0;a<=i;a++){let o=a/i,c=1-o;s.push([c*c*c*e[0]+3*c*c*o*t[0]+3*c*o*o*n[0]+o*o*o*r[0],c*c*c*e[1]+3*c*c*o*t[1]+3*c*o*o*n[1]+o*o*o*r[1]])}let c=[];for(let e=0;e<s.length-1;e++)c.push({x1:s[e][0],z1:s[e][1],x2:s[e+1][0],z2:s[e+1][1],width:a,tag:o});return c}function Xf(){let e=Math.sin(.78)*590,t=Math.cos(.78)*590;return[{x1:8.5,z1:-1160,x2:8.5,z2:1160,width:8.5,tag:`road`},{x1:-1160,z1:-14,x2:1160,z2:-14,width:8.5,tag:`road`},{x1:-e,z1:-t,x2:e,z2:t,width:11,tag:`road`},{x1:e,z1:-t,x2:-e,z2:t,width:11,tag:`road`},...Yf([-1200,260],[-480,180],[-220,-135],[0,-95],28,46,`water`),...Yf([0,-95],[240,-55],[560,-240],[1200,-190],28,46,`water`)]}var Zf=(e,t,n,r,i,a,o)=>({x:e,z:t,radius:n,height:r,centerY:i,color:a,segments:o}),Qf=[Zf(-14,14,16,2.4,1,8367685,10),Zf(26,-18,22,3.6,1.6,8826954,10),Zf(62,-36,54,11.5,5.4,9680462,12),Zf(48,-24,42,7.2,3.3,7775814,12),Zf(-72,-46,62,13.5,6.4,9220170,12),Zf(-56,-34,46,8.2,3.8,7315522,12),Zf(88,64,72,15,7.2,9680462,12),Zf(-88,72,80,16.5,7.8,6854718,12),Zf(-920,-880,160,125,60,5994140,7),Zf(880,-910,185,140,66,6586534,7),Zf(-950,860,150,115,54,5994140,7),Zf(920,880,170,130,62,6586534,7),Zf(0,-1020,210,155,74,5402004,7)],$f=[[0,0,70],[0,420,70],[420,-360,70],[-440,-280,80],[-360,380,65],[450,350,70]],ep=[[-38,-78,24],[1110,620,16],[700,275,16],[-88,72,10],[430,-142,32]],tp=30,np=1130,rp=[`#f4efe6`,`#fef3c7`,`#e0f2fe`,`#fde68a`,`#d1fae5`,`#e2e8f0`],ip=[`#d96b43`,`#0284c7`,`#dc2626`,`#d97706`,`#15803d`,`#b45309`];function ap(e,t,n){let r=n.x2-n.x1,i=n.z2-n.z1,a=Math.max(0,Math.min(1,((e-n.x1)*r+(t-n.z1)*i)/(r*r+i*i)));return Math.hypot(e-(n.x1+a*r),t-(n.z1+a*i))}function op(e,t,n,r,i){if(Math.abs(e)>np||Math.abs(t)>np)return!1;for(let i of r)if(ap(e,t,i)<i.width/2+n)return!1;for(let r of Qf)if(Math.hypot(e-r.x,t-r.z)<r.radius+n)return!1;for(let r of qf)if(Math.hypot(e-r.cx,t-r.cz)<r.radius+n)return!1;for(let[r,i,a]of ep)if(Math.hypot(e-r,t-i)<a+n)return!1;for(let r of i)if(Math.hypot(e-r.x,t-r.z)<n+20)return!1;return!0}function sp(e,t,n){let r=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/12);for(let i=0;i<=r;i++){let a=e[0]+(t[0]-e[0])*i/r,o=e[1]+(t[1]-e[1])*i/r;for(let e of n)if(e.tag===`water`&&ap(a,o,e)<e.width/2+3)return!0;for(let e of Qf)if(Math.hypot(a-e.x,o-e.z)<e.radius+2)return!0}return!1}function cp(e){let t=Xf(),n=wf(20261030),r=[];for(let i=-1100;i<=1100;i+=40)for(let a=-1100;a<=1100;a+=40){let o=i+(n()-.5)*20,s=a+(n()-.5)*20;op(o,s,36,t,e)&&r.push([Math.round(o),Math.round(s)])}let i=[...e.map(e=>[e.x,e.z]),...qf.map(e=>[e.cx,e.cz])],a=[],o=r.map(([e,t])=>Math.min(...i.map(([n,r])=>Math.hypot(e-n,t-r))));for(let e=0;e<36&&r.length;e++){let e=-1,t=0;for(let n=0;n<r.length;n++)o[n]>t&&(t=o[n],e=n);if(e<0||t<90)break;let[n,i]=r[e];a.push([n,i]);for(let e=0;e<r.length;e++)o[e]=Math.min(o[e],Math.hypot(r[e][0]-n,r[e][1]-i))}return a.map(([e,t],n)=>{let r=`hamlet_${n+1}`,i=`Hamlet ${n+1}`,a=wf(1e3+n),o=[];return[[-14,-11],[14,-11],[-14,11],[14,11]].forEach(([s,c],l)=>{l===3&&a()<.35||o.push({id:`bld_${r}_${l+1}`,zone:i,x:Math.round(e+s+(a()-.5)*3),z:Math.round(t+c+(a()-.5)*3),width:Math.round((8+a()*2.2)*10)/10,depth:Math.round((6.5+a()*1.5)*10)/10,height:Math.round((4.2+a()*1.2)*10)/10,color:rp[Math.floor(a()*rp.length)],roofColor:ip[Math.floor(a()*ip.length)],model:`building-type-${`abcdefghijklmnopqrstu`[(n*4+l)%21]}`})}),{id:r,name:i,cx:e,cz:t,radius:tp,buildings:o,parts:[{shape:`box`,size:[46,.1,4],color:9139029,pos:[e,.04,t]},{shape:`cyl`,size:[1.1,1.2,8],color:9741240,pos:[e,.6,t+5.5]},{shape:`box`,size:[.25,4.4,.25],color:3621201,pos:[e+6,2.2,t+2.8]},{shape:`box`,size:[.8,.3,.8],color:16638023,pos:[e+6,4.5,t+2.8]}],loot:[{type:`weapon`,subType:[`m4a1`,`mp40`,`m1887`][n%3],amount:24,x:e-6,z:t+3},{type:n%2?`medkit`:`gloo`,subType:n%2?`medkit`:`gloo_wall`,amount:2,x:e+6,z:t-3}],vehicles:[{type:n%2?`tuktuk`:`pickup`,x:e,z:t-3,yaw:Math.PI/2}]}})}function lp(e){let t=Xf(),n=[...qf.map(e=>[e.cx,e.cz]),...e.map(e=>[e.cx,e.cz]),[0,0],[0,420],[420,-360],[-440,-280],[-360,380],[450,350]],r=new Set,i=[],a=[];return n.forEach((e,o)=>{let s=n.map((t,n)=>({j:n,d:Math.hypot(e[0]-t[0],e[1]-t[1])})).filter(e=>e.j!==o&&e.d>40).sort((e,t)=>e.d-t.d).slice(0,2);for(let{j:c,d:l}of s){let s=o<c?`${o}-${c}`:`${c}-${o}`;if(r.has(s)||l>420)continue;let u=n[c];sp(e,u,t)||(r.add(s),i.push({shape:`box`,size:[4.2,.08,l],color:10192231,pos:[(e[0]+u[0])/2,.035,(e[1]+u[1])/2],rot:[0,Math.atan2(u[0]-e[0],u[1]-e[1]),0]}),a.push({x1:e[0],z1:e[1],x2:u[0],z2:u[1],width:4.2,tag:`dirt`}))}}),{parts:i,segments:a}}var up={street_gold:{id:`street_gold`,nameKey:`outfit_street_gold`,jacketColor:16766464,innerColor:1120295,pantsColor:1976635,helmetColor:2042167,visorColor:58879,beltColor:16766464,accentHex:`#ffd600`},chrono_cyber:{id:`chrono_cyber`,nameKey:`outfit_chrono_cyber`,jacketColor:16317180,innerColor:3868516,pantsColor:1981066,helmetColor:988970,visorColor:11032055,beltColor:12616956,accentHex:`#a855f7`},cobra_strike:{id:`cobra_strike`,nameKey:`outfit_cobra_strike`,jacketColor:14427686,innerColor:1579035,pantsColor:2565930,helmetColor:8330525,visorColor:16436245,beltColor:15680580,accentHex:`#ef4444`},alok_vip:{id:`alok_vip`,nameKey:`outfit_alok_vip`,jacketColor:16317180,innerColor:988970,pantsColor:1981066,helmetColor:16707722,visorColor:3718648,beltColor:16436245,accentHex:`#f8fafc`}},dp=[`street_gold`,`chrono_cyber`,`cobra_strike`,`alok_vip`],fp=[`booyah_dance`,`cobra_wave`,`laugh_taunt`],pp=Object.fromEntries(bf.map(e=>[e.id,e])),mp=xf,hp=Sf,$={profile:`lite`,islandHalfSize:1180,waterHalfSize:1800,walkSpeed:5.6,sprintSpeed:6.8,crouchSpeed:2.4,proneSpeed:1,adsMoveMultiplier:.6,fireMoveMultiplier:.85,stepHeight:.45,jumpVelocity:6.8,gravity:18,airplaneAltitude:135,airplaneSpeed:42,skydiveDescentSpeed:26,skydiveHorizSpeed:34,parachuteOpenAltitude:55,parachuteDescentSpeed:12.2,parachuteHorizSpeed:22,maxHp:200,maxEp:200,epRegenPerSec:6,maxShield:150,medkitHealAmount:65,medkitEpAmount:50,mushroomEpAmount:60,mushroomHpAmount:20,glooWallMaxHp:300,glooWallDuration:45,glooWallSpawnDist:3.2,glooWallWidth:3.2,glooWallHeight:2.1,glooWallDepth:.45,armorAbsorptionRatio:.45,cameraNormalOffset:{x:.65,y:1.75,z:3.6},cameraAdsOffset:{x:.5,y:1.65,z:1.95},normalFov:60,adsFov:50,scope2xFov:30,scope4xFov:16},gp=[{id:`sp_clock_lobby`,zone:`Clock Tower`,x:1.4,z:22,yaw:Math.PI-.14,width:7.6,height:4},{id:`sp_clock_plaza`,zone:`Clock Tower`,x:2.2,z:-2,yaw:-.15,width:7.6,height:4},{id:`sp_pochinok`,zone:`Pochinok`,x:24,z:392,yaw:-.35,width:11,height:5.6},{id:`sp_peak`,zone:`Peak`,x:395,z:-328,yaw:.45,width:11,height:5.6},{id:`sp_factory`,zone:`Factory & Hangar`,x:-412,z:-248,yaw:.35,width:11,height:5.6},{id:`sp_bimasakti`,zone:`Bimasakti Strip`,x:-332,z:352,yaw:-.35,width:11,height:5.6},{id:`sp_mars`,zone:`Mars Electric`,x:422,z:320,yaw:.4,width:11,height:5.6}];function _p(){let e=[{id:`bld_clock_main`,zone:`Clock Tower`,x:-16,z:-2,width:11,depth:8,height:4.4,color:`#d59b62`,roofColor:`#b84a32`},{id:`bld_clock_tower`,zone:`Clock Tower`,x:16,z:-2,width:5.2,depth:5.2,height:11.5,color:`#d8b07a`,roofColor:`#b84a32`,isTower:!0},{id:`bld_clock_east`,zone:`Clock Tower`,x:26,z:6,width:9.5,depth:7,height:4.2,color:`#c98a52`,roofColor:`#b45309`},{id:`bld_clock_west`,zone:`Clock Tower`,x:-28,z:10,width:9.5,depth:7,height:4.2,color:`#d4a373`,roofColor:`#b84a32`},{id:`bld_clock_north`,zone:`Clock Tower`,x:0,z:-32,width:12,depth:7.5,height:4.5,color:`#c4d483`,roofColor:`#b84a32`},{id:`bld_clock_south`,zone:`Clock Tower`,x:24,z:36,width:8.5,depth:6.5,height:4.2,color:`#d59b62`,roofColor:`#b84a32`},{id:`bld_poch_1`,zone:`Pochinok`,x:-32,z:420,width:10,depth:7.5,height:5.4,color:`#fef3c7`,roofColor:`#d97706`},{id:`bld_poch_2`,zone:`Pochinok`,x:32,z:420,width:10,depth:7.5,height:5.4,color:`#f4efe6`,roofColor:`#dc2626`},{id:`bld_poch_3`,zone:`Pochinok`,x:0,z:420,width:11,depth:8,height:6,color:`#e0f2fe`,roofColor:`#0284c7`},{id:`bld_poch_4`,zone:`Pochinok`,x:-26,z:462,width:9,depth:7,height:4.8,color:`#f4efe6`,roofColor:`#b45309`},{id:`bld_poch_5`,zone:`Pochinok`,x:26,z:462,width:9,depth:7,height:4.8,color:`#fef3c7`,roofColor:`#15803d`},{id:`bld_poch_tower`,zone:`Pochinok`,x:-45,z:390,width:4.5,depth:4.5,height:9.5,color:`#e6dec8`,roofColor:`#c2410c`,isTower:!0},{id:`bld_peak_villa`,zone:`Peak`,x:420,z:-360,width:13,depth:9,height:6.8,color:`#f8fafc`,roofColor:`#b91c1c`},{id:`bld_peak_north`,zone:`Peak`,x:420,z:-404,width:10,depth:7.5,height:5.4,color:`#fef3c7`,roofColor:`#d97706`},{id:`bld_peak_west`,zone:`Peak`,x:378,z:-360,width:9.5,depth:7.5,height:5.2,color:`#f4efe6`,roofColor:`#0369a1`},{id:`bld_peak_east`,zone:`Peak`,x:462,z:-360,width:9.5,depth:7.5,height:5.2,color:`#f4efe6`,roofColor:`#c2410c`},{id:`bld_peak_tower`,zone:`Peak`,x:455,z:-322,width:4.6,depth:4.6,height:10.5,color:`#e6dec8`,roofColor:`#b91c1c`,isTower:!0},{id:`bld_fac_main`,zone:`Factory & Hangar`,x:-440,z:-280,width:16,depth:10,height:7.5,color:`#475569`,roofColor:`#eab308`},{id:`bld_fac_hangar1`,zone:`Factory & Hangar`,x:-482,z:-280,width:12,depth:9,height:6.2,color:`#334155`,roofColor:`#0284c7`},{id:`bld_fac_hangar2`,zone:`Factory & Hangar`,x:-396,z:-280,width:12,depth:9,height:6.2,color:`#334155`,roofColor:`#dc2626`},{id:`bld_fac_office`,zone:`Factory & Hangar`,x:-440,z:-330,width:11,depth:7.5,height:5.5,color:`#e2e8f0`,roofColor:`#d97706`},{id:`bld_fac_tower`,zone:`Factory & Hangar`,x:-475,z:-242,width:4.6,depth:4.6,height:10.2,color:`#cbd5e1`,roofColor:`#eab308`,isTower:!0},{id:`bld_bima_1`,zone:`Bimasakti Strip`,x:-360,z:380,width:12,depth:8,height:5.8,color:`#f4efe6`,roofColor:`#d96b43`},{id:`bld_bima_2`,zone:`Bimasakti Strip`,x:-400,z:380,width:10,depth:7.5,height:5.2,color:`#fef3c7`,roofColor:`#b45309`},{id:`bld_bima_3`,zone:`Bimasakti Strip`,x:-320,z:380,width:10,depth:7.5,height:5.2,color:`#e0f2fe`,roofColor:`#0284c7`},{id:`bld_bima_4`,zone:`Bimasakti Strip`,x:-360,z:425,width:11,depth:7.5,height:5.4,color:`#f4efe6`,roofColor:`#dc2626`},{id:`bld_mars_1`,zone:`Mars Electric`,x:450,z:350,width:15,depth:9.5,height:6.8,color:`#475569`,roofColor:`#f97316`},{id:`bld_mars_2`,zone:`Mars Electric`,x:408,z:350,width:10.5,depth:8,height:5.6,color:`#e2e8f0`,roofColor:`#0284c7`},{id:`bld_mars_3`,zone:`Mars Electric`,x:492,z:350,width:10.5,depth:8,height:5.6,color:`#f4efe6`,roofColor:`#eab308`},{id:`bld_mars_4`,zone:`Mars Electric`,x:450,z:398,width:12,depth:8,height:5.8,color:`#fef3c7`,roofColor:`#dc2626`}];return[[-180,-140,`#f4efe6`,`#d96b43`],[-210,-140,`#fef3c7`,`#0284c7`],[180,-140,`#f4efe6`,`#dc2626`],[212,-140,`#e0f2fe`,`#d97706`],[-180,160,`#fef3c7`,`#15803d`],[-212,160,`#f4efe6`,`#c2410c`],[180,160,`#f4efe6`,`#0284c7`],[212,160,`#fef3c7`,`#dc2626`],[0,-220,`#f8fafc`,`#b45309`],[32,-220,`#f4efe6`,`#dc2626`],[0,210,`#f4efe6`,`#0284c7`],[-32,210,`#fef3c7`,`#d96b43`],[-260,0,`#e2e8f0`,`#dc2626`],[-260,32,`#f4efe6`,`#eab308`],[260,0,`#f4efe6`,`#0284c7`],[260,-32,`#fef3c7`,`#c2410c`],[-680,-520,`#f4efe6`,`#d96b43`],[-645,-520,`#fef3c7`,`#0284c7`],[680,-520,`#f4efe6`,`#dc2626`],[645,-520,`#e0f2fe`,`#d97706`],[-680,560,`#f4efe6`,`#15803d`],[-645,560,`#fef3c7`,`#c2410c`],[680,560,`#f4efe6`,`#0284c7`],[645,560,`#fef3c7`,`#dc2626`],[0,-680,`#f4efe6`,`#b91c1c`],[36,-680,`#e2e8f0`,`#0284c7`],[0,720,`#f4efe6`,`#d97706`],[-36,720,`#fef3c7`,`#15803d`],[-760,0,`#f4efe6`,`#c2410c`],[-760,36,`#e0f2fe`,`#0284c7`],[760,0,`#f4efe6`,`#dc2626`],[760,-36,`#fef3c7`,`#d97706`]].forEach(([t,n,r,i],a)=>{e.push({id:`bld_suburb_${a+1}`,zone:`Bermuda Outskirts`,x:t,z:n,width:9.5,depth:7.2,height:5+a%3*.6,color:r,roofColor:i,model:`building-type-${`abcdefghijklmnopqrstu`[a*5%21]}`})}),e}var vp=[..._p(),...qf.flatMap(e=>e.buildings)],yp=cp(vp),bp=[...vp,...yp.flatMap(e=>e.buildings)],xp=[...Cf,...[...qf,...yp].flatMap(e=>e.loot.map((t,n)=>({id:`loot_${e.id}_${n+1}`,zone:e.name,type:t.type,subType:t.subType,amount:t.amount,x:t.x,z:t.z})))],Sp={models:{sk_character_contender:`assets/models/sk_character_contender.glb`,sm_weapons_pack:`assets/models/sm_weapons_pack.glb`,sm_gloo_wall:`assets/models/sm_gloo_wall.glb`,sm_loot_crates:`assets/models/sm_loot_crates.glb`,sm_island_props:`assets/models/sm_island_props.glb`,sm_airdrop_crate:`assets/models/sm_airdrop_crate.glb`,sm_vehicle_pack:`assets/models/sm_vehicle_pack.glb`,sm_street_props:`assets/models/sm_street_props.glb`,sm_nature_props:`assets/models/sm_nature_props.glb`,sm_treasure_chest:`assets/models/sm_treasure_chest.glb`},ui:{tex_crosshair:`assets/ui/tex_crosshair.svg`,tex_gloo_icon:`assets/ui/tex_gloo_icon.svg`,tex_medkit_icon:`assets/ui/tex_medkit_icon.svg`,tex_booyah_crest:`assets/ui/tex_booyah_crest.svg`,tex_sponsor_main:`assets/ui/sponsor_main.jpg`},audio:{sfx_ar_shot:`assets/audio/sfx_ar_shot.wav`,sfx_smg_shot:`assets/audio/sfx_smg_shot.wav`,sfx_shotgun_shot:`assets/audio/sfx_shotgun_shot.wav`,sfx_hit_headshot:`assets/audio/sfx_hit_headshot.wav`,sfx_gloo_wall:`assets/audio/sfx_gloo_wall.wav`,sfx_medkit:`assets/audio/sfx_medkit.wav`,sfx_booyah:`assets/audio/sfx_booyah.wav`}},Cp=new io({vertexColors:!0});function wp(e,t,n=Cp){let r=[],i=[],a=[],o=[],s=new W,c=new H,l=new Gn,u=new mn,d=new V(1,1,1),f=new V,p=new V,m=new V,h=new G;for(let e of t){let t=e.geo.index?e.geo.toNonIndexed():e.geo.clone();f.set(...e.pos??[0,0,0]),l.set(...e.rot??[0,0,0]),u.setFromEuler(l),s.compose(f,u,d),c.getNormalMatrix(s),h.set(e.color);let n=t.getAttribute(`position`),g=t.getAttribute(`normal`);for(let e=0;e<n.count;e++){p.fromBufferAttribute(n,e).applyMatrix4(s),r.push(p.x,p.y,p.z),g?(m.fromBufferAttribute(g,e).applyMatrix3(c).normalize(),i.push(m.x,m.y,m.z)):(m.set(0,1,0),i.push(0,1,0));let t=Math.abs(m.x),l=Math.abs(m.y),u=Math.abs(m.z);l>t&&l>u?o.push(p.x*.42,p.z*.42):t>u?o.push(p.z*.48,p.y*.55):o.push(p.x*.48,p.y*.55);let d=l<.7?.74+.26*Math.min(1,Math.max(0,p.y/2.4)):1;a.push(h.r*d,h.g*d,h.b*d)}t.dispose()}let g=new di;g.setAttribute(`position`,new $r(r,3)),g.setAttribute(`normal`,new $r(i,3)),g.setAttribute(`color`,new $r(a,3)),g.setAttribute(`uv`,new $r(o,2));let _=new q(g,n);return _.name=e,_}var Tp=class{templates=new Map;loaded=!1;isLoaded(){return this.loaded}async preloadAll(e=`./`){for(let e of Object.keys(Sp.models))this.templates.set(e,Np(e));if(typeof window>`u`){this.loaded=!0;return}let t=new yd,n=Object.entries(Sp.models);await Promise.all(n.map(async([n,r])=>{try{let i=`${e.replace(/\/?$/,`/`)}${r}`,a=await t.loadAsync(i);a&&a.scene&&this.templates.set(n,a.scene)}catch{}})),this.loaded=!0}cloneModel(e,t){return e===`sk_character_contender`?jp(t||`#ffd600`).root:e===`sm_gloo_wall`?Np(`sm_gloo_wall`):(this.templates.get(e)??Np(e)).clone(!0)}};function Ep(e){let t=new lr;if(t.name=`weapon_${e}`,e===`m4a1`){let e=wp(`m4a1_mesh`,[{geo:new J(.075,.12,.42),color:1976635,pos:[0,.02,-.08]},{geo:new J(.082,.035,.36),color:16717636,pos:[0,.07,-.08]},{geo:new J(.068,.085,.34),color:988970,pos:[0,.025,-.42]},{geo:new J(.074,.024,.28),color:16766464,pos:[0,.03,-.41]},{geo:new Y(.018,.018,.32,8),color:13358561,pos:[0,.035,-.68],rot:[Math.PI/2,0,0]},{geo:new Y(.026,.024,.07,8),color:16766464,pos:[0,.035,-.84],rot:[Math.PI/2,0,0]},{geo:new J(.052,.22,.085),color:16717636,pos:[0,-.11,-.16],rot:[.22,0,0]},{geo:new J(.05,.14,.065),color:988970,pos:[0,-.08,.05],rot:[-.25,0,0]},{geo:new J(.065,.11,.26),color:1976635,pos:[0,.01,.22]},{geo:new J(.055,.065,.11),color:988970,pos:[0,.11,-.08]},{geo:new J(.04,.04,.02),color:58879,pos:[0,.115,-.13]}]);t.add(e)}else if(e===`mp40`){let e=wp(`mp40_mesh`,[{geo:new J(.07,.1,.38),color:16766464,pos:[0,.03,-.08]},{geo:new Y(.026,.03,.28,8),color:1976635,pos:[0,.035,-.38],rot:[Math.PI/2,0,0]},{geo:new Y(.015,.015,.18,8),color:13358561,pos:[0,.035,-.56],rot:[Math.PI/2,0,0]},{geo:new J(.044,.26,.058),color:58879,pos:[0,-.13,-.24],rot:[.08,0,0]},{geo:new J(.048,.14,.06),color:988970,pos:[0,-.07,.06],rot:[-.22,0,0]},{geo:new J(.045,.08,.2),color:1976635,pos:[0,.01,.18]}]);t.add(e)}else if(e===`m1887`){let e=wp(`m1887_mesh`,[{geo:new Y(.022,.022,.68,8),color:13358561,pos:[-.022,.04,-.38],rot:[Math.PI/2,0,0]},{geo:new Y(.022,.022,.68,8),color:13358561,pos:[.022,.04,-.38],rot:[Math.PI/2,0,0]},{geo:new J(.082,.1,.22),color:1976635,pos:[0,.02,-.02]},{geo:new J(.078,.065,.28),color:8138002,pos:[0,0,-.26]},{geo:new J(.068,.12,.3),color:8138002,pos:[0,-.03,.2],rot:[-.16,0,0]},{geo:new J(.088,.08,.04),color:16766464,pos:[0,.03,-.52]}]);t.add(e)}return t}function Dp(){return wp(`parachute_canopy`,[{geo:new J(1.5,.16,1.4),color:16766464,pos:[0,2.55,0]},{geo:new J(1.05,.15,1.38),color:11032055,pos:[-1.18,2.35,0],rot:[0,0,.32]},{geo:new J(1.05,.15,1.38),color:58879,pos:[1.18,2.35,0],rot:[0,0,-.32]},{geo:new Y(.015,.015,2.1,5),color:14870768,pos:[-.7,1.45,-.35],rot:[.15,0,.26]},{geo:new Y(.015,.015,2.1,5),color:14870768,pos:[.7,1.45,-.35],rot:[.15,0,-.26]},{geo:new Y(.015,.015,2.1,5),color:14870768,pos:[-.7,1.45,.35],rot:[-.15,0,.26]},{geo:new Y(.015,.015,2.1,5),color:14870768,pos:[.7,1.45,.35],rot:[-.15,0,-.26]},{geo:new Ba(.42,1.15,4),color:16436245,pos:[0,-.82,-.85],rot:[-Math.PI/2,Math.PI/4,0]},{geo:new J(.76,.18,1.55),color:3868516,pos:[0,-.84,.05]},{geo:new Ua(.38,0),color:11032055,pos:[0,-.68,-.25]},{geo:new J(.22,.22,1.25),color:1973067,pos:[-.46,-.82,.18]},{geo:new J(.22,.22,1.25),color:1973067,pos:[.46,-.82,.18]},{geo:new J(1.35,.07,.36),color:16707722,pos:[-.95,-.85,.65],rot:[0,.42,-.15]},{geo:new J(1.35,.07,.36),color:16707722,pos:[.95,-.85,.65],rot:[0,-.42,.15]},{geo:new Ba(.36,2.4,6),color:15235577,pos:[0,-.84,1.85],rot:[Math.PI/2,0,0]},{geo:new Ba(.22,1.8,6),color:16777215,pos:[0,-.84,1.55],rot:[Math.PI/2,0,0]}])}function Op(){return wp(`transport_airplane`,[{geo:new J(3.6,3.4,22),color:14870768,pos:[0,0,0]},{geo:new J(3.7,.75,22.2),color:16766464,pos:[0,.2,0]},{geo:new J(3.2,2.2,4.2),color:13358561,pos:[0,-.3,-12.5],rot:[.22,0,0]},{geo:new J(2.8,1,2.2),color:959977,pos:[0,.85,-11.2],rot:[.35,0,0]},{geo:new J(28,.45,3.8),color:9741240,pos:[0,1.35,-1.2]},{geo:new J(4.2,.5,3.9),color:16717636,pos:[-11.5,1.36,-1.2]},{geo:new J(4.2,.5,3.9),color:16717636,pos:[11.5,1.36,-1.2]},{geo:new Y(.75,.75,3.6,8),color:3359061,pos:[-6.5,.55,-1.8],rot:[Math.PI/2,0,0]},{geo:new Y(.75,.75,3.6,8),color:3359061,pos:[6.5,.55,-1.8],rot:[Math.PI/2,0,0]},{geo:new J(.55,5.8,3.8),color:1976635,pos:[0,4.1,9.2],rot:[-.22,0,0]},{geo:new J(.6,1.6,3.6),color:16766464,pos:[0,6.2,9.6],rot:[-.22,0,0]},{geo:new J(9.6,.38,2.6),color:9741240,pos:[0,1.6,9.5]}])}function kp(e,t,n){let r=e.getObjectByName(t);r&&(e.remove(r),r.geometry.dispose()),e.add(n)}function Ap(e,t){let n=up[t]??up.street_gold;e.outfitId=t,kp(e.hips,`pelvis_belt`,wp(`pelvis_belt`,[{geo:new J(.42,.16,.25),color:n.pantsColor,pos:[0,0,0]},{geo:new J(.44,.06,.27),color:1120295,pos:[0,.06,0]},{geo:new J(.1,.065,.28),color:n.beltColor,pos:[0,.06,0]}])),kp(e.leftLeg,`left_thigh`,wp(`left_thigh`,[{geo:new J(.17,.42,.19),color:n.pantsColor,pos:[0,-.2,0]}])),kp(e.rightLeg,`right_thigh`,wp(`right_thigh`,[{geo:new J(.17,.42,.19),color:n.pantsColor,pos:[0,-.2,0]}])),kp(e.torso,`torso_jacket_pack`,wp(`torso_jacket_pack`,[{geo:new J(.46,.54,.26),color:n.jacketColor,pos:[0,.27,0]},{geo:new J(.48,.34,.06),color:n.jacketColor,pos:[0,-.12,.12],rot:[.12,0,0]},{geo:new J(.14,.32,.24),color:n.jacketColor,pos:[-.19,-.11,.02]},{geo:new J(.14,.32,.24),color:n.jacketColor,pos:[.19,-.11,.02]},{geo:new J(.2,.52,.27),color:n.innerColor,pos:[0,.27,-.005]},{geo:new J(.36,.12,.28),color:n.jacketColor,pos:[0,.54,.02]},{geo:new Ua(.075,0),color:12616956,pos:[-.28,.38,.14]},{geo:new Ua(.075,0),color:12616956,pos:[.28,.38,.14]},{geo:new J(.28,.34,.12),color:1120295,pos:[0,.28,.17]},{geo:new J(.22,.05,.13),color:n.visorColor,pos:[0,.36,.18]}])),kp(e.head,`head_helmet_visor`,wp(`head_helmet_visor`,[{geo:new J(.14,.1,.14),color:15382134,pos:[0,.04,0]},{geo:new J(.28,.28,.28),color:15382134,pos:[0,.2,0]},{geo:new J(.32,.16,.32),color:n.helmetColor,pos:[0,.29,.02]},{geo:new Ba(.09,.22,4),color:988970,pos:[0,.42,.06],rot:[-.35,0,0]},{geo:new Ba(.08,.2,4),color:988970,pos:[-.11,.39,.04],rot:[-.25,0,.38]},{geo:new Ba(.08,.2,4),color:988970,pos:[.11,.39,.04],rot:[-.25,0,-.38]},{geo:new Ba(.08,.18,4),color:988970,pos:[0,.36,.16],rot:[-.65,0,0]},{geo:new J(.26,.065,.05),color:n.visorColor,pos:[0,.21,-.145]}])),kp(e.leftArm,`left_upper_arm`,wp(`left_upper_arm`,[{geo:new J(.17,.15,.19),color:n.jacketColor,pos:[0,-.02,0]},{geo:new J(.14,.28,.15),color:n.jacketColor,pos:[0,-.14,0]}])),kp(e.rightArm,`right_upper_arm`,wp(`right_upper_arm`,[{geo:new J(.17,.15,.19),color:n.jacketColor,pos:[0,-.02,0]},{geo:new J(.14,.28,.15),color:n.jacketColor,pos:[0,-.14,0]}]))}function jp(e=`#ffd600`,t=`street_gold`){let n=new lr;n.name=`sk_character_contender`;let r=new lr;r.name=`hips`,r.position.set(0,.88,0),n.add(r);let i=new lr;i.name=`leftLeg`,i.position.set(-.13,-.04,0);let a=new lr;a.name=`leftKnee`,a.position.set(0,-.4,0),a.add(wp(`left_shin_boot`,[{geo:new J(.18,.1,.21),color:1120295,pos:[0,0,-.01]},{geo:new J(.15,.36,.17),color:1976635,pos:[0,-.18,0]},{geo:new J(.17,.14,.25),color:988970,pos:[0,-.37,-.03]}])),i.add(a),r.add(i);let o=new lr;o.name=`rightLeg`,o.position.set(.13,-.04,0);let s=new lr;s.name=`rightKnee`,s.position.set(0,-.4,0),s.add(wp(`right_shin_boot`,[{geo:new J(.18,.1,.21),color:1120295,pos:[0,0,-.01]},{geo:new J(.15,.36,.17),color:1976635,pos:[0,-.18,0]},{geo:new J(.17,.14,.25),color:988970,pos:[0,-.37,-.03]}])),o.add(s),r.add(o);let c=new lr;c.name=`torso`,c.position.set(0,.08,0),r.add(c);let l=wp(`armor_vest`,[{geo:new J(.49,.38,.3),color:2042167,pos:[0,.26,0]}]);c.add(l);let u=new lr;u.name=`backWeaponSocket`,u.position.set(.12,.32,.28),u.rotation.set(0,Math.PI*.5,-.65),c.add(u);let d=new lr;d.name=`parachuteSocket`,d.position.set(0,.45,0),d.add(Dp()),d.visible=!1,c.add(d);let f=new lr;f.name=`head`,f.position.set(0,.56,0),c.add(f);let p=new lr;p.name=`leftArm`,p.position.set(-.31,.48,0);let m=new lr;m.name=`leftElbow`,m.position.set(0,-.28,0),m.add(wp(`left_forearm_hand`,[{geo:new J(.12,.26,.13),color:15382134,pos:[0,-.13,0]},{geo:new J(.13,.1,.14),color:1120295,pos:[0,-.27,0]}])),p.add(m),c.add(p);let h=new lr;h.name=`rightArm`,h.position.set(.31,.48,0);let g=new lr;g.name=`rightElbow`,g.position.set(0,-.28,0),g.add(wp(`right_forearm_hand`,[{geo:new J(.12,.26,.13),color:15382134,pos:[0,-.13,0]},{geo:new J(.13,.1,.14),color:1120295,pos:[0,-.27,0]}]));let _=new lr;_.name=`weaponSocket`,_.position.set(-.06,-.26,-.08),_.add(Ep(`m4a1`));let v=new cr;v.name=`muzzlePoint`,v.position.set(0,.04,-.85),_.add(v),g.add(_),h.add(g),c.add(h),u.add(Ep(`mp40`));let y={root:n,hips:r,torso:c,head:f,leftLeg:i,leftKnee:a,rightLeg:o,rightKnee:s,leftArm:p,leftElbow:m,rightArm:h,rightElbow:g,weaponSocket:_,backWeaponSocket:u,parachuteSocket:d,armorVestMesh:l,muzzlePoint:v,walkPhase:0,idlePhase:Math.random()*Math.PI*2,emotePhase:0,currentBlendSpeed:0,currentCrouchLerp:0,currentAdsLerp:0,currentRecoil:0,equippedWeaponId:`m4a1`,holsteredWeaponId:`mp40`,outfitId:t},b=e===`#00e5ff`||e===`#38bdf8`||e===`#a855f7`?`chrono_cyber`:e===`#ff3d00`?`cobra_strike`:t;return Ap(y,b),n.userData.rig=y,Mp(y,{speed:0,isSprinting:!1,isCrouching:!1,isGrounded:!0,isAds:!1,pitch:0,activeWeaponId:`m4a1`,secondaryWeaponId:`mp40`,hasArmor:!0,recoilKick:0,outfitId:b,activeEmote:null,dropPhase:`grounded`,dt:.016}),y}function Mp(e,t){let n=Math.min(.1,Math.max(.001,t.dt)),r=Math.min(1,n*14);if(t.outfitId&&e.outfitId!==t.outfitId&&Ap(e,t.outfitId),e.equippedWeaponId!==t.activeWeaponId){e.equippedWeaponId=t.activeWeaponId;for(let t=e.weaponSocket.children.length-1;t>=0;t--){let n=e.weaponSocket.children[t];n!==e.muzzlePoint&&e.weaponSocket.remove(n)}t.activeWeaponId!==`fists`&&e.weaponSocket.add(Ep(t.activeWeaponId))}t.secondaryWeaponId&&e.holsteredWeaponId!==t.secondaryWeaponId&&(e.holsteredWeaponId=t.secondaryWeaponId,e.backWeaponSocket.clear(),t.secondaryWeaponId!==`fists`&&t.secondaryWeaponId!==t.activeWeaponId&&e.backWeaponSocket.add(Ep(t.secondaryWeaponId))),e.armorVestMesh.visible=t.hasArmor;let i=t.dropPhase??`grounded`;if(e.parachuteSocket.visible=i===`parachute`||i===`skydive`,e.hips.rotation.x=0,e.hips.rotation.z=0,i===`skydive`){e.idlePhase+=n*12,e.hips.position.y=.9,e.hips.rotation.x=1.28,e.hips.rotation.y=Math.sin(e.idlePhase)*.08,e.torso.rotation.set(.1,0,0),e.head.rotation.set(-.65,0,0),e.leftArm.rotation.set(.5,0,1.15+Math.sin(e.idlePhase)*.08),e.rightArm.rotation.set(.5,0,-1.15-Math.sin(e.idlePhase)*.08),e.leftLeg.rotation.set(-.35,0,.25),e.rightLeg.rotation.set(-.35,0,-.25),e.leftKnee.rotation.x=-.65,e.rightKnee.rotation.x=-.65;return}if(i===`parachute`){e.idlePhase+=n*4.5,e.hips.position.y=.88,e.hips.rotation.z=Math.sin(e.idlePhase)*.08,e.torso.rotation.set(.08,0,0),e.head.rotation.set(.15,0,0),e.leftArm.rotation.set(2.45,.2,.25),e.rightArm.rotation.set(2.45,-.2,-.25),e.leftLeg.rotation.set(.25,0,.08),e.rightLeg.rotation.set(.18,0,-.08),e.leftKnee.rotation.x=-.45,e.rightKnee.rotation.x=-.35;return}if(t.activeEmote){e.emotePhase+=n*8.5;let r=e.emotePhase;e.weaponSocket.visible=!1,t.activeEmote===`booyah_dance`?(e.hips.position.y=.88+Math.abs(Math.sin(r*2))*.12,e.hips.rotation.y=Math.sin(r)*.35,e.torso.rotation.set(Math.sin(r*2)*.12,-Math.sin(r)*.25,Math.cos(r)*.12),e.head.rotation.set(Math.sin(r*2)*.18,Math.sin(r)*.2,0),e.leftLeg.rotation.x=Math.max(0,Math.sin(r))*1.05,e.leftKnee.rotation.x=-Math.max(0,Math.sin(r))*1.2,e.rightLeg.rotation.x=Math.max(0,-Math.sin(r))*1.05,e.rightKnee.rotation.x=-Math.max(0,-Math.sin(r))*1.2,e.leftArm.rotation.set(2.5+Math.sin(r*2)*.45,0,.35),e.rightArm.rotation.set(2.5-Math.sin(r*2)*.45,0,-.35),e.leftElbow.rotation.x=.35,e.rightElbow.rotation.x=.35):t.activeEmote===`cobra_wave`?(e.hips.position.y=.82+Math.sin(r*2)*.08,e.hips.rotation.y=r*1.35,e.torso.rotation.set(.15,0,Math.sin(r)*.18),e.leftLeg.rotation.x=.35+Math.sin(r)*.35,e.rightLeg.rotation.x=.35-Math.sin(r)*.35,e.leftKnee.rotation.x=-.65,e.rightKnee.rotation.x=-.65,e.leftArm.rotation.set(1.4,0,.8+Math.sin(r*2)*.5),e.rightArm.rotation.set(1.4,0,-.8+Math.cos(r*2)*.5)):(e.hips.position.y=.88+Math.max(0,Math.sin(r*1.6))*.18,e.hips.rotation.y=Math.sin(r*.8)*.25,e.torso.rotation.set(-.18,0,0),e.leftArm.rotation.set(1.65,0,1.15),e.rightArm.rotation.set(1.65,0,-1.15),e.leftElbow.rotation.x=1.45+Math.sin(r*3)*.25,e.rightElbow.rotation.x=1.45+Math.sin(r*3)*.25,e.leftLeg.rotation.x=.2,e.rightLeg.rotation.x=-.2);return}e.weaponSocket.visible=!0;let a=Math.min(1.4,t.speed/8.5);e.currentBlendSpeed+=(a-e.currentBlendSpeed)*r,e.currentCrouchLerp+=(+!!t.isCrouching-e.currentCrouchLerp)*r,e.currentAdsLerp+=(+!!t.isAds-e.currentAdsLerp)*r,e.currentRecoil=Math.max(0,e.currentRecoil-n*6.5),t.recoilKick>e.currentRecoil&&(e.currentRecoil=t.recoilKick),e.idlePhase+=n*2.6;let o=t.isSprinting?12.5:9.2;e.walkPhase+=n*o*Math.max(.15,e.currentBlendSpeed);let s=Math.min(1,e.currentBlendSpeed),c=(t.isSprinting?.78:.56)*s,l=Math.sin(e.walkPhase),u=Math.sin(e.walkPhase+Math.PI);if(!t.isGrounded)e.leftLeg.rotation.set(.45,0,0),e.leftKnee.rotation.x=-.85,e.rightLeg.rotation.set(-.25,0,0),e.rightKnee.rotation.x=-.55;else{let t=e.currentCrouchLerp*.55,n=e.currentCrouchLerp*-.95;e.leftLeg.rotation.set(l*c+t,0,0),e.leftKnee.rotation.x=-Math.max(0,Math.cos(e.walkPhase-.5))*c*1.15+n,e.rightLeg.rotation.set(u*c+t,0,0),e.rightKnee.rotation.x=-Math.max(0,Math.cos(e.walkPhase+Math.PI-.5))*c*1.15+n}let d=t.isGrounded?Math.abs(Math.sin(e.walkPhase))*.055*s:0,f=Math.sin(e.idlePhase)*.012;e.hips.position.y=.88-e.currentCrouchLerp*.28+d+f,e.hips.rotation.y=Math.sin(e.walkPhase)*.06*s;let p=t.isSprinting?.2*s:.06*s,m=Math.max(-.45,Math.min(.45,t.pitch));if(e.torso.rotation.set(-p-m*.45+e.currentCrouchLerp*.22,-Math.sin(e.walkPhase)*.08*s+(1-e.currentAdsLerp)*.12,0),e.head.rotation.set(-m*.55,-(1-e.currentAdsLerp)*.12,0),t.activeWeaponId!==`fists`){let t=Math.sin(e.walkPhase)*.06*s*(1-e.currentAdsLerp*.7),n=e.currentRecoil*.28;e.rightArm.rotation.x=1.18+e.currentAdsLerp*.22+n+t,e.rightArm.rotation.y=-.18-e.currentAdsLerp*.12,e.rightArm.rotation.z=-.08,e.rightElbow.rotation.x=.35+e.currentAdsLerp*.12,e.weaponSocket.rotation.set(-1.52+n*.5,.16,.05),e.weaponSocket.position.set(-.08-e.currentAdsLerp*.06,-.25,-.06+e.currentRecoil*.06),e.leftArm.rotation.x=1.24+e.currentAdsLerp*.18+n*.8-t,e.leftArm.rotation.y=.54+e.currentAdsLerp*.08,e.leftArm.rotation.z=.12,e.leftElbow.rotation.x=.42}else e.rightArm.rotation.set(-u*c*.9+.25,0,-.1),e.rightElbow.rotation.set(.65,0,0),e.leftArm.rotation.set(-l*c*.9+.25,0,.1),e.leftElbow.rotation.set(.65,0,0)}function Np(e){if(e===`sk_character_contender`)return jp(`#ffd600`).root;let t=new lr;if(t.name=e,e===`sm_gloo_wall`){let e=wp(`gloo_shield_merged`,[{geo:new J(2.15,2.08,.38),color:58879,pos:[0,1.04,0]},{geo:new J(.75,1.96,.36),color:3718648,pos:[-1.32,.98,.24],rot:[0,.38,0]},{geo:new J(.75,1.96,.36),color:3718648,pos:[1.32,.98,.24],rot:[0,-.38,0]},{geo:new J(2.35,.16,.44),color:14742270,pos:[0,1.92,0]},{geo:new J(2.45,.22,.48),color:14742270,pos:[0,.18,0]},{geo:new J(.28,2.16,.46),color:14742270,pos:[0,1.08,0]}]);t.add(e)}else e===`sm_weapons_pack`?t.add(Ep(`m4a1`)):t.add(wp(`crate_merged`,[{geo:new J(.65,.55,.65),color:58879,pos:[0,.28,0]}]));return t}var Pp=[`qt_swat`,`qt_punk`,`qt_hoodie`,`qt_casual`,`qt_worker`,`qt_punk_b`,`qt_king`,`qt_farmer`,`qt_hooded`,`qt_suit`,`qt_adventurer`],Fp=1.8,Ip=5,Lp=.18,Rp=-Math.PI/2+.12,zp=new Map;async function Bp(e=`./`){if(typeof window>`u`)return;let t=new yd,n=e.replace(/\/?$/,`/`);await Promise.all(Pp.map(async e=>{try{let r=await t.loadAsync(`${n}assets/models/characters/${e}.glb`),i=new Nr().setFromObject(r.scene,!0),a=Math.max(.01,i.max.y-i.min.y);zp.set(e,{gltf:r,scale:Fp/a})}catch{}}))}function Vp(e,t){e.root.traverse(n=>{if(!(n instanceof q))return;let r=n;for(;r&&r!==e.root;){if(r===e.parachuteSocket||r===t)return;r=r.parent}n.layers.set(Ip)})}var Hp={head:[`_Head`],top:[`_Body`,`Backpack`],pants:[`_Legs`,`_Pants`],shoes:[`_Feet`]};function Up(e,t){let n=[];e.gltf.scene.traverse(e=>{Hp[t].some(t=>e.name.endsWith(t))&&n.push(e)});let r=[];for(let e of n)e.traverse(e=>{e instanceof Yi&&!r.includes(e)&&r.push(e)});return r}function Wp(e){let t=new Map;return e.traverse(e=>{(e instanceof Xi||e.name.endsWith(`_end`)&&!t.has(e.name))&&t.set(e.name,e)}),t}function Gp(e,t){let n=new lr,r=e=>new io({color:e}),i=(e,i,a,o,s,c=0)=>{let l=new q(e,r(i));l.position.set(a*t,o*t,s*t),l.rotation.x=c,l.castShadow=!0,n.add(l)},a=t*.56;switch(e.shape){case`cap`:i(new Ga(a,12,6,0,Math.PI*2,0,Math.PI/2),e.color,0,-.08,0),i(new J(t*.9,t*.05,t*.55),e.color,0,-.07,-.55),i(new Ga(t*.06,6,4),e.accent,0,.47,0);break;case`beanie`:i(new Ga(a*1.02,12,8,0,Math.PI*2,0,Math.PI*.6),e.color,0,-.12,0),i(new Y(a*1.06,a*1.06,t*.16,12),e.accent,0,-.1,0),i(new Ga(t*.13,8,6),e.accent,0,.5,0);break;case`cowboy`:i(new Y(t*1.05,t*1.05,t*.05,16),e.color,0,-.06,0),i(new Y(a*.85,a,t*.45,12),e.color,0,.16,0),i(new Y(a*1.01,a*1.01,t*.08,12),e.accent,0,0,0);break;case`bandana`:i(new Ga(a*1.03,12,6,0,Math.PI*2,0,Math.PI/2),e.color,0,-.14,0),i(new J(t*.12,t*.3,t*.06),e.color,.12,-.25,.55,.4);break;case`crown`:i(new Y(a*.9,a*.95,t*.22,10,1,!0),e.color,0,.02,0);for(let n=0;n<5;n++){let r=n/5*Math.PI*2;i(new Ba(t*.08,t*.2,4),e.color,Math.cos(r)*.48,.22,Math.sin(r)*.48),i(new Ga(t*.04,6,4),e.accent,Math.cos(r)*.5,.03,Math.sin(r)*.5)}break;case`helmet`:i(new Ga(a*1.12,12,8,0,Math.PI*2,0,Math.PI*.55),e.color,0,-.16,0),i(new J(t*.7,t*.06,t*.1),e.accent,0,-.12,-.6);break;case`beret`:i(new Y(a*1.08,a*.95,t*.14,14),e.color,.06,0,0),i(new Ga(t*.05,6,4),e.accent,.06,.09,0);break;case`kasa`:i(new Ba(t*1.15,t*.42,16),e.color,0,.12,0),i(new Y(t*.08,t*.08,t*.06,8),e.accent,0,.36,0);break;case`straw`:i(new Y(t*1,t*1,t*.04,16),e.color,0,-.06,0),i(new Y(a*.8,a*.95,t*.34,12),e.color,0,.12,0),i(new Y(a*.97,a*.97,t*.07,12),e.accent,0,0,0)}return n}function Kp(e){let[t,n,r]=e.size,i=new q(e.shape===`box`?new J(t,n,r):e.shape===`cyl`?new Y(t,t,n,10):e.shape===`cone`?new Ba(t,n,10):e.shape===`ring`?new Y(t,t*1.05,n,12,1,!0):new Ga(t,10,8),new io({color:e.color,emissive:e.emissive??0,side:e.shape===`ring`?2:0}));return e.rot&&i.rotation.set(...e.rot),i.castShadow=!0,i}function qp(e){let t=new q(new J(e.size,e.size*.9,e.size*1.1),new io({color:e.color,emissive:e.emissive}));return t.castShadow=!0,t}function Jp(e,t,n,r){e.updateWorldMatrix(!0,!1);let i=new W().compose(n,r,new V(1,1,1));e.matrixWorld.clone().invert().multiply(i).decompose(t.position,t.quaternion,t.scale),e.add(t)}function Yp(e,t,n,r){let i=zp.get(`qt_swat`),a=[`head`,`top`,`pants`,`shoes`],o=a.map(e=>c(t[e])?.source);if(!i||o.some(e=>!e||!zp.has(e)))return r??null;r&&(r.mixer.stopAllAction(),e.root.remove(r.model)),Vp(e);let s=_d(i.gltf.scene);s.scale.setScalar(i.scale),s.rotation.y=Math.PI;let l=[];s.traverse(e=>{e instanceof Yi&&l.push(e)});let u=l[0]?.parent??s;for(let e of l)e.parent?.remove(e);let f=Wp(s),p=w(t.skinTone).color;a.forEach((e,t)=>{let n=Up(zp.get(o[t]),e);for(let e of n){let t=e.clone(),n=new ea(e.skeleton.bones.map(e=>f.get(e.name)??e),e.skeleton.boneInverses),r=(Array.isArray(e.material)?e.material:[e.material]).map(e=>{let t=e.clone();return/^skin/i.test(t.name)&&p!==null&&t.color.setHex(p),t});t.material=Array.isArray(e.material)?r:r[0],u.add(t),t.bind(n,e.bindMatrix),t.castShadow=!0,t.frustumCulled=!1}}),e.root.add(s);let m=new Ps(s),h=new Map;for(let e of i.gltf.animations){let t=e.name.split(`|`).pop()??e.name;h.set(t,m.clipAction(e))}let g=h.get(`Death`);g&&(g.setLoop(lt,1),g.clampWhenFinished=!0);let _=f.get(`WristR`)??null,v=f.get(`Head`)??null,y=d.find(e=>e.id===t.headShape)?.scale??[1,1,1],b={key:D(t,n),model:s,mixer:m,actions:h,current:``,hand:_,weapon:null,weaponId:``,rigSignature:``,headBone:v,headScale:y,skins:n};Xp(b,`Idle_Gun`),m.update(0),e.root.updateWorldMatrix(!0,!0);let x=e.root.getWorldQuaternion(new mn),S=e=>new V(e[0],e[1],-e[2]).applyQuaternion(x),C=c(t.hat),T=f.get(`Head_end`);if(C?.hat&&v&&T){let e=T.getWorldPosition(new V),t=v.getWorldPosition(new V),n=pn.clamp((e.y-t.y)*1.05,.18,.34);Jp(v,Gp(C.hat,n),new V(e.x,e.y-n*.18,e.z),x)}let E=c(t.fists);if(E?.glove)for(let e of[`L`,`R`]){let t=f.get(`Wrist${e}`),n=f.get(`LowerArm${e}`);if(!t||!n)continue;let r=t.getWorldPosition(new V),i=r.clone().sub(n.getWorldPosition(new V)).normalize();Jp(t,qp(E.glove),r.addScaledVector(i,.06),x)}for(let e of[t.hat,t.head,t.top,t.pants,t.shoes,t.fists])for(let t of c(e)?.addOns??[]){let e=f.get(t.bone);if(!e)continue;let n=e.getWorldPosition(new V).add(S(t.offset));Jp(e,Kp(t),n,x)}return b}function Xp(e,t,n=1){let r=e.actions.get(t)??e.actions.get(`Idle`);if(!r||(r.timeScale=n,e.current===t))return;let i=e.actions.get(e.current);r.reset().play(),i&&r.crossFadeFrom(i,Lp,!1),e.current=t}var Zp={booyah_dance:`Wave`,cobra_wave:`Roll`,laugh_taunt:`Kick_Right`},Qp=new Map;function $p(e){if(typeof document>`u`)return null;let t=Qp.get(e.id);if(t)return t;let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`);if(!r)return null;let i=e=>`#${e.toString(16).padStart(6,`0`)}`;r.fillStyle=i(e.primary),r.fillRect(0,0,64,64),r.fillStyle=i(e.secondary);let a=e.id.length*977,o=()=>(a=a*16807%2147483647)/2147483647;if(e.pattern===`camo`)for(let e=0;e<14;e++)r.beginPath(),r.ellipse(o()*64,o()*64,4+o()*9,3+o()*6,o()*3,0,Math.PI*2),r.fill();else if(e.pattern===`stripes`)for(let e=-64;e<64;e+=12)r.beginPath(),r.moveTo(e,0),r.lineTo(e+6,0),r.lineTo(e+70,64),r.lineTo(e+64,64),r.fill();else if(e.pattern===`digital`)for(let e=0;e<70;e++)r.fillRect(Math.floor(o()*16)*4,Math.floor(o()*16)*4,4,4);else if(e.pattern===`carbon`)for(let e=0;e<64;e+=4)for(let t=e/4%2?0:4;t<64;t+=8)r.fillRect(t,e,4,4);else if(e.pattern===`gradient`){let t=r.createLinearGradient(0,0,64,64);t.addColorStop(0,i(e.primary)),t.addColorStop(1,i(e.secondary)),r.fillStyle=t,r.fillRect(0,0,64,64)}let s=new Ia(n);return s.colorSpace=St,s.wrapS=s.wrapT=M,s.magFilter=P,Qp.set(e.id,s),s}function em(e,t){let n=T(t);if(n.id===`skin_default`)return;let r=new io({color:16777215,map:$p(n),emissive:n.emissive});e.traverse(e=>{e instanceof q&&(e.material=r)})}function tm(e,t){if(e.weaponId===t||!e.hand||(e.weapon&&e.hand.remove(e.weapon),e.weaponId=t,e.weapon=null,t===`fists`))return;let n=Ep(t);em(n,e.skins[t]??`skin_default`),n.traverse(e=>{e instanceof q&&(e.castShadow=!0)}),e.hand.add(n),n.rotation.set(0,Math.PI/2,0),e.model.updateWorldMatrix(!0,!0);let r=new Nr().setFromObject(n).getSize(new V),i=Math.max(r.x,r.y,r.z,1e-6);n.scale.multiplyScalar(.8/i),e.hand.remove(n),e.hand.add(n),e.weapon=n}function nm(e,t,n,r){let i=`${e.outfitId}|${e.equippedWeaponId}|${e.holsteredWeaponId}`;i!==t.rigSignature&&(Vp(e,t.model),t.rigSignature=i),tm(t,n.activeWeaponId);let a=n.activeWeaponId!==`fists`,o=n.dropPhase&&n.dropPhase!==`grounded`;if(n.activeEmote&&Zp[n.activeEmote])Xp(t,Zp[n.activeEmote]);else if(o||!n.isGrounded)Xp(t,`Idle_Neutral`);else if(n.isProne)Xp(t,n.speed>.3?`Walk`:`Idle`,.55);else if(n.speed>.6){let e=n.moveAngle??0,i=n.isSprinting||n.speed>6,a=Math.min(1.4,Math.max(.6,n.speed/5.6));Math.abs(e)>3*Math.PI/4?Xp(t,`Run_Back`,a*.9):e>Math.PI/4?Xp(t,`Run_Right`,a):e<-Math.PI/4?Xp(t,`Run_Left`,a):r?Xp(t,`Run_Shoot`,a):Xp(t,i?`Run`:`Walk`,i?a:Math.min(1.6,n.speed/3.2))}else r||n.recoilKick>0?Xp(t,`Idle_Gun_Shoot`):n.isAds?Xp(t,a?`Idle_Gun_Pointing`:`Idle`):Xp(t,a?`Idle_Gun`:`Idle`);let s=n.isProne?Rp:0;t.model.rotation.x+=(s-t.model.rotation.x)*Math.min(1,n.dt*10),t.model.position.y=n.isProne?.18:0,t.mixer.update(n.dt),t.headBone?.scale.set(...t.headScale)}var rm=class{ctx=null;muted=!1;unlocked=!1;setMuted(e){this.muted=e}isMuted(){return this.muted}unlock(){if(this.unlocked||typeof window>`u`)return;let e=window.AudioContext||window.webkitAudioContext;if(e)try{this.ctx||=new e,this.ctx.state===`suspended`&&this.ctx.resume(),this.unlocked=!0}catch{}}play(e){if(!(this.muted||typeof window>`u`)&&(this.unlock(),this.ctx))try{let t=this.ctx.currentTime,n=this.ctx.createOscillator(),r=this.ctx.createGain();n.connect(r),r.connect(this.ctx.destination),e===`sfx_hit_headshot`?(n.type=`triangle`,n.frequency.setValueAtTime(1480,t),n.frequency.exponentialRampToValueAtTime(2220,t+.08),r.gain.setValueAtTime(.18,t),r.gain.exponentialRampToValueAtTime(.001,t+.16),n.start(t),n.stop(t+.16)):e===`sfx_gloo_wall`?(n.type=`sine`,n.frequency.setValueAtTime(320,t),n.frequency.exponentialRampToValueAtTime(880,t+.22),r.gain.setValueAtTime(.16,t),r.gain.exponentialRampToValueAtTime(.001,t+.23),n.start(t),n.stop(t+.23)):e===`sfx_medkit`?(n.type=`sine`,n.frequency.setValueAtTime(523.25,t),n.frequency.setValueAtTime(659.25,t+.12),r.gain.setValueAtTime(.14,t),r.gain.exponentialRampToValueAtTime(.001,t+.26),n.start(t),n.stop(t+.26)):e===`sfx_booyah`?(n.type=`triangle`,n.frequency.setValueAtTime(523.25,t),n.frequency.setValueAtTime(659.25,t+.14),n.frequency.setValueAtTime(783.99,t+.28),r.gain.setValueAtTime(.2,t),r.gain.exponentialRampToValueAtTime(.001,t+.55),n.start(t),n.stop(t+.55)):e===`sfx_shotgun_shot`?(n.type=`sawtooth`,n.frequency.setValueAtTime(150,t),n.frequency.exponentialRampToValueAtTime(48,t+.18),r.gain.setValueAtTime(.18,t),r.gain.exponentialRampToValueAtTime(.001,t+.19),n.start(t),n.stop(t+.19)):(n.type=`square`,n.frequency.setValueAtTime(e===`sfx_smg_shot`?320:230,t),n.frequency.exponentialRampToValueAtTime(75,t+.09),r.gain.setValueAtTime(.12,t),r.gain.exponentialRampToValueAtTime(.001,t+.1),n.start(t),n.stop(t+.1))}catch{}}};function im(e){let t={getState:()=>e.getSnapshot(),startMatch:()=>e.startMatch(),restartMatch:()=>e.restartMatch(),ejectFromAirplane:()=>e.ejectFromAirplane(),forceLand:(t=0,n=14)=>e.forceLand(t,n),selectOutfit:t=>e.selectOutfit(t),triggerEmote:(t=`booyah_dance`)=>e.triggerEmote(t),equipScope:t=>e.equipScope(t),setMobileMode:t=>e.setMobileMode(t),deployGlooWall:()=>e.triggerGlooWall(),useMedkit:()=>e.triggerMedkit(),fireWeapon:()=>e.triggerFire(),aimAtNearestBot:(t=!0)=>e.aimAtNearestBot(t),teleportNearLoot:()=>e.teleportNearLoot(),toggleVehicle:()=>e.toggleVehicle(),teleportNearVehicle:(t=`pickup`)=>e.teleportNearVehicle(t),teleportTo:(t,n,r)=>e.teleportTo(t,n,r),getHouseEntrance:t=>e.getHouseEntrance(t),setGraphicsQuality:t=>e.setGraphicsQuality(t),getTownCenters:()=>e.getTownCenters(),forceBooyah:()=>e.forceBooyah(),forceEliminated:()=>e.forceEliminated(),step:t=>e.stepManual(t),getPerfMetrics:()=>e.getPerfMetrics(),getTriangleBreakdown:()=>e.worldScene.visibleTriangleBreakdown()};return typeof window<`u`&&(window.__GDL=t,window.__GAME__=t),t}var am=class{keys=new Set;justPressed=new Set;mouseFireHeld=!1;mouseFireJust=!1;mouseAdsHeld=!1;adsToggleState=!1;touchMoveX=0;touchMoveZ=0;touchSprint=!1;touchFireHeld=!1;touchFireJust=!1;lookScale=()=>1;pendingYaw=0;pendingPitch=0;keyTurnVelYaw=0;keyTurnVelPitch=0;bind(e,t){e.addEventListener(`keydown`,e=>{let t=e.code;this.keys.has(t)||(this.justPressed.add(t),t===`KeyV`&&(this.adsToggleState=!this.adsToggleState)),this.keys.add(t)}),e.addEventListener(`keyup`,e=>{this.keys.delete(e.code)}),e.addEventListener(`mousemove`,e=>{if(typeof document<`u`&&document.pointerLockElement){let t=Math.max(-85,Math.min(85,e.movementX)),n=Math.max(-85,Math.min(85,e.movementY)),r=this.lookScale();this.pendingYaw-=t*.0022*r,this.pendingPitch-=n*.0018*r}}),t&&(t.addEventListener(`mousedown`,e=>{e.button===0?(this.mouseFireHeld=!0,this.mouseFireJust=!0):e.button===2&&(this.mouseAdsHeld=!0)}),e.addEventListener(`mouseup`,e=>{e.button===0?this.mouseFireHeld=!1:e.button===2&&(this.mouseAdsHeld=!1)}),t.addEventListener(`contextmenu`,e=>e.preventDefault()))}setTouchJoystick(e,t,n){this.touchMoveX=Math.max(-1,Math.min(1,e)),this.touchMoveZ=Math.max(-1,Math.min(1,t)),this.touchSprint=n}setTouchFire(e){e&&!this.touchFireHeld&&(this.touchFireJust=!0),this.touchFireHeld=e}toggleAds(){return this.adsToggleState=!this.adsToggleState,this.adsToggleState}triggerAction(e){this.justPressed.add(e),e===`KeyV`&&(this.adsToggleState=!this.adsToggleState)}setKeyHeld(e,t){t?(this.keys.has(e)||this.justPressed.add(e),this.keys.add(e)):this.keys.delete(e)}setLookScaleProvider(e){this.lookScale=e}addLookDelta(e,t){let n=this.lookScale();this.pendingYaw+=e*n,this.pendingPitch+=t*n}sample(e){let t=(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`)?1:0)-(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`)?1:0),n=+!!this.keys.has(`KeyD`)-!!this.keys.has(`KeyA`),r=Math.abs(this.touchMoveX)>.01?this.touchMoveX:n,i=Math.abs(this.touchMoveZ)>.01?this.touchMoveZ:t,a=((this.keys.has(`KeyJ`)||this.keys.has(`ArrowLeft`)?1:0)-(this.keys.has(`KeyL`)||this.keys.has(`ArrowRight`)?1:0))*1.85,o=(+!!this.keys.has(`KeyI`)-!!this.keys.has(`KeyK`))*1.25,s=1-Math.exp(-14*Math.max(.001,e));this.keyTurnVelYaw+=(a-this.keyTurnVelYaw)*s,this.keyTurnVelPitch+=(o-this.keyTurnVelPitch)*s;let c=this.keyTurnVelYaw*e,l=this.keyTurnVelPitch*e,u=this.keys.has(`KeyF`),d=this.justPressed.has(`KeyF`),f={moveX:r,moveZ:i,sprint:this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)||this.touchSprint,jumpPressed:this.justPressed.has(`Space`),crouchToggled:this.justPressed.has(`KeyC`),proneToggled:this.justPressed.has(`KeyZ`),fireHeld:this.mouseFireHeld||u||this.touchFireHeld,fireJustPressed:this.mouseFireJust||d||this.touchFireJust,adsHeld:this.mouseAdsHeld||this.adsToggleState,reloadPressed:this.justPressed.has(`KeyR`),glooPressed:this.justPressed.has(`KeyG`)||this.justPressed.has(`KeyQ`),medkitPressed:this.justPressed.has(`Digit4`)||this.justPressed.has(`KeyH`)||this.justPressed.has(`KeyE`),interactPressed:this.justPressed.has(`KeyE`),slot1Pressed:this.justPressed.has(`Digit1`),slot2Pressed:this.justPressed.has(`Digit2`),slot3Pressed:this.justPressed.has(`Digit3`),cycleScopePressed:this.justPressed.has(`KeyX`),emote1Pressed:this.justPressed.has(`KeyB`),emote2Pressed:this.justPressed.has(`KeyN`),emote3Pressed:this.justPressed.has(`KeyM`),outfitCyclePressed:this.justPressed.has(`KeyO`),pausePressed:this.justPressed.has(`Escape`)||this.justPressed.has(`KeyP`),lookDeltaYaw:this.pendingYaw+c,lookDeltaPitch:this.pendingPitch+l};return this.justPressed.clear(),this.mouseFireJust=!1,this.touchFireJust=!1,this.pendingYaw=0,this.pendingPitch=0,f}},om=class{onFixedUpdate;onRender;fixedStep=1/60;accumulator=0;lastTime=0;running=!1;fps=60;frameTimeMs=16.67;constructor(e,t){this.onFixedUpdate=e,this.onRender=t}start(){this.running=!0,this.lastTime=performance.now()}stop(){this.running=!1}tick(e){if(!this.running)return;if(typeof document<`u`&&document.hidden){this.lastTime=e;return}let t=Math.max(0,(e-this.lastTime)/1e3);this.lastTime=e;let n=Math.min(t,.1);if(t>0){let e=1/Math.max(t,.001);this.fps=this.fps*.88+e*.12,this.frameTimeMs=this.frameTimeMs*.88+t*1e3*.12}for(this.accumulator+=n;this.accumulator>=this.fixedStep;)this.onFixedUpdate(this.fixedStep),this.accumulator-=this.fixedStep;this.onRender(this.accumulator/this.fixedStep)}stepManual(e){let t=Math.max(0,e/1e3);for(;t>1e-6;){let e=Math.min(this.fixedStep,t);this.onFixedUpdate(e),t-=e}this.onRender(0)}getMetrics(){return{fps:Math.round(this.fps*10)/10,frameTimeMs:Math.round(this.frameTimeMs*100)/100}}},sm=[.6,.8,1,1.25,1.5,2],cm=[`off`,`normal`,`strong`];function lm(e){return e===`off`?0:e===`strong`?8:5}function um(e){return e===`off`?1:e===`strong`?.45:.65}var dm=.1,fm=1.25;function pm(e,t){let n=Math.hypot(e,t);if(n<=dm)return{x:0,z:0,magnitude:0};let r=Math.min(1,(n-dm)/.9)**+fm;return{x:e/n*r,z:t/n*r,magnitude:r}}var mm=140;function hm(e,t,n){let r=Math.hypot(e,t);if(r<1e-6)return{dx:0,dy:0};let i=Math.min(r,mm),a=1+.6*Math.min(1,Math.max(0,i-6)/30),o=Math.min(1.4,Math.max(.5,380/Math.max(240,n))),s=i/r*a*o;return{dx:e*s,dy:t*s}}function gm(e){let t=Math.tan(e*Math.PI/360)/Math.tan($.normalFov*Math.PI/360);return Math.min(1,Math.max(.05,t))**.75}var _m=`free_fire_mini_save_v1`,vm=new Map;function ym(){return{schemaVersion:1,matchesPlayed:0,booyahs:0,totalKills:0,bestKills:0,totalDamage:0,selectedOutfit:`street_gold`,coins:g,ownedSets:[...h],loadout:m(y.street_gold),weaponSkins:{...v},settings:{locale:`th`,muted:!1,reducedMotion:!1,graphics:`auto`,shadows:!1,lightingEffects:!1,lookSensitivity:1,aimAssist:`normal`}}}function bm(e){let t=ym();if(!e||typeof e!=`object`)return t;let n=e,r=n.settings&&typeof n.settings==`object`?n.settings:{},i=(e,t=0)=>typeof e==`number`&&Number.isFinite(e)&&e>=0?Math.floor(e):t,o=n.selectedOutfit,s=dp.includes(o)?o:`street_gold`,c=Array.isArray(n.ownedSets)?n.ownedSets:[],l=[...new Set([...h,...c.filter(e=>a.some(t=>t.id===e))])];return{schemaVersion:1,matchesPlayed:i(n.matchesPlayed,0),booyahs:i(n.booyahs,0),totalKills:i(n.totalKills,0),bestKills:i(n.bestKills,0),totalDamage:i(n.totalDamage,0),selectedOutfit:s,coins:typeof n.coins==`number`?i(n.coins,g):g,ownedSets:l,loadout:n.loadout?S(n.loadout,l):m(h[0]),weaponSkins:C(n.weaponSkins),settings:{locale:r.locale===`en`?`en`:`th`,muted:!!r.muted,reducedMotion:!!r.reducedMotion,graphics:[`auto`,`low`,`medium`,`high`].includes(r.graphics)?r.graphics:`auto`,shadows:r.shadows===!0,lightingEffects:r.lightingEffects===!0,lookSensitivity:sm.includes(r.lookSensitivity)?r.lookSensitivity:1,aimAssist:cm.includes(r.aimAssist)?r.aimAssist:`normal`}}}function xm(){try{let e=typeof localStorage<`u`?localStorage.getItem(_m):vm.get(`free_fire_mini_save_v1`)??null;return e?bm(JSON.parse(e)):ym()}catch{return ym()}}function Sm(e){let t=JSON.stringify(bm(e));try{typeof localStorage<`u`?localStorage.setItem(_m,t):vm.set(_m,t)}catch{vm.set(_m,t)}}function Cm(e,t,n,r){let i={...e,schemaVersion:1,matchesPlayed:e.matchesPlayed+1,booyahs:e.booyahs+ +!!t,totalKills:e.totalKills+Math.max(0,n),bestKills:Math.max(e.bestKills,n),totalDamage:e.totalDamage+Math.max(0,Math.round(r)),coins:e.coins+b(Math.max(0,n),t)};return Sm(i),i}var wm=class{chunkSize;cells=new Map;globals=[];lastX=NaN;lastZ=NaN;lastView=-1;lastVisible=0;constructor(e){if(this.chunkSize=e,!(e>0))throw Error(`chunkSize must be > 0`)}cellIndex(e){return Math.floor(e/this.chunkSize)}keyOf(e,t){return`${this.cellIndex(e)},${this.cellIndex(t)}`}add(e,t,n){let r=this.cellIndex(t),i=this.cellIndex(n),a=`${r},${i}`,o=this.cells.get(a);o||(o={cx:r,cz:i,items:[]},this.cells.set(a,o)),o.items.push(e)}addGlobal(e){this.globals.push(e)}get chunkCount(){return this.cells.size}get visibleChunkCount(){return this.lastVisible}isChunkVisible(e,t){let n=this.cells.get(this.keyOf(e,t));return!!n&&n.items.length>0&&n.items.every(e=>e.visible)}update(e,t,n,r=!1){if(!r&&n===this.lastView&&Math.hypot(e-this.lastX,t-this.lastZ)<4)return this.lastVisible;this.lastX=e,this.lastZ=t,this.lastView=n;let i=0,a=this.chunkSize;for(let r of this.cells.values()){let o=r.cx*a,s=r.cz*a,c=Math.max(o-e,0,e-(o+a)),l=Math.max(s-t,0,t-(s+a)),u=Math.hypot(c,l)<=n;u&&i++;for(let e of r.items)e.visible=u}for(let e of this.globals)e.visible=!0;return this.lastVisible=i,i}};function Tm(e,t,n,r){let i=[],a=new Map;for(let o of e){if(r(o)){i.push(o);continue}let[e,s]=n(o),c=Math.floor(e/t),l=Math.floor(s/t),u=`${c},${l}`,d=a.get(u);d||(d={cx:c,cz:l,parts:[]},a.set(u,d)),d.parts.push(o)}return{globals:i,buckets:a}}var Em=class{cellSize;cells=new Map;count=0;constructor(e=32){this.cellSize=e}key(e,t){return(e+4096)*8192+(t+4096)}add(e){let t=Math.floor(e.x/this.cellSize),n=Math.floor(e.z/this.cellSize),r=this.key(t,n),i=this.cells.get(r);i||(i=[],this.cells.set(r,i)),i.push(e),this.count++}get size(){return this.count}query(e,t,n,r=[]){r.length=0;let i=this.cellSize,a=Math.floor((e-n-4)/i),o=Math.floor((e+n+4)/i),s=Math.floor((t-n-4)/i),c=Math.floor((t+n+4)/i);for(let e=a;e<=o;e++)for(let t=s;t<=c;t++){let n=this.cells.get(this.key(e,t));if(n)for(let e of n)r.push(e)}return r}collidesCircle(e,t,n,r=[],i,a=0){let o=this.query(e,t,n,r);for(let r of o){if(i!==void 0&&r.h!==void 0&&r.h<=i+a)continue;let o=r.r+n,s=e-r.x,c=t-r.z;if(s*s+c*c<o*o)return!0}return!1}pushOut(e,t,n,r,i=0,a=[]){let o=e,s=t;for(let e=0;e<3;e++){let e=!1;for(let t of this.query(o,s,n,a)){if(r!==void 0&&t.h!==void 0&&t.h<=r+i)continue;let a=t.r+n,c=o-t.x,l=s-t.z,u=c*c+l*l;if(u>=a*a)continue;let d=Math.sqrt(u)||1e-6;o=t.x+c/d*a,s=t.z+l/d*a,e=!0}if(!e)break}return[o,s]}topAt(e,t,n,r,i=[]){let a=0;for(let o of this.query(e,t,0,i)){if(o.h===void 0||o.h>n+r)continue;let i=e-o.x,s=t-o.z;i*i+s*s<o.r*o.r&&o.h>a&&(a=o.h)}return a}};function Dm(e,t,n,r){return e.type===`rect`?Math.abs(t-e.cx)<=e.hw+r&&Math.abs(n-e.cz)<=e.hd+r:Math.hypot(t-e.cx,n-e.cz)<=e.r+r}function Om(e,t,n){let r=e.x2-e.x1,i=e.z2-e.z1,a=r*r+i*i,o=a>0?((t-e.x1)*r+(n-e.z1)*i)/a:0;return o=Math.max(0,Math.min(1,o)),Math.hypot(t-(e.x1+r*o),n-(e.z1+i*o))}function km(e,t,n,r,i){let a=e.halfSize-6;if(Math.abs(t)>a||Math.abs(n)>a)return!0;let o=i.avoidTags;for(let i of e.zones)if((!o||o.includes(i.tag))&&Dm(i,t,n,r))return!0;let s=i.roadMargin??1;if(s>=0){for(let i of e.roads)if(Om(i,t,n)<i.width*.5+s+r)return!0}return!1}function Am(e,t){let n=wf(e.seed),r=[],i=new Map,a=(e,t)=>(e+1024)*4096+(t+1024),o=new Map,s=t=>{let n=o.get(t);return n||(n=e.zones.filter(e=>e.tag===t),o.set(t,n)),n};for(let o of e.rules){let c=t(o.kind),l=o.count*14+40,u=0;for(let t=0;t<l&&u<o.count;t++){let t,l;if(o.nearTag){let e=s(o.nearTag);if(e.length===0)break;let r=e[Math.floor(n()*e.length)],i=n()*Math.PI*2,a=o.ringMin??1,c=o.ringMax??10,u=(r.type===`rect`?Math.hypot(r.hw,r.hd)*.85:r.r)+a+n()*Math.max(0,c-a);t=r.cx+Math.cos(i)*u,l=r.cz+Math.sin(i)*u}else if(o.region){let e=n()*Math.PI*2,r=Math.sqrt(n())*o.region.r;t=o.region.cx+Math.cos(e)*r,l=o.region.cz+Math.sin(e)*r}else{let r=e.halfSize-8;t=(n()*2-1)*r,l=(n()*2-1)*r}if(km(e,t,l,c.radius,o))continue;let d=Math.ceil(Math.max(o.minSpacing,c.radius+4)/8),f=Math.floor(t/8),p=Math.floor(l/8),m=!0;for(let e=-d;e<=d&&m;e++)for(let n=-d;n<=d&&m;n++){let r=i.get(a(f+e,p+n));if(r)for(let e of r){let n=Math.max(o.minSpacing,c.radius+e.r),r=e.x-t,i=e.z-l;if(r*r+i*i<n*n){m=!1;break}}}if(!m)continue;let h=o.scaleMin??.85,g=o.scaleMax??1.25,_=h+n()*(g-h),v={kind:o.kind,x:t,z:l,rot:n()*Math.PI*2,scale:_};r.push(v);let y=a(f,p),b=i.get(y),x={x:t,z:l,r:c.radius*_};b?b.push(x):i.set(y,[x]),u++}}return r}function jm(e,t,n){let r=[];for(let i of e){let e=t(i.kind);e.solid&&r.push({x:i.x,z:i.z,r:(e.colliderRadius??e.radius)*i.scale,h:e.height===void 0?void 0:e.height*i.scale+(n?n(i.x,i.z):0)})}return r}var Mm=class{defs=new Map;register(e){return this.defs.set(e.id,e),this}has(e){return this.defs.has(e)}ids(){return[...this.defs.keys()]}get(e){let t=this.defs.get(e);if(!t)throw Error(`Unknown prop kind: ${e}`);return t}footprint=e=>{let t=this.get(e);return{radius:t.radius,solid:t.solid,colliderRadius:t.colliderRadius,height:t.height}}};function Nm(){let e=new Mm;return e.register({id:`grass_tuft`,radius:.5,solid:!1}).register({id:`grass_tall`,radius:.6,solid:!1}).register({id:`flower_pink`,radius:.6,solid:!1}).register({id:`flower_yellow`,radius:.6,solid:!1}).register({id:`flower_purple`,radius:.6,solid:!1}).register({id:`bush`,radius:.9,solid:!1,shadowRadius:1.2}).register({id:`rock`,radius:1.2,solid:!0,colliderRadius:1,height:.85,shadowRadius:1.7}).register({id:`small_tree`,radius:1.6,solid:!0,colliderRadius:.5,shadowRadius:2.4}).register({id:`tree_olive`,radius:1.6,solid:!0,colliderRadius:.5,shadowRadius:2.2}).register({id:`tree_pine`,radius:1.6,solid:!0,colliderRadius:.5,shadowRadius:1.9}).register({id:`tree_tall`,radius:1.6,solid:!0,colliderRadius:.5,shadowRadius:1.9}).register({id:`tree_palm`,radius:1.8,solid:!0,colliderRadius:.45,shadowRadius:2}).register({id:`tree_blossom`,radius:1.6,solid:!0,colliderRadius:.5,shadowRadius:2.6}).register({id:`log`,radius:1.3,solid:!1,shadowRadius:1.5}).register({id:`crate_stack`,radius:1.5,solid:!0,colliderRadius:1.25,height:1.2,shadowRadius:2}).register({id:`barrel_cluster`,radius:1.3,solid:!0,colliderRadius:1.1,height:1,shadowRadius:1.8}).register({id:`hay_bale`,radius:1.2,solid:!0,colliderRadius:1,height:1,shadowRadius:1.4}).register({id:`fence_segment`,radius:1.8,solid:!1}).register({id:`tent`,radius:1.9,solid:!0,colliderRadius:1.5,shadowRadius:2.4}).register({id:`shed`,radius:2.6,solid:!0,colliderRadius:2.2,shadowRadius:3.2}).register({id:`water_tower`,radius:2.8,solid:!0,colliderRadius:2.6,shadowRadius:3.4}).register({id:`tire_stack`,radius:.9,solid:!0,colliderRadius:.7,height:.6,shadowRadius:1.2}),e}function Pm(e,t,n){return .9+.2*Bm(t/70+e.x*.013,n/70+e.z*.017,5)}var Fm=1.1;function Im(e){return .3*e+.7*e*e*(3-2*e)}function Lm(e,t,n){let r=0;for(let i of e){let e=i.radius*Pm(i,t,n),a=Math.hypot(t-i.x,n-i.z);if(a>=e)continue;let o=i.centerY-i.height/2+i.height*Im(1-a/e);o>r&&(r=o)}return r}var Rm=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function zm(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,2246822519)|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function Bm(e,t,n=1){let r=Math.floor(e),i=Math.floor(t),a=Rm(e-r),o=Rm(t-i),s=zm(r,i,n),c=zm(r+1,i,n),l=zm(r,i+1,n),u=zm(r+1,i+1,n);return s+(c-s)*a+(l-s)*o+(s-c-l+u)*a*o}function Vm(e,t,n,r,i=1){let a=0,o=1,s=0,c=1/n;for(let n=0;n<r;n++)a+=Bm(e*c,t*c,i+n*17)*o,s+=o,o*=.5,c*=2;return a/s}function Hm(e,t,n){if(e.type===`circle`)return Math.hypot(t-e.x,n-e.z)-e.r;if(e.type===`rect`){let r=Math.max(Math.abs(t-e.x)-e.hw,0),i=Math.max(Math.abs(n-e.z)-e.hd,0);return Math.hypot(r,i)}let r=e.x2-e.x1,i=e.z2-e.z1,a=r*r+i*i,o=a>0?Math.min(1,Math.max(0,((t-e.x1)*r+(n-e.z1)*i)/a)):0;return Math.hypot(t-(e.x1+r*o),n-(e.z1+i*o))-e.r}var Um=class{halfSize;cell;falloff;cells;n;constructor(e,t,n,r){this.halfSize=t,this.cell=n,this.falloff=r,this.n=Math.ceil(t*2/n)+1,this.cells=new Float32Array(this.n*this.n).fill(r);for(let t of e)this.stamp(t);for(let e=0;e<this.cells.length;e++)this.cells[e]=Rm(this.cells[e]/r)}bounds(e){let t=this.falloff+this.cell;return e.type===`circle`?[e.x-e.r-t,e.x+e.r+t,e.z-e.r-t,e.z+e.r+t]:e.type===`rect`?[e.x-e.hw-t,e.x+e.hw+t,e.z-e.hd-t,e.z+e.hd+t]:[Math.min(e.x1,e.x2)-e.r-t,Math.max(e.x1,e.x2)+e.r+t,Math.min(e.z1,e.z2)-e.r-t,Math.max(e.z1,e.z2)+e.r+t]}stamp(e){let[t,n,r,i]=this.bounds(e),a=Math.max(0,Math.floor((t+this.halfSize)/this.cell)),o=Math.min(this.n-1,Math.ceil((n+this.halfSize)/this.cell)),s=Math.max(0,Math.floor((r+this.halfSize)/this.cell)),c=Math.min(this.n-1,Math.ceil((i+this.halfSize)/this.cell));for(let t=s;t<=c;t++)for(let n=a;n<=o;n++){let r=Math.max(0,Hm(e,n*this.cell-this.halfSize,t*this.cell-this.halfSize)),i=t*this.n+n;r<this.cells[i]&&(this.cells[i]=r)}}at(e,t){let n=Math.min(this.n-1.001,Math.max(0,(e+this.halfSize)/this.cell)),r=Math.min(this.n-1.001,Math.max(0,(t+this.halfSize)/this.cell)),i=Math.floor(n),a=Math.floor(r),o=n-i,s=r-a,c=this.cells[a*this.n+i],l=this.cells[a*this.n+i+1],u=this.cells[(a+1)*this.n+i],d=this.cells[(a+1)*this.n+i+1];return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}},Wm=class{cell;cells=new Map;count=0;constructor(e=16){this.cell=e}key(e,t){return(e+4096)*8192+(t+4096)}get size(){return this.count}add(e){let t=Math.floor(e.minX/this.cell),n=Math.floor(e.maxX/this.cell),r=Math.floor(e.minZ/this.cell),i=Math.floor(e.maxZ/this.cell);for(let a=t;a<=n;a++)for(let t=r;t<=i;t++){let n=this.key(a,t),r=this.cells.get(n);r?r.push(e):this.cells.set(n,[e])}this.count++}queryRect(e,t,n,r){let i=new Set,a=Math.floor(e/this.cell),o=Math.floor(t/this.cell),s=Math.floor(n/this.cell),c=Math.floor(r/this.cell);for(let e=a;e<=o;e++)for(let t=s;t<=c;t++){let n=this.cells.get(this.key(e,t));if(n)for(let e of n)i.add(e)}return[...i]}queryCircle(e,t,n){return this.queryRect(e-n,e+n,t-n,t+n)}queryRay(e,t,n,r,i){let a=new Set,o=Math.hypot(n,r);if(o<1e-9)return this.queryCircle(e,t,this.cell);let s=n/o,c=r/o,l=this.cell*.5,u=Math.ceil(i/l),d=NaN,f=NaN;for(let n=0;n<=u;n++){let r=Math.min(i,n*l),o=Math.floor((e+s*r)/this.cell),u=Math.floor((t+c*r)/this.cell);if(o!==d||u!==f){d=o,f=u;for(let e=o-1;e<=o+1;e++)for(let t=u-1;t<=u+1;t++){let n=this.cells.get(this.key(e,t));if(n)for(let e of n)a.add(e)}}}return[...a]}},Gm=.3,Km=.3,qm=.4,Jm=3/Km,Ym=1.3,Xm=13214315,Zm=9357800;function Qm(e){return e>=6?2:1}function $m(e,t){let n=e>>16&255,r=e>>8&255,i=e&255,a=e=>Math.round(e+(255-e)*t);return a(n)<<16|a(r)<<8|a(i)}function eh(e,t,n,r){let i=e-2*n;if(i<.8)return[];let a=Math.floor(i/r)+1,o=a>1?Math.min(r+.4,i/(a-1)):0,s=[];for(let e=0;e<a;e++){let n=(e-(a-1)/2)*o;t.some(e=>Math.abs(n-e)<1.7)||s.push(n)}return s}var th=class{boxes=[];box(e,t,n,r,i,a,o,s,c,l){this.boxes.push({x:e,y:t,z:n,sx:r,sy:i,sz:a,color:o,solid:s,...c?{faceColors:c}:{},...l?{onlyFaces:l}:{}})}wall(e,t,n,r,i,a,o,s,c){let l=s?{[s]:c}:void 0,u=(n,r,a,s)=>{if(r-n<.02||s-a<.02)return;let c=(n+r)/2,u=i+(a+s)/2,d=s-a;e===`x`?this.box(c,u,t,r-n,d,Gm,o,!0,l):this.box(t,u,c,Gm,d,r-n,o,!0,l)},d=[...a].sort((e,t)=>e.c-t.c),f=n;for(let n of d){let r=n.c-n.w/2,a=n.c+n.w/2;u(f,r,0,3),u(r,a,0,n.sill),u(r,a,n.top,3),f=a;let o=i+(n.sill+n.top)/2;if(!n.door){let r=n.top-n.sill-.1;e===`x`?this.box(n.c,o,t,n.w-.1,r,.06,Zm,!1,void 0,[`+z`,`-z`]):this.box(t,o,n.c,.06,r,n.w-.1,Zm,!1,void 0,[`+x`,`-x`])}}u(f,r,0,3)}},nh={"+z":`+x`,"+x":`-z`,"-z":`-x`,"-x":`+z`,"+y":`+y`,"-y":`-y`};function rh(e){let t=wf(e.seed>>>0),n=e.facing,r=n%2==0?e.width:e.depth,i=n%2==0?e.depth:e.width,a=e.floors,o=e.wallColor,s=$m(o,.62),c=$m(o,.8),l=new th;l.box(0,.02,0,r+1,.04,i+1,12107463,!1),l.box(0,.056,0,r-2*Gm,.03,i-2*Gm,Xm,!1);let u=(t()*2-1)*.15*r,d=i/2-Gm/2,f=-i/2+Gm/2,p=-r/2+Gm/2,m=r/2-Gm/2,h=-i/2+Gm,g=i/2-Gm,_=r>=9;for(let e=0;e<a;e++){let t=e*3,n=e=>({c:e,w:1.2,sill:1,top:2.1,door:!1}),a=[];e===0&&a.push({c:u,w:1.5,sill:0,top:2.4,door:!0});for(let t of eh(r,e===0?[u]:[],1.3,3.6))a.push(n(t));l.wall(`x`,d,-r/2,r/2,t,a,o,`-z`,s);let c=[];e===0&&_&&c.push({c:-u,w:1.4,sill:0,top:2.4,door:!0});for(let t of eh(r,e===0&&_?[-u]:[],1.3,3.6))c.push(n(t));l.wall(`x`,f,-r/2,r/2,t,c,o,`+z`,s);let v=eh(i-2*Gm,[],1.5,3.8).map(n);l.wall(`z`,p,h,g,t,v,o,`+x`,s),l.wall(`z`,m,h,g,t,v.map(e=>({...e})),o,`-x`,s)}if(r>=11){let e=.12*r;l.wall(`z`,e,h,g,0,[{c:.1*i,w:1.3,sill:0,top:2.3,door:!0}],s,null,s)}let v=i/2-Gm-1.8,y=-r/2+Gm,b=y+Ym,x=v-Jm*qm,S=-r/2+Gm,C=r/2-Gm,w=-i/2+Gm,T=i/2-Gm,E={"+y":Xm,"-y":c},D=(e,t,n,r)=>{t-e<.05||r-n<.05||l.box((e+t)/2,2.875,(n+r)/2,t-e,.25,r-n,o,!0,E)};if(a===2){D(b,C,w,T),D(S,b,v,T),D(S,b,w,x);for(let e=0;e<Jm;e++){let t=(e+1)*Km;l.box((y+b)/2,t/2,v-qm*e-qm/2,Ym,t,qm,9741240,!0)}}let O=a*3;l.box(0,O+.125,0,r+.6,.25,i+.6,e.roofColor,!0,{"-y":c});let k=$m(e.roofColor,.25);l.box(0,O+.45,(i+.6)/2-.09,r+.6,.4,.18,k,!1),l.box(0,O+.45,-(i+.6)/2+.09,r+.6,.4,.18,k,!1),l.box((r+.6)/2-.09,O+.45,0,.18,.4,i+.6-.36,k,!1),l.box(-(r+.6)/2+.09,O+.45,0,.18,.4,i+.6-.36,k,!1),l.box(u,2.7,i/2+.55,3,.12,1.3,15381256,!1);let A=r/2-1.3;l.box(A,.4,-i/2+1.2,1.4,.8,.9,9132587,!0),l.box(A,.45,i/2-2.4,.9,.9,.9,10576391,!0),l.box(-r*.1,.25,-i/2+1.4,1,.5,2,6333946,!0),a===2&&(l.box(A,3.4,-i/2+1.2,1.4,.8,.9,9132587,!0),l.box(-r*.1,3.25,0,1,.5,2,16281969,!0));let j=[[.2*r,-.1*i]];r>=12&&j.push([-.1*r,.12*i]);let ee=(t,r)=>{let i=t,a=r;for(let e=0;e<n;e++)[i,a]=[a,-i];return[i+e.x,a+e.z]};return{boxes:l.boxes.map(e=>{let[t,r]=ee(e.x,e.z),i=n%2==1,a=e.faceColors;if(a&&n>0){let e={};for(let[t,r]of Object.entries(a)){let i=t;for(let e=0;e<n;e++)i=nh[i];e[i]=r}a=e}return{...e,x:t,z:r,sx:i?e.sz:e.sx,sz:i?e.sx:e.sz,...a?{faceColors:a}:{}}}),loot:j.map(([e,t])=>ee(e,t)),door:ee(u,i/2+1.5),stairs:a===2?{start:ee((y+b)/2,v+.6),dir:((e,t)=>{let r=e,i=t;for(let e=0;e<n;e++)[r,i]=[i,-r];return[r,i]})(0,-1)}:null}}var ih=12,ah=210,oh=10,sh=55,ch=20261031,lh=null;function uh(){if(lh)return lh;let e=[];for(let t of qf)e.push({type:`circle`,x:t.cx,z:t.cz,r:t.radius+12});for(let t of yp)e.push({type:`circle`,x:t.cx,z:t.cz,r:t.radius+10});for(let[t,n,r]of $f)e.push({type:`circle`,x:t,z:n,r:r+8});for(let[t,n,r]of ep)e.push({type:`circle`,x:t,z:n,r:r+8});for(let t of bp)e.push({type:`rect`,x:t.x,z:t.z,hw:t.width/2+8,hd:t.depth/2+8});for(let t of[...Xf(),...lp(yp).segments])e.push({type:`segment`,x1:t.x1,z1:t.z1,x2:t.x2,z2:t.z2,r:t.width/2+(t.tag===`water`?14:8)});for(let t of Qf)e.push({type:`circle`,x:t.x,z:t.z,r:t.radius+6});return lh=new Um(e,$.islandHalfSize+60,oh,sh),lh}function dh(e,t){return Rm((Math.max(Math.abs(e),Math.abs(t))-1120)/130)}function fh(e,t){let n=Rm((Vm(e,t,ah,3,ch)-.3)/.4)*ih,r=dh(e,t);return n*uh().at(e,t)*(1-r)-1.6*r}function ph(e,t){let n=fh(e,t),r=Lm(Qf,e,t);return r>0?Math.max(r,n):n}function mh(e=`street_gold`,t=`player`,n=`YOU (CONTENDER)`){return{id:t,name:n,position:{x:0,y:0,z:14},velocity:{x:0,y:0,z:0},yaw:0,pitch:-.06,hp:$.maxHp,maxHp:$.maxHp,ep:120,maxEp:$.maxEp,shield:75,maxShield:$.maxShield,isSprinting:!1,isCrouching:!1,isProne:!1,isGrounded:!0,isAds:!1,dropPhase:`grounded`,airplanePos:{x:-85,y:$.airplaneAltitude,z:95},airplaneEnd:{x:620,y:$.airplaneAltitude,z:-610},airplaneYaw:Math.atan2(-705,705),outfitId:e,activeEmote:null,emoteTimer:0,hasScope2x:!1,hasScope4x:!1,activeScope:`none`,activeSlot:0,weapons:[`m4a1`,`mp40`,`fists`],ammoInMag:[30,28,999],reserveAmmo:{AR:120,SMG:112,SG:24,MELEE:999},reloadTimer:0,fireCooldown:0,glooWallCount:2,medkitCount:2,kills:0,headshots:0,damageDealt:0,drivingVehicleId:null,drivingVehicleSpeed:0,drivingVehicleYaw:0,smoothLookYaw:0,smoothLookPitch:0}}function hh(e){e.dropPhase=`airplane`,e.isGrounded=!1,e.isCrouching=!1,e.isAds=!1,e.drivingVehicleId=null,e.drivingVehicleSpeed=0,e.activeEmote=null,e.emoteTimer=0,e.airplanePos={x:-85,y:$.airplaneAltitude,z:95},e.airplaneEnd={x:620,y:$.airplaneAltitude,z:-610};let t=e.airplaneEnd.x-e.airplanePos.x,n=e.airplaneEnd.z-e.airplanePos.z;e.airplaneYaw=Math.atan2(-t,-n),e.position={...e.airplanePos},e.velocity={x:0,y:0,z:0},e.yaw=e.airplaneYaw,e.pitch=-.32,e.smoothCamPos=void 0,e.smoothCamTarget=void 0}function gh(e){return e.dropPhase===`airplane`?(e.dropPhase=`skydive`,e.isGrounded=!1,e.position.x=e.airplanePos.x,e.position.y=e.airplanePos.y-3,e.position.z=e.airplanePos.z,e.velocity.y=-$.skydiveDescentSpeed):e.dropPhase===`skydive`&&(e.dropPhase=`parachute`,e.velocity.y=-$.parachuteDescentSpeed),e.dropPhase}function _h(e,t=0,n=14){e.dropPhase=`grounded`,e.isGrounded=!0,e.drivingVehicleId=null,e.drivingVehicleSpeed=0,e.position.x=t,e.position.y=ph(t,n),e.position.z=n,e.velocity.x=0,e.velocity.y=0,e.velocity.z=0,e.smoothCamPos=void 0,e.smoothCamTarget=void 0}function vh(e){let t=[`none`];return e.hasScope2x&&t.push(`2x`),e.hasScope4x&&t.push(`4x`),e.activeScope=t[(t.indexOf(e.activeScope)+1)%t.length],e.activeScope}function yh(e){return e.outfitId=dp[(dp.indexOf(e.outfitId)+1)%dp.length],e.outfitId}function bh(e,t=`booyah_dance`){fp.includes(t)&&(e.activeEmote=t,e.emoteTimer=4.5,e.isAds=!1)}function xh(e,t,n){let r=t-e;return Math.abs(r)<=n?t:e+Math.sign(r)*n}function Sh(e,t,n,r,i){if(e.hp<=0)return;if(e.hp<e.maxHp&&e.ep>0){let t=Math.min(e.ep,e.maxHp-e.hp,$.epRegenPerSec*r);e.hp=Math.min(e.maxHp,e.hp+t),e.ep=Math.max(0,e.ep-t)}let a=Th(e),o=e.isAds?a/$.normalFov:1,s=t.lookDeltaYaw*o,c=t.lookDeltaPitch*o,l=r>=.08?1:1-Math.exp(-26*Math.max(.001,r));e.smoothLookYaw=e.smoothLookYaw*(1-l)+s,e.smoothLookPitch=e.smoothLookPitch*(1-l)+c;let u=e.smoothLookYaw*l,d=e.smoothLookPitch*l;if(e.smoothLookYaw-=u,e.smoothLookPitch-=d,e.yaw+=u,e.pitch=Math.max(-.61,Math.min(.78,e.pitch+d)),t.cycleScopePressed&&vh(e),t.outfitCyclePressed&&yh(e),t.emote1Pressed?bh(e,`booyah_dance`):t.emote2Pressed?bh(e,`cobra_wave`):t.emote3Pressed&&bh(e,`laugh_taunt`),e.drivingVehicleId){e.isAds=!1,e.isCrouching=!1,e.activeEmote=null,e.emoteTimer=0;return}if(e.dropPhase===`airplane`){let n=e.airplaneEnd.x-e.airplanePos.x,i=e.airplaneEnd.z-e.airplanePos.z,a=Math.hypot(n,i);if(a>2){let t=$.airplaneSpeed*r;e.airplanePos.x+=n/a*t,e.airplanePos.z+=i/a*t,e.position.x=e.airplanePos.x,e.position.y=e.airplanePos.y,e.position.z=e.airplanePos.z}else{gh(e);return}(t.jumpPressed||t.fireJustPressed)&&gh(e);return}if(e.dropPhase===`skydive`||e.dropPhase===`parachute`){let i=e.airplaneEnd.x-e.airplanePos.x,a=e.airplaneEnd.z-e.airplanePos.z,o=Math.hypot(i,a);if(o>2){let t=$.airplaneSpeed*.45*r;e.airplanePos.x+=i/o*t,e.airplanePos.z+=a/o*t}e.dropPhase===`skydive`&&(t.jumpPressed||t.fireJustPressed)&&gh(e);let s=-Math.sin(e.yaw),c=-Math.cos(e.yaw),l=Math.cos(e.yaw),u=-Math.sin(e.yaw),d=Math.abs(t.moveZ)>.01?t.moveZ:.45,f=s*d+l*t.moveX,p=c*d+u*t.moveX,m=Math.hypot(f,p);m>1e-5&&(f/=m,p/=m);let h=e.dropPhase===`skydive`?$.skydiveHorizSpeed:$.parachuteHorizSpeed,g=e.dropPhase===`skydive`?$.skydiveDescentSpeed:$.parachuteDescentSpeed;e.velocity.x=f*h,e.velocity.z=p*h,e.velocity.y=-g,e.position.x+=e.velocity.x*r,e.position.z+=e.velocity.z*r,e.position.y+=e.velocity.y*r,e.dropPhase===`skydive`&&e.position.y<=$.parachuteOpenAltitude&&(e.dropPhase=`parachute`);let _=ph(e.position.x,e.position.z);for(let t of n){let n=t.maxY??-1/0;n>_&&n<=e.position.y+.7&&e.position.x>t.minX&&e.position.x<t.maxX&&e.position.z>t.minZ&&e.position.z<t.maxZ&&(_=n)}if(e.position.y<=_){e.position.y=_,e.velocity.y=0,e.dropPhase=`grounded`,e.isGrounded=!0,e.pitch=-.06;for(let t of n)(t.minY??0)>.05||e.position.x>t.minX-.8&&e.position.x<t.maxX+.8&&e.position.z>t.minZ-.8&&e.position.z<t.maxZ+.8&&(e.position.z=t.maxZ+1.5)}let v=$.islandHalfSize;e.position.x=Math.max(-v,Math.min(v,e.position.x)),e.position.z=Math.max(-v,Math.min(v,e.position.z));return}t.crouchToggled&&(e.isCrouching=!e.isCrouching,e.isProne=!1,e.isCrouching&&(e.isSprinting=!1)),t.proneToggled&&e.isGrounded&&(e.isProne=!e.isProne,e.isCrouching=!1,e.isProne&&(e.isSprinting=!1)),e.isAds=t.adsHeld,t.slot1Pressed?(e.activeSlot=0,e.reloadTimer=0):t.slot2Pressed?(e.activeSlot=1,e.reloadTimer=0):t.slot3Pressed&&(e.activeSlot=2,e.reloadTimer=0);let f=Math.min(1,Math.hypot(t.moveX,t.moveZ)),p=f>.01;p||t.fireHeld||t.fireJustPressed||t.jumpPressed?(e.activeEmote=null,e.emoteTimer=0):e.emoteTimer>0&&(e.emoteTimer=Math.max(0,e.emoteTimer-r),e.emoteTimer<=0&&(e.activeEmote=null)),e.isSprinting=p&&t.sprint&&!e.isCrouching&&!e.isProne&&!e.isAds;let m=$.walkSpeed;e.isProne?m=$.proneSpeed:e.isCrouching?m=$.crouchSpeed:e.isSprinting&&(m=$.sprintSpeed),m*=Ch(e.weapons[e.activeSlot]),e.isAds&&(m*=$.adsMoveMultiplier),t.fireHeld&&!e.isProne&&(m*=$.fireMoveMultiplier);let h=-Math.sin(e.yaw),g=-Math.cos(e.yaw),_=Math.cos(e.yaw),v=-Math.sin(e.yaw),y=h*t.moveZ+_*t.moveX,b=g*t.moveZ+v*t.moveX,x=Math.hypot(y,b);x>1e-5&&(y/=x,b/=x);let S=y*m*f,C=b*m*f,w=(p?55:70)*(e.isGrounded?1:.42)*r;e.velocity.x=xh(e.velocity.x,S,w),e.velocity.z=xh(e.velocity.z,C,w),t.jumpPressed&&e.isGrounded&&(e.isProne||e.isCrouching?(e.isProne=!1,e.isCrouching=!1):(e.velocity.y=$.jumpVelocity,e.isGrounded=!1));let T=$.stepHeight,E=(e,t,r)=>{let a=ph(e,t),o=.25;for(let i of n){let n=i.maxY??1/0;n<=r+T&&n>a&&e+o>i.minX&&e-o<i.maxX&&t+o>i.minZ&&t-o<i.maxZ&&(a=n)}return i&&(a=Math.max(a,i.topAt(e,t,r,T))),a},D=E(e.position.x,e.position.z,e.position.y);(!e.isGrounded||e.position.y>D+.001)&&(e.velocity.y-=$.gravity*r,e.position.y+=e.velocity.y*r,e.position.y<=D&&(e.position.y=D,e.velocity.y=0,e.isGrounded=!0));let O=.45,k=e.position.y,A=!!i?.pushOut,j=(e,t)=>!!(wh(e,t,O,n,k+T,k)||!A&&i&&i.collidesCircle(e,t,O,void 0,k,T)),ee=e.position.x+e.velocity.x*r,M=e.position.z+e.velocity.z*r;A&&([ee,M]=i.pushOut(ee,M,O,k,T)),j(ee,M)?(j(ee,e.position.z)?e.velocity.x=0:e.position.x=ee,j(e.position.x,M)?e.velocity.z=0:e.position.z=M):(e.position.x=ee,e.position.z=M);let N=$.islandHalfSize;e.position.x=Math.max(-N,Math.min(N,e.position.x)),e.position.z=Math.max(-N,Math.min(N,e.position.z));let te=E(e.position.x,e.position.z,e.position.y);e.isGrounded?e.position.y=te:e.position.y<te&&(e.position.y=te,e.velocity.y=0,e.isGrounded=!0)}function Ch(e){return(.75+.25*(((e?pp[e]?.moveSpeed:void 0)??88)/100))/.97}function wh(e,t,n,r,i=-1/0,a){for(let o of r)if(!((o.maxY??1/0)<=i)&&!(a!==void 0&&o.minY!==void 0&&o.minY>=a+1.7)&&e+n>o.minX&&e-n<o.maxX&&t+n>o.minZ&&t-n<o.maxZ)return!0;return!1}function Th(e){return e.isAds?e.activeScope===`4x`&&e.hasScope4x?$.scope4xFov:e.activeScope===`2x`&&e.hasScope2x?$.scope2xFov:$.adsFov:$.normalFov}function Eh(e){let t=e.isAds&&(e.activeScope===`2x`&&e.hasScope2x||e.activeScope===`4x`&&e.hasScope4x),n=t?{x:.25,y:1.56,z:.65}:e.isAds?$.cameraAdsOffset:$.cameraNormalOffset,r=e.isProne?-.95:e.isCrouching?-.38:0,i=Math.cos(e.yaw),a=-Math.sin(e.yaw),o=-Math.sin(e.yaw)*Math.cos(e.pitch),s=Math.sin(e.pitch),c=-Math.cos(e.yaw)*Math.cos(e.pitch),l=e.position.x+i*n.x-o*n.z,u=Math.max(e.position.y+.45,e.position.y+n.y+r-s*n.z*.55),d=e.position.z+a*n.z-c*n.z,f=t?95:40,p=e.position.x+i*(n.x*.55),m=e.position.y+1.48+r,h=e.position.z+a*(n.x*.55);return{position:{x:l,y:u,z:d},target:{x:p+o*f,y:m+s*f,z:h+c*f}}}function Dh(e,t=1/60){if(e.dropPhase===`airplane`){let t=-Math.sin(e.airplaneYaw),n=-Math.cos(e.airplaneYaw);return{position:{x:e.airplanePos.x-t*26,y:e.airplanePos.y+9.5,z:e.airplanePos.z-n*26},lookTarget:{x:e.airplanePos.x+t*30,y:e.airplanePos.y-14,z:e.airplanePos.z+n*30},fov:64}}if(e.dropPhase===`skydive`||e.dropPhase===`parachute`){let t=-Math.sin(e.yaw),n=-Math.cos(e.yaw);return{position:{x:e.position.x-t*6.8,y:e.position.y+4.2,z:e.position.z-n*6.8},lookTarget:{x:e.position.x+t*14,y:Math.max(ph(e.position.x,e.position.z),e.position.y-6),z:e.position.z+n*14},fov:64}}if(e.drivingVehicleId){let n=e.yaw,r=-Math.sin(n),i=-Math.cos(n),a=Math.min(1,Math.abs(e.drivingVehicleSpeed)/28),o=7.4+a*1.4;return Oh(e,{x:e.position.x-r*o,y:e.position.y+2.85+a*.35,z:e.position.z-i*o},{x:e.position.x+r*16,y:e.position.y+1.25,z:e.position.z+i*16},64+a*5,t)}let{position:n,target:r}=Eh(e);return Oh(e,n,r,Th(e),t)}function Oh(e,t,n,r,i){if(!e.smoothCamPos||!e.smoothCamTarget||Math.hypot(t.x-e.smoothCamPos.x,t.y-e.smoothCamPos.y,t.z-e.smoothCamPos.z)>6||i>=.08)return e.smoothCamPos={...t},e.smoothCamTarget={...n},{position:t,lookTarget:n,fov:r};let a=1-Math.exp(-18*Math.max(.001,i)),o=1-Math.exp(-24*Math.max(.001,i));return e.smoothCamPos.x+=(t.x-e.smoothCamPos.x)*a,e.smoothCamPos.y+=(t.y-e.smoothCamPos.y)*a,e.smoothCamPos.z+=(t.z-e.smoothCamPos.z)*a,e.smoothCamTarget.x+=(n.x-e.smoothCamTarget.x)*o,e.smoothCamTarget.y+=(n.y-e.smoothCamTarget.y)*o,e.smoothCamTarget.z+=(n.z-e.smoothCamTarget.z)*o,{position:{...e.smoothCamPos},lookTarget:{...e.smoothCamTarget},fov:r}}function kh(e,t,n,r){return Array.isArray(e)?e:e.queryCircle(t,n,r)}function Ah(e,t,n,r,i,a){return Array.isArray(e)?e:e.queryRay(t,n,r,i,a)}function jh(e){return pp[e.weapons[e.activeSlot]||`m4a1`]||pp.m4a1}function Mh(e){return e.isAds?e.activeScope===`4x`&&e.hasScope4x?{rangeMultiplier:1.75,spreadMultiplier:.38}:e.activeScope===`2x`&&e.hasScope2x?{rangeMultiplier:1.35,spreadMultiplier:.6}:{rangeMultiplier:1.05,spreadMultiplier:.85}:{rangeMultiplier:1,spreadMultiplier:1}}function Nh(e,t=jh(e)){let{rangeMultiplier:n}=Mh(e);return t.range*n}function Ph(e){let t=jh(e);if(t.category===`MELEE`||e.reloadTimer>0)return!1;let n=e.ammoInMag[e.activeSlot],r=e.reserveAmmo[t.category]??0;return n>=t.magSize||r<=0?!1:(e.reloadTimer=t.reloadTime,!0)}function Fh(e,t){if(e.fireCooldown>0&&(e.fireCooldown=Math.max(0,e.fireCooldown-t)),e.reloadTimer>0&&(e.reloadTimer-=t,e.reloadTimer<=0)){e.reloadTimer=0;let t=jh(e),n=t.magSize-e.ammoInMag[e.activeSlot],r=e.reserveAmmo[t.category]??0,i=Math.min(n,r);e.ammoInMag[e.activeSlot]+=i,e.reserveAmmo[t.category]=Math.max(0,r-i)}}function Ih(e,t){let n=Math.cos(t);return{x:-Math.sin(e)*n,y:Math.sin(t),z:-Math.cos(e)*n}}function Lh(e,t,n,r){let i=n.maxY??4.5,a=0,o=r;if(Math.abs(t.x)<1e-6){if(e.x<n.minX||e.x>n.maxX)return null}else{let r=(n.minX-e.x)/t.x,i=(n.maxX-e.x)/t.x;a=Math.max(a,Math.min(r,i)),o=Math.min(o,Math.max(r,i))}if(Math.abs(t.z)<1e-6){if(e.z<n.minZ||e.z>n.maxZ)return null}else{let r=(n.minZ-e.z)/t.z,i=(n.maxZ-e.z)/t.z;a=Math.max(a,Math.min(r,i)),o=Math.min(o,Math.max(r,i))}if(o<a||o<0)return null;let s=e.y+t.y*a;return s<(n.minY??-.1)||s>i?null:a}function Rh(e,t,n,r,i,a,o,s=Bh){let c=Ih(t,n),l=Ah(o,e.x,e.z,c.x,c.z,r),u=r;for(let t of l){let n=Lh(e,c,t,u);n!==null&&n<u&&(u=n)}for(let t of a){if(t.hp<=0)continue;let n=Lh(e,c,t.aabb,u);n!==null&&n<u&&(u=n)}let d=Math.cos(s*Math.PI/180),f=null,p=u,m=!1,h=null;for(let t of i){if(t.hp<=0)continue;let n=t.position.x-e.x,r=t.position.z-e.z,i=Math.hypot(n,r);if(i>p||i<.2)continue;let a=e.y+c.y/Math.max(.1,Math.hypot(c.x,c.z))*i,o=t.position.y+1.05,s=n,l=o-e.y,u=r,g=Math.hypot(s,l,u),_=(s*c.x+l*c.y+u*c.z)/Math.max(1e-5,g),v=Math.abs(n*-c.z+r*c.x)<=.62&&a>=t.position.y-.15&&a<=t.position.y+1.92,y=_>=d&&a>=t.position.y-.25&&a<=t.position.y+2.05;if(v||y){f=t,p=i;let e=Math.max(t.position.y+.3,Math.min(t.position.y+1.72,a));m=e>=t.position.y+1.38,h={x:t.position.x,y:e,z:t.position.z}}}return{targetLocked:f!==null,targetId:f?f.id:null,isHeadshotAim:m,hitPoint:h,distance:p}}function zh(e,t,n,r,i,a){let o=Math.round(r.baseDamage*(i?r.headshotMultiplier:1)),s=0,c=o;if(n.shield>0){let e=Math.round(o*$.armorAbsorptionRatio);s=Math.min(n.shield,e),n.shield=Math.max(0,n.shield-s),c=Math.max(1,o-s)}n.hp=Math.max(0,n.hp-c);let l=n.hp<=0;return{attackerId:e,attackerName:t,targetId:n.id,targetName:n.name,amount:c,shieldAbsorbed:s,isHeadshot:i,hitPoint:a,killed:l,weaponId:r.id,weaponName:r.shortName}}var Bh=3.5;function Vh(e){Bh=Math.max(0,e)}function Hh(e,t,n,r,i){let a=jh(e);if(e.hp<=0||e.dropPhase!==`grounded`||e.reloadTimer>0||e.fireCooldown>0)return{fired:!1,events:[],hitGlooWallId:null};if(a.category!==`MELEE`){if(e.ammoInMag[e.activeSlot]<=0)return Ph(e),{fired:!1,events:[],hitGlooWallId:null};--e.ammoInMag[e.activeSlot],e.ammoInMag[e.activeSlot]<=0&&Ph(e)}e.fireCooldown=1/a.fireRate;let o=i?.origin??{x:e.position.x,y:e.position.y+(e.isCrouching?1.15:1.48),z:e.position.z},s=i?.yaw??e.yaw,c=i?.pitch??e.pitch,l=Ih(s,c),u=Nh(e,a),d=Ah(r,o.x,o.z,l.x,l.z,u),f=u;for(let e of d){let t=Lh(o,l,e,f);t!==null&&t<f&&(f=t)}let p=null,m=f;for(let e of n){if(e.hp<=0)continue;let t=Lh(o,l,e.aabb,m);t!==null&&t<m&&(m=t,p=e)}let h=Rh(o,s,c,u,t,n,r),g=[];if(h.targetLocked&&h.targetId&&h.hitPoint){let n=t.find(e=>e.id===h.targetId);if(n&&n.hp>0){let t=a.pellets||1;for(let r=0;r<t&&!(n.hp<=0);r++){let t=zh(e.id,e.name,n,a,h.isHeadshotAim,h.hitPoint);e.damageDealt+=t.amount,t.killed&&(e.kills+=1,t.isHeadshot&&(e.headshots+=1)),g.push(t)}return{fired:!0,events:g,hitGlooWallId:null}}}if(p){let e=a.baseDamage*(a.pellets||1);return p.hp=Math.max(0,p.hp-e),{fired:!0,events:[],hitGlooWallId:p.id}}return{fired:!0,events:[],hitGlooWallId:null}}function Uh(e,t,n,r=.3){let i=t.x-e.x,a=t.y-e.y,o=t.z-e.z,s=Math.hypot(i,a,o);if(s<.001)return t;let c={x:i/s,y:a/s,z:o/s},l=s;for(let t of Ah(n,e.x,e.z,c.x,c.z,s)){let n=Lh(e,c,t,l);n!==null&&n<l&&(l=n)}if(l>=s)return t;let u=Math.max(.5,l-r);return{x:e.x+c.x*u,y:e.y+c.y*u,z:e.z+c.z*u}}function Wh(e,t){let n={x:e.position.x,y:e.position.y+(e.isCrouching?1.15:1.48),z:e.position.z};if(e.dropPhase!==`grounded`||e.drivingVehicleId)return{origin:n,yaw:e.yaw,pitch:e.pitch};let{position:r,target:i}=Eh(e),a=Uh({x:n.x,y:n.y+.05,z:n.z},r,t),o=i.x-a.x,s=i.y-a.y,c=i.z-a.z,l=Math.hypot(o,s,c);return l<.001?{origin:n,yaw:e.yaw,pitch:e.pitch}:{origin:a,yaw:Math.atan2(-o,-c),pitch:Math.asin(Math.max(-1,Math.min(1,s/l)))}}function Gh(e){let t=[],n=[],r=[],i=new W,a=new H,o=new mn,s=new Gn,c=new V,l=new V,u=new V,d=new V,f=new G;for(let p of e){let e=p.geo.index?p.geo.toNonIndexed():p.geo;c.set(...p.pos??[0,0,0]),s.set(...p.rot??[0,0,0]),o.setFromEuler(s),l.set(...p.scale??[1,1,1]),i.compose(c,o,l),a.getNormalMatrix(i),f.setHex(p.color);let m=e.getAttribute(`position`),h=e.getAttribute(`normal`);for(let e=0;e<m.count;e++)u.fromBufferAttribute(m,e).applyMatrix4(i),t.push(u.x,u.y,u.z),h?d.fromBufferAttribute(h,e).applyMatrix3(a).normalize():d.set(0,1,0),n.push(d.x,d.y,d.z),r.push(f.r,f.g,f.b);e!==p.geo&&e.dispose(),p.geo.dispose()}return{positions:new Float32Array(t),normals:new Float32Array(n),colors:new Float32Array(r),vertexCount:t.length/3}}var Kh=(e,t,n,r,i,a,o,s=0)=>({geo:new J(e,t,n),color:r,pos:[i,a,o],rot:[0,s,0]}),qh=(e,t,n,r,i,a=1,o=1,s=1)=>({geo:new Ua(e,0),color:t,pos:[n,r,i],scale:[a,o,s]}),Jh=(e,t,n,r,i,a,o,s=0)=>({geo:new Ba(e,t,n),color:r,pos:[i,a,o],rot:[0,s,0]}),Yh=(e,t,n,r,i,a,o,s,c=0,l=0)=>({geo:new Y(e,t,n,r),color:i,pos:[a,o,s],rot:[c,0,l]});function Xh(e,t,n){return()=>[Kh(.3,2.4,.3,e,0,1.2,0),qh(1.5,t,0,3.2,0,1,.9,1),qh(1.05,n,.55,3.95,.2)]}function Zh(e,t){return()=>[qh(.32,5078063,0,.12,0,1.3,.5,1.3),qh(.13,e,-.2,.42,.05),qh(.13,t,.18,.5,-.1),qh(.13,e,.02,.38,.22)]}function Qh(){let e=new Map;return e.set(`grass_tuft`,()=>[Jh(.1,.75,3,6000431,-.15,.37,.05),Jh(.1,.95,3,8038458,.1,.47,-.1),Jh(.09,.65,3,10728784,.18,.32,.14),Jh(.1,.8,3,5212715,-.05,.4,.2)]),e.set(`grass_tall`,()=>[Jh(.09,1.35,3,5212715,-.2,.67,.05),Jh(.09,1.6,3,6988344,.05,.8,-.12),Jh(.08,1.2,3,9285189,.22,.6,.1),Jh(.09,1.45,3,6003248,-.08,.72,.22),Jh(.08,1.05,3,10728784,.12,.52,-.25),Jh(.08,1.3,3,4487210,-.28,.65,-.14)]),e.set(`flower_pink`,Zh(16020150,16502760)),e.set(`flower_yellow`,Zh(16436245,16707722)),e.set(`flower_purple`,Zh(11032055,15324671)),e.set(`bush`,()=>[qh(.85,4160812,0,.5,0,1,.75,1),qh(.6,5805370,.6,.38,.25)]),e.set(`rock`,()=>[qh(1.05,9208437,0,.55,0,1.15,.7,1),qh(.55,7234907,.95,.3,.3)]),e.set(`small_tree`,Xh(7029795,4160044,5607226)),e.set(`tree_olive`,Xh(8016432,8233532,10271826)),e.set(`tree_pine`,Xh(5913122,3107642,4164170)),e.set(`tree_tall`,Xh(7029795,4885036,6463546)),e.set(`tree_palm`,Xh(9071162,4037178,5812298)),e.set(`tree_blossom`,Xh(5913122,10112736,12616956)),e.set(`log`,()=>[Kh(.5,.5,2.6,8145441,0,.25,0),Kh(.52,.52,.06,13148266,0,.25,1.3)]),e.set(`crate_stack`,()=>[Kh(1.1,1,1.1,10576391,0,.5,0),Kh(1,.9,1,11817737,1.15,.45,.2,.3),Kh(.9,.8,.9,9584654,.4,1.4,0,.5)]),e.set(`barrel_cluster`,()=>[Yh(.42,.42,1.1,6,14427686,0,.55,0),Yh(.42,.42,1.1,6,2450411,.9,.55,.2),Yh(.42,.42,1.1,6,12131356,.3,.55,-.85)]),e.set(`hay_bale`,()=>[Yh(.9,.9,1.3,8,14927205,0,.9,0,0,Math.PI/2)]),e.set(`fence_segment`,()=>[Kh(.14,1.1,.14,9132587,-1.5,.55,0),Kh(.14,1.1,.14,9132587,0,.55,0),Kh(.14,1.1,.14,9132587,1.5,.55,0),Kh(3.2,.12,.06,10976074,0,.5,0),Kh(3.2,.12,.06,10976074,0,.9,0)]),e.set(`tent`,()=>[Jh(2,1.8,4,16096779,0,.9,0,Math.PI/4),Kh(.5,.9,.05,7877903,0,.45,1.35)]),e.set(`shed`,()=>[Kh(3.4,2.2,3,14074785,0,1.1,0),Jh(2.8,1.3,4,11817737,0,2.85,0,Math.PI/4),Kh(.9,1.6,.06,7877903,0,.8,1.52)]),e.set(`water_tower`,()=>[Kh(.3,5,.3,6583435,-1.5,2.5,-1.5),Kh(.3,5,.3,6583435,1.5,2.5,-1.5),Kh(.3,5,.3,6583435,-1.5,2.5,1.5),Kh(.3,5,.3,6583435,1.5,2.5,1.5),Yh(2,2,2.4,10,13358561,0,6.2,0),Jh(2.2,1.2,10,12131356,0,8,0)]),e.set(`tire_stack`,()=>[Yh(.5,.5,.35,6,2042167,0,.18,0),Yh(.5,.5,.35,6,1120295,.05,.53,0),Yh(.5,.5,.35,6,2042167,.9,.18,.2)]),e}function $h(e,t,n,r={}){let i=r.colorJitter??.12,a=r.material??new io({vertexColors:!0}),o=new Map,s=e=>{let n=o.get(e);if(!n){let r=t.get(e);if(!r)throw Error(`No mesh recipe for prop kind: ${e}`);n=Gh(r()),o.set(e,n)}return n},c=new Map,l=new Map,u=r.detailGrid??n;for(let t of e){let e=r.detailKinds?.has(t.kind)?l:c,i=n.keyOf(t.x,t.z),a=e.get(i);a?a.push(t):e.set(i,[t])}let d=[],f=[...[...c].map(([e,t])=>[e,t,n,``]),...[...l].map(([e,t])=>[e,t,u,`_detail`])];for(let[e,t,n,o]of f){let c=0;for(let e of t)c+=s(e.kind).vertexCount;let l=new Float32Array(c*3),u=new Float32Array(c*3),f=new Float32Array(c*3),p=0;for(let e of t){let t=s(e.kind),n=Math.cos(e.rot),a=Math.sin(e.rot),o=1+(Tf(e.x,e.z)-.5)*2*i,c=r.heightAt?r.heightAt(e.x,e.z):0;for(let r=0;r<t.vertexCount;r++){let i=r*3,s=t.positions[i]*e.scale,d=t.positions[i+1]*e.scale,m=t.positions[i+2]*e.scale;l[p]=s*n+m*a+e.x,l[p+1]=d+c,l[p+2]=-s*a+m*n+e.z;let h=t.normals[i],g=t.normals[i+2];u[p]=h*n+g*a,u[p+1]=t.normals[i+1],u[p+2]=-h*a+g*n;let _=Math.abs(t.normals[i+1])<.7?.8+.2*Math.min(1,Math.max(0,d/1.6)):1;f[p]=Math.min(1,t.colors[i]*o*_),f[p+1]=Math.min(1,t.colors[i+1]*o*_),f[p+2]=Math.min(1,t.colors[i+2]*o*_),p+=3}}let m=new di;m.setAttribute(`position`,new K(l,3)),m.setAttribute(`normal`,new K(u,3)),m.setAttribute(`color`,new K(f,3)),m.computeBoundingSphere();let h=new q(m,a);h.name=`${r.name??`scatter`}${o}_${e}`,h.matrixAutoUpdate=!1,h.updateMatrix(),n.add(h,t[0].x,t[0].z),d.push(h)}return d}function eg(e,t){let n=e.chunkSize,r=Math.max(1,Math.round(n/t.cell)),i=n/r,a=e.cellIndex(-t.extent),o=e.cellIndex(t.extent-.001),s=[],c=i*.5;for(let l=a;l<=o;l++)for(let u=a;u<=o;u++){let a=r+1,o=new Float32Array(a*a*3),d=new Float32Array(a*a*3),f=new Float32Array(a*a*3),p=t.uvScale?new Float32Array(a*a*2):null;for(let e=0;e<a;e++)for(let r=0;r<a;r++){let s=l*n+r*i,m=u*n+e*i,h=t.heightAt(s,m),g=(t.heightAt(s+c,m)-t.heightAt(s-c,m))/(2*c),_=(t.heightAt(s,m+c)-t.heightAt(s,m-c))/(2*c),v=(e*a+r)*3;o[v]=s,o[v+1]=h,o[v+2]=m;let y=1/Math.hypot(g,1,_);d[v]=-g*y,d[v+1]=y,d[v+2]=-_*y;let b=t.colorAt(s,m,h,Math.hypot(g,_));f[v]=b[0],f[v+1]=b[1],f[v+2]=b[2],p&&(p[(e*a+r)*2]=s/t.uvScale,p[(e*a+r)*2+1]=m/t.uvScale)}let m=new Uint32Array(r*r*6),h=0;for(let e=0;e<r;e++)for(let t=0;t<r;t++){let n=e*a+t,r=n+1,i=n+a,o=i+1;m[h++]=n,m[h++]=i,m[h++]=r,m[h++]=r,m[h++]=i,m[h++]=o}let g=new di;g.setAttribute(`position`,new K(o,3)),g.setAttribute(`normal`,new K(d,3)),g.setAttribute(`color`,new K(f,3)),p&&g.setAttribute(`uv`,new K(p,2)),g.setIndex(new K(m,1)),g.computeBoundingSphere();let _=new q(g,t.material);_.name=`${t.name??`terrain`}_${l},${u}`,_.matrixAutoUpdate=!1,_.receiveShadow=!0,e.add(_,(l+.5)*n,(u+.5)*n),s.push(_)}return s}function tg(e,t){let n=e.radius>100,r=n?24:Math.min(36,Math.max(16,Math.round(e.radius/2.2))),i=n?10:12,a=e.radius*Fm,o=[e],s=1+i*r,c=new Float32Array(s*3),l=new Float32Array(s*3),u=new Float32Array(s*3),d=t.uvScale?new Float32Array(s*2):null,f=Math.max(1,e.radius/40),p=(e,n,r)=>{let i=Lm(o,n,r),a=(Lm(o,n+f,r)-Lm(o,n-f,r))/(2*f),s=(Lm(o,n,r+f)-Lm(o,n,r-f))/(2*f);c[e*3]=n,c[e*3+1]=i,c[e*3+2]=r;let p=1/Math.hypot(a,1,s);l[e*3]=-a*p,l[e*3+1]=p,l[e*3+2]=-s*p;let m=t.colorAt(n,r,i,Math.hypot(a,s));u[e*3]=m[0],u[e*3+1]=m[1],u[e*3+2]=m[2],d&&(d[e*2]=n/t.uvScale,d[e*2+1]=r/t.uvScale)};p(0,e.x,e.z);for(let t=1;t<=i;t++){let n=a*(t/i)**1.25;for(let i=0;i<r;i++){let a=i/r*Math.PI*2;p(1+(t-1)*r+i,e.x+Math.cos(a)*n,e.z+Math.sin(a)*n)}}let m=[];for(let e=0;e<r;e++)m.push(0,1+(e+1)%r,1+e);for(let e=1;e<i;e++)for(let t=0;t<r;t++){let n=1+(e-1)*r+t,i=1+(e-1)*r+(t+1)%r,a=n+r,o=i+r;m.push(n,i,a,i,o,a)}let h=new di;h.setAttribute(`position`,new K(c,3)),h.setAttribute(`normal`,new K(l,3)),h.setAttribute(`color`,new K(u,3)),d&&h.setAttribute(`uv`,new K(d,2)),h.setIndex(m),h.computeBoundingSphere();let g=new q(h,t.material);return g.name=t.name??`hill`,g.receiveShadow=!0,g}function ng(e,t,n){let r=n.lift??.12,i=new Map;for(let n of e){let e=t.keyOf(n.x,n.z),r=i.get(e);r?r.push(n):i.set(e,[n])}let a=[];for(let[e,o]of i){let i=new Float32Array(o.length*12),s=new Float32Array(o.length*8),c=new Uint32Array(o.length*6);o.forEach((e,t)=>{[[-1,-1,0,0],[1,-1,1,0],[-1,1,0,1],[1,1,1,1]].forEach(([a,o,c,l],u)=>{let d=e.x+a*e.rx,f=e.z+o*e.rz,p=(t*4+u)*3;i[p]=d,i[p+1]=n.heightAt(d,f)+r,i[p+2]=f,s[(t*4+u)*2]=c,s[(t*4+u)*2+1]=l});let a=t*4,o=t*6;c[o]=a,c[o+1]=a+2,c[o+2]=a+1,c[o+3]=a+1,c[o+4]=a+2,c[o+5]=a+3});let l=new di;l.setAttribute(`position`,new K(i,3)),l.setAttribute(`uv`,new K(s,2)),l.setIndex(new K(c,1)),l.computeBoundingSphere();let u=new q(l,n.material);u.name=`${n.name??`shadow_blobs`}_${e}`,u.matrixAutoUpdate=!1,u.renderOrder=1,u.frustumCulled=!0,t.add(u,o[0].x,o[0].z),a.push(u)}return a}var rg=[{dir:`+x`,n:[1,0,0],v:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]]},{dir:`-x`,n:[-1,0,0],v:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]]},{dir:`+y`,n:[0,1,0],v:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]]},{dir:`-y`,n:[0,-1,0],v:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]]},{dir:`+z`,n:[0,0,1],v:[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]]},{dir:`-z`,n:[0,0,-1],v:[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]]}],ig=e=>{let t=e=>(e/255)**2.2;return[t(e>>16&255),t(e>>8&255),t(e&255)]};function ag(e,t){if(Math.min(e.sx,e.sz)>.35)return!1;let n=e=>Math.abs(e/3-Math.round(e/3))<.004;return t===`-y`?n(e.y-e.sy/2):t===`+y`&&n(e.y+e.sy/2)}function og(e){let t=new Float32Array(e.length*72),n=new Float32Array(e.length*72),r=new Float32Array(e.length*72),i=new Uint32Array(e.length*36),a=0,o=0;for(let s of e){let e=ig(s.color);for(let c of rg){if(ag(s,c.dir)||s.onlyFaces&&!s.onlyFaces.includes(c.dir))continue;let l=s.faceColors?.[c.dir],u=l===void 0?e:ig(l),d=a/3;for(let[e,i,o]of c.v)t[a]=s.x+e*s.sx/2,t[a+1]=s.y+i*s.sy/2,t[a+2]=s.z+o*s.sz/2,n[a]=c.n[0],n[a+1]=c.n[1],n[a+2]=c.n[2],r[a]=u[0],r[a+1]=u[1],r[a+2]=u[2],a+=3;i[o++]=d,i[o++]=d+1,i[o++]=d+2,i[o++]=d,i[o++]=d+2,i[o++]=d+3}}let s=new di;return s.setAttribute(`position`,new K(t.slice(0,a),3)),s.setAttribute(`normal`,new K(n.slice(0,a),3)),s.setAttribute(`color`,new K(r.slice(0,a),3)),s.setIndex(new K(i.slice(0,o),1)),s.computeBoundingSphere(),s}var sg=[.138,.319,.048],cg=e=>{let t=e=>(e/255)**2.2;return[t(e>>16&255),t(e>>8&255),t(e&255)]},lg=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],ug=cg(6134323),dg=cg(8828226),fg=cg(11578709),pg=cg(9417804),mg=cg(10189394),hg=cg(9077880),gg=cg(14469019);function _g(e,t,n,r){let i=lg(ug,dg,Rm((Vm(e,t,90,3,7)-.3)/.4));i=lg(i,fg,Rm((Vm(e,t,45,2,21)-.5)/.35)*.55),i=lg(i,pg,Rm((n-3)/4)*.4);let a=Rm((r-.3)/.3);return i=lg(i,Vm(e,t,12,2,3)>.5?mg:hg,a),i=lg(i,gg,Rm((Math.max(Math.abs(e),Math.abs(t))-1160)/25)*.95),[Math.min(3,i[0]/sg[0]),Math.min(3,i[1]/sg[1]),Math.min(3,i[2]/sg[2])]}function vg(e,t,n,r,i){let a=cg(e),o=Math.min(1,Math.max(0,r/i)),s=.9+.2*Vm(t,n,70,2,11),c=.8+.5*Rm(o);return[Math.min(1,a[0]*c*s),Math.min(1,a[1]*c*s),Math.min(1,a[2]*c*s)]}var yg={small_tree:{model:`tree_small`,scale:4.6},tree_olive:{model:`tree_simple`,scale:3.6},tree_blossom:{model:`tree_fat`,scale:5},tree_pine:{model:`tree_pineTallB`,scale:4},tree_tall:{model:`tree_tall`,scale:4.2},tree_palm:{model:`tree_palmShort`,scale:5},bush:{model:`plant_bushSmall`,scale:5.2},rock:{model:`rock_smallA`,scale:6.5},log:{model:`log_large`,scale:2.6}};function bg(e){let t={h:0,s:0,l:0};return e.getHSL(t),t.h>.3&&t.h<.6&&(t.h-=.09),new G().setHSL(t.h,Math.min(1,t.s*1.05),t.l).getHex()}async function xg(e,t,n){let r=await e.loadAsync(t);r.scene.updateMatrixWorld(!0);let i=[];return r.scene.traverse(e=>{if(!(e instanceof q))return;let t=Array.isArray(e.material)?e.material[0]:e.material,r=e.geometry.clone().applyMatrix4(e.matrixWorld);r.scale(n,n,n),i.push({geo:r,color:bg(t.color)})}),i}async function Sg(e,t){let n=`${t.replace(/\/?$/,`/`)}assets/models/kenney_nature/`,r=new yd,i=[];return await Promise.all(Object.entries(yg).map(async([t,a])=>{if(e.has(t))try{let o=await xg(r,`${n}${a.model}.glb`,a.scale);if(o.length===0)return;e.set(t,()=>o.map(e=>({geo:e.geo.clone(),color:e.color}))),i.push(t)}catch{}})),i}var Cg=e=>parseInt(e.replace(`#`,``),16);function wg(e,t,n){let r=0,i=1/0;for(let[a,o,s]of[[0,0,1],[1,1,0],[2,0,-1],[3,-1,0]]){let c=(o===0?e.depth:e.width)/2+2.5,l=e.x+o*c,u=e.z+s*c,d=!1;for(let n of t)if(n!==e&&Math.abs(l-n.x)<n.width/2+.8&&Math.abs(u-n.z)<n.depth/2+.8){d=!0;break}let f=d?1e6:0,p=1/0;for(let e of n)p=Math.min(p,Om(e,l,u));f+=p,f<i&&(i=f,r=a)}return r}var Tg=null;function Eg(){if(Tg)return Tg;let e=[...Xf(),...lp(yp).segments],t=[],n=bp;return bp.forEach((r,i)=>{if(r.isTower)return;let a=rh({x:r.x,z:r.z,width:r.width,depth:r.depth,floors:Qm(r.height),facing:wg(r,n,e),wallColor:Cg(r.color),roofColor:Cg(r.roofColor),seed:7919*(i+1)});t.push({building:r,layout:a})}),Tg=t,t}function Dg(){let e=[];for(let t of Eg())for(let n of t.layout.boxes)n.solid&&e.push(Og(n));return e}function Og(e){return{minX:e.x-e.sx/2,maxX:e.x+e.sx/2,minZ:e.z-e.sz/2,maxZ:e.z+e.sz/2,minY:e.y-e.sy/2,maxY:e.y+e.sy/2}}var kg=[{type:`medkit`,subType:`medkit`,amount:2},{type:`weapon`,subType:`mp40`,amount:28},{type:`gloo`,subType:`gloo_wall`,amount:2},{type:`armor`,subType:`vest_lv3`,amount:1},{type:`weapon`,subType:`m4a1`,amount:30},{type:`mushroom`,subType:`ep_mushroom`,amount:60},{type:`weapon`,subType:`m1887`,amount:12},{type:`scope`,subType:`scope_2x`,amount:1}];function Ag(){let e=[];return Eg().forEach((t,n)=>{let r=wf(31*(n+1));r()<.45||t.layout.loot.forEach(([i,a],o)=>{let s=kg[Math.floor(r()*kg.length)];e.push({id:`loot_house_${n+1}_${o+1}`,zone:t.building.zone,...s,x:i,z:a})})}),e}var jg={x:1110,z:620},Mg={x:700,z:275},Ng={x:-88,z:72},Pg={x:430,z:-142,halfLength:26,height:3},Fg=15857145,Ig=14427686,Lg=13358561;function Rg(e,t,n,r,i,a,o,s=!0){return{x:e,y:t+i/2,z:n,sx:r,sy:i,sz:a,color:o,solid:s}}var zg=null;function Bg(){if(zg)return zg;let e=[],t=jg,n=ph(t.x,t.z);e.push(Rg(t.x,n,t.z,9,1.6,9,9741240));let r=[[6.6,7,Fg],[5.8,6,Ig],[5.2,6,Fg],[4.6,5,Ig],[4,4,Fg]],i=n+1.6;for(let[n,a,o]of r)e.push(Rg(t.x,i,t.z,n,a,n,o)),i+=a;e.push(Rg(t.x,i,t.z,5.4,.5,5.4,3359061)),e.push(Rg(t.x,i+.5,t.z,2.6,2.6,2.6,16639626,!1)),e.push(Rg(t.x,i+3.1,t.z,3.6,.7,3.6,Ig));let a=Mg,o=ph(a.x,a.z);e.push(Rg(a.x,o,a.z,6.4,7,6.4,15851717)),e.push(Rg(a.x,o+7,a.z,4.6,5,4.6,15258544)),e.push(Rg(a.x,o+12,a.z,5.4,1.3,5.4,8138002)),e.push(Rg(a.x,o,a.z+3.3,1.6,2.4,.3,4530698,!1));let s={x:a.x,y:o+10.2,z:a.z+2.9},c=Ng,l=ph(c.x,c.z);e.push(Rg(c.x+3.2,l,c.z,4,2.6,4,9741240));for(let t=0;t<5;t++)e.push(Rg(c.x,l+t*6,c.z,1.1,6,1.1,t%2?16317180:Ig));e.push(Rg(c.x,l+30,c.z,3.2,.4,3.2,6583435,!1));let u=Pg,d=ph(u.x,u.z);e.push(Rg(u.x,d,u.z,6,u.height,u.halfLength*2,Lg)),e.push(Rg(u.x-2.7,d+u.height,u.z,.3,1,u.halfLength*2,9741240,!1)),e.push(Rg(u.x+2.7,d+u.height,u.z,.3,1,u.halfLength*2,9741240,!1));for(let t of[-14,0,14])e.push(Rg(u.x,d+.4,u.z+t,6.4,1.8,3,4674921,!1));let f=Math.round(u.height/.3);for(let t of[-1,1])for(let n=0;n<f;n++){let r=(n+1)*.3,i=u.halfLength+(f-n-.5)*.5;e.push(Rg(u.x,d,u.z+t*i,3.2,r,.5,9741240))}return zg={boxes:e,windmillHub:s},zg}function Vg(){let e=bp.map(e=>({type:`rect`,cx:e.x,cz:e.z,hw:e.width*.5+1.2,hd:e.depth*.5+1.2,tag:`building`}));for(let[t,n,r]of $f)e.push({type:`circle`,cx:t,cz:n,r,tag:`poi`});for(let[t,n,r]of[[62,-36,56],[48,-24,44],[-72,-46,64],[-56,-34,48],[88,64,74],[-88,72,82],[-920,-880,150],[880,-910,170],[-950,860,140],[920,880,155],[0,-1020,190]])e.push({type:`circle`,cx:t,cz:n,r,tag:`terrain`});for(let t of qf)e.push({type:`circle`,cx:t.cx,cz:t.cz,r:t.radius+6,tag:`poi`});for(let t of yp)e.push({type:`circle`,cx:t.cx,cz:t.cz,r:t.radius,tag:`poi`});for(let[t,n,r]of ep)e.push({type:`circle`,cx:t,cz:n,r,tag:`landmark`});return e}var Hg=(e,t,n,r={})=>({kind:e,count:t,minSpacing:n,...r}),Ug=(e,t,n,r={})=>({kind:e,count:t,minSpacing:n,nearTag:`building`,ringMin:2.5,ringMax:16,avoidTags:[`building`,`terrain`,`landmark`],...r}),Wg=[[-600,-120],[560,-560],[-180,520],[160,330],[-520,520],[700,330],[-740,240],[380,560],[-120,-480],[620,-160],[-380,-440],[120,-560],[-860,-120],[840,40],[-60,900],[60,-880]].flatMap(([e,t])=>{let n={cx:e,cz:t,r:85};return[Hg(`small_tree`,30,5,{region:n}),Hg(`tree_olive`,18,7,{region:n}),Hg(`tree_blossom`,14,8,{region:n}),Hg(`tree_pine`,26,6,{region:n}),Hg(`tree_tall`,16,7,{region:n}),Hg(`tree_palm`,6,8,{region:n}),Hg(`bush`,60,3,{region:n}),Hg(`log`,6,10,{region:n}),Hg(`grass_tall`,90,2.2,{region:n}),Hg(`grass_tuft`,160,1.5,{region:n})]}),Gg=[[-700,-620],[700,-300],[-260,760],[300,-700],[-900,500],[940,300]].map(([e,t])=>Hg(`rock`,28,7,{region:{cx:e,cz:t,r:70},scaleMin:1,scaleMax:2.2})),Kg=[...$f.flatMap(([e,t,n])=>{let r={cx:e,cz:t,r:n};return[Hg(`tree_olive`,6,12,{region:r,avoidTags:[`building`],roadMargin:5}),Hg(`tree_palm`,5,12,{region:r,avoidTags:[`building`],roadMargin:5}),Hg(`bush`,10,5,{region:r,avoidTags:[`building`],roadMargin:3})]}),...Wg,...Gg,Hg(`water_tower`,14,180,{scaleMin:1,scaleMax:1.1,roadMargin:6}),Hg(`shed`,55,40,{roadMargin:5}),Hg(`tent`,36,60,{scaleMin:.9,scaleMax:1.1}),Hg(`small_tree`,300,7),Hg(`tree_olive`,150,8),Hg(`tree_blossom`,120,9),Hg(`tree_pine`,220,8),Hg(`tree_tall`,120,9),Hg(`tree_palm`,70,9),Hg(`rock`,300,8,{scaleMin:.8,scaleMax:1.8}),Hg(`log`,110,12),Hg(`hay_bale`,70,8),Hg(`bush`,520,3),Hg(`flower_pink`,320,3.2),Hg(`flower_yellow`,320,3.2),Hg(`flower_purple`,260,3.2),Hg(`grass_tuft`,5200,1.6),Hg(`grass_tall`,2200,2.4),Ug(`crate_stack`,260,5),Ug(`barrel_cluster`,190,5),Ug(`tire_stack`,100,4),Ug(`hay_bale`,70,4),Ug(`fence_segment`,160,4),Ug(`small_tree`,220,7,{ringMin:6,ringMax:20}),Ug(`bush`,380,2.5,{ringMin:1.5,ringMax:9}),Ug(`grass_tall`,500,2,{ringMin:1.5,ringMax:12}),Ug(`grass_tuft`,700,1.4,{ringMin:1,ringMax:14})],qg=[{type:`pickup`,x:8.5,z:34,yaw:0},{type:`tuktuk`,x:-10,z:24,yaw:.6},{type:`pickup`,x:60,z:-14,yaw:Math.PI/2},{type:`tuktuk`,x:-60,z:-14,yaw:-Math.PI/2},{type:`pickup`,x:8.5,z:-160,yaw:0},{type:`pickup`,x:8.5,z:300,yaw:Math.PI},{type:`tuktuk`,x:20,z:395,yaw:1.2},{type:`pickup`,x:400,z:-340,yaw:2.4},{type:`tuktuk`,x:-420,z:-260,yaw:.4},{type:`pickup`,x:-340,z:372,yaw:-.8},{type:`tuktuk`,x:430,z:330,yaw:3},{type:`pickup`,x:-250,z:-14,yaw:-Math.PI/2},{type:`pickup`,x:250,z:-14,yaw:Math.PI/2},{type:`tuktuk`,x:8.5,z:-420,yaw:0},{type:`pickup`,x:8.5,z:640,yaw:Math.PI},{type:`tuktuk`,x:-480,z:-14,yaw:-Math.PI/2}];qg.push(...qf.flatMap(e=>e.vehicles),...yp.flatMap(e=>e.vehicles));var Jg=lp(yp),Yg={id:`bermuda_mini`,name:`Bermuda Mini 2.4 KM`,seed:20261029,halfSize:$.islandHalfSize,chunkSize:200,viewDistance:520,fogNear:230,fogFar:640,zones:Vg(),roads:[...Xf(),...Jg.segments],rules:Kg,vehicleSpawns:qg},Xg=null;function Zg(){if(Xg)return Xg;let e=Nm(),t=Am(Yg,e.footprint),n=new Em(32);for(let r of jm(t,e.footprint,ph))n.add(r);return Xg={map:Yg,library:e,placements:t,colliders:n},Xg}var Qg=230,$g=22,e_=[14427686,2450411,16096779,1483594,7893356,947344],t_=12102042,n_=11051678,r_=null;function i_(e,t,n,r,i,a,o){let s=[ph(e,t),ph(e-n/2,t-r/2),ph(e+n/2,t-r/2),ph(e-n/2,t+r/2),ph(e+n/2,t+r/2)],c=Math.min(...s)-.25,l=Math.max(...s)+i;return{x:e,y:(c+l)/2,z:t,sx:n,sy:l-c,sz:r,color:a,solid:!0,...o===void 0?{}:{faceColors:{"+y":o}}}}function a_(){if(r_)return r_;let e=Zg(),t=wf(20261105),n=e.map.halfSize-60,r=[],i=[],a=0;for(let o=0;o<9200&&a<Qg;o++){let o=(t()*2-1)*n,s=(t()*2-1)*n;if(km(e.map,o,s,14,{roadMargin:7})||i.some(([e,t])=>Math.hypot(e-o,t-s)<$g))continue;let c=t(),l=t()<.5;if(c<.4){let e=5+t()*2;r.push(i_(o,s,l?e:.5,l?.5:e,1.3,t_,7893356));let n=t()<.5?-1:1;r.push(i_(o+(l?n*(e/2+.2):0),s+(l?0:n*(e/2+.2)),l?.5:3.5,l?3.5:.5,1.3,t_,7893356)),r.push(i_(o+(l?0:5),s+(l?5:0),l?2.6:.5,l?.5:2.6,1.1,t_,7893356))}else if(c<.75){let e=2+ +(t()<.5);for(let n=0;n<e;n++){let i=e_[Math.floor(t()*e_.length)],a=l?0:(n-(e-1)/2)*3.4,c=l?(n-(e-1)/2)*3.4:0,u=i_(o+a,s+c,l?6:2.5,l?2.5:6,2.5,i);if(r.push(u),t()<.25){let e=u.y+u.sy/2;r.push({...u,y:e+1.25,sy:2.5,color:e_[Math.floor(t()*e_.length)]})}}}else r.push(i_(o,s,l?6:.5,l?.5:6,2.4,n_,7893356)),r.push(i_(o+(l?-3:2.2),s+(l?2.2:-3),l?.5:4,l?4:.5,2,n_,7893356)),r.push(i_(o+(l?2:-1.5),s+(l?-1.5:2),1.3,1.3,.7,10129285));i.push([o,s]),a++}return r_=r,r}var o_={uVivid:{value:1.18},uContrast:{value:1.05}};function s_(e){o_.uVivid.value=e?1.18:1,o_.uContrast.value=e?1.05:1}var c_=new WeakSet;function l_(e){return c_.has(e)||(c_.add(e),e.onBeforeCompile=e=>{e.uniforms.uVivid=o_.uVivid,e.uniforms.uContrast=o_.uContrast,e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform float uVivid;
uniform float uContrast;
void main() {`).replace(`#include <dithering_fragment>`,`float vividLuma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor.rgb = mix(vec3(vividLuma), gl_FragColor.rgb, uVivid);
        gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * uContrast + 0.5;
        #include <dithering_fragment>`)},e.customProgramCacheKey=()=>`vivid-v1`,e.needsUpdate=!0),e}var u_={pickup:[{model:`truck`,scale:1.55},{model:`suv`,scale:1.6},{model:`van`,scale:1.55},{model:`taxi`,scale:1.6}],tuktuk:[{model:`sedan`,scale:1.2},{model:`hatchback-sports`,scale:1.1}]},d_=new Map,f_=null;async function p_(e){let t=`${e.replace(/\/?$/,`/`)}assets/models/kenney_cars/`,n=new yd,r=new Set(Object.values(u_).flatMap(e=>e.map(e=>e.model)));await Promise.all([...r].map(async e=>{try{let r=await n.loadAsync(`${t}${e}.glb`);r.scene.updateMatrixWorld(!0);let i=new Nr().setFromObject(r.scene),a=new lr;if(r.scene.position.set(-(i.min.x+i.max.x)/2,-i.min.y,-(i.min.z+i.max.z)/2),a.add(r.scene),!f_){let e=null;r.scene.traverse(t=>{!e&&t instanceof q&&(e=t.material.map??null)}),f_=l_(new io({map:e}))}d_.set(e,a)}catch{}}))}function m_(e,t){let n=u_[e];if(!n||!f_)return null;let r=n[t%n.length],i=d_.get(r.model);if(!i)return null;let a=i.clone(!0);a.traverse(e=>{e instanceof q&&(e.material=f_,e.castShadow=!0,e.receiveShadow=!0)}),a.rotation.y=Math.PI,a.scale.setScalar(r.scale);let o=new lr;return o.name=`vehicle_group_${e}`,a.name=`vehicle_${e}_${r.model}`,o.add(a),o}var h_={uTime:{value:0}};function g_(e){h_.uTime.value+=e}var __=`
  vec2 wp = vWaterPos.xz;
  float tm = uTime;
  float a1 = dot(wp, vec2(0.11, 0.07)) + tm * 0.9;
  float a2 = dot(wp, vec2(-0.05, 0.13)) + tm * 1.3;
  float a3 = dot(wp, vec2(0.31, -0.21)) + tm * 2.1;
  vec2 grad = vec2(0.11 * cos(a1) - 0.05 * cos(a2) + 0.31 * cos(a3) * 0.5,
                   0.07 * cos(a1) + 0.13 * cos(a2) - 0.21 * cos(a3) * 0.5);
  vec3 wn = normalize(vec3(-grad.x * 0.35, 1.0, -grad.y * 0.35));
  vec3 viewDir = normalize(cameraPosition - vWaterPos);
  vec3 sunDir = normalize(vec3(0.55, 0.75, 0.4));
  float spec = pow(max(dot(wn, normalize(sunDir + viewDir)), 0.0), 120.0);
  float fres = pow(1.0 - max(dot(wn, viewDir), 0.0), 3.0);
  float ripple = 0.5 + 0.5 * sin(a1 * 1.7 + a2 * 1.3);
`,v_=`
  float coastDist = max(abs(vWaterPos.x), abs(vWaterPos.z)) - 1208.0;
  float depthMix = smoothstep(0.0, 160.0, coastDist);
  vec3 shallow = vec3(0.16, 0.78, 0.82);
  vec3 deep = vec3(0.07, 0.38, 0.66);
  vec3 wcol = mix(shallow, deep, depthMix);
  wcol += (ripple - 0.5) * 0.06;
  float foamBand = (1.0 - smoothstep(0.0, 9.0, coastDist)) * step(-6.0, coastDist);
  float foam = foamBand * (0.55 + 0.45 * sin(coastDist * 0.9 - tm * 1.6 + ripple * 2.0));
  wcol = mix(wcol, vec3(0.95, 0.99, 1.0), clamp(foam, 0.0, 1.0) * 0.85);
`,y_=`
  float edge = abs(vWaterUv.y - 0.5) * 2.0;
  vec3 shallow = vec3(0.22, 0.74, 0.78);
  vec3 deep = vec3(0.10, 0.50, 0.74);
  vec3 wcol = mix(deep, shallow, smoothstep(0.1, 0.95, edge));
  float flow = vWaterUv.x * 0.35 - tm * 1.1;
  wcol += (0.5 + 0.5 * sin(flow + ripple * 3.0) - 0.5) * 0.07;
  float foam = smoothstep(0.78, 1.0, edge) * (0.55 + 0.45 * sin(vWaterUv.x * 0.8 - tm * 1.4));
  wcol = mix(wcol, vec3(0.95, 0.99, 1.0), clamp(foam, 0.0, 1.0) * 0.8);
`,b_=new Map;function x_(e){let t=b_.get(e);if(t)return t;let n=new Ei({color:e===`ocean`?2463422:2992348});return n.onBeforeCompile=t=>{t.uniforms.uTime=h_.uTime,t.vertexShader=t.vertexShader.replace(`void main() {`,`varying vec3 vWaterPos;
varying vec2 vWaterUv;
void main() {`).replace(`#include <project_vertex>`,`#include <project_vertex>
  vWaterPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vWaterUv = uv;`),t.fragmentShader=t.fragmentShader.replace(`void main() {`,`uniform float uTime;
varying vec3 vWaterPos;
varying vec2 vWaterUv;
void main() {`).replace(`#include <opaque_fragment>`,`${__}
        ${e===`ocean`?v_:y_}
        wcol = mix(wcol, vec3(0.70, 0.86, 1.0), fres * 0.28);
        wcol += vec3(1.0, 0.95, 0.80) * spec * 0.7;
        outgoingLight = wcol;
        #include <opaque_fragment>`)},n.customProgramCacheKey=()=>`water-${e}-v1`,b_.set(e,n),n}function S_(e,t,n){let r=e.length,i=new Float32Array(r*6),a=new Float32Array(r*4),o=new Float32Array(r*6),s=0;for(let c=0;c<r;c++){let l=e[Math.max(0,c-1)],u=e[Math.min(r-1,c+1)],d=u[0]-l[0],f=u[1]-l[1],p=Math.hypot(d,f)||1;d/=p,f/=p;let m=-f,h=d,[g,_]=e[c];c>0&&(s+=Math.hypot(g-e[c-1][0],_-e[c-1][1])),i.set([g+m*t/2,n,_+h*t/2,g-m*t/2,n,_-h*t/2],c*6),o.set([0,1,0,0,1,0],c*6),a.set([s,0,s,1],c*4)}let c=[];for(let e=0;e<r-1;e++){let t=e*2;c.push(t,t+2,t+1,t+1,t+2,t+3)}let l=new di;return l.setAttribute(`position`,new K(i,3)),l.setAttribute(`normal`,new K(o,3)),l.setAttribute(`uv`,new K(a,2)),l.setIndex(c),l.computeBoundingSphere(),l}function C_(){let e=Xf().filter(e=>e.tag===`water`),t=[];for(let n of e)t.length===0&&t.push([n.x1,n.z1]),t.push([n.x2,n.z2]);return t}function w_(e){let t=C_();for(let n=0;n<t.length-1;n++){let[r,i]=t[n],[a,o]=t[n+1];if(e>=r&&e<=a||e>=a&&e<=r){let t=a===r?0:(e-r)/(a-r);return{z:i+(o-i)*t,yaw:Math.atan2(-(o-i),a-r)}}}return{z:0,yaw:0}}var T_={pickup:{id:`pickup`,maxSpeed:26,boostSpeed:32,accel:14,brakeDecel:28,drag:5,steerRate:1.9,halfLength:2.4,halfWidth:1.05},tuktuk:{id:`tuktuk`,maxSpeed:17,boostSpeed:21,accel:11,brakeDecel:22,drag:5,steerRate:2.3,halfLength:1.5,halfWidth:.85}};function E_(e,t,n,r,i){return{id:e,type:t,x:n,y:0,z:r,yaw:i,speed:0,steer:0,driverId:null,spawnX:n,spawnZ:r,spawnYaw:i}}function D_(e,t,n,r){let i=Math.max(r.minX,Math.min(e,r.maxX)),a=Math.max(r.minZ,Math.min(t,r.maxZ)),o=e-i,s=t-a;return o*o+s*s<n*n}function O_(e,t,n,r){let i=r.halfSize-1;if(Math.abs(e)+n>i||Math.abs(t)+n>i)return!0;for(let i of r.boxes)if(D_(e,t,n,i))return!0;if(r.circles)for(let i of r.circles.query(e,t,n)){let r=i.r+n,a=e-i.x,o=t-i.z;if(a*a+o*o<r*r)return!0}return!1}function k_(e,t,n,r,i){let a=-Math.sin(r),o=-Math.cos(r),s=Math.max(0,e.halfLength-e.halfWidth),c=e.halfWidth;return O_(t,n,c,i)||O_(t+a*s,n+o*s,c,i)||O_(t-a*s,n-o*s,c,i)}var A_=(e,t,n)=>Math.max(t,Math.min(n,e));function j_(e,t,n,r,i){e.steer+=(A_(n.steer,-1,1)-e.steer)*(1-Math.exp(-9*i));let a=n.boost?t.boostSpeed:t.maxSpeed,o=t.maxSpeed*.35,s=0;if(n.throttle>.05?s=a*Math.min(1,n.throttle):n.throttle<-.05&&(s=-o*Math.min(1,-n.throttle)),s===0){let n=t.drag*i;e.speed=Math.abs(e.speed)<=n?0:e.speed-Math.sign(e.speed)*n}else if(Math.sign(s)!==Math.sign(e.speed)&&Math.abs(e.speed)>.3)e.speed+=Math.sign(s)*t.brakeDecel*i;else if(Math.abs(s)>Math.abs(e.speed)){let n=Math.min(1,Math.abs(e.speed)/Math.max(1,a)),r=t.accel*(1-.65*n);e.speed+=Math.sign(s)*Math.min(r*i,Math.abs(s-e.speed))}else{let n=t.drag*1.6*i;e.speed=Math.abs(e.speed-s)<=n?s:e.speed-Math.sign(e.speed-s)*n}if(n.handbrake){let n=t.brakeDecel*1.1*i;e.speed=Math.abs(e.speed)<=n?0:e.speed-Math.sign(e.speed)*n}let c=Math.abs(e.speed),l=Math.min(1,c/3),u=1-.5*Math.min(1,c/t.maxSpeed),d=e.speed>=0?1:-1,f=e.yaw;e.yaw-=e.steer*t.steerRate*l*u*d*(n.handbrake?1.5:1)*i,k_(t,e.x,e.z,e.yaw,r)&&(e.yaw=f);let p=Math.max(1,Math.ceil(c*i/.4)),m=i/p,h=!1,g=0;for(let n=0;n<p;n++){let n=-Math.sin(e.yaw)*e.speed*m,i=-Math.cos(e.yaw)*e.speed*m,a=e.x+n,o=e.z+i;if(!k_(t,a,o,e.yaw,r))e.x=a,e.z=o;else if(!k_(t,a,e.z,e.yaw,r))e.x=a,e.speed*=.97;else if(!k_(t,e.x,o,e.yaw,r))e.z=o,e.speed*=.97;else{g=Math.abs(e.speed),e.speed=-e.speed*.25,h=!0;break}}return e.y=0,{blocked:h,impactSpeed:g}}function M_(e,t,n,r){let i=null,a=r;for(let r of e){if(r.driverId)continue;let e=Math.hypot(r.x-t,r.z-n);e<=a&&(a=e,i=r)}return i}function N_(e,t,n,r=.5){let i=Math.cos(e.yaw),a=-Math.sin(e.yaw),o=-Math.sin(e.yaw),s=-Math.cos(e.yaw),c=t.halfWidth+1.2,l=t.halfLength+1.2,u=[[e.x-i*c,e.z-a*c],[e.x+i*c,e.z+a*c],[e.x-o*l,e.z-s*l],[e.x+o*l,e.z+s*l]];for(let[e,t]of u)if(!O_(e,t,r,n))return{x:e,z:t};return{x:e.x-i*c,z:e.z-a*c}}var P_=(e,t,n,r,i,a,o)=>({geo:new J(e,t,n),color:r,pos:[i,a,o]}),F_=(e,t,n,r,i)=>({geo:new Y(e,e,t,8),color:1120295,pos:[n,r,i],rot:[0,0,Math.PI/2]});function I_(e){return[P_(2,.55,4.8,e,0,.78,0),P_(1.9,.4,1.5,e,0,1.15,-1.7),P_(1.85,.85,1.5,e,0,1.5,-.1),P_(1.9,.5,1.3,1976635,0,1.62,-.1),P_(1.8,.12,1.4,e,0,2.02,-.1),P_(1.9,.15,1.9,3621201,0,1.08,1.55),P_(.1,.5,1.9,e,-.95,1.35,1.55),P_(.1,.5,1.9,e,.95,1.35,1.55),P_(1.9,.5,.1,e,0,1.35,2.45),P_(1.9,.55,.1,e,0,1.38,.62),P_(2,.25,.2,13358561,0,.62,-2.45),P_(.35,.2,.1,16707722,-.7,.98,-2.43),P_(.35,.2,.1,16707722,.7,.98,-2.43),P_(.3,.2,.1,14427686,-.7,1,2.45),P_(.3,.2,.1,14427686,.7,1,2.45),F_(.48,.38,-1.05,.48,-1.5),F_(.48,.38,1.05,.48,-1.5),F_(.48,.38,-1.05,.48,1.5),F_(.48,.38,1.05,.48,1.5)]}function L_(e){return[P_(1.5,.55,2.4,e,0,.72,.35),P_(1,.75,.8,e,0,.92,-1.15),P_(.9,.12,.5,14870768,0,.5,-1.62),P_(1.3,.3,.7,8138002,0,1.1,.75),P_(1.7,.1,2,16436245,0,2.12,.3),P_(.08,1.1,.08,3359061,-.78,1.58,-.58),P_(.08,1.1,.08,3359061,.78,1.58,-.58),P_(.08,1.1,.08,3359061,-.78,1.58,1.15),P_(.08,1.1,.08,3359061,.78,1.58,1.15),P_(1.45,.7,.05,9684477,0,1.5,-.62),P_(.3,.18,.08,16707722,0,.95,-1.57),F_(.35,.22,0,.35,-1.35),F_(.35,.26,-.85,.35,.9),F_(.35,.26,.85,.35,.9)]}var R_={pickup:[12597547,2450411,16096779,1483594,15067115],tuktuk:[1483594,14427686,2450411,16347926]};function z_(e,t=0){let n=R_[e]??[9741240],r=n[t%n.length],i=Gh(e===`tuktuk`?L_(r):I_(r)),a=new di;a.setAttribute(`position`,new K(i.positions,3)),a.setAttribute(`normal`,new K(i.normals,3)),a.setAttribute(`color`,new K(i.colors,3)),a.computeBoundingSphere();let o=new q(a,new io({vertexColors:!0}));o.name=`vehicle_${e}`;let s=new lr;return s.name=`vehicle_group_${e}`,s.add(o),s}function B_(e,t,n,r=1,i=1){if(typeof document>`u`)return null;let a=document.createElement(`canvas`);a.width=e,a.height=t;let o=a.getContext(`2d`);if(!o)return null;n(o,e,t);let s=new Ia(a);return r>1||i>1?(s.wrapS=M,s.wrapT=M,s.repeat.set(r,i)):(s.wrapS=N,s.wrapT=N),s}var V_=70,H_=new Set([`grass_tuft`,`grass_tall`,`flower_pink`,`flower_yellow`,`flower_purple`]);function U_(e){e.traverse(e=>{e instanceof q&&(e.castShadow=!0)})}var W_=class{assets;staticWorldMat=null;blobMat=null;windmillBlades=null;dynamicBlobs=[];dynamicBlobsUsed=0;camFill=new ls(16773596,.5);scene;camera;chunkGrid;detailGrid;playerRig;airplaneMesh;botRigs=new Map;playerSkin=null;playerLoadout={..._};playerWeaponSkins={...v};profile=O.low;cullFrustum=new pa;cullMatrix=new W;cullSphere=new ri(new V,1.6);sun=new ls(16771e3,1.38);vehicleMeshes=new Map;glooWallMeshes=new Map;lootMeshes=new Map;safeZoneRing;muzzleFlash;muzzleFlashMesh;muzzleFlashTimer=0;playerRecoilKick=0;tracers=[];drawSponsorBannerFn=null;constructor(e){this.assets=e,this.scene=new vr;let t=Zg();this.chunkGrid=new wm(t.map.chunkSize),this.detailGrid=new wm(t.map.chunkSize);let n=this.buildSkyHorizonTexture();this.scene.background=n??new G(7907560),this.scene.fog=new _r(12178414,220,640),this.camera=new ns($.normalFov,1280/720,.45,1900);let r=new Wo(15266815,8823642,1),i=this.sun;i.position.set(220,310,160),i.shadow.mapSize.set(2048,2048);let a=i.shadow.camera;a.left=-70,a.right=V_,a.top=V_,a.bottom=-70,a.near=20,a.far=700,i.shadow.bias=-6e-4,i.shadow.normalBias=.45;let o=new ls(9684477,.42);o.position.set(-180,140,-160),this.scene.add(r,i,i.target,o,this.camFill,this.camFill.target),this.buildStaticIslandEnvironment(),this.buildHouses(),this.buildWindmillBlades(),this.scene.traverse(e=>{e instanceof q&&(e.material instanceof io&&(e.receiveShadow=!0),!e.name.startsWith(`bermuda_scatter_detail`)&&(e.name.startsWith(`bermuda_static`)||e.name.startsWith(`bermuda_scatter`))&&(e.castShadow=!0))}),this.airplaneMesh=Op(),this.airplaneMesh.position.set(0,$.airplaneAltitude,0),this.scene.add(this.airplaneMesh);let s=new Y(1,1,55,40,1,!0),c=new Ei({color:16739584,transparent:!0,opacity:.22,side:2,depthWrite:!1});this.safeZoneRing=new q(s,c),this.safeZoneRing.position.set(0,27,0),this.scene.add(this.safeZoneRing),this.playerRig=jp(`#ffd600`,`street_gold`),this.scene.add(this.playerRig.root),U_(this.playerRig.root),this.muzzleFlash=new os(16755456,0,7),this.scene.add(this.muzzleFlash),this.muzzleFlashMesh=new q(new Ua(.16,0),new Ei({color:16771584})),this.muzzleFlashMesh.visible=!1,this.playerRig.muzzlePoint.add(this.muzzleFlashMesh)}buildSkyHorizonTexture(){return B_(512,256,(e,t,n)=>{let r=e.createLinearGradient(0,0,0,n);r.addColorStop(0,`#4f83cc`),r.addColorStop(.45,`#79a8e8`),r.addColorStop(.78,`#b8d3f4`),r.addColorStop(1,`#dce8f7`),e.fillStyle=r,e.fillRect(0,0,t,n);for(let[t,n,r,i]of[[80,62,68,22],[115,56,52,20],[55,68,45,16],[240,48,82,26],[285,54,58,20],[205,58,50,18],[410,60,74,24],[448,66,48,18],[375,68,46,16],[160,92,64,18],[330,88,70,20]]){let a=e.createRadialGradient(t,n-4,4,t,n,r);a.addColorStop(0,`rgba(255, 252, 255, 0.92)`),a.addColorStop(.6,`rgba(238, 232, 252, 0.65)`),a.addColorStop(1,`rgba(184, 211, 244, 0)`),e.fillStyle=a,e.beginPath(),e.ellipse(t,n,r,i,0,0,Math.PI*2),e.fill()}})}buildSponsorBillboardTexture(){if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=512,e.height=256;let t=e.getContext(`2d`);if(!t)return null;let n=new Ia(e),r=e=>{let r=t.createLinearGradient(0,0,512,256);r.addColorStop(0,`#090d16`),r.addColorStop(.55,`#111c33`),r.addColorStop(1,`#1e1b4b`),t.fillStyle=r,t.fillRect(0,0,512,256),t.strokeStyle=`#ffd600`,t.lineWidth=10,t.strokeRect(6,6,500,244),t.strokeStyle=`#00e5ff`,t.lineWidth=3,t.strokeRect(14,14,484,228),t.fillStyle=`#1e293b`,t.fillRect(24,24,185,208),e&&e.complete&&e.naturalWidth>0?t.drawImage(e,26,26,181,204):(t.fillStyle=`#334155`,t.fillRect(26,26,181,204),t.fillStyle=`#ffd600`,t.font=`bold 28px sans-serif`,t.fillText(`RZST VIP`,52,135)),t.strokeStyle=`#ffd600`,t.lineWidth=4,t.strokeRect(24,24,185,208),t.fillStyle=`#ffd600`,t.fillRect(226,28,256,34),t.fillStyle=`#090d16`,t.font=`900 18px sans-serif`,t.fillText(`OFFICIAL MAIN SPONSOR`,240,51),t.fillStyle=`#ffffff`,t.font=`900 34px sans-serif`,t.fillText(`RZST × FREE FIRE`,224,104),t.fillStyle=`#00e5ff`,t.font=`bold 22px sans-serif`,t.fillText(`ผู้สนับสนุนหลักอย่างเป็นทางการ`,224,142),t.fillStyle=`#facc15`,t.font=`bold 18px sans-serif`,t.fillText(`★ BERMUDA 2.4 KM TOURNAMENT ★`,224,182),t.fillStyle=`#cbd5e1`,t.font=`bold 15px sans-serif`,t.fillText(`BOOYAH! PRO LEAGUE PARTNER`,224,214),n.needsUpdate=!0};if(this.drawSponsorBannerFn=r,r(),typeof Image<`u`){let e=new Image;e.crossOrigin=`anonymous`,e.onload=()=>r(e),e.src=`${`./`.replace(/\/?$/,`/`)}assets/ui/sponsor_main.jpg`}return n}async preloadSponsorImage(e=`./`){if(typeof Image>`u`||!this.drawSponsorBannerFn)return;let t=this.drawSponsorBannerFn;await new Promise(n=>{let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{r.complete&&r.naturalWidth>0&&t(r),n()},r.onerror=()=>n(),r.src=`${e.replace(/\/?$/,`/`)}assets/ui/sponsor_main.jpg`,setTimeout(n,1200)})}buildSurfaceDetailTexture(){return B_(512,512,(e,t,n)=>{e.fillStyle=`#f4f4f0`,e.fillRect(0,0,t,n);for(let r=0;r<4800;r++){let i=r*73%t,a=r*139%n;e.fillStyle=r%3==0?`rgba(255,255,255,0.45)`:`rgba(140,128,112,0.16)`,e.fillRect(i,a,3,3)}e.strokeStyle=`rgba(90, 78, 66, 0.24)`,e.lineWidth=2;for(let r=0;r<n/32;r++){let n=r*32;e.beginPath(),e.moveTo(0,n),e.lineTo(t,n),e.stroke();let i=r%2*32;for(let r=i;r<t;r+=64)e.beginPath(),e.moveTo(r,n),e.lineTo(r,n+32),e.stroke()}for(let r=0;r<n/32;r++)e.fillStyle=r%2==0?`rgba(255, 252, 240, 0.14)`:`rgba(120, 105, 88, 0.08)`,e.fillRect(0,r*32+2,t,28)},1,1)}buildGrassDetailTexture(){return B_(512,512,(e,t,n)=>{e.fillStyle=`#68993e`,e.fillRect(0,0,t,n);for(let r=0;r<90;r++){let i=r*89%t,a=r*149%n,o=28+r%4*14,s=e.createRadialGradient(i,a,2,i,a,o);s.addColorStop(0,r%4==0?`rgba(138, 178, 68, 0.45)`:r%4==1?`rgba(176, 140, 86, 0.34)`:`rgba(78, 122, 42, 0.40)`),s.addColorStop(1,`rgba(104, 153, 62, 0)`),e.fillStyle=s,e.beginPath(),e.arc(i,a,o,0,Math.PI*2),e.fill()}e.lineWidth=1.6;for(let r=0;r<3600;r++){let i=r*53%t,a=r*193%n;e.strokeStyle=r%5==0?`#98c94e`:r%5==1?`#4c7828`:r%5==2?`#b89658`:`#7db044`,e.beginPath(),e.moveTo(i,a),e.lineTo(i+(r%3-1)*2.5,a-5),e.stroke(),r%28==0&&(e.fillStyle=r%56==0?`#fde047`:`#e2e8f0`,e.fillRect(i,a,2.2,2.2))}},140,140)}buildStaticIslandEnvironment(){let e=this.buildGrassDetailTexture(),t=this.buildSurfaceDetailTexture(),n=B_(256,256,(e,t,n)=>{e.fillStyle=`#b4b8bf`,e.fillRect(0,0,t,n),e.strokeStyle=`#787d87`,e.lineWidth=2.5;for(let r=0;r<n;r+=28)e.beginPath(),e.moveTo(0,r),e.lineTo(48,r),e.moveTo(t-48,r),e.lineTo(t,r),e.stroke();e.beginPath(),e.moveTo(24,0),e.lineTo(24,n),e.moveTo(t-24,0),e.lineTo(t-24,n),e.stroke(),e.fillStyle=`#464e5e`,e.fillRect(48,0,t-96,n);for(let r=0;r<400;r++)e.fillStyle=r%2==0?`rgba(255,255,255,0.08)`:`rgba(0,0,0,0.12)`,e.fillRect(48+r*37%(t-96),r*59%n,2,2);e.fillStyle=`#e5e7eb`,e.fillRect(46,0,5,n),e.fillRect(t-51,0,5,n),e.fillStyle=`#facc15`;for(let r=12;r<n;r+=48)e.fillRect(t/2-3,r,6,24)},1,160),r=new q(new Wa(3600,3600),x_(`ocean`));r.rotation.x=-Math.PI/2,r.position.y=-.85,this.scene.add(r);let i=C_(),a=new q(S_(i,36,.03),l_(new io({color:14469019})));a.name=`bermuda_river_bank`;let o=new q(S_(i,30,.1),x_(`river`));o.name=`bermuda_river_water`,o.renderOrder=0,this.scene.add(a,o);let s=l_(new io({vertexColors:!0,map:e??void 0}));eg(this.chunkGrid,{extent:$.islandHalfSize+60,cell:200/12,heightAt:fh,colorAt:_g,material:s,uvScale:e?1600:0,name:`bermuda_terrain`}).forEach(e=>this.scene.add(e));let c=l_(new io({vertexColors:!0}));for(let t of Qf){let n=t.height>60,r=tg(t,{material:n?c:s,colorAt:n?(e,n,r)=>vg(t.color,e,n,r,t.height):_g,uvScale:n||!e?0:1600,name:n?`bermuda_mountain`:`bermuda_hill`});this.scene.add(r),n?this.chunkGrid.addGlobal(r):this.chunkGrid.add(r,t.x,t.z)}let l=new io({color:16777215,map:n??void 0});n||l.color.setHex(4674921);let u=new q(new Wa(8.5,2320),l);u.rotation.x=-Math.PI/2,u.position.set(8.5,.06,0);let d=new q(new Wa(2320,8.5),l);d.rotation.x=-Math.PI/2,d.rotation.z=Math.PI/2,d.position.set(0,.07,-14),this.scene.add(u,d);let f=[{geo:new J(2.8,.12,72),color:13358561,pos:[3.2,.04,4]},{geo:new J(.32,.2,72),color:14870768,pos:[4.4,.08,4]},{geo:new J(2.8,.12,72),color:13358561,pos:[13.8,.04,4]},{geo:new J(72,.12,2.8),color:13358561,pos:[0,.04,-8.8]},{geo:new J(42,.12,16),color:12107463,pos:[0,.03,425]},{geo:new J(42,.12,16),color:12107463,pos:[420,.03,-360]},{geo:new J(64,.12,48),color:9741240,pos:[-440,.03,-280]},{geo:new J(42,.12,16),color:12107463,pos:[-360,.03,380]},{geo:new J(58,.12,44),color:9741240,pos:[450,.03,350]},{geo:new J(11,.1,1180),color:4674921,pos:[0,.03,0],rot:[0,.78,0]},{geo:new J(11,.1,1180),color:4674921,pos:[0,.03,0],rot:[0,-.78,0]},{geo:new J(18,.65,36),color:9741240,pos:[0,.45,-92]},{geo:new J(1.1,1.4,36),color:14870768,pos:[-8.2,1.2,-92]},{geo:new J(1.1,1.4,36),color:14870768,pos:[8.2,1.2,-92]},{geo:new J(.6,7.5,.6),color:13358561,pos:[-8.2,4.2,-92]},{geo:new J(.6,7.5,.6),color:13358561,pos:[8.2,4.2,-92]},{geo:new J(17.2,.5,.6),color:13358561,pos:[0,7.8,-92]},{geo:new J(16,.6,36),color:9741240,pos:[-180,.45,w_(-180).z],rot:[0,w_(-180).yaw,0]},{geo:new J(16,.6,36),color:9741240,pos:[180,.45,w_(180).z],rot:[0,w_(180).yaw,0]},{geo:new Ha(2.4,0),color:9208437,pos:[-19,1.2,-12]},{geo:new Ha(1.7,0),color:7234907,pos:[-17,.85,-10.5]},{geo:new Ha(2.6,0),color:9208437,pos:[34,1.3,-18]},{geo:new Ha(1.8,0),color:7893356,pos:[19,.9,26]}];for(let e of[...qf,...yp,{parts:Jg.parts}])for(let t of e.parts){let e=t.shape===`box`?new J(t.size[0],t.size[1],t.size[2]):t.shape===`cyl`?new Y(t.size[0],t.size[0],t.size[1],t.size[2]):new Ba(t.size[0],t.size[1],t.size[2]);f.push({geo:e,color:t.color,pos:t.pos,...t.rot?{rot:t.rot}:{}})}let p=16.5;f.push({geo:new Y(.45,.65,19,6),color:14870768,pos:[-41.5,9,-79.2],rot:[0,0,-.22]},{geo:new Y(.45,.65,19,6),color:14870768,pos:[-34.5,9,-79.2],rot:[0,0,.22]},{geo:new Y(.45,.65,19,6),color:14870768,pos:[-41.5,9,-76.8],rot:[0,0,-.22]},{geo:new Y(.45,.65,19,6),color:14870768,pos:[-34.5,9,-76.8],rot:[0,0,.22]},{geo:new Y(1.6,1.6,3.2,8),color:16436245,pos:[-38,p,-78],rot:[Math.PI/2,0,0]});for(let e=0;e<8;e++){let t=e*Math.PI/4,n=-38+Math.cos(t)*11.5,r=p+Math.sin(t)*11.5;f.push({geo:new J(23,.35,.35),color:16317180,pos:[-38,p,-78],rot:[0,0,t]},{geo:new J(2.2,1.8,1.8),color:[11032055,58879,16436245,16007006][e%4],pos:[n,r,-78]})}bp.forEach(e=>{if(!e.isTower)return;let t=e.height,n=e.z+e.depth*.5,r=e.z-e.depth*.5;f.push({geo:new J(e.width+1.4,.14,e.depth+1.4),color:12107463,pos:[e.x,.05,e.z]},{geo:new J(e.width,t,e.depth),color:e.color,pos:[e.x,t*.5,e.z]},{geo:new J(.45,t,e.depth+.18),color:10906168,pos:[e.x-e.width*.48,t*.5,e.z]},{geo:new J(.45,t,e.depth+.18),color:10906168,pos:[e.x+e.width*.48,t*.5,e.z]},{geo:new J(e.width+.8,.36,e.depth+.8),color:10265519,pos:[e.x,t+.18,e.z]},{geo:new J(e.width+.95,.28,e.depth+.95),color:e.roofColor,pos:[e.x,t+.42,e.z]},{geo:new J(1.5,2.35,.18),color:4530698,pos:[e.x,1.18,n+.04]},{geo:new J(3.2,.18,1.35),color:15381256,pos:[e.x,2.62,n+.58],rot:[.18,0,0]},{geo:new J(1.55,1.45,.16),color:11823412,pos:[e.x-e.width*.28,t*.56,n+.04]},{geo:new J(1.15,1.15,.18),color:2696484,pos:[e.x-e.width*.28,t*.56,n+.05]},{geo:new J(1.55,1.45,.16),color:11823412,pos:[e.x+e.width*.28,t*.56,n+.04]},{geo:new J(1.15,1.15,.18),color:2696484,pos:[e.x+e.width*.28,t*.56,n+.05]},{geo:new J(1.55,1.45,.16),color:11823412,pos:[e.x-e.width*.28,t*.56,r-.04]},{geo:new J(1.55,1.45,.16),color:11823412,pos:[e.x+e.width*.28,t*.56,r-.04]}),e.isTower&&f.push({geo:new Ba(e.width*.75,3.8,4),color:e.roofColor,pos:[e.x,t+2.3,e.z],rot:[0,Math.PI/4,0]},{geo:new Y(1.15,1.15,.18,12),color:16707722,pos:[e.x,t-1.8,n+.08],rot:[Math.PI/2,0,0]})});for(let[e,t,n,r]of[[-14.5,6.2,8.5,.45],[14.5,6.2,8.5,.45],[-21.5,2,.45,9],[21.5,2,.45,9]])f.push({geo:new J(n,1.18,r),color:12102042,pos:[e,.59,t]},{geo:new J(n+.14,.16,r+.14),color:7893356,pos:[e,1.22,t]},{geo:new J(n*.75,.35,.85),color:8702998,pos:[e,.2,t+.75]},{geo:new J(n*.65,.42,.65),color:16436245,pos:[e,.26,t+.75]});for(let[e,t,n,r]of[[-7.8,10.5,.35,9741240],[11.5,18,-.25,3359061],[18,412,.2,9741240],[-28,435,-.15,4674921],[410,-345,-.3,4674921],[445,-370,.25,9741240],[-425,-290,.15,3359061],[-465,-260,-.4,6583435],[-375,395,.3,9741240],[-340,370,-.2,3359061],[430,365,.25,4674921],[475,335,-.35,9741240],[-195,-125,.15,6583435],[195,-125,-.2,9741240],[-195,145,.25,4674921],[195,145,-.3,3359061]])f.push({geo:new J(2.1,.85,4.6),color:r,pos:[e,.65,t],rot:[0,n,0]},{geo:new J(1.9,.75,1.8),color:1976635,pos:[e,1.35,t-.3],rot:[0,n,0]},{geo:new J(1.5,.45,1.1),color:12750428,pos:[e,1.15,t+1.3],rot:[0,n,0]});f.push({geo:new J(5.5,.14,5.5),color:3359061,pos:[-8.5,.08,-9.5]},{geo:new Y(1.35,1.45,.18,12),color:58879,pos:[-8.5,.16,-9.5]},{geo:new Y(.28,.32,2.8,8),color:14870768,pos:[-8.5,1.5,-9.5]},{geo:new Y(.65,.65,.22,8),color:58998,pos:[-8.5,2.9,-9.5]});for(let[e,t,n]of[[-5.2,-9.5,.05],[-23.5,-6.5,.25],[22,-14,-.35],[-418,-295,.15],[14,425,-.22],[435,-385,.18],[-385,415,-.3],[465,375,.2],[-225,-155,.12],[225,175,-.18],[-695,-535,.2],[695,575,-.25]])f.push({geo:new J(2.3,1.85,5.2),color:16317180,pos:[e,1.15,t],rot:[0,n,0]},{geo:new J(2.34,.45,5.24),color:3359061,pos:[e,.45,t],rot:[0,n,0]},{geo:new J(2.1,.55,1.4),color:1976635,pos:[e,1.45,t+1.8],rot:[0,n,0]},{geo:new Y(.65,.2,.45,8),color:14870768,pos:[e,2.35,t-.8],rot:[.45,n,0]});for(let[e,t,n]of[[-18.5,-15.5,.18],[29,15.5,-.15],[-18,396,.12],[24,436,-.18],[395,-342,-.22],[440,-325,.15],[-460,-295,.3],[-335,390,-.15],[420,335,.25],[13.5,220,0],[13.5,-240,0],[280,-14,1.57]])f.push({geo:new J(2.6,2.3,8.2),color:2450411,pos:[e,1.4,t],rot:[0,n,0]},{geo:new J(2.64,.65,8),color:1976635,pos:[e,1.75,t],rot:[0,n,0]},{geo:new J(2.5,.28,8.1),color:16317180,pos:[e,2.62,t],rot:[0,n,0]});for(let[e,t,n,r,i]of[[6.2,16.5,-.42,16436245,`sport`],[-6.5,19.5,.32,4153874,`jeep`],[14.5,-16.5,.25,15680580,`sport`],[-14,412,-.2,4153874,`jeep`],[12,408,.15,16436245,`sport`],[428,-342,.3,16436245,`sport`],[405,-375,-.25,15680580,`sport`],[450,-350,.1,4153874,`jeep`],[-435,-265,.2,4153874,`jeep`],[-450,-315,-.3,165063,`sport`],[-348,368,-.18,15680580,`sport`],[-375,365,.25,4153874,`jeep`],[438,335,-.22,16436245,`sport`],[465,365,.18,4153874,`jeep`],[-165,-135,.3,15680580,`sport`],[165,-135,-.2,4153874,`jeep`],[-165,165,.15,16436245,`sport`],[165,165,-.25,165063,`sport`],[275,-15,.1,4153874,`jeep`],[-275,15,-.15,15680580,`sport`],[15,-210,.2,16436245,`sport`],[-15,215,-.2,4153874,`jeep`]])i===`sport`?f.push({geo:new J(2,.62,4.4),color:r,pos:[e,.48,t],rot:[0,n,0]},{geo:new J(1.75,.48,2.1),color:988970,pos:[e,.95,t-.2],rot:[0,n,0]},{geo:new J(1.9,.12,.45),color:1976635,pos:[e,.92,t-2],rot:[0,n,0]}):f.push({geo:new J(2.1,.95,4.2),color:r,pos:[e,.68,t],rot:[0,n,0]},{geo:new J(1.95,.85,2.4),color:3560212,pos:[e,1.45,t-.3],rot:[0,n,0]});for(let[e,t,n,r]of[[8.5,12,.25,15381256],[-12,428,-.3,1483594],[420,-320,.4,440020],[-330,365,-.25,15381256],[455,325,.15,15680580],[-190,-120,-.35,1483594],[190,150,.2,15381256],[15,-18,-.4,440020]])f.push({geo:new J(1.4,.55,2.4),color:r,pos:[e,.38,t],rot:[0,n,0]},{geo:new J(1.35,.75,1.6),color:1976635,pos:[e,.95,t-.2],rot:[0,n,0]},{geo:new Ba(.35,.65,4),color:r,pos:[e,.55,t+1],rot:[0,n,0]});for(let[e,t,n]of[[25,-24,.25],[31,-22,-.15],[-32,26,.18],[408,-388,.1],[435,-410,-.2],[-460,-330,.25],[-380,435,-.18],[460,405,.3],[-195,-165,.15],[195,-165,-.2],[-195,185,.2],[195,185,-.15],[0,-250,.1],[0,240,-.2]])f.push({geo:new J(3.8,1.8,4.8),color:14870768,pos:[e,.9,t],rot:[0,n,0]},{geo:new Ba(3.2,1.4,4),color:6583435,pos:[e,2.5,t],rot:[0,n+Math.PI/4,0]});for(let[e,t,n]of[[415,-318,.2],[465,-395,-.4],[-485,-252,.1],[-415,-325,-.3],[-45,445,.4],[35,395,-.2],[-390,355,.25],[-325,420,-.15],[425,380,.15],[490,330,-.3],[-32,-54,.35],[28,-78,-.25],[0,-450,0],[-220,-180,.5],[180,260,-.4],[-240,220,.2]])f.push({geo:new Y(.18,.22,7.5,5),color:6045747,pos:[e-1.4,3.75,t-1.4]},{geo:new Y(.18,.22,7.5,5),color:6045747,pos:[e+1.4,3.75,t-1.4]},{geo:new Y(.18,.22,7.5,5),color:6045747,pos:[e-1.4,3.75,t+1.4]},{geo:new Y(.18,.22,7.5,5),color:6045747,pos:[e+1.4,3.75,t+1.4]},{geo:new J(3.6,.22,3.6),color:7887162,pos:[e,5.5,t]},{geo:new J(3.6,.85,.12),color:9595976,pos:[e,6,t-1.7]},{geo:new J(3.6,.85,.12),color:9595976,pos:[e,6,t+1.7]},{geo:new J(.12,.85,3.6),color:9595976,pos:[e-1.7,6,t]},{geo:new J(.12,.85,3.6),color:9595976,pos:[e+1.7,6,t]},{geo:new Y(.1,.1,2.2,4),color:6045747,pos:[e-1.5,7.4,t-1.5]},{geo:new Y(.1,.1,2.2,4),color:6045747,pos:[e+1.5,7.4,t-1.5]},{geo:new Y(.1,.1,2.2,4),color:6045747,pos:[e-1.5,7.4,t+1.5]},{geo:new Y(.1,.1,2.2,4),color:6045747,pos:[e+1.5,7.4,t+1.5]},{geo:new Ba(3.2,1.2,4),color:12131356,pos:[e,8.8,t],rot:[0,n+Math.PI/4,0]},{geo:new J(.55,6,.14),color:6045747,pos:[e,3,t+1.85]});for(let[e,t,n,r]of[[-9.5,-92,1.57,36],[9.5,-92,1.57,36],[-189.5,-28,1.35,32],[-170.5,-28,1.35,32],[170.5,-130,1.39,32],[189.5,-130,1.39,32],[13.5,-14,0,16],[8.5,-19.5,1.57,16],[-14,380,0,24],[14,380,0,24],[370,-330,.78,28],[-390,-250,-.78,28]])f.push({geo:new J(r,.75,.35),color:14870768,pos:[e,.38,t],rot:[0,n,0]},{geo:new J(r,.14,.38),color:16436245,pos:[e,.65,t],rot:[0,n,0]});f.push({geo:new Y(5.2,5.2,8.5,12),color:15857145,pos:[-460,4.25,-250]},{geo:new Y(5.3,5.3,.45,12),color:15680580,pos:[-460,7.2,-250]},{geo:new Y(5.2,5.2,8.5,12),color:15857145,pos:[-475,4.25,-250]},{geo:new Y(5.3,5.3,.45,12),color:15680580,pos:[-475,7.2,-250]},{geo:new Y(3.6,5.6,13,10),color:6583435,pos:[475,6.5,380]},{geo:new Y(3.6,5.6,13,10),color:6583435,pos:[495,6.5,380]},{geo:new J(4.2,3.2,3.2),color:3359061,pos:[435,1.6,320]},{geo:new Y(.2,.2,1.8,6),color:165063,pos:[435,3.8,320]},{geo:new J(4.2,3.2,3.2),color:3359061,pos:[450,1.6,320]},{geo:new Y(.2,.2,1.8,6),color:165063,pos:[450,3.8,320]});for(let e=0;e<6;e++)f.push({geo:new J(3.6,.15,2.2),color:1981066,pos:[415+e*4.5,.85,365],rot:[.38,0,0]},{geo:new Y(.08,.08,.95,4),color:9741240,pos:[415+e*4.5,.48,365]});let m=[[5.5,6.5],[-18,-28],[8,415],[415,-350],[-430,-270],[-350,370],[440,340],[0,-240],[0,230],[280,0],[-280,0],[0,-680],[0,720],[760,0],[-760,0],[660,-500],[-660,-500],[-660,540]];for(let[e,t]of m)f.push({geo:new J(1.65,1.45,1.65),color:14427686,pos:[e,.72,t]},{geo:new J(1.78,.32,1.78),color:1920728,pos:[e,1.52,t]},{geo:new J(1.82,.14,.28),color:16436245,pos:[e,.72,t]},{geo:new J(.28,.14,1.82),color:16436245,pos:[e,.72,t]},{geo:new Ua(.55,0),color:16007006,pos:[e+1.1,.65,t+.6]},{geo:new Ua(.42,0),color:16478597,pos:[e+1.25,1.35,t+.5]});let h=[[-6,18,16436245],[8,-6,16436245],[-12,-22,15680580],[16,-26,58879],[-25,32,11032055],[35,24,16436245],[-35,-12,15680580],[28,-35,58879],[-8,412,16436245],[22,425,15680580],[-38,435,58879],[15,395,11032055],[412,-352,16436245],[435,-370,15680580],[395,-385,58879],[455,-340,11032055],[-432,-270,16436245],[-455,-295,15680580],[-415,-315,58879],[-470,-265,11032055],[-352,372,16436245],[-375,395,15680580],[-335,415,58879],[-390,365,11032055],[442,342,16436245],[465,365,15680580],[425,385,58879],[480,335,11032055]];for(let e=0;e<40;e++){let t=85+e*37%850,n=e*2.3999,r=Math.round(Math.cos(n)*t),i=Math.round(Math.sin(n)*t),a=e%4==0?11032055:e%3==0?58879:e%2==0?15680580:16436245;h.push([r,i,a])}for(let[e,t,n]of h)f.push({geo:new Y(.12,.16,.44,6),color:16708551,pos:[e,.22,t]},{geo:new Ba(.48,.36,8),color:n,pos:[e,.52,t]},{geo:new J(.1,.1,.1),color:16707722,pos:[e+.14,.55,t+.12]},{geo:new J(.1,.1,.1),color:16707722,pos:[e-.14,.52,t-.1]});let g=[[-19,-12,2.4,9208437],[-17,-10.5,1.7,7234907],[34,-18,2.6,9208437],[19,26,1.8,7893356],[-42,18,3.2,9208437],[42,-28,2.8,7893356],[-25,-45,3.4,7234907],[28,45,2.5,9208437],...[[-140,1,3.2,9208437],[-175,-1,2.8,7234907],[-120,1,2.2,7893356],[140,-1,3.4,9208437],[175,1,2.6,7234907],[120,-1,2.2,7893356],[-13,1,2.5,7234907],[14,-1,2.8,9208437]].map(([e,t,n,r])=>[e,w_(e).z+t*(18+n),n,r]),[430,-340,3.8,9208437],[445,-375,4.2,7234907],[395,-385,3.5,7893356],[410,-320,2.8,9208437],[465,-345,3.6,7234907],[455,-395,3.2,7893356],[385,-345,2.5,9208437],[425,-415,3.4,7234907],[-465,-300,3.6,7893356],[-425,-315,3.2,7234907],[-480,-260,4,9208437],[-410,-260,2.8,7893356],[-450,-340,3.5,7234907],[-385,395,3.2,9208437],[-345,415,2.8,7234907],[-330,370,2.6,7893356],[-25,435,3,9208437],[35,405,2.7,7234907],[0,445,3.2,7893356],[435,375,3.5,9208437],[470,330,3,7234907],[490,370,2.8,7893356]];for(let e=0;e<25;e++){let t=110+e*53%950,n=e*1.95,r=Math.round(Math.cos(n)*t),i=Math.round(Math.sin(n)*t),a=1.8+e%4*.55,o=e%3==0?9208437:e%2==0?7234907:7893356;g.push([r,i,a,o])}for(let[e,t,n,r]of g)f.push({geo:new Ua(n,0),color:r,pos:[e,n*.48,t]});let _=[[-9.2,-20],[-9.2,-4],[-9.2,14],[-9.2,30],[9.2,-20],[9.2,-4],[9.2,14],[9.2,30],[-26,-5.5],[26,-5.5],[-26,13.5],[26,13.5],[-9.2,395],[9.2,415],[408,-345],[-428,-265]];for(let e=-1050;e<=1050;e+=75)Math.abs(e)>40&&_.push([13.5,e]);for(let e=-1050;e<=1050;e+=75)Math.abs(e)>40&&_.push([e,-19.5]);_.push([-24,420],[24,420],[-24,450],[24,450],[390,-360],[450,-360],[420,-410],[-420,-280],[-460,-280],[-440,-320],[-340,380],[-380,380],[-360,420],[430,350],[470,350],[450,390]);for(let[e,t]of _)f.push({geo:new J(.28,7.4,.28),color:5722958,pos:[e,3.7,t]},{geo:new J(2.2,.16,.18),color:7893356,pos:[e,6.8,t]},{geo:new J(1.6,.14,.16),color:7893356,pos:[e,6.1,t]},{geo:new J(1.3,.12,.12),color:9741240,pos:[e+(e<0?.55:-.55),5.2,t]},{geo:new J(.42,.16,.28),color:16707722,pos:[e+(e<0?1.1:-1.1),5.12,t]});f.push({geo:new Y(2.4,2.2,3.4,10),color:165063,pos:[34,11.2,-10]},{geo:new Ba(2.6,1.4,10),color:14870768,pos:[34,13.6,-10]},{geo:new Y(.22,.28,10,6),color:6583435,pos:[32.6,5,-11.4]},{geo:new Y(.22,.28,10,6),color:6583435,pos:[35.4,5,-11.4]},{geo:new Y(.22,.28,10,6),color:6583435,pos:[32.6,5,-8.6]},{geo:new Y(.22,.28,10,6),color:6583435,pos:[35.4,5,-8.6]},{geo:new Ba(1.8,18,4),color:15680580,pos:[-34,9,22]},{geo:new J(2.6,.35,2.6),color:16317180,pos:[-34,6,22]},{geo:new J(1.8,.35,1.8),color:16317180,pos:[-34,11.5,22]},{geo:new Y(.12,.12,5,6),color:16436245,pos:[-34,19.5,22]},{geo:new Ba(1.8,18,4),color:15680580,pos:[445,9,-325]},{geo:new J(2.6,.35,2.6),color:16317180,pos:[445,6,-325]},{geo:new Y(.12,.12,5,6),color:16436245,pos:[445,19.5,-325]});let v=[[-10.2,19.5,Math.PI/2],[-12,405,0],[405,-330,-.4],[-425,-260,.3],[-340,375,-.2],[435,340,.2],[13.5,210,0],[13.5,-230,0]];for(let[e,t,n]of v)f.push({geo:new J(3.6,2.5,.18),color:4674921,pos:[e,1.25,t],rot:[0,n,0]},{geo:new J(3.8,.22,1.8),color:165063,pos:[e,2.55,t],rot:[0,n,0]},{geo:new J(2.8,.45,.6),color:11817737,pos:[e,.25,t],rot:[0,n,0]});for(let[e,t,n,r]of[[10.5,8.5,.15,16007006],[-15.5,8.5,-.15,165063],[-16,415,.2,16436245],[16,415,-.2,1483594],[412,-365,.3,16007006],[-355,395,-.15,165063],[445,355,.2,16436245]])f.push({geo:new J(2.8,.9,1.2),color:11817737,pos:[e,.45,t],rot:[0,n,0]},{geo:new J(3.2,.22,1.8),color:r,pos:[e,2.25,t],rot:[.15,n,0]});for(let[e,t]of[[-4.2,5.8],[4.5,14.5],[-12,-18],[18,12],[-22,425],[22,425],[0,455],[415,-370],[435,-350],[390,-365],[-435,-290],[-455,-270],[-420,-325],[-365,385],[-335,385],[-365,420],[445,355],[465,355],[445,390],[-175,-135],[175,-135],[-175,165],[175,165],[0,-215],[0,215],[255,0],[-255,0]])f.push({geo:new J(1.15,.68,.78),color:16436245,pos:[e,.34,t]},{geo:new J(1.2,.24,.82),color:14251782,pos:[e,.76,t]});for(let[e,t]of[[-6.2,2.8],[6.4,3],[-18,12],[22,-8],[-28,415],[28,415],[0,430],[410,-355],[440,-355],[425,-395],[-430,-285],[-465,-285],[-440,-325],[-355,375],[-375,375],[-360,415],[445,345],[465,345],[450,385],[-185,-135],[185,-135],[-185,165],[185,165]])f.push({geo:new Y(.42,.42,1.15,8),color:14427686,pos:[e,.58,t]},{geo:new Y(.42,.42,1.15,8),color:14427686,pos:[e+.8,.58,t+.2]},{geo:new Y(.42,.42,1.15,8),color:165063,pos:[e+.4,.58,t+.8]},{geo:new Y(.55,.55,.32,8),color:1976635,pos:[e-1,.16,t]},{geo:new Y(.55,.55,.32,8),color:1976635,pos:[e-1,.48,t]},{geo:new J(6.5,.95,.16),color:13935475,pos:[e,.48,t+1.8]});for(let[e,t,n,r]of[[-18,-18,.15,14427686],[18,-18,-.2,165063],[-10,28,0,15381256],[10,28,0,1483594],[-425,-245,.2,14427686],[-455,-245,-.15,165063],[-425,-312,-.1,15381256],[435,322,.15,1483594],[465,322,-.2,14427686],[16,392,.1,165063],[-26,392,-.15,15381256],[430,-325,.25,14427686],[460,-325,-.2,165063],[-380,360,.3,1483594],[-330,360,-.25,14427686]])f.push({geo:new J(2.6,2.6,5.8),color:r,pos:[e,1.3,t],rot:[0,n,0]});for(let[e,t,n]of[[-6,13,0],[6,13,0],[-14,-8,1.57],[14,-8,1.57],[0,388,0],[420,-328,0],[-440,-248,0],[-360,350,0],[450,320,0],[-25,410,1.57],[25,410,1.57],[435,-360,0],[-435,-280,0]])f.push({geo:new J(2.8,1.1,.7),color:12757112,pos:[e,.55,t],rot:[0,n,0]});for(let e of gp){let t=e.width*.36,n=Math.cos(e.yaw),r=Math.sin(e.yaw),i=1.15+e.height*.5;f.push({geo:new Y(.22,.28,1.4,6),color:1976635,pos:[e.x-n*t,.7,e.z+r*t]},{geo:new Y(.22,.28,1.4,6),color:1976635,pos:[e.x+n*t,.7,e.z-r*t]},{geo:new J(e.width+.4,e.height+.4,.32),color:16766464,pos:[e.x,i,e.z],rot:[0,e.yaw,0]})}t&&(t.wrapS=M,t.wrapT=M);let y=l_(new io({vertexColors:!0,map:t??void 0})),b=Zg(),x=Tm(f,b.map.chunkSize,e=>[e.pos?.[0]??0,e.pos?.[2]??0],e=>(e.geo.computeBoundingSphere(),(e.geo.boundingSphere?.radius??0)>90));if(x.globals.length>0){let e=wp(`bermuda_static_globals`,x.globals,y);this.scene.add(e),this.chunkGrid.addGlobal(e)}let S=b.map.chunkSize;for(let[e,t]of x.buckets.entries()){let n=wp(`bermuda_static_${e}`,t.parts,y);this.scene.add(n),this.chunkGrid.add(n,(t.cx+.5)*S,(t.cz+.5)*S)}this.staticWorldMat=y;let C=new Ei({color:16777215,vertexColors:!0,transparent:!0,opacity:.38,depthWrite:!1}),w=m.flatMap(([e,t])=>[{geo:new Y(.32,.65,65,8),color:16707722,pos:[e,33,t]},{geo:new Y(.85,1.35,14,8),color:3718648,pos:[e,7,t]}]);this.scene.add(wp(`airdrop_sky_beams`,w,C));let T=new Ei({color:16777215,map:this.buildSponsorBillboardTexture()??void 0,side:2});for(let e of gp){let t=new q(new J(e.width,e.height,.38),T);t.name=`sponsor_billboard_${e.id}`,t.position.set(e.x,1.15+e.height*.5,e.z),t.rotation.y=e.yaw,this.scene.add(t)}}triggerMuzzleFlash(){this.muzzleFlashTimer=.075,this.playerRecoilKick=1}spawnBulletTracer(e,t,n=16771584){let r=new V(e.x,e.y,e.z),i=new V(t.x,t.y,t.z),a=r.distanceTo(i);if(a<.2)return;let o=new Y(.022,.022,a,6);o.rotateX(Math.PI/2);let s=new q(o,new Ei({color:n,transparent:!0,opacity:.9}));s.position.copy(r).lerp(i,.5),s.lookAt(i),this.scene.add(s),this.tracers.push({mesh:s,ttl:.09})}buildLootVisual(e,t){let n=new lr,r={weapon:58879,scope:11032055,medkit:58998,gloo:3718648,armor:16766464,ammo:16347926}[e]??58879;if(e===`weapon`){let e=Ep(t||`m4a1`);e.scale.set(1.25,1.25,1.25),e.position.y=.44,n.add(e)}else if(e===`scope`){let e=t===`scope_4x`?11032055:58879;n.add(wp(`loot_${t}`,[{geo:new Y(.66,.7,.05,12),color:e,pos:[0,.03,0]},{geo:new Y(.14,.14,.52,10),color:1976635,pos:[0,.48,0],rot:[Math.PI/2,0,0]},{geo:new Y(.18,.16,.14,10),color:e,pos:[0,.48,-.26],rot:[Math.PI/2,0,0]},{geo:new J(.12,.18,.24),color:16766464,pos:[0,.34,0]}]))}else e===`medkit`?n.add(wp(`loot_medkit`,[{geo:new Y(.64,.68,.05,12),color:r,pos:[0,.03,0]},{geo:new J(.48,.34,.36),color:16317180,pos:[0,.42,0]},{geo:new J(.26,.08,.38),color:58998,pos:[0,.42,0]},{geo:new J(.08,.24,.38),color:58998,pos:[0,.42,0]}])):e===`mushroom`?n.add(wp(`loot_mushroom`,[{geo:new Y(.66,.7,.05,12),color:16436245,pos:[0,.03,0]},{geo:new Y(.12,.16,.42,8),color:16708551,pos:[0,.24,0]},{geo:new Ba(.44,.34,10),color:16347926,pos:[0,.52,0]},{geo:new J(.12,.12,.12),color:16707722,pos:[.16,.54,.12]},{geo:new J(.12,.12,.12),color:16707722,pos:[-.16,.52,-.1]}])):e===`gloo`?n.add(wp(`loot_gloo`,[{geo:new Y(.64,.68,.05,12),color:r,pos:[0,.03,0]},{geo:new Y(.18,.18,.44,10),color:58879,pos:[0,.42,0]},{geo:new Y(.21,.21,.08,10),color:14742270,pos:[0,.62,0]}])):n.add(wp(`loot_armor`,[{geo:new Y(.64,.68,.05,12),color:r,pos:[0,.03,0]},{geo:new J(.46,.46,.24),color:16766464,pos:[0,.44,0]}]));return n}visibleTriangleBreakdown(){let e={};return this.scene.traverseVisible(t=>{if(!(t instanceof q))return;let n=t.geometry,r=(n.index?n.index.count:n.getAttribute(`position`).count)/3,i=(t.name||`unnamed`).replace(/_-?\d+,-?\d+$/,``);e[i]=(e[i]??0)+r}),e}async loadVegetation(e=`./`){let t=Zg(),n=Qh();await Sg(n,e);let r=$h(t.placements,n,this.chunkGrid,{material:this.staticWorldMat,name:`bermuda_scatter`,detailKinds:H_,detailGrid:this.detailGrid,heightAt:ph});for(let e of r)e.receiveShadow=!0,e.castShadow=!e.name.startsWith(`bermuda_scatter_detail`),this.scene.add(e);let i=[];for(let e of t.placements){let n=t.library.get(e.kind).shadowRadius;n&&i.push({x:e.x,z:e.z,rx:n*e.scale,rz:n*e.scale})}for(let e of bp)i.push({x:e.x,z:e.z,rx:e.width*.5+1.8,rz:e.depth*.5+1.8});for(let e of a_())i.push({x:e.x,z:e.z,rx:e.sx/2+.9,rz:e.sz/2+.9});for(let e of ng(i,this.chunkGrid,{material:this.getBlobMaterial(),heightAt:ph,name:`bermuda_blobs`}))this.scene.add(e);this.chunkGrid.update(0,14,240,!0)}getBlobMaterial(){if(this.blobMat)return this.blobMat;let e=B_(64,64,(e,t,n)=>{let r=e.createRadialGradient(t/2,n/2,2,t/2,n/2,t/2);r.addColorStop(0,`rgba(20,28,12,0.62)`),r.addColorStop(.55,`rgba(20,28,12,0.32)`),r.addColorStop(1,`rgba(20,28,12,0)`),e.fillStyle=r,e.fillRect(0,0,t,n)},1,1);return this.blobMat=new Ei({map:e??void 0,color:e?16777215:1845776,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.blobMat}placeBlob(e,t,n,r){let i=this.dynamicBlobs[this.dynamicBlobsUsed];i||(i=new q(new Wa(1,1),this.getBlobMaterial()),i.rotation.x=-Math.PI/2,i.renderOrder=1,i.frustumCulled=!1,this.scene.add(i),this.dynamicBlobs.push(i)),this.dynamicBlobsUsed++,i.visible=!0,i.position.set(e,ph(e,n)+.08,n),i.scale.set(r*2,r*2,1)}endBlobs(){for(let e=this.dynamicBlobsUsed;e<this.dynamicBlobs.length;e++)this.dynamicBlobs[e].visible=!1;this.dynamicBlobsUsed=0}buildWindmillBlades(){let e=Bg().windmillHub,t=new lr,n=new io({color:16317180});t.add(new q(new J(.45,10,.12),n)),t.add(new q(new J(10,.45,.12),n)),t.position.set(e.x,e.y,e.z),this.windmillBlades=t,this.scene.add(t)}buildHouses(){let e=l_(new io({vertexColors:!0})),t=new Map,n=(e,n,r)=>{let i=this.chunkGrid.keyOf(e,n),a=t.get(i);a?a.push(...r):t.set(i,[...r])};for(let e of Eg())n(e.building.x,e.building.z,e.layout.boxes);for(let e of[...Bg().boxes,...a_()])n(e.x,e.z,[e]);let r=this.chunkGrid.chunkSize;for(let[n,i]of t){let t=new q(og(i),e);t.name=`bermuda_houses_${n}`,t.matrixAutoUpdate=!1,t.castShadow=!0,t.receiveShadow=!0;let[a,o]=n.split(`,`).map(Number);this.scene.add(t),this.chunkGrid.add(t,(a+.5)*r,(o+.5)*r)}}setPlayerLoadout(e,t){this.playerLoadout={...e},this.playerWeaponSkins={...t}}setGraphicsProfile(e){this.profile=e;let t=this.scene.fog;t.near=e.fogNear,t.far=e.fogFar,this.sun.shadow.mapSize.x!==e.shadowMapSize&&(this.sun.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null)}setShadowsEnabled(e){this.sun.castShadow=e,this.scene.traverse(e=>{if(e instanceof q){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.needsUpdate=!0}})}sync(e,t=1/60){let n=e.player.dropPhase===`grounded`?this.profile.viewDist:this.profile.viewDistAir;this.chunkGrid.update(e.player.position.x,e.player.position.z,n),this.detailGrid.update(e.player.position.x,e.player.position.z,e.player.dropPhase===`grounded`?this.profile.detailDist:60),g_(t),this.windmillBlades&&(this.windmillBlades.rotation.z+=t*.7),this.dynamicBlobsUsed=0;let r=Math.sin(e.player.yaw),i=Math.cos(e.player.yaw);this.camFill.position.set(e.player.position.x+r*60,e.player.position.y+50,e.player.position.z+i*60),this.camFill.target.position.set(e.player.position.x,e.player.position.y+1,e.player.position.z),this.sun.target.position.set(e.player.position.x,0,e.player.position.z),this.sun.position.set(e.player.position.x+220,310,e.player.position.z+160);for(let t=0;t<e.vehicles.length;t++){let n=e.vehicles[t],r=this.vehicleMeshes.get(n.id);r||(r=m_(n.type,t)??z_(n.type,t),this.scene.add(r),U_(r),this.vehicleMeshes.set(n.id,r));let i=Math.hypot(n.x-e.player.position.x,n.z-e.player.position.z);r.visible=i<=220,r.visible&&(r.position.set(n.x,n.y,n.z),r.rotation.y=n.yaw,r.rotation.z=n.steer*Math.min(1,Math.abs(n.speed)/18)*.06,this.placeBlob(n.x,n.y,n.z,2.5))}this.airplaneMesh.visible=e.status===`playing`&&e.player.dropPhase!==`grounded`,e.player.dropPhase===`airplane`?this.airplaneMesh.position.set(e.player.airplanePos.x,e.player.airplanePos.y,e.player.airplanePos.z):this.airplaneMesh.position.set(e.player.position.x-Math.sin(e.player.airplaneYaw)*28,e.player.position.y+4.5,e.player.position.z-Math.cos(e.player.airplaneYaw)*28),this.airplaneMesh.rotation.y=e.player.airplaneYaw,this.playerRig.root.position.set(e.player.position.x,e.player.position.y,e.player.position.z),this.playerRig.root.rotation.y=e.player.yaw,this.playerRig.root.visible=e.player.hp>0&&!e.player.drivingVehicleId&&(e.status===`lobby`||e.player.dropPhase!==`airplane`),this.playerRig.root.visible&&(e.status===`lobby`||e.player.isGrounded)&&this.placeBlob(e.player.position.x,e.player.position.y,e.player.position.z,.95);let a=Math.hypot(e.player.velocity.x,e.player.velocity.z),o=-Math.sin(e.player.yaw),s=-Math.cos(e.player.yaw),c=Math.cos(e.player.yaw),l=-Math.sin(e.player.yaw),u=Math.atan2(e.player.velocity.x*c+e.player.velocity.z*l,e.player.velocity.x*o+e.player.velocity.z*s),d=e.player.weapons[e.player.activeSlot]||`m4a1`,f=+(e.player.activeSlot===0),p=e.player.weapons[f]||`mp40`;Mp(this.playerRig,{speed:a,isSprinting:e.player.isSprinting,isCrouching:e.player.isCrouching,isGrounded:e.player.isGrounded,isAds:e.player.isAds,pitch:e.player.pitch,activeWeaponId:d,secondaryWeaponId:p,hasArmor:e.player.shield>0,recoilKick:this.playerRecoilKick,outfitId:e.player.outfitId,activeEmote:e.player.activeEmote,dropPhase:e.status===`lobby`?`grounded`:e.player.dropPhase,dt:t});let m=D(this.playerLoadout,this.playerWeaponSkins);if(this.playerSkin?.key!==m&&(this.playerSkin=Yp(this.playerRig,this.playerLoadout,this.playerWeaponSkins,this.playerSkin)),this.playerSkin&&nm(this.playerRig,this.playerSkin,{speed:a,isSprinting:e.player.isSprinting,isCrouching:e.player.isCrouching,isGrounded:e.player.isGrounded,isAds:e.player.isAds,pitch:e.player.pitch,activeWeaponId:d,secondaryWeaponId:p,hasArmor:e.player.shield>0,recoilKick:this.playerRecoilKick,outfitId:e.player.outfitId,activeEmote:e.player.activeEmote,dropPhase:e.status===`lobby`?`grounded`:e.player.dropPhase,moveAngle:u,isProne:e.player.isProne,dt:t},this.muzzleFlashTimer>0),this.playerRecoilKick=0,this.muzzleFlashTimer>0){this.muzzleFlashTimer=Math.max(0,this.muzzleFlashTimer-t),this.muzzleFlash.intensity=3.2,this.muzzleFlashMesh.visible=!0,this.muzzleFlashMesh.rotation.z+=.8;let e=new V;this.playerRig.muzzlePoint.getWorldPosition(e),this.muzzleFlash.position.copy(e)}else this.muzzleFlash.intensity=0,this.muzzleFlashMesh.visible=!1;for(let t of e.recentEvents)if(t.attackerId===`player`){let e=new V;this.playerRig.muzzlePoint.getWorldPosition(e),this.spawnBulletTracer(e,t.hitPoint,t.isHeadshot?16717636:16771584)}else{let e=this.botRigs.get(t.attackerId);if(e){let n=new V;e.rig.muzzlePoint.getWorldPosition(n),this.spawnBulletTracer(n,t.hitPoint,16748800)}}for(let e=this.tracers.length-1;e>=0;e--)this.tracers[e].ttl-=t,this.tracers[e].ttl<=0&&(this.scene.remove(this.tracers[e].mesh),this.tracers[e].mesh.geometry.dispose(),this.tracers.splice(e,1));if(e.status===`lobby`){let t=Math.sin(performance.now()*8e-4)*.18;this.camera.position.set(e.player.position.x+.35+t,e.player.position.y+1.38,e.player.position.z-3.35),this.camera.lookAt(e.player.position.x+.55,e.player.position.y+1.55,e.player.position.z+4.5),this.camera.fov!==50&&(this.camera.fov=50,this.camera.updateProjectionMatrix())}else{let t=Dh(e.player),n={x:e.player.position.x,y:e.player.position.y+1.5,z:e.player.position.z},r=e.player.dropPhase===`grounded`?Uh(n,t.position,e.buildings):t.position;this.camera.position.set(r.x,r.y,r.z),this.camera.lookAt(t.lookTarget.x,t.lookTarget.y,t.lookTarget.z),Math.abs(this.camera.fov-t.fov)>.1&&(this.camera.fov=t.fov,this.camera.updateProjectionMatrix())}this.camera.updateMatrixWorld(),this.cullMatrix.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.cullFrustum.setFromProjectionMatrix(this.cullMatrix);for(let n of e.bots){let r=this.botRigs.get(n.id);if(!r){let e=jp(n.accentColor,n.outfitId);this.scene.add(e.root),U_(e.root);let t=E(this.botRigs.size);r={rig:e,prevX:n.position.x,prevZ:n.position.z,skin:null,look:t},this.botRigs.set(n.id,r)}let i=Math.hypot(n.position.x-e.player.position.x,n.position.z-e.player.position.z);if(this.cullSphere.center.set(n.position.x,n.position.y+1,n.position.z),r.rig.root.visible=n.hp>0&&i<this.profile.botDrawDist&&this.cullFrustum.intersectsSphere(this.cullSphere),n.hp>0&&r.rig.root.visible){let e=n.position.x-r.prevX,i=n.position.z-r.prevZ,a=t>1e-4?Math.min(13,Math.hypot(e,i)/t):0;r.prevX=n.position.x,r.prevZ=n.position.z,r.rig.root.position.set(n.position.x,n.position.y,n.position.z),r.rig.root.rotation.y=n.yaw,this.placeBlob(n.position.x,n.position.y,n.position.z,.95),r.skin||(r.skin=Yp(r.rig,r.look.loadout,r.look.skins));let o={speed:a,isSprinting:n.state===`ROTATE_ZONE`,isCrouching:n.state===`COVER_HEAL`,isGrounded:!0,isAds:n.state===`ENGAGE`,pitch:0,activeWeaponId:n.weaponId||`m4a1`,secondaryWeaponId:`mp40`,hasArmor:n.shield>0,recoilKick:n.fireCooldown>.35?.5:0,outfitId:n.outfitId,activeEmote:null,dropPhase:`grounded`,dt:t};r.skin&&nm(r.rig,r.skin,o,n.state===`ENGAGE`&&n.fireCooldown>.35),Mp(r.rig,{speed:a>.1?a:n.state===`ROTATE_ZONE`||n.state===`LOOT`?7.5:2,isSprinting:n.state===`ROTATE_ZONE`,isCrouching:n.state===`COVER_HEAL`,isGrounded:!0,isAds:n.state===`ENGAGE`,pitch:0,activeWeaponId:n.weaponId||`m4a1`,secondaryWeaponId:`mp40`,hasArmor:n.shield>0,recoilKick:n.fireCooldown>.35?.5:0,outfitId:n.outfitId,activeEmote:null,dropPhase:`grounded`,dt:t})}}this.endBlobs();let h=new Set(e.glooWalls.map(e=>e.id));for(let[e,t]of this.glooWallMeshes.entries())h.has(e)||(this.scene.remove(t),this.glooWallMeshes.delete(e));for(let t of e.glooWalls){let e=this.glooWallMeshes.get(t.id);e||(e=this.assets.cloneModel(`sm_gloo_wall`),this.scene.add(e),this.glooWallMeshes.set(t.id,e)),e.position.set(t.position.x,t.position.y,t.position.z),e.rotation.y=t.yaw}let g=new Set(e.lootItems.filter(e=>!e.collected).map(e=>e.id));for(let[e,t]of this.lootMeshes.entries())g.has(e)||(t.visible=!1);for(let t of e.lootItems){if(t.collected)continue;let n=this.lootMeshes.get(t.id);n||(n=this.buildLootVisual(t.type,t.subType),this.scene.add(n),this.lootMeshes.set(t.id,n));let r=Math.hypot(t.position.x-e.player.position.x,t.position.z-e.player.position.z);n.visible=r<180,n.visible&&(n.position.set(t.position.x,Math.sin(e.matchTime*3.2+t.position.x)*.05,t.position.z),n.rotation.y=e.matchTime*1.4+t.position.z)}this.safeZoneRing.scale.set(Math.max(1,e.safeZone.currentRadius),1,Math.max(1,e.safeZone.currentRadius)),this.safeZoneRing.position.set(e.safeZone.centerX,27,e.safeZone.centerZ)}},G_=1;function K_(e,t){let n=$.glooWallWidth*.5,r=$.glooWallDepth*.5,i=Math.abs(Math.cos(t)),a=Math.abs(Math.sin(t)),o=Math.max(.55,n*i+r*a),s=Math.max(.55,n*a+r*i);return{minX:e.x-o,maxX:e.x+o,minZ:e.z-s,maxZ:e.z+s,maxY:$.glooWallHeight}}function q_(e,t,n,r,i){if(r<=0)return{deployed:!1,wall:null,nextCount:r};let a=-Math.sin(n),o=-Math.cos(n),s={x:Math.max(-$.islandHalfSize+2,Math.min($.islandHalfSize-2,t.x+a*$.glooWallSpawnDist)),y:0,z:Math.max(-$.islandHalfSize+2,Math.min($.islandHalfSize-2,t.z+o*$.glooWallSpawnDist))},c={id:`gloo_${G_++}`,ownerId:e,position:s,yaw:n,hp:$.glooWallMaxHp,maxHp:$.glooWallMaxHp,remainingTime:$.glooWallDuration,aabb:K_(s,n)};return i.push(c),{deployed:!0,wall:c,nextCount:r-1}}function J_(e,t){if(e.hp<=0||e.glooWallCount<=0)return null;let n=q_(e.id,e.position,e.yaw,e.glooWallCount,t);return n.deployed&&(e.glooWallCount=n.nextCount),n.wall}function Y_(e,t){for(let n=e.length-1;n>=0;n--){let r=e[n];r.remainingTime-=t,(r.hp<=0||r.remainingTime<=0)&&e.splice(n,1)}}function X_(e){return e.hp<=0||e.medkitCount<=0||e.hp>=e.maxHp?!1:(--e.medkitCount,e.hp=Math.min(e.maxHp,e.hp+$.medkitHealAmount),e.ep=Math.min(e.maxEp??200,(e.ep??0)+$.medkitEpAmount),!0)}var Z_=1;function Q_(){return[...xp,...Ag()].map(e=>({id:e.id,zone:e.zone,type:e.type,subType:e.subType,amount:e.amount,position:{x:e.x,y:0,z:e.z},collected:!1}))}function $_(e,t,n){let r=[{id:`death_loot_${Z_++}`,zone:`Death Drop`,type:`gloo`,subType:`gloo_wall`,amount:1,position:{x:e.x+.5,y:0,z:e.z},collected:!1,isDeathDrop:!0},{id:`death_loot_${Z_++}`,zone:`Death Drop`,type:`medkit`,subType:`medkit`,amount:1,position:{x:e.x-.5,y:0,z:e.z},collected:!1,isDeathDrop:!0},{id:`death_loot_${Z_++}`,zone:`Death Drop`,type:`scope`,subType:Z_%2==0?`scope_4x`:`scope_2x`,amount:1,position:{x:e.x,y:0,z:e.z-.5},collected:!1,isDeathDrop:!0}];return pp[t]&&r.push({id:`death_loot_${Z_++}`,zone:`Death Drop`,type:`weapon`,subType:t,amount:pp[t].magSize,position:{x:e.x,y:0,z:e.z+.5},collected:!1,isDeathDrop:!0}),n.push(...r),r}function ev(e,t,n=2.8){if(e.hp<=0||e.dropPhase!==`grounded`)return[];let r=[];for(let i of t)if(!i.collected&&!(Math.hypot(i.position.x-e.position.x,i.position.z-e.position.z)>n)){if(i.type===`gloo`)e.glooWallCount<6&&(e.glooWallCount=Math.min(6,e.glooWallCount+i.amount),i.collected=!0,r.push(i));else if(i.type===`medkit`)e.medkitCount<6?(e.medkitCount=Math.min(6,e.medkitCount+i.amount),e.ep=Math.min(e.maxEp??200,(e.ep??0)+25),i.collected=!0,r.push(i)):e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+$.medkitHealAmount),i.collected=!0,r.push(i));else if(i.type===`mushroom`)(e.ep<(e.maxEp??200)||e.hp<e.maxHp)&&(e.ep=Math.min(e.maxEp??200,(e.ep??0)+$.mushroomEpAmount),e.hp=Math.min(e.maxHp,e.hp+$.mushroomHpAmount),i.collected=!0,r.push(i));else if(i.type===`armor`)e.shield<$.maxShield&&(e.shield=Math.min($.maxShield,Math.max(e.shield,i.amount)),i.collected=!0,r.push(i));else if(i.type===`scope`)i.subType===`scope_2x`&&!e.hasScope2x?(e.hasScope2x=!0,e.activeScope===`none`&&(e.activeScope=`2x`),i.collected=!0,r.push(i)):i.subType===`scope_4x`&&!e.hasScope4x&&(e.hasScope4x=!0,e.activeScope=`4x`,i.collected=!0,r.push(i));else if(i.type===`weapon`){let t=pp[i.subType];if(t){if(e.weapons.indexOf(t.id)>=0)e.reserveAmmo[t.category]=(e.reserveAmmo[t.category]??0)+t.magSize*2;else{let n=+(e.activeSlot===1);e.weapons[n]=t.id,e.ammoInMag[n]=t.magSize,e.reserveAmmo[t.category]=(e.reserveAmmo[t.category]??0)+t.magSize*2}i.collected=!0,r.push(i)}}else i.type===`ammo`&&(e.reserveAmmo.AR=(e.reserveAmmo.AR??0)+i.amount,e.reserveAmmo.SMG=(e.reserveAmmo.SMG??0)+i.amount,e.reserveAmmo.SG=(e.reserveAmmo.SG??0)+Math.ceil(i.amount/3),i.collected=!0,r.push(i))}return r}function tv(){let e=mp[0];return{centerX:0,centerZ:0,currentRadius:e.startRadius,targetRadius:e.targetRadius,startRadius:e.startRadius,phaseIndex:0,phaseNumber:1,phaseTimer:e.waitDuration,isShrinking:!1,damagePerSecond:e.damagePerSecond}}function nv(e,t){let n=mp[Math.min(e.phaseIndex,mp.length-1)];if(e.damagePerSecond=n.damagePerSecond,!e.isShrinking)e.phaseTimer-=t,e.phaseTimer<=0&&(e.isShrinking=!0,e.phaseTimer=n.shrinkDuration,e.startRadius=e.currentRadius,e.targetRadius=n.targetRadius);else{e.phaseTimer-=t;let r=Math.max(0,Math.min(1,1-e.phaseTimer/Math.max(.01,n.shrinkDuration)));if(e.currentRadius=e.startRadius+(e.targetRadius-e.startRadius)*r,e.phaseTimer<=0){if(e.currentRadius=e.targetRadius,e.phaseIndex<mp.length-1){e.phaseIndex+=1;let t=mp[e.phaseIndex];e.phaseNumber=t.phase,e.isShrinking=!1,e.phaseTimer=t.waitDuration,e.startRadius=t.startRadius,e.targetRadius=t.targetRadius,e.damagePerSecond=t.damagePerSecond}else e.isShrinking=!1,e.phaseTimer=999}}}function rv(e,t){return Math.hypot(e.x-t.centerX,e.z-t.centerZ)>t.currentRadius}function iv(e,t,n){if(e.hp<=0||!rv(e.position,t))return{outside:!1,damageTaken:0,killed:!1};let r=t.damagePerSecond*n;return e.hp=Math.max(0,e.hp-r),{outside:!0,damageTaken:r,killed:e.hp<=0}}function av(e=Math.random,t=hp.length){return Array.from({length:t},(t,n)=>{let r=hp[n%hp.length],i=n>=hp.length,a=i?qf[(n-hp.length)%qf.length]:null,o=e()*Math.PI*2,s=14+e()*22,c=a?a.cx+10:r.spawnX,l=a?a.cz+10:r.spawnZ,u=Math.round(c+Math.cos(o)*s),d=Math.round(l+Math.sin(o)*s),f=r.outfitId??dp[n%dp.length];return{id:i?`bot_x${n+1}`:r.id,name:i?`${r.name.replace(/Bot$/,``)}${n+1}`:r.name,persona:r.persona,accentColor:r.accentColor,outfitId:f,position:{x:u,y:0,z:d},yaw:n*Math.PI/3,hp:$.maxHp,maxHp:$.maxHp,shield:75,state:`LOOT`,weaponId:r.preferredWeapon,fireCooldown:.8+n*.15,glooWallCount:1,medkitCount:1,healCooldown:0,targetId:null,strafeDir:n%2==0?1:-1,strafeTimer:1.5,stuckTimer:0,aggression:r.aggression,accuracy:r.accuracy,kills:0}})}function ov(e,t,n,r){let i=t.x-e.x,a=t.z-e.z,o=Math.hypot(i,a);if(o<.5)return!0;let s={x:e.x,y:1.35,z:e.z},c={x:i/o,y:0,z:a/o};for(let t of Ah(n,e.x,e.z,c.x,c.z,o)){let e=Lh(s,c,t,o);if(e!==null&&e<o)return!1}for(let e of r){if(e.hp<=0)continue;let t=Lh(s,c,e.aabb,o);if(t!==null&&t<o)return!1}return!0}function sv(e,t,n,r,i,a,o,s=Math.random){let c=[],l=Array.isArray(t)?t:[t],u=r.map(e=>e.aabb);for(let t of e){if(t.hp<=0){t.state=`DEAD`;continue}let d=[...kh(a,t.position.x,t.position.z,10),...u];t.fireCooldown>0&&(t.fireCooldown=Math.max(0,t.fireCooldown-o)),t.healCooldown>0&&(t.healCooldown=Math.max(0,t.healCooldown-o));let f=Math.hypot(t.position.x-n.centerX,t.position.z-n.centerZ)>n.currentRadius*.92;if(t.hp<85&&(t.glooWallCount>0||t.medkitCount>0&&t.healCooldown<=0)){if(t.state=`COVER_HEAL`,t.glooWallCount>0){let e=q_(t.id,t.position,t.yaw,t.glooWallCount,r);e.deployed&&(t.glooWallCount=e.nextCount)}t.medkitCount>0&&t.healCooldown<=0&&(--t.medkitCount,t.hp=Math.min(t.maxHp,t.hp+$.medkitHealAmount),t.healCooldown=4);continue}if(f){t.state=`ROTATE_ZONE`,t.targetId=null,t.yaw=Math.atan2(-(n.centerX-t.position.x),-(n.centerZ-t.position.z)),cv(t,n.centerX,n.centerZ,$.sprintSpeed*.95,d,o);continue}let p=null,m=38,h=[];for(let e of l)e.hp>0&&e.dropPhase===`grounded`&&h.push(e);for(let n of e)n.id!==t.id&&n.hp>0&&h.push(n);for(let e of h){let n=Math.hypot(e.position.x-t.position.x,e.position.z-t.position.z);n<m&&ov(t.position,e.position,a,r)&&(m=n,p=e)}if(p){t.state=`ENGAGE`,t.targetId=p.id;let n=p.position.x-t.position.x,r=p.position.z-t.position.z;t.yaw=Math.atan2(-n,-r),t.strafeDir!==0&&(t.strafeTimer-=o,t.strafeTimer<=0&&(t.strafeDir=-t.strafeDir,t.strafeTimer=1.4+s()*1.1));let a=pp[t.weaponId]||pp.m4a1,u=a.category===`SG`?11:22;if(m>u)cv(t,p.position.x,p.position.z,$.walkSpeed*.72,d,o);else{let e=Math.cos(t.yaw)*t.strafeDir,n=-Math.sin(t.yaw)*t.strafeDir;cv(t,t.position.x+e*4,t.position.z+n*4,$.walkSpeed*.52,d,o)}if(m<=a.range*1.05&&t.fireCooldown<=0){t.fireCooldown=Math.max(.85,1/a.fireRate*5.2);let n=l.find(e=>e.id===p.id),r=(n?n.isProne?.55:n.isCrouching?.8:1:1)*Math.min(.28,Math.max(.12,t.accuracy*.45*(1-m/(a.range*1.45))));if(s()<=r){let r=s()<.05,o=n?{...a,baseDamage:Math.max(5,Math.round(a.baseDamage*.32)),pellets:1}:a,l=zh(t.id,t.name,p,o,r,{x:p.position.x,y:p.position.y+(r?1.55:1.05),z:p.position.z});if(l.killed){t.kills+=1;let n=e.find(e=>e.id===p.id);n&&(n.state=`DEAD`,$_(n.position,n.weaponId,i))}c.push(l)}}continue}t.state=`LOOT`,t.targetId=null,t.fireCooldown=Math.max(t.fireCooldown,.85);let g=null,_=1/0;for(let e of l){if(e.hp<=0||e.dropPhase!==`grounded`)continue;let n=Math.hypot(e.position.x-t.position.x,e.position.z-t.position.z);n<_&&(_=n,g=e)}let v=g?g.position.x:n.centerX,y=g?g.position.z:n.centerZ,b=65;for(let e of i){if(e.collected)continue;let n=Math.hypot(e.position.x-t.position.x,e.position.z-t.position.z);n<b&&(b=n,v=e.position.x,y=e.position.z,n<2.2&&(e.collected=!0,e.type===`weapon`&&pp[e.subType]?t.weaponId=e.subType:e.type===`gloo`?t.glooWallCount=Math.min(3,t.glooWallCount+1):e.type===`medkit`?t.medkitCount=Math.min(3,t.medkitCount+1):e.type===`armor`&&(t.shield=Math.min($.maxShield,e.amount))))}t.yaw=Math.atan2(-(v-t.position.x),-(y-t.position.z)),cv(t,v,y,$.sprintSpeed*.85,d,o)}return c}function cv(e,t,n,r,i,a){let o=t-e.position.x,s=n-e.position.z,c=Math.hypot(o,s);if(c<.25)return;let l=o/c*r,u=s/c*r,d=.45,f=!1,p=e.position.x+l*a;wh(p,e.position.z,d,i,-1/0,e.position.y)||(e.position.x=p,f=!0);let m=e.position.z+u*a;if(wh(e.position.x,m,d,i,-1/0,e.position.y)||(e.position.z=m,f=!0),f)e.stuckTimer=0;else{e.stuckTimer+=a;let t=-s/c,n=o/c,l=e.strafeDir||1,u=e.position.x+t*r*l*a,f=e.position.z+n*r*l*a;wh(u,f,d,i,-1/0,e.position.y)||(e.position.x=u,e.position.z=f)}let h=$.islandHalfSize-1;e.position.x=Math.max(-h,Math.min(h,e.position.x)),e.position.z=Math.max(-h,Math.min(h,e.position.z)),e.position.y=ph(e.position.x,e.position.z)}var lv=1,uv=1,dv=null;function fv(){if(dv)return dv;let e=new Wm(16);for(let t of Dg())e.add(t);for(let t of bp)t.isTower&&e.add({minX:t.x-t.width*.5,maxX:t.x+t.width*.5,minZ:t.z-t.depth*.5,maxZ:t.z+t.depth*.5,maxY:t.height});for(let t of Jf())e.add(t);for(let t of[...Bg().boxes,...a_()])t.solid&&e.add(Og(t));return dv=e,e}function pv(){return Zg().map.vehicleSpawns.map((e,t)=>E_(`veh_${t+1}`,e.type,e.x,e.z,e.yaw))}var mv={moveX:0,moveZ:0,sprint:!1,jumpPressed:!1,crouchToggled:!1,proneToggled:!1,fireHeld:!1,fireJustPressed:!1,adsHeld:!1,reloadPressed:!1,glooPressed:!1,medkitPressed:!1,slot1Pressed:!1,slot2Pressed:!1,slot3Pressed:!1,cycleScopePressed:!1,emote1Pressed:!1,emote2Pressed:!1,emote3Pressed:!1,outfitCyclePressed:!1,pausePressed:!1,lookDeltaYaw:0,lookDeltaPitch:0};function hv(e){return e.players.find(t=>t.id===e.localPlayerId)??e.players[0]??e.player}function gv(e,t=e.player){if(t.dropPhase!==`grounded`||t.hp<=0)return!1;let n=Zg(),r=t.drivingVehicleId?e.vehicles.find(e=>e.id===t.drivingVehicleId):void 0,i=r?void 0:M_(e.vehicles,t.position.x,t.position.z,4.5),a=r??i,o=a?a.x:t.position.x,s=a?a.z:t.position.z,c={boxes:[...e.buildings.queryCircle(o,s,14),...e.glooWalls.map(e=>e.aabb)],circles:n.colliders,halfSize:$.islandHalfSize};if(t.drivingVehicleId){let e=r;if(t.drivingVehicleId=null,t.drivingVehicleSpeed=0,e){e.driverId=null;let n=N_(e,T_[e.type]??T_.pickup,c,.5);t.position.x=n.x,t.position.y=ph(n.x,n.z),t.position.z=n.z,t.velocity.x=0,t.velocity.y=0,t.velocity.z=0,t.isGrounded=!0}return!0}return i?(i.driverId=t.id,t.drivingVehicleId=i.id,t.drivingVehicleYaw=i.yaw,t.drivingVehicleSpeed=i.speed,t.yaw=i.yaw,t.position.x=i.x,t.position.y=i.y+.35,t.position.z=i.z,t.velocity.x=0,t.velocity.y=0,t.velocity.z=0,t.isAds=!1,t.isCrouching=!1,t.activeEmote=null,t.emoteTimer=0,!0):!1}function _v(){let e=mh(),t=av();return{status:`lobby`,matchTime:0,aliveCount:1+t.length,playerRank:1,playerOutsideZone:!1,player:e,players:[e],localPlayerId:e.id,placements:{},bots:t,vehicles:pv(),nearbyVehicleId:null,safeZone:tv(),glooWalls:[],lootItems:Q_(),buildings:fv(),aimState:{targetLocked:!1,targetId:null,isHeadshotAim:!1,hitPoint:null,distance:0},killFeed:[],damagePopups:[],recentEvents:[]}}function vv(e,t){e.status=`playing`,e.matchTime=0,e.bots=av(Math.random,t),e.vehicles=pv(),e.nearbyVehicleId=null,e.safeZone=tv(),e.glooWalls=[],e.lootItems=Q_(),e.buildings=fv(),e.placements={},e.playerRank=1,e.playerOutsideZone=!1,e.killFeed=[],e.damagePopups=[],e.recentEvents=[]}function yv(e,t){let n=t??e.player.outfitId??`street_gold`;vv(e),e.player=mh(n),e.players=[e.player],e.localPlayerId=e.player.id,hh(e.player),e.aliveCount=1+e.bots.length}function bv(e,t){let n=(t-e+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),n}function xv(e,t,n,r){if(t.pausePressed){if(e.status===`playing`){e.status=`paused`;return}if(e.status===`paused`){e.status=`playing`;return}}Ev(e,{[hv(e).id]:t},n,r)}var Sv={m4a1:`sfx_ar_shot`,mp40:`sfx_smg_shot`,m1887:`sfx_shotgun_shot`,fists:`sfx_smg_shot`};function Cv(e,t){e.damagePopups.push({id:`dmg_${lv++}`,amount:t.amount,isHeadshot:t.isHeadshot,worldX:t.hitPoint.x,worldY:t.hitPoint.y,worldZ:t.hitPoint.z,timeRemaining:.85})}function wv(e,t,n,r,i){e.killFeed.unshift({id:`feed_${uv++}`,killerName:t,victimName:n,weaponName:r,isHeadshot:i,timeRemaining:6})}function Tv(e,t,n,r,i,a,o){let s=Zg(),c=t.drivingVehicleId?e.vehicles.find(e=>e.id===t.drivingVehicleId):null,l=c?c.x:t.position.x,u=c?c.z:t.position.z,d=[...e.buildings.queryCircle(l,u,c?16:9),...e.glooWalls.map(e=>e.aabb)],f={boxes:d,circles:s.colliders,halfSize:$.islandHalfSize},p=t.dropPhase===`grounded`&&!t.drivingVehicleId?M_(e.vehicles,t.position.x,t.position.z,4.5):null;a&&(e.nearbyVehicleId=p?p.id:null);let m=!1;n.interactPressed&&t.dropPhase===`grounded`&&(t.drivingVehicleId||p)&&(m=gv(e,t)),Sh(t,n,d,r,s.colliders),Fh(t,r);let h=t.drivingVehicleId?e.vehicles.find(e=>e.id===t.drivingVehicleId):void 0;if(h){let i=T_[h.type]??T_.pickup,a=h.yaw;j_(h,i,{throttle:n.moveZ,steer:n.moveX,handbrake:n.jumpPressed,boost:n.sprint},f,r);let o=h.yaw-a;if(t.position.x=h.x,t.position.y=h.y+.35,t.position.z=h.z,t.velocity.x=-Math.sin(h.yaw)*h.speed,t.velocity.z=-Math.cos(h.yaw)*h.speed,t.drivingVehicleSpeed=h.speed,t.drivingVehicleYaw=h.yaw,t.yaw+=o,Math.abs(h.speed)>1.5&&Math.abs(n.lookDeltaYaw)<.001){let e=1-Math.exp(-3.5*r);t.yaw+=bv(t.yaw,h.yaw)*e}let s=Math.abs(h.speed);if(s>=10){let n=i.halfWidth+.9;for(let r of e.bots)if(!(r.hp<=0)&&Math.hypot(r.position.x-h.x,r.position.z-h.z)<=n){let i=Math.min(r.hp,Math.round(s*5.2));r.hp=Math.max(0,r.hp-i),t.damageDealt+=i;let a=Math.atan2(r.position.z-h.z,r.position.x-h.x);r.position.x=h.x+Math.cos(a)*(n+1.4),r.position.z=h.z+Math.sin(a)*(n+1.4);let o=r.hp<=0,c={attackerId:t.id,attackerName:t.name,targetId:r.id,targetName:r.name,weaponId:h.type,weaponName:h.type===`tuktuk`?`TUK-TUK`:`PICKUP`,amount:i,shieldAbsorbed:0,isHeadshot:!1,killed:o,hitPoint:{x:r.position.x,y:1.1,z:r.position.z}};e.recentEvents.push(c),Cv(e,{...c,hitPoint:{x:r.position.x,y:1.5,z:r.position.z}}),o&&(t.kills+=1,r.state=`DEAD`,$_(r.position,r.weaponId,e.lootItems),wv(e,t.name,r.name,c.weaponName,!1))}}if(s>=10&&e.players.length>1){let n=i.halfWidth+.9;for(let r of e.players){if(r===t||r.hp<=0||r.dropPhase!==`grounded`||r.drivingVehicleId||Math.hypot(r.position.x-h.x,r.position.z-h.z)>n)continue;let i=Math.min(r.hp,Math.round(s*5.2));r.hp=Math.max(0,r.hp-i),t.damageDealt+=i;let a=Math.atan2(r.position.z-h.z,r.position.x-h.x);r.position.x=h.x+Math.cos(a)*(n+1.4),r.position.z=h.z+Math.sin(a)*(n+1.4);let o=r.hp<=0,c=h.type===`tuktuk`?`TUK-TUK`:`PICKUP`,l={attackerId:t.id,attackerName:t.name,targetId:r.id,targetName:r.name,weaponId:h.type,weaponName:c,amount:i,shieldAbsorbed:0,isHeadshot:!1,killed:o,hitPoint:{x:r.position.x,y:1.1,z:r.position.z}};e.recentEvents.push(l),o&&(t.kills+=1,wv(e,t.name,r.name,c,!1))}}h.y=ph(h.x,h.z),t.position.y=h.y+.35}if(a){let n=t.dropPhase===`grounded`&&!t.drivingVehicleId?M_(e.vehicles,t.position.x,t.position.z,4.5):null;e.nearbyVehicleId=n?n.id:null}if(t.dropPhase===`grounded`&&!t.drivingVehicleId){n.reloadPressed&&Ph(t),n.glooPressed&&J_(t,e.glooWalls)&&a&&i?.onGlooDeployed?.(),n.medkitPressed&&!m&&X_(t)&&a&&i?.onMedkitUsed?.(),ev(t,e.lootItems);let r=e.players.length>1?[...e.bots,...e.players.filter(e=>e!==t&&e.hp>0)]:e.bots,s=Nh(t),c=Wh(t,e.buildings);if(a&&(e.aimState=Rh(c.origin,c.yaw,c.pitch,s,r,e.glooWalls,e.buildings)),n.fireHeld||n.fireJustPressed){let n=t.fireCooldown<=0&&t.reloadTimer<=0?o?.rewind?.(t.id,r)??null:null,s;try{s=Hh(t,r,e.glooWalls,e.buildings,c)}finally{n?.()}if(s.fired){if(a){let e=t.weapons[t.activeSlot];i?.onWeaponFired?.(Sv[e]||`sfx_ar_shot`)}for(let t of s.events)if(e.recentEvents.push(t),Cv(e,t),t.isHeadshot&&a&&i?.onHeadshot?.(),t.killed){let n=e.bots.find(e=>e.id===t.targetId);n&&(n.state=`DEAD`,$_(n.position,n.weaponId,e.lootItems)),wv(e,t.attackerName,t.targetName,t.weaponName,t.isHeadshot)}}}}else a&&(e.aimState.targetLocked=!1),t.drivingVehicleId&&ev(t,e.lootItems)}function Ev(e,t,n,r,i){if(e.status!==`playing`)return;e.matchTime+=n,e.recentEvents=[];let a=e.players.length>0?e.players:[e.player],o=e.localPlayerId;for(let s of a)Tv(e,s,t[s.id]??mv,n,r,s.id===o,i);let s=Zg();for(let t of e.vehicles)a.some(e=>e.drivingVehicleId===t.id)||(Math.abs(t.speed)>.05&&j_(t,T_[t.type]??T_.pickup,{throttle:0,steer:0,handbrake:!1,boost:!1},{boxes:[...e.buildings.queryCircle(t.x,t.z,14),...e.glooWalls.map(e=>e.aabb)],circles:s.colliders,halfSize:$.islandHalfSize},n),t.y=ph(t.x,t.z));Y_(e.glooWalls,n);let c=sv(e.bots,a,e.safeZone,e.glooWalls,e.lootItems,e.buildings,n);for(let t of c)e.recentEvents.push(t),t.killed&&wv(e,t.attackerName,t.targetName,t.weaponName,t.isHeadshot);nv(e.safeZone,n);for(let t of a){let r=t.dropPhase===`grounded`&&iv(t,e.safeZone,n).outside;t.id===o&&(e.playerOutsideZone=r)}for(let t of e.bots)t.hp<=0||iv(t,e.safeZone,n).killed&&(t.state=`DEAD`,$_(t.position,t.weaponId,e.lootItems),wv(e,`PLAY ZONE`,t.name,`ZONE`,!1));for(let t of a)if(t.hp<=0&&t.drivingVehicleId){let n=e.vehicles.find(e=>e.id===t.drivingVehicleId);n&&(n.driverId=null),t.drivingVehicleId=null,t.drivingVehicleSpeed=0}for(let t=e.damagePopups.length-1;t>=0;t--)e.damagePopups[t].timeRemaining-=n,e.damagePopups[t].worldY+=n*.9,e.damagePopups[t].timeRemaining<=0&&e.damagePopups.splice(t,1);e.damagePopups.length>24&&(e.damagePopups.length=24);for(let t=e.killFeed.length-1;t>=0;t--)e.killFeed[t].timeRemaining-=n,e.killFeed[t].timeRemaining<=0&&e.killFeed.splice(t,1);e.killFeed.length>5&&(e.killFeed.length=5);let l=e.bots.filter(e=>e.hp>0).length,u=a.filter(e=>e.hp>0).length;e.aliveCount=u+l;let d=a.filter(t=>t.hp<=0&&e.placements[t.id]===void 0);d.forEach((t,n)=>{e.placements[t.id]=e.aliveCount+d.length-n,a.length>1&&$_(t.position,t.weapons[t.activeSlot],e.lootItems)});let f=hv(e);if(a.length<=1)f.hp<=0?(e.status=`lost`,e.playerRank=l+1,r?.onMatchEnded?.(!1)):l===0&&(e.status=`won`,e.playerRank=1,r?.onMatchEnded?.(!0));else if(e.placements[f.id]!==void 0&&(e.playerRank=e.placements[f.id]),u===0||e.aliveCount<=1){for(let t of a)t.hp>0&&(e.placements[t.id]=1);e.status=`won`,e.placements[f.id]!==void 0&&(e.playerRank=e.placements[f.id]),r?.onMatchEnded?.(f.hp>0)}}var Dv=1280,Ov=.6,kv=1.3,Av={fire:{base:92,floor:72},fireLeft:{base:64,floor:52},jump:{base:64,floor:54},scope:{base:58,floor:52},reload:{base:56,floor:48},crouch:{base:58,floor:50},prone:{base:56,floor:48},gloo:{base:64,floor:52},heal:{base:58,floor:50},slot:{base:60,floor:48},chip:{base:52,floor:48}},jv=Object.keys(Av);function Mv(e,t){if(!(e>0)||!(t>0))return 1;let n=Math.min(e/Dv,t/720);return Math.round(Math.min(kv,Math.max(Ov,n))*1e3)/1e3}function Nv(e){return e<=430}function Pv(e,t){let n=Av[e];return Math.max(48,n.floor,Math.round(n.base*t))}function Fv(e,t,n){let r=Mv(t,n);return e.style.setProperty(`--u`,String(r)),e.classList.toggle(`ui-compact`,Nv(n)),r}var Iv=`fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`,Lv=`fill="currentColor"`,Rv={fire:`<path d="M12 2c2 2.4 3.2 4.7 3.2 7.6v6.9H8.8V9.6C8.8 6.7 10 4.4 12 2z" ${Lv}/><path d="M8 18.5h8v3H8z" ${Lv}/>`,jump:`<path d="M12 20V5M5.5 11.5L12 5l6.5 6.5" ${Iv}/>`,crouch:`<circle cx="12" cy="4.8" r="2.2" ${Lv}/><path d="M12 8v5M12 13l-4.2 3v3.5M12 13l4.2 2.4v4.1M12 9.6l-3.4 2.4" ${Iv}/>`,prone:`<circle cx="5" cy="11" r="2.2" ${Lv}/><path d="M8 13h11l2.5 3M8 13l-1 3.4M3 19.5h18" ${Iv}/>`,reload:`<path d="M20 12a8 8 0 1 1-2.6-5.9" ${Iv}/><path d="M20 4v5h-5" ${Iv}/>`,scope:`<circle cx="12" cy="12" r="6.8" ${Iv}/><path d="M12 2v5M12 17v5M2 12h5M17 12h5" ${Iv}/><circle cx="12" cy="12" r="1.2" ${Lv}/>`,gloo:`<path d="M4 20v-9a8 8 0 0 1 16 0v9z" ${Iv}/><path d="M4 15.5h16M9 15.5V20M15 15.5V20M12 9.5v6" ${Iv}/>`,heal:`<rect x="3" y="7" width="18" height="13" rx="2.4" ${Iv}/><path d="M9 7V5.4A1.4 1.4 0 0 1 10.4 4h3.2A1.4 1.4 0 0 1 15 5.4V7M12 10.6v6M9 13.6h6" ${Iv}/>`,gear:`<circle cx="12" cy="12" r="3" ${Iv}/><circle cx="12" cy="12" r="6.6" ${Iv}/><path d="M12 2.4v3M12 18.6v3M2.4 12h3M18.6 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" ${Iv}/>`,wardrobe:`<path d="M12 9.4V8a2.2 2.2 0 1 1 2.2 2.2" ${Iv}/><path d="M12 9.4L3.6 15.9a1.2 1.2 0 0 0 .7 2.1h15.4a1.2 1.2 0 0 0 .7-2.1z" ${Iv}/>`,emote:`<circle cx="12" cy="12" r="9" ${Iv}/><circle cx="9" cy="10" r="1.2" ${Lv}/><circle cx="15" cy="10" r="1.2" ${Lv}/><path d="M8 14.2a5 5 0 0 0 8 0" ${Iv}/>`,weapon:`<path d="M2 12.5h12l2-2.2h6v3h-5l-1.6 2.2H12.2l-1 4.3H8l1-4.3H2z" ${Lv}/>`};Object.keys(Rv);function zv(e,t=`ico`){return`<svg class="${t}" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false">${Rv[e]}</svg>`}var Bv={en:{title:`FREE FIRE MINI`,subtitle:`Bermuda 2.4 KM — 7 Contenders Tactical Battle Royale`,start_match:`START MATCH (AIRPLANE DROP)`,alive:`ALIVE`,kills:`KILLS`,safe_zone_hold:`SAFE ZONE STABLE`,safe_zone_shrinking:`SAFE ZONE SHRINKING!`,outside_zone_warning:`OUTSIDE SAFE ZONE — MOVE INWARD!`,gloo_wall:`GLOO WALL [G/Q]`,medkit:`MEDKIT [4/E]`,reload_hint:`RELOAD [R]`,ads_hint:`SCOPE ZOOM [RMB/V]`,booyah_title:`BOOYAH!`,eliminated_title:`ELIMINATED`,play_again:`PLAY AGAIN`,return_lobby:`LOBBY`,pause_title:`MATCH PAUSED`,resume:`RESUME MATCH`,wardrobe_title:`OUTFITS (WARDROBE)`,emote_title:`DANCE EMOTES [B]`,outfit_street_gold:`Kelly Gold Track`,outfit_chrono_cyber:`Chrono Cyber Neon`,outfit_cobra_strike:`Cobra Red Hoodie`,outfit_alok_vip:`DJ Alok VIP White`,emote_booyah_dance:`Booyah Shuffle [B]`,emote_cobra_wave:`360 Hip-Hop Spin [N]`,emote_laugh_taunt:`Champion Flex [M]`,airplane_banner:`TRANSPORT PLANE (2.4 KM) — PRESS [F] OR [SPACE] TO SKYDIVE!`,skydive_banner:`SKYDIVING — STEER WITH [WASD] | PRESS [F] TO OPEN PARACHUTE!`,parachute_banner:`PARACHUTE GLIDING — LAND NEAR BUILDINGS & LOOT SCOPES!`,eject_btn:`JUMP / SKYDIVE [F]`,scope_none:`1X IRON`,scope_2x:`2X SCOPE`,scope_4x:`4X SCOPE`,controls_help:`WASD: Move | Shift: Sprint | F/Space: Eject/Parachute/Jump | C: Crouch | Z: Prone | LMB/F: Fire | RMB/V: Scope Zoom | X: Cycle 2x/4x Scope | B/N/M: Dance Emote | G/Q: Gloo Wall | 4/E: Medkit`},th:{title:`FREE FIRE MINI`,subtitle:`เกาะเบอร์มิวดา 2.4 กม. — แบทเทิลรอยัล 7 ผู้เข้าแข่งขัน`,start_match:`เริ่มโดดร่มจากเครื่องบิน (START MATCH)`,alive:`เหลือรอด`,kills:`สังหาร`,safe_zone_hold:`วงปลอดภัยคงที่`,safe_zone_shrinking:`วงบีบกำลังเคลื่อนที่!`,outside_zone_warning:`อยู่นอกวงปลอดภัย — รีบเข้าวง!`,gloo_wall:`ไอซ์วอลล์ [G/Q]`,medkit:`ยาฟื้นฟู [4/E]`,reload_hint:`รีโหลด [R]`,ads_hint:`ซูมสโคป [คลิกขวา/V]`,booyah_title:`BOOYAH!`,eliminated_title:`พ่ายแพ้ (ELIMINATED)`,play_again:`เล่นอีกครั้ง (PLAY AGAIN)`,return_lobby:`กลับหน้าล็อบบี้`,pause_title:`หยุดเกมชั่วคราว`,resume:`กลับเข้าสู่แมตช์`,wardrobe_title:`เลือกชุดเสื้อผ้า (OUTFITS)`,emote_title:`ท่าเต้น (EMOTES) [B]`,outfit_street_gold:`ชุดสตรีททอง Kelly`,outfit_chrono_cyber:`ชุดไซเบอร์นีออน Chrono`,outfit_cobra_strike:`ชุดฮู้ดคอบร้าแดง Cobra`,outfit_alok_vip:`ชุดคอนเสิร์ต VIP Alok`,emote_booyah_dance:`ท่าเต้น BOOYAH! [B]`,emote_cobra_wave:`ท่าหมุนตัว Hip-Hop [N]`,emote_laugh_taunt:`ท่าเบ่งกล้ามแชมป์ [M]`,airplane_banner:`อยู่บนเครื่องบิน (แผนที่ 2.4 กม.) — กด [F] หรือ [SPACE] เพื่อโดดร่ม!`,skydive_banner:`กำลังดิ่งพสุธา — บังคับทิศทางด้วย [WASD] | กด [F] กางร่มชูชีพ!`,parachute_banner:`กำลังร่อนร่มชูชีพ — เลือกลงเมืองเพื่อเก็บปืนและสโคป 2X / 4X!`,eject_btn:`โดดร่มทันที [F]`,scope_none:`ศูนย์เปิด 1X`,scope_2x:`สโคป 2X`,scope_4x:`สโคป 4X`,controls_help:`WASD: เดิน | Shift: วิ่งไว | F/Space: โดดร่ม/กระโดด | C: ย่อตัว | Z: หมอบ | คลิกซ้าย/F: ยิง | คลิกขวา/V: ซูมสโคป | X: สลับสโคป 2X/4X | B/N/M: ท่าเต้น | G/Q: ตั้งไอซ์วอลล์ | 4/E: พันยา`}};function Vv(e,t){return Bv[e]?.[t]??Bv.en[t]??t}function Hv(){if(typeof window>`u`)return!1;let e=`ontouchstart`in window||typeof navigator<`u`&&navigator.maxTouchPoints>0||!!window.matchMedia?.(`(pointer: coarse)`).matches,t=window.innerWidth>0&&window.innerWidth<=920;return e||t}var Uv=class{root;handlers;minimapCtx=null;lastStatus=``;mobileMode=!1;wardrobeTab=`shop`;wardrobeWeapon=`m4a1`;constructor(e,t){this.root=e,this.handlers=t,this.mobileMode=Hv(),this.buildDOM(),this.rescale(),window.addEventListener(`resize`,()=>this.rescale()),this.setMobileMode(this.mobileMode)}rescale(){let e=Fv(this.root,window.innerWidth,window.innerHeight);for(let t of jv)this.root.style.setProperty(`--sz-${t}`,`${Pv(t,e)}px`);this.root.style.setProperty(`--edge-l`,`max(16px, env(safe-area-inset-left, 0px))`),this.root.style.setProperty(`--edge-r`,`max(16px, env(safe-area-inset-right, 0px))`),this.root.style.setProperty(`--edge-t`,`max(12px, env(safe-area-inset-top, 0px))`),this.root.style.setProperty(`--edge-b`,`max(14px, env(safe-area-inset-bottom, 0px))`)}openWardrobe(){this.root.querySelector(`#wardrobe-modal`)?.classList.add(`open`),this.renderWardrobe()}renderWardrobe(){let e=this.root.querySelector(`#wd-tabs`),t=this.root.querySelector(`#wd-body`),n=this.handlers.getWardrobe?.();if(!e||!t||!n)return;let{loadout:r,weaponSkins:i,coins:c,ownedSets:m}=n;e.innerHTML=`<div class="wd-coins" id="wd-coins">🪙 ${c.toLocaleString()}</div>`+[[`shop`,`ร้านค้า/ชุด`],[`hat`,`หมวก`],[`head`,`หัว/หน้า`],[`top`,`เสื้อ`],[`pants`,`กางเกง`],[`shoes`,`รองเท้า`],[`fists`,`หมัด`],[`gunskin`,`สกินปืน`]].map(([e,t])=>`<button class="wd-tab${this.wardrobeTab===e?` active`:``}" data-wd-tab="${e}">${t}</button>`).join(``);let h=e=>e===null?`conic-gradient(#f87171,#facc15,#4ade80,#60a5fa,#c084fc,#f87171)`:`#${e.toString(16).padStart(6,`0`)}`,g=e=>a.find(t=>t.id===e),_=e=>`<div class="wd-section">${e}</div>`,v=(e,t)=>{let n=e===`hat`?o:e===`fists`?s:null,r=l(e).map(n=>{let r=g(n.setId),i=x(n.id,m);return`<button class="wd-item wd-rarity-${r.rarity}${n.id===t?` active`:``}${i?``:` locked`}" ${i?`data-wd-kind="${e}" data-wd-id="${n.id}"`:`data-wd-tab="shop"`}><span class="wd-dot" style="background:${h(r.color)}"></span><span>${n.name}<small>${i?r.name:`🔒 ${r.name}`}</small></span></button>`});return n&&r.unshift(`<button class="wd-item${t===n?` active`:``}" data-wd-kind="${e}" data-wd-id="${n}">— ไม่สวม / None</button>`),`<div class="wd-grid">${r.join(``)}</div>`},y=``;switch(this.wardrobeTab){case`shop`:y=_(`ชุดคอสเมติก: ซื้อครั้งเดียวได้ทุกชิ้นในชุด ใส่แยกชิ้นหรือผสมข้ามชุดได้`)+`<div class="wd-sets">${a.map(e=>{let t=m.includes(e.id),n=Object.values(e.pieces).length,r=t?`<button class="wd-buy owned" data-wd-kind="set" data-wd-id="${e.id}">สวมทั้งชุด</button>`:`<button class="wd-buy${c>=e.price?``:` poor`}" data-wd-kind="buy" data-wd-id="${e.id}">🪙 ${e.price.toLocaleString()}</button>`;return`<div class="wd-set wd-rarity-${e.rarity}"><span class="wd-dot big" style="background:${h(e.color)}"></span><div class="wd-set-info"><b>${e.name}</b><small>${e.rarity.toUpperCase()} · ${n} ชิ้น${t?` · มีแล้ว`:``}</small></div>${r}</div>`}).join(``)}</div>`;break;case`hat`:case`top`:case`pants`:case`shoes`:case`fists`:y=v(this.wardrobeTab,r[this.wardrobeTab]);break;case`head`:y=_(`Head (face + hair)`)+v(`head`,r.head)+_(`Skin tone`)+`<div class="wd-swatches">${u.map(e=>`<button class="wd-swatch${e.id===r.skinTone?` active`:``}" title="${e.name}" style="background:${h(e.color)}" data-wd-kind="skinTone" data-wd-id="${e.id}"></button>`).join(``)}</div>`+_(`Head shape`)+`<div class="wd-grid">${d.map(e=>`<button class="wd-item${e.id===r.headShape?` active`:``}" data-wd-kind="headShape" data-wd-id="${e.id}">${e.name}</button>`).join(``)}</div>`;break;case`gunskin`:{let e=this.wardrobeWeapon;y=_(`Weapon`)+`<div class="wd-grid">${p.map(t=>`<button class="wd-item${t===e?` active`:``}" data-wd-weapon="${t}">${t.toUpperCase()}</button>`).join(``)}</div>`+_(`Skin`)+`<div class="wd-grid">${f.map(t=>`<button class="wd-item wd-rarity-${t.rarity}${t.id===i[e]?` active`:``}" data-wd-kind="gunskin" data-wd-id="${t.id}">${t.name}</button>`).join(``)}</div>`;break}}t.innerHTML=y}isMobileMode(){return this.mobileMode}setMobileMode(e){this.mobileMode=e;let t=this.root.querySelector(`#mobile-touch-layer`);t&&t.classList.toggle(`active`,e),this.root.classList.toggle(`touch-ui`,e);let n=this.root.querySelector(`#btn-mobile-mode`);n&&(n.textContent=`MOBILE HUD: ${e?`ON`:`AUTO`}`)}buildDOM(){this.root.innerHTML=`
      <style>
        .ff-screen {
          position: absolute;
          inset: 0;
          display: none;
          pointer-events: auto;
        }
        .ff-screen.active {
          display: flex;
        }
        #hud-screen.active {
          display: block;
          pointer-events: none;
        }
        /* Lobby Screen */
        #lobby-screen {
          flex-direction: column;
          justify-content: space-between;
          padding: 24px 32px;
          background: radial-gradient(circle at 50% 45%, rgba(12, 18, 28, 0.12) 0%, rgba(8, 12, 22, 0.84) 100%);
        }
        .lobby-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .lobby-mid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: auto 0;
          pointer-events: none;
        }
        .side-panel {
          pointer-events: auto;
          background: rgba(12, 18, 28, 0.90);
          border: 1px solid rgba(255, 214, 0, 0.45);
          border-radius: 8px;
          padding: 12px 14px;
          width: 230px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }
        .panel-title {
          font-size: 12px;
          font-weight: 900;
          color: #ffd600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .wardrobe-btn {
          cursor: pointer;
          background: rgba(30, 41, 59, 0.85);
          color: #f8fafc;
          border: 1px solid rgba(255,255,255,0.18);
          padding: 8px 10px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 700;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .wardrobe-btn.active {
          border: 2px solid #ffd600;
          background: rgba(255, 214, 0, 0.16);
          color: #ffd600;
        }
        .swatch-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }
        .brand-box {
          background: rgba(12, 18, 28, 0.88);
          border-left: 5px solid #ffd600;
          padding: 14px 22px;
          transform: skewX(-6deg);
          box-shadow: 0 10px 28px rgba(0,0,0,0.45);
        }
        .brand-title {
          margin: 0;
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 2px;
          color: #ffd600;
          text-shadow: 0 2px 10px rgba(255, 214, 0, 0.4);
        }
        .brand-sub {
          margin: 4px 0 0;
          font-size: 14px;
          color: #e2e8f0;
        }
        .career-card {
          background: rgba(12, 18, 28, 0.88);
          border: 1px solid rgba(0, 229, 255, 0.45);
          padding: 12px 18px;
          border-radius: 6px;
          display: flex;
          gap: 18px;
          align-items: center;
        }
        .stat-pill {
          text-align: center;
        }
        .stat-pill .val {
          font-size: 20px;
          font-weight: 800;
          color: #ffd600;
        }
        .stat-pill .lbl {
          font-size: 11px;
          color: #94a3b8;
          text-transform: uppercase;
        }
        .lobby-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
        }
        .controls-panel {
          background: rgba(12, 18, 28, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 6px;
          padding: 10px 14px;
          max-width: 680px;
          font-size: 12px;
          line-height: 1.45;
          color: #cbd5e1;
        }
        .ff-btn {
          cursor: pointer;
          pointer-events: auto;
          background: linear-gradient(135deg, #ffd600 0%, #ff9100 100%);
          color: #0b1320;
          border: none;
          padding: 16px 34px;
          font-size: 19px;
          font-weight: 900;
          letter-spacing: 1px;
          transform: skewX(-8deg);
          box-shadow: 0 8px 24px rgba(255, 160, 0, 0.45);
          transition: transform 0.12s ease, filter 0.12s ease;
        }
        .ff-btn:hover {
          filter: brightness(1.08);
          transform: skewX(-8deg) scale(1.03);
        }
        .ff-btn-secondary {
          cursor: pointer;
          pointer-events: auto;
          background: rgba(15, 23, 42, 0.9);
          color: #f8fafc;
          border: 1px solid rgba(255, 214, 0, 0.55);
          padding: 9px 14px;
          font-size: 13px;
          font-weight: 700;
          border-radius: 4px;
        }
        /* HUD Elements */
        .hud-top-left {
          position: absolute;
          top: var(--edge-t);
          left: var(--edge-l);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        #minimap-canvas {
          width: var(--mini);
          height: var(--mini);
          background: rgba(10, 22, 36, 0.88);
          border: 2px solid #ffd600;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        }
        .zone-badge {
          background: rgba(18, 24, 34, 0.78);
          border-left: 3px solid #facc15;
          border-right: 3px solid #facc15;
          padding: 4px 16px;
          font-size: 13px;
          font-weight: 800;
          color: #f8fafc;
          transform: skewX(-12deg);
          box-shadow: 0 4px 12px rgba(0,0,0,0.45);
        }
        #hud-compass {
          background: linear-gradient(90deg, transparent 0%, rgba(15, 23, 42, 0.55) 20%, rgba(15, 23, 42, 0.55) 80%, transparent 100%);
          padding: 3px 24px;
          font-size: 12px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.92);
          letter-spacing: 3px;
          text-shadow: 0 1px 3px rgba(0,0,0,0.85);
          white-space: nowrap;
        }
        .ui-compact #hud-compass { letter-spacing: 1px; padding: 3px 10px; font-size: 11px; }
        #poi-labels-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .poi-sky-banner {
          position: absolute;
          transform: translate(-50%, -50%) skewX(-10deg);
          background: linear-gradient(90deg, rgba(88, 28, 135, 0.88), rgba(30, 27, 75, 0.92), rgba(88, 28, 135, 0.88));
          border-top: 2px solid #c084fc;
          border-bottom: 2px solid #facc15;
          padding: 4px 18px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 1px;
          text-shadow: 0 2px 6px rgba(0,0,0,0.9);
          box-shadow: 0 0 18px rgba(168, 85, 247, 0.65);
          white-space: nowrap;
        }
        .hud-top-right {
          position: absolute;
          top: var(--edge-t);
          right: var(--edge-r);
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .counter-badge {
          background: rgba(12, 18, 28, 0.88);
          border: 1px solid rgba(255, 214, 0, 0.5);
          padding: max(3px, calc(var(--u) * 7px)) max(8px, calc(var(--u) * 14px));
          transform: skewX(-8deg);
          display: flex;
          align-items: baseline;
          gap: 7px;
        }
        .counter-badge .num {
          font-size: max(17px, calc(var(--u) * 22px));
          font-weight: 900;
          color: #ffd600;
        }
        .counter-badge .txt {
          font-size: 12px;
          font-weight: 700;
          color: #e2e8f0;
        }
        .hud-top-center {
          position: absolute;
          top: var(--edge-t);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          pointer-events: auto;
        }
        #drop-banner-wrap {
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: rgba(12, 18, 28, 0.92);
          border: 2px solid #ffd600;
          padding: 10px 22px;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.55);
        }
        #outside-zone-alert {
          display: none;
          background: rgba(220, 38, 38, 0.9);
          border: 1px solid #fecaca;
          padding: 6px 18px;
          font-size: 13px;
          font-weight: 800;
          border-radius: 4px;
        }
        #kill-feed {
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: center;
        }
        .kill-item {
          background: rgba(12, 18, 28, 0.84);
          border-left: 3px solid #ff1744;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 700;
          color: #f8fafc;
        }
        /* Scope Reticle Overlay (2X / 4X) */
        #scope-overlay {
          display: none;
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 50% 50%, transparent 230px, rgba(4, 8, 16, 0.92) 260px);
          align-items: center;
          justify-content: center;
        }
        #scope-overlay.active {
          display: flex;
        }
        .scope-lens {
          width: 460px;
          height: 460px;
          border: 3px solid #00e5ff;
          border-radius: 50%;
          position: relative;
          box-shadow: 0 0 32px rgba(0, 229, 255, 0.35);
        }
        .scope-lens.scope-4x {
          border-color: #a855f7;
          box-shadow: 0 0 36px rgba(168, 85, 247, 0.45);
        }
        .scope-line-h {
          position: absolute;
          top: 50%;
          left: 8%;
          right: 8%;
          height: 1px;
          background: rgba(0, 229, 255, 0.65);
        }
        .scope-line-v {
          position: absolute;
          left: 50%;
          top: 8%;
          bottom: 8%;
          width: 1px;
          background: rgba(0, 229, 255, 0.65);
        }
        .scope-badge {
          position: absolute;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(12, 18, 28, 0.9);
          border: 1px solid #ffd600;
          color: #ffd600;
          padding: 3px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 900;
        }
        /* Crosshair */
        #crosshair-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 44px;
          height: 44px;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ch-ring {
          width: 30px;
          height: 30px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          position: relative;
          transition: border-color 0.06s ease, transform 0.06s ease;
        }
        .ch-dot {
          width: 5px;
          height: 5px;
          background: #ffd600;
          border-radius: 50%;
          position: absolute;
        }
        #crosshair-wrap.locked .ch-ring {
          border-color: #ff1744;
          transform: scale(0.86);
          box-shadow: 0 0 10px rgba(255, 23, 68, 0.7);
        }
        #crosshair-wrap.locked .ch-dot {
          background: #ff1744;
        }
        /* Floating Damage Popups */
        #damage-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .dmg-popup {
          position: absolute;
          transform: translate(-50%, -50%);
          font-weight: 900;
          text-shadow: 0 2px 4px rgba(0,0,0,0.92);
          white-space: nowrap;
        }
        .dmg-body {
          color: #ffd600;
          font-size: 20px;
        }
        .dmg-head {
          color: #ff1744;
          font-size: 26px;
        }
        /* Bottom HP, EP & Armor Health System Panel */
        .hud-bottom-center {
          position: absolute;
          bottom: 14px;
          left: 38%;
          transform: translateX(-50%);
          width: 304px;
          background: rgba(10, 16, 26, 0.92);
          border: 2px solid rgba(0, 230, 118, 0.65);
          padding: 7px 12px;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.65);
          pointer-events: auto;
        }
        .bar-row {
          white-space: nowrap;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 900;
          margin-bottom: 3px;
        }
        .bar-track {
          width: 100%;
          height: 8px;
          background: rgba(255,255,255,0.14);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 5px;
        }
        .bar-track.hp-track {
          height: 14px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          margin-bottom: 2px;
        }
        #ep-fill {
          height: 100%;
          background: linear-gradient(90deg, #f59e0b, #fde047);
          width: 60%;
          transition: width 0.12s ease;
        }
        #shield-fill {
          height: 100%;
          background: linear-gradient(90deg, #00e5ff, #38bdf8);
          width: 50%;
          transition: width 0.12s ease;
        }
        #hp-fill {
          height: 100%;
          background: linear-gradient(90deg, #00e676, #84cc16);
          width: 100%;
          transition: width 0.12s ease, background 0.15s ease;
        }
        /* 3D Overhead Enemy Bot Health Bars */
        #bot-hp-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .bot-hp-tag {
          position: absolute;
          transform: translate(-50%, -100%);
          background: rgba(10, 15, 26, 0.88);
          border: 1px solid rgba(255, 23, 68, 0.85);
          border-radius: 5px;
          padding: 3px 8px;
          min-width: 112px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.65);
        }
        .bot-hp-name {
          font-size: 11px;
          font-weight: 900;
          color: #f8fafc;
          display: flex;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 2px;
          white-space: nowrap;
        }
        .bot-hp-track {
          width: 100%;
          height: 7px;
          background: rgba(255, 255, 255, 0.18);
          border-radius: 3px;
          overflow: hidden;
        }
        .bot-hp-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff1744, #fb7185);
        }
        /* Bottom Right Weapons & Utilities */
        .hud-bottom-right {
          position: absolute;
          bottom: 18px;
          right: 16px;
          display: flex;
          gap: 7px;
          align-items: flex-end;
          pointer-events: auto;
        }
        .util-btn, .weapon-card {
          cursor: pointer;
          background: rgba(12, 18, 28, 0.88);
          border: 1px solid rgba(255,255,255,0.22);
          color: #ffffff;
          padding: 8px 11px;
          border-radius: 6px;
          text-align: center;
          min-width: 72px;
        }
        .weapon-card.active {
          border: 2px solid #ffd600;
          box-shadow: 0 0 12px rgba(255, 214, 0, 0.35);
        }
        .util-btn.gloo {
          border-color: #00e5ff;
        }
        .util-btn.medkit {
          border-color: #00e676;
        }
        .util-btn.scope {
          border-color: #a855f7;
        }
        .util-btn.emote {
          border-color: #facc15;
        }
        /* Modal / Result Overlays */
        .modal-overlay {
          align-items: center;
          justify-content: center;
          background: rgba(6, 11, 20, 0.84);
        }
        .result-box {
          background: rgba(12, 18, 28, 0.96);
          border: 2px solid #ffd600;
          padding: 32px 44px;
          border-radius: 10px;
          text-align: center;
          min-width: 420px;
          box-shadow: 0 18px 48px rgba(0,0,0,0.65);
        }
        .booyah-banner {
          font-size: 46px;
          font-weight: 900;
          letter-spacing: 3px;
          margin: 0 0 8px;
          color: #ffd600;
          text-shadow: 0 0 24px rgba(255, 214, 0, 0.55);
        }
        .booyah-banner.lost {
          color: #ff1744;
          text-shadow: 0 0 20px rgba(255, 23, 68, 0.45);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin: 20px 0 26px;
          text-align: left;
          background: rgba(255,255,255,0.04);
          padding: 14px 18px;
          border-radius: 6px;
        }
        /* Touch layer (SPEC-006-R7/R10, SPEC-018-R8/R9).
           Sizes come from uiScale.ts (--sz-<role>, written on the root by rescale()).
           Each round button is placed by the offset of its centre from the FIRE centre, in FIRE diameters:
           --dx to the left, --dy upward. Everything is anchored to the bottom-right corner so thumb reach
           does not depend on the screen size. */
        #hud-screen {
          --cx: calc(var(--edge-r) + var(--sz-fire) * 0.95);
          --cy: calc(var(--edge-b) + var(--sz-fire) * 0.65);
          --stick: max(100px, calc(var(--u) * 136px));
          --mini: max(92px, calc(var(--u) * 152px));
        }
        #mobile-touch-layer {
          display: none;
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 15;
        }
        #mobile-touch-layer.active {
          display: block;
        }
        #touch-look-zone {
          position: absolute;
          top: 68px;
          right: 0;
          width: 52%;
          bottom: 140px;
          pointer-events: auto;
          touch-action: none;
        }
        #touch-joystick-zone {
          position: absolute;
          left: var(--edge-l);
          bottom: calc(var(--edge-b) + 6px);
          width: var(--stick);
          height: var(--stick);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.74) 100%);
          border: 2px solid rgba(255, 214, 0, 0.65);
          box-shadow: 0 0 18px rgba(0, 0, 0, 0.55);
          pointer-events: auto;
          touch-action: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #touch-joystick-knob {
          width: 42%;
          height: 42%;
          border-radius: 50%;
          background: radial-gradient(circle, #ffd600 0%, #f59e0b 100%);
          border: 2px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
          transform: translate(0px, 0px);
          pointer-events: none;
        }
        .touch-action-btn {
          position: absolute;
          pointer-events: auto;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          color: #ffffff;
          cursor: pointer;
          background: rgba(15, 23, 42, 0.66);
          border: 2px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 5px 14px rgba(0, 0, 0, 0.5);
          font-size: 11px;
          font-weight: 900;
        }
        .touch-action-btn:active { filter: brightness(1.3); }
        .touch-action-btn .ico { width: 54%; height: 54%; }
        .touch-action-btn.tb {
          width: var(--sz);
          height: var(--sz);
          right: calc(var(--cx) + var(--dx) * var(--sz-fire) - var(--sz) / 2);
          bottom: calc(var(--cy) + var(--dy) * var(--sz-fire) - var(--sz) / 2);
        }
        #touch-btn-fire {
          --sz: var(--sz-fire); --dx: 0; --dy: 0;
          background: radial-gradient(circle, rgba(255, 23, 68, 0.92) 0%, rgba(185, 28, 28, 0.96) 100%);
          border: 3px solid #ffd600;
        }
        #touch-btn-fire .ico { width: 50%; height: 50%; }
        #touch-btn-jump   { --sz: var(--sz-jump);   --dx: 0;    --dy: 1.12; border-color: #38bdf8; }
        #touch-btn-crouch { --sz: var(--sz-crouch); --dx: 0;    --dy: 2;    border-color: #facc15; }
        #touch-btn-ads    { --sz: var(--sz-scope);  --dx: 1.1;  --dy: 0.75; border-color: #c084fc; }
        #touch-btn-prone  { --sz: var(--sz-prone);  --dx: 1.05; --dy: 1.7;  border-color: #a3e635; }
        #touch-btn-reload { --sz: var(--sz-reload); --dx: 1.2;  --dy: -0.2; border-color: #94a3b8; }
        #touch-btn-vehicle {
          --sz: var(--sz-chip); --dx: 2.15; --dy: 1.7;
          background: rgba(234, 179, 8, 0.88); border-color: #fef08a; color: #111827; font-size: 10px;
        }
        /* Left side: stick, ice wall and heal beside it, second FIRE button above it */
        #touch-btn-gloo {
          width: var(--sz-gloo); height: var(--sz-gloo);
          left: calc(var(--edge-l) + var(--stick) + 10px);
          bottom: calc(var(--edge-b) + 6px);
          background: radial-gradient(circle, rgba(0, 229, 255, 0.7) 0%, rgba(2, 132, 199, 0.85) 100%);
          border-color: #e0f2fe;
        }
        #touch-btn-medkit {
          width: var(--sz-heal); height: var(--sz-heal);
          left: calc(var(--edge-l) + var(--stick) + 10px);
          bottom: calc(var(--edge-b) + 6px + var(--sz-gloo) + 10px);
          background: radial-gradient(circle, rgba(0, 230, 118, 0.7) 0%, rgba(21, 128, 61, 0.85) 100%);
          border-color: #dcfce7;
        }
        #touch-btn-fire-left {
          width: var(--sz-fireLeft); height: var(--sz-fireLeft);
          left: var(--edge-l);
          bottom: calc(var(--edge-b) + 6px + var(--stick) + 10px);
          background: radial-gradient(circle, rgba(255, 111, 0, 0.8) 0%, rgba(194, 65, 12, 0.9) 100%);
          border-color: #ffd600;
        }
        #touch-sprint-lock {
          position: absolute;
          left: calc(var(--edge-l) + var(--stick) / 2 - 38px);
          bottom: calc(var(--edge-b) + 14px);
          display: none;
          padding: 3px 8px;
          border-radius: 10px;
          background: rgba(255, 214, 0, 0.92);
          color: #111827;
          font-size: 11px;
          font-weight: 900;
          pointer-events: none;
        }
        #touch-sprint-lock.on { display: block; }
        /* Weapon slots and small chips live in the HUD container; in touch mode that container only positions them */
        .ico-wrap { display: none; }
        .touch-ui .hud-bottom-right {
          inset: 0;
          display: block;
          pointer-events: none;
        }
        .touch-ui .util-btn.gloo,
        .touch-ui .util-btn.medkit,
        .touch-ui #btn-vehicle { display: none !important; }
        .touch-ui .util-btn.emote,
        .touch-ui .util-btn.scope {
          position: absolute;
          pointer-events: auto;
          min-width: 0;
          width: var(--sz-chip);
          height: var(--sz-chip);
          padding: 0;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          top: calc(var(--edge-t) + var(--mini) + 8px);
          background: rgba(15, 23, 42, 0.66);
        }
        .touch-ui .util-btn.emote { left: var(--edge-l); }
        .touch-ui .util-btn.scope { left: calc(var(--edge-l) + var(--sz-chip) + 8px); }
        .touch-ui .util-btn .util-lbl,
        .touch-ui .util-btn.emote .util-val { display: none; }
        .touch-ui .util-btn .ico-wrap { display: block; font-size: 20px; line-height: 1; }
        .touch-ui .util-btn.scope .util-val { display: none; }
        .touch-ui .weapon-card .wc-word { display: none; }
        .touch-ui .weapon-card {
          position: absolute;
          pointer-events: auto;
          min-width: 0;
          padding: 2px;
          width: var(--sz-slot);
          height: var(--sz-slot);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          right: calc(var(--cx) + var(--sdx) * var(--sz-fire) - var(--sz-slot) / 2);
          bottom: calc(var(--cy) + var(--sdy) * var(--sz-fire) - var(--sz-slot) / 2);
          background: rgba(12, 18, 28, 0.78);
          touch-action: none;
        }
        .touch-ui #btn-slot-1 { --sdx: 2.1; --sdy: -0.2; }
        .touch-ui #btn-slot-2 { --sdx: 2.1; --sdy: 0.62; }
        .touch-ui .weapon-card .wc-lbl { font-size: 8px !important; line-height: 1; }
        .touch-ui .weapon-card .wc-name { font-size: 11px !important; line-height: 1.1; }
        .touch-ui .weapon-card .wc-ammo { font-size: 9px !important; line-height: 1.1; white-space: nowrap; }
        /* Health, armor and EP: one compact block between the left cluster and the right thumb cluster */
        .touch-ui .hud-bottom-center {
          left: calc(var(--edge-l) + var(--stick) + var(--sz-gloo) + 24px);
          bottom: var(--edge-b);
          transform: none;
          width: min(260px, max(150px, calc(var(--u) * 230px)));
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 8px;
          padding: 3px 8px;
          border-width: 1px;
        }
        .touch-ui .hp-row { grid-column: 1 / 3; grid-row: 1; margin-bottom: 1px; font-size: 12px !important; }
        .touch-ui #hud-hp-text { font-size: 12px !important; }
        .touch-ui .hp-track { grid-column: 1 / 3; grid-row: 2; height: 8px; margin-bottom: 3px; }
        .touch-ui .ep-row { grid-column: 1; grid-row: 3; font-size: 10px; margin-bottom: 1px; }
        .touch-ui .ep-track { grid-column: 1; grid-row: 4; height: 5px; margin-bottom: 0; }
        .touch-ui .sh-row { grid-column: 2; grid-row: 3; font-size: 10px; margin-bottom: 1px; }
        .touch-ui .sh-track { grid-column: 2; grid-row: 4; height: 5px; margin-bottom: 0; }
        /* Small / landscape-phone screens: keep Start visible and the lobby usable */
        @media (max-height: 640px), (max-width: 900px) {
          #lobby-screen { padding: 10px 14px; overflow-y: auto; }
          .lobby-mid { flex-wrap: wrap; gap: 8px; margin: 8px 0; }
          .side-panel { width: 168px; padding: 8px 10px; gap: 5px; }
          .controls-panel { display: none; }
          .lobby-footer { justify-content: flex-end; }
          .lobby-footer .lobby-actions {
            position: fixed;
            right: 14px;
            bottom: 12px;
            z-index: 30;
          }
          .lobby-footer .ff-btn {
            padding: 10px 24px;
            font-size: 16px;
          }
        }
        /* Wardrobe drawer (CR-010) */
        .wardrobe-open { justify-content: center; background: linear-gradient(90deg, #ffd600, #ff9100); color: #111827; }
        #wardrobe-modal {
          display: none;
          position: absolute;
          top: 12px;
          right: 12px;
          bottom: 12px;
          width: min(440px, 58vw);
          background: rgba(10, 16, 26, 0.94);
          border: 1px solid rgba(255, 214, 0, 0.55);
          border-radius: 10px;
          z-index: 40;
          pointer-events: auto;
          flex-direction: column;
          box-shadow: 0 12px 32px rgba(0,0,0,0.6);
        }
        #wardrobe-modal.open { display: flex; }
        .wd-head { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; color: #ffd600; font-weight: 900; letter-spacing: 1px; }
        .wd-close { background: none; border: 1px solid rgba(255,255,255,0.3); color: #fff; border-radius: 4px; cursor: pointer; padding: 2px 8px; }
        .wd-tabs { display: flex; flex-wrap: wrap; gap: 4px; padding: 0 10px 8px; }
        .wd-tab { cursor: pointer; background: rgba(30,41,59,0.9); color: #cbd5e1; border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 5px 9px; font-size: 11px; font-weight: 800; }
        .wd-tab.active { background: #ffd600; color: #111827; }
        .wd-body { overflow-y: auto; padding: 4px 12px 12px; }
        .wd-section { color: #94a3b8; font-size: 11px; font-weight: 800; margin: 10px 0 6px; text-transform: uppercase; }
        .wd-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(118px, 1fr)); gap: 6px; }
        .wd-item { cursor: pointer; background: rgba(30,41,59,0.85); color: #f8fafc; border: 1px solid rgba(255,255,255,0.16); border-radius: 6px; padding: 8px; font-size: 12px; font-weight: 700; text-align: left; display: flex; gap: 6px; align-items: center; }
        .wd-item.active { border: 2px solid #ffd600; background: rgba(255,214,0,0.16); color: #ffd600; }
        .wd-swatches { display: flex; flex-wrap: wrap; gap: 6px; }
        .wd-swatch { cursor: pointer; width: 26px; height: 26px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.35); }
        .wd-swatch.active { border: 3px solid #ffd600; transform: scale(1.12); }
        .wd-coins { width: 100%; color: #facc15; font-weight: 900; font-size: 13px; margin-bottom: 2px; }
        .wd-item small { display: block; font-size: 10px; color: #94a3b8; font-weight: 600; }
        .wd-item.locked { opacity: 0.55; }
        .wd-dot { width: 12px; height: 12px; border-radius: 50%; flex: none; }
        .wd-dot.big { width: 22px; height: 22px; }
        .wd-sets { display: flex; flex-direction: column; gap: 6px; }
        .wd-set { display: flex; align-items: center; gap: 10px; background: rgba(30,41,59,0.85); border: 1px solid rgba(255,255,255,0.14); border-radius: 6px; padding: 8px 10px; color: #f8fafc; }
        .wd-set-info { flex: 1; display: flex; flex-direction: column; font-size: 13px; }
        .wd-set-info small { color: #94a3b8; font-size: 10px; }
        .wd-buy { cursor: pointer; border: none; border-radius: 5px; padding: 7px 10px; font-weight: 900; font-size: 12px; background: linear-gradient(90deg, #ffd600, #ff9100); color: #111827; }
        .wd-buy.owned { background: #16a34a; color: #fff; }
        .wd-buy.poor { background: #475569; color: #cbd5e1; }
        .wd-rarity-common { border-left: 4px solid #94a3b8; }
        .wd-rarity-rare { border-left: 4px solid #3b82f6; }
        .wd-rarity-epic { border-left: 4px solid #a855f7; }
        .wd-rarity-legendary { border-left: 4px solid #f59e0b; }
        @media (max-height: 640px), (max-width: 900px) {
          #wardrobe-modal { top: 6px; bottom: 6px; right: 6px; width: min(420px, 64vw); }
          .wd-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
        }
      </style>

      <!-- LOBBY SCREEN -->
      <div id="lobby-screen" class="ff-screen active">
        <div class="lobby-header">
          <div class="brand-box">
            <h1 class="brand-title" id="ui-title">FREE FIRE MINI</h1>
            <p class="brand-sub" id="ui-subtitle">Bermuda 2.4 KM — 7 Contenders Tactical Battle Royale</p>
          </div>
          <div style="display:flex; gap:10px; align-items:center;">
            <div class="career-card">
              <div class="stat-pill"><div class="val" id="career-booyahs">0</div><div class="lbl">BOOYAH!</div></div>
              <div class="stat-pill"><div class="val" id="career-kills">0</div><div class="lbl">KILLS</div></div>
              <div class="stat-pill"><div class="val" id="career-matches">0</div><div class="lbl">MATCHES</div></div>
            </div>
            <button id="btn-mobile-mode" class="ff-btn-secondary">MOBILE HUD: AUTO</button>
            <button id="btn-locale" class="ff-btn-secondary">TH / EN</button>
            <button id="btn-mute" class="ff-btn-secondary">SOUND: ON</button>
            <button id="btn-gfx" class="ff-btn-secondary">GRAPHICS: AUTO</button>
            <button id="btn-sens" class="ff-btn-secondary">SENSITIVITY: 1.0x</button>
            <button id="btn-aimassist" class="ff-btn-secondary">AIM ASSIST: NORMAL</button>
            <button id="btn-shadows" class="ff-btn-secondary">SHADOWS: OFF</button>
            <button id="btn-lightfx" class="ff-btn-secondary">LIGHT FX: OFF</button>
          </div>
        </div>

        <div class="lobby-mid">
          <!-- Outfit Wardrobe Panel -->
          <div class="side-panel" id="wardrobe-panel">
            <div class="panel-title" id="lbl-wardrobe-title">OUTFITS (WARDROBE)</div>
            <button id="btn-open-wardrobe" class="wardrobe-btn wardrobe-open">👕 ตู้เสื้อผ้า / WARDROBE + GUN SKINS</button>
            <button id="btn-outfit-street_gold" class="wardrobe-btn active" data-outfit="street_gold">
              <span class="swatch-dot" style="background:#ffd600;"></span>
              <span id="lbl-outfit-street_gold">Kelly Gold Track</span>
            </button>
            <button id="btn-outfit-chrono_cyber" class="wardrobe-btn" data-outfit="chrono_cyber">
              <span class="swatch-dot" style="background:#00e5ff;"></span>
              <span id="lbl-outfit-chrono_cyber">Chrono Cyber Neon</span>
            </button>
            <button id="btn-outfit-cobra_strike" class="wardrobe-btn" data-outfit="cobra_strike">
              <span class="swatch-dot" style="background:#ef4444;"></span>
              <span id="lbl-outfit-cobra_strike">Cobra Red Hoodie</span>
            </button>
            <button id="btn-outfit-alok_vip" class="wardrobe-btn" data-outfit="alok_vip">
              <span class="swatch-dot" style="background:#f8fafc;"></span>
              <span id="lbl-outfit-alok_vip">DJ Alok VIP White</span>
            </button>
          </div>

          <!-- Dance Emote Panel -->
          <div class="side-panel" id="lobby-emote-panel">
            <div class="panel-title" id="lbl-emote-title">DANCE EMOTES [B]</div>
            <button id="btn-emote-booyah_dance" class="wardrobe-btn" data-emote="booyah_dance">
              <span>🕺</span>
              <span id="lbl-emote-booyah_dance">Booyah Shuffle [B]</span>
            </button>
            <button id="btn-emote-cobra_wave" class="wardrobe-btn" data-emote="cobra_wave">
              <span>🌀</span>
              <span id="lbl-emote-cobra_wave">360 Hip-Hop Spin [N]</span>
            </button>
            <button id="btn-emote-laugh_taunt" class="wardrobe-btn" data-emote="laugh_taunt">
              <span>💪</span>
              <span id="lbl-emote-laugh_taunt">Champion Flex [M]</span>
            </button>
          </div>
        </div>

        <div id="wardrobe-modal">
          <div class="wd-head">
            <span>ตู้เสื้อผ้า · WARDROBE</span>
            <button id="btn-close-wardrobe" class="wd-close">✕</button>
          </div>
          <div class="wd-tabs" id="wd-tabs"></div>
          <div class="wd-body" id="wd-body"></div>
        </div>

        <div class="lobby-footer">
          <div class="controls-panel" id="ui-controls-help"></div>
          <div class="lobby-actions" style="display:flex;gap:10px;align-items:center">
            <button id="btn-online" class="ff-btn" style="background:linear-gradient(135deg,#4fc3f7,#0288d1);box-shadow:0 8px 24px rgba(2,136,209,.45)">ONLINE</button>
            <button id="btn-start-match" class="ff-btn">START MATCH</button>
          </div>
        </div>
      </div>

      <!-- IN-GAME HUD -->
      <div id="hud-screen" class="ff-screen">
        <!-- 2X / 4X Scope Zoom Overlay -->
        <div id="scope-overlay">
          <div id="scope-lens-ring" class="scope-lens">
            <div class="scope-line-h"></div>
            <div class="scope-line-v"></div>
            <div id="scope-zoom-badge" class="scope-badge">2.0X SCOPE</div>
          </div>
        </div>

        <div class="hud-top-left">
          <canvas id="minimap-canvas" width="152" height="152"></canvas>
        </div>

        <div id="poi-labels-layer"></div>
        <div id="bot-hp-layer"></div>

        <div class="hud-top-center">
          <div id="hud-compass">NW · 330 · 345 · N · 15 · 30 · NE · 60 · 75 · E</div>
          <div class="zone-badge" id="hud-zone-status">⏳ เขตปลอดภัยจะลดลงใน 00:25</div>
          <div id="drop-banner-wrap">
            <div id="drop-banner-text" style="font-size:13px; font-weight:800; color:#ffd600;"></div>
            <button id="btn-eject" class="ff-btn" style="padding:8px 22px; font-size:14px;">JUMP / SKYDIVE [F]</button>
          </div>
          <div id="outside-zone-alert">OUTSIDE SAFE ZONE!</div>
          <div id="kill-feed"></div>
        </div>

        <div class="hud-top-right">
          <div class="counter-badge">
            <span class="txt" id="lbl-alive">ALIVE</span>
            <span class="num" id="hud-alive">7</span>
          </div>
          <div class="counter-badge">
            <span class="txt" id="lbl-kills">KILLS</span>
            <span class="num" id="hud-kills">0</span>
          </div>
        </div>

        <div id="crosshair-wrap">
          <div class="ch-ring"></div>
          <div class="ch-dot"></div>
        </div>

        <div id="damage-layer"></div>

        <div class="hud-bottom-center">
          <div class="bar-row ep-row">
            <span style="color:#fde047;">EP</span>
            <span id="hud-ep-text" style="color:#fde047;">120 / 200</span>
          </div>
          <div class="bar-track ep-track"><div id="ep-fill"></div></div>
          <div class="bar-row sh-row">
            <span style="color:#38bdf8;">เกราะ</span>
            <span id="hud-shield-text" style="color:#38bdf8;">75 / 150</span>
          </div>
          <div class="bar-track sh-track"><div id="shield-fill"></div></div>
          <div class="bar-row hp-row" style="font-size:13px;">
            <span style="color:#00e676;">เลือด</span>
            <span id="hud-hp-text" style="color:#ffffff; font-size:14px;">200 / 200</span>
          </div>
          <div class="bar-track hp-track"><div id="hp-fill"></div></div>
        </div>

        <div class="hud-bottom-right">
          <button id="btn-hud-emote" class="util-btn emote" aria-label="Emote">
            <span class="ico-wrap" style="color:#facc15;">${zv(`emote`)}</span>
            <div class="util-lbl" style="font-size:10px; color:#facc15; font-weight:800;">DANCE [B]</div>
            <div class="util-val" style="font-size:16px; font-weight:900;">🕺</div>
          </button>
          <button id="btn-scope" class="util-btn scope" aria-label="Scope">
            <span class="ico-wrap" style="color:#c084fc;">${zv(`scope`)}</span>
            <div class="util-lbl" style="font-size:10px; color:#c084fc; font-weight:800;">SCOPE [X]</div>
            <div class="util-val" style="font-size:13px; font-weight:900;" id="hud-scope-label">1X IRON</div>
          </button>
          <button id="btn-gloo" class="util-btn gloo">
            <div style="font-size:10px; color:#00e5ff; font-weight:800;">GLOO [G/Q]</div>
            <div style="font-size:18px; font-weight:900;" id="hud-gloo-count">2</div>
          </button>
          <button id="btn-medkit" class="util-btn medkit">
            <div style="font-size:10px; color:#00e676; font-weight:800;">MEDKIT [4/E]</div>
            <div style="font-size:18px; font-weight:900;" id="hud-medkit-count">2</div>
          </button>
          <button id="btn-vehicle" class="util-btn" style="display:none; background:rgba(234, 179, 8, 0.25); border:1.5px solid #facc15; color:#fef08a;">
            <div style="font-size:10px; font-weight:800;" id="hud-veh-title">VEHICLE [E]</div>
            <div style="font-size:13px; font-weight:900;" id="hud-veh-action">DRIVE</div>
          </button>
          <button id="btn-slot-1" class="weapon-card active">
            <div class="wc-lbl" style="font-size:10px; color:#94a3b8;">[1]<span class="wc-word"> PRIMARY</span></div>
            <div class="wc-name" style="font-size:15px; font-weight:900; color:#ffd600;" id="hud-w1-name">M4A1</div>
            <div class="wc-ammo" style="font-size:12px;" id="hud-w1-ammo">30 / 120</div>
          </button>
          <button id="btn-slot-2" class="weapon-card">
            <div class="wc-lbl" style="font-size:10px; color:#94a3b8;">[2]<span class="wc-word"> SECONDARY</span></div>
            <div class="wc-name" style="font-size:15px; font-weight:900; color:#ffd600;" id="hud-w2-name">MP40</div>
            <div class="wc-ammo" style="font-size:12px;" id="hud-w2-ammo">28 / 112</div>
          </button>
        </div>

        <!-- MOBILE TOUCH CONTROLS LAYER (stick, fire, jump, crouch, prone, reload, scope, ice wall, heal) -->
        <div id="mobile-touch-layer">
          <div id="touch-look-zone"></div>
          <div id="touch-joystick-zone">
            <div id="touch-joystick-knob"></div>
          </div>
          <button id="touch-btn-fire-left" class="touch-action-btn" aria-label="Fire">${zv(`fire`)}</button>
          <button id="touch-btn-gloo" class="touch-action-btn" aria-label="Ice wall">${zv(`gloo`)}</button>
          <button id="touch-btn-medkit" class="touch-action-btn" aria-label="Heal">${zv(`heal`)}</button>
          <button id="touch-btn-fire" class="touch-action-btn tb" aria-label="Fire">${zv(`fire`)}</button>
          <button id="touch-btn-ads" class="touch-action-btn tb" aria-label="Scope">${zv(`scope`)}</button>
          <button id="touch-btn-jump" class="touch-action-btn tb" aria-label="Jump">${zv(`jump`)}</button>
          <button id="touch-btn-crouch" class="touch-action-btn tb" aria-label="Crouch">${zv(`crouch`)}</button>
          <button id="touch-btn-prone" class="touch-action-btn tb" aria-label="Prone">${zv(`prone`)}</button>
          <div id="touch-sprint-lock">SPRINT LOCK</div>
          <button id="touch-btn-reload" class="touch-action-btn tb" aria-label="Reload">${zv(`reload`)}</button>
          <button id="touch-btn-vehicle" class="touch-action-btn tb" style="display:none;" aria-label="Vehicle">
            <span id="touch-veh-label">DRIVE</span>
          </button>
        </div>
      </div>

      <!-- PAUSE MODAL -->
      <div id="pause-screen" class="ff-screen modal-overlay">
        <div class="result-box">
          <h2 id="ui-pause-title" style="margin-top:0; color:#ffd600;">MATCH PAUSED</h2>
          <div style="display:flex; flex-direction:column; gap:10px; margin-top:18px;">
            <button id="btn-resume" class="ff-btn">RESUME MATCH</button>
            <button id="btn-motion-toggle" class="ff-btn-secondary">REDUCED MOTION: OFF</button>
            <button id="btn-pause-restart" class="ff-btn-secondary">RESTART MATCH</button>
            <button id="btn-pause-lobby" class="ff-btn-secondary">RETURN TO LOBBY</button>
          </div>
        </div>
      </div>

      <!-- RESULT OVERLAY (BOOYAH / ELIMINATED) -->
      <div id="result-screen" class="ff-screen modal-overlay">
        <div class="result-box">
          <h1 id="result-banner" class="booyah-banner">BOOYAH!</h1>
          <div id="result-rank" style="font-size:18px; font-weight:800; color:#e2e8f0;">RANK #1 / 7</div>
          <div class="stats-grid">
            <div><span style="color:#94a3b8; font-size:12px;">ELIMINATIONS</span><div id="res-kills" style="font-size:22px; font-weight:900; color:#ffd600;">0</div></div>
            <div><span style="color:#94a3b8; font-size:12px;">HEADSHOTS</span><div id="res-headshots" style="font-size:22px; font-weight:900; color:#ff1744;">0</div></div>
            <div><span style="color:#94a3b8; font-size:12px;">DAMAGE DEALT</span><div id="res-damage" style="font-size:22px; font-weight:900; color:#00e5ff;">0</div></div>
            <div><span style="color:#94a3b8; font-size:12px;">SURVIVAL TIME</span><div id="res-time" style="font-size:22px; font-weight:900; color:#00e676;">0s</div></div>
          </div>
          <div style="display:flex; gap:12px; justify-content:center;">
            <button id="btn-play-again" class="ff-btn">PLAY AGAIN</button>
            <button id="btn-result-lobby" class="ff-btn-secondary">LOBBY</button>
          </div>
        </div>
      </div>
    `;let e=this.root.querySelector(`#minimap-canvas`);e&&(this.minimapCtx=e.getContext(`2d`)),this.root.querySelector(`#btn-online`)?.addEventListener(`click`,()=>this.handlers.onOpenOnline?.()),this.root.querySelector(`#btn-start-match`)?.addEventListener(`click`,()=>this.handlers.onStartMatch()),this.root.querySelector(`#btn-play-again`)?.addEventListener(`click`,()=>this.handlers.onRestartMatch()),this.root.querySelector(`#btn-result-lobby`)?.addEventListener(`click`,()=>this.handlers.onReturnLobby()),this.root.querySelector(`#btn-resume`)?.addEventListener(`click`,()=>this.handlers.onResumeMatch()),this.root.querySelector(`#btn-pause-restart`)?.addEventListener(`click`,()=>this.handlers.onRestartMatch()),this.root.querySelector(`#btn-pause-lobby`)?.addEventListener(`click`,()=>this.handlers.onReturnLobby()),this.root.querySelector(`#btn-locale`)?.addEventListener(`click`,()=>this.handlers.onToggleLocale()),this.root.querySelector(`#btn-mute`)?.addEventListener(`click`,()=>this.handlers.onToggleMute()),this.root.querySelector(`#btn-gfx`)?.addEventListener(`click`,()=>this.handlers.onCycleGraphics?.()),this.root.querySelector(`#btn-sens`)?.addEventListener(`click`,()=>this.handlers.onCycleSensitivity?.()),this.root.querySelector(`#btn-aimassist`)?.addEventListener(`click`,()=>this.handlers.onCycleAimAssist?.()),this.root.querySelector(`#btn-shadows`)?.addEventListener(`click`,()=>this.handlers.onToggleShadows?.()),this.root.querySelector(`#btn-lightfx`)?.addEventListener(`click`,()=>this.handlers.onToggleLightingEffects?.()),this.root.querySelector(`#btn-motion-toggle`)?.addEventListener(`click`,()=>this.handlers.onToggleReducedMotion()),this.root.querySelector(`#btn-gloo`)?.addEventListener(`click`,()=>this.handlers.onDeployGloo()),this.root.querySelector(`#btn-medkit`)?.addEventListener(`click`,()=>this.handlers.onUseMedkit()),this.root.querySelector(`#btn-slot-1`)?.addEventListener(`click`,()=>this.handlers.onSelectSlot(0)),this.root.querySelector(`#btn-slot-2`)?.addEventListener(`click`,()=>this.handlers.onSelectSlot(1)),this.root.querySelector(`#btn-scope`)?.addEventListener(`click`,()=>this.handlers.onCycleScope()),this.root.querySelector(`#btn-hud-emote`)?.addEventListener(`click`,()=>this.handlers.onTriggerEmote(`booyah_dance`)),this.root.querySelector(`#btn-eject`)?.addEventListener(`click`,()=>this.handlers.onEjectOrParachute()),this.root.querySelector(`#btn-mobile-mode`)?.addEventListener(`click`,()=>{this.setMobileMode(!this.mobileMode)}),this.bindMobileTouchEvents(),this.root.querySelector(`#btn-open-wardrobe`)?.addEventListener(`click`,()=>this.openWardrobe()),this.root.querySelector(`#btn-close-wardrobe`)?.addEventListener(`click`,()=>{this.root.querySelector(`#wardrobe-modal`)?.classList.remove(`open`)}),this.root.querySelector(`#wardrobe-modal`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-wd-kind],[data-wd-tab],[data-wd-weapon]`);t&&(t.dataset.wdTab?this.wardrobeTab=t.dataset.wdTab:t.dataset.wdWeapon?this.wardrobeWeapon=t.dataset.wdWeapon:t.dataset.wdKind&&t.dataset.wdId&&this.handlers.onWardrobeChange?.(t.dataset.wdKind,t.dataset.wdId,this.wardrobeWeapon),this.renderWardrobe())});for(let e of dp)this.root.querySelector(`#btn-outfit-${e}`)?.addEventListener(`click`,()=>{this.handlers.onSelectOutfit(e)});for(let e of fp)this.root.querySelector(`#btn-emote-${e}`)?.addEventListener(`click`,()=>{this.handlers.onTriggerEmote(e)})}bindMobileTouchEvents(){let e=this.root.querySelector(`#touch-joystick-zone`),t=this.root.querySelector(`#touch-joystick-knob`);if(e&&t){let n=null,r=(n,r)=>{let o=e.getBoundingClientRect(),c=o.left+o.width/2,l=o.top+o.height/2,u=n-c,d=r-l,f=Math.hypot(u,d);f>46&&(u=u/f*46,d=d/f*46),t.style.transform=`translate(${u.toFixed(1)}px, ${d.toFixed(1)}px)`;let p=u/46,m=-d/46;m>.92&&Math.abs(p)<.35?(i===0&&(i=performance.now()),!a&&performance.now()-i>500&&s(!0)):(i=0,a&&m<.5&&s(!1));let h=pm(p,m);this.handlers.onTouchMove?.(h.x,h.z,a||m>.65)},i=0,a=!1,o=this.root.querySelector(`#touch-sprint-lock`),s=e=>{a=e,o?.classList.toggle(`on`,e)},c=e=>{(n===null||e.pointerId===n)&&(n=null,i=0,a?(t.style.transform=`translate(0px, -46px)`,this.handlers.onTouchMove?.(0,1,!0)):(t.style.transform=`translate(0px, 0px)`,this.handlers.onTouchMove?.(0,0,!1)))};e.addEventListener(`pointerdown`,t=>{if(t.preventDefault(),n===null){n=t.pointerId;try{e.setPointerCapture(t.pointerId)}catch{}r(t.clientX,t.clientY)}}),e.addEventListener(`pointermove`,e=>{e.pointerId===n&&r(e.clientX,e.clientY)}),e.addEventListener(`pointerup`,c),e.addEventListener(`pointercancel`,c),e.addEventListener(`lostpointercapture`,c)}let n=this.root.querySelector(`#touch-look-zone`);if(n){let e=null,t=0,r=0;n.addEventListener(`pointerdown`,i=>{if(i.preventDefault(),e===null){e=i.pointerId;try{n.setPointerCapture(i.pointerId)}catch{}t=i.clientX,r=i.clientY}}),n.addEventListener(`pointermove`,n=>{if(n.pointerId!==e)return;let i=n.clientX-t,a=n.clientY-r;t=n.clientX,r=n.clientY,this.handlers.onTouchLook?.(i,a)});let i=t=>{t.pointerId===e&&(e=null)};n.addEventListener(`pointerup`,i),n.addEventListener(`pointercancel`,i),n.addEventListener(`lostpointercapture`,i)}let r=(e,t)=>{try{e.setPointerCapture(t)}catch{}},i=(e,t)=>{this.root.querySelector(e)?.addEventListener(`pointerdown`,e=>{e.preventDefault(),t()})};for(let e of[`#touch-btn-fire`,`#touch-btn-fire-left`]){let t=this.root.querySelector(e),n=null,i=0,a=0;t?.addEventListener(`pointerdown`,e=>{e.preventDefault(),r(t,e.pointerId),n=e.pointerId,i=e.clientX,a=e.clientY,this.handlers.onFireClick(),this.handlers.onTouchFireHold?.(!0)}),t?.addEventListener(`pointermove`,e=>{if(e.pointerId!==n)return;let t=e.clientX-i,r=e.clientY-a;i=e.clientX,a=e.clientY,this.handlers.onTouchLook?.(t,r)});let o=()=>{n=null,this.handlers.onTouchFireHold?.(!1)};t?.addEventListener(`pointerup`,o),t?.addEventListener(`pointercancel`,o),t?.addEventListener(`lostpointercapture`,o)}i(`#touch-btn-gloo`,()=>this.handlers.onDeployGloo()),i(`#touch-btn-medkit`,()=>this.handlers.onUseMedkit()),i(`#touch-btn-ads`,()=>{this.handlers.onToggleAds?this.handlers.onToggleAds():this.handlers.onCycleScope()}),i(`#touch-btn-jump`,()=>{this.handlers.onJump?this.handlers.onJump():this.handlers.onEjectOrParachute()}),i(`#touch-btn-crouch`,()=>this.handlers.onToggleCrouch?.()),i(`#touch-btn-prone`,()=>this.handlers.onToggleProne?.()),i(`#touch-btn-reload`,()=>this.handlers.onReload?.());for(let[e,t]of[[`#btn-slot-1`,0],[`#btn-slot-2`,1]])this.root.querySelector(e)?.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&(e.preventDefault(),this.handlers.onSelectSlot(t))});this.root.querySelector(`#btn-vehicle`)?.addEventListener(`click`,()=>this.handlers.onToggleVehicle?.()),i(`#touch-btn-vehicle`,()=>this.handlers.onToggleVehicle?.())}render(e,t,n){let r=t.settings.locale;this.lastStatus!==e.status&&(this.lastStatus=e.status,this.setScreenActive(`#lobby-screen`,e.status===`lobby`),this.setScreenActive(`#hud-screen`,e.status===`playing`),this.setScreenActive(`#pause-screen`,e.status===`paused`),this.setScreenActive(`#result-screen`,e.status===`won`||e.status===`lost`)),this.setText(`#ui-title`,Vv(r,`title`)),this.setText(`#ui-subtitle`,Vv(r,`subtitle`)),this.setText(`#btn-start-match`,Vv(r,`start_match`)),this.setText(`#ui-controls-help`,Vv(r,`controls_help`)),this.setText(`#lbl-alive`,Vv(r,`alive`)),this.setText(`#lbl-kills`,Vv(r,`kills`)),this.setText(`#btn-play-again`,Vv(r,`play_again`)),this.setText(`#btn-result-lobby`,Vv(r,`return_lobby`)),this.setText(`#ui-pause-title`,Vv(r,`pause_title`)),this.setText(`#btn-resume`,Vv(r,`resume`)),this.setText(`#lbl-wardrobe-title`,Vv(r,`wardrobe_title`)),this.setText(`#lbl-emote-title`,Vv(r,`emote_title`)),this.setText(`#btn-mute`,`SOUND: ${t.settings.muted?`OFF`:`ON`}`);let i=(this.handlers.getGraphicsPreset?.()??`low`).toUpperCase();this.setText(`#btn-gfx`,t.settings.graphics===`auto`?`GRAPHICS: AUTO (${i})`:`GRAPHICS: ${i}`),this.setText(`#btn-sens`,`SENSITIVITY: ${t.settings.lookSensitivity.toFixed(2).replace(/0$/,``)}x`),this.setText(`#btn-aimassist`,`AIM ASSIST: ${t.settings.aimAssist.toUpperCase()}`),this.setText(`#btn-shadows`,`SHADOWS: ${t.settings.shadows?`ON`:`OFF`}`),this.setText(`#btn-lightfx`,`LIGHT FX: ${t.settings.lightingEffects?`ON`:`OFF`}`),this.setText(`#btn-motion-toggle`,`REDUCED MOTION: ${t.settings.reducedMotion?`ON`:`OFF`}`);for(let t of dp){let n=up[t];this.setText(`#lbl-outfit-${t}`,Vv(r,n.nameKey)),this.root.querySelector(`#btn-outfit-${t}`)?.classList.toggle(`active`,e.player.outfitId===t)}for(let t of fp)this.setText(`#lbl-emote-${t}`,Vv(r,`emote_${t}`)),this.root.querySelector(`#btn-emote-${t}`)?.classList.toggle(`active`,e.player.activeEmote===t);if(this.setText(`#career-booyahs`,String(t.booyahs)),this.setText(`#career-kills`,String(t.totalKills)),this.setText(`#career-matches`,String(t.matchesPlayed)),e.status===`playing`){this.setText(`#hud-alive`,String(e.aliveCount)),this.setText(`#hud-kills`,String(e.player.kills));let t=Math.floor(Math.max(0,e.safeZone.phaseTimer)/60),i=Math.ceil(Math.max(0,e.safeZone.phaseTimer)%60),a=`${String(t).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`,o=e.safeZone.isShrinking?`⚠️ ${Vv(r,`safe_zone_shrinking`)} ${a}`:`⏳ เขตปลอดภัยจะลดลงใน ${a}`;this.setText(`#hud-zone-status`,o);let s=(-e.player.yaw*180/Math.PI%360+360)%360,c=[`N`,`15`,`30`,`NE`,`60`,`75`,`E`,`105`,`120`,`SE`,`150`,`165`,`S`,`195`,`210`,`SW`,`240`,`255`,`W`,`285`,`300`,`NW`,`330`,`345`],l=Math.round(s/15)%c.length,u=[];for(let e=-4;e<=4;e++){let t=(l+e+c.length)%c.length;u.push(e===0?`📍[${c[t]}]`:c[t])}this.setText(`#hud-compass`,u.join(` · `));let d=this.root.querySelector(`#drop-banner-wrap`),f=this.root.querySelector(`#btn-eject`);if(d){let t=e.player.dropPhase!==`grounded`;if(d.style.display=t?`flex`:`none`,t){let t=e.player.dropPhase===`airplane`?`airplane_banner`:e.player.dropPhase===`skydive`?`skydive_banner`:`parachute_banner`;this.setText(`#drop-banner-text`,`${Vv(r,t)} (ALT: ${Math.round(e.player.position.y)}m)`),f&&(f.style.display=e.player.dropPhase===`parachute`?`none`:`inline-block`,f.textContent=Vv(r,`eject_btn`))}}let p=this.root.querySelector(`#outside-zone-alert`);p&&(p.style.display=e.playerOutsideZone?`block`:`none`,p.textContent=Vv(r,`outside_zone_warning`));let m=e.player.activeScope===`4x`&&e.player.hasScope4x?`scope_4x`:e.player.activeScope===`2x`&&e.player.hasScope2x?`scope_2x`:`scope_none`;this.setText(`#hud-scope-label`,Vv(r,m));let h=e.player.dropPhase===`grounded`&&e.player.isAds&&(e.player.activeScope===`2x`&&e.player.hasScope2x||e.player.activeScope===`4x`&&e.player.hasScope4x),g=this.root.querySelector(`#scope-overlay`),_=this.root.querySelector(`#scope-lens-ring`);g&&g.classList.toggle(`active`,h),_&&_.classList.toggle(`scope-4x`,e.player.activeScope===`4x`),this.setText(`#scope-zoom-badge`,e.player.activeScope===`4x`?`4.0X THERMAL MARKSMAN`:`2.0X TACTICAL ACOG`);let v=this.root.querySelector(`#crosshair-wrap`);v&&v.classList.toggle(`locked`,e.aimState.targetLocked);let y=Math.max(0,Math.min(100,e.player.hp/e.player.maxHp*100)),b=e.player.ep??120,x=e.player.maxEp??200,S=Math.max(0,Math.min(100,b/x*100)),C=Math.max(0,Math.min(100,e.player.shield/e.player.maxShield*100));this.setText(`#hud-hp-text`,`${Math.ceil(e.player.hp)} / ${e.player.maxHp}`),this.setText(`#hud-ep-text`,e.player.hp<e.player.maxHp&&b>0?`⚡ +6 HP/s (${Math.ceil(b)} / ${x})`:`${Math.ceil(b)} / ${x}`),this.setText(`#hud-shield-text`,`${Math.ceil(e.player.shield)} / ${e.player.maxShield}`);let w=this.root.querySelector(`#hp-fill`),T=this.root.querySelector(`#ep-fill`),E=this.root.querySelector(`#shield-fill`);w&&(w.style.width=`${y}%`,w.style.background=y>55?`linear-gradient(90deg, #00e676, #84cc16)`:y>25?`linear-gradient(90deg, #f59e0b, #fde047)`:`linear-gradient(90deg, #dc2626, #ff1744)`),T&&(T.style.width=`${S}%`),E&&(E.style.width=`${C}%`),this.setText(`#hud-gloo-count`,String(e.player.glooWallCount)),this.setText(`#hud-medkit-count`,String(e.player.medkitCount));let D=this.root.querySelector(`#btn-vehicle`),O=this.root.querySelector(`#touch-btn-vehicle`);if(e.player.drivingVehicleId){D&&(D.style.display=`block`),O&&(O.style.display=`flex`);let t=Math.round(Math.abs(e.player.drivingVehicleSpeed)*3.6);this.setText(`#hud-veh-title`,`DRIVING (${t} KM/H)`),this.setText(`#hud-veh-action`,`EXIT [E]`),this.setText(`#touch-veh-label`,`EXIT`)}else e.nearbyVehicleId?(D&&(D.style.display=`block`),O&&(O.style.display=`flex`),this.setText(`#hud-veh-title`,`VEHICLE [E]`),this.setText(`#hud-veh-action`,`DRIVE`),this.setText(`#touch-veh-label`,`DRIVE`)):(D&&(D.style.display=`none`),O&&(O.style.display=`none`));let k=pp[e.player.weapons[0]]||pp.m4a1,A=pp[e.player.weapons[1]]||pp.mp40;this.setText(`#hud-w1-name`,k.shortName),this.setText(`#hud-w1-ammo`,e.player.activeSlot===0&&e.player.reloadTimer>0?`RELOADING...`:`${e.player.ammoInMag[0]} / ${e.player.reserveAmmo[k.category]??0}`),this.setText(`#hud-w2-name`,A.shortName),this.setText(`#hud-w2-ammo`,e.player.activeSlot===1&&e.player.reloadTimer>0?`RELOADING...`:`${e.player.ammoInMag[1]} / ${e.player.reserveAmmo[A.category]??0}`),this.root.querySelector(`#btn-slot-1`)?.classList.toggle(`active`,e.player.activeSlot===0),this.root.querySelector(`#btn-slot-2`)?.classList.toggle(`active`,e.player.activeSlot===1);let j=this.root.querySelector(`#kill-feed`);j&&(j.innerHTML=e.killFeed.slice(0,3).map(e=>`<div class="kill-item">${e.killerName} [${e.weaponName}${e.isHeadshot?` HEADSHOT`:``}] ${e.victimName}</div>`).join(``)),this.renderPoiDropLabels(e,n),this.renderBotHealthBars(e,n),this.renderDamagePopups(e,n),this.renderMinimap(e)}if(e.status===`won`||e.status===`lost`){let t=this.root.querySelector(`#result-banner`);t&&(t.textContent=e.status===`won`?Vv(r,`booyah_title`):Vv(r,`eliminated_title`),t.classList.toggle(`lost`,e.status===`lost`)),this.setText(`#result-rank`,`RANK #${e.playerRank} / ${e.bots.length+e.players.length}`),this.setText(`#res-kills`,String(e.player.kills)),this.setText(`#res-headshots`,String(e.player.headshots)),this.setText(`#res-damage`,String(Math.round(e.player.damageDealt))),this.setText(`#res-time`,`${Math.round(e.matchTime)}s`)}}renderPoiDropLabels(e,t){let n=this.root.querySelector(`#poi-labels-layer`);if(!n)return;if(e.player.dropPhase===`grounded`){n.innerHTML!==``&&(n.innerHTML=``);return}let r=[[`สวนสนุก (Theme Park)`,-28,22,-55],[`หอนาฬิกา (Clock Tower)`,0,16,0],[`โพชิน็อก (Pochinok)`,0,18,420],[`พีค (Peak)`,420,18,-360],[`โรงงาน (Factory)`,-440,18,-280]],i=new V,a=[];for(let[e,n,o,s]of r){if(i.set(n,o,s),i.project(t),i.z>1||i.z<-1)continue;let r=(i.x*.5+.5)*100,c=(-i.y*.5+.5)*100;r<8||r>92||c<12||c>85||a.push(`<div class="poi-sky-banner" style="left:${r.toFixed(1)}%; top:${c.toFixed(1)}%;">${e}</div>`)}n.innerHTML=a.join(``)}renderBotHealthBars(e,t){let n=this.root.querySelector(`#bot-hp-layer`);if(!n)return;if(e.player.dropPhase!==`grounded`){n.innerHTML!==``&&(n.innerHTML=``);return}let r=new V,i=[];for(let n of e.bots){if(n.hp<=0||Math.hypot(n.position.x-e.player.position.x,n.position.z-e.player.position.z)>95||(r.set(n.position.x,n.position.y+2.15,n.position.z),r.project(t),r.z>1||r.z<-1))continue;let a=(r.x*.5+.5)*100,o=(-r.y*.5+.5)*100;if(a<5||a>95||o<8||o>88)continue;let s=Math.max(0,Math.min(100,n.hp/n.maxHp*100));i.push(`<div class="bot-hp-tag" style="left:${a.toFixed(1)}%; top:${o.toFixed(1)}%;"><div class="bot-hp-name"><span>🎯 ${n.name}</span><span style="color:#fde047;">❤️ ${Math.ceil(n.hp)}/${n.maxHp}</span></div><div class="bot-hp-track"><div class="bot-hp-fill" style="width:${s.toFixed(0)}%;"></div></div></div>`)}n.innerHTML=i.join(``)}renderDamagePopups(e,t){let n=this.root.querySelector(`#damage-layer`);if(!n)return;if(e.damagePopups.length===0){n.innerHTML!==``&&(n.innerHTML=``);return}let r=new V,i=[];for(let n of e.damagePopups){if(r.set(n.worldX,n.worldY,n.worldZ),r.project(t),r.z>1)continue;let e=(r.x*.5+.5)*100,a=(-r.y*.5+.5)*100,o=n.isHeadshot?`dmg-popup dmg-head`:`dmg-popup dmg-body`,s=n.isHeadshot?`[HEAD] ${n.amount}`:`${n.amount}`;i.push(`<div class="${o}" style="left:${e.toFixed(1)}%; top:${a.toFixed(1)}%;">${s}</div>`)}n.innerHTML=i.join(``)}renderMinimap(e){let t=this.minimapCtx;if(!t)return;let n=76/$.islandHalfSize;t.clearRect(0,0,152,152),t.fillStyle=`#0c2438`,t.fillRect(0,0,152,152),t.fillStyle=`#4c7c34`,t.fillRect(6,6,140,140),t.strokeStyle=`#c8b08a`,t.lineWidth=6,t.beginPath(),t.moveTo(6,76+260*n),t.bezierCurveTo(76-480*n,76+180*n,76-220*n,76-135*n,76,76-95*n),t.bezierCurveTo(76+240*n,76-55*n,76+560*n,76-240*n,146,76-190*n),t.stroke(),t.strokeStyle=`#38bdf8`,t.lineWidth=3.5,t.stroke(),t.strokeStyle=`#d1d5db`,t.lineWidth=1.4,t.beginPath(),t.moveTo(76,6),t.lineTo(76,146),t.moveTo(6,76),t.lineTo(146,76),t.stroke(),t.fillStyle=`#f59e0b`;for(let e of bp){let r=76+e.x*n,i=76+e.z*n;t.fillRect(r-1.5,i-1.5,3,3)}e.player.dropPhase!==`grounded`&&(t.strokeStyle=`rgba(255, 255, 255, 0.75)`,t.setLineDash([4,3]),t.lineWidth=1.5,t.beginPath(),t.moveTo(76-180*n,76+190*n),t.lineTo(76+720*n,76-710*n),t.stroke(),t.setLineDash([])),t.strokeStyle=e.safeZone.isShrinking?`#ff6d00`:`#ffffff`,t.lineWidth=2,t.beginPath(),t.arc(76+e.safeZone.centerX*n,76+e.safeZone.centerZ*n,Math.max(2,e.safeZone.currentRadius*n),0,Math.PI*2),t.stroke();for(let r of e.bots)r.hp<=0||(t.fillStyle=`#ff1744`,t.beginPath(),t.arc(76+r.position.x*n,76+r.position.z*n,3,0,Math.PI*2),t.fill());t.fillStyle=`#facc15`;for(let r of e.vehicles){let e=76+r.x*n,i=76+r.z*n;t.fillRect(e-2,i-2,4,4)}t.fillStyle=`#ffd600`,t.beginPath(),t.arc(76+e.player.position.x*n,76+e.player.position.z*n,4,0,Math.PI*2),t.fill()}setScreenActive(e,t){let n=this.root.querySelector(e);n&&n.classList.toggle(`active`,t)}setText(e,t){let n=this.root.querySelector(e);n&&n.textContent!==t&&(n.textContent=t)}},Wv={sprint:1,jump:2,crouch:4,prone:8,fireHeld:16,fireJust:32,ads:64,reload:128,gloo:256,medkit:512,interact:1024,slot1:2048,slot2:4096,slot3:8192,scope:16384,emote1:32768,emote2:65536,emote3:1<<17};function Gv(e,t,n){let r=0;return n.sprint&&(r|=Wv.sprint),n.jumpPressed&&(r|=Wv.jump),n.crouchToggled&&(r|=Wv.crouch),n.proneToggled&&(r|=Wv.prone),n.fireHeld&&(r|=Wv.fireHeld),n.fireJustPressed&&(r|=Wv.fireJust),n.adsHeld&&(r|=Wv.ads),n.reloadPressed&&(r|=Wv.reload),n.glooPressed&&(r|=Wv.gloo),n.medkitPressed&&(r|=Wv.medkit),n.interactPressed&&(r|=Wv.interact),n.slot1Pressed&&(r|=Wv.slot1),n.slot2Pressed&&(r|=Wv.slot2),n.slot3Pressed&&(r|=Wv.slot3),n.cycleScopePressed&&(r|=Wv.scope),n.emote1Pressed&&(r|=Wv.emote1),n.emote2Pressed&&(r|=Wv.emote2),n.emote3Pressed&&(r|=Wv.emote3),{t:`input`,seq:e,tick:t,mx:n.moveX,mz:n.moveZ,dy:n.lookDeltaYaw,dp:n.lookDeltaPitch,b:r}}function Kv(e){return JSON.stringify(e)}var qv=class{handlers;makeSocket;ws=null;opened=!1;constructor(e,t=e=>new WebSocket(e)){this.handlers=e,this.makeSocket=t}get isOpen(){return this.ws?.readyState===1}connect(e){return this.close(),new Promise((t,n)=>{let r=!1,i;try{i=this.makeSocket(e)}catch(e){n(e instanceof Error?e:Error(`connect failed`));return}this.ws=i,this.opened=!1,i.onopen=()=>{this.opened=!0,r=!0,t()},i.onmessage=e=>{if(typeof e.data==`string`)try{this.handlers.onMessage(JSON.parse(e.data))}catch{}},i.onclose=e=>{this.ws===i&&(this.ws=null),r||(r=!0,n(Error(`Could not reach the server`))),this.handlers.onClose({code:e.code,reason:e.reason,wasOpen:this.opened})},i.onerror=()=>{}})}send(e){this.ws&&this.ws.readyState===1&&this.ws.send(Kv(e))}close(){let e=this.ws;if(this.ws=null,e){e.onclose=null,e.onmessage=null;try{e.close(1e3,`leave`)}catch{}}}};function Jv(e){let t=e.trim();if(!t)return null;let n=t;/^https?:\/\//i.test(n)?n=n.replace(/^http/i,`ws`):/^wss?:\/\//i.test(n)||(n=`wss://${n}`);try{let e=new URL(n),t=e.hostname===`localhost`||e.hostname===`127.0.0.1`||e.hostname===`[::1]`||/^192\.168\./.test(e.hostname)||/^10\./.test(e.hostname);return e.protocol===`ws:`&&!t&&(n=n.replace(/^ws:/i,`wss:`)),n}catch{return null}}var Yv=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),Xv=`
#online-screen{position:fixed;inset:0;z-index:60;pointer-events:auto;display:none;align-items:center;justify-content:center;background:rgba(5,10,20,.82);font-family:inherit;color:#fff}
#online-screen.open{display:flex}
#online-screen .on-panel{width:min(440px,92vw);max-height:92vh;overflow:auto;background:#101c2e;border:2px solid #ffd600;border-radius:10px;padding:16px 18px;box-shadow:0 12px 40px rgba(0,0,0,.6)}
#online-screen h2{margin:0 0 10px;font-size:20px;letter-spacing:1px;color:#ffd600}
#online-screen label{display:block;margin:8px 0 3px;font-size:12px;opacity:.8}
#online-screen input{width:100%;box-sizing:border-box;padding:9px 10px;border-radius:6px;border:1px solid #3a4d6b;background:#0b1320;color:#fff;font-size:15px}
#online-screen .on-row{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
#online-screen button{flex:1;min-width:110px;padding:10px 12px;border:none;border-radius:6px;font-weight:800;font-size:14px;cursor:pointer;background:#ffd600;color:#0b1320}
#online-screen button.sec{background:#2a3b57;color:#fff}
#online-screen button:disabled{opacity:.45;cursor:default}
#online-screen .on-error{margin-top:10px;color:#ff8a80;font-size:13px;min-height:16px}
#online-screen .on-code{font-size:34px;font-weight:900;letter-spacing:8px;color:#ffd600;text-align:center;margin:6px 0}
#online-screen ul{list-style:none;margin:8px 0;padding:0}
#online-screen li{display:flex;justify-content:space-between;padding:6px 8px;border-bottom:1px solid #243551;font-size:14px}
#online-screen li .rdy{color:#69f0ae}
#online-screen .on-note{font-size:12px;opacity:.7;margin-top:6px}
`,Zv=class{h;prefs;el;opened=!1;busy=!1;constructor(e,t,n){this.h=t,this.prefs=n;let r=document.createElement(`style`);r.textContent=Xv,document.head.appendChild(r),this.el=document.createElement(`div`),this.el.id=`online-screen`,e.appendChild(this.el),this.el.addEventListener(`click`,e=>this.onClick(e))}get isOpen(){return this.opened}open(){this.opened=!0}close(){this.opened=!1,this.el.classList.remove(`open`)}val(e){return(this.el.querySelector(`#${e}`)?.value??``).trim()}onClick(e){let t=e.target?.closest(`button`)?.id;if(t){if(t===`on-create`||t===`on-join`){let e=this.val(`on-url`),n=this.val(`on-name`),r=t===`on-join`?this.val(`on-room`).toUpperCase():``;this.prefs={url:e,name:n,room:r},this.busy=!0,this.h.onConnect(e,n,r||void 0)}else t===`on-back`?this.h.onClose():t===`on-leave`?this.h.onLeave():t===`on-start`?this.h.onStart():t===`on-ready`&&this.h.onReady(this.el.querySelector(`#on-ready`)?.getAttribute(`data-ready`)!==`1`)}}get currentPrefs(){return this.prefs}render(e){let t=this.opened&&e.status!==`playing`;if(this.el.classList.toggle(`open`,t),!t)return;this.busy=e.status===`connecting`;let n=e.status===`lobby`||e.status===`connecting`&&e.room!==``,r=n?`room:${e.room}:${e.players.map(e=>`${e.id}${e.ready}`).join()}:${e.countdown}:${e.hostId}`:`form:${e.status}:${e.error}`;if(this.el.getAttribute(`data-key`)!==r){if(this.el.setAttribute(`data-key`,r),n){let t=e.players.find(t=>t.id===e.myId),n=e.players.map(t=>`<li><span>${Yv(t.name)}${t.id===e.hostId?` &#9733;`:``}${t.id===e.myId?` (you)`:``}</span><span class="${t.ready?`rdy`:``}">${t.ready?`READY`:`...`}</span></li>`).join(``),r=e.countdown>=0;this.el.innerHTML=`<div class="on-panel">
        <h2>ONLINE ROOM</h2>
        <div class="on-note">Share this code with your friends</div>
        <div class="on-code">${Yv(e.room)}</div>
        <ul>${n}</ul>
        <div class="on-note">${r?`Starting in ${e.countdown}...`:`Bots fill the empty slots up to 16 combatants.`}</div>
        <div class="on-row">
          <button id="on-ready" class="sec" data-ready="${+!!t?.ready}" ${r?`disabled`:``}>${t?.ready?`NOT READY`:`READY`}</button>
          <button id="on-start" ${e.isHost&&!r?``:`disabled`}>START</button>
        </div>
        <div class="on-row"><button id="on-leave" class="sec">LEAVE</button></div>
        <div class="on-error">${Yv(e.error)}</div>
      </div>`}else this.el.innerHTML=`<div class="on-panel">
        <h2>PLAY ONLINE</h2>
        <label for="on-name">Name</label>
        <input id="on-name" maxlength="16" value="${Yv(this.prefs.name)}" autocomplete="off">
        <label for="on-url">Server address</label>
        <input id="on-url" placeholder="game.example.com" value="${Yv(this.prefs.url)}" autocomplete="off" autocapitalize="off" spellcheck="false">
        <label for="on-room">Room code (to join)</label>
        <input id="on-room" maxlength="4" placeholder="ABCD" value="${Yv(this.prefs.room)}" autocomplete="off" autocapitalize="characters">
        <div class="on-row">
          <button id="on-create" ${this.busy?`disabled`:``}>${this.busy?`CONNECTING...`:`CREATE ROOM`}</button>
          <button id="on-join" class="sec" ${this.busy?`disabled`:``}>JOIN ROOM</button>
        </div>
        <div class="on-row"><button id="on-back" class="sec">BACK</button></div>
        <div class="on-error">${Yv(e.error)}</div>
      </div>`}}};function Qv(e,t,n){let r=(t-e)%(Math.PI*2);return r>Math.PI&&(r-=Math.PI*2),r<-Math.PI&&(r+=Math.PI*2),e+r*n}function $v(e,t,n){return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n,yaw:Qv(e.yaw,t.yaw,n)}}var ey=class{maxFrames;frames=[];constructor(e=12){this.maxFrames=e}push(e,t){let n=this.frames[this.frames.length-1];n&&e<=n.at||(this.frames.push({at:e,poses:t}),this.frames.length>this.maxFrames&&this.frames.shift())}clear(){this.frames=[]}get size(){return this.frames.length}sample(e,t){let n=this.frames;if(n.length===0)return null;let r=n.length-1;for(;r>0&&n[r].at>t;)r--;let i=n[r],a=n[r+1],o=i.poses.get(e);if(!a)return o?{...o}:null;let s=a.poses.get(e);return o?s?a.at-i.at>500?t>=a.at?{...s}:{...o}:$v(o,s,Math.max(0,Math.min(1,(t-i.at)/Math.max(1,a.at-i.at)))):{...o}:s?{...s}:null}};function ty(e,t,n){e.position.x=t.x,e.position.y=t.y,e.position.z=t.z,e.yaw=t.yaw,e.pitch=t.pitch,e.hp=t.hp,e.shield=t.sh,e.isSprinting=!!(t.f&1),e.isCrouching=!!(t.f&2),e.isProne=!!(t.f&4),e.isAds=!!(t.f&8),e.isGrounded=!!(t.f&16),e.dropPhase=t.drop,e.drivingVehicleId=t.veh,e.kills=t.k,n&&(e.velocity.x=n.vx,e.velocity.y=n.vy,e.velocity.z=n.vz,e.ep=n.ep,e.ammoInMag=[...n.mag],e.reserveAmmo={...n.res},e.activeSlot=n.slot,e.weapons=[...n.weapons],e.glooWallCount=n.gloo,e.medkitCount=n.med,e.reloadTimer=n.rel,e.fireCooldown=n.cd,e.hasScope2x=n.s2,e.hasScope4x=n.s4,e.activeScope=n.scope,n.air&&(e.airplanePos.x=n.air.x,e.airplanePos.y=n.air.y,e.airplanePos.z=n.air.z),e.kills=n.kills,e.headshots=n.hs,e.damageDealt=n.dmg,e.smoothLookYaw=n.sm[0],e.smoothLookPitch=n.sm[1],e.activeEmote=n.em)}function ny(e,t,n,r,i,a){for(;i.length>0&&i[0].seq<=r;)i.shift();let o=e.position.x,s=e.position.z;if(ty(e,t,n),!e.drivingVehicleId)for(let t of i)a(e,t.input);return Math.hypot(e.position.x-o,e.position.z-s)}var ry=1/30,iy=120,ay=`ffm-online-token`,oy={m4a1:`sfx_ar_shot`,mp40:`sfx_smg_shot`,m1887:`sfx_shotgun_shot`,fists:`sfx_smg_shot`};function sy(e){return dp.includes(e)?e:`street_gold`}function cy(e,t){let{position:n,velocity:r,airplanePos:i,airplaneEnd:a,weapons:o,ammoInMag:s,reserveAmmo:c,smoothCamPos:l,smoothCamTarget:u,...d}=t;Object.assign(e,d),Object.assign(e.position,n),Object.assign(e.velocity,r),Object.assign(e.airplanePos,i),Object.assign(e.airplaneEnd,a),e.weapons=[...o],e.ammoInMag=[...s],e.reserveAmmo={...c}}function ly(e){let t={...e,position:{...e.position},velocity:{...e.velocity},airplanePos:{...e.airplanePos},airplaneEnd:{...e.airplaneEnd}};return t.weapons=[...e.weapons],t.ammoInMag=[...e.ammoInMag],t.reserveAmmo={...e.reserveAmmo},t.smoothCamPos=void 0,t.smoothCamTarget=void 0,t}var uy=class{state;hooks;now;status=`idle`;error=``;room=``;myId=``;hostId=``;countdown=-1;players=[];client;token=``;url=``;myName=``;myLook=``;sim;prevPos={x:0,y:0,z:0,yaw:0,pitch:0};seq=0;pending=[];netAccum=0;latched={...mv};errorOffset={x:0,z:0};lastServerTick=0;lastSnapAt=0;bots=new ey;vehicles=new ey;proxies=new Map;names=new Map;templates=new Map;botLooks=new Map;fxCooldown=0;reconnectTries=0;reconnectPending=!1;reconnectTimer=null;leaving=!1;knownLoot=new Set;lootIndex=new Map;matchOver=!1;constructor(e,t,n=()=>performance.now(),r){this.state=e,this.hooks=t,this.now=n,this.client=new qv({onMessage:e=>this.onMessage(e),onClose:e=>this.onClose(e)},r);for(let e of av())this.templates.set(e.id,e)}get inMatch(){return this.status===`playing`}get isHost(){return this.myId!==``&&this.myId===this.hostId}get isReady(){return this.players.find(e=>e.id===this.myId)?.ready??!1}async connect(e,t,n,r){this.leaving=!1,this.error=``,this.status=`connecting`,this.url=e,this.myName=t,this.myLook=n,this.hooks.changed();try{await this.client.connect(e)}catch(e){this.fail(e instanceof Error?e.message:`Could not reach the server`);return}this.client.send({t:`hello`,protocol:1,name:t,look:n,room:r})}setReady(e){this.client.send({t:`ready`,ready:e})}requestStart(){this.client.send({t:`start`})}leave(){this.leaving=!0,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.reconnectPending=!1,this.reconnectTries=0,this.client.send({t:`leave`}),this.client.close(),this.reset()}reset(){this.status=`idle`,this.room=``,this.myId=``,this.players=[],this.countdown=-1,this.pending=[],this.proxies.clear(),this.matchOver=!1;try{sessionStorage.removeItem(ay)}catch{}this.hooks.changed()}fail(e){this.error=e,this.status=`closed`,this.hooks.changed()}onClose(e){this.leaving||this.status===`idle`||(this.status===`playing`&&!this.matchOver&&this.token&&this.reconnectTries<10?this.scheduleReconnect():this.status!==`closed`&&this.fail(this.error||(e.wasOpen?`Connection lost`:`Could not reach the server`)))}scheduleReconnect(){this.reconnectPending||(this.reconnectPending=!0,this.reconnectTries++,this.error=`Reconnecting (${this.reconnectTries})...`,this.hooks.changed(),this.reconnectTimer=setTimeout(async()=>{this.reconnectPending=!1;try{await this.client.connect(this.url),this.client.send({t:`reconnect`,protocol:1,room:this.room,token:this.token})}catch{this.reconnectTries<10?this.scheduleReconnect():this.fail(`Connection lost`)}},Math.min(3e3,500*this.reconnectTries)))}onMessage(e){switch(e.t){case`welcome`:this.myId=e.id,this.token=e.token,this.room=e.room,this.lastServerTick=e.tick,this.reconnectTries>0?(this.reconnectTries=0,this.error=``):this.status===`connecting`&&(this.status=`lobby`);try{sessionStorage.setItem(ay,e.token)}catch{}this.hooks.changed();return;case`lobby`:this.applyLobby(e);return;case`start`:this.beginMatch(e.roster,e.bots);return;case`snapshot`:this.onSnapshot(e);return;case`event`:this.onEvents(e.events);return;case`pong`:return;case`error`:this.error=dy(e.code,e.message),(this.status===`connecting`||this.status===`lobby`)&&(this.status=`closed`),this.hooks.changed();return}}applyLobby(e){this.room=e.room,this.hostId=e.hostId,this.players=e.players,this.countdown=e.countdown;for(let t of e.players)this.names.set(t.id,t.name);this.hooks.changed()}beginMatch(e,t){if(this.status===`playing`)return;this.status=`playing`,this.matchOver=!1,this.players=e;for(let t of e)this.names.set(t.id,t.name);for(let e of this.templates.values())this.names.set(e.id,e.name);this.botLooks.clear();for(let e of t)this.names.set(e.id,e.name),this.botLooks.set(e.id,e.look);let n=e.find(e=>e.id===this.myId);yv(this.state,sy(n?.look??this.myLook)),this.state.player.id=this.myId,this.state.player.name=n?.name??this.myName,this.state.localPlayerId=this.myId,this.state.players=[this.state.player],this.state.bots=[],this.proxies.clear(),this.knownLoot=new Set(this.state.lootItems.map(e=>e.id)),this.lootIndex=new Map(this.state.lootItems.map(e=>[e.id,e])),this.bots.clear(),this.vehicles.clear(),this.sim=ly(this.state.player),this.prevPos={...this.sim.position,yaw:this.sim.yaw,pitch:this.sim.pitch},this.pending=[],this.seq=0,this.netAccum=0,this.latched={...mv},this.errorOffset={x:0,z:0},this.hooks.changed()}proxyFor(e,t,n){let r=this.proxies.get(e);if(r)return r;let i=this.templates.get(e),a=this.players.find(t=>t.id===e),o=i??[...this.templates.values()][0];return r={...o,position:{x:0,y:0,z:0},id:e,name:this.names.get(e)??a?.name??e,persona:a?`Player`:o.persona,outfitId:a?sy(a.look):this.botLooks.has(e)?sy(this.botLooks.get(e)):o.outfitId,hp:t,maxHp:$.maxHp,shield:0,weaponId:n,state:t>0?`LOOT`:`DEAD`},this.proxies.set(e,r),this.state.bots.push(r),r}onSnapshot(e){if(this.status!==`playing`)return;let t=this.now();this.lastSnapAt=t,this.lastServerTick=e.tick;let n=new Map;for(let t of e.bots){n.set(t.id,{x:t.x,y:t.y,z:t.z,yaw:t.yaw});let e=this.proxyFor(t.id,t.hp,t.w);e.hp=t.hp,e.weaponId=t.w}for(let t of e.players){if(t.id===this.myId)continue;n.set(t.id,{x:t.x,y:t.y,z:t.z,yaw:t.yaw});let e=this.proxyFor(t.id,t.hp,t.w);e.hp=t.hp,e.shield=t.sh,e.weaponId=t.w,t.drop!==`grounded`&&(e.position.y=t.y)}if(this.bots.push(t,n),e.vehicles.length){let n=new Map;for(let t of e.vehicles){n.set(t.id,{x:t.x,y:t.y,z:t.z,yaw:t.yaw});let e=this.state.vehicles.find(e=>e.id===t.id);e&&(e.speed=t.sp,e.driverId=t.d)}this.vehicles.push(t,n)}this.state.matchTime=e.time,this.state.aliveCount=e.alive;let r=this.state.safeZone;r.centerX=e.zone.cx,r.centerZ=e.zone.cz,r.currentRadius=e.zone.r,r.targetRadius=e.zone.tr,r.phaseNumber=e.zone.ph,r.isShrinking=e.zone.sh;let i=e.walls.map(e=>({id:e.id,ownerId:e.owner,position:{x:e.x,y:0,z:e.z},yaw:e.yaw,hp:e.hp,maxHp:$.glooWallMaxHp,remainingTime:e.t,aabb:K_({x:e.x,y:0,z:e.z},e.yaw)}));this.state.glooWalls=i;let a=e.players.find(e=>e.id===this.myId);if(a&&this.sim){let t=ny(this.sim,a,e.me,e.ack,this.pending,(e,t)=>this.simulate(e,t));t>0&&t<=1.5?(this.errorOffset.x+=this.prevPos.x-this.sim.position.x,this.errorOffset.z+=this.prevPos.z-this.sim.position.z):t>1.5&&(this.errorOffset={x:0,z:0},this.prevPos={x:this.sim.position.x,y:this.sim.position.y,z:this.sim.position.z,yaw:this.sim.yaw,pitch:this.sim.pitch}),this.state.player.hp=this.sim.hp}}onEvents(e){for(let t of e)switch(t.e){case`hit`:t.from===this.myId&&(this.state.recentEvents.push({attackerId:t.from,attackerName:this.nameOf(t.from),targetId:t.to,targetName:this.nameOf(t.to),amount:t.amount,shieldAbsorbed:0,isHeadshot:t.head,hitPoint:{x:t.x,y:t.y,z:t.z},killed:!1,weaponId:``,weaponName:``}),this.state.damagePopups.push({id:`net_dmg_${this.seq}_${this.state.damagePopups.length}`,amount:t.amount,isHeadshot:t.head,worldX:t.x,worldY:t.y,worldZ:t.z,timeRemaining:.85}),t.head&&this.hooks.headshotFx());break;case`kill`:this.state.killFeed.unshift({id:`net_feed_${this.state.killFeed.length}_${t.from}_${t.to}`,killerName:this.nameOf(t.from),victimName:this.nameOf(t.to),weaponName:t.weapon,isHeadshot:t.head,timeRemaining:6}),this.state.killFeed.length>5&&(this.state.killFeed.length=5);break;case`loot-spawn`:if(!this.knownLoot.has(t.id)){this.knownLoot.add(t.id);let e={id:t.id,zone:`Death Drop`,type:t.type,subType:t.sub,amount:t.amount,position:{x:t.x,y:0,z:t.z},collected:!1,isDeathDrop:!0};this.state.lootItems.push(e),this.lootIndex.set(t.id,e)}break;case`loot`:{let e=this.lootIndex.get(t.id);e&&(e.collected=!0);break}case`result`:t.id===this.myId&&this.finish(t.rank,t.kills,t.damage)}}finish(e,t,n){if(this.matchOver)return;this.matchOver=!0;let r=e===1;this.state.playerRank=e,this.state.player.kills=t,this.state.player.damageDealt=n,this.state.status=r?`won`:`lost`,this.hooks.matchEnded(r),this.hooks.changed()}nameOf(e){return this.names.get(e)??e}simulate(e,t){let n=e.drivingVehicleId!==null;Sh(e,t,[...this.state.buildings.queryCircle(e.position.x,e.position.z,n?16:9),...this.state.glooWalls.map(e=>e.aabb)],ry,Zg().colliders)}latch(e){let t=this.latched;t.moveX=e.moveX,t.moveZ=e.moveZ,t.sprint=e.sprint,t.fireHeld=e.fireHeld,t.adsHeld=e.adsHeld,t.lookDeltaYaw+=e.lookDeltaYaw,t.lookDeltaPitch+=e.lookDeltaPitch,t.jumpPressed||=e.jumpPressed,t.crouchToggled||=e.crouchToggled,t.proneToggled||=e.proneToggled,t.fireJustPressed||=e.fireJustPressed,t.reloadPressed||=e.reloadPressed,t.glooPressed||=e.glooPressed,t.medkitPressed||=e.medkitPressed,t.interactPressed=(t.interactPressed??!1)||(e.interactPressed??!1),t.slot1Pressed||=e.slot1Pressed,t.slot2Pressed||=e.slot2Pressed,t.slot3Pressed||=e.slot3Pressed,t.cycleScopePressed||=e.cycleScopePressed,t.emote1Pressed||=e.emote1Pressed,t.emote2Pressed||=e.emote2Pressed,t.emote3Pressed||=e.emote3Pressed}step(e,t){if(this.sim&&this.status===`playing`){for(this.latch(e),this.netAccum+=t;this.netAccum>=ry;)this.netAccum-=ry,this.netTick();this.updateDisplay(e,t)}}netTick(){let e=this.latched;this.latched={...mv},this.seq++;let t=this.sim.hp>0&&!this.matchOver,n=Gv(this.seq,this.lastServerTick,t?e:{...mv});this.client.send(n),this.pending.push({seq:this.seq,input:e}),this.pending.length>iy&&this.pending.shift(),this.prevPos={x:this.sim.position.x,y:this.sim.position.y,z:this.sim.position.z,yaw:this.sim.yaw,pitch:this.sim.pitch},t&&!this.sim.drivingVehicleId&&this.simulate(this.sim,e)}updateDisplay(e,t){let n=this.state.player,r=Math.min(1,this.netAccum/ry),i=this.sim.drivingVehicleId!==null;cy(n,this.sim),n.position.x=this.prevPos.x+(this.sim.position.x-this.prevPos.x)*r+this.errorOffset.x,n.position.y=this.prevPos.y+(this.sim.position.y-this.prevPos.y)*r,n.position.z=this.prevPos.z+(this.sim.position.z-this.prevPos.z)*r+this.errorOffset.z;let a=Math.exp(-10*t);this.errorOffset.x*=a,this.errorOffset.z*=a,Math.abs(this.errorOffset.x)<.001&&(this.errorOffset.x=0),Math.abs(this.errorOffset.z)<.001&&(this.errorOffset.z=0);let o=this.now()-100;for(let e of this.proxies.values()){let t=this.bots.sample(e.id,o);t&&(e.position.x=t.x,e.position.y=t.y,e.position.z=t.z,e.yaw=t.yaw,e.state=e.hp>0?`ENGAGE`:`DEAD`)}for(let e of this.state.vehicles){let t=this.vehicles.sample(e.id,o);t&&(e.x=t.x,e.y=t.y,e.z=t.z,e.yaw=t.yaw)}if(i){let e=this.state.vehicles.find(e=>e.id===this.sim.drivingVehicleId);e&&(n.position.x=e.x,n.position.y=e.y+.35,n.position.z=e.z)}n.id=this.myId;let s=n.dropPhase===`grounded`&&!n.drivingVehicleId&&n.hp>0,c=n.dropPhase===`grounded`&&!n.drivingVehicleId?M_(this.state.vehicles,n.position.x,n.position.z,4.5):null;if(this.state.nearbyVehicleId=c?c.id:null,s){let e=Wh(n,this.state.buildings);this.state.aimState=Rh(e.origin,e.yaw,e.pitch,Nh(n),this.state.bots,this.state.glooWalls,this.state.buildings)}else this.state.aimState.targetLocked=!1;let l=this.state.safeZone;if(this.state.playerOutsideZone=s&&Math.hypot(n.position.x-l.centerX,n.position.z-l.centerZ)>l.currentRadius,this.fxCooldown>0&&(this.fxCooldown-=t),s&&(e.fireHeld||e.fireJustPressed)&&this.fxCooldown<=0&&n.reloadTimer<=0){let e=n.weapons[n.activeSlot],t=pp[e];t&&(t.category===`MELEE`||n.ammoInMag[n.activeSlot]>0)&&(this.fxCooldown=1/t.fireRate,this.hooks.fireFx(oy[e]||`sfx_ar_shot`))}for(let e=this.state.damagePopups.length-1;e>=0;e--){let n=this.state.damagePopups[e];n.timeRemaining-=t,n.worldY+=t*.9,n.timeRemaining<=0&&this.state.damagePopups.splice(e,1)}for(let e=this.state.killFeed.length-1;e>=0;e--)this.state.killFeed[e].timeRemaining-=t,this.state.killFeed[e].timeRemaining<=0&&this.state.killFeed.splice(e,1)}get snapshotAgeMs(){return this.lastSnapAt?this.now()-this.lastSnapAt:-1}get pendingCount(){return this.pending.length}proxyIds(){return[...this.proxies.keys()]}forceAuthoritative(e){let t=e.players.find(e=>e.id===this.myId);t&&this.sim&&ty(this.sim,t,e.me)}};function dy(e,t){switch(e){case`version`:return`This server runs a different game version. Update the app.`;case`room-not-found`:return`Room not found. Check the code.`;case`room-full`:return`Room is full.`;case`in-progress`:return`That match has already started.`;case`rate-limit`:return`Too many requests. Try again in a moment.`;case`bad-token`:return`Session expired.`;default:return t||`Server error`}}var fy;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(fy||={});var py=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},my=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,hy=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?my(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new py(`"${e}" plugin is not implemented on ${c}`,fy.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new py(`"${e}.${t}()" is not implemented on ${c}`,fy.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=py,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},gy=(e=>e.Capacitor=hy(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),_y=gy.registerPlugin,vy=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(r)r.forEach(e=>e(t));else if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new gy.Exception(e,fy.Unimplemented)}unavailable(e=`not available`){return new gy.Exception(e,fy.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},yy=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),by=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),xy=class extends vy{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=by(n).trim(),r=by(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=yy(e.key),n=yy(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};_y(`CapacitorCookies`,{web:()=>new xy});var Sy=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),Cy=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},wy=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,Ty=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=Cy(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},Ey=class extends vy{async request(e){let t=Ty(e,e.webFetchExtra),n=wy(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await Sy(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};_y(`CapacitorHttp`,{web:()=>new Ey});var Dy;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(Dy||={});var Oy;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(Oy||={});var ky=class extends vy{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};_y(`SystemBars`,{web:()=>new ky});var Ay=`modulepreload`,jy=function(e,t){return new URL(e,t).href},My={},Ny=function(e){return e.pathname.endsWith(`.css`)},Py=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Fy=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=jy(t,n);let r=s(t),i=Ny(r);return Py(My,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ay,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Iy(e){switch(e){case`playing`:return`pause`;case`paused`:return`resume`;case`won`:case`lost`:return`lobby`;default:return`exit`}}function Ly(){return gy.isNativePlatform()}async function Ry(e){if(!Ly())return;let{App:t}=await Fy(async()=>{let{App:e}=await import(`./esm-qv4t0mdT.js`);return{App:e}},[],import.meta.url);await t.addListener(`backButton`,()=>{let n=Iy(e.getStatus());n===`pause`?e.pause():n===`resume`?e.resume():n===`lobby`?e.returnToLobby():t.exitApp()}),await t.addListener(`appStateChange`,({isActive:t})=>{!t&&e.getStatus()===`playing`&&e.pause()})}var zy=class{canvas;uiRoot;state;save;assets;audio;input;worldScene;ui;loop;online;onlineUi;renderer=null;detectedPreset=`low`;postFx=null;lastRenderTriangles=0;lastRenderDrawCalls=0;lastGeometries=0;lastTextures=0;constructor(e,t){this.canvas=e,this.uiRoot=t,this.state=_v(),this.save=xm(),this.state.player.outfitId=this.save.selectedOutfit,this.assets=new Tp,this.audio=new rm,this.audio.setMuted(this.save.settings.muted),this.input=new am,this.worldScene=new W_(this.assets),this.worldScene.setPlayerLoadout(this.save.loadout,this.save.weaponSkins),this.input.setLookScaleProvider(()=>this.currentLookScale()),this.applyControlSettings(),this.ui=new Uv(this.uiRoot,{onOpenOnline:()=>{this.onlineUi.open(),this.onlineUi.render(this.online)},onStartMatch:()=>this.startMatch(),onRestartMatch:()=>{this.online.status===`playing`?this.leaveOnline():this.restartMatch()},onReturnLobby:()=>{this.online.status===`playing`&&this.leaveOnline(),this.state.status=`lobby`,_h(this.state.player,0,14),this.renderFrame()},onResumeMatch:()=>{this.state.status===`paused`&&(this.state.status=`playing`,this.renderFrame())},onToggleLocale:()=>{this.save.settings.locale=this.save.settings.locale===`th`?`en`:`th`,Sm(this.save),this.renderFrame()},onCycleSensitivity:()=>{let e=sm,t=e[(e.indexOf(this.save.settings.lookSensitivity)+1)%e.length];this.save.settings.lookSensitivity=t,Sm(this.save),this.renderFrame()},onCycleAimAssist:()=>{let e=cm.indexOf(this.save.settings.aimAssist);this.save.settings.aimAssist=cm[(e+1)%cm.length],Sm(this.save),this.applyControlSettings(),this.renderFrame()},onCycleGraphics:()=>{let e=[`auto`,`low`,`medium`,`high`],t=e[(e.indexOf(this.save.settings.graphics)+1)%e.length];this.updateGraphicsSettings({graphics:t})},onToggleShadows:()=>this.updateGraphicsSettings({shadows:!this.save.settings.shadows}),onToggleLightingEffects:()=>this.updateGraphicsSettings({lightingEffects:!this.save.settings.lightingEffects}),getGraphicsPreset:()=>this.getGraphicsPreset(),onToggleMute:()=>{this.save.settings.muted=!this.save.settings.muted,this.audio.setMuted(this.save.settings.muted),Sm(this.save),this.renderFrame()},onToggleReducedMotion:()=>{this.save.settings.reducedMotion=!this.save.settings.reducedMotion,Sm(this.save),this.renderFrame()},onDeployGloo:()=>{this.press(`KeyG`)||this.triggerGlooWall()},onUseMedkit:()=>{this.press(`KeyH`)||this.triggerMedkit()},onSelectSlot:e=>{this.press(`Digit${e+1}`)||(this.state.player.activeSlot=e,this.state.player.reloadTimer=0)},onFireClick:()=>{this.triggerFire()},onSelectOutfit:e=>{this.selectOutfit(e)},onWardrobeChange:(e,t,n)=>this.changeWardrobe(e,t,n),getWardrobe:()=>this.getWardrobe(),onTriggerEmote:e=>{this.press(e===`cobra_wave`?`KeyN`:e===`laugh_taunt`?`KeyM`:`KeyB`)||this.triggerEmote(e)},onCycleScope:()=>{this.press(`KeyX`)||(vh(this.state.player),this.renderFrame())},onEjectOrParachute:()=>{this.press(`Space`)||this.ejectFromAirplane()},onToggleVehicle:()=>{this.press(`KeyE`)||this.toggleVehicle()},onTouchMove:(e,t,n)=>{this.input.setTouchJoystick(e,t,n)},onTouchLook:(e,t)=>{let n=hm(e,t,Math.min(window.innerWidth,window.innerHeight));this.input.addLookDelta(-n.dx*.0032,-n.dy*.0024)},onTouchFireHold:e=>{this.input.setTouchFire(e)},onToggleAds:()=>{this.input.toggleAds(),!this.online.inMatch&&(this.state.player.isAds=!this.state.player.isAds,this.renderFrame())},onJump:()=>{this.press(`Space`)||(this.state.player.dropPhase===`grounded`?this.state.player.isProne||this.state.player.isCrouching?(this.state.player.isProne=!1,this.state.player.isCrouching=!1,this.renderFrame()):this.state.player.isGrounded&&(this.state.player.velocity.y=6.8,this.state.player.isGrounded=!1,this.renderFrame()):this.ejectFromAirplane())},onToggleProne:()=>{this.press(`KeyZ`)||this.state.player.dropPhase===`grounded`&&this.state.player.isGrounded&&(this.state.player.isProne=!this.state.player.isProne,this.state.player.isCrouching=!1,this.renderFrame())},onToggleCrouch:()=>{this.press(`KeyC`)||(this.state.player.isCrouching=!this.state.player.isCrouching,this.state.player.isProne=!1,this.renderFrame())},onReload:()=>{this.press(`KeyR`)||this.state.player.reloadTimer<=0&&(this.state.player.reloadTimer=1.6,this.renderFrame())}}),this.online=new uy(this.state,{changed:()=>this.onlineUi.render(this.online),fireFx:e=>{this.worldScene.triggerMuzzleFlash(),this.audio.play(e)},headshotFx:()=>this.audio.play(`sfx_hit_headshot`),matchEnded:e=>{e&&this.audio.play(`sfx_booyah`),this.renderFrame()}}),this.onlineUi=new Zv(this.uiRoot,{onConnect:(e,t,n)=>this.connectOnline(e,t,n),onReady:e=>this.online.setReady(e),onStart:()=>this.online.requestStart(),onLeave:()=>this.leaveOnline(),onClose:()=>{this.onlineUi.close(),this.onlineUi.render(this.online)}},this.loadOnlinePrefs()),this.initRenderer(),typeof window<`u`&&(this.input.bind(window,this.canvas),window.addEventListener(`resize`,()=>this.onResize()),window.addEventListener(`keydown`,e=>{e.code===`F3`&&(e.preventDefault(),this.setGraphicsQuality(this.getGraphicsQuality()===`high`?`low`:`high`))}),this.canvas.addEventListener(`click`,()=>{if(this.state.status===`playing`&&this.canvas.requestPointerLock)try{this.canvas.requestPointerLock()}catch{}})),this.loop=new om(e=>this.fixedUpdate(e),()=>this.renderFrame()),im(this)}initRenderer(){try{this.renderer=new $u({canvas:this.canvas,antialias:!1,powerPreference:`high-performance`}),this.renderer.setPixelRatio(1),this.renderer.shadowMap.type=2,this.renderer.info.autoReset=!1,this.detectedPreset=A(k(this.renderer.getContext())),this.applyGraphicsSettings(),this.onResize()}catch{this.renderer=null}}onResize(){let e=typeof window<`u`&&window.innerWidth||1280,t=typeof window<`u`&&window.innerHeight||720;this.worldScene.camera.aspect=e/Math.max(1,t),this.worldScene.camera.updateProjectionMatrix(),this.renderer&&(this.renderer.setSize(e,t,!1),this.postFx?.setSize(e,t))}currentLookScale(){let e=this.save.settings,t=e.lookSensitivity*gm(Th(this.state.player));return this.state.aimState.targetLocked&&this.state.player.dropPhase===`grounded`&&(t*=um(e.aimAssist)),t}applyControlSettings(){Vh(lm(this.save.settings.aimAssist))}async boot(){await Promise.all([this.assets.preloadAll(`./`),Bp(`./`),this.worldScene.loadVegetation(`./`),p_(`./`),this.worldScene.preloadSponsorImage(`./`)]),this.loop.start(),this.renderFrame(),this.renderer&&this.renderer.setAnimationLoop(e=>this.loop.tick(e)),Ly()&&this.setMobileMode(!0),await Ry({getStatus:()=>this.state.status,pause:()=>{this.state.status=`paused`,this.renderFrame()},resume:()=>{this.state.status=`playing`,this.renderFrame()},returnToLobby:()=>{this.state.status=`lobby`,_h(this.state.player,0,14),this.renderFrame()}})}startMatch(){this.audio.unlock(),yv(this.state,this.save.selectedOutfit),this.worldScene.sync(this.state,0),this.renderFrame()}restartMatch(){this.startMatch()}ejectFromAirplane(){let e=gh(this.state.player);return this.worldScene.sync(this.state,1/60),this.renderFrame(),e}forceLand(e=0,t=14){_h(this.state.player,e,t),this.worldScene.sync(this.state,1/60),this.renderFrame()}selectOutfit(e){this.state.player.outfitId=e,this.save.selectedOutfit=e;let t=y[e];this.save.ownedSets.includes(t)&&(this.save.loadout=m(t,this.save.loadout)),Sm(this.save),this.worldScene.setPlayerLoadout(this.save.loadout,this.save.weaponSkins),this.worldScene.sync(this.state,1/60),this.renderFrame()}changeWardrobe(e,t,n){let r=this.save.ownedSets;if(e===`buy`){let e=a.find(e=>e.id===t);e&&!r.includes(t)&&this.save.coins>=e.price&&(this.save.coins-=e.price,this.save.ownedSets=[...r,t])}else if(e===`set`)r.includes(t)&&(this.save.loadout=m(t,this.save.loadout));else if((e===`hat`||e===`head`||e===`top`||e===`pants`||e===`shoes`||e===`fists`)&&!x(t,r))return;else e===`gunskin`&&n?this.save.weaponSkins=C({...this.save.weaponSkins,[n]:t}):this.save.loadout=S({...this.save.loadout,[e]:t},this.save.ownedSets);Sm(this.save),this.worldScene.setPlayerLoadout(this.save.loadout,this.save.weaponSkins),this.worldScene.sync(this.state,1/60),this.renderFrame()}getWardrobe(){return{loadout:{...this.save.loadout},weaponSkins:{...this.save.weaponSkins},coins:this.save.coins,ownedSets:[...this.save.ownedSets]}}triggerEmote(e=`booyah_dance`){bh(this.state.player,e),this.worldScene.sync(this.state,.15),this.renderFrame()}equipScope(e){e===`2x`&&(this.state.player.hasScope2x=!0),e===`4x`&&(this.state.player.hasScope4x=!0),this.state.player.activeScope=e,this.worldScene.sync(this.state,1/60),this.renderFrame()}setMobileMode(e){this.ui.setMobileMode(e),this.renderFrame()}fixedUpdate(e){let t=this.input.sample(e);this.online.inMatch?this.state.status===`playing`&&this.online.step(t,e):xv(this.state,t,e,{onWeaponFired:e=>{this.worldScene.triggerMuzzleFlash(),this.audio.play(e)},onHeadshot:()=>{this.audio.play(`sfx_hit_headshot`)},onGlooDeployed:()=>{this.audio.play(`sfx_gloo_wall`)},onMedkitUsed:()=>{this.audio.play(`sfx_medkit`)},onMatchEnded:e=>{e&&this.audio.play(`sfx_booyah`),this.save=Cm(this.save,e,this.state.player.kills,this.state.player.damageDealt)}})}press(e){return this.online.inMatch?(this.input.triggerAction(e),!0):!1}loadOnlinePrefs(){let e={};try{e=JSON.parse(localStorage.getItem(`ffm-online-prefs`)??`{}`)}catch{}let t=typeof location<`u`&&location.protocol===`https:`?`${location.host}/ws`:``;return{url:e.url||t,name:e.name||`Player`,room:``}}connectOnline(e,t,n){let r=Jv(e);if(!r)this.online.error=`Enter the server address.`,this.online.status=`closed`,this.onlineUi.render(this.online);else{try{localStorage.setItem(`ffm-online-prefs`,JSON.stringify({url:e,name:t}))}catch{}this.audio.unlock(),this.online.connect(r,t||`Player`,this.save.selectedOutfit,n)}}leaveOnline(){this.online.leave(),this.onlineUi.close(),this.state.status=`lobby`,_h(this.state.player,0,14),this.renderFrame()}applyGraphicsSettings(){let e=this.save.settings,t=O[j(e.graphics,this.detectedPreset)];if(this.worldScene.setGraphicsProfile(t),this.renderer){if(this.renderer.setPixelRatio(t.pixelRatio),this.renderer.shadowMap.enabled=e.shadows,this.renderer.toneMapping=e.lightingEffects?4:0,this.renderer.toneMappingExposure=e.lightingEffects?1.18:1,s_(!e.lightingEffects),e.lightingEffects&&!this.postFx)try{this.postFx=new hd(this.renderer,this.worldScene.scene,this.worldScene.camera,1280,720)}catch{this.postFx=null}this.onResize()}this.worldScene.setShadowsEnabled(e.shadows)}getGraphicsPreset(){return j(this.save.settings.graphics,this.detectedPreset)}updateGraphicsSettings(e){this.save.settings={...this.save.settings,...e},Sm(this.save),this.applyGraphicsSettings(),this.renderFrame()}setGraphicsQuality(e){this.updateGraphicsSettings({shadows:e===`high`,lightingEffects:e===`high`})}getGraphicsQuality(){return this.save.settings.shadows||this.save.settings.lightingEffects?`high`:`low`}renderFrame(){this.worldScene.sync(this.state,1/60),this.renderer&&(this.renderer.info.reset(),this.postFx&&this.save.settings.lightingEffects?this.postFx.render():this.renderer.render(this.worldScene.scene,this.worldScene.camera),this.lastRenderTriangles=this.renderer.info.render.triangles,this.lastRenderDrawCalls=this.renderer.info.render.calls,this.lastGeometries=this.renderer.info.memory.geometries,this.lastTextures=this.renderer.info.memory.textures),this.ui.render(this.state,this.save,this.worldScene.camera)}triggerGlooWall(){return this.state.player.dropPhase!==`grounded`&&_h(this.state.player,0,14),J_(this.state.player,this.state.glooWalls)?(this.audio.play(`sfx_gloo_wall`),this.renderFrame(),!0):!1}triggerMedkit(){return this.state.player.dropPhase!==`grounded`&&_h(this.state.player,0,14),X_(this.state.player)?(this.audio.play(`sfx_medkit`),this.renderFrame(),!0):!1}aimAtNearestBot(e=!0){let t=this.state.bots.filter(e=>e.hp>0);if(t.length===0)return!1;this.state.player.dropPhase!==`grounded`&&_h(this.state.player,0,14);let n=t[0];return n.position.x=0,n.position.y=0,n.position.z=5.5,n.yaw=Math.PI,n.state=`ENGAGE`,n.strafeDir=0,n.fireCooldown=1.5,this.state.player.position.x=0,this.state.player.position.y=0,this.state.player.position.z=14,this.state.player.yaw=0,this.state.player.pitch=e?.008:-.04,this.state.player.fireCooldown=0,this.state.player.reloadTimer=0,this.stepManual(17),!0}triggerFire(){if(this.state.player.dropPhase!==`grounded`&&_h(this.state.player,0,14),this.state.aimState.targetLocked&&this.state.aimState.targetId){let e=this.state.bots.find(e=>e.id===this.state.aimState.targetId&&e.hp>0);e&&(e.position.x=this.state.player.position.x-Math.sin(this.state.player.yaw)*8.5,e.position.z=this.state.player.position.z-Math.cos(this.state.player.yaw)*8.5)}this.state.player.fireCooldown=0;let e=Hh(this.state.player,this.state.bots,this.state.glooWalls,this.state.buildings,Wh(this.state.player,this.state.buildings));if(e.fired){this.worldScene.triggerMuzzleFlash();for(let t of e.events)this.state.recentEvents.push(t),this.state.damagePopups.push({id:`dmg_dbg_${Date.now()}_${Math.random()}`,amount:t.amount,isHeadshot:t.isHeadshot,worldX:t.hitPoint.x,worldY:t.hitPoint.y,worldZ:t.hitPoint.z,timeRemaining:.85});this.renderFrame(),this.stepManual(17)}return e.fired}teleportNearLoot(){let e=this.state.lootItems.find(e=>!e.collected);return e?(_h(this.state.player,e.position.x,e.position.z),this.stepManual(34),!0):!1}toggleVehicle(){let e=gv(this.state);return this.renderFrame(),e}teleportNearVehicle(e=`pickup`){let t=this.state.vehicles.find(t=>!t.driverId&&(!e||t.type===e));return t?(_h(this.state.player,t.x+2,t.z),this.state.nearbyVehicleId=t.id,this.renderFrame(),!0):!1}getHouseEntrance(e=0){let t=Eg().filter(e=>e.layout.stairs),n=t[e%Math.max(1,t.length)];if(!n)return null;let r=n.building.x-n.layout.door[0],i=n.building.z-n.layout.door[1],a=n.layout.stairs;return{door:n.layout.door,doorYaw:Math.atan2(-r,-i),stairs:a.start,stairsYaw:Math.atan2(-a.dir[0],-a.dir[1]),center:[n.building.x,n.building.z]}}getTownCenters(){return qf.map(e=>({id:e.id,x:e.cx+10,z:e.cz+10}))}teleportTo(e,t,n){_h(this.state.player,e,t),n!==void 0&&(this.state.player.yaw=n),this.stepManual(3),this.renderFrame()}forceBooyah(){_h(this.state.player,0,14);for(let e of this.state.bots)e.hp=0,e.state=`DEAD`;this.state.player.kills=Math.max(this.state.player.kills,6),this.stepManual(34)}forceEliminated(){this.state.player.hp=0,this.stepManual(34)}stepManual(e){this.loop.stepManual(e)}getPerfMetrics(){let e=this.loop.getMetrics();return{fps:e.fps,frameTimeMs:e.frameTimeMs,visibleTriangles:this.lastRenderTriangles,drawCalls:this.lastRenderDrawCalls,geometries:this.lastGeometries,textures:this.lastTextures,pixelRatio:this.renderer?this.renderer.getPixelRatio():1}}getSnapshot(){return{status:this.state.status,matchTime:Math.round(this.state.matchTime*100)/100,aliveCount:this.state.aliveCount,playerRank:this.state.playerRank,playerOutsideZone:this.state.playerOutsideZone,aimLocked:this.state.aimState.targetLocked,damagePopupsCount:this.state.damagePopups.length,glooWallsCount:this.state.glooWalls.length,uncollectedLootCount:this.state.lootItems.filter(e=>!e.collected).length,drivingVehicleId:this.state.player.drivingVehicleId,nearbyVehicleId:this.state.nearbyVehicleId,vehiclesCount:this.state.vehicles.length,visibleChunks:this.worldScene.chunkGrid.visibleChunkCount,player:{hp:this.state.player.hp,shield:this.state.player.shield,position:{...this.state.player.position},yaw:this.state.player.yaw,pitch:this.state.player.pitch,isSprinting:this.state.player.isSprinting,isCrouching:this.state.player.isCrouching,isProne:this.state.player.isProne,isAds:this.state.player.isAds,dropPhase:this.state.player.dropPhase,outfitId:this.state.player.outfitId,activeEmote:this.state.player.activeEmote,activeScope:this.state.player.activeScope,hasScope2x:this.state.player.hasScope2x,hasScope4x:this.state.player.hasScope4x,mobileMode:this.ui.isMobileMode(),activeWeapon:this.state.player.weapons[this.state.player.activeSlot],ammo:this.state.player.ammoInMag[this.state.player.activeSlot],glooWallCount:this.state.player.glooWallCount,medkitCount:this.state.player.medkitCount,kills:this.state.player.kills,headshots:this.state.player.headshots,damageDealt:this.state.player.damageDealt},safeZone:{currentRadius:Math.round(this.state.safeZone.currentRadius*10)/10,phaseNumber:this.state.safeZone.phaseNumber,isShrinking:this.state.safeZone.isShrinking},bots:this.state.bots.map(e=>({id:e.id,name:e.name,hp:e.hp,state:e.state,weaponId:e.weaponId,outfitId:e.outfitId,position:{...e.position}})),perf:this.getPerfMetrics()}}};function By(e,t,n){let r=n>0?t/n:0;return Math.max(e,Math.min(1,Math.max(0,r)))}function Vy(e=Fo,t=typeof document>`u`?null:document){let n=t?.getElementById(`boot-loader`)??null,r=t?.getElementById(`boot-loader-bar`)??null,i=t?.getElementById(`boot-loader-label`)??null,a=0;return e.onProgress=(e,t,n)=>{a=By(a,t,n),r&&(r.style.width=`${Math.round(a*100)}%`),i&&(i.textContent=`${Math.round(a*100)}%`)},{done(){n&&(n.classList.add(`boot-loader-hidden`),window.setTimeout(()=>n.remove(),400))},fail(e){i&&(i.textContent=e),r&&(r.style.background=`#e53935`)}}}function Hy(e){return!e.isNative&&e.isProd&&e.hasServiceWorker&&e.isSecureContext}async function Uy(e,t){if(Hy({isNative:e,isProd:!0,hasServiceWorker:typeof navigator<`u`&&`serviceWorker`in navigator,isSecureContext:typeof window<`u`&&window.isSecureContext}))try{await navigator.serviceWorker.register(`${t.replace(/\/?$/,`/`)}sw.js`),await navigator.storage?.persist?.()}catch{}}async function Wy(){let e=Vy(),t=document.getElementById(`game-canvas`),n=document.getElementById(`ui-root`);if(!t||!n)throw Error(`Missing #game-canvas or #ui-root elements`);try{await new zy(t,n).boot(),e.done(),Uy(Ly(),`./`)}catch(t){throw e.fail(`Load failed - reload`),t}}Wy();export{vy as n,_y as r,Fy as t};