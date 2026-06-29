fn init x:etc
 let html h_html
 let head h_head
 let body h_body

 h_text body "ok"

 h_push html head
 h_push html body

 let html h_render html

 mail "marc@abiven.eu" "Test mail" html
end