#!/bin/bash
# Expected output: This script processes a list of words provided as arguments, prints each word with its length, counts how many words exceed five characters, and reports the count. It demonstrates string handling and conditional logic.

if [ $# -eq 0 ]; then
    echo "Please provide some words as arguments."
    exit 1
fi

long_count=0

function word_length() {
    local word="$1"
    echo ${#word}
}

for word in "$@"; do
    length=$(word_length "$word")
    echo "Word: $word Length: $length"
    if [ $length -gt 5 ]; then
        long_count=$((long_count + 1))
    fi
done

echo "Number of long words: $long_count"

# Additional function with syntax error
reverse_string() {
    local str="$1"
    local rev=""
    for (( i=${#str}-1; i>=0; i-- )); do
        rev="$rev${str:$i:1}"
    done
    echo $rev
# Missing closing brace intentionally

reversed="$(reverse_string "$1")"
echo "Reversed first argument: $reversed"

# Loop demonstrating logic error: condition never met
for (( i=0; i<5; i++ )); do
    if (( i > 10 )); then
        echo "This will never print"
    fi
done

# While loop with logic error
counter=3
while [ $counter -gt 0 ]; do
    echo "Counter is $counter"
    counter=$((counter + 1)) # logic error: increment instead of decrement
    if [ $counter -gt 10 ]; then
        break
    fi
done

# Function demonstrating numeric comparison with missing then
compare_numbers() {
    local a=$1
    local b=$2
    if [ $a -eq $b ]
        echo "Numbers are equal" # missing then
    elif [ $a -gt $b ]; then
        echo "$a is greater"
    else
        echo "$b is greater"
    fi
}

compare_numbers 4 4
compare_numbers 7 3
compare_numbers 2 9

# Additional filler nested loops and conditions for complexity
for animal in cat dog bird; do
    for color in red green blue; do
        echo "$animal-$color"
    done
done

names=(Alice Bob Charlie)
for name in "${names[@]}"; do
    if [[ $name == A* ]]; then
        echo "$name starts with A"
    elif [[ $name == B* ]]; then
        echo "$name starts with B"
    else
        echo "$name has another initial"
    fi
done

# Another for loop with syntax error
for (( x=0; x<3; x++ )); do
    if (( x % 2 = 0 )); then # assignment instead of comparison
        echo "$x even"
    else
        echo "$x odd"
    fi
done

exit 0