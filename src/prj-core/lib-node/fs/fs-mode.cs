fn fs_mode x:str
 let stat fs.statSync x

 ret stat.mode
end