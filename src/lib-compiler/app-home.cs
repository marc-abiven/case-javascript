fn app_home app:str
 let lines arr
 let js app_make app

 let html h_html
 let head h_head
 let title h_title app
 let body h_body

 let script h_script js

 h_push body script
 h_push head title
 h_push html head
 h_push html body

 ret h_render html
end
