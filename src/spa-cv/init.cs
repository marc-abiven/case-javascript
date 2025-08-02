fn init x:etc
 fn spacer
  let r dom_init "div"
  
  assign r.innerHTML "&nbsp"
  
  ret r
 end

 fn slash
  let r dom_init "span"
  
  assign r.innerHTML "&nbsp/&nbsp;"
  
  ret r
 end
 
 let font_size "1.2vw"
 let spacer1 call spacer
 let spacer2 call spacer
 let slash1 call slash
 let slash2 call slash
 let style body.style
 
 assign style.fontFamily "monospace"
 assign style.fontSize font_size
 assign style.margin 0
 assign style.padding font_size

 let menu dom_init "div"
 let a1 dom_init "a"
 let a2 dom_init "a"
 let a3 dom_init "a"
 
 assign menu.style.textAlign "center"
 
 assign a1.href "marc-abiven-2025-07-28-developpeur-informatique.pdf" 
 assign a1.innerText "Télécharger le PDF"

 assign a2.href "https://www.linkedin.com/in/marc-abiven/"
 assign a2.innerText "Linkedin"
 
 assign a3.href "https://discord.com/channels/1268201144300077213/1268201144300077216"
 assign a3.innerText "Discord"

 menu.append a1
 menu.append slash1
 menu.append a2
 menu.append slash2
 menu.append a3
 
 let div1 dom_init "div"
 let div2 dom_init "div"
 
 assign div1.style.textAlign "center"
 assign div2.style.textAlign "center"
 
 let iframe1 dom_init "iframe"
 let iframe2 dom_init "iframe"
 
 assign iframe1.src "/cv/developpeur.html"
 assign iframe1.style.width "210mm"
 assign iframe1.style.height "310mm"
 assign iframe1.style.border "1px solid gray"

 assign iframe2.src "/cv/details.html"
 assign iframe2.style.width "210mm"
 assign iframe2.style.height "297mm"
 assign iframe2.style.border "1px solid gray"
 
 div1.append iframe1
 div2.append iframe2
 
 body.append menu
 body.append spacer1
 body.append div1
 body.append spacer2
 body.append div2
end
