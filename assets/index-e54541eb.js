import{j as e,r as c,R as B}from"./react-612f7b04.js";import{a as k}from"./react-dom-b42aa598.js";import{L as M,B as C}from"./react-router-dom-ff4d61ab.js";import{u as D,H as I,C as u,O as A,P as g,a as y,b as J,F as P,D as T,c as Q,d as R,e as W}from"./@react-three-8e4c361b.js";import{i as F}from"./maath-29fa0221.js";import{m as d}from"./framer-motion-bf0e34e2.js";import{_ as w}from"./react-tilt-257ebc51.js";import{d as N}from"./react-vertical-timeline-component-f23a52c4.js";import{e as z}from"./@emailjs-a704afdc.js";import"./@chevrotain-d4b30cbb.js";import"./scheduler-765c72db.js";import"./react-router-dee9a0fc.js";import"./@remix-run-8cf5b07a.js";import"./@babel-98964cd2.js";import"./three-032c3317.js";import"./react-use-measure-33846a54.js";import"./debounce-84046811.js";import"./its-fine-cd42da5c.js";import"./react-reconciler-2b669f60.js";import"./zustand-1f571bb2.js";import"./three-stdlib-0b5b799d.js";import"./react-merge-refs-239dbb3c.js";import"./suspend-react-4f9dedb1.js";import"./prop-types-387d7a00.js";import"./classnames-63c61219.js";import"./react-intersection-observer-d09da0c9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const b=()=>{const{progress:t}=D();return e.jsxs(I,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx("span",{className:"canvas-loader"}),e.jsxs("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[t.toFixed(2),"%"]})]})},Z=()=>{const t=y("./planet/scene.gltf");return e.jsx("primitive",{object:t.scene,scale:2.5,"position-y":0,"rotation-y":0})},G=()=>e.jsx(u,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:e.jsxs(c.Suspense,{fallback:e.jsx(b,{}),children:[e.jsx(A,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(Z,{}),e.jsx(g,{all:!0})]})}),L=t=>{const[s]=J([t.imgUrl]);return e.jsxs(P,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[e.jsx("ambientLight",{intensity:.25}),e.jsx("directionalLight",{position:[0,0,.05]}),e.jsxs("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[e.jsx("icosahedronGeometry",{args:[1,1]}),e.jsx("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),e.jsx(T,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:s,flatShading:!0})]})]})},Y=({icon:t})=>e.jsxs(u,{frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},children:[e.jsxs(c.Suspense,{fallback:e.jsx(b,{}),children:[e.jsx(A,{enableZoom:!1}),e.jsx(L,{imgUrl:t})]}),e.jsx(g,{all:!0})]}),O=({isMobile:t})=>{const s=y("./desktop_pc/scene.gltf");return e.jsxs("mesh",{children:[e.jsx("hemisphereLight",{intensity:.15,groundColor:"black"}),e.jsx("spotLight",{position:[-20,50,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),e.jsx("pointLight",{intensity:1}),e.jsx("primitive",{object:s.scene,scale:t?.7:.75,position:t?[0,-3,-2.2]:[0,-3.25,-1.5],rotation:[-.01,-.2,-.1]})]})},H=()=>{const[t,s]=c.useState(!1);return c.useEffect(()=>{const n=window.matchMedia("(max-width: 500px)");s(n.matches);const o=a=>{s(a.matches)};return n.addEventListener("change",o),()=>{n.removeEventListener("change",o)}},[]),e.jsxs(u,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[20,3,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[e.jsxs(c.Suspense,{fallback:e.jsx(b,{}),children:[e.jsx(A,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(O,{isMobile:t})]}),e.jsx(g,{all:!0})]})},q=t=>{const s=c.useRef(),[n]=c.useState(()=>F(new Float32Array(5e3),{radius:1.2}));return Q((o,a)=>{s.current.rotation.x-=a/10,s.current.rotation.y-=a/15}),e.jsx("group",{rotation:[0,0,Math.PI/4],children:e.jsx(R,{ref:s,positions:n,stride:3,frustumCulled:!0,...t,children:e.jsx(W,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},V=()=>e.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:e.jsxs(u,{camera:{position:[0,0,1]},children:[e.jsx(c.Suspense,{fallback:null,children:e.jsx(q,{})}),e.jsx(g,{all:!0})]})}),l={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},U=()=>e.jsxs("section",{className:"relative w-full h-screen mx-auto",children:[e.jsxs("div",{className:`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${l.paddingX} flex flex-row items-start gap-5`,children:[e.jsxs("div",{className:"flex flex-col justify-center items-center mt-5",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-[#915EFF]"}),e.jsx("div",{className:"w-1 sm:h-80 h-40 violet-gradient"})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:`${l.heroHeadText} text-white`,children:["Hi, I'm ",e.jsx("span",{className:"text-[#915EFF]",children:"Adem"})]}),e.jsxs("p",{className:`${l.heroSubText} mt-2 text-white-100`,children:["Freshly graduated Software Engineer",e.jsx("br",{className:"sm:block hidden"}),"Full Stack Developer"]})]})]}),e.jsx(H,{}),e.jsx("div",{className:"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",children:e.jsx("a",{href:"#about",children:e.jsx("div",{className:"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2",children:e.jsx(d.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"w-3 h-3 rounded-full bg-secondary mb-1"})})})})]}),X="/assets/me-04cebc82.png",K="/assets/Spotify_Clone-bf579b6e.png",_="/assets/Cafe-2a7c751b.png",$="/assets/github-3b4e1609.png",ee="/assets/menu-b5599218.svg",te="/assets/close-54702a70.svg",se="/assets/css-815f2d2b.png",ae="/assets/html-87980d96.png",ne="data:image/png;base64,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",ie="/assets/typescript-8b497ea7.png",re="/assets/angular-0e23300c.png",oe="/assets/postgres-f48a7e11.png",le="/assets/springboot-b3e642a4.png",ce="/assets/mongodb-54000b2b.png",de="/assets/nodejs-e251de81.png",me="/assets/reactjs-966214a8.png",pe="/assets/tailwind-6ece120d.png",xe="/assets/bootstrap-704e3463.png",ue="/assets/mysql-ccc32360.png",ge="/assets/lpm-7692d49e.png",he="/assets/ipeim-d56927f1.png",fe="/assets/enis-e265de4f.png",Ae="/assets/quebec-b3b40111.png",be="/assets/lordroid-f33aca14.png",je="/assets/bl-1abcac61.png",j=[{id:"",title:"Home"},{id:"about",title:"About"},{id:"work",title:"Work"},{id:"contact",title:"Contact"}],ve=[{title:"Software Engineer",icon:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/web.png?raw=true"},{title:"Frontend Developer",icon:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/mobile.png?raw=true"},{title:"Backend Developer",icon:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/backend.png?raw=true"},{title:"Freelancer",icon:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/creator.png?raw=true"}],ye=[{name:"JavaScript",icon:ne},{name:"Typescript",icon:ie},{name:"Angular",icon:re},{name:"React JS",icon:me},{name:"Bootstrap 5",icon:xe},{name:"Tailwind CSS",icon:pe},{name:"Node JS",icon:de},{name:"Spring Boot",icon:le},{name:"MongoDB",icon:ce},{name:"MySQL",icon:ue},{name:"Postgres",icon:oe},{name:"HTML 5",icon:ae},{name:"CSS 3",icon:se}],we=[{title:"Baccalaureat in Mathematics",company_name:"Pioneer High School of Monastir (LPM)",icon:ge,iconBg:"#E6DEDD",date:"2015 - 2019",points:["Pioneer High School of Monastir is a prestigious educational institution in Tunisia known for academic excellence.","The school offers diverse programs and extracurricular activities to nurture students' talents and skills. ","With dedicated educators, it fosters critical thinking and leadership development.","The school provides a nurturing and enriching learning environment for students' holistic growth."]},{title:"Mathematics and Physics Preparatory Cycle",company_name:"Monastir Preparatory Engineering Institute (IPEIM)",icon:he,iconBg:"#383E56",date:"2019 - 2021",points:["Monastir Preparatory Engineering Institute (IPEIM) is a renowned educational institute in Tunisia, specializing in preparing students for engineering careers.","With comprehensive courses and experienced faculty, IPEIM emphasizes rigorous training and practical skills development.","The institute's state-of-the-art facilities create an ideal learning environment for students to excel in their engineering pursuits."]},{title:"Computer Engineer",company_name:"National Engineering School of Sfax (ENIS)",icon:fe,iconBg:"#383E56",date:"2021 - present",points:["The National Engineering School of Sfax (ENIS) is a prestigious institution in Tunisia, renowned for engineering education and research","With a qualified faculty and modern facilities, ENIS fosters a conducive learning environment.","Emphasizing innovation and practical experience, it prepares graduates for success in engineering and technology."]},{title:"Intern",company_name:"LORDROID",icon:be,iconBg:"#E6DEDD",date:"July 2022 - August 2022",points:["During my internship at LORDROID, a mobile development company, I gained hands-on experience in developing innovative mobile applications using Android Studio and Java.","This opportunity significantly enhanced my programming skills, particularly in Java, and honed my ability to write efficient and robust code.","Working on diverse projects further cultivated my creativity and problem-solving abilities."]},{title:"Intern",company_name:"Quebec Training Center",icon:Ae,iconBg:"#E6DEDD",date:"June 2023 - August 2023",points:["Designed and developed an immersive language learningplatform utilizing Spring Boot microservices, Angular, and MongoDB, featuring seamless multimedia integration for acomprehensive educational experience.","Developed user progress tracking and interactive communitytools","Implemented responsive design for consistent user experiences.","Ensured data security measures for user privacy."]},{title:"End of Studies Internship",company_name:"Berger Levrault",icon:je,iconBg:"#E6DEDD",date:"March 2024 - August 2024",points:["Developed a financial management solution for local authorities with fewer than 2,000 inhabitants using the Spring Framework, Angular, and Microsoft SQL Server to streamline and secure data exchanges.","Integrated features such as electronic invoicing, teletransmission, and digital signatures to enhance efficiency and compliance with French public accounting standards.","Collaborated with end-users in focus groups to ensure the solution met their needs, enabling multi-budget and multi-collectivity management.","Deployed the solution as a SaaS, providing easy web access while ensuring robust data security and confidentiality through fine-grained user access controls."]}],Ne=[{certification:"The Complete React Redux Node Express MySql Developer",name:"Udemy",date:"Mar 2023",image:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/udemy.png?raw=true"},{certification:"Front End Development Libraries ",name:"FreeCodeCamp",date:"Nov 2022",image:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/fcc.png?raw=true"},{certification:"Responsive Web Design ",name:"FreeCodeCamp",date:"May 2022",image:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/fcc.png?raw=true"},{certification:"JavaScript Algorithms and Data Structures ",name:"FreeCodeCamp",date:"Jun 2022",image:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/fcc.png?raw=true"},{certification:"Azure Fundamentals",name:"Microsoft",date:"Jan 2023",image:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/microsoft.png?raw=true"},{certification:"Azure AI Fundamentals",name:"Microsoft",date:"Feb 2023",image:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/microsoft.png?raw=true"}],Se=[{name:"Smartphone Store",description:"This application allows users to browse, search, and purchase mobile phones and accessories. Additionally, it provides admin pages to manage products, categories, and user orders.",tags:[{name:"React",color:"blue-text-gradient"},{name:"NodeJs ",color:"green-text-gradient"},{name:"MongoDB",color:"pink-text-gradient"}],image:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/smartphone.png?raw=true",source_code_link:"https://github.com/Bahri-Adem/Mobile-Store-MERN-APP"},{name:"Medical File",description:"The project is to develop a web application that centralizes patients' medical data for all healthcare providers (medical clinics, laboratories, pharmacies).",tags:[{name:"JEE",color:"blue-text-gradient"},{name:"Bootstrap",color:"green-text-gradient"},{name:"MySQL",color:"pink-text-gradient"}],image:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/medicalfile.png?raw=true",source_code_link:"https://github.com/Bahri-Adem/Application-Web-Des-Patients"},{name:"IT Blog",description:"A user-friendly blog platform for creating, reading, and editing posts. Intuitive design, categorized content, and user interactions through comments and likes.",tags:[{name:"PHP",color:"blue-text-gradient"},{name:"Bootstrap",color:"green-text-gradient"},{name:"MySQL",color:"pink-text-gradient"}],image:"https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/blog.png?raw=true",source_code_link:"https://github.com/Bahri-Adem/IT-Blog-Php"},{name:"WhatsApp Clone",description:"Experience seamless communication with my Full-Stack WhatsApp Clone. Enjoy real-time messaging, multimedia sharing, group chats, and secure conversations, all wrapped in a sleek, user-friendly design.",tags:[{name:"Spring Boot",color:"blue-text-gradient"},{name:"Angular",color:"green-text-gradient"},{name:"PostGreSQL",color:"pink-text-gradient"},{name:"Keycloak",color:"orange-text-gradient"}],image:"https://private-user-images.githubusercontent.com/103949052/398433943-75ae4a32-ed74-4c91-a3dd-f1443e145b95.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzUwNTIzNjUsIm5iZiI6MTczNTA1MjA2NSwicGF0aCI6Ii8xMDM5NDkwNTIvMzk4NDMzOTQzLTc1YWU0YTMyLWVkNzQtNGM5MS1hM2RkLWYxNDQzZTE0NWI5NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIyNFQxNDU0MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NzRlZTBmMjg4OWQzNzAxYmMwNTcyZDJkMWE0NjcxN2Y1MzI2MjM4YzQ5N2YzZTBhNWFiOWRjNDg5M2ZkM2Q5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.U39mmfw_DebvMVybO_2fWypEJCmuIUZucr--1aBu5zI",source_code_link:"https://github.com/Bahri-Adem/Full-Stack-WhatsApp-Clone-SpringBoot-3-Angular-18-PostgreSQL-Keycloak-Bootstrap"},{name:"Spotify Clone",description:"Experience the future of music streaming with my Full Stack Spotify Clone. It offers seamless song uploads, secure payments, a sleek design, and features like real-time updates, favorites, and playlists. Dive into a complete music streaming experience.",tags:[{name:"NextJS",color:"blue-text-gradient"},{name:"Tailwind ",color:"green-text-gradient"},{name:"Supabase",color:"pink-text-gradient"},{name:"Stripe",color:"orange-text-gradient"}],image:K,source_code_link:"https://github.com/Bahri-Adem/Full-Stack-Spotify-Clone-Next-13.4-React-Stripe-Supabase-Tailwind"},{name:"Cafe Management System",description:"The Cafe Management System project aims to simplify cafeteria management by providing a comprehensive system that allows cafe owners to effortlessly create, modify, and print invoices, add and manage products, and control user access.",tags:[{name:"Spring Boot",color:"blue-text-gradient"},{name:"Angular ",color:"green-text-gradient"},{name:"MongoDB",color:"pink-text-gradient"}],image:_,source_code_link:"https://github.com/Bahri-Adem/Cafe-Management-System-Angular-SpringBoot"}],Ee=()=>{const[t,s]=c.useState(""),[n,o]=c.useState(!1),[a,r]=c.useState(!1);return c.useEffect(()=>{const i=()=>{window.scrollY>100?r(!0):r(!1)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),e.jsx("nav",{className:`${l.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${a?"bg-primary":"bg-transparent"}`,children:e.jsxs("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[e.jsxs(M,{to:"/",className:"flex items-center gap-2",onClick:()=>{s(""),window.scrollTo(0,0)},children:[e.jsx("img",{src:X,alt:"logo",className:"w-9 h-9 object-contain"}),e.jsxs("p",{className:"text-white text-[18px] font-bold cursor-pointer flex ",children:["Adem Bahri ",e.jsx("span",{className:"sm:block hidden",children:"| Software Engineer"})]})]}),e.jsx("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:j.map(i=>e.jsx("li",{className:`${t===i.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>s(i.title),children:e.jsx("a",{href:`#${i.id}`,children:i.title})},i.id))}),e.jsxs("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[e.jsx("img",{src:n?te:ee,alt:"menu",className:"w-[28px] h-[28px] object-contain",onClick:()=>o(!n)}),e.jsx("div",{className:`${n?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:e.jsx("ul",{className:"list-none flex justify-end items-start flex-1 flex-col gap-4",children:j.map(i=>e.jsx("li",{className:`font-poppins font-medium cursor-pointer text-[16px] ${t===i.title?"text-white":"text-secondary"}`,onClick:()=>{o(!n),s(i.title)},children:e.jsx("a",{href:`#${i.id}`,children:i.title})},i.id))})})]})]})})},h=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),p=(t,s,n,o)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:s,delay:n,duration:o,ease:"easeOut"}}}),v=(t,s,n,o)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:s,delay:n,duration:o,ease:"easeOut"}}}),Be=(t,s)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:s||0}}}),m=(t,s)=>function(){return e.jsxs(d.section,{variants:Be(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${l.padding} max-w-7xl mx-auto relative z-0`,children:[e.jsx("span",{className:"hash-span",id:s,children:" "}),e.jsx(t,{})]})},ke=({index:t,title:s,icon:n})=>e.jsx(w,{className:"xs:w-[250px] w-full",children:e.jsx(d.div,{variants:p("right","spring",t*.5,.75),className:"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card",children:e.jsxs("div",{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",children:[e.jsx("img",{src:n,alt:"web-development",className:"w-16 h-16 object-contain"}),e.jsx("h3",{className:"text-white text-[20px] font-bold text-center",children:s})]})})}),Me=()=>e.jsxs(e.Fragment,{children:[e.jsxs(d.div,{variants:h(),children:[e.jsx("p",{className:l.sectionSubText,children:"Introduction"}),e.jsx("h2",{className:l.sectionHeadText,children:"Overview."})]}),e.jsx(d.p,{variants:p("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"I am a freshly graduated software engineer from the National School of Engineers of Sfax, with a solid foundation in software development principles. Eager to begin my professional journey, I seek opportunities as a junior Software Engineer. I aim to apply my theoretical knowledge and practical skills to contribute to innovative projects, collaborate with talented teams, and solve complex challenges. My goal is to grow my skills while exploring the diverse aspects of the field."}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-10",children:ve.map((t,s)=>e.jsx(ke,{index:s,...t},t.title))})]}),Ce=m(Me,"about"),De=()=>e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:ye.map(t=>e.jsx("div",{className:"w-28 h-28",children:e.jsx(Y,{icon:t.icon})},t.name))}),Ie=m(De,""),Je=({experience:t})=>e.jsxs(N.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:t.date,iconStyle:{background:t.iconBg},icon:e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx("img",{src:t.icon,alt:t.company_name,className:"w-[80%] h-[80%] object-contain"})}),children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-[24px] font-bold",children:t.title}),e.jsx("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t.company_name})]}),e.jsx("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:t.points.map((s,n)=>e.jsx("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:s},`experience-point-${n}`))})]}),Pe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(d.div,{variants:h(),children:[e.jsx("p",{className:`${l.sectionSubText} text-center`,children:"What I have done so far"}),e.jsx("h2",{className:`${l.sectionHeadText} text-center`,children:"Education & Experience."})]}),e.jsx("div",{className:"mt-20 flex flex-col",children:e.jsx(N.VerticalTimeline,{children:we.map((t,s)=>e.jsx(Je,{experience:t},`experience-${s}`))})})]}),Te=m(Pe,"work"),Qe=({index:t,name:s,description:n,tags:o,image:a,source_code_link:r})=>e.jsx(d.div,{variants:p("up","spring",t*.5,.75),children:e.jsxs(w,{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[e.jsxs("div",{className:"relative w-full h-[230px]",children:[e.jsx("img",{src:a,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:e.jsx("div",{onClick:()=>window.open(r,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e.jsx("img",{src:$,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-white font-bold text-[24px]",children:s}),e.jsx("p",{className:"mt-2 text-secondary text-[14px]",children:n})]}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:o.map(i=>e.jsxs("p",{className:`text-[14px] ${i.color}`,children:["#",i.name]},`${s}-${i.name}`))})]})}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsxs(d.div,{variants:h(),children:[e.jsx("p",{className:`${l.sectionSubText} `,children:"My work"}),e.jsx("h2",{className:`${l.sectionHeadText}`,children:"Projects."})]}),e.jsx("div",{className:"w-full flex",children:e.jsx(d.p,{variants:p("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."})}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-7",children:Se.map((t,s)=>e.jsx(Qe,{index:s,...t},`project-${s}`))})]}),We=m(Re,""),Fe=({index:t,certification:s,name:n,date:o,image:a})=>e.jsxs(d.div,{variants:p("","spring",t*.5,.75),className:"bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full",children:[e.jsx("p",{className:"text-white font-black text-[48px]",children:'"'}),e.jsxs("div",{className:"mt-1",children:[e.jsx("p",{className:"text-white tracking-wider text-[24px]",children:s}),e.jsxs("div",{className:"mt-7 flex justify-between items-center gap-1",children:[e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsxs("p",{className:"text-white font-medium text-[16px]",children:[e.jsx("span",{className:"blue-text-gradient",children:"@"})," ",n]}),e.jsx("p",{className:"mt-1 text-secondary text-[12px]",children:o})]}),e.jsx("img",{src:a,alt:`feedback_by-${n}`,className:"w-10 h-10 rounded-full object-cover"})]})]})]}),ze=()=>e.jsxs("div",{className:"mt-12 bg-black-100 rounded-[20px]",children:[e.jsx("div",{className:`bg-tertiary rounded-2xl ${l.padding} min-h-[300px]`,children:e.jsx(d.div,{variants:h(),children:e.jsx("h2",{className:l.sectionHeadText,children:"Certifications."})})}),e.jsx("div",{className:`-mt-20 pb-14 ${l.paddingX} flex flex-wrap gap-7`,children:Ne.map((t,s)=>e.jsx(Fe,{index:s,...t},t.name))})]}),Ze=m(ze,""),Ge=()=>{const t=c.useRef(),[s,n]=c.useState({name:"",email:"",message:""}),[o,a]=c.useState(!1),r=x=>{const{target:f}=x,{name:S,value:E}=f;n({...s,[S]:E})},i=x=>{x.preventDefault(),a(!0),z.send("service_gg6a24d","template_lbw6jyz",{from_name:s.name,to_name:"Adem",from_email:s.email,to_email:"adem.bahri@enis.tn",message:s.message},"53sRScqH9-I5iMdtW").then(()=>{a(!1),alert("Thank you. I will get back to you as soon as possible."),n({name:"",email:"",message:""})},f=>{a(!1),console.error(f),alert("Ahh, something went wrong. Please try again.")})};return e.jsxs("div",{className:"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",children:[e.jsxs(d.div,{variants:v("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[e.jsx("p",{className:l.sectionSubText,children:"Get in touch"}),e.jsx("h3",{className:l.sectionHeadText,children:"Contact."}),e.jsxs("form",{ref:t,onSubmit:i,className:"mt-12 flex flex-col gap-8",children:[e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Name"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:r,placeholder:"What's your name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",required:!0})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:r,placeholder:"What's your Email?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",required:!0})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Message"}),e.jsx("textarea",{rows:7,name:"message",value:s.message,onChange:r,placeholder:"What you want to say?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",required:!0})]}),e.jsx("button",{type:"submit",className:"bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",children:o?"Sending...":"Send"})]})]}),e.jsx(d.div,{variants:v("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e.jsx(G,{})})]})},Le=m(Ge,"contact"),Ye=()=>e.jsx(C,{children:e.jsxs("div",{className:"relative z-0 bg-primary",children:[e.jsxs("div",{className:"bg-hero-pattern bg-cover bg-no-repeat bg-center",children:[e.jsx(Ee,{}),e.jsx(U,{})]}),e.jsx(Ce,{}),e.jsx(Te,{}),e.jsx(Ie,{}),e.jsx(We,{}),e.jsx(Ze,{}),e.jsxs("div",{className:"relative z-0",children:[e.jsx(Le,{}),e.jsx(V,{})]})]})});k.createRoot(document.getElementById("root")).render(e.jsx(B.StrictMode,{children:e.jsx(Ye,{})}));
