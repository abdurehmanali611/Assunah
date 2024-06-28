import React from 'react';
import { Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AboutUs = () => {

  const route = useRoute()

  const param1 = route.params?.image
  const param3 = route.params?.Apply


  return (
    <ImageBackground
    source={param3 == "Background" && param1 != require('../assets/admin.jpg') ? param1 : null}
    >
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Assunah TV</Text>
      <Text style={styles.subtitle}>Spreading the True Essence of Islam</Text>
      
      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.text}>
        Our primary mission is to expand the exact creed of Islam and disseminate various Islamic knowledges through engaging and informative content. We are committed to upholding the pristine teachings of Islam and safeguarding it from internal and external threats.
      </Text>

      <Text style={styles.sectionTitle}>A Story of Growth</Text>
      <Text style={styles.text}>
        From humble beginnings to becoming a leading platform for Islamic media, our journey at Assunah TV has been marked by perseverance, dedication, and a relentless pursuit of excellence. Despite facing numerous obstacles, we have continued to grow and evolve, driven by our unwavering commitment to our cause.
      </Text>

      <Text style={styles.sectionTitle}>What We Offer</Text>
      <Text style={styles.text}>
        Through our mobile app, we provide a diverse range of content, including compelling videos and enlightening podcasts, covering a wide array of topics relevant to Islam and its teachings. Whether you seek insightful discussions, educational lectures, or inspiring stories, Assunah TV is your trusted companion on your journey of spiritual enlightenment.
      </Text>

      <Text style={styles.sectionTitle}>Our Vision</Text>
      <Text style={styles.text}>
        At Assunah TV, we envision a world where the true essence of Islam is widely understood, embraced, and celebrated. Through our efforts, we strive to foster a deeper understanding of Islam and promote harmony, unity, and compassion among all people, irrespective of their backgrounds.
      </Text>

      <Text style={styles.sectionTitle}>Join Us in Our Mission</Text>
      <Text style={styles.text}>
        We invite you to join us in our mission of spreading the correct creed of Islam and preserving its authenticity for generations to come. Together, let us embark on a journey of enlightenment, empowerment, and spiritual growth. Thank you for choosing Assunah TV as your trusted source of Islamic knowledge and inspiration.
      </Text>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'grey',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default AboutUs;
