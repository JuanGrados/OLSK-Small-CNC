import{r as i,u as L,M as R,s as st,j as l,F as T,a as w,C as ot,S as _e,U as at,b as ke,B as lt,R as D,c as Q,L as ie,d as Ve,E as se,e as J,f as ct,m as ut,g as dt,h as ft,i as W,G as oe,k as De,l as be,n as pt,o as mt,V as de,p as ht,q as K,t as gt,v as vt,O as _t}from"./index-baf24189.js";import{Vector3 as bt,Vector2 as yt,UniformsUtils as Ie,UniformsLib as Me,ShaderMaterial as wt}from"//cdn.skypack.dev/three@0.130.1/build/three.module.js";import"//cdn.skypack.dev/three@0.130.1/examples/jsm/lines/LineSegmentsGeometry.js";function St(){const e=i.useRef(),t=L(u=>u.wiringStep);let{currentStepObject:n,setCurrentSVG:s}=i.useContext(R);return i.useEffect(()=>{t&&document.getElementById("myEmbed").addEventListener("load",function(){s(st(document.getElementById("myEmbed")))})},[t]),l(T,{children:t?l("div",{id:"svgContainer",style:{position:"absolute",width:"100%",height:"100%",bottom:"0px",left:"0px",padding:"10px"},children:l("embed",{style:{width:"100%",height:"100%",backgroundColor:"#e9e9e9"},ref:e,type:"image/svg+xml",src:`./${n.name}.svg`,id:"myEmbed"})}):null})}function xt(){let{setStepPosition:e,stepCount:t,stepList:n}=i.useContext(R);const s=()=>{t++,e(t)},u=()=>{t--,e(t)};return w(T,{children:[t>=1?l("button",{onClick:u,className:"btn",id:"nextStep",children:" ❮ Previous Step  "}):null,n&&t+1<=n.length-1?l("button",{onClick:s,className:"btn",id:"nextStep",children:"Next Step ❯ "}):null]})}function Ct(){const{setModelInOut:e,selectedParts:t}=i.useContext(R),[n,s]=i.useState(!1),u=L(b=>b.wiringStep);return l(T,{children:u?null:l("button",{onClick:()=>{n==!1?(document.getElementById("partsOut").innerHTML="Assemble",s(!0),e(n)):n==!0&&(document.getElementById("partsOut").innerHTML="Explode",s(!1),e(n))},className:"btn",id:"partsOut",children:"Explode"})})}class Pt{constructor(t,n={}){this.enabled=!0;const s=n.defaultThickness!==void 0?n.defaultThickness:.003,u=new ot().fromArray(n.defaultColor!==void 0?n.defaultColor:[0,0,0]),d=n.defaultAlpha!==void 0?n.defaultAlpha:1,b=n.defaultKeepAlive!==void 0?n.defaultKeepAlive:!1,h={},m=60,v={},f={},k={outlineThickness:{value:s},outlineColor:{value:u},outlineAlpha:{value:d}},z=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),_=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <encodings_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function C(){return new _e({type:"OutlineEffect",uniforms:at.merge([ke.fog,ke.displacementmap,k]),vertexShader:z,fragmentShader:_,side:lt})}function N(r){let o=h[r.uuid];return o===void 0&&(o={material:C(),used:!0,keepAlive:b,count:0},h[r.uuid]=o),o.used=!0,o.material}function E(r){const o=N(r);return v[o.uuid]=r,V(o,r),o}function M(r){const o=r.geometry;let a=!1;return r.geometry!==void 0&&(o.isBufferGeometry?a=o.attributes.normal!==void 0:a=!0),r.isMesh===!0&&r.material!==void 0&&a===!0}function A(r){if(M(r)!==!1){if(Array.isArray(r.material))for(let o=0,a=r.material.length;o<a;o++)r.material[o]=E(r.material[o]);else r.material=E(r.material);f[r.uuid]=r.onBeforeRender,r.onBeforeRender=g}}function j(r){if(M(r)!==!1){if(Array.isArray(r.material))for(let o=0,a=r.material.length;o<a;o++)r.material[o]=v[r.material[o].uuid];else r.material=v[r.material.uuid];r.onBeforeRender=f[r.uuid]}}function g(r,o,a,y,S){const I=v[S.uuid];I!==void 0&&B(S,I)}function B(r,o){const a=o.userData.outlineParameters;r.uniforms.outlineAlpha.value=o.opacity,a!==void 0&&(a.thickness!==void 0&&(r.uniforms.outlineThickness.value=a.thickness),a.color!==void 0&&r.uniforms.outlineColor.value.fromArray(a.color),a.alpha!==void 0&&(r.uniforms.outlineAlpha.value=a.alpha)),o.displacementMap&&(r.uniforms.displacementMap.value=o.displacementMap,r.uniforms.displacementScale.value=o.displacementScale,r.uniforms.displacementBias.value=o.displacementBias)}function V(r,o){if(r.name==="invisible")return;const a=o.userData.outlineParameters;r.fog=o.fog,r.toneMapped=o.toneMapped,r.premultipliedAlpha=o.premultipliedAlpha,r.displacementMap=o.displacementMap,a!==void 0?(o.visible===!1?r.visible=!1:r.visible=a.visible!==void 0?a.visible:!0,r.transparent=a.alpha!==void 0&&a.alpha<1?!0:o.transparent,a.keepAlive!==void 0&&(h[o.uuid].keepAlive=a.keepAlive)):(r.transparent=o.transparent,r.visible=o.visible),(o.wireframe===!0||o.depthTest===!1)&&(r.visible=!1),o.clippingPlanes&&(r.clipping=!0,r.clippingPlanes=o.clippingPlanes,r.clipIntersection=o.clipIntersection,r.clipShadows=o.clipShadows),r.version=o.version}function U(){let r;r=Object.keys(v);for(let o=0,a=r.length;o<a;o++)v[r[o]]=void 0;r=Object.keys(f);for(let o=0,a=r.length;o<a;o++)f[r[o]]=void 0;r=Object.keys(h);for(let o=0,a=r.length;o<a;o++){const y=r[o];h[y].used===!1?(h[y].count++,h[y].keepAlive===!1&&h[y].count>m&&delete h[y]):(h[y].used=!1,h[y].count=0)}}this.render=function(r,o){if(this.enabled===!1){t.render(r,o);return}const a=t.autoClear;t.autoClear=this.autoClear,t.render(r,o),t.autoClear=a,this.renderOutline(r,o)},this.renderOutline=function(r,o){const a=t.autoClear,y=r.matrixWorldAutoUpdate,S=r.background,I=t.shadowMap.enabled;r.matrixWorldAutoUpdate=!1,r.background=null,t.autoClear=!1,t.shadowMap.enabled=!1,r.traverse(A),t.render(r,o),r.traverse(j),U(),r.matrixWorldAutoUpdate=y,r.background=S,t.autoClear=a,t.shadowMap.enabled=I},this.autoClear=t.autoClear,this.domElement=t.domElement,this.shadowMap=t.shadowMap,this.clear=function(r,o,a){t.clear(r,o,a)},this.getPixelRatio=function(){return t.getPixelRatio()},this.setPixelRatio=function(r){t.setPixelRatio(r)},this.getSize=function(r){return t.getSize(r)},this.setSize=function(r,o,a){t.setSize(r,o,a)},this.setViewport=function(r,o,a,y){t.setViewport(r,o,a,y)},this.setScissor=function(r,o,a,y){t.setScissor(r,o,a,y)},this.setScissorTest=function(r){t.setScissorTest(r)},this.setRenderTarget=function(r){t.setRenderTarget(r)}}}const At=i.createContext(null);function Et(e){let{children:t,enabled:n=!0}=e;const[s,u]=i.useState([]),d=i.useMemo(()=>({selected:s,select:u,enabled:n}),[s,u,n]);return D.createElement(At.Provider,{value:d},t)}function Ot({modelInCopy:e}){const t=new Q({color:15461355});var n=new ie({color:10921638,linewidth:10});const s=new _e(Ve);return s.uniforms.diffuse.value.set(0),i.useEffect(()=>{const u=[];e.traverse(d=>{if(d.frustumCulled=!0,d.isMesh){d.material=t,d.frustumCulled=!1;var b=new se(d.geometry,20),h=new J(b,n);u.push(d.geometry);const m=new ct(ut(d.geometry)),v=new J(m,s);d.add(h),d.add(v),b.dispose(),d.geometry.dispose(),t.dispose()}})},[]),l(T,{children:l("primitive",{object:e,scale:1})})}D.memo(Ot);new bt;const kt={linewidth:{value:1},resolution:{value:new yt(1,1)},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1},opacity:{value:1}},fe={uniforms:Ie.merge([Me.common,Me.fog,kt]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 control0;
		attribute vec3 control1;
		attribute vec3 direction;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

			// conditional logic
			// Transform the line segment ends and control points into camera clip space
			vec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );
			vec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );
			vec4 p0 = projectionMatrix * modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 p1 = projectionMatrix * modelViewMatrix * vec4( instanceStart + direction, 1.0 );

			c0 /= c0.w;
			c1 /= c1.w;
			p0 /= p0.w;
			p1 /= p1.w;

			// Get the direction of the segment and an orthogonal vector
			vec2 segDir = p1.xy - p0.xy;
			vec2 norm = vec2( - segDir.y, segDir.x );

			// Get control point directions from the line
			vec2 c0dir = c0.xy - p1.xy;
			vec2 c1dir = c1.xy - p1.xy;

			// If the vectors to the controls points are pointed in different directions away
			// from the line segment then the line should not be drawn.
			float d0 = dot( normalize( norm ), normalize( c0dir ) );
			float d1 = dot( normalize( norm ), normalize( c1dir ) );
			float discardFlag = float( sign( d0 ) != sign( d1 ) );
			gl_Position = discardFlag > 0.5 ? c0 : gl_Position;
			// end conditional line logic

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Mt extends wt{constructor(t){super({type:"ConditionalLineMaterial",uniforms:Ie.clone(fe.uniforms),vertexShader:fe.vertexShader,fragmentShader:fe.fragmentShader,clipping:!0}),this.dashed=!1,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}}}),this.setValues(t)}}Mt.prototype.isConditionalLineMaterial=!0;dt({OutlineEffect:Pt});const pe=[],me=[];function Nt({modelIn:e,modelOut:t,modelInCopy:n,modelInCopy2:s,modelOutCopy:u}){console.log("render count");const{gl:d,camera:b,scene:h}=ft(),m=i.useRef(),v=i.useRef();i.useRef(),i.useRef(),i.useRef(),d.setPixelRatio(Math.min(window.devicePixelRatio,2));let{stepCount:f,modelProperties:k,partsInOut:z,setVisibleModel:_,setCurrentStepObj:C,currentStepObject:N,selectedParts:E,setProperties:M,setCurrentObject:A,visibleObj:j}=i.useContext(R);const[g,B]=i.useState(!1),[V,U]=i.useState(!1),[r,o]=i.useState(s);i.useState();const[a,y]=i.useState(n);i.useState(s);const[S,I]=i.useState();i.useState(),i.useState();const[ye,Z]=i.useState(),[x,$]=i.useState();i.useState();const te=new Q({color:15461355}),ue=new Q({color:16777215}),we=new Q({color:16711680,wireframe:!0}),Se=new Q({color:13754592});var xe=new ie({color:4210752,linewidth:10}),Ce=new ie({color:6723993,linewidth:50}),qe=new ie({color:10921638,linewidth:10});new _e(Ve).uniforms.diffuse.value.set(0);const Pe=["291_Prepare_the_Fillet_Profile"],ne=[["021_Prepare_base_back_plate_1","022_Prepare_base_back_plate_2","023_Prepare_base_back_plate_3"],["031_Prepare_base_front_plate_1","032_Prepare_base_front_plate_2"],["04_Prepare_Y_ball_screws"],["061_Prepare_back_panel_1","062_Prepare_back_panel_2"],["121_Prepare_X_Ball_Screw_1","122_Prepare_X_Ball_Screw_2"],["131_Prepare_X_axis_1","132_Prepare_X_axis_2","133_Prepare_X_axis_3","134_Prepare_X_axis_3"],["161_Prepare_Z_ball_screw_1","162_Prepare_Z_ball_screw_2"],["171_Prepare_Z_axis_1","172_Prepare_Z_axis_2","173_Prepare_Z_axis_3","174_Prepare_Z_axis_4","175_Prepare_Z_axis_5"],["251_Prepare_the_bed_1","252_Prepare_the_bed_2","253_Prepare_the_bed_3"],["271_Prepare_window_front_panel_1","272_Prepare_window_front_panel_2","281Assemble_window_front","284_Prepare_window_front_panel_4"],["291_Prepare_window_side_panels_1","292_Prepare_window_side_panels_2"],["31_Prepare_back_window_frame"],["37_Prepare_the_back_door"]],Ge=["282_Wiring","283_Prepare_window_front_panel_3_-_wiring","36_Wiring_AC"],Ae=[];let Ee=[],X=[];i.useEffect(()=>{z===!0?(o(s),$(s.getObjectByName(g[f]))):z===!1&&(o(u),$(u.getObjectByName(g[f])))},[z]),i.useEffect(()=>{r.traverse(c=>{c.isObject3D&&!c.isMesh&&!c.isGroup&&(pe.push(c.name),me.push(c.userData.name))},[]),pe.sort(),B(pe),me.sort(),U(me),a.traverse(c=>{if(c.isMesh){c.material=te,c.frustumCulled=!1;var O=new se(c.geometry,20),p=new J(O,qe);c.add(p),c.geometry.dispose(),te.dispose()}}),C(n.getObjectByName(g[0])),$(r.getObjectByName(g[0])),Oe(),W()},[]);const Ke=Pe.some(c=>c.includes(g[f])),Ze=ne.some(c=>c.includes(g[f]));L(c=>c.wiringStep);const Xe=L(c=>c.isWiringStep),Qe=L(c=>c.isNotWiringStep);Ge.some(c=>c.includes(g[f]))?Xe():Qe(),i.useEffect(()=>{C(s.getObjectByName(g[f])),$(r.getObjectByName(g[f]))},[g,f]),i.useEffect(()=>{console.log(N),Oe()},[g,f,N]),i.useEffect(()=>{x&&(A(x.getObjectByName(g[f])),E!=[]&&tt(),W())},[E,x]);const Oe=i.useCallback(()=>{let c=[],O=[];const p=[];if(N){for(let q=0;q<N.children.length;q++)N.children[q].traverse(F=>{F.isGroup&&F.userData.name!=null&&p.push(F.userData.name),c=[...new Set(p)],O=c.map(H=>[p.filter(it=>it===H).length,H])});const P=N.userData.name;M({partsNames:O,titleName:P})}}),Je=i.useCallback(()=>{for(let c=f-1;c>=0;c--)for(let O=X.length-1;O>=0;O--)if(g[c]===X[O]){let p=a.getObjectByName(`${g[c]}`,!0);Ee.push(p)}}),Ye=i.useCallback(()=>{for(let p=0;p<ne.length;p++){X=ne[p];for(let P=0;P<X.length;P++)X.some(F=>F.includes(g[f]))&&Je()}let c=new oe,O=x.clone();c.add(O),Ee.filter(p=>ne.some(P=>P.includes(p.name))).forEach(p=>{p.visible=!0;let P=p.clone();c.add(P)}),_(c)}),et=i.useCallback(()=>{for(let p=f-1;p>=0;p--){let P=a.getObjectByName(`${g[p]}`,!0);Ae.push(P)}let c=new oe;Ae.filter(p=>!Pe.some(P=>P.includes(p.name))).forEach(p=>{p.visible=!0;let P=p.clone();c.add(P)});let O=x.clone();c.add(O),_(c)}),tt=i.useCallback(()=>{if(x){const c=[];for(let O=0;O<x.children.length;O++)x.children[O].traverse(p=>{if(p.isMesh&&E.includes(x.children[O].userData.name)){p.frustumCulled=!1;const H=p.geometry.clone();c.push(H),p.material=Se;var P=new se(p.geometry,20),q=new J(P,Ce);p.add(q),Se.dispose(),P.dispose(),Ce.dispose()}else if(p.isMesh&&x.children[O].userData.name!="Curves"){p.frustumCulled=!1,p.material=ue;var P=new se(p.geometry,20),F=new J(P,xe);p.add(F),P.dispose(),xe.dispose()}else if(p.userData.name==="Curves"&&(p.frustumCulled=!1,p.material=we,p.isGroup))for(let H=0;H<p.children.length;H++)p.children[H].isMesh&&(p.children[H].frustumCulled=!1,p.children[H].material=we)});Z(E)}});i.useCallback(()=>{S.traverse(c=>{c.name==="Botom_Panel"&&console.log(S.userData.name)})}),i.useCallback(c=>{c.stopPropagation(),console.log(c.object)});const nt=i.useCallback(()=>{if(x){x.clone();for(let c=0;c<r.children.length;c++)r.children[c].visible=!1;for(let c=0;c<a.children.length;c++)a.children[c].visible=!1;Ke?(console.log("exception"),x.visible=!0,_(x)):Ze?(console.log("preparing step"),x.visible=!0,Ye()):(console.log("main building step"),x.visible=!0,et())}},[x]);i.useEffect(()=>{nt()},[x]);const{setListOfStep:rt}=i.useContext(R);return rt(V),i.useState(null),l(T,{children:l(Et,{children:g?w(T,{children:[l("primitive",{ref:m,object:r,scale:1.0001}),l("primitive",{ref:v,object:a,scale:1})]}):null})})}const Tt=D.memo(Nt);function zt(){let e=[],t=new oe;const{modelProperties:n,visibleObj:s,currentStepObject:u,setClickedParts:d,selectedParts:b,partsInOut:h,setCurrentPartsModel:m,currentObject:v,partBtnState:f,setPartButtonState:k}=i.useContext(R),[z,_]=i.useState(null);i.useState(!1);const[C,N]=i.useState(!1),E=L(g=>g.wiringStep),M=i.useCallback(()=>{if(t=new oe,e=[],z){console.log(z);for(let g=0;g<v.children.length;g++)if(v.children[g].userData.name===z){const B=v.children[g].clone();t.add(B),e.push(v.children[g].userData.name)}d(e),m(t)}});i.useEffect(()=>{e=[],d(e),M()},[u,z]),i.useEffect(()=>{k(!1),e=[],d(e),m(null)},[u]);const A=()=>{f===!0&&(k(!1),e=[],d(e),m(null)),f===!1&&(k(!0),M())},j=()=>{console.log("disable"),k(!1),e=[],d(e),m(null),_(null)};return l(T,{children:l("div",{children:l("ul",{children:n?n.partsNames.map(([g,B],V)=>l("li",{children:B===z?w("button",{id:`${B}`,style:{backgroundColor:"#669999",color:"#ffffff"},disabled:C,onClick:()=>{f===!0&&j()},className:"parts",children:[w("b",{children:[" ",g,"x"]}),"  ",B]}):E?w("p",{style:{paddingBottom:10},children:[w("b",{children:[" ",g,"x"]}),"  ",B]}):w("button",{id:`${B}`,disabled:C,onClick:()=>{_(B),A()},className:"parts",children:[w("b",{children:[" ",g,"x "]}),"  ",B]})},V)):null})})})}function jt(){const{modelProperties:e}=i.useContext(R);return l(T,{children:l("div",{children:e?e.titleName:null})})}function Bt(){const{stepList:e,setStepPosition:t,stepCount:n,currentStepName:s,modelProperties:u}=i.useContext(R);i.useState("stepNaviBtn");const[d,b]=i.useState();return e&&[...Array(e.length)],l("div",{children:l("ul",{children:e?e.map((h,m)=>l("li",{children:u&&h===u.titleName?l("button",{id:`${h}`,style:{backgroundColor:"#000000",color:"#ffffff"},onClick:()=>{t(m)},className:"stepNaviBtn",children:h}):l("button",{id:`${h}`,style:{backgroundColor:d},onClick:()=>{t(m)},className:"stepNaviBtn",children:h})},m)):null})})}const Lt=D.memo(Bt);function Rt({cameraControlsRef:e}){let{visibleObj:t,modelProperties:n,selectedPartsModel:s,selectedParts:u,currentObject:d,setCamera:b,partBtnState:h,currentStepObject:m}=i.useContext(R);const v=De(),f=L(k=>k.cameraPositionTag);i.useEffect(()=>{t?(v.refresh(t).fit().clip(),W()):(v.refresh(m).fit().clip(),W())},[m,f]),i.useEffect(()=>{s?(v.refresh(s).fit(),W()):s||(v.refresh(t).fit(),W())},[s])}var He={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ne=D.createContext&&D.createContext(He),Vt=["attr","size","title"];function Dt(e,t){if(e==null)return{};var n=It(e,t),s,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(u=0;u<d.length;u++)s=d[u],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function It(e,t){if(e==null)return{};var n={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;n[s]=e[s]}return n}function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ae.apply(this,arguments)}function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,s)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Te(Object(n),!0).forEach(function(s){Ht(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Ht(e,t,n){return t=Ut(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ut(e){var t=$t(e,"string");return typeof t=="symbol"?t:t+""}function $t(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ue(e){return e&&e.map((t,n)=>D.createElement(t.tag,le({key:n},t.attr),Ue(t.child)))}function ee(e){return t=>D.createElement(Ft,ae({attr:le({},e.attr)},t),Ue(e.child))}function Ft(e){var t=n=>{var{attr:s,size:u,title:d}=e,b=Dt(e,Vt),h=u||n.size||"1em",m;return n.className&&(m=n.className),e.className&&(m=(m?m+" ":"")+e.className),D.createElement("svg",ae({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,b,{className:m,style:le(le({color:e.color||n.color},n.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&D.createElement("title",null,d),e.children)};return Ne!==void 0?D.createElement(Ne.Consumer,null,n=>t(n)):t(He)}function Wt(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(e)}let ve=1,$e=new Array;new Array;let he=new Array,re;be.get("https://sheets.googleapis.com/v4/spreadsheets/1lhb7-A0hI_tJ6aedruDEQmPhXl1srPcLZE5VFaaI6rA/values/Workbook?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(e=>{let t=e.data.values,n=new Array;for(const s of t)ve>2&&s[1]!=""&&($e.push(n),n=new Array),n.push(s),++ve});function qt(){let{stepCount:e}=i.useContext(R);return i.useEffect(()=>{re=new Array;for(const t of $e[e+1])t[10]!=""&&t[10]!=null&&(he=new Array,he.push(t[10]),re.push(he)),++ve},[e]),l(T,{children:re?w("div",{children:[w("div",{id:"RemarksTitle",style:{margin:"auto",display:"inline",alignContent:"baseline"},children:[w("h3",{children:[l(Wt,{})," Remarks"]})," ",l("br",{})]}),l("ul",{children:re.map((t,n)=>w("li",{children:[" ",t]},n))})]}):null})}/**
  * react-collapsed v4.2.0
  *
  * Copyright (c) 2019-2024, Rogin Farrer
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */var Gt=class extends Error{constructor(e){super(`react-collapsed: ${e}`)}},ce=(...e)=>(e[0],`${e[1]}`,void 0);function Fe(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useCallback((...n)=>{var s;return(s=t.current)==null?void 0:s.call(t,...n)},[])}function Kt(e,t,n){const[s,u]=i.useState(t),d=i.useRef(typeof e<"u"),b=d.current?e:s,h=Fe(n),m=i.useCallback(v=>{const k=typeof v=="function"?v(b):v;d.current||u(k),h==null||h(k)},[h,b]);return i.useEffect(()=>{ce(!(d.current&&e==null),"`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),ce(!(!d.current&&e!=null),"`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")},[e]),[b,m]}var Zt="(prefers-reduced-motion: reduce)";function Xt(){const[e,t]=i.useState(!1);return i.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const n=window.matchMedia(Zt);t(n.matches);const s=u=>{t(u.matches)};if(n.addEventListener)return n.addEventListener("change",s),()=>{n.removeEventListener("change",s)};if(n.addListener)return n.addListener(s),()=>{n.removeListener(s)}},[]),e}var Qt=pt["useId".toString()]||(()=>{});function Jt(){return Qt()??""}var Yt=typeof window<"u"?i.useLayoutEffect:i.useEffect,ge=!1,en=0,ze=()=>++en;function tn(e){const t=e||(ge?ze():null),[n,s]=i.useState(t);return Yt(()=>{n===null&&s(ze())},[]),i.useEffect(()=>{ge===!1&&(ge=!0)},[]),n!=null?String(n):void 0}function nn(e){const t=Jt(),n=tn(e);return typeof e=="string"?e:typeof t=="string"?t:n}function rn(e,t){const n=performance.now(),s={};function u(){s.id=requestAnimationFrame(d=>{d-n>t?e():u()})}return u(),s}function je(e){e.id&&cancelAnimationFrame(e.id)}function Be(e){return e!=null&&e.current?e.current.scrollHeight:(ce(!0,"Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"),0)}function sn(e){if(!e||typeof e=="string")return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function on(e,t){if(e!=null)if(typeof e=="function")e(t);else try{e.current=t}catch{throw new Gt(`Cannot assign value "${t}" to ref "${e}"`)}}function Le(...e){return e.every(t=>t==null)?null:t=>{e.forEach(n=>{on(n,t)})}}function an(e){let t=n=>{};t=n=>{if(!(n!=null&&n.current))return;const{paddingTop:s,paddingBottom:u}=window.getComputedStyle(n.current);ce(!(s&&s!=="0px"||u&&u!=="0px"),`Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`)},i.useEffect(()=>{t(e)},[e])}var ln=typeof window>"u"?i.useEffect:i.useLayoutEffect;function cn({duration:e,easing:t="cubic-bezier(0.4, 0, 0.2, 1)",onTransitionStateChange:n=()=>{},isExpanded:s,defaultExpanded:u=!1,hasDisabledAnimation:d,id:b,...h}={}){const m=Fe(n),v=nn(b?`${b}`:void 0),[f,k]=Kt(s,u),z=i.useRef(f),[_,C]=i.useState(!1),N=Xt(),E=d??N,M=i.useRef(),A=i.useRef(),j=i.useRef(null),[g,B]=i.useState(null);an(j);const V=`${h.collapsedHeight||0}px`;function U(r){if(!j.current)return;const o=j.current;for(const a in r){const y=r[a];y?o.style[a]=y:o.style.removeProperty(a)}}return ln(()=>{if(!j.current||f===z.current)return;z.current=f;function o(S){return E?0:e??sn(S)}const a=S=>`height ${o(S)}ms ${t}`,y=S=>{function I(){f?(U({height:"",overflow:"",transition:"",display:""}),m("expandEnd")):(U({transition:""}),m("collapseEnd")),C(!1)}A.current&&je(A.current),A.current=rn(I,S)};return C(!0),f?M.current=requestAnimationFrame(()=>{m("expandStart"),U({display:"block",overflow:"hidden",height:V}),M.current=requestAnimationFrame(()=>{m("expanding");const S=Be(j);y(o(S)),j.current&&(j.current.style.transition=a(S),j.current.style.height=`${S}px`)})}):M.current=requestAnimationFrame(()=>{m("collapseStart");const S=Be(j);y(o(S)),U({transition:a(S),height:`${S}px`}),M.current=requestAnimationFrame(()=>{m("collapsing"),U({height:V,overflow:"hidden"})})}),()=>{M.current&&cancelAnimationFrame(M.current),A.current&&je(A.current)}},[f,V,E,e,t,m]),{isExpanded:f,setExpanded:k,getToggleProps(r){const{disabled:o,onClick:a,refKey:y,...S}={refKey:"ref",onClick(){},disabled:!1,...r},I=g?g.tagName==="BUTTON":void 0,ye=r==null?void 0:r[y||"ref"],Z={id:`react-collapsed-toggle-${v}`,"aria-controls":`react-collapsed-panel-${v}`,"aria-expanded":f,onClick(te){o||(a==null||a(te),k(ue=>!ue))},[y||"ref"]:Le(ye,B)},x={type:"button",disabled:o?!0:void 0},$={"aria-disabled":o?!0:void 0,role:"button",tabIndex:o?-1:0};return I===!1?{...Z,...$,...S}:I===!0?{...Z,...x,...S}:{...Z,...x,...$,...S}},getCollapseProps(r){const{style:o,refKey:a}={refKey:"ref",style:{},...r},y=r==null?void 0:r[a||"ref"];return{id:`react-collapsed-panel-${v}`,"aria-hidden":!f,"aria-labelledby":`react-collapsed-toggle-${v}`,role:"region",...r,[a||"ref"]:Le(j,y),style:{boxSizing:"border-box",...!_&&!f?{display:V==="0px"?"none":"block",height:V,overflow:"hidden"}:{},...o}}}}}function un(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m18.25 7.6-5.5-3.18a1.49 1.49 0 0 0-1.5 0L5.75 7.6c-.46.27-.75.76-.75 1.3v6.35c0 .54.29 1.03.75 1.3l5.5 3.18c.46.27 1.04.27 1.5 0l5.5-3.18c.46-.27.75-.76.75-1.3V8.9c0-.54-.29-1.03-.75-1.3zM7 14.96v-4.62l4 2.32v4.61l-4-2.31zm5-4.03L8 8.61l4-2.31 4 2.31-4 2.32zm1 6.34v-4.61l4-2.32v4.62l-4 2.31zM7 2H3.5C2.67 2 2 2.67 2 3.5V7h2V4h3V2zm10 0h3.5c.83 0 1.5.67 1.5 1.5V7h-2V4h-3V2zM7 22H3.5c-.83 0-1.5-.67-1.5-1.5V17h2v3h3v2zm10 0h3.5c.83 0 1.5-.67 1.5-1.5V17h-2v3h-3v2z"},child:[]}]})(e)}function dn(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"},child:[]}]})(e)}function fn(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M24 24H0V0h24v24z",opacity:".87"},child:[]},{tag:"path",attr:{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},child:[]}]})(e)}function Re(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},child:[]},{tag:"path",attr:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"},child:[]}]})(e)}let Y=1,We=new Array,G=new Array;be.get("https://sheets.googleapis.com/v4/spreadsheets/1lhb7-A0hI_tJ6aedruDEQmPhXl1srPcLZE5VFaaI6rA/values/Workbook?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(e=>{let t=e.data.values,n=new Array;for(const s of t)Y>2&&s[1]!=""&&(We.push(n),n=new Array),n.push(s),++Y});function pn(){const[e,t]=i.useState(),[n,s]=i.useState(),[u,d]=i.useState(),b=L(_=>_.isNotVisibleToggle),h=L(_=>_.isVisibleToggle);L(_=>_.isVisible);let{stepCount:m,howToData:v,setHowToWorkbook:f,setClickedPath:k,path:z}=i.useContext(R);return i.useEffect(()=>{let _=new Array;be.get("https://sheets.googleapis.com/v4/spreadsheets/1grTucZ2sqLgZ4AtJq8EkyO__kLg-pazRVl3sbLNMaIY/values/Blad1?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(C=>{let N=C.data.values,E=new Array,M=[];for(const A of N)Y>0&&A[0]!=""?(E=new Array,E.push(A),_.push(E)):E.push(A),++Y;f(_);for(const A of _)A[0]!=""&&(G=new Array,G.push(A[0][0],A[0][1]),M.push(G));d(M)})},[]),i.useEffect(()=>{let _=new Array;for(const C of We[m+1])C[12]!=""&&C[12]!=null&&(G=new Array,G.push(C[12]),_.push(G)),++Y;t(_)},[m]),i.useEffect(()=>{let _=[];if(u!=null){for(const C of e)for(const N of u)N.includes(`${C}`)&&_.push(N);s(_),e.length===0?b():h()}},[u,e]),l(T,{children:l("div",{children:l("ul",{children:n?n.map((_,C)=>w("li",{children:[l(mt,{to:`/HowTo/${_[0]}`,target:"_blank",rel:"noopener noreferrer",children:w("button",{type:"button",className:"stepNaviBtn",children:[_[0],". ",_[1]]})})," "]},C)):null})})})}function mn(){const e=i.useRef(),[t,n]=i.useState(!1),{getCollapseProps:s,getToggleProps:u}=cn({isExpanded:t}),d=L(b=>b.isVisible);return w(T,{children:[l("button",{type:"button",...u({onClick:()=>n(b=>!b)}),className:t?"expanded":"btn",style:{position:"absolute",top:"20px",left:"20px",visibility:`${d}`},children:t?w(T,{children:[l(Re,{})," How To ",l(dn,{})]}):w(T,{children:[l(Re,{})," How To ",l(fn,{})]})}),l("div",{ref:e,className:"howToBoxContent",...s(),children:l(pn,{})})]})}function hn(){let{visibleObj:e,selectedParts:t,stepSVG:n}=i.useContext(R);const s=L(f=>f.cameraPositionTag),u=L(f=>f.freeControls),d=L(f=>f.wiringStep),b=De(),[h]=i.useState(()=>new de),[m]=i.useState(()=>new de),v=new de(4,1,8);return ht((f,k)=>{s==="initial"&&d===!1&&(h.lerp(v,.1),m.lerp([0,0,0],.1),f.camera.position.copy(h),f.camera.lookAt(m),u(),b.refresh(e).fit(),invalidade()),s==="initial"&&d===!0&&(console.log(n),n.reset(),u(),W())}),l(T,{})}function wn(){const e=K("./OLSK_Small_CNC_V3_All_In.glb"),t=K("./OLSK_Small_CNC_V3_All_Out.glb"),n=i.useMemo(()=>e.scene.clone(),[e]),s=i.useMemo(()=>e.scene.clone(),[e]),u=i.useMemo(()=>t.scene.clone(),[t]);i.useState(!1),i.useRef(),i.useRef(),K.clear("./OLSK_Small_CNC_V3_All_In.glb"),K.clear("./OLSK_Small_CNC_V3_All_Out.glb");const d=L(b=>b.resetCamera);return l(T,{children:w(i.Fragment,{children:[l("aside",{className:"stepNavi",children:l(Lt,{})}),w("section",{id:"currentStepArea",children:[w("nav",{className:"currentStepBar",children:[l("h2",{id:"stepTitleArea",children:l(jt,{})}),w("div",{id:"stepControl",children:[l(xt,{}),"                        "]})]}),w("div",{className:"infoColumn",children:[l("div",{className:"stepPartsArea",children:l(zt,{})}),l("div",{className:"stepRemarksArea",children:l(qt,{})})]}),w("article",{className:"viewArea",id:"viewArea",children:[l(i.Suspense,{fallback:null,children:w(gt,{linear:!0,flat:!0,frameloop:"demand",camera:{fov:45,near:1,far:10,position:[4,1,8]},children:[l(gn,{}),l("color",{args:["#f5f5f5"],attach:"background"}),l(vt,{clip:!0,observe:!0,damping:2,margin:.85,children:w(i.Suspense,{fallback:null,children:[l(Tt,{modelIn:e,modelOut:t,modelInCopy:n,modelInCopy2:s,modelOutCopy:u}),l(Rt,{})]})}),l(hn,{})]})}),l(St,{}),w("button",{className:"btn",style:{position:"absolute",bottom:"20px",left:"20px"},onClick:d,children:[l(un,{})," Reset Camera"]}),l(Ct,{}),l(mn,{})]})]})]})})}K.preload("./OLSK_Small_CNC_V3_All_In.glb");K.preload("./OLSK_Small_CNC_V3_All_Out.glb");function gn(){const e=i.useRef();return l(T,{children:l(_t,{ref:e,makeDefault:!0,enableDamping:!1,enableRotate:!0,minAzimuthAngle:1/0,maxAzimuthAngle:1/0,minPolarAngle:0,maxPolarAngle:1/0})})}export{wn as default};
//# sourceMappingURL=App-b853340d.js.map
