let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];



let storyWords = story.split(' ');
// console.log(story.length)

const betterWords = storyWords.filter(word => {
    return !unnecessaryWords.includes(word)
})

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
    if (word === 'really') {
        reallyCount += 1;
    } else if (word === 'very') {
        veryCount += 1;
    } else if (word === 'basically') {
        basicallyCount += 1;
    }
};

let overusedList = (reallyCount, veryCount, basicallyCount) => {
    // console.log(`The word really is used = ${reallyCount} times.`);
    // console.log(`The word very is used = ${veryCount} times.`);
    // console.log(`The word basically is used = ${basicallyCount} times.`);
};

overusedList(reallyCount, veryCount, basicallyCount);

//console.log(`Really Count = ${reallyCount}`); 
//console.log(`Very Count = ${veryCount}`);
//console.log(`Basically Count = ${basicallyCount}`);

let sentenceCount = 0;
//forEach() iterator method example
storyWords.forEach(sentence => {
    if (sentence[sentence.length - 1] === '.' ||
        sentence[sentence.length - 1] === '!') {
        sentenceCount += 1;
    }
});


//console.log(`Total number of sentences = ${sentenceCount}`);


const storyLog = (storyWords, sentenceCount, overusedList) => {
    // console.log(`There are ${storyWords.length} words in the story.`);
    // console.log(`There are ${sentenceCount} sentences in the story.`);
    overusedList(reallyCount, veryCount, basicallyCount);

};

storyLog(storyWords, sentenceCount, overusedList);

//  console.log(veryCount);
console.log(betterWords.join(' '));
    // console.log(betterWords.length);

