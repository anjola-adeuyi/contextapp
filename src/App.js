import BookList from "./components/BookList";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";


function App() {


  // const test = "hello world"
  // let isAllCap = false;

  // if (test === test.toUpperCase()) {
  //   isAllCap = true
  //   console.log(isAllCap)
  // }


  // -----------------------------

  // let p1 = new Promise((res, rej) => {
  //   res("foo");
  // })

  // let p2 = new Promise((res, rej) => {
  //   rej("bar")
  // })

  // console.log("bip")

  // p1.then(val => {
  //   console.log(val);
  //   return p2;
  // })
  // .then(val => {
  //   console.log("baz")
  // })
  // .catch(err => {
  //   console.log(err)
  // })

  // console.log("bop")



  // -----------------------------


  // class MyList extends Array {
  //   constructor(someArg) {
  //     this.someArg = [...someArg]
  //   }
  // }

  // let thisList = new MyList("foo")

  // console.log(thisList)


  // -----------------------------


  // function foo(obj) {
  //   return {
  //     a: obj.bar,
  //     b: obj.baz
  //   }
  // }

  // const {a} = foo ({bar: 27, bar:41})

  // console.log(a)

  // for (var i=0; i<5; i++) {
  //   setTimeout(function() {
  //     console.log(i);
  //   }, 100)
  // }


  // -----------------------------


  // let i = 3
  // let j = 4
  // let k = 1 // k = k+j
  // for (i=0; i<3; i++) {
  //   k += j; // k=5, j=4 - k=8, j=3 - k=10
  //   console.log("k", k, "j", j)
  //   j = j -1; //j=3      - j=2
  // }

  // console.log("k", k)
  

  

  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Header />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
