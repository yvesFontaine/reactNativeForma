import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet } from 'react-native';




export default function SplashScreen(props) {
  const [secondes, setsecondes] = useState({count : 2})
  useEffect(() => {
    reduceSeconde();
  }); 
  
  useEffect(() => {
    console.log('init splash');
  }, []);
  const reduceSeconde=()=>{
    setTimeout(()=>{
      if(secondes.count>0){
        setsecondes({count: secondes.count-1});
      } else {
        props.onFinishSplash();
      }
    }, 1000)
  }

  return (
    <View style={{backgroundColor: 'grey', height: '100%', alignContent:'center', alignItems: 'center', paddingTop:'65%'}} data-testid="SplashScreen">
      <Text> Bienvenue dans mon app</Text>  
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://images-na.ssl-images-amazon.com/images/I/91BNtrXiGFL._AC_SX425_.jpg',
        }}
      />
      <Text>Patientez {secondes.count}s</Text>
    </View>
  );  
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150
  }
});

SplashScreen.propTypes = {};

SplashScreen.defaultProps = {};