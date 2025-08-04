
function toggleTracks(wrapper) {
    const trackList = wrapper.nextElementSibling;
    if (trackList && trackList.classList.contains('track-list')) {
        trackList.classList.toggle('hidden');
    }
}