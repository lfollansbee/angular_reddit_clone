allPosts = [
  {
    title: 'Old Faithful Inn',
    author: 'Robert Reamer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Old_Faithful_Inn_main_facade.jpg',
    description: 'As a national historic landmark, Old Faithful Inn is the most requested lodging facility in the park. Built in 1903-1904 with local logs and stone, the Inn is considered the largest log structure in the world. The towering lobby features a massive stone fireplace and a hand-crafted clock made of copper, wood and wrought iron serving as focal points.',
    date: "",
    votes: 327,
    upvote: function(){
      this.votes +=1
    },
    downvote: function(){
      this.votes -=1
    },
    date: new Date(),
    comments: [
      {
        author: 'Lucy',
        text:'Most incredible building on earth!'
      },
      {
        author: 'Heather',
        text: 'It\s the coziest.'
      }
    ],
    addComment: function (){
      var newComment = angular.copy(this.formComment);
      this.comments.push(newComment);
    }
  },
  {
    title: 'Lake Hotel',
    author: 'Teddy',
    image: 'http://www.yellowstonenationalparklodges.com/wp-content/gallery/lake-yellowstone/lake-yellowstone-hotel-01.jpg',
    description: 'Upon arrival, the hotel’s massive white columns welcome you to a time of classic, yet casual elegance. With the delicate sound of a string quartet, you’ll be captivated by views of Yellowstone Lake from the Sun Room. The historic Lake Yellowstone Hotel completed extensive interior renovations in June, 2014, restoring it to its Colonial Revival heritage. The multi-million dollar project included all guest rooms, dining room, bar and public spaces and a redesigned deli.',
    date: "",
    votes: -5,
    upvote: function(){
      this.votes +=1
    },
    downvote: function(){
      this.votes -=1
    },
    date: new Date(),
    comments: [
      {
        author: 'Billy the Bison',
        text:'It\'s so yellow...stone'
      }
    ],
    addComment: function (){
      var newComment = angular.copy(this.formComment);
      this.comments.push(newComment);
    }
  },
  {
    title: 'Roosevelt Lodge and Cabins',
    author: 'Rosie',
    image: 'http://www.yellowstonenationalparklodges.com/wp-content/gallery/roosevelt/roosevelt-lodge-04.jpg',
    description: 'Roosevelt Lodge Cabins, built in 1920 near Yellowstone’s Tower Falls area, is located near a campsite once used by President Theodore Roosevelt. The rustic cabins and family-style dining are a favorite of families and fisherman alike and the front porch rocking chairs give guests an opportunity to rock their stress to sleep and awaken their “Old West spirit.” A large corral operation offers horseback trail rides, stagecoach adventures and our popular Old West Dinner Cookout, where the steaks are tender, the wranglers are friendly, and the scenery is breathtaking.',
    date: "",
    votes: 15,
    upvote: function(){
      this.votes +=1
    },
    downvote: function(){
      this.votes -=1
    },
    date: new Date(),
    comments: [
      {
        author: 'Wolfie',
        text:'This is my favorite.'
      }
    ],
    addComment: function (){
      var newComment = angular.copy(this.formComment);
      this.comments.push(newComment);
    }
  }
];
