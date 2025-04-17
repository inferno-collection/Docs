---
sidebar_position: 40
---

# Text-to-Speech

Text-to-Speech, or the [Station Alert - Voice Turnout](https://store.inferno-collection.com/package/station-alert-addon) as it is referred to on the [store](https://store.inferno-collection.com/), is a paid Addon which adds text-to-speech reading of messages sent in SA.  

## How to configure TTS

See [here](../config.md#voice-turnout-addon-values-explained).

## TTS Tips

When creating messages for use with TTS, here's a few tips we have to get the best output:

### 1. Use commas and periods
If you do not use commas (`,`) and/or periods (`.`), the TTS will not "take a breath" in places a human would.
Strategically placed commas and periods can make a message sound 10x better.  
Consider the examples below:

#### No commas or periods
```
Ladder 7 Rescue 7 Carson Avenue intersection of Davis Avenue Strawberry Los Santos Vehicle Accident possible persons trapped Postal 0 9 0.
```

<audio controls>
  <source src={require('./assets/bad-period.mp3').default} type="audio/mp3"></source>
Your browser does not support the audio element.
</audio>

#### With commas and periods
```
Ladder 7, Rescue 7. Carson Avenue intersection of Davis Avenue, Strawberry, Los Santos. Vehicle Accident, possible persons trapped. Postal 0 9 0.
```

<audio controls>
  <source src={require('./assets/good-period.mp3').default} type="audio/mp3"></source>
Your browser does not support the audio element.
</audio>

***

### 2. Use spaces
Especially in numbers, spaces (` `) force the TTS to read out letter-by-letter.  
Consider the examples below:

#### No spaces
```
Ladder 7, Rescue 7. Vehicle Accident. Map page 50, reference 754719. Postal 175.
```

<audio controls>
  <source src={require('./assets/bad-spaces.mp3').default} type="audio/mp3"></source>
Your browser does not support the audio element.
</audio>

#### With spaces
```
Ladder 7, Rescue 7. Vehicle Accident. Map page 50, reference 7 5 4 7 1 9. Postal 1 7 5.
```

<audio controls>
  <source src={require('./assets/good-spaces.mp3').default} type="audio/mp3"></source>
Your browser does not support the audio element.
</audio>

***

### 3. Avoid abbreviations
Generally, the TTS will read exactly what you provide it; it doesn't understand abbreviations.  
Where possible, use full-words, or logical shortenings, not abbreviation.  

***

### 4. Use phonetics
If you ask the TTS to read "D", it'll give you "D" ("dee").  
You probably wanted "Delta" or "David" - you need to write this instead!
