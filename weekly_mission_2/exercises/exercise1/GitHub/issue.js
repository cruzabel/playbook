const issue = {
    title: "post jest",
    repositoryNameAssociated: "LaunchX",
    status: "Open",
    numberOfComments: 10,
    labels: "2",
    author: "Abel",

    getTitleAndAuthor: function () {
        return `This issue ${this.title} by ${this.author}`
    },
    getGeneralInfo: function () {
        return `This issue ${this.title} is associated with ${this.repositoryNameAssociated}
    }

}
console.log("Nombre del issue: " + issue.title);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
         

   
   
   