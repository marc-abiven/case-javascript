fn to_base64 x:str
 let buffer Buffer.from x

 ret buffer.toString "base64"
end