import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';

const PaymentPlanScreen = () => {
  const [card1Selected, setCard1Selected] = useState(false);
  const [card2Selected, setCard2Selected] = useState(false);
  const [card3Selected, setCard3Selected] = useState(false);

  const [card1Scale, setCard1Scale] = useState(new Animated.Value(1));
  const [card2Scale, setCard2Scale] = useState(new Animated.Value(1));
  const [card3Scale, setCard3Scale] = useState(new Animated.Value(1));

  const handleCardPress = (cardNumber: number) => {
    if (cardNumber === 1) {
      setCard1Selected(true);
      setCard2Selected(false);
      setCard3Selected(false);
      Animated.timing(card1Scale, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(card2Scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(card3Scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else if (cardNumber === 2) {
      setCard1Selected(false);
      setCard2Selected(true);
      setCard3Selected(false);
      Animated.timing(card1Scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(card2Scale, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(card3Scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else if (cardNumber === 3) {
      setCard1Selected(false);
      setCard2Selected(false);
      setCard3Selected(true);
      Animated.timing(card1Scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(card2Scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(card3Scale, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={
            card1Selected ? [styles.card, styles.selectedCard] : styles.card
          }
          onPress={() => handleCardPress(1)}>
          <Animated.View
            style={[styles.cardContent, {transform: [{scale: card1Scale}]}]}>
            <Text style={styles.cardTitle}>Middle Class Plan</Text>
            <Text style={styles.cardPrice}>Pkr. 5000/year</Text>
            {/* <Text style={styles.tagLine}>If you don't have time</Text> */}
            
            <Text style={styles.cardDescription}>
              Assign a Match Maker to you, Which will be directly in connect
              with you.
            </Text>
            <Text style={styles.cardDescription}>
              Match Maker will give you its services, Until a year complete.
            </Text>
           
            <TouchableOpacity onPress={() => {}} style={styles.subscribeBtn3}>
              <Text style={styles.text3}>Subscribe</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            card2Selected ? [styles.card, styles.selectedCard] : styles.card
          }
          onPress={() => handleCardPress(2)}>
          <Animated.View
            style={[styles.cardContent, {transform: [{scale: card2Scale}]}]}>
            <Text style={styles.cardTitle}>Upper Class Plan</Text>
            <Text style={styles.cardPrice}>Pkr. 15000/year</Text>
          
            <Text style={styles.cardDescription}>
              Assign a Match Maker to you, Which will be directly in connect
              with you.
            </Text>
            <Text style={styles.cardDescription}>
              Match Maker will give you its services, Until a year complete.
            </Text>
            <TouchableOpacity onPress={() => {}} style={styles.subscribeBtn3}>
              <Text style={styles.text3}>Subscribe</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            card3Selected ? [styles.card, styles.selectedCard] : styles.card
          }
          onPress={() => handleCardPress(3)}>
          <Animated.View
            style={[styles.cardContent, {transform: [{scale: card3Scale}]}]}>
            <Text style={styles.cardTitle}>Elite Class Plan</Text>
            <Text style={styles.cardPrice}>Pkr. 30,000/year</Text>
          
            <Text style={styles.cardDescription}>
              Assign a Match Maker to you, Which will be directly in connect
              with you.
            </Text>
            <Text style={styles.cardDescription}>
              Match Maker will give you its services, Until a year complete.
            </Text>
            <TouchableOpacity onPress={() => {}} style={styles.subscribeBtn3}>
              <Text style={styles.text3}>Subscribe</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    marginBottom:120
  },

  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
  card: {
    width: 300,
    height: 440,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  falseCard: {
    opacity: 0.5,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#F6F1F1',
  },
  cardContent: {
    alignItems: 'center',

    paddingLeft: 20,
    paddingRight: 20,
  },
  cardTitle: {
    fontSize: 24,
    color: '#0096c7',
    fontFamily: 'serif',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardPrice: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardDescription: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Roboto',

    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    letterSpacing: 0.5,
    lineHeight: 25,
  },
  subscribeBtn3: {
    marginTop: 50,
    width: 150,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#0096c7',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text3: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  tagLine: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight:'700',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    letterSpacing: 1,
    lineHeight: 20,
    marginBottom:10
  },
});

export default PaymentPlanScreen;
