try{
    const x = 1;
    console.log("hello");
    throw new Error("something happen");
} catch (e) {
    // mandatory
    console.log(e);
} finally {
    // optional
    // in both scenarios
    console.log("finally");
}
