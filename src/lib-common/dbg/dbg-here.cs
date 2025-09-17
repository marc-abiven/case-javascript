fn dbg_here
 let t dbg_callstack

 tbl_remove_column t "njs"
 tbl_remove_column t "js"

 let t tbl_render t

 log t
end