function pane_push(x,y)
{
 check(is_obj,x)
 check(is_obj,y)
 
 const padding=x.padding
 const padding2=mul(padding,2)
 
 y.x=x.x+padding
 
 if(is_empty(x.children))
  y.y=x.y+padding
 else
  y.y=x.y+x.height
  
 y.width=sub(y.width,padding2)
 x.height=add(x.height,y.height)
 
 push(x.children,y)
}
