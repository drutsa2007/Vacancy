import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: (localStorage.getItem("theme"))?localStorage.getItem("theme"):"dark",
  },
  reducers: {
    setDark: (state) => {
      let root = document.querySelector(':root');
      root.style.setProperty('--background-color', '#16161a');
      root.style.setProperty('--block-color', '#282833');
      root.style.setProperty('--font-color', '#FFFFF0');
      state.value = 'dark'
      localStorage.setItem("theme", "dark")
    },
    setLight: (state) => {
      let root = document.querySelector(':root');
      root.style.setProperty('--background-color', '#FFFFF0');
      root.style.setProperty('--block-color', '#D9D9CA');
      root.style.setProperty('--font-color', '#16161a');
      state.value = 'light'
      localStorage.setItem("theme", "light")
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDark, setLight } = themeSlice.actions

export default themeSlice.reducer