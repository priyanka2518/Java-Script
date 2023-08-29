// Q.4)Create doubly link list program and perform following operations:
// 1)insert node from end
//2)delete node from end
class node
{
    constructor(value)
    {
        this.value=value;
        this.pre=null;
        this.next=null;
    }
}
class Doublylinkedlist
{
    constructor(value)
    {
        const newnode=new node(value);

        this.head=newnode;
        this.tail=newnode;
        this.length=1;
    }
    //push()

    push(value)
    {
        const newnode=new node(value);

        if(!this.length)
        {
            this.head=newnode;
            this.tail=newnode;
        }
        else
        {
            this.tail.next=newnode;
            newnode.pre=this.tail;
            this.tail=newnode;
        }
        this.length++;
        return this;
    }

    //pop()
    pop()
    {
        if(!this.length)
          return undefined;
        let temp=this.tail;
        if(this.length==1)
        {
            this.head=null;
            this.tail=null;
        
        }
        else
        {
            temp.pre.next=null;
            let tail=temp.pre;
            temp.pre=null;
        }
        this.length--;
        return temp;
    }

    
}
const dl=new Doublylinkedlist(1);
console.log(dl);
dl.push(2);
dl.push(3);
dl.push(4);
dl.push(5);
console.log(dl);
dl.pop();
console.log(dl);
