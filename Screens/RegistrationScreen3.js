import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import sha1 from 'sha1';
import {firebaseApp} from '../App'

export default class RegistrationScreen3 extends Component<{}>{
  userRef = firebaseApp.database().ref('/Users/' + this.props.navigation.state.params.hashemail2 + "/"); //this.props.naviagation.state.params.username is undefined :/ need to find workaround
  preferences = [];
  //On submit verify inputs and navigate to next registration screen
  submit = () => {
    for(var i=0; i<this.preferences.length; i++){
      this.userRef.child("interests").child(this.preferences[i]).set("");
    }
    this.props.navigation.navigate('RegistrationScreen4', {hashemail3: this.props.navigation.state.params.hashemail2});
  }

  handleSelection = (text) => {
    //Check array to see if value has already been added; if it hasn't been then write to the array using 'text' variable
    if(this.preferences.indexOf(text) < 0){
      this.preferences.push(text);
    }
  }
  //TODO: Add handlers for all buttons, in our case acting more as selectors
  render() {
    console.disableYellowBox = true;
    return (
      <ScrollView>
      <View style={styles.container}>
      <Image
        style={{width: 100, height: 100, marginTop: 40, marginBottom: 20}}
        source={{uri: 'https://user-images.githubusercontent.com/18129905/35187343-734d21b4-fdf0-11e7-8799-761570dea412.png'}}
      />
      <Text>Please select some of the issues that mean the most to you.</Text>
      <Text>(Choose as many as you would like)</Text>
      </View>
        <View style={styles.space}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Education")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Education</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Healthcare")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Healthcare</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("LGBTQIA+")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>LGBTQIA+</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Housing")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Housing</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Lifestyle")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Lifestyle</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("UNC")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>UNC</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Democratic Party")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Democratic Party</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Republican Party")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Republican Party</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Food")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Food</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Social Justice")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Social Justice</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Security")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Security</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Women's Rights")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Rights for Women</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Environment")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Environment</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.bspace}></View>
        <View style={styles.container}>
        <View style={styles.buttonz2}>
          <TouchableOpacity onPress={() => this.handleSelection("Economy")}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Economy</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.container}>
        <View style={styles.buttonz}>
          <TouchableOpacity onPress={this.submit}>
            <Text style={{fontSize: 16, textAlign: 'center'}}>Submit and Continue</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 0,
    marginBottom: 5,
  },
  space: {
    height: 2,
  },
  bspace: {
    height: 0,
  },
  space2: {
    height: 20,
  },
  userInputs: {
    marginTop: 15,
    marginBottom: 15,
  },
  buttonz: {
    height: 40,
    borderRadius: 4,
    width: 320,
    marginBottom: 30,
    backgroundColor: '#49C7E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonz2: {
    height: 29,
    borderRadius: 4,
    width: 320,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: '#c9c9c9',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
