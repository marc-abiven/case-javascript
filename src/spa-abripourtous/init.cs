gn init x:etc
 fn spacer
  let r dom_div
 
  assign r.className "spacer"
 
  ret r
 end
 
 fn on_pot
  assign location.href "https://leetchi.com/fr/c/un-abri-pour-tous-8264014"
 end
 
 fn is_mobile
  if is_phone
   ret true
  
  let url new URL location.href
  let params url.searchParams
  
  ret params.has "mobile"
 end
 
 //head
 
 assign document.title "Un abri pour tous"
 
 let collection html.getElementsByTagName "head"
 let head collection.item 0
 let link dom_link
 
 link.setAttribute "href" "common.css"
 link.setAttribute "rel" "stylesheet"

 head.append link

 var device "desktop"
 
 if is_mobile 
  assign device "phone"
  
 let css concat device ".css"
 let link dom_link

 link.setAttribute "href" css
 link.setAttribute "rel" "stylesheet"

 head.append link

 //title

 let div dom_div
 let span1 dom_span
 let span2 dom_span
 let i dom_i
 let spacer spacer

 assign div.className "pad border background-gray"
 assign span1.innerText "Bienvenue sur "
 assign i.innerText "Un abri pour tous "
 assign span2.innerText "!"

 div.append span1
 div.append i
 div.append span2
 body.append div
 body.append spacer
 
 //fragment
 
 let div dom_div
 let fragment concat "fragment-" device ".html"
  
 assign div.innerHTML run xhr_load fragment
  
 body.append div
 
 //button
 
 assign pot.onclick on on_pot
 
 log "ok"
end
