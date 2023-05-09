class List {
    constructor(item) {
        this.item = item
    }
    render() {
        const elements = document.createElement('ul')
        const arr = this.item
        console.log(arr)
        arr.forEach(element => {
            console.log(element)
            const li = document.createElement("li");
            li.innerHTML = element;
            elements.appendChild(li);
        });
        const currentDiv = document.getElementById("spisok");
        document.body.insertBefore(elements, currentDiv);     
        
    }
}
const list = new List(['one', 'two', 'three', 'four', 'five', 'six'])

list.render()

class List2 extends List {
    constructor(item, cssClass) {
        super(item)
        this.cssClass = cssClass
    }
    render() {
        const elements = document.createElement('ul')
        elements.style.color = this.cssClass
        const arr = this.item
        console.log(arr)
        arr.forEach(element => {
            console.log(element)
            const newContent = document.createElement("li");
            newContent.innerHTML = element;
            elements.appendChild(newContent);
        });
        const currentDiv = document.getElementById("spisok");
        document.body.insertBefore(elements, currentDiv);     
    }
    
}

class List3 extends List {
    constructor(item, cssClass) {
        super(item)
        this.cssClass = cssClass
    }
    render() {
        const elements = document.createElement('ul');
        elements.classList.add(...this.cssClass);
        console.log(this.cssClass);
        const arr = this.item;
        console.log(arr);
        arr.forEach((element) => {
          console.log(element);
          const newContent = document.createElement('li');
          newContent.innerHTML = element;
          elements.appendChild(newContent);
        });
        const currentDiv = document.getElementById('spisok');
        document.body.insertBefore(elements, currentDiv);
      }


}


const list2 = new List2(['one', 'two', 'three', 'four', 'five'], 'red')
list2.render()
const list3 = new List3(['one', 'two', 'three'], ['text-center', 'bold', 'text-red'])
list3.render()