/**
 * Created by Ma_Zi_jun on 2016/7/2.
 */
"use strict";
/* search method helps you to get result from classInfo based on searchItem */
function search(classInfo, searchItem){
    var searchResult;
    switch (typeof searchItem){
        case "number":
            searchResult = classInfo.filter(function(item, index, array){
                return (item.age === searchItem);
            });
            return (searchResult.length !== 0) ? searchResult : false;
        case "string":
            for (var i = 0; i < classInfo.length; i++){
                if (classInfo[i].name === searchItem){
                    return classInfo[i];
                }
            }
            return false;
        case "object":
            searchResult = classInfo.filter(function(item, index, array){
                return ((typeof searchItem.age === "undefined" || item.age === searchItem.age)
                && (typeof searchItem.name === "undefined" || item.name === searchItem.name)
                && (typeof searchItem.hometown === "undefined" || item.hometown === searchItem.hometown));
            });
            return (searchResult.length !== 0) ? searchResult : false;
    }
}

/* Here is an example to show you how to use the method search
var result = search([{name: "Derek", age: 21, hometown: "Dalian"},
    {name: "Amy", age: 19, hometown: "Hangzhou"},
    {name: "Celina", age: 23, hometown: "Dalian"},
    {name: "Einstein", age: 23, hometown: "Chengdu"},
    {name: "Amy", age: 21, hometown: "Dalian"},
    {name: "Einstein", age: 20, hometown: "Beijing"},
    {name: "Bobby", age: 22, hometown: "Anhui"},
    {name: "Derek", age: 21, hometown: "Dalian"},
    {name: "Amy", age: 21, hometown: "Dalian"},
    {name: "Amy", age: 19, hometown: "Hangzhou"}], {});

console.log(result);*/