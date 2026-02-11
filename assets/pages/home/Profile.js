class homepageProfle{
    constructor(){
        this.profileContainer = document.createElement('div')
        this.headshot = document.createElement('img');
        this.username = document.createElement('p');
    }
    Init(){
        const main = document.querySelector('main');

        main.appendChild(this.profileContainer);
        this.profileContainer.append(this.headshot, this.username)
    }
}