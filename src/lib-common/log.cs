fn log x:etc
 if is_str output
  let a arr

  forof x
   if is_str v
    push a v
    cont
   end

   let s to_dump v

   push a s
  end

  let s join a " "
  let s concat s "\n"
  let s concat output s

  assign global.output s

  ret
 end

 if is_node
  if is_color
   forin x
    let i to_i k
    let v at x i
    var s null

    if is_str v
     assign s v
    else
     assign s inspect v

    write s

    let last dec x.length

    if different i last
     write " "
   end

   write "\n"

   ret
  end
 end
 
 console.log x:etc
end
