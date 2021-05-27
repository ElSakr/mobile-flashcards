import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import FlipCard from 'react-native-flip-card'

const Quiz = ({ navigation }) => {
    const { currentItem } = useSelector(state => state.decksReducer);
    const [isFlip, setIsFlip] = useState(false);
    const [isFlipEnd, setIsFlipEnd] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(null);
    const [incorrectAnswers, setIncorrectAnswers] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            {
                currentQuestion !== currentItem?.questions.length ?
                    <View >
                        <Text style={styles.headline}>Flip the card to show the answer!</Text>
                        <Text style={styles.sub_text}> {`${currentQuestion + 1} / ${currentItem?.questions.length}`}</Text>
                        <FlipCard style={styles.card}
                            friction={6}
                            perspective={1000}
                            flipHorizontal={true}
                            flipVertical={false}
                            flip={isFlip}
                            clickable={false}
                            onFlipEnd={(isFlipEnd) => { setIsFlipEnd(isFlipEnd) }}>
                            {/* Face Side */}
                            <View style={styles.face}>
                                <Text style={styles.face_text}>{currentItem?.questions[currentQuestion].question}</Text>
                                <Button mode="contained" style={styles.button} onPress={() => {
                                    setIsFlip(true)
                                }}>Show Answer</Button>

                            </View>
                            {/* Back Side */}
                            <View style={styles.back}>
                                <Text style={styles.face_text}>{currentItem?.questions[currentQuestion].answer}</Text>
                            </View>
                        </FlipCard>

                        {isFlipEnd &&
                            <View style={styles.actions_wrapper}>
                                <Button mode="contained" style={styles.button}
                                    onPress={() => {
                                        setCorrectAnswers(correctAnswers ? correctAnswers + 1 : 1);
                                        setCurrentQuestion(currentQuestion < currentItem?.questions.length ? currentQuestion + 1 : currentQuestion)
                                        setIsFlip(false)
                                        setIsFlipEnd(true)
                                    }}
                                >
                                    Correct
                                </Button>
                                <Button mode="outlined" style={styles.button}
                                    onPress={() => {
                                        setIncorrectAnswers(incorrectAnswers ? incorrectAnswers + 1 : 1);
                                        setCurrentQuestion(currentQuestion < currentItem?.questions.length ? currentQuestion + 1 : currentQuestion)
                                        setIsFlip(false)
                                        setIsFlipEnd(true)

                                    }}
                                >
                                    In Correct
                                </Button>
                            </View>
                        }
                    </View> :
                    <View style={styles.compelete_view}>
                        <Text style={styles.headline}>Quiz Complete</Text>
                        <Text>You Got {correctAnswers ? correctAnswers : 0} out of {currentItem?.questions.length} ({`${((correctAnswers / currentItem?.questions.length) * 100).toFixed(0)} %`})</Text>
                        <View style={styles.actions_wrapper_}>
                            <Button mode="contained" style={styles.button}
                                onPress={() => {
                                    setIncorrectAnswers(null);
                                    setCorrectAnswers(null);
                                    setCurrentQuestion(0)
                                    setIsFlip(false)
                                }}
                            >
                                RESTART QUIZ
                      </Button>
                            <Button mode="outlined" style={styles.button}
                                onPress={() => {
                                    setIncorrectAnswers(null);
                                    setCorrectAnswers(null);
                                    setCurrentQuestion(0)
                                    setIsFlip(false)
                                    navigation.navigate("Decks")
                                }}
                            >
                                BACK TO DECKs
                      </Button>
                        </View>
                    </View>

            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 100
    },
    compelete_view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },
    headline: {
        fontSize: 20,
        textAlign: 'center',
        color: "#583d72"
    },
    card: {
        backgroundColor: "#583d72",
        marginVertical: 20,
        padding: 20,
        minWidth: '90%',
        maxHeight: 450
    },
    face: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    back: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',

    },
    face_text: {
        fontSize: 25,
        color:
            "#fefecc",
    },
    main_text: {
        fontSize: 20,
    },
    sub_text: {
        fontSize: 15,
        textAlign: 'center'
    },
    actions_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 10
    }
});




export default Quiz;