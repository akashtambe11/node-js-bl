var fs = require("fs");

class Hash {
    fileReadHash() {
        var textData = fs.readFileSync(__dirname + "/TextFiles/HashingFile.txt", "utf-8");
        return textData.trim();  

    }
    
    /**
     * @description hash function to calculate modulas of value and size
     */
    hash(num, tableSize){
        try{ 
     
            if(num == undefined || num == null || num.length == 0 || tableSize == undefined || tableSize == null || tableSize.length == 0)   
                                                    throw "input should not be undefined or null"
        }
        catch(e){
            return e;
        } 
            
        return num % tableSize;
    }

    add(data, linkList, size){
        try{ 
     
            if(data == undefined || data == null || data.length == 0 || linkList == undefined || linkList == null || linkList.length == 0 || size == undefined || size == null || size.length == 0)   
                                                    throw "input should not be undefined or null"
        }
        catch(e){
            return e;
        } 
      
        
        let index = this.hash(data, size)
        let insert = false;
        
        for(let i = 0; i < linkList[index].length; i++){
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

    remove(data, linkList, size){
        try{ 
     
            if(data == undefined || data == null || data.length == 0 || linkList == undefined || linkList == null || linkList.length == 0 || size == undefined || size == null || size.length == 0)   
                                                    throw "input should not be undefined or null"
        }
        catch(e){
            return e;
        } 

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

    print(linkList, size){
        try{ 
     
            if(linkList == undefined || linkList == null || linkList.length == 0 || size == undefined || size == null || size.length == 0)   
                                                    throw "input should not be undefined or null"
        }
        catch(e){
            return e;
        } 

        var str ="";
        for(let i = 0; i < size; i++){
            str = str + linkList[i] + ", ";
        }
        console.log(linkList);
        fs.writeFileSync(__dirname + "/TextFiles/HashingFile.txt", str, "utf-8");
        // return str;   
    }
}

/**
 * @description Create object of to export Hash class
 */
module.exports = new Hash();
