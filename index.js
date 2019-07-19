let recipes={}
function updateObjectWithKeyAndValue(object,key,value){
  object[key]=value
  return object
  
}
function updateObjectWithKeyAndValue(object,key,value){
 let newObj=Object.assign({},obj,object[key]=value) 
 return newObj
}