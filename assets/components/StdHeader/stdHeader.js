class StdHeader{
    constructor(){
        this.header = document.createElement('header');

        this.navigationContainer = document.createElement('div');
        this.settingsContainer = document.createElement('div');

        this.navigation = document.createElement('nav');
        this.form = document.createElement('form')
    }
    Init(){
        document.body.appendChild(this.header);

        this.header.appendChild(this.navigationContainer);
        this.header.appendChild(this.settingsContainer);

        this.header.classList.add('stdHeader')
        this.navigationContainer.classList.add('navContainer')
        this.settingsContainer.classList.add("settingsContainer")

        this.RobloxLogo();
        this.navigationContainer.append(this.navigation,this.form)

        // Functions
        this.Navigation();
        this.Searchbar();

        this.RobuxInfo();
        this.SettingsBtn();
    }

    RobloxLogo(){
        const btn = document.createElement('a');
        btn.classList.add('robloxIcon')
        this.navigationContainer.appendChild(btn);
    }
    Navigation(){
        const texts = ["Games","Catalog","Develop","ROBUX"]
        for (let i = 0; i < texts.length; i++) {
            const btn = document.createElement('a');
            btn.textContent = texts[i];
            this.navigation.appendChild(btn)
        }
    }
    Searchbar(){
        const input = document.createElement('input');
        this.form.appendChild(input);

        input.placeholder = "Search"
        
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault();
            window.location.search = `/discover/!Keyword=${input.value}`
        })
    }
    SettingsBtn(){
        const btn = document.createElement('button');
        const icon = document.createElement('img');

        icon.src = chrome.runtime.getURL('assets/img/SettingsIcon.png');

        this.settingsContainer.appendChild(btn);
        btn.appendChild(icon);
    }
    RobuxInfo(){
        const container = document.createElement('div');
        const icon = document.createElement('img');
        const amount = document.createElement('p');

        icon.src = chrome.runtime.getURL('assets/img/robuxIcon.png')

        fetch("https://economy.roblox.com/v1/user/currency",)
        .then(res => res.json())
        .then(data =>{
            amount.textContent = data.robux;
            if(data.robux > 999) amount.textContent = `${Math.floor(data.robux / 1000)}K+`;
        })

        this.settingsContainer.appendChild(container);
        container.append(icon,amount);
        
    }
}