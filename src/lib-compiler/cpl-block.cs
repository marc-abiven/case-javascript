fn cpl_block cpl:obj nodes:arr
 let r arr

 forof nodes
  let a cpl_translate cpl v

  append r a
 end

 ret r
end
