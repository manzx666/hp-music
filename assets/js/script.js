let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/poster-10.jpg",
    posterUrl: "./assets/images/poster-10.jpg",
    title: "𝘿𝙧𝙪𝙣𝙠 𝙏𝙚𝙭𝙩",
    album: "sad.",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-10.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-24.jpg",
    posterUrl: "./assets/images/poster-24.jpg",
    title: "𝙍𝙚𝙘𝙠𝙡𝙚𝙨𝙨",
    album: "Madison Beer",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-24.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-25.jpg",
    posterUrl: "./assets/images/poster-25.jpg",
    title: "𝙃𝙖𝙥𝙥𝙞𝙚𝙧",
    album: "Olivia Rodrigo",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-25.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-26.jpg",
    posterUrl: "./assets/images/poster-26.jpg",
    title: "𝘿𝙖𝙣𝙙𝙚𝙡𝙞𝙤𝙣𝙨",
    album: "Ruth B.",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-26.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-30.jpg",
    posterUrl: "./assets/images/poster-30.jpg",
    title: "𝙞𝙢𝙥𝙤𝙨𝙨𝙞𝙗𝙡𝙚 𝙨𝙥𝙚𝙚𝙙 𝙪𝙥",
    album: "James Arthur",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-30.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-13.jpg",
    posterUrl: "./assets/images/poster-13.jpg",
    title: "𝘾𝙡𝙖𝙧𝙞𝙩𝙮 𝙣𝙞𝙜𝙝𝙩𝙘𝙤𝙧𝙚",
    album: "zedd feat",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-13.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "𝘿𝙪𝙠𝙖",
    album: "Last Child",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-1.mp3",
  },
   {
    backgroundImage: "./assets/images/poster-18.jpg",
    posterUrl: "./assets/images/poster-18.jpg",
    title: "𝙀𝙨𝙩-𝙘𝙚 𝙦𝙪𝙚 𝙩𝙪 𝙢'𝙖𝙞𝙢𝙚𝙨",
    album: "Erwin gaje",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-18.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-0.jpg",
    posterUrl: "./assets/images/poster-0.jpg",
    title: "𝘽𝙡𝙪𝙚 𝘽𝙞𝙧𝙙",
    album: "naruto",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-2.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "𝙍𝙖𝙞𝙣𝙮𝙘𝙝 𝙆𝙖𝙣𝙖𝙨𝙝𝙞𝙢𝙞 𝙬𝙤 𝙔𝙖𝙨𝙖𝙨𝙝𝙞𝙨𝙖 𝙣𝙞",
    album: "naruto",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-3.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "ロクデナシ  ただ声一つ",
    album: "sad",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-4.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-11.jpg",
    posterUrl: "./assets/images/poster-11.jpg",
    title: "𝙊𝙝 𝙢𝙮 𝙠𝙖𝙙𝙝𝙖𝙡𝙚",
    album: "sad",
    year: 2007,
    artist: "zubir khan x ezra kairo",
    musicPath: "./assets/music/music-11.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-17.jpg",
    posterUrl: "./assets/images/poster-17.jpg",
    title: "𝘿𝙞𝙢𝙖𝙣𝙖 𝙝𝙖𝙩𝙞𝙢𝙪 𝙨𝙥𝙚𝙙-𝙪𝙥",
    album: "papinka",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-17.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-19.jpg",
    posterUrl: "./assets/images/poster-19.jpg",
    title: "𝙏𝙖𝙠𝙠𝙖𝙣 𝙥𝙚𝙧𝙜𝙞 (𝙨𝙥𝙚𝙚𝙙 𝙪𝙥)",
    album: "Hyper act",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-19.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-28.jpg",
    posterUrl: "./assets/images/poster-28.jpg",
    title: "𝘼𝙙𝙖𝙠𝙖𝙝 𝙞𝙣𝙞 𝙢𝙞𝙢𝙥𝙞",
    album: "Reedwann",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-28.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-29.jpg",
    posterUrl: "./assets/images/poster-29.jpg",
    title: "𝘾𝙞𝙣𝙩𝙖 𝙋𝙖𝙣𝙙𝙖𝙣𝙜 𝙋𝙚𝙧𝙩𝙖𝙢𝙖",
    album: "Reedwann",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-29.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-20.jpg",
    posterUrl: "./assets/images/poster-20.jpg",
    title: "𝙏𝙚𝙧𝙘𝙞𝙥𝙩𝙖 𝙎𝙖𝙩𝙪 𝙎𝙚𝙣𝙮𝙪𝙢𝙖𝙣",
    album: "Reedwann",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-20.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-21.jpg",
    posterUrl: "./assets/images/poster-21.jpg",
    title: "𝘼𝙨𝙖𝙡 𝙆𝙖𝙪 𝘽𝙖𝙝𝙖𝙜𝙞𝙖",
    album: "Armada",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-21.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-8.jpg",
    posterUrl: "./assets/images/poster-8.jpg",
    title: "𝘽𝙖𝙞𝙠 𝙗𝙖𝙞𝙠 𝙨𝙖𝙮𝙖𝙣𝙜",
    album: "sad",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-8.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-9.jpg",
    posterUrl: "./assets/images/poster-9.jpg",
    title: "𝙗𝙞𝙣𝙩𝙖𝙣𝙜 𝙝𝙖𝙩𝙞𝙠𝙪",
    album: "sad",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-9.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-14.jpg",
    posterUrl: "./assets/images/poster-14.jpg",
    title: "𝙨𝙚𝙠𝙚𝙘𝙚𝙬𝙖 𝙞𝙩𝙪",
    album: "Angga candra",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-14.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-15.jpg",
    posterUrl: "./assets/images/poster-15.jpg",
    title: "𝙎𝙚𝙡𝙖𝙢𝙖𝙣𝙮𝙖",
    album: "Usop",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-15.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-16.jpg",
    posterUrl: "./assets/images/poster-16.jpg",
    title: "𝙋𝙚𝙧𝙩𝙖𝙢𝙖 𝙠𝙖𝙡𝙞",
    album: "shaa",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-16.mp3",
  },
   {
    backgroundImage: "./assets/images/poster-34.jpg",
    posterUrl: "./assets/images/poster-34.jpg",
    title: "𝙋𝙚𝙧𝙘𝙖𝙮𝙖 𝙋𝙖𝙙𝙖𝙠𝙪",
    album: "Ungu",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-34.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-33.jpg",
    posterUrl: "./assets/images/poster-33.jpg",
    title: "𝙃𝙖𝙡 𝙃𝙚𝙗𝙖𝙩",
    album: "Govinda",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-33.mp3",
  },
   {
    backgroundImage: "./assets/images/poster-31.jpg",
    posterUrl: "./assets/images/poster-31.jpg",
    title: "𝘼𝙠𝙪 𝙋𝙖𝙨𝙩𝙞 𝙏𝙖𝙪",
    album: "Bagindas",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-31.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-32.jpg",
    posterUrl: "./assets/images/poster-32.jpg",
    title: "𝘼𝙠𝙪 𝙔𝙖𝙣𝙜 𝙟𝙖𝙩𝙪𝙝 𝘾𝙞𝙣𝙩𝙖",
    album: "Dudy oris",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-32.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-23.jpg",
    posterUrl: "./assets/images/poster-23.jpg",
    title: "𝙆𝙪 𝙅𝙪𝙜𝙖 𝙢𝙚𝙣𝙘𝙞𝙣𝙩𝙖𝙞𝙢𝙪",
    album: "saiful",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-23.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-27.jpg",
    posterUrl: "./assets/images/poster-27.jpg",
    title: "𝙎𝙞𝙣𝙖𝙧 𝙋𝙚𝙡𝙖𝙣𝙜𝙞",
    album: "project band",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-27.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-22.jpg",
    posterUrl: "./assets/images/poster-22.jpg",
    title: "𝙎𝙤𝙣𝙜 𝙏𝙞𝙠𝙩𝙤𝙠",
    album: "TIKTOK",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-22.mp3",
    },    
    {  
    backgroundImage: "./assets/images/poster-7.jpg",
    posterUrl: "./assets/images/poster-7.jpg",
    title: "𝙎𝙖𝙙 𝙎𝙤𝙣𝙜 𝙏𝙞𝙠𝙩𝙤𝙠 ♫",
    album: "Manz diari",
    year: 2007,
    artist: "Manz",
    musicPath: "./assets/music/music-7.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
