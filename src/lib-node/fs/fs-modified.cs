fn fs_modified x:str
 let r fs.statSync x
 let r div r.mtimeMs 1000
 
 ret r
end
