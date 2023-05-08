const splitPrice = (price) => {
    return price.toString()
    .split("").reverse().join("")
   .replace(/(\d{3})/g,"$1 ")
   .split("").reverse().join("")
}

export default splitPrice