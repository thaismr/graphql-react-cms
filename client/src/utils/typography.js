import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"

parnassusTheme.headerFontFamily = ['Permanent Marker','Tahoma','Verdana','Helvetica']
parnassusTheme.bodyFontFamily = ['Sniglet','Tahoma','Verdana','Helvetica']
parnassusTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4': {
    marginLeft: 0,
    marginRight: rhythm(2),
    marginTop:0,
    marginBottom: rhythm(1/2),
  },
  a: {
    color: "#888c1b",
    boxShadow: "none",
  },
  'a:hover': {
    color: "#c9d02a",
  },
  body: {
    background: "#0d3036",
  },
})

const typography = new Typography(parnassusTheme)

export const { scale, rhythm, options } = typography

export default typography
