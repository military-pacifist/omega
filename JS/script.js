document.addEventListener('DOMContentLoaded', function() {
    const albumWrappers = document.querySelectorAll('.album-wrapper');
    const trackLists = document.querySelectorAll('.track-list');

    let currentlyActiveAlbumId = null;

    albumWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function() {
            const albumId = this.dataset.albumId;
            if (currentlyActiveAlbumId === albumId) {
                hideAllTracks();
            currentlyActiveAlbumId = null;
            }
            else {
                currentlyActiveAlbumId = albumId;
                showTracks(albumId);
            }
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
            selectedTrackList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
    function hideAllTracks() {
        albumWrappers.forEach(wrapper => wrapper.classList.remove('active'));
        trackLists.forEach(list => list.classList.remove('active'));
    }
});



const faqItems = document.querySelectorAll('.faq_item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq_question');
    question.addEventListener('click', () => {
        faqItems.forEach(i => i.classList.remove('active')); // Закрыть все ответы
        item.classList.add('active'); // Открыть текущий
    });
});
