fn fs_modified x:str
 let stat fs.statSync x

 ret div stat.mtimeMs 1000
end