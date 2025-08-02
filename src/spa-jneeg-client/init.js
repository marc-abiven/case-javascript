function init(...x)
{
 const cli=cli_init()

 function on_resize()
 {
  cli_resize(cli)
 }
 
 window.onresize=on(on_resize)
} 
