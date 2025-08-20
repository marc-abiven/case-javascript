gn init x:etc
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

 dom_href link "common.css"
 link.setAttribute "rel" "stylesheet"

 dom_push head link

 var device "desktop"

 if is_mobile
  assign device "phone"

 let css concat device ".css"
 let link dom_link

 dom_href link css
 link.setAttribute "rel" "stylesheet"

 dom_push head link

 //title

 let div dom_div
 let span1 dom_span
 let span2 dom_span
 let i dom_i
 let spacer dom_spacer

 dom_class div "pad border background-gray"
 dom_text span1 "Bienvenue sur "
 dom_text i "Un abri pour tous "
 dom_text span2 "!"

 dom_push div span1
 dom_push div i
 dom_push div span2

 dom_push body div
 dom_push body spacer

 //fragment

 let div dom_div
 let fragment concat "fragment-" device ".html"
 let fragment run xhr_load fragment

 dom_html div fragment
 dom_push body div

 //button

 assign pot.onclick on on_pot

 log "ok"
end