export const practicTextInputData = {
    titlePage: 'Поиск багов input type="text"',
    descriptionPage: 'Перед вами одно текстовое поле, с доступностью ввода от 3 до 15 символов. Попытайтесь найти все кейсы которые вы бы применили в реальной жизни для тестирования такой формы',
    placeholderInput: 'Введите имя',

    casesResult: {
        latinCase: 'Ввод латиницы',
        cyrillicCase: 'Ввод кириллицы',
        numbersCase: 'Ввод цифр',
        minLengthCase: 'Ввод минимальной длины (3 символа)',
        specialCharsCase: 'Ввод спецсимволов',
        sqlInjectionCase: 'Проверка на SQL-инъекции',
        maxLengthCase: 'Ввод максимальной длины (15 символов)',
        overMaxLengthCase: 'Ввод границы (16 символов)',
        emptyFieldCase: 'Поле пустое',
        onlySpacesCase: 'Только пробелы',
        leadingSpacesCase: 'Пробелы в начале строки',
        trailingSpacesCase: 'Пробелы в конце строки',
        underMinLengthCase: 'Ввод границы (2 символа)'
    },
    cases: {
        latinCase: 'latin',
        cyrillicCase: 'ввод',
        numbersCase: '43543',
        minLengthCase: 'имя',
        specialCharsCase: '!"№№;%:?*()(_',
        sqlInjectionCase: 'SELECT',
        maxLengthCase: 'ронекспавтонекс',
        overMaxLengthCase: 'ронекспавтонексп',
        emptyFieldCase: '',
        onlySpacesCase: '   ',
        leadingSpacesCase: ' фывфыв',
        trailingSpacesCase: 'gdfgdf  ',
        underMinLengthCase: 'оп'
    }

}