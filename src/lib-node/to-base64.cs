fn to_base64 x:str
 let buffer Buffer.from x
 let r buffer.toString "base64"

 ret r
end