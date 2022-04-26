// modelado de isue
const issue = {
    title: 'post jest',
    repositoryNameAssociated: 'LaunchX',
    status: 'open',
    numbersOfComemts: 88,
    labels: 8,
    author:'Abel',

    getTitleAndAuthor: function(){
        return `This issue ${this.title} by ${this.author}`

    },
    getGenralInfo: function(){
        return `Issue ${this.title}`

    }
}
console.log('nombre issue ' + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGenralInfo())
