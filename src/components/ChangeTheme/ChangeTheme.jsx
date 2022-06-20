//import style from './ChangeTheme.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { setDark, setLight } from '../../store//themeSlice'

const ChangeTheme = ({children}) => {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const change = () => {
    if (theme==="dark") dispatch(setLight())
    else dispatch(setDark())
  }

  return (
    <span onClick={() => change()}>{children}</span>
   );

}

export default ChangeTheme;