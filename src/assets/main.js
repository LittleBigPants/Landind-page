const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCECJDeK0MNapZbpaOzxrUPA&part=snippet%2Cid&order=date&maxResults=50';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'abf6cfd86dmsh17b164a78e44a4dp12571bjsn0a16b62a64c4',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData (urlApi) {
    
    const response = await fetch(urlApi,options);

    const data = await response.json();
    
    return data;
};

(async () => {
    try {
        const videos = await fetchData(API);
        let  view = `
        ${videos.items.map(video => `
        <a href="https://youtube.com/watch?v=${video.id.videoId}"target="_blank">
        <div class="group relative">
        <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
        </h3>
        </div>
        </div>
        `).slice(0,4).join("")}

        `;
        content.innerHTML = view;
    } catch (error){
        console.log(error);

    }
})();
