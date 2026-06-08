fn cpl_uncomment cpl:obj path:str
 if has cpl.files path
  ret get cpl.files path

 let s file_load path
 let r cpl_uncomment_str cpl s

 put cpl.files path r

 ret r
end
