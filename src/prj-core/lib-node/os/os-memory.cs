fn os_memory
 let s os_execute "free" "--bytes" "--line"
 let s txt_inline s
 let words split s " "
 let used at words 5
 let used to_uint used
 let free at words 7
 let free to_uint free
 
 dump used
 dump free
end
