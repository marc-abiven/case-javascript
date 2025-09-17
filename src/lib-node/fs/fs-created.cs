fn fs_created x:str
 let r fs.statSync x
 let r div r.ctimeMs 1000
 
 ret r
end
