class Node{
  constructor() {
    this.key = 0,
    this.data = 0,
    this.next = null
  }
}

export default class Hashtable{
  constructor(){
    this._length,
    this.dataStore = []
  }

  hashFunction(key) {
    let sum = 0
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
    }
    return sum % 31
  }

  chain(){
    //iterate through the linkedlist until you reach a node whos next is null.
    //set that next to the new node that is created.
  }

  put(id, data){
    let hash = hashFunction(id)
    //see if hash # exists on the hash table.
    if(!this.dataStore.contains(hash)){
      //if it doesnt, create a new hash index in the table and put data there.

    }else{
      //otherwise chain off the lead hash into a linkedlist.
      
    }
  }

  get(){
    //finds the indexed hash number and looks at the key to locate the correct node.
    //returns that node's data.
  }

  contains(){
    //returns a boolean that state whether or not the hashtable contains that key.
  }

  iterate(){
    //moves throughout the hashtable in a determined fashion.
  }

  remove(){
    //moves throughout the hashtable to find a specific hash by its key.
    //removes that hash from the table without breaking any other connections.
  }

  size(){
    //returns the number of key stored hashes in the table.
  }
}
