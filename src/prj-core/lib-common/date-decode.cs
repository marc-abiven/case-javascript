fn date_decode x:str
 let r new Date x
 let r r.getTime
 let r div r 1000
 let r trunc r

 ret r
end
