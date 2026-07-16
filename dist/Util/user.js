"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class profileHeadshot {
    UserId() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://users.roblox.com/v1/users/authenticated");
                if (!response.ok)
                    throw new Error("Failed to fetch user ID");
                const data = yield response.json();
                return data.id;
            }
            catch (error) {
                console.log("Error fetching user ID:", error);
            }
        });
    }
    AvatarHeadshot(id, size, circular = true) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${id}&size=${size}x${size}&format=Png&isCircular=${circular}`);
                if (!response.ok)
                    throw new Error("Failed to fetch avatar headshot");
                const data = yield response.json();
                return data.data[0].imageUrl;
            }
            catch (error) {
                console.log("Error fetching avatar headshot:", error);
            }
        });
    }
}
