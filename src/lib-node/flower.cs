fn flower x
 check is_str x
 
 let n process.stdout.columns
 
 let s1 repeat "*" n
 let s2 repeat "*" 2 
 let s2 concat s2 " "
 let s2 concat s2 x
 let s2 concat s2 " "
 let s2 concat s2 s1
 let s2 slice_l s2 n

 log s2
end
