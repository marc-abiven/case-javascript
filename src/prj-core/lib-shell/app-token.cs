fn app_token x:str
 var r concat "." x

 try
  assign r fs_locate r
 catch
  //top level common in home

  assign r path_concat common r
 end

 let r file_load r
 let r base36_decode r
 let r salt r

 ret r
end