import { useEffect, useRef } from "react";

function ThreeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animId;
    let cleanup = false;

    async function init() {
      const THREE = await import("https://unpkg.com/three@0.128.0/build/three.module.js");
      if (cleanup) return;

      const container = canvasRef.current;
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x050810);
      scene.fog = new THREE.FogExp2(0x050810, 0.00015);

      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0.5, 7);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Lights
      scene.add(new THREE.AmbientLight(0x0d1b33));
      const pl1 = new THREE.PointLight(0x4da8ff, 0.8, 12);
      pl1.position.set(2, 1, 3); scene.add(pl1);
      const pl2 = new THREE.PointLight(0x00e5ff, 0.5, 10);
      pl2.position.set(-2, -0.5, 2); scene.add(pl2);

      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // Particles
      const count = 2000;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      const ipos = new Float32Array(count * 3);
      const spds = new Float32Array(count);
      const palette = [
        new THREE.Color(0x4da8ff), new THREE.Color(0x00e5ff),
        new THREE.Color(0x7cb8ff), new THREE.Color(0xa0d0ff),
        new THREE.Color(0xffffff), new THREE.Color(0x2f6fbf),
      ];

      for (let i = 0; i < count; i++) {
        const t = (i / count) * Math.PI * 7;
        const r = 2.8 + Math.sin(t * 2.5) * 0.6;
        const a = t * 0.75;
        const x = Math.cos(a) * r;
        const y = Math.cos(t * 1.8) * 1.5 + Math.sin(t * 0.9) * 0.5;
        const z = Math.sin(a) * r;
        pos[i*3]=ipos[i*3]=x; pos[i*3+1]=ipos[i*3+1]=y; pos[i*3+2]=ipos[i*3+2]=z;
        spds[i] = 0.5 + Math.random() * 1.5;
        const c = palette[Math.floor(Math.random()*palette.length)].clone();
        c.multiplyScalar(0.6 + Math.random() * 0.6);
        col[i*3]=c.r; col[i*3+1]=c.g; col[i*3+2]=c.b;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));

      const cv = document.createElement("canvas");
      cv.width = cv.height = 32;
      const cx = cv.getContext("2d");
      const grd = cx.createRadialGradient(16,16,2,16,16,10);
      grd.addColorStop(0,"rgba(255,255,255,1)");
      grd.addColorStop(0.4,"rgba(150,200,255,0.9)");
      grd.addColorStop(1,"rgba(0,80,255,0)");
      cx.beginPath(); cx.arc(16,16,10,0,Math.PI*2); cx.fillStyle=grd; cx.fill();
      const ptex = new THREE.CanvasTexture(cv);

      const mat = new THREE.PointsMaterial({
        size:0.08, map:ptex, blending:THREE.AdditiveBlending,
        depthWrite:false, vertexColors:true, opacity:0.85, transparent:true,
      });
      const ps = new THREE.Points(geo, mat);
      mainGroup.add(ps);

      // Rings
      const ringGroup = new THREE.Group();
      mainGroup.add(ringGroup);
      for (let r=0;r<3;r++){
        const rg = new THREE.TorusGeometry(2.2+r*.6,0.02,16,100);
        const rm = new THREE.MeshBasicMaterial({color:`hsl(${200+r*15},80%,60%)`,transparent:true,opacity:0.2+r*.1});
        const ring = new THREE.Mesh(rg,rm);
        ring.rotation.x=Math.PI/2+r*.5; ring.rotation.y=r*.8;
        ringGroup.add(ring);
      }

      // Stars
      const sgeo = new THREE.BufferGeometry();
      const sp = new Float32Array(800*3);
      for(let i=0;i<800*3;i+=3){sp[i]=(Math.random()-.5)*20;sp[i+1]=(Math.random()-.5)*12;sp[i+2]=(Math.random()-.5)*15-3;}
      sgeo.setAttribute("position",new THREE.BufferAttribute(sp,3));
      const stars = new THREE.Points(sgeo,new THREE.PointsMaterial({color:0x4466aa,size:.03,blending:THREE.AdditiveBlending,depthWrite:false,opacity:.8}));
      scene.add(stars);

      // Orbs
      const orbsGroup = new THREE.Group();
      mainGroup.add(orbsGroup);
      for(let o=0;o<50;o++){
        const om=new THREE.Mesh(new THREE.SphereGeometry(0.04,8,8),new THREE.MeshBasicMaterial({color:`hsl(${200+Math.random()*40},80%,70%)`}));
        om.userData={angle:Math.random()*Math.PI*2,radius:1.5+Math.random()*2,speed:0.005+Math.random()*.02,yOffset:(Math.random()-.5)*2};
        orbsGroup.add(om);
      }

      let mx=0,my=0;
      const onMouse = e=>{mx=(e.clientX/window.innerWidth)*2-1;my=-(e.clientY/window.innerHeight)*2+1;};
      window.addEventListener("mousemove",onMouse);

      function animate(){
        if(cleanup){renderer.dispose();return;}
        animId=requestAnimationFrame(animate);
        const t=performance.now()*.001;
        mainGroup.rotation.y+=.0015;
        mainGroup.rotation.x+=(my*.0005-mainGroup.rotation.x)*.02;
        mainGroup.rotation.z+=(mx*.0003-mainGroup.rotation.z)*.02;
        const pa=geo.attributes.position.array;
        for(let i=0;i<count;i++){
          const i3=i*3;
          const w1=Math.sin(t*spds[i]+ipos[i3]*1.8)*.08;
          const w2=Math.cos(t*spds[i]*.7+ipos[i3+2]*1.5)*.06;
          const w3=Math.sin(t*spds[i]*.9+ipos[i3+1]*2)*.07;
          pa[i3]=ipos[i3]+w1+w2*.5; pa[i3+1]=ipos[i3+1]+w3+w1*.4; pa[i3+2]=ipos[i3+2]+w2+w3*.3;
        }
        geo.attributes.position.needsUpdate=true;
        ringGroup.rotation.x+=.0004; ringGroup.rotation.y+=.0006; ringGroup.rotation.z+=.0003;
        orbsGroup.children.forEach(orb=>{
          orb.userData.angle+=orb.userData.speed;
          const a=orb.userData.angle,r=orb.userData.radius;
          orb.position.x=Math.cos(a)*r; orb.position.z=Math.sin(a)*r;
          orb.position.y=orb.userData.yOffset+Math.sin(a*2)*.4;
        });
        stars.rotation.y+=.00015;
        pl1.intensity=.6+Math.sin(t*1.5)*.2;
        renderer.render(scene,camera);
      }
      animate();

      const onResize=()=>{
        camera.aspect=window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth,window.innerHeight);
      };
      window.addEventListener("resize",onResize);

      return ()=>{
        window.removeEventListener("mousemove",onMouse);
        window.removeEventListener("resize",onResize);
        renderer.dispose();
        if(container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      };
    }

    let destroyFn;
    init().then(fn=>{ destroyFn=fn; });
    return ()=>{ cleanup=true; cancelAnimationFrame(animId); if(destroyFn) destroyFn(); };
  }, []);

  return <div ref={canvasRef} id="kk-canvas" />;
}

export default ThreeCanvas;
