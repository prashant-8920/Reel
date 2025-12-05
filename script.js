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

var allreels = document.querySelector('.all-reels')

function addData(){
  let sum = '';
  reels.forEach(function (ele, idx) {
    sum += `<div class="reel">
                <video autoplay loop muted playsinline src="${ele.video}"></video>

                <div class="bottom">
                  <div class="user">
                    <img src="${ele.userProfile}" alt="">
                    <h4>${ele.username}</h4>
                    <button class="follow-btn" data-idx="${idx}">${ele.isFollowed ? 'unfollow' : 'follow'}</button>
                  </div>
                  <h3>${ele.caption}</h3>
                </div>

                <div class="right">
                  <!-- use data-idx on the container and avoid duplicate .like on child -->
                  <div class="like icon" data-idx="${idx}">
                    <h4 class="like-btn">${ele.isLiked
                      ? '<i class="ri-heart-fill liked"></i>'
                      : '<i class="ri-heart-3-line"></i>'}
                    </h4>
                    <h6>${ele.likeCount}</h6>
                  </div>

                  <div class="comment icon" data-idx="${idx}">
                    <h4 class="cmt"><i class="ri-chat-1-line"></i></h4>
                    <h6>${ele.commentCount}</h6>
                  </div>

                  <div class="share icon" data-idx="${idx}">
                    <h4 class="share-btn"><i class="ri-share-forward-line"></i></h4>
                    <h6>${ele.shareCount}</h6>
                  </div>

                  <div class="menu icon">
                    <h4 class="menu"><i class="ri-more-2-line"></i></h4>
                  </div>
                </div>
             </div>`;
  });

  allreels.innerHTML = sum;
}

addData();

// delegated click listener: find closest .like.icon and read its data-idx
allreels.addEventListener('click', function (evt) {

   // FOLLOW / UNFOLLOW
  const followBtn = evt.target.closest('.follow-btn');
  
  if (followBtn) {
    const idx = followBtn.dataset.idx;
    console.log("Follow button clicked at index:", idx);
    

    reels[idx].isFollowed = !reels[idx].isFollowed;

    followBtn.textContent = reels[idx].isFollowed ? "unfollow" : "follow";

    return;
  }


  const likeContainer = evt.target.closest('.like.icon');
  if (likeContainer) {
    const idx = Number(likeContainer.dataset.idx);
    console.log('like clicked for index', idx);

    // Example: toggle like in data and update UI (optional)
    reels[idx].isLiked = !reels[idx].isLiked;
    reels[idx].likeCount += reels[idx].isLiked ? 1 : -1;

    // update only that like block instead of re-rendering everything:
    const likeCountEl = likeContainer.querySelector('h6');
    const iconEl = likeContainer.querySelector('i');
    if (likeCountEl) likeCountEl.textContent = reels[idx].likeCount;
    if (iconEl) {
      iconEl.className = reels[idx].isLiked ? 'ri-heart-fill liked' : 'ri-heart-3-line';
    }
  }


// SHARE HANDLER
const shareContainer = evt.target.closest('.share.icon');
if (shareContainer) {
  const idx = Number(shareContainer.dataset.idx);
  console.log('shared clicked for index', idx);


  const videoFile = reels[idx].video;
  const shareUrl = `${location.origin}/${videoFile}`;
  const shareText = `${reels[idx].caption} — by ${reels[idx].username}`;

  // Try native share API
  if (navigator.share) {
    navigator.share({
      title: reels[idx].username,
      text: shareText,
      url: shareUrl
    })
    .then(() => {
      reels[idx].shareCount++;
      shareContainer.querySelector('h6').textContent = reels[idx].shareCount;
    })
    .catch(err => console.log("Share cancelled"));
  } 
  else {
    // Fallback: copy link
    navigator.clipboard.writeText(`${shareText} — ${shareUrl}`)
      .then(() => {
        alert("Link copied to clipboard!");
        reels[idx].shareCount++;
        shareContainer.querySelector('h6').textContent = reels[idx].shareCount;
      });
  }

  return;
}

  
});

