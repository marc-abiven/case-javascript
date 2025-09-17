fn ps1_encode str:str args:etc
 let ansi ansi_init args:etc
 let open "\\["
 let close "\\]"
    
 ret concat open ansi.escape "[" ansi.attr ";" ansi.fore ";" ansi.back "m" close str open ansi.escape "[0m" close
end
