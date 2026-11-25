fn split x:str y
 if is_undef y
  ret split x lf

 if is_empty x
  ret arr

 ret x.split y
end
