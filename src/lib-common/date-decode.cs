fn date_decode x
 check is_str x
 
 let r new Date x
 let r r.getTime
 let r div r 1000
 let r trunc r
 
 ret r
end
