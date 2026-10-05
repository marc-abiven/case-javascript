fn dom_by_tag node query
 if is_str node
  ret dom_by_tag document node

 check is_obj node
 check is_str query

 let collection node.getElementsByTagName query

 ret arr_from collection
end
