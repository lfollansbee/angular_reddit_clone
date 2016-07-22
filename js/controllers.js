app.controller("Reddit", function($scope){
  $scope.posts = allPosts
  $scope.submitForm = function(isValid){
    console.log(this.post.title);
    if (isValid) {
      var newPost = new this.Post();
      newPost.title = this.post.title;
      newPost.author = this.post.author;
      newPost.description = this.post.description;
      newPost.image = this.post.image;
      $scope.posts.push(newPost);
      $scope.post = {};
    }
  }
  $scope.Post = function(){
    this.date = new Date();
    this.votes = 0;
    this.upvote = function(){
      this.votes +=1
    };
    this.downvote = function(){
      this.votes -=1
    };
    this.comments = [];
    this.addComment = function (){
      var newComment = angular.copy(this.formComment);
      this.comments.push(newComment);
    }
  }
})
