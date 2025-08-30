fn cpl_dump x
 check is_obj x

 fn dump_ast x
  let r arr
  let args x.args
  let children x.children
  let a2 arr
  let a3 arr

  push a2 x.operator
  append a2 args

  forof a2
   if is_token v
    push a3 v

    cont
   end

   let s to_lit v

   push a3 s
  end

  let cs space a3:etc
  let source x.source
  let path source.path
  let ncs source.index
  let ncs inc ncs
  let o obj path ncs cs

  push r o

  forof children
   let t dump_ast v

   forof t
    assign v.cs indent v.cs
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

 forin x.stack
  let i to_i k
  let v at x.stack i
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
