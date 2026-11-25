//compare strings without accents

fn cmp_i18n x:def y:def
 if is_str x
  if is_str y
   let x unaccent x
   let x to_lower x

   let y unaccent y
   let y to_lower y

   ret cmp x y
  end
 end

 ret cmp x y
end
