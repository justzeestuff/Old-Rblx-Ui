class profileHeadshot{
    constructor(el){
        this.container = document.createElement('div')
        this.img = document.createElement('img')
        this.el = el
    }
    Init(){
        this.el.appendChild(this.img)
        this.UserId();
    }

    async UserId(){
        try{
            const response = await fetch("https://users.roblox.com/v1/users/authenticated");
            if(!response.ok) throw new Error("Failed to fetch user ID");
            
            const data = await response.json();
            this.AvatarHeadshot(data.id, 150, false)
        }
        catch(error){
            console.log("Error fetching user ID:", error);
        }
    }
    async AvatarHeadshot(id,size,circular ){
        try{
            const response = await fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${id}&size=${size}x${size}&format=Png&isCircular=${circular}`);
            if(!response.ok) throw new Error("Failed to fetch avatar headshot");

            const data = await response.json();
            this.img.src = data.data[0].imageUrl;
        }
        catch(error){
            console.log("Error fetching avatar headshot:", error);
        }
    }
}