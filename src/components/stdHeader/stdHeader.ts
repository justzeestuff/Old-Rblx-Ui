class StdHeader{
    header: HTMLElement;
    constructor(){
        this.header = document.createElement('header');
    }
    Init(){
        document.body.appendChild(this.header);
        this.header.classList.add('stdHeader');
 
        this.navigationContainer();
        this.SettingsContainer();
    }
    navigationContainer(){
        const navigationContainer = document.createElement('div');
        navigationContainer.classList.add('navContainer')
        this.header.appendChild(navigationContainer);

        function SidebarDropDownbtn(){
            const btn = document.createElement('button');
            btn.classList.add('sidebarDropdownBtn')
            navigationContainer.appendChild(btn);
        }
        function RobloxLogo(){
            const btn = document.createElement('a');
            btn.classList.add('robloxIcon')
            navigationContainer.appendChild(btn);
        }
        function Navigation(){
            const nav = document.createElement('nav')
            const texts = ["Games","Catalog","Develop","ROBUX"]

            navigationContainer.appendChild(nav)
            for (let i = 0; i < texts.length; i++) {
                const btn = document.createElement('a');
                btn.textContent = texts[i];
                nav.appendChild(btn)
            }
        }
        function Searchbar(){
            const form = document.createElement('form');
            const input = document.createElement('input');

            navigationContainer.appendChild(form)
            form.appendChild(input);
    
            input.placeholder = "Search"
            
            form.addEventListener('submit', (e)=>{
                e.preventDefault();
                window.location.search = `/discover/!Keyword=${input.value}`
            })
        }

        // Call functions
        SidebarDropDownbtn();
        RobloxLogo();
        Navigation();
        Searchbar();     
    }
    SettingsContainer(){
        const settingsContainer = document.createElement('div')
        settingsContainer.classList.add('settingsContainer')
        this.header.appendChild(settingsContainer);
        
        async function Robux(){
            const container = document.createElement('div');
            const icon = document.createElement('img');
            const amount = document.createElement('p');
    
            icon.src = chrome.runtime.getURL('assets/img/robuxIcon.png')
            
            try{
                const response = await fetch("https://economy.roblox.com/v1/user/currency");
                if(!response.ok) throw new Error("Failed to fetch Robux");
                
                const data = await response.json();

                amount.textContent = data.robux;
                if(data.robux > 999) amount.textContent = `${Math.floor(data.robux / 1000)}K+`;
            }
            catch(error: any ){
                throw new Error("Failed to fetch Robux: " + error.message);
            }
    
            settingsContainer.appendChild(container);
            container.append(icon,amount);
        }
        function Settings(){
            const btn = document.createElement('button');
            const icon = document.createElement('img');
    
            icon.src = chrome.runtime.getURL('assets/img/SettingsIcon.png');
    
            settingsContainer.appendChild(btn);
            btn.appendChild(icon);
        }

        // Call functions
        Robux();
        Settings();
    }   
}