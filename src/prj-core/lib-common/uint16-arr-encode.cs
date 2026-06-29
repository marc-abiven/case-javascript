fn uint16_arr_encode x:str
 let r new Uint16Array x.length

 for x
  let n asc v

  inline "r[i]=n"
 end

 ret r
end