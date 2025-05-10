function dom_create(x)
{
 check(is_str,x)
 
 return document.createElement(x)
}
