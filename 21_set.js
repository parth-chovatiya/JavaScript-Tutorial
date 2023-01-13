const st = new Set();

st.add(1);
st.add(1);
st.add(2);
st.add(3);
st.add(6);
st.add(4);
st.add(2);

const arr = new Array(st);
console.log("arr ", arr);

const st1 = new Set([1, 2, 3, 4, 3, 2]);
console.log("st1 ", st1);

console.log(st);
for (let element of st) {
  console.log(element);
}

// for/in loop will not going to work as for/in loop iterates elements by index
for (let idx in st) {
  console.log(st[idx]);
}

st.forEach((ele) => console.log(ele));

console.log("Size: ", st.size);
st.delete(2);
console.log("Size: ", st.size);
st.clear();
