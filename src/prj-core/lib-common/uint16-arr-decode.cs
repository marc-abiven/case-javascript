fn uint16_arr_decode x:obj
 let a arr

 fornum x.length
  let n inline "x[i]"
  let c chr n

  push a c
 end

 ret implode a
end


