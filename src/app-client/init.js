function init(...x)
{
 let cli=null
 let skip=false
 
 function on_load()
 {
  if(skip)
   return 
   
  if(same(document.readyState,"complete"))  
  {
   cli=cli_init()
   skip=true
  }
 }

 function on_resize()
 {
  cli_resize(cli)
 }
 
 window.onload=on(on_load)
 window.onresize=on(on_resize)
} 
