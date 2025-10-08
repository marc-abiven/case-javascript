fn fs_created x:str
 let stat fs.statSync x

 ret div stat.ctimeMs 1000
end