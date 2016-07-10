
        
        function search(arr,pat)
        {
            var result = [];
            //confirm(typeof result);
            var check = false;
            if(typeof pat==='number')
            {
                for(var i=0,len=arr.length;i<len;i++)
                {
                    if(arr[i].age===pat)
                    {
                        check = true;
                        result.push(arr[i]);
                    }
                }
            }
            else if (typeof pat === 'string')
            {
                for(var i=0,len=arr.length;i<len;i++)
                {
                    if(arr[i].name===pat)
                    {
                        check = true;
                        result.push(arr[i]);
                        break;
                    }
                }
            }
            else if (typeof pat ==='object')
            {
                for(var i=0,len=arr.length;i<len;i++)
                {
                    var issame = true;
                    for (var prop in pat) {
                        if (pat.hasOwnProperty(prop)) {
                            if(arr[i][prop]!==pat[prop])
                            {
                                issame = false;
                                break;
                            }
                        }
                    }
                    if(issame==true)
                    {
                        check = true;
                        result.push(arr[i]);
                    }
                }
            }
            if (check === false)
                return false;
            else return result;

        }
        /*function obj(name,age,hometown)
        {
            this.name = name;
            this.age = age;
            this.hometown = hometown;
        }*/
        /*          test case
        --------------------------------------------------------
        var array = [new obj('amy', 21, 'bj'), new obj('bob', 21, 'ab'), new obj('jon', 21, 'de'),new obj('jon',33,'de')];
        var res = search(array, 21); //{ name: 'jon', hometown: 'de' });
       
        if (typeof res ==='object')
            for (var i = 0, len = res.length; i < len; i++) {
                console.log(res[i]);
            }
        else if (typeof res == 'boolean') {
            console.log(res);
        }
        else console.log('error');
        --------------------------------------------------------
        */
  