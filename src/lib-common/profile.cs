fn profile x:fn y:etc
 let before time_now
 let r x y:etc
 let after time_now
 let profile sub after before
 let profile to_fixed profile
 let profile concat profile "s"
 let o obj profile
 let s obj_option o
 
 log x.name s

 ret r
end
