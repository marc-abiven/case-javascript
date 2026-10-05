fn strip_l x:str y:str

 if match_l x y
  let n sub x.length y.length

  ret slice_r x n
 end

 ret x
end
