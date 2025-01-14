document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').textContent = data.title;

            const contentDiv = document.getElementById('content');
            data.chapters.forEach(chapter => {
                const chapterElement = document.createElement('div');
                const chapterTitle = document.createElement('h2');
                chapterTitle.textContent = chapter.chapter;
                chapterElement.appendChild(chapterTitle);

                chapter.verses.forEach((verse, index) => {
                    const verseElement = document.createElement('p');
                    verseElement.textContent = `Verse ${index + 1}: ${verse}`;
                    chapterElement.appendChild(verseElement);
                });

                contentDiv.appendChild(chapterElement);
            });

            document.getElementById('conclusion').textContent = data.conclusion;
        })
        .catch(error => console.error('Error loading content:', error));
});