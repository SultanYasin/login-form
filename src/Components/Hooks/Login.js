import React, { useContext } from 'react'
import { CreateThemeContext } from './ThemeContext'

const Login = () => {
    let style = {}
    const importedCreateThemeContext = useContext(CreateThemeContext)

    if (importedCreateThemeContext.stateTheme === 'dark') {
        style ={ background : '#000', color:"#fff" }
    } else { style ={ background : '#fff', color:"blue" } }

  return (
    <div style={style} >
      <h4>Login</h4> <hr />
    </div>
  );
}

export default Login