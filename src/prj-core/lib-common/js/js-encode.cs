fn js_encode x:def
 let s js_dump x
 let a arr

 for split s
  let s trim v

  push a s
 end

 ret implode a
end