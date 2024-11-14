let anagrama = (str1, str2) => {
    return [...str1].sort().join() === [...str2].sort().join()
    }
    console.log(anagrama("listen", "silent")); 
    console.log(anagrama("hello", "world")); 
