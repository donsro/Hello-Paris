function Themes() {
    const cssThemes = {
        themeA: {
            colors: {
                textPrimary: 'RoyalBlue',
                bgPrimary: 'LightSkyBlue',
                borderColor: 'DeepSkyBlue'
            },
            spacing: {
                margin: '2em 0',
                padding: '2em'
            }
        },
        themeB: {
            colors: {
                textPrimary: 'Peru',
                bgPrimary: 'Bisque',
                borderColor: 'BurlyWood'
            },
            spacing: {
                margin: '2em 0',
                padding: '2em'
            }
        }
    }
    return cssThemes;
}

export default Themes;
