fn link_init url:str title
 if is_undef title
  let title url_beautify url

  ret link_init url title
 end

 check is_str title

 ret obj url title
end
