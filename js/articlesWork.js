document.addEventListener('DOMContentLoaded', function() {
    const nopaginationRelatedIsActive = nopaginationRelated ?? false;

    const articlesPerPage = nopaginationRelatedIsActive ? 3 : 6; // Количество статей на странице
    let currentPage = 1; // Текущая страница
    let currentCategory = 'все'; // Текущая категория

    function displayArticles(page = 1, category = 'все') {
        const filteredArticles = category === 'все'
            ? articles
            : articles.filter(article => article.categories.includes(category));

        const start = (page - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        const paginatedArticles = filteredArticles.slice(start, end);

        const articlesHtml = paginatedArticles.map(article => `
            <a href="articles/${article.link_page}">
                <div>
                    <img src="${(constArticle ? "." : "" )+ article.preview_img}" alt="${article.title}">
                    <h3>${article.title}</h3>
                    <h4 class="Descr">${article.short_desc}</h4>
                </div>
                <div class="Nav">
                    <h5 class="tag">${article.tags.join(', ')}</h5>
                    <span class="time">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.58808 17.8202C4.9062 17.8202 1.1095 14.0235 1.1095 9.34162C1.1095 4.65974 4.9062 0.863037 9.58808 0.863037C14.2716 0.863037 18.0667 4.65974 18.0667 9.34162C18.0667 14.0235 14.2716 17.8202 9.58808 17.8202" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M9.38562 6.48242V9.79415L11.9902 11.383" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span>${article.reading_time} мин</span>
                    </span>
                </div>
            </a>
        `).join('');

        document.querySelector('.AriclesBlock').innerHTML = articlesHtml;

        if(!nopaginationRelatedIsActive) {
            updatePagination(filteredArticles.length, page);
        }
    }

    function updatePagination(totalArticles, currentPage) {
        const totalPages = Math.ceil(totalArticles / articlesPerPage);
        let paginationHtml = '';
        for (let i = 1; i <= totalPages; i++) {
            paginationHtml += `<a href="#" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
        }
        document.querySelector('.Pagination').innerHTML = paginationHtml;
    }

    if(!nopaginationRelatedIsActive) {
        document.querySelector('.Pagination').addEventListener('click', function (event) {
            event.preventDefault();
            if (event.target.tagName === 'A') {
                currentPage = parseInt(event.target.textContent);
                displayArticles(currentPage, currentCategory);
            }
        });
    }

    document.querySelectorAll('.filter h4').forEach(filter => {
        filter.addEventListener('click', function() {
            document.querySelectorAll('.filter h4').forEach(f => f.classList.remove('active'));

            this.classList.add('active');

            currentCategory = this.textContent.trim().toLowerCase();
            currentPage = 1;
            displayArticles(currentPage, currentCategory);
        });
    });

    displayArticles(currentPage, currentCategory);
});