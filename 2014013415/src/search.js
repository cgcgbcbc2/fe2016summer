 function search(infoArray, searchInfo) {
     //查找信息为年龄
     if (typeof searchInfo == "number") {
         var result = new Array;
         for (var i = 0; i < infoArray.length; i++) {
             if (infoArray[i].age == searchInfo) {
                 result.splice(0, 0, infoArray[i]);
             }
         }
         if (result.length == 0)
             return false;
         else
             return result;
     }
     //查找信息为名字
     else if (typeof searchInfo == "string") {
         for (var i = 0; i < infoArray.length; i++) {
             if (infoArray[i].name == searchInfo) {
                 return infoArray[i];
             }
         }
     }
     //查找信息为对象
     else {
         var result = new Array;
         for (var i = 0; i < infoArray.length; i++) {
             if (infoArray[i].name == searchInfo.name || searchInfo.name == undefined) {
                 if (infoArray[i].age == searchInfo.age || searchInfo.age == undefined) {
                     if (infoArray[i].hometown == searchInfo.hometown || searchInfo.hometown == undefined) {
                         result.splice(0, 0, infoArray[i]);
                     }
                 }
             }
         }
         if (result.length == 0)
             return false;
         else
             return result;
     }
 }
