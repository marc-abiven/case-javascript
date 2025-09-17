fn wp_normalize x:str
 let r dom_unescape x
 let r replace r " :" ":"

 ret r
end
