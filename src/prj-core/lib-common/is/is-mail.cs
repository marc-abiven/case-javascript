fn is_mail x
 if not is_str x
  ret false

 let a split x "@"

 if not is_pair a
  ret false

 let user shift a
 let domain shift a

 if not is_user user
  ret false

 if not is_domain domain
  ret false

 ret true
end