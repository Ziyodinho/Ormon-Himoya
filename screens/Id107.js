import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Text,  Linking  } from "react-native";

const About = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Dastur haqida",
      // Здесь вы можете настроить другие параметры панели сверху, например, цвет фона или кнопки
    });
  }, [navigation]);
  const handleTelegramLink = (tlink) => {
    Linking.openURL(tlink);
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
      <Text></Text>
  <Text style={styles.buttonText}>
    <Text style={{ fontWeight: 'bold'}}>“O‘RMON-HIMOYA” MA’LUMOT-MASLAHAT TIZIMI DASTURI HAQIDA MA`LUMOT{'\n\n'}</Text>
    Ushbu dastur ma’lumotlar bazasi asosida yaratilgan bo‘lib, O‘rmon xo‘jaligi, qishloq xo‘jaligi hamda O‘simliklarni himoya qilish sohasi talaba, magistr, doktorant, professor-o‘qituvchilari, fermer va klasster xo‘jaliklari o‘simliklarni himoya qilish mutaxassislari foydalanishlari uchun mo‘ljallangan. Tizimdan foydalanganda “O‘rmon” fondining ko‘rki bo‘lgan manzarali va igna bargli o‘simliklarda uchrab zarar keltiruvchi assosiy zararkunandalari va kasalliklari bioekologiyasi hamda qarshi kurash choralarri haqida ham to‘la ma’lumotga ega bo‘ladi.{'\n\n'}
    Dastur mualliflari:{'\n\n'}
    <Text style={{ fontWeight: 'bold' }}>Yaxyayev Xashim Kasimovich</Text>{'\n'} – O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti, q.x.f.d., professor,{'\n'} 
    {'\n'}hashimkasim@yandex.uz{'\n\n'}
    <Text style={{ fontWeight: 'bold' }}>Abdullaeva Xuriyatxon Zafarbekovna</Text>{'\n'} – Andion qishloq xo‘jaligi va agrotexnologiyalar instituti, q.x.f.f.d.(PhD), dotsent,{'\n'}
    {'\n'} xuriyat2686@mail.ru{'\n\n'}
    <Text style={{ fontWeight: 'bold' }}>Nafasov Zafar Nurmahmadovich</Text>{'\n'} – O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti laboratoriya mudiri, q.x.f.f.d.(PhD), katta ilmiy-hodim.{'\n'}
    {'\n'}zafarnafasov@mail.ru{'\n\n'}
     <TouchableOpacity onPress={() => handleTelegramLink('https://t.me/missAXZ')}>
      <Text style={{ fontWeight: 'bold',fontSize: 18, }}>t.me/missAXZ</Text>
    </TouchableOpacity>
    {'\n'}
    {'\n'}
    <Text style={{ fontWeight: 'bold' }}>Toshpulatov Ziyodullokh Sodik ugli</Text>{'\n'} – Web va mobil dasturchi, dizayner {'\n'}
    {'\n'} <TouchableOpacity onPress={() => handleTelegramLink('https://t.me/Ziyodinho')}>
      <Text style={{ fontWeight: 'bold',fontSize: 18, }}>t.me/Ziyodinho</Text>
    </TouchableOpacity>
    {'\n'}
  </Text>
</ScrollView>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'scroll',
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor:"#eee",
    
    textAlign: 'center',
    lineHeight: 'normal',
    maxWidth:'70%',
    marginHorizontal: 'auto',

  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default About;
