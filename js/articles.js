const articles = [
    {
        "slug": "monoshirinny-shrift",
        "preview_img": "./images/header.jpg",
        "title": "Хедер",
        "short_desc": "Хедер – это блок в верхней части страницы сайта, который виден на всех страницах сайта. Как правило, содержит логотип, меню, контакты, переключатель языков или корзину, если в интернет-магазине...",
        "link_page": "header.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": []
    },
    {
        "slug": "modulnaya-setka",
        "preview_img": "./images/tree.jpg",
        "title": "Ёлочки",
        "short_desc": "Ёлочки – это треугольные кавычки, направленные в противоположные от заключаемого в кавычки текста сторону. Это стандартный тип кавычек для русских текстов. Кавычки обычно...",
        "link_page": "tree.html",
        "reading_time": 15,
        "tags": ["Мидл"],
        "categories": []
    },
    {
        "slug": "fish",
        "preview_img": "./images/toast.jpg",
        "title": "Тост",
        "short_desc": "Тост — это короткое немодальное уведомление, которое сообщает пользователю о результате выполнения его команды. Результат может быть положительным, отрицательным...",
        "link_page": "toast.html",
        "reading_time": 25,
        "tags": ["Мидл"],
        "categories": []
    },

    {
        "slug": "modulnaya-setka",
        "preview_img": "./images/grids.jpg",
        "title": "Гриды",
        "short_desc": "Гриды – это пересекающийся набор горизонтальных и вертикальных линий, образующих колонки и строки. Элементы могут быть помещены в грид в пределах линий этих колонок и строк. Грид имеет:...",
        "link_page": "grids.html",
        "reading_time": 25,
        "tags": ["Мидл"],
        "categories": ["вёрстка", "дизайн", "типографика"]
    },
    {
        "slug": "burger",
        "preview_img": "./images/burger.jpg",
        "title": "Бургер",
        "short_desc": "Бургер – устоявшееся название иконки, состоящей из трёх параллельных горизонтальных линий, символизирующих список меню. В начале 2010-х годов она стала стандартом изображения кнопки...",
        "link_page": "burger.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["UI", "дизайн"]
    },
    {
        "slug": "dedlajn",
        "preview_img": "./images/deadline.jpg",
        "title": "Дедлайн",
        "short_desc": "Дедлайн — это срок выполнения работы или задачи, определенный момент времени, к которому должен быть достигнут результат. По истечении времени элемент считается просроченным....",
        "link_page": "dedlajn.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["менеджмент", "типографика"]
    },
    {
        "slug": "monoshirinny-shrift",
        "preview_img": "./images/couple.jpg",
        "title": "Моноширинный шрифт",
        "short_desc": "Шрифт, в котором все символы имеют одинаковую ширину...",
        "link_page": "monoshirinny-shrift.html",
        "reading_time": 12,
        "tags": ["Мидл"],
        "categories": ["шрифты", "типографика"]
    },
    {
        "slug": "modulnaya-setka",
        "preview_img": "./images/grids.jpg",
        "title": "Модульная сетка",
        "short_desc": "Система горизонтальных и вертикальных направляющих для упорядочивания контента...",
        "link_page": "modulnaya-setka.html",
        "reading_time": 14,
        "tags": ["Мидл"],
        "categories": ["вёрстка", "дизайн", "типографика"]
    },
    {
        "slug": "fish",
        "preview_img": "./images/fish.jpg",
        "title": "Рыба",
        "short_desc": "Текст-заполнитель, используемый в макетах и дизайне.",
        "link_page": "fish.html",
        "reading_time": 5,
        "tags": ["Джун"],
        "categories": ["контент", "дизайн", "типографика"]
    },
    {
        "slug": "dizajn-lidy",
        "preview_img": "./images/toast.jpg",
        "title": "Дизайн лиды",
        "short_desc": "Описание дизайн лидов...",
        "link_page": "dizajn-lidy.html",
        "reading_time": 15,
        "tags": ["Мидл"],
        "categories": ["дизайн", "типографика"]
    },
    {
        "slug": "dizajn-sistema",
        "preview_img": "./images/tracking.jpg",
        "title": "Дизайн-система",
        "short_desc": "Описание дизайн-системы...",
        "link_page": "dizajn-sistema.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["разработка", "дизайн", "типографика"]
    },
    {
        "slug": "mokap",
        "preview_img": "./images/img3.png",
        "title": "Мокап",
        "short_desc": "Описание мокапа...",
        "link_page": "mokap.html",
        "reading_time": 15,
        "tags": ["Мидл"],
        "categories": ["интерфейс", "дизайн", "типографика"]
    },
    {
        "slug": "maskot",
        "preview_img": "./images/img4.png",
        "title": "Маскот",
        "short_desc": "Описание маскота...",
        "link_page": "maskot.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["брендинг", "иллюстрация", "типографика"]
    },
    {
        "slug": "mudbord",
        "preview_img": "./images/img5.png",
        "title": "Мудборд",
        "short_desc": "Вдохновляющая коллекция изображений и идей для концепции дизайна...",
        "link_page": "mudbord.html",
        "reading_time": 10,
        "tags": ["Джун"],
        "categories": ["дизайн", "референсы", "типографика"]
    },
    {
        "slug": "monohrom",
        "preview_img": "./images/mono.jpg",
        "title": "Монохром",
        "short_desc": "Использование одного цвета в различных оттенках...",
        "link_page": "monohrom.html",
        "reading_time": 10,
        "tags": ["Джун"],
        "categories": ["цвет", "дизайн", "брендинг"]
    },
    {
        "slug": "monograma",
        "preview_img": "./images/img4.png",
        "title": "Монограмма",
        "short_desc": "Графический знак, созданный из переплетения букв...",
        "link_page": "monograma.html",
        "reading_time": 12,
        "tags": ["Мидл"],
        "categories": ["брендинг", "логотип"]
    },
    {
        "slug": "mindmap",
        "preview_img": "./images/img5.png",
        "title": "Майндмэп",
        "short_desc": "Диаграмма, помогающая визуализировать идеи...",
        "link_page": "mindmap.html",
        "reading_time": 12,
        "tags": ["Мидл"],
        "categories": ["проектирование", "идеи", "брендинг"]
    },
    {
        "slug": "neomorfizm",
        "preview_img": "./images/img3.png",
        "title": "Неоморфизм",
        "short_desc": "Стиль дизайна, имитирующий выпуклые элементы...",
        "link_page": "neomorfizm.html",
        "reading_time": 15,
        "tags": ["Сениор"],
        "categories": ["интерфейс", "стиль"]
    },
    {
        "slug": "naming",
        "preview_img": "./images/img4.png",
        "title": "Нейминг",
        "short_desc": "Процесс создания названий для брендов...",
        "link_page": "naming.html",
        "reading_time": 14,
        "tags": ["Мидл"],
        "categories": ["брендинг", "копирайтинг"]
    },
    {
        "slug": "nostitel",
        "preview_img": "./images/img5.png",
        "title": "Носитель",
        "short_desc": "Материал или объект, на который наносится дизайн...",
        "link_page": "nostitel.html",
        "reading_time": 10,
        "tags": ["Джун"],
        "categories": ["брендинг", "материалы"]
    },
    {
        "slug": "beha",
        "preview_img": "./images/img3.png",
        "title": "Беха",
        "short_desc": "Behance — это многомиллионная коллекция работ от дизайнеров, разработчиков и творческих людей со всего Мира...",
        "link_page": "beha.html",
        "reading_time": 15,
        "tags": ["Сениор"],
        "categories": ["портфолио", "инструменты"]
    },
    {
        "slug": "ornament",
        "preview_img": "./images/img4.png",
        "title": "Орнамент",
        "short_desc": "Декоративный узор, применяемый в дизайне...",
        "link_page": "ornament.html",
        "reading_time": 10,
        "tags": ["Джун"],
        "categories": ["узоры", "графика"]
    },
    {
        "slug": "overprint",
        "preview_img": "./images/img5.png",
        "title": "Оверпринт",
        "short_desc": "Технология наложения одного цвета на другой...",
        "link_page": "overprint.html",
        "reading_time": 12,
        "tags": ["Мидл"],
        "categories": ["печать", "цвет", "сленг"]
    },
    {
        "slug": "plugin",
        "preview_img": "./images/img3.png",
        "title": "Плагин",
        "short_desc": "Дополнительный модуль для расширения функционала программы.",
        "link_page": "plugin.html",
        "reading_time": 10,
        "tags": ["Мидл"],
        "categories": ["разработка", "инструменты", "сленг"]
    },

    {
        "slug": "poluserif",
        "preview_img": "./images/poluserif.jpg",
        "title": "Полусериф",
        "short_desc": "Гибридный шрифт с элементами как засечек, так и гротеска.",
        "link_page": "poluserif.html",
        "reading_time": 10,
        "tags": ["Сениор"],
        "categories": ["дизайн", "шрифты"]
    },

    {
        "slug": "product-designer",
        "preview_img": "./images/img5.png",
        "title": "Продуктовый дизайнер",
        "short_desc": "Специалист, отвечающий за создание и улучшение продукта.",
        "link_page": "product-designer.html",
        "reading_time": 15,
        "tags": ["Мидл"],
        "categories": ["дизайн", "UX/UI", "сленг", "интерфейс"]
    },

    {
        "slug": "easter-egg",
        "preview_img": "./images/img5.png",
        "title": "Пасхалка",
        "short_desc": "Скрытый элемент в интерфейсе или контенте, обнаруживаемый случайно.",
        "link_page": "easter-egg.html",
        "reading_time": 10,
        "tags": ["Джун"],
        "categories": ["развлечение", "разработка", "интерфейс"]
    },

    {
        "slug": "reference",
        "preview_img": "./images/img5.png",
        "title": "Референс",
        "short_desc": "Образец или пример, используемый для вдохновения или подражания.",
        "link_page": "reference.html",
        "reading_time": 10,
        "tags": ["Мидл"],
        "categories": ["дизайн", "иллюстрация", "интерфейс"]
    },

    {
        "slug": "raster-graphics",
        "preview_img": "./images/img3.png",
        "title": "Растровая графика",
        "short_desc": "Изображение, состоящее из пикселей, в отличие от векторной графики.",
        "link_page": "raster-graphics.html",
        "reading_time": 10,
        "tags": ["Сениор"],
        "categories": ["дизайн", "технологии", "интерфейс"]
    },

    {
        "slug": "storytelling",
        "preview_img": "./images/img5.png",
        "title": "Сторителлинг",
        "short_desc": "Искусство создания историй для вовлечения аудитории.",
        "link_page": "storytelling.html",
        "reading_time": 15,
        "tags": ["Мидл"],
        "categories": ["контент", "брендинг", "интерфейс"]
    },

    {
        "slug": "accessibility",
        "preview_img": "./images/img3.png",
        "title": "Доступность",
        "short_desc": "Дизайн, учитывающий потребности людей с ограниченными возможностями.",
        "link_page": "accessibility.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["инклюзивность", "интерфейс", "интерфейс"]
    },

    {
        "slug": "serifs",
        "preview_img": "./images/img4.png",
        "title": "Засечки",
        "short_desc": "Маленькие штрихи на концах букв в шрифтах с засечками.",
        "link_page": "serifs.html",
        "reading_time": 5,
        "tags": ["Мидл"],
        "categories": ["дизайн", "шрифты", "интерфейс"]
    },

    {
        "slug": "golden-ratio",
        "preview_img": "./images/img5.png",
        "title": "Золотое сечение",
        "short_desc": "Пропорция, используемая для гармоничного визуального восприятия.",
        "link_page": "golden-ratio.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["дизайн", "искусство"]
    },

    {
        "slug": "icon",
        "preview_img": "./images/img3.png",
        "title": "Иконка",
        "short_desc": "Графический символ, используемый в интерфейсах и дизайне.",
        "link_page": "icon.html",
        "reading_time": 5,
        "tags": ["Сениор"],
        "categories": ["интерфейс", "графика"]
    },

    {
        "slug": "infographics",
        "preview_img": "./images/img4.png",
        "title": "Инфографика",
        "short_desc": "Графическое представление информации для её упрощенного восприятия.",
        "link_page": "infographics.html",
        "reading_time": 10,
        "tags": ["Мидл"],
        "categories": ["дизайн", "визуал"]
    },

    {
        "slug": "source-file",
        "preview_img": "./images/img5.png",
        "title": "Исходник",
        "short_desc": "Оригинальный файл проекта, доступный для редактирования.",
        "link_page": "source-file.html",
        "reading_time": 5,
        "tags": ["Мидл"],
        "categories": ["разработка", "дизайн", "колористика", "композиция"]
    },

    {
        "slug": "iteration",
        "preview_img": "./images/img3.png",
        "title": "Итерация",
        "short_desc": "Повторение процесса с целью улучшения результата.",
        "link_page": "iteration.html",
        "reading_time": 10,
        "tags": ["Мидл"],
        "categories": ["дизайн", "разработка", "колористика", "композиция"]
    },

    {
        "slug": "leading",
        "preview_img": "./images/road.jpg",
        "title": "Интерлиньяж",
        "short_desc": "Расстояние между строками текста в типографике.",
        "link_page": "leading.html",
        "reading_time": 5,
        "tags": ["Мидл"],
        "categories": ["дизайн", "шрифты", "колористика", "композиция"]
    },

    {
        "slug": "kerning",
        "preview_img": "./images/pair.jpg",
        "title": "Кернинг",
        "short_desc": "Регулировка расстояния между отдельными буквами.",
        "link_page": "kerning.html",
        "reading_time": 5,
        "tags": ["Джун"],
        "categories": ["дизайн", "шрифты", "колористика", "композиция"]
    },

    {
        "slug": "font-size",
        "preview_img": "./images/size.jpg",
        "title": "Кегль",
        "short_desc": "Размер шрифта, определяющий высоту букв.",
        "link_page": "font-size.html",
        "reading_time": 5,
        "tags": ["Джун"],
        "categories": ["дизайн", "шрифты", "колористика", "композиция"]
    },

    {
        "slug": "composition",
        "preview_img": "./images/img4.png",
        "title": "Композиция",
        "short_desc": "Расположение элементов в дизайне для создания гармоничного восприятия.",
        "link_page": "composition.html",
        "reading_time": 10,
        "tags": ["Джун"],
        "categories": ["дизайн", "искусство", "колористика", "композиция"]
    },

    {
        "slug": "case-study",
        "preview_img": "./images/img5.png",
        "title": "Кейс",
        "short_desc": "Разбор реального проекта с анализом решений и результатов.",
        "link_page": "case-study.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["маркетинг", "дизайн", "колористика", "композиция"]
    },
    {
        "slug": "kadrovanie",
        "preview_img": "./images/img4.png",
        "title": "Кадрирование",
        "short_desc": "Описание кадрирования...",
        "link_page": "kadrovanie.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["дизайн", "фото", "колористика", "композиция"]
    },
    {
        "slug": "keyvisual",
        "preview_img": "./images/img5.png",
        "title": "Кейвижуал (KV)",
        "short_desc": "Описание кейвижуала...",
        "link_page": "keyvisual.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["брендинг", "реклама", "колористика", "композиция"]
    },
    {
        "slug": "kinetic_typography",
        "preview_img": "./images/img3.png",
        "title": "Кинетическая типографика",
        "short_desc": "Описание кинетической типографики...",
        "link_page": "kinetic_typography.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["анимация", "типографика", "колористика", "композиция"]
    },
    {
        "slug": "typography",
        "preview_img": "./images/img4.png",
        "title": "Типографика",
        "short_desc": "Описание типографики...",
        "link_page": "typography.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["дизайн", "шрифты", "колористика", "композиция"]
    },
    {
        "slug": "client_experience",
        "preview_img": "./images/img5.png",
        "title": "Клиентский опыт",
        "short_desc": "Описание клиентского опыта...",
        "link_page": "client_experience.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["маркетинг", "UX", "колористика", "композиция"]
    },
    {
        "slug": "collage",
        "preview_img": "./images/img3.png",
        "title": "Коллаж",
        "short_desc": "Описание коллажа...",
        "link_page": "collage.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["дизайн", "иллюстрация"]
    },
    {
        "slug": "kursiv",
        "preview_img": "./images/cursive.jpg",
        "title": "Курсив",
        "short_desc": "Описание курсива...",
        "link_page": "kursiv.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["типографика", "шрифты"]
    },
    {
        "slug": "lyustra",
        "preview_img": "./images/img5.png",
        "title": "Люстра",
        "short_desc": "Описание люстры...",
        "link_page": "lyustra.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["дизайн", "интерьер"]
    },
    {
        "slug": "lending",
        "preview_img": "./images/img3.png",
        "title": "Лендинг",
        "short_desc": "Описание лендинга...",
        "link_page": "lending.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["веб-дизайн", "маркетинг"]
    },
    {
        "slug": "lettering",
        "preview_img": "./images/img4.png",
        "title": "Леттеринг",
        "short_desc": "Описание леттеринга...",
        "link_page": "lettering.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["шрифты", "иллюстрация"]
    },
    {
        "slug": "merch",
        "preview_img": "./images/img4.png",
        "title": "Мерч",
        "short_desc": "Описание мерча...",
        "link_page": "merch.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["брендинг", "дизайн"]
    },
    {
        "slug": "ab-test",
        "preview_img": "./images/img5.png",
        "title": "А/В-тестирование",
        "short_desc": "Описание А/В-тестирования...",
        "link_page": "ab-test.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["маркетинг", "анализ"]
    },
    {
        "slug": "aidentika",
        "preview_img": "./images/img4.png",
        "title": "Айдентика",
        "short_desc": "Описание айдентики...",
        "link_page": "aidentika.html",
        "reading_time": 15,
        "tags": ["Мидл"],
        "categories": ["брендинг", "дизайн"]
    },
    {
        "slug": "antikva",
        "preview_img": "./images/antique.jpg",
        "title": "Антиква",
        "short_desc": "Описание антиквы...",
        "link_page": "antikva.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["типографика"]
    },
    {
        "slug": "balans",
        "preview_img": "./images/img3.png",
        "title": "Баланс",
        "short_desc": "Описание баланса...",
        "link_page": "balans.html",
        "reading_time": 15,
        "tags": ["Сениор"],
        "categories": ["дизайн"]
    },
    {
        "slug": "brief",
        "preview_img": "./images/img4.png",
        "title": "Бриф",
        "short_desc": "Описание брифа...",
        "link_page": "brief.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["работа с клиентами", "документация"]
    },
    {
        "slug": "bol-pols",
        "preview_img": "./images/img4.png",
        "title": "Боль пользователя",
        "short_desc": "Описание боли пользователя...",
        "link_page": "bol-pols.html",
        "reading_time": 15,
        "tags": ["Сениор"],
        "categories": ["UX"]
    },
    {
        "slug": "backlog",
        "preview_img": "./images/img5.png",
        "title": "Бэклог",
        "short_desc": "Описание бэклога...",
        "link_page": "backlog.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["проектирование", "разработка"]
    },
    {
        "slug": "brendbuk",
        "preview_img": "./images/img3.png",
        "title": "Брендбук",
        "short_desc": "Описание брендбука...",
        "link_page": "brendbuk.html",
        "reading_time": 15,
        "tags": ["Мидл"],
        "categories": ["брендинг", "документация"]
    },
    {
        "slug": "brending",
        "preview_img": "./images/img4.png",
        "title": "Брендинг",
        "short_desc": "Описание брендинга...",
        "link_page": "brending.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["брендинг"]
    },
    {
        "slug": "vektorny-format",
        "preview_img": "./images/img5.png",
        "title": "Векторный формат",
        "short_desc": "Описание векторного формата...",
        "link_page": "vektorny-format.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["графика"]
    },
    {
        "slug": "vyklychka",
        "preview_img": "./images/straight.jpg",
        "title": "Выключка",
        "short_desc": "Описание выключки...",
        "link_page": "vyklychka.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["дизайн"]
    },
    {
        "slug": "wairfrejm",
        "preview_img": "./images/img5.png",
        "title": "Вайрфрейм",
        "short_desc": "Описание вайрфрейма...",
        "link_page": "wairfrejm.html",
        "reading_time": 15,
        "tags": ["Сениор"],
        "categories": ["дизайн", "интерфейс"]
    },
    {
        "slug": "votermarky",
        "preview_img": "./images/img3.png",
        "title": "Вотермарки",
        "short_desc": "Описание вотермарков...",
        "link_page": "votermarky.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["графика"]
    },
    {
        "slug": "gajdlajny",
        "preview_img": "./images/img4.png",
        "title": "Гайдлайн",
        "short_desc": "Описание гайдлайнов...",
        "link_page": "gajdlajny.html",
        "reading_time": 15,
        "tags": ["Мидл"],
        "categories": ["дизайн", "документация"]
    },
    {
        "slug": "grjaznye-cveta",
        "preview_img": "./images/img5.png",
        "title": "Грязные цвета",
        "short_desc": "Описание грязных цветов...",
        "link_page": "grjaznye-cveta.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["цвет"]
    },
    {
        "slug": "gradient",
        "preview_img": "./images/zasechki.jpg",
        "title": "Градиент",
        "short_desc": "Описание градиента...",
        "link_page": "gradient.html",
        "reading_time": 15,
        "tags": ["Мидл"],
        "categories": ["дизайн"]
    },
    {
        "slug": "goryachie-klavishi",
        "preview_img": "./images/tree.jpg",
        "title": "Горячие клавиши",
        "short_desc": "Описание горячих клавиш...",
        "link_page": "goryachie-klavishi.html",
        "reading_time": 15,
        "tags": ["Джун"],
        "categories": ["интерфейс"]
    }
];