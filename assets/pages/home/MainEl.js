class homepageMainEl{
    constructor(){
        this.main = document.createElement('main');
        this.container = document.createElement('div')
    }
    Init(){
        // Appending
        document.body.appendChild(this.main);
        document.body.appendChild(this.container)

        // Classlist
        this.main.classList.add('homepageMainEl');
        this.container.classList.add('homepageContainer');
    }
}