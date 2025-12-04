const reels = [
  {
    username: "travel_guru",
    likeCount: 12000,
    isLiked: false,
    commentCount: 320,
    caption: "Exploring the mountains 🏔️",
    video: "vd1.mp4",
    userProfile: "https://i.pravatar.cc/40?img=1",
    shareCount: 140,
    isFollowed: false
  },
  {
    username: "foodie_corner",
    likeCount: 8500,
    isLiked: true,
    commentCount: 210,
    caption: "Best street food ever! 😋",
    video: "vd2.mp4",
    userProfile: "https://i.pravatar.cc/40?img=2",
    shareCount: 95,
    isFollowed: true
  },
  {
    username: "fitness_pro",
    likeCount: 15000,
    isLiked: false,
    commentCount: 520,
    caption: "Leg day grind 💪🔥",
    video: "vd3.mp4",
    userProfile: "https://i.pravatar.cc/40?img=3",
    shareCount: 330,
    isFollowed: false
  },
  {
    username: "tech_world",
    likeCount: 6400,
    isLiked: false,
    commentCount: 150,
    caption: "This gadget is insane 🤯",
    video: "vd4.mp4",
    userProfile: "https://i.pravatar.cc/40?img=4",
    shareCount: 60,
    isFollowed: true
  },
  {
    username: "nature_snapper",
    likeCount: 19000,
    isLiked: true,
    commentCount: 780,
    caption: "Sunset goals 🌅✨",
    video: "vd1.mp4",
    userProfile: "https://i.pravatar.cc/40?img=5",
    shareCount: 270,
    isFollowed: true
  },
  {
    username: "fashion_vibes",
    likeCount: 7200,
    isLiked: false,
    commentCount: 190,
    caption: "OOTD 💖✨",
    video: "vd2.mp4",
    userProfile: "https://i.pravatar.cc/40?img=6",
    shareCount: 85,
    isFollowed: false
  },
  {
    username: "music_mood",
    likeCount: 25500,
    isLiked: true,
    commentCount: 960,
    caption: "This beat hits different 🎧🔥",
    video: "vd3.mp4",
    userProfile: "https://i.pravatar.cc/40?img=7",
    shareCount: 480,
    isFollowed: false
  },
  {
    username: "pet_paradise",
    likeCount: 18000,
    isLiked: false,
    commentCount: 600,
    caption: "Cutest dog ever 🐶💗",
    video: "vd4.mp4",
    userProfile: "https://i.pravatar.cc/40?img=8",
    shareCount: 210,
    isFollowed: true
  },
  {
    username: "art_studio",
    likeCount: 9400,
    isLiked: true,
    commentCount: 240,
    caption: "Painting this took 7 hours 🎨",
    video: "vd1.mp4",
    userProfile: "https://i.pravatar.cc/40?img=9",
    shareCount: 120,
    isFollowed: false
  },
  {
    username: "street_photography",
    likeCount: 13200,
    isLiked: false,
    commentCount: 410,
    caption: "City lights ✨📸",
    video: "vd2.mp4",
    userProfile: "https://i.pravatar.cc/40?img=10",
    shareCount: 160,
    isFollowed: true
  }
];

var sum = '';

reels.forEach(function (ele) {
  sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${ele.video}"></video>
                  
                    <div class="bottom">
                        <div class="user">
                            <img src="${ele.userProfile}" alt="">
                            <h4>${ele.username}</h4>
                            <button>${ele.isFollowed?'unfollow':'follow'}</button>
                        </div>
                        <h3>${ele.caption}</h3>
                    </div>

                    <div class="right">

                        <div class="like icon">
                            <h4 class="like" >${ele.isLiked?'<i class="ri-heart-fill liked"></i>':'<i class="ri-heart-3-line">'}</i></h4> 
                            <h6>${ele.likeCount}</h6>
                        </div>

                        <div class="comment icon">
                            <h4 class="cmt" ><i class="ri-chat-1-line"></i></h4> 
                            <h6>${ele.commentCount}</h6>
                        </div>

                        <div class="share icon">
                            <h4 class="share" ><i class="ri-share-forward-line"></i></h4> 
                            <h6>${ele.shareCount}</h6>
                        </div>
        
                        <div class="menu icon">
                            <h4 class="menu" ><i class="ri-more-2-line"></i></h4> 
                        </div>
                    </div>
                   
                </div>`
  
})

var allreels = document.querySelector('.all-reels')
allreels.innerHTML = sum;


