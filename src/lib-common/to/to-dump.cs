fn to_dump x
 check is_def x
 
 if is_arr x
  if is_empty x
   ret "arr"
   
  let a arr

  push a "arr"
  
  forin x
   let i to_i k
   let v at x i 
   let s to_dump v
   let sharp concat "#" i
   
   if is_ln s
    let s space "" sharp s

    push a s
   else
    let s2 space "" sharp
    let s indent s 2
    
    push a s2
    push a s
   end
  end

  push a "end"
  
  ret join a
 elseif is_obj x
  if is_empty x
   ret "obj"

  let a arr
  
  push a "obj"
  
  forin x
   let v get x k
   let s to_dump v
   var key k
   
   if not is_word key
    assign key to_lit key
   
   if is_ln s
    let s space "" key s

    push a s
   else
    let s2 space "" key
    let s indent s 2
    
    push a s2
    push a s
    push a "end"
   end
  end

  push a "end"
  
  ret join a
 elseif is_word x
  ret to_lit x
 elseif is_fn x
  ret space "fn" x.name
 else
  ret json_encode x
end
