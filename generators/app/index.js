const Generator = require('yeoman-generator')
module.exports = class extends Generator{
    prompting(){
        return this.prompt([
            {
                type:'input',
                name:'name',
                message:'Your project name',
                default:this.appname
            }
        ])
        .then(answers=>{
            this.answers = answers
        })
    }
    writing(){
        const tmpls = [
            'src/App.vue',                   
            'src/main.js',
            'src/components/HelloWorld.vue',
            'src/assets/logo.png',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'babel.config.js',
            'package-lock.json',
            'package.json'
        ]
        tmpls.forEach(item=>{
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}