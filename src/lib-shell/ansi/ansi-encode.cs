fn ansi_encode str:str args:etc
 let ansi ansi_init args:etc

 ret concat ansi.escape "[" ansi.attr ";" ansi.fore ";" ansi.back "m" str ansi.escape "[0m"
end
