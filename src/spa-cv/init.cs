gn init x:etc
 //slash

 fn slash
  let r dom_span

  dom_html r "&nbsp;/&nbsp;"

  ret r
 end

 //main

 assign document.title "CV de Marc Abiven"

 var font_size unit

 if is_phone
  assign font_size dom_mul font_size 2.7

 let spacer1 dom_spacer
 let spacer2 dom_spacer
 let slash1 slash
 let slash2 slash

 dom_font_family body "monospace"
 dom_font_size body font_size
 dom_margin body 0
 dom_padding body font_size

 let menu dom_div
 let a1 dom_a
 let a2 dom_a
 let a3 dom_a

 dom_center menu

 dom_href a1 "res/marc-abiven-2025-07-28-developpeur-informatique.pdf"
 dom_text a1 "Télécharger le PDF"

 dom_href a2 "https://www.linkedin.com/in/marc-abiven/"
 dom_text a2 "Linkedin"

 dom_href a3 "https://discord.com/channels/1268201144300077213/1268201144300077216"
 dom_text a3 "Discord"

 dom_push menu a1
 dom_push menu slash1
 dom_push menu a2
 dom_push menu slash2
 dom_push menu a3

 let div1 dom_div
 let div2 dom_div

 dom_center div1
 dom_center div2

 let iframe1 dom_iframe
 let iframe2 dom_iframe

 dom_src iframe1 "res/developpeur.html"
 dom_width iframe1 "210mm"
 dom_border iframe1

 dom_src iframe2 "res/details.html"
 dom_width iframe2 "210mm"
 dom_border iframe2

 if is_phone
  dom_height iframe1 "272mm"
  dom_height iframe2 "241mm"
 else
  dom_height iframe1 "310mm"
  dom_height iframe2 "280mm"
 end

 dom_push div1 iframe1
 dom_push div2 iframe2

 dom_push body menu
 dom_push body spacer1
 dom_push body div1
 dom_push body spacer2
 dom_push body div2
end
