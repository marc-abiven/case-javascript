gn init x:etc
 assign body.style.fontFamily "monospace"
 
 stop

 let pages run wp_pages
 let categories run wp_categories
 let posts run wp_posts
 let site obj pages categories posts
 let s to_dump site
 let s dom_escape s
 let pre dom_pre

 assign pre.innerHTML s

 body.append pre

 stop

 log "ok"
end
