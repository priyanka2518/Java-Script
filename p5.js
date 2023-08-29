class Node
{
    constructor(data)
    {
        this.data = data;
        this.left =null;
        this.right = null;
    }
}
class BST
{
    constructor(data)
    {
        this.root= null;
    }
    Insert(data)
    {
        var NewNode = new Node(data);
        if(this.root===null)
        {
            this.root=NewNode;
        }
        else
        {
            this.InsertNode(this.root,NewNode)
        }
    }
    InsertNode(node,NewNode)
    {
        if(NewNode.data<node.data)
        {
            if(node.left==null)
            {
                node.left=NewNode;
            }
            else
            {
                this.InsertNode(node.left,NewNode);
            }
        }
        else
        {
            if(node.right==null)
            {
                node.right=NewNode;
            }
            else
            {
                this.InsertNode(node.right,NewNode)
            }
        }
    }
    getrootNode()
    {
        return this.root;
    }
    findminimum(node)
    {
        if(node.left==null)
        {
            return node
        }
        else
        {
            return this.findminimum(node.left);
        }
    }
    findmax(node)
    {
        if(node.right==null)
        {
            return node
        }
        else
        {
            return this.findmax(node.right);
        }
    }
}
const b = new BST();
b.Insert(11);
b.Insert(2);
b.Insert(3);
b.Insert(1);
b.Insert(23);
b.Insert(21);

console.log(JSON.stringify(b));

var root = b.getrootNode();

console.log("               ");
console.log("Minimum:");
console.log(b.findminimum(root));

console.log("               ");
console.log("max:");
console.log(b.findmax(root));
