const config = {

    prompt: {
        name: `<c class="brightRed">guest</c>`,
        at: `<c class="white"> @ </c>`,
        host: `<c class="green">great.engineer</c> `,
        separator: `<c class="white">$</c>`,
    },

    welcome: `

<c class="brightRed">  ⠀⠀⠀⢠⡀                         </c>
<c class="brightRed"> ⠀⠀⠀⠀⠈⢿⣦⡀                       </c>
<c class="brightRed">⠀⠀⠀⢦⣄⠰⣄⡛⢿⣷⣦⣤⣀⡀               </c>
<c class="brightRed">⠀⠀⠈⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣷⣦⣀            </c>
<c class="brightRed">⠀⢀⣴⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣌⡻⣿⣄         </c>
<c class="brightRed">⢀⣾⣿⣿⡿⢚⣿⡿⠟⠙⢿⣿⣿⣿⡟⠻⢿⣿⣷⣶⣆     </c>
<c class="brightRed">⠀⣼⣿⡿⣫⣾⡖⠀⠐⣿⠗⠀⠉⠻⣿⣷⠀⠀⠈⠙⢿⡏     </c>
<c class="brightRed">⠀⣿⣿⣵⣿⡟⢴⣦⣤⠙⠀⠀⠀⢀⣼⣿⣆⡀⠀⠀⠘⠀⠀⠀   </c>
<c class="brightRed">⠀⡿⢻⣿⣿⡇⡌⢻⣿⡀⠀⠀⠀⠀⠈⠉⠉⠁       </c><c class="foreground pixelated">[time]</c>
<c class="brightRed">⠀⠇⠸⣿⣿⡇⣧⡀⠈⠓      </c>     ___       __              _____    _       __               
<c class="brightRed">  ⠀⢻⣿⣇⢻⣷⡴⢦⣤⣀    </c>    / _ \\___  / /____ __ _    / ___/___(_)_ _  / /  ___ _______ _
<c class="brightRed">  ⠀⠀⠙⣿⡀⠻⠿⢶⣤⣀⣀   </c>   / , _/ _ \\/ __/ -_)  ' \\  / (_ / __/ /  ' \\/ _ \\/ -_) __/ _ \`/
<c class="brightRed">  ⠀⠀⠀⠈⠓⠄⠀⠀⠀⠀⠉⠁  </c>   /_/|_|\\___/\\__/\\__/_/_/_/  \\___/_/ /_/_/_/_/_.__/\\__/_/  \\_, / 
<c class="brightBlack">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</c> /___/  
<c class="blue pixelated">Welcome to my interactive web terminal.</c>
<c class="brightGreen">For a list of available commands, type <c class="cyan glow">'help'</c>.</c>
<br/>`,

    commands: {

        whois: {
            description: "Who is Rotem Grimberg",
            help: "You just type whois and get my life story, what help do you need?!",
            handler: "write",
            data: `<br/>
            I'm Rotem Grimberg, a full-stack developer, and a tech enthusiast.
            I have a passion for creating and learning new things, and I'm always looking for new challenges.
            I have a BSc in Computer Science and I'm currently working as a frontend architect at a startup company.
            <br/><br/>`
        },

        projects: {
            description: "View coding projects",
            help: "View coding projects",
            handler: "many",
            data: [
                {
                    handler: "idle",
                },
                {
                    handler: "write",
                    data: "<br/>loading projects, please wait...</br>",
                    delay: 1000,
                },
                {
                    handler: "write",
                    data: `<br/>Found! redirecting to <a class="brightRed glow"><a href="github.com/rotemgrim">GitHub</a></c></br>`,
                    delay: 1000,
                },
                {
                    handler: "newTab",
                    data: "https://github.com/rotemgrim/",
                    delay: 2000,
                },
                {
                    handler: "setPrompt",
                }
            ]
        },

        banner: {
            description: "prints the terminal welcome banner",
            handler: "banner",
        },

        su: {
            description: "switch the current user",
            handler: "setPromptName",
        },
    }
};
