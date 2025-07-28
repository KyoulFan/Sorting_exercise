function selectionSort(arr) {
    const swap = (arr, index1, index2) =>(
        ([arr[index1], arr[index2]]=[arr[index2], arr[index1]])
    );
    for(let i = 0;i<arr.length;i++){
        //Assume current element i is the lowest
        let lowest = i;
        for(let j= i+1;j<arr.length;j++){
        //compare the next element with current i, 
            if(arr[lowest]>arr[j]){//if next element is smaller, let next be the lowest
                lowest = j;
            }
        }
        if(i!==lowest) swap(arr, i, lowest);
    }
    return arr;
}

module.exports = selectionSort;