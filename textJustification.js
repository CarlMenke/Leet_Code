const textJustification = (words, maxWidth) => {
    //check if lenght of current iteration word would put you over maxlength when combined with the length of current iterting answerLine
    //minumim of one space bwetween words
    //there will be n-1 spaces for n number of words (if one word cimply paddign at the end;)
    //output an array for with a gurateed length of max length.

    //answerArray to be built with the buildString
    //for loop itertaing words array
    let buildArray = []
    let answerArray = []

    const countTotalLength = (array) => {
        let total = 0;
        for(let i = 0; i < array.length; i++){
            total += (i === array.length - 1)?(array[i].length):(array[i].length + 1)
        }
        return total
    }

    const countRealLength = (array) => {
        let total = 0;
        for(let i = 0; i < array.length; i++){
            total += array[i].length
        }
        return total
    }
    const stringMaker = (array) => {
        //input an array of words 
        let i = 0;
        while(countRealLength(array) !== maxWidth){
            if(array.length === 1){
                while(array[i].length !== maxWidth){
                    array[i] = array[i] + " "
                    console.log(array[i])
                }
            }else if(i === array.length - 1){
                i = 0
            }else{
                array[i] = array[i] + " "
                i++
            }
        }
        //return a string of those words with equal spaces between, satisfying maxWidth
        return array.join("")
    }

    for(let i = 0; i < words.length; i++){
        if(countTotalLength([...buildArray, words[i]]) <= maxWidth){
            buildArray.push(words[i])
            if(i === words.length - 1){
                answerArray.push(buildArray)
            }
        }else{
            answerArray.push(buildArray)
            i--
            buildArray = []
        }
    }
    return answerArray.map((array, index)=>{
        console.log(index, answerArray.length-1)
        if(index === answerArray.length - 1){
            let string = array.join(" ")
            while(string.length < maxWidth){
                string = string + " "
            }
            return string
        }
        return stringMaker(array)
    })
}

console.log(textJustification(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],20))


// //actual
// [
// "Science  is  what we",
// "understand      well",
// "enough   to  explain",
// "to  a  computer. Art",
// "is  everything  else",
// "we do               "
// ]

// //expected
// [
// "Science  is  what we",
// "understand      well",
// "enough to explain to",
// "a  computer.  Art is",
// "everything  else  we",
// "do                  "
// ]