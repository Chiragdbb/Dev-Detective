(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function H(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(n){if(n.ep)return;n.ep=!0;const r=H(n);fetch(n.href,r)}})();const E="https://api.github.com/users/",t=e=>document.querySelector(`[${e}]`),L=t("data-body"),h=t("data-theme-text"),D=t("data-toggle-btn"),g=t("data-dark-icon"),y=t("data-light-icon"),u=t("data-input"),I=t("data-form"),m=t("data-input-clear");t("data-search-btn");const T=t("data-error"),N=t("data-pfp"),k=t("data-name"),O=t("data-joined"),v=t("data-profile-link"),b=t("data-bio"),_=t("data-repos"),S=t("data-followers"),$=t("data-following"),a=t("data-location"),s=t("data-website"),l=t("data-twitter"),c=t("data-company");let f="chiragdbb";w(f);function w(e){fetch(E+e).then(o=>{if(o.ok)return o.json();throw new Error("Username Invalid")}).then(o=>A(o)).catch(o=>{console.log(o),T.classList.add("active")})}function A(e){const o=new Date(e.created_at).toDateString().split(" ");N.src=e.avatar_url,k.innerHTML=e.name,O.innerHTML=`Joined ${o[2]} ${o[1]} ${o[3]}`,v.href=e.html_url,v.innerHTML=`@${e.login}`,e.bio!==null?b.innerHTML=e.bio:b.innerHTML="This profile has no bio",_.innerHTML=e.public_repos,S.innerHTML=e.followers,$.innerHTML=e.following,e.location!==null?(a.parentElement.style.opacity="1",a.innerHTML=e.location):(a.innerHTML="Not Available",a.parentElement.style.opacity="0.5"),e.company!==null?(c.parentElement.style.opacity="1",c.innerHTML=e.company):(c.innerHTML="Not Available",c.parentElement.style.opacity="0.5"),e.twitter_username!==null?(l.parentElement.style.opacity="1",l.href=`https://twitter.com/${e.twitter_username}`,l.innerHTML=e.twitter_username):(l.innerHTML="Not Available",l.parentElement.style.opacity="0.5"),e.blog!==""?(s.parentElement.style.opacity="1",s.href=e.blog,s.innerHTML=e.blog):(s.innerHTML="Not Available",s.parentElement.style.opacity="0.5")}I.addEventListener("submit",e=>{if(e.preventDefault(),f=u.value,f!=="")w(f);else return});m.addEventListener("click",()=>{m.classList.remove("active"),u.value=""});u.addEventListener("input",()=>{u.value!==""?m.classList.add("active"):m.classList.remove("active"),T.classList.remove("active")});let i="";U();D.addEventListener("click",()=>{M()});function M(){L.classList.toggle("dark"),L.classList.contains("dark")?i="dark":i="light",i==="light"?(h.innerHTML="Dark",y.classList.remove("active"),g.classList.remove("not-active")):(h.innerHTML="Light",y.classList.add("active"),g.classList.add("not-active")),localStorage.setItem("theme",i)}function U(){return localStorage.getItem("theme")?i=localStorage.getItem("theme"):i="light",i==="dark"&&M(),i}
