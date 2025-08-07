gn init x:etc
 fn spacer
  let r dom_div
  
  assign r.innerHTML "&nbsp"
  
  ret r
 end

 fn slash
  let r dom_span
  
  assign r.innerHTML "&nbsp/&nbsp;"
  
  ret r
 end

 assign document.title "CV de Marc Abiven"
 
 var font_size "1.4vw"
 
 if is_phone
  assign font_size "3.4vw"
 
 let spacer1 spacer
 let spacer2 spacer
 let slash1 slash
 let slash2 slash
 let style body.style
 
 assign style.fontFamily "monospace"
 assign style.fontSize font_size
 assign style.margin 0
 assign style.padding font_size

 let menu dom_div
 let a1 dom_a
 let a2 dom_a
 let a3 dom_a
 
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
 
 let div1 dom_div
 let div2 dom_div
 
 assign div1.style.textAlign "center"
 assign div2.style.textAlign "center"
 
 let iframe1 dom_iframe
 let iframe2 dom_iframe

 assign iframe1.src "/cv/developpeur.html"
 assign iframe1.style.width "210mm"
 assign iframe1.style.border "1px solid gray"

 assign iframe2.src "/cv/details.html"
 assign iframe2.style.width "210mm"
 assign iframe2.style.border "1px solid gray"
 
 if is_phone
  assign iframe1.style.height "272mm"
  assign iframe2.style.height "241mm"
 else
  assign iframe1.style.height "310mm"
  assign iframe2.style.height "280mm"
 end

 div1.append iframe1
 div2.append iframe2
  
 body.append menu
 body.append spacer1
 body.append div1
 body.append spacer2
 body.append div2 
end
