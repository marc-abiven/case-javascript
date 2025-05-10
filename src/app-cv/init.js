function init(...x)
{
 function spacer()
 {
  const r=document.createElement("div")
  
  r.innerHTML="&nbsp"
  
  return r
 }

 function slash()
 {
  const r=document.createElement("span")
  
  r.innerHTML="&nbsp/&nbsp;"
  
  return r
 }
 
 const font_size="1.2vw"
 const spacer1=spacer()
 const spacer2=spacer()
 const slash1=slash()
 const slash2=slash() 
 
 document.body.style.fontFamily="monospace"
 document.body.style.fontSize=font_size
 document.body.style.margin=0
 document.body.style.padding=font_size

 const menu=document.createElement("div")
 const a1=document.createElement("a")
 const a2=document.createElement("a")
 const a3=document.createElement("a")
 
 menu.style.textAlign="center"
 
 a1.href="marc-abiven-2025-03-28-developpeur-informatique.pdf"
 a1.innerText="Télécharger le PDF"

 a2.href="https://www.linkedin.com/in/marc-abiven/"
 a2.innerText="Linkedin"
 
 a3.href="https://discord.com/channels/1268201144300077213/1268201144300077216"
 a3.innerText="Discord"

 menu.append(a1)
 menu.append(slash1)
 menu.append(a2)
 menu.append(slash2)
 menu.append(a3)
 
 const div1=document.createElement("div")
 const div2=document.createElement("div")
 
 div1.style.textAlign="center"
 div2.style.textAlign="center"
 
 const iframe1=document.createElement("iframe")
 const iframe2=document.createElement("iframe")
 
 iframe1.src="/cv/developpeur.html"
 iframe1.style.width="210mm"
 iframe1.style.height="310mm"
 iframe1.style.border="1px solid gray"

 iframe2.src="/cv/details.html"
 iframe2.style.width="210mm"
 iframe2.style.height="297mm"
 iframe2.style.border="1px solid gray"
 
 div1.append(iframe1)
 div2.append(iframe2)
 
 document.body.append(menu)
 document.body.append(spacer1)
 document.body.append(div1)
 document.body.append(spacer2)
 document.body.append(div2)
}
