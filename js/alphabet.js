document.addEventListener("DOMContentLoaded", function () {
    let mode = 'alphabet';
    let selectedLetter = null;

    const words = {};


    articles.forEach(article => {
        const firstLetter = article.title[0].toUpperCase();
        const title = article.title;
        const link = article.link_page;

        if (!words[firstLetter]) {
            words[firstLetter] = [];
        }

        words[firstLetter].push([title, link]);
    });

    for (const letter in words) {
        words[letter].sort((a, b) => a[0].localeCompare(b[0], 'ru'));
    }

    const sortedWords = Object.keys(words)
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .reduce((acc, key) => {
            acc[key] = words[key];
            return acc;
        }, {});


    const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ".split("");

    const contentDiv = document.getElementById("content");
    const btnAlphabet = document.getElementById("btnAlphabet");
    const btnDictionary = document.getElementById("btnDictionary");

    function createButton(letter, isActive = false) {
        const btn = document.createElement("div");
        btn.textContent = letter;
        if (isActive) {
            btn.className = "active";
        }
        btn.onclick = () => {
            selectedLetter = letter;
            renderDictionaryForLetter(letter);
        };
        return btn;
    }

    function createWordListItem(word, link) {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = 'articles/'+link;
        anchor.textContent = word;
        listItem.appendChild(anchor);
        return listItem;
    }

    function renderAlphabet(letterBold = null) {
        contentDiv.innerHTML = "";
        const alphabetDiv = document.createElement("div");
        alphabetDiv.className = "Alphabet";

        alphabet.forEach(letter => {
            const btn = createButton(letter, letterBold === letter);
            alphabetDiv.appendChild(btn);
        });

        contentDiv.appendChild(alphabetDiv);
    }

    function renderDictionaryForLetter(letter) {
        contentDiv.innerHTML = "";
        renderAlphabet(letter);
        const dictionaryDiv = document.createElement("div");
        dictionaryDiv.className = "Dictionary";

        const title = document.createElement("h3");
        title.textContent = letter;
        dictionaryDiv.appendChild(title);

        const list = document.createElement("ul");
        (words[letter] || []).forEach(([word, link]) => {
            const listItem = createWordListItem(word, link);
            list.appendChild(listItem);
        });

        dictionaryDiv.appendChild(list);
        contentDiv.appendChild(dictionaryDiv);
    }

    function renderDictionary() {
        contentDiv.innerHTML = "";
        const dictionaryDiv = document.createElement("div");
        dictionaryDiv.className = "Dictionary";

        Object.entries(sortedWords)
            .sort(([letterA], [letterB]) => letterA.localeCompare(letterB, 'ru'))
            .forEach(([letter, wordList]) => {
                const section = document.createElement("div");

                const title = document.createElement("h3");
                title.textContent = letter + letter.toLowerCase();
                section.appendChild(title);

                const list = document.createElement("ul");

                wordList.sort((a, b) => a[0].localeCompare(b[0], 'ru'))
                    .forEach(([word, link]) => {
                        const listItem = createWordListItem(word, link);
                        list.appendChild(listItem);
                    });

                section.appendChild(list);
                dictionaryDiv.appendChild(section);
            });


        contentDiv.appendChild(dictionaryDiv);

        const AbcDiv = document.createElement("div");
        AbcDiv.className = "Abc";

        alphabet.forEach(letter => {
            const btn = createButton(letter);
            AbcDiv.appendChild(btn);
        });

        dictionaryDiv.appendChild(AbcDiv);
    }

    btnAlphabet.onclick = function () {
        mode = 'alphabet';
        btnAlphabet.classList.add("active");
        btnDictionary.classList.remove("active");
        renderAlphabet();
    };

    btnDictionary.onclick = function () {
        mode = 'dictionary';
        btnDictionary.classList.add("active");
        btnAlphabet.classList.remove("active");
        renderDictionary();
    };

    renderAlphabet();
});