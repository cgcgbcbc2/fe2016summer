"use strict";

//Difference function
function diff(db1, db2)
{   var result = [];
    for (var i=0;i<db2.length;i++)
        for (var j=0;j<db1.length;j++)
        {   var found = false;
            if (db2[i].name===db1[j].name)
            {   found = true;
                break;
            }
            if (!found)
                result.push(db2[i]);
        }
    return result;
}

//Export function in Node.js
if (module&&module.exports)
    module.exports = diff;
