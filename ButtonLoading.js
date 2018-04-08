 

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback ,ActivityIndicator
} from 'react-native';
 

type Props = {};
export default class ButtonLoading extends Component<Props> {
  componentWillMount() {

  }
  constructor(props)
  {
      super(props);
      this.state = {
          width:200,
          layout: new Animated.Value(1),
          alpha: new Animated.Value(0.0),
          alpha2: new Animated.Value(1.0)
      }
      this.state.layout.addListener(({value}) => {this._value = value;console.log( value)});
  }
  onLayout(event) {
    const {x, y, height, width} = event.nativeEvent.layout;
  
       
        this.state.layout = new Animated.Value(width);
        this.setState({width:width});
        console.log(width)

  }
  onPress(size){
    Animated.parallel([
        
    Animated.timing(
        this.state.layout, {
        toValue: size
    }),
    Animated.timing(
        this.state.alpha, {
        toValue: 1.0,
        delay: 180
    }),
    Animated.timing(
        this.state.alpha2, {
        toValue: 0.0
    })

    ]).start();
      if (this.props.onPress!=null) this.props.onPress();
       
  }
  cancel()
  {
    Animated.parallel([
        
        Animated.timing(
            this.state.layout, {
            toValue: this.state.width
        }),
        Animated.timing(
            this.state.alpha, {
            toValue: 0.0,
            delay: 0
        }),
        Animated.timing(
            this.state.alpha2, {
            toValue: 1.0,
            delay: 180
        })
    
        ]).start();
  }
  render() {
      var size = 30;
      if (this.props.size != null ) size = this.props.size;
      var acIndi_col = "#ffffff"
      if (this.props.loadingColor!=null) acIndi_col = this.props.loadingColor;
    return (<View onLayout = {(e)=>this.onLayout(e)}style={[styles.button,{height:size}]}>
      <TouchableWithoutFeedback onPress={()=>this.onPress(size)}>
      <Animated.View   style={[styles.bgStyle,this.props.background,{width:  this.state.layout, height: size }]}>
      <Animated.View style={{opacity:this.state.alpha2}}>
          <Text style={[styles.textStyle,this.props.textstyle]}>{this.props.title}</Text>
     </Animated.View>
      <Animated.View style={{opacity:this.state.alpha,position: 'absolute', translateY: 0, }}>
      <ActivityIndicator size={size-2} color={acIndi_col} />
      </Animated.View>
      
     </Animated.View>
           

      </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bgStyle:{
   
    backgroundColor:'gray',
    justifyContent:'center',
    borderRadius:100
  },
  button: {
    width:"100%",
   alignItems:'center',
   justifyContent:'center'
  },textStyle:{
    textAlign:"center"
  }
});
