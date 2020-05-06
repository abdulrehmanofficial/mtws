import React, { useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Card,CardSection,Input,Button,Spinner} from './Common/index';
import axios from 'axios';

export default function Login({navigation}) {

const [mobile, setMobile] = useState('');
const [password, setPassword] = useState('');
const [loading, setSpinner] = useState('no');

  return (
    <Card>
        <CardSection>
        <Image
          source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
          style={{width: 200, height: 200, flex: 1,alignItems: "center"}}
        />
        </CardSection>
        <CardSection>
            <Input
                label="Mobile:"
                placeholder="Enter your mobile number"
                onChangeText={mobile => setMobile(mobile)}
                defaultValue={mobile}
              />
        </CardSection>

        <CardSection>
              <Input
                label="Password:"
                placeholder="Enter your Password"
                onChangeText={password => setPassword(password)}
                defaultValue={password}
                password={true}
              />
        </CardSection>
        <CardSection style={styles.buttonStyle}>
            {renderButton()}
        </CardSection>
    </Card>
  );

  function renderButton()
  {
    if(loading == 'yes')
    {
      return (
        <Spinner size={'small'} />
      );
    }
  
    return (
      <Button onPress={() => loginUser()}>Login</Button>
    );
  }

  function loginUser(){

    if(mobile.length === 0 || password.length === 0)
    {
        alert('empty Password');
        setSpinner('no');
        return;
    }

    setSpinner('yes');
    
    var bodyFormData = new FormData();

    bodyFormData.append('mobile',mobile);
    bodyFormData.append('password',password);

    axios.post('https://testing-dev.tk/apis/mtws/Api.php?action=checkUser',
        bodyFormData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (response) {
                if(response.data[0].status == 'true')
                {
                  navigation.replace('Home');
                }
                else{
                    setMobile('asd');
                    setPassword('asd');
                    alert('Wrong username or password');
                    setSpinner('no');
                }
            });
  }


}

const styles = {
  buttonStyle: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'pink',
  }
};
