class homepageProfle{
    constructor(){
        this.profileContainer = document.createElement('div')
    }
    Init(){
        document.body.appendChild(this.profileContainer)
        const profileimg = new profileHeadshot(this.profileContainer)
        profileimg.Init();
    }
}
