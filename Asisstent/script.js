import speech_recognition as sr
import pyttsx3
from transformers import pipeline

# Initialisierung des Spracherkenners und des Sprachsynthesizers
recognizer = sr.Recognizer()
engine = pyttsx3.init()
question_answerer = pipeline("question-answering", model="deepset/gbert-base-german-cased")

# Funktion zum Erfassen der Spracheingabe
def listen():
    with sr.Microphone() as source:
        print("Ich höre zu...")
        audio = recognizer.listen(source)

    try:
        print("Spracheingabe wird erkannt...")
        text = recognizer.recognize_google(audio, language="de-DE")
        print(f"Erkannter Text: {text}")
        return text
    except sr.UnknownValueError:
        print("Spracheingabe konnte nicht erkannt werden.")
    except sr.RequestError:
        print("Keine Verbindung zum Spracherkennungsdienst.")

    return ""

# Funktion zur Verarbeitung der Eingabe
def process_input(input):
    # TODO: Implementiere die Logik zur Verarbeitung der Eingaben und zur Beantwortung von Fragen
    pass

# Funktion zum Abspielen der Antwort
def speak(text):
    print(f"Assistent: {text}")
    engine.say(text)
    engine.runAndWait()

# Hauptprogrammschleife
while True:
    input = listen()
    process_input(input)
