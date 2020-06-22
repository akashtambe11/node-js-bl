/**
 * @description Dependencies are required to be install before execution of this file.
 */
var fs = require("fs");

/**
 * @class Hash to read external text file.
 */
class Hash {
    /**
     * @method fileReadHash() - To read HashingFile.txt file.
     */
    fileReadHash() {
        var textData = fs.readFileSync(__dirname + "/TextFiles/HashingFile.txt", "utf-8");
        return textData.trim();  

    }
    
    /**
     * @method hash() - hash function to calculate modulas of value and size.
     */
    hash(num, tableSize){
        try{ 
            /**
            * @description To handle execeptions.
            */
            if(num == undefined || num == null || num.length == 0 || tableSize == undefined || tableSize == null || tableSize.length == 0)   
                                                    throw "input should not be undefined or null"
            return num % tableSize;

        }
        catch(e){
            return e;
        } 
            
        
    }

    /**
     * @method add() - To add data.
     */
    add(data, linkList, size){
        
        try{ 
            /**
            * @description To handle execeptions.
            */
            if(data == undefined || data == null || data.length == 0 || linkList == undefined || linkList == null || linkList.length == 0 || size == undefined || size == null || size.length == 0)   
                                                    throw "input should not be undefined or null"
            let index = this.hash(data, size)
            let insert = false;
            /**
             * @description If array length is zero, then directly push data.
             */
            if(linkList[index].length == 0){
                linkList[index].push(data);
                return true;
            }

            for(let i = 0; i < linkList[index].length; i++){

                /**
                 * @description if 
                 */

                if(linkList[index][i] === data){
                    linkList[index][i] = data;
                    insert = true;
                }  

            }
        
            if(insert === false){
                
                linkList[index].push(data);
                return true;
        }
        }
        catch(e){
            return e;
        } 
      
        
        
    }

    /**
     * @method remove() - To remove data.
     */
    remove(data, linkList, size){
        try{ 
            /**
            * @description To handle execeptions.
            */
            if(data == undefined || data == null || data.length == 0 || linkList == undefined || linkList == null || linkList.length == 0 || size == undefined || size == null || size.length == 0)   
                                                    throw "input should not be undefined or null"
        
            let index = this.hash(data, size)
            let deleted = false;
        

            if(linkList[index].length === 1 && linkList[index][0] == data){
                linkList[index].splice(0,1);
            }
            else{
                for(let i = 0; i < linkList[index].length; i++){
                    if(linkList[index][i] === data){
                        
                        linkList[index].splice(i,1);
                        deleted = true;
                        return true;
                    }
                }
                if(deleted == false){
                    return this.add(data);
                }
            }                                        
        }
        catch(e){
            return e;
        } 

      
    }

    /**
     * @method print() - To print data.
     */
    print(linkList, size){
        try{ 
            /**
            * @description To handle execeptions.
            */
            if(linkList == undefined || linkList == null || linkList.length == 0 || size == undefined || size == null || size.length == 0)   
                                                    throw "input should not be undefined or null"
                                                    
            var str ="";
            for(let i = 0; i < size; i++){
                str = str + linkList[i] + ", ";
            }
            /**
             * @description To write data in file.
             */
            console.log(linkList);
            fs.writeFileSync(__dirname + "/TextFiles/HashingFile.txt", str, "utf-8");
        }
        catch(e){
            return e;
        } 

       
   
    }
}

/**
 * @description Create object of to export Hash class
 */
module.exports = new Hash();

