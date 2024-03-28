import {Link, useLocation} from 'react-router-native'
import { StyleSheet } from 'react-native';
import StyledText from './StyledText'

const  AppBarTab = ({children, to}) =>{
    const { pathname } = useLocation();
    const active = pathname === to;
  
    const textStyles = [styles.text, active && styles.active];
  
    return (
      <Link to={to} underlayColor={"transparent"}>
        <StyledText fontWeight="bold" style={textStyles}>
          {children}
        </StyledText>
      </Link>
    );
  };


  const styles = StyleSheet.create({
    text: {
        padding: 5
        
    }
  })


  export default AppBarTab
  