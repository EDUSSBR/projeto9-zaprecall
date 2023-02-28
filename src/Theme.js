import { ThemeProvider } from "styled-components"

const styles = {
    colors: {
        white: "#FFFFFF",
        pinkBg: "#FB6B6B",
        
        welcomeBgBorder: "#DBDBDB",
        welcomeBtnAndBorderColor: "#D70900",

        answerAndIconBlack: "#333333",

        incorrectRed: "#FF3030",
        correctGreen: "#2FBE34",
        correctYellow: "#FF922E",
    },
    fonts: {
        logo: {
            fontFamily: ['Righteous', 'sans-serif'],
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '45px',
            textAlign: 'center',
            letterSpacing: '-0.012em',
        },
        bonus: {
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '22px',
        }
    }
}

export default function Theme({ children }) {
    return <ThemeProvider theme={styles}>{children}</ThemeProvider>
}