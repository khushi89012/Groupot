# Groupot Assignment 

### levenshteinDistanc 
Informally, the Levenshtein distance between two words is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one word into the other.

### Dice Coefficient 
The Dice's coefficient formula
Once the n-grams have been established for two strings being compared, the calculation is completed using the following formula: 2 x the number of shared n-grams / the total number of n-grams in both strings.


## ** Compute Similarity Between Two Strings**
A program to compute the similarity between two strings

### Description
Implement a code which calculates a similarity value between two strings. The value should be between 0 and 1 which indicates the degree of similarity between the two strings. The code should calculate two types of similarity using levenshteinDistance and Dice's coefficient.

#### **Sample Input**
	input: "MAN","WOMAN"
   

#### **Sample Output**
	levenshtein distance Output: 2
    Dice's coefficient Output : 0

#### **Sample Explanation**
Self explanatory.

#### **Expected Time Complexity**
    Dice's coefficient : O(n)
    levenshtein distance : O(mn)
    Total : O(mn)
