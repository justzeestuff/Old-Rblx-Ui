class homepageMainEl{
    constructor(){
        this.main = document.createElement('main');
    }
    Init(){
        // Appending
        document.body.appendChild(this.main);

        // Classlist
        this.main.classList.add('homepageMainEl');
    }
}