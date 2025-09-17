fn cpl_block x:obj y:arr
 let r arr

 forof y
  let a cpl_translate x v

  append r a
 end

 ret r
end
