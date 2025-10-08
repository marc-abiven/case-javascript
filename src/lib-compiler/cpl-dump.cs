fn cpl_dump cpl:obj
 check is_obj cpl

 //dump ast

 fn dump_ast node:obj
  let r arr
  let args node.args
  let children node.children
  let a2 arr
  let a3 arr

  push a2 node.operator
  append a2 args

  for a2
   if is_token v
    push a3 v
   elseif is_str v
    let s to_lit v

    push a3 s
   else
    stop
  end

  let cs space a3:etc
  let source node.source
  let path source.path
  let ncs source.index
  let ncs inc ncs
  let o obj path ncs cs

  push r o

  for children
   let t dump_ast v

   for t
    assign v.cs txt_indent v.cs
   end

   append r t
  end

  if is_full children
   let cs "end"
   let o obj path ncs cs

   push r o
  end

  ret r
 end

 //main

 for cpl.stack
  let n inc i
  let frame concat "#" n
  let title space "compiler frame" frame

  flower title

  let s dump_ast v
  let s tbl_render s
  let s txt_prepend s "> "

  log s
 end
end
