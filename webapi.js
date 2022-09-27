const form = document.querySelector("#searchform");
const p = document.querySelector(".p");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  if (document.querySelector(".surahdiv")) {
    document.querySelector(".surahdiv").remove();
  }

  const div2 = document.createElement("div");
  const h1surah = document.createElement("h1");
  h1surah.classList.add("surahh1")
  div2.classList.add("surahdiv");
  document.body.append(div2);
 div2.append(h1surah)

  const searchTerm = form.elements.query.value;
  const q = searchTerm;
  const config = { params: { q: searchTerm } };
  const audio = await axios.get(`http://api.alquran.cloud/v1/quran/ar.alafasy`);

  // const res = await axios.get(`http://api.alquran.cloud/v1/surah/${q}`);

  const array =audio.data.data.surahs
  console.log(array)
let search ;
  array.forEach(element => (
  console.log(element)
  
  ));  
 
// console.log(array)
// console.log(element)


  // h1surah.innerText=res.data.data.englishName
  // // const ayahs = res.data.data.ayahs;
  // const ayah = res.data.data.ayahs
  // for (ayah of ayahs) {
  //   const p = document.createElement("p");
  //   p.innerText = ayah.text;
  //   div2.append(p);
    
  // }
// console.log(res.data);
  // console.log(res.data.data.ayahs);

  //   makeImages(res.data);
  form.elements.query.value = "";
});

// const makeImages = (shows) => {
//   for (let result of shows) {
//     const img = document.createElement("IMG");
//     if (result.show.image) {
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };
