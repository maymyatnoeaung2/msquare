const playListContainerTag = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];

const tracks = [
    { targetId: "music/track1.mp3", title: "One Direction - Night Changes" },
    { targetId: "music/track2.mp3", title: "One Direction - What Makes Your Beautiful" },
    { targetId: "music/track3.mp3", title: "One Direction - 8Letters" },
    { targetId: "music/track4.mp3", title: "Jennie - You and Me" }
];

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        const trackId = tracks[i].targetId;
        audioTag.src=trackId;
        audioTag.play();
    });
    trackTag.classList.add("trackItem");
    const soundTitle = (i + 1).toString() + ". " + tracks[i].title;
    trackTag.textContent = soundTitle;
    playListContainerTag.append(trackTag);
}

