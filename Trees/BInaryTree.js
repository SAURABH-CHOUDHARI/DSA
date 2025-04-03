class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    createTree(){
        let data=prompt("Enter val :");
        if(data ==-1)return null;
        let newNode = new Node(data);
        console.log("Enter left child for "+ data);
        newNode.left = this.createTree();
        console.log("Enter right child for "+ data);
        newNode.right = this.createTree();
        return newNode;
    }
}    

let obj = new Tree();
obj.root = obj.createTree();