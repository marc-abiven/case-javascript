fn h_init name:str text
 if is_undef text
  ret h_init name ""

 check is_str text

 let short false
 let inline false
 let attr obj
 let style obj
 let children arr

 ret obj name short inline attr style text children
end