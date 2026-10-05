fn init x:etc
 let s1 inspect 42
 let s2 inspect 3.14
 let s3 inspect false
 let s concat s1 " test " s2 " " s3
 let a ansi_decode s
 
 dump a
 
 //~ fornum 32
  //~ let c chr i
  //~ let c bracket c
  
  //~ log i c
 //~ end
end
