const repo={
    name: 'LaunchX',
    author: 'Abel',
    language: 'JavaScript',
    numberOfCommits: 100,
    star: 0,
    forks: 0,
    issues_open: 0,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log('Nombre del repo:' + repo.name)
console.log('Issues totales: ' + repo.getTotalIssues())
console.log(repo.getGeneralInfo())