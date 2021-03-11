import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View>
      <Text style={styles.name}>MY RESUME</Text></View>
      <Image source={require('./assets/mobeen3.png')}
             style={{ width: 100, height: 100, borderRadius: 100, marginLeft: 10, marginTop: 10 }} />
      <StatusBar style="auto" />

      <View><Text style={styles.name}>Mohammad Mobeen</Text></View>

      <View><Text >About MySelf</Text></View>
      <Text>My name is Mohammad Mobeen. I am belong to Pakistan Karachi
           Now I am learning Web Graphice & Mobile App and Graphic Designing,and completed Graphic Designing, Audio, Video, and 2D Animation I have done my Diploma in Mechanical from PAK-SWISSS TRAINING CENTRE 'Karachi'
           I was worked as senior Executive QC/QA in Hinopak Motors Limited from 2001 to 2010.
            In previous i was worked in Atif Engineering Works and Pak-Swiss Training  Center in 
            Technical Department </Text>

           

            <Text style={styles.course}>Technical Courses</Text>
            <Text>
            <li>Short Course of CAM</li>
            <li> Inspection & measurement techniques </li>
            <li>Team building workshop </li>
            <li> Total quality management </li>
            <li> Time & stress management </li>
            <li> Muda </li>
            <li> Scientific problem solving </li>
            <li> Hinopak certified quality assessor </li>
            <li> Six sigma/ Process certification </li>
            <li> Leadership skill through personal & professional effectiveness </li>
            
            </Text>

            <Text style={styles.hed}>Computer Skills</Text>
            <Text>
            <li>Web Graphics & Mobile App</li> 
            <li>Graphic Designing</li>
            <li>Adobe Audio Auditio</li>
            <li>Adobe Video Premier</li>
            <li>Adobe After Effect & 2D Animation</li>
            <li>Git</li>
            <li>MS Office</li>
            </Text>

            <Text style={styles.hed}>Technical Skills</Text>

           <li>Local parts Development & inspection</li>
    <li>Development of Inspection jigs/Fixtures</li>
    <li>Prepration of Inspection Standard by drawing</li>
    <li>Final Inspection of new manufactured Vehicle </li>
    <li>Handling Field Complaints (PIR)</li>
    <li>Handling Line Complaints (QPR)</li>
    <li>Vendor Education About Safety, House Keeping at their end.</li>


    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },

  name:{

    textAlign:'center',
    fontSize: '30px'

  },

  hed:{

    fontSize:'10px'
  },

  course:{
    fontSize:'14px'
  }


});
