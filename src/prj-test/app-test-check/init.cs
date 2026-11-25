fn init x:etc
 check false

 let t get_type arguments

 log t

 let c get_class arguments

 log c

 let s "abc"

 check is_num s
end