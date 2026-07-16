class profileHeadshot{
    async UserId(){
        try{
            const response = await fetch("https://users.roblox.com/v1/users/authenticated");
            if(!response.ok) throw new Error("Failed to fetch user ID");
            
            const data = await response.json();
            return data.id;
        }
        catch(error){
            console.log("Error fetching user ID:", error);
        }
    }
    async AvatarHeadshot(id:Number,size:Number,circular: boolean = true ){
        try{
            const response = await fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${id}&size=${size}x${size}&format=Png&isCircular=${circular}`);
            if(!response.ok) throw new Error("Failed to fetch avatar headshot");

            const data = await response.json();
            return data.data[0].imageUrl;
        }
        catch(error){
            console.log("Error fetching avatar headshot:", error);
        }
    }
}