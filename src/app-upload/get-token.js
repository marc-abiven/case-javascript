function get_token(x)
{
 check(is_str,x)
 
 let r=concat("/home/mabynogy/.",x)
 
 r=file_read(r)
 r=trim(r)
 r=base36_decode(r) 
 r=salt(r)
 
 return r
}
