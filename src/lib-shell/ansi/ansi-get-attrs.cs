fn ansi_get_attrs
 let r obj

 assign r.normal 0
 assign r.bold 1
 assign r.dim 2
 assign r.underline 4
 assign r.blink 5
 assign r.reverse 7

 ret r
end