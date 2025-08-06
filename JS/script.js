document.addEventListener('DOMContentLoaded', function() {
    const albumWrappers = document.querySelectorAll('.album-wrapper');
    const trackLists = document.querySelectorAll('.track-list');

    albumWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function() {
            const albumId = this.dataset.albumId
            showTracks(albumId)
        });
    });

    function showTracks(albumId) {
        albumWrappers.forEach(wrapper => {
            wrapper.classList.remove('active');
        });

        trackLists.forEach(list => {
            list.classList.remove('active');
        });

        const selectedAlbum = document.querySelector(
            `.album-wrapper[data-album-id="${albumId}"]`
        );
        const selectedTrackList = document.querySelector(
            `.track-list[data-album-id="${albumId}"]`
        );

        if (selectedTrackList) {
            selectedTrackList.classList.add('active');
        }
        if (selectedAlbum) {
            selectedAlbum.classList.add('active');
        }
    }
});