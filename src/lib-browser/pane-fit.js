function pane_fit(x)
{
 check(is_obj,x)

 const o=measure_text(x.text)
 
 x.width=2*x.padding+o.width
 x.height=2*x.padding+o.height
}
